'use client';
import React, { useState } from 'react';

export default function ImperialAcademyLaunch() {
  const [tab, setTab] = useState('challenges');

  // مكوّن الأيقونات الملكية لضمان عدم حدوث خطأ في المسارات
  const CrownIcon = () => <span className="text-2xl">👑</span>;
  const LessonIcon = () => <span className="text-2xl">📖</span>;

  return (
    <div className="min-h-screen bg-[#050a15] text-white font-sans selection:bg-amber-500/30 text-center" dir="rtl">
      
      {/* هيدر الأكاديمية الملكية - مطابق لهويتك */}
      <header className="p-8 border-b border-amber-500/10 bg-[#0a0f1a] shadow-2xl">
        <h1 className="text-4xl font-black text-amber-500 mb-2">أكاديمية يالا مصري 🏺</h1>
        <p className="text-slate-500 font-bold">الإصدار المستقل - برعاية الملكة نفرتيتي</p>
        
        <nav className="flex justify-center gap-6 mt-8">
          <button onClick={() => setTab('challenges')} className={`px-8 py-3 rounded-2xl font-black transition-all ${tab === 'challenges' ? 'bg-amber-500 text-black scale-110 shadow-lg shadow-amber-500/20' : 'bg-slate-900 text-amber-500 border border-amber-500/10'}`}>
            التحديات الملكية
          </button>
          <button onClick={() => setTab('lessons')} className={`px-8 py-3 rounded-2xl font-black transition-all ${tab === 'lessons' ? 'bg-amber-500 text-black scale-110 shadow-lg shadow-amber-500/20' : 'bg-slate-900 text-amber-500 border border-amber-500/10'}`}>
            قاعة الدروس
          </button>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto p-6 mt-10">
        
        {/* نظام التحديات - كما في صورتك تماماً */}
        {tab === 'challenges' && (
          <div className="bg-[#111827] rounded-[3rem] p-12 border-2 border-amber-500/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in fade-in duration-700">
            <div className="mb-10">
              <h2 className="text-3xl font-black mb-4 underline decoration-amber-500 underline-offset-8">تحدي ميدان التحرير 🚕</h2>
              <p className="text-amber-500 font-bold italic text-xl">اطلب من السائق الذهاب للفندق بلهجة ملكية</p>
            </div>

            <div className="bg-slate-900/50 p-8 rounded-[2rem] border border-white/5 mb-8">
               <p className="text-2xl font-bold italic text-slate-300">"أنا عايز أروح ميدان التحرير"</p>
               <p className="text-slate-600 mt-2">I want to go to Tahrir Square</p>
            </div>

            <div className="grid gap-4">
              <button className="p-6 bg-slate-800 hover:bg-amber-500 hover:text-black rounded-3xl font-black text-xl transition-all border border-white/5">1. أنا عايز الفندق</button>
              <button className="p-6 bg-slate-800 hover:bg-amber-500 hover:text-black rounded-3xl font-black text-xl transition-all border border-white/5">2. خدني الفندق</button>
              <button className="p-6 bg-amber-500 text-black rounded-3xl font-black text-xl shadow-xl transform scale-105 border-2 border-white/20">3. أنا عايز أروح الفندق</button>
            </div>
            
            <p className="mt-10 text-green-400 font-black text-2xl animate-bounce">🏰 أحسنتِ يا جلالة الملكة! إجابة صحيحة</p>
          </div>
        )}

        {/* قاعة الدروس - نظام الإطلاق المبدئي */}
        {tab === 'lessons' && (
          <div className="space-y-8 animate-in slide-in-from-bottom duration-700">
            <div className="bg-[#0f172a] p-16 rounded-[4rem] border-2 border-amber-500/10 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10 text-9xl">🏛️</div>
               <h2 className="text-5xl font-black mb-6">قاعة الدروس</h2>
               <p className="text-amber-500 text-2xl font-bold">يتم تحميل "رحلة نفرتيتي" المحدثة...</p>
               <div className="mt-12 w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-2/3 shadow-[0_0_20px_rgba(245,158,11,1)]"></div>
               </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
               <div className="bg-[#111827] p-8 rounded-[2.5rem] border border-white/5 opacity-50">
                  <h3 className="text-xl font-black mb-2">وحدات الانغماس الثقافي</h3>
                  <p className="text-slate-500 italic">أكمل التحدي الأول لفتح المحتوى</p>
               </div>
               <div className="bg-gradient-to-br from-amber-500/20 to-slate-900 p-8 rounded-[2.5rem] border border-amber-500/20">
                  <h3 className="text-xl font-black mb-2">الشهادة الملكية</h3>
                  <p className="text-amber-500/70 italic">جاهزة للاستلام بعد إتمام الرحلة</p>
               </div>
            </div>
          </div>
        )}
      </main>

      <footer className="mt-24 p-12 border-t border-white/5 text-slate-700 font-black">
        <p>أكاديمية يالا مصري - الإصدار الإمبراطوري المستقل v2.0</p>
      </footer>
    </div>
  );
}
