'use client';
import React, { useState } from 'react';

export default function YallaMasryAcademy() {
  const [activeTab, setActiveTab] = useState('challenges');
  const [score, setScore] = useState(0);

  const handleChallenge = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 10);
      alert('🏰 أحسنتِ يا جلالة الملكة! إجابة ملكية صحيحة (+10 نقاط)');
    } else {
      alert('⚠️ حاول مرة أخرى، اللهجة المصرية تحتاج دقة ملكية');
    }
  };

  return (
    <div className="min-h-screen bg-[#050a15] text-white p-8">
      {/* رأس الصفحة - يطابق رؤية نفرتيتي */}
      <header className="text-center border-b border-amber-500/20 pb-6 mb-10">
        <h1 className="text-4xl font-black text-amber-500 mb-2">أكاديمية يالا مصري 🏺</h1>
        <p className="text-slate-400 font-bold">لوحة التحكم الإمبراطورية للملكة نفرتيتي</p>
        <div className="mt-4 inline-block bg-amber-500/10 px-6 py-2 rounded-full border border-amber-500/50">
          <span className="text-amber-500 font-bold">نقاط الخبرة: {score} XP 🪙</span>
        </div>
      </header>

      {/* أزرار التنقل - تعمل الآن! */}
      <nav className="flex justify-center gap-4 mb-12">
        <button onClick={() => setActiveTab('challenges')} className={`px-8 py-3 rounded-2xl font-bold transition-all ${activeTab === 'challenges' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'bg-slate-900 text-amber-500'}`}>
          ⚔️ التحديات
        </button>
        <button onClick={() => setActiveTab('lessons')} className={`px-8 py-3 rounded-2xl font-bold transition-all ${activeTab === 'lessons' ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'bg-slate-900 text-amber-500'}`}>
          📖 قاعة الدروس
        </button>
      </nav>

      {/* محتوى التحديات الملكي */}
      {activeTab === 'challenges' && (
        <div className="max-w-2xl mx-auto bg-[#0a0f1a] p-10 rounded-[3rem] border-2 border-amber-500/10 shadow-2xl text-center">
          <h2 className="text-2xl font-bold mb-6 italic underline decoration-amber-500">تحدي ميدان التحرير 🚕</h2>
          <p className="text-xl mb-8 font-medium">"أنا عايز اروح ميدان التحرير"</p>
          <div className="grid gap-4">
            <button onClick={() => handleChallenge(false)} className="p-5 bg-slate-800 rounded-2xl hover:bg-slate-700 transition-all font-bold italic">1. انا عايز الفندق</button>
            <button onClick={() => handleChallenge(true)} className="p-5 bg-amber-500 text-black rounded-2xl hover:scale-105 transition-all font-black">2. انا عايز اروح الفندق</button>
          </div>
        </div>
      )}

      {/* محتوى الدروس - نظام الدردشة المبدئي */}
      {activeTab === 'lessons' && (
        <div className="max-w-3xl mx-auto bg-[#0a0f1a] p-12 rounded-[3rem] border border-white/5 text-center">
           <h2 className="text-3xl font-black mb-4">قاعة الدروس الملكية</h2>
           <p className="text-amber-500 font-bold animate-pulse">يتم الآن ربط "رحلة نفرتيتي" المحدثة بذكاء جميناي... 🤖</p>
           <div className="mt-10 p-6 bg-white/5 rounded-2xl border border-white/5 italic text-slate-400">
             "اللغة هي مرآة الروح، وعندما تتعلمي المصرية برقي، فأنتِ تعكسين للعالم جمال جوهركِ وثقافتكِ"
           </div>
        </div>
      )}
    </div>
  );
}
