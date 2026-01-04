'use client';
import React, { useState } from 'react';

// مكون الأفاتار مدمج داخلياً لمنع أخطاء المسارات
const PharaohAvatar = ({ label }: { label: string }) => (
  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800 border-2 border-amber-500/20 rounded-full overflow-hidden">
    <span className="text-4xl">🏺</span>
    <span className="text-[10px] text-amber-500 mt-1 font-bold">{label}</span>
  </div>
);

export default function YallaMasryAcademy() {
  const [view, setView] = useState('challenges');

  return (
    <div className="min-h-screen bg-[#050a15] text-white font-sans selection:bg-amber-500/30" dir="rtl">
      
      {/* هيدر الأكاديمية الإمبراطوري */}
      <header className="p-6 border-b border-amber-500/10 bg-[#0a0f1a] sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-black text-amber-500">أكاديمية يالا مصري 🏺</h1>
          <nav className="flex gap-4">
            <button onClick={() => setView('challenges')} className={`px-4 py-2 rounded-xl text-sm font-bold ${view === 'challenges' ? 'bg-amber-500 text-black' : 'text-slate-400 hover:text-amber-500'}`}>التحديات الملكية</button>
            <button onClick={() => setView('lessons')} className={`px-4 py-2 rounded-xl text-sm font-bold ${view === 'lessons' ? 'bg-amber-500 text-black' : 'text-slate-400 hover:text-amber-500'}`}>قاعة الدروس</button>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 pt-12">
        
        {/* نظام التحديات - كما في الصور التي أرسلتِها */}
        {view === 'challenges' && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-black italic underline decoration-amber-500/50 underline-offset-8">تحديات الأكاديمية الملكية</h2>
              <div className="flex justify-center items-center gap-2 text-xl font-bold">
                <span>تحدي السفر: ميدان التحرير</span>
                <span className="text-2xl">🚕</span>
              </div>
            </div>

            <div className="bg-[#0f172a] rounded-[2.5rem] p-8 border border-white/5 shadow-2xl text-center space-y-6">
              <div className="space-y-2">
                <p className="text-2xl font-bold text-white">"أنا عايز اروح ميدان التحرير"</p>
                <p className="text-slate-500 italic">I want to go to Tahrir Square</p>
                <p className="text-amber-500 font-bold mt-4">اطلب من سائق التاكسي يوديك الفندق</p>
              </div>

              <div className="grid gap-3 max-w-lg mx-auto">
                <button className="p-4 bg-slate-800 hover:bg-amber-500 hover:text-black rounded-2xl font-bold transition-all border border-white/5">1. انا عايز الفندق</button>
                <button className="p-4 bg-slate-800 hover:bg-amber-500 hover:text-black rounded-2xl font-bold transition-all border border-white/5">2. خدني الفندق</button>
                <button className="p-4 bg-amber-500 text-black rounded-2xl font-black shadow-lg shadow-amber-500/20">3. انا عايز اروح الفندق</button>
              </div>

              <div className="pt-6">
                <p className="text-green-400 font-black text-xl flex items-center justify-center gap-2">
                  <span>🏰</span> أحسنت يا بطل النيل! إجابة ملكية صحيحة
                </p>
              </div>
            </div>
          </div>
        )}

        {/* نظام الدروس - الإطلاق المبدئي */}
        {view === 'lessons' && (
          <div className="space-y-10 animate-in slide-in-from-bottom duration-500">
            <div className="bg-[#0f172a] p-12 rounded-[3rem] border-2 border-amber-500/10 text-center relative overflow-hidden">
               <h2 className="text-5xl font-black mb-6">قاعة الدروس</h2>
               <p className="text-amber-500 text-2xl font-bold animate-pulse">يتم تحميل "رحلة نفرتيتي" المحدثة...</p>
               <div className="mt-12 w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-2/3 shadow-[0_0_20px_rgba(245,158,11,1)]"></div>
               </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
               <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 opacity-50 cursor-not-allowed">
                  <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-4">🔒</div>
                  <h3 className="text-xl font-bold">وحدات الانغماس الثقافي</h3>
                  <p className="text-sm text-slate-500 mt-2 font-medium italic">أكمل التحديات لفتح المحتوى</p>
               </div>
               <div className="bg-gradient-to-br from-amber-500/20 to-transparent p-8 rounded-[2rem] border border-amber-500/20">
                  <div className="w-12 h-12 bg-amber-500 text-black rounded-full flex items-center justify-center mb-4 font-black">1</div>
                  <h3 className="text-xl font-bold">الشهادة الملكية</h3>
                  <p className="text-sm text-amber-500/70 mt-2 font-medium italic">مسارك التعليمي يبدأ من هنا</p>
               </div>
            </div>
          </div>
        )}
      </main>

      <footer className="p-10 text-center text-slate-700 font-bold border-t border-white/5 mt-20">
        <p>أكاديمية يالا مصري - الإصدار الملكي 2.0</p>
      </footer>
    </div>
  );
}
