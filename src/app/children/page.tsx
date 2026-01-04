'use client';
import React, { useState } from 'react';

// تعريف المكونات داخلياً لتجنب أخطاء "Module not found" في فيرسل مؤقتاً
const PharaohAvatar = ({ src }: { src?: string }) => (
  <div className="w-full h-full flex items-center justify-center bg-slate-800 text-amber-500">
    {src ? <img src={src} alt="Avatar" className="w-full h-full object-cover" /> : "🏺"}
  </div>
);

export default function ImperialAcademyMain() {
  const [activeTab, setActiveTab] = useState('challenges');

  return (
    <div className="min-h-screen bg-[#050a15] text-white font-sans selection:bg-amber-500/30" dir="rtl">
      
      {/* هيدر الأكاديمية - الهوية الإمبراطورية */}
      <header className="p-10 border-b border-amber-500/10 bg-[#0a0f1a]/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-black text-amber-500 tracking-tighter shadow-amber-500/20 shadow-sm">أكاديمية يالا مصري</h1>
            <p className="text-slate-500 text-sm mt-1 font-bold">رؤية الملكة نفرتيتي للتميز التعليمي</p>
          </div>
          <div className="hidden md:flex gap-4">
             <button onClick={() => setActiveTab('challenges')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'challenges' ? 'bg-amber-500 text-black' : 'text-amber-500 border border-amber-500/20'}`}>التحديات</button>
             <button onClick={() => setActiveTab('lessons')} className={`px-6 py-2 rounded-full font-bold transition-all ${activeTab === 'lessons' ? 'bg-amber-500 text-black' : 'text-amber-500 border border-amber-500/20'}`}>الدروس</button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6 md:p-12">
        
        {/* نظام التحديات - يطابق طلبك للتحدي المباشر */}
        {activeTab === 'challenges' && (
          <section className="animate-in fade-in duration-700">
            <div className="bg-[#0f172a] rounded-[3.5rem] p-12 border-2 border-amber-500/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-30"></div>
              
              <div className="text-center mb-12">
                <span className="inline-block p-4 bg-amber-500/5 rounded-full text-4xl mb-4">🏛️</span>
                <h2 className="text-3xl font-black text-white">تحدي المواقف: السفر وميدان التحرير</h2>
                <p className="text-amber-500/70 font-bold mt-2 italic">اطلب من السائق بلهجة ملكية صحيحة</p>
              </div>

              <div className="bg-white/5 p-8 rounded-[2rem] border border-white/5 mb-8 text-center">
                <p className="text-2xl font-medium mb-2 italic">"أنا عايز أروح ميدان التحرير"</p>
                <p className="text-slate-500">I want to go to Tahrir Square</p>
              </div>

              <div className="grid gap-4 max-w-2xl mx-auto">
                {['1. أنا عايز الفندق', '2. خدني الفندق', '3. أنا عايز أروح الفندق'].map((choice, index) => (
                  <button key={index} className="p-6 bg-slate-900/50 border-2 border-slate-800 rounded-3xl text-xl font-bold hover:border-amber-500 hover:bg-amber-500/5 transition-all text-right flex justify-between items-center group">
                    <span>{choice}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-500">◀</span>
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* قاعة الدروس - نظام الإطلاق المبدئي */}
        {activeTab === 'lessons' && (
          <section className="grid gap-8 animate-in slide-in-from-bottom duration-700">
            <div className="bg-[#0f172a] p-10 rounded-[3rem] border border-white/5 flex flex-col md:flex-row items-center gap-10">
              <div className="w-40 h-40 rounded-full border-4 border-amber-500/20 p-2">
                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl shadow-amber-500/10">
                  <PharaohAvatar src="/images/lesson1.jpg" />
                </div>
              </div>
              <div className="flex-grow text-center md:text-right">
                <h3 className="text-4xl font-black mb-3">قاعة الدروس</h3>
                <p className="text-amber-500 text-xl font-bold mb-6">يتم الآن تجهيز "رحلة نفرتيتي" المحدثة...</p>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                   <div className="bg-amber-500 h-full w-3/4 shadow-[0_0_15px_rgba(245,158,11,0.8)] animate-pulse"></div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="p-12 text-center text-slate-700 font-bold border-t border-white/5 mt-20">
        <p>الأكاديمية الملكية - الإصدار المستقل v2.0</p>
      </footer>
    </div>
  );
}
