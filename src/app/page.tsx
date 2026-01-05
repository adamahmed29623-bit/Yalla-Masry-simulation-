"use client";

import React, { useState, useEffect, useRef } from 'react';

/**
 * Nefertiti Royal Academy - Global Edition
 * Supports Arabic, English, and French for international students.
 * Integrated with Gemini AI for Voice Analysis.
 */

const GEMINI_API_KEY = ""; // 👈 ضعي مفتاحكِ هنا لتفعيل الذكاء الاصطناعي العالمي

const TRANSLATIONS = {
  ar: {
    welcome: "مرحباً بكِ في عصر الذكاء الملكي",
    subtitle: "نظام الأكاديمية مجهز لاستقبال طلاب العلم من كل أنحاء العالم.",
    enter: "دخول المحاكاة",
    points: "النقاط الملكية",
    challenge: "التحدي الحالي",
    listen: "اسمعي النطق الملكي",
    recording: "جيمناي يحلل نبرة صوتكِ الآن...",
    mic_instruction: "اضغطي باستمرار للتحدث",
    next: "المهمة التالية",
    status: "متصل بالذكاء الاصطناعي"
  },
  en: {
    welcome: "Welcome to the Era of Royal Intelligence",
    subtitle: "The Academy system is ready to welcome students from all over the world.",
    enter: "Enter Simulation",
    points: "Royal Points",
    challenge: "Current Challenge",
    listen: "Listen to Royal Pronunciation",
    recording: "Gemini is analyzing your tone now...",
    mic_instruction: "Hold to Speak",
    next: "Next Mission",
    status: "AI ACTIVE"
  },
  fr: {
    welcome: "Bienvenue dans l'ère de l'intelligence royale",
    subtitle: "Le système de l'Académie est prêt à accueillir des étudiants du monde entier.",
    enter: "Entrer في la Simulation",
    points: "Points Royaux",
    challenge: "Défi Actuel",
    listen: "Écoutez la prononciation royale",
    recording: "Gemini analyse votre voix...",
    mic_instruction: "Maintenir pour parler",
    next: "Mission Suivante",
    status: "IA ACTIVE"
  }
};

export default function App() {
  const [lang, setLang] = useState('ar');
  const [step, setStep] = useState(0);
  const [points, setPoints] = useState(0);
  const [view, setView] = useState('intro');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [audioLevel, setAudioLevel] = useState(0);
  
  const audioContextRef = useRef(null);
  const animationFrameRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const t = TRANSLATIONS[lang];

  const locations = [
    {
      id: "airport",
      title: lang === 'ar' ? "مطار القاهرة" : (lang === 'en' ? "Cairo Airport" : "Aéroport du Caire"),
      phrase: "مساء الخير، أنا جاية في زيارة سياحية للأقصر وأسوان.",
      bg: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1200",
      icon: "✈️"
    },
    {
      id: "taxi",
      title: lang === 'ar' ? "التاكسي الأبيض" : (lang === 'en' ? "White Taxi" : "Taxi Blanc"),
      phrase: "يا أسطى، وسط البلد لو سمحت، وشغّل العداد.",
      bg: "https://images.unsplash.com/photo-1552035411-20942e5668d2?q=80&w=1200",
      icon: "🚕"
    }
  ];

  // دالة النطق الصوتي متعدد اللغات
  const speakWithGemini = async (text) => {
    if (!GEMINI_API_KEY) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang === 'ar' ? 'ar-EG' : (lang === 'en' ? 'en-US' : 'fr-FR');
      window.speechSynthesis.speak(utterance);
      return;
    }

    try {
      setIsSpeaking(true);
      const voiceName = lang === 'ar' ? "Kore" : (lang === 'en' ? "Puck" : "Charon");
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: text }] }],
          generationConfig: {
            responseModalities: ["AUDIO"],
            speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voiceName } } }
          }
        })
      });

      const result = await response.json();
      const audioData = result.candidates[0].content.parts[0].inlineData.data;
      const audioBlob = b64toBlob(audioData, 'audio/wav');
      const audio = new Audio(URL.createObjectURL(audioBlob));
      audio.onended = () => setIsSpeaking(false);
      audio.play();
    } catch (err) {
      setIsSpeaking(false);
    }
  };

  const b64toBlob = (b64, type) => {
    const bin = atob(b64);
    const buf = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) buf[i] = bin.charCodeAt(i);
    return new Blob([buf], { type });
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setIsRecording(true);
      setFeedback(t.recording);

      const audioContext = new AudioContext();
      const analyser = audioContext.createAnalyser();
      const source = audioContext.createMediaStreamSource(stream);
      source.connect(analyser);
      audioContextRef.current = audioContext;
      
      const updateVolume = () => {
        const data = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(data);
        setAudioLevel(data.reduce((a, b) => a + b) / data.length);
        animationFrameRef.current = requestAnimationFrame(updateVolume);
      };
      updateVolume();

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];
      mediaRecorder.ondataavailable = (e) => audioChunksRef.current.push(e.data);
      mediaRecorder.onstop = () => analyzeWithGemini(stream);
      mediaRecorder.start();
      setTimeout(() => mediaRecorder.stop(), 3500);
    } catch (err) {
      setFeedback("Error: Microphone access denied");
    }
  };

  const analyzeWithGemini = async (stream) => {
    setIsRecording(false);
    setAudioLevel(0);
    stream.getTracks().forEach(t => t.stop());

    if (!GEMINI_API_KEY) {
      setFeedback(lang === 'ar' ? "رائع!" : "Excellent!");
      setPoints(p => p + 50);
      return;
    }

    const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
    const reader = new FileReader();
    reader.readAsDataURL(audioBlob);
    reader.onloadend = async () => {
      const base64Audio = reader.result.split(',')[1];
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${GEMINI_API_KEY}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{
              parts: [
                { text: `Analyze this audio. Language: ${lang}. Evaluate the Egyptian dialect pronunciation if applicable, or general fluency. Be encouraging as a royal tutor. Keep it short.` },
                { inlineData: { mimeType: "audio/webm", data: base64Audio } }
              ]
            }]
          })
        });
        const data = await response.json();
        setFeedback(data.candidates?.[0]?.content?.parts?.[0]?.text || "Royal work!");
        setPoints(p => p + 100);
      } catch (err) { setFeedback("Well done!"); }
    };
  };

  return (
    <div className={`min-h-screen bg-[#050505] text-white font-sans ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Navbar with Language Switcher */}
      <nav className="p-6 bg-black/80 border-b border-amber-500/20 flex justify-between items-center sticky top-0 z-50 backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-xl">👸</div>
          <div>
            <h1 className="text-lg font-black text-amber-500 leading-none">NEFERTITI ACADEMY</h1>
            <span className="text-[10px] opacity-50">{t.status}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <select 
            value={lang} 
            onChange={(e) => setLang(e.target.value)}
            className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-sm outline-none focus:border-amber-500"
          >
            <option value="ar" className="text-black">العربية</option>
            <option value="en" className="text-black">English</option>
            <option value="fr" className="text-black">Français</option>
          </select>
          <div className="text-right">
            <p className="text-[9px] text-amber-500 font-bold uppercase">{t.points}</p>
            <p className="text-xl font-black">{points}</p>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto p-6 md:p-12">
        {view === 'intro' ? (
          <div className="text-center py-20 space-y-10">
            <h2 className="text-5xl md:text-8xl font-black text-amber-500 tracking-tighter">{t.welcome}</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">{t.subtitle}</p>
            <button 
              onClick={() => setView('sim')} 
              className="px-12 py-5 bg-amber-500 text-black text-xl font-bold rounded-2xl hover:scale-105 transition-all shadow-[0_0_40px_rgba(245,158,11,0.3)]"
            >
              {t.enter}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-square md:aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group">
              <img src={locations[step].bg} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <span className="text-5xl mb-4 block">{locations[step].icon}</span>
                <h3 className="text-3xl font-black">{locations[step].title}</h3>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/10 space-y-8">
              <div className="space-y-4">
                 <h4 className="text-amber-500 font-bold uppercase text-xs tracking-widest">{t.challenge}</h4>
                 <p className="text-3xl font-bold leading-tight italic">"{locations[step].phrase}"</p>
                 <button 
                  onClick={() => speakWithGemini(locations[step].phrase)} 
                  className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
                 >
                    <span className="text-2xl">{isSpeaking ? "⏳" : "🔊"}</span>
                    <span className="font-bold underline underline-offset-4">{t.listen}</span>
                 </button>
              </div>

              <div className="flex flex-col items-center gap-6 py-8 bg-black/40 rounded-3xl border border-white/5">
                <div className="relative">
                   <div 
                    className="absolute inset-0 bg-amber-500/30 rounded-full blur-xl transition-all duration-75" 
                    style={{ transform: `scale(${1 + audioLevel/40})`, opacity: isRecording ? 1 : 0 }}
                   ></div>
                   <button 
                    onMouseDown={startRecording}
                    className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-2xl transition-all ${isRecording ? 'bg-red-500' : 'bg-amber-500 hover:scale-105'}`}
                   >
                     {isRecording ? '⏹️' : '🎤'}
                   </button>
                </div>
                <div className="text-center px-4">
                  <p className="text-amber-500 font-bold min-h-[1.5rem]">{feedback}</p>
                  <p className="text-xs text-white/30 mt-2 uppercase">{t.mic_instruction}</p>
                </div>
              </div>

              <button 
                onClick={() => step < locations.length - 1 ? setStep(s => s+1) : setView('intro')}
                className="w-full py-4 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-all border border-white/10"
              >
                {t.next}
              </button>
            </div>
          </div>
        )}
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&family=Space+Grotesk:wght@400;700&display=swap');
        body { font-family: 'Cairo', 'Space Grotesk', sans-serif; }
        .rtl { direction: rtl; }
        .ltr { direction: ltr; }
      `}</style>
    </div>
  );
}
