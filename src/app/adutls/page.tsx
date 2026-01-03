'use client';
import React from 'react';
import Link from 'next/link';
// التصحيح الملكي: الخروج من app/adults والوصول للمكونات في المجلد الرئيسي
import PharaohAvatar from '../../components/pharaohavatar';
import PharaohStory from '../../components/pharaohstory'; // تأكدي أن الملف اسمه pharaohstory.tsx بحروف صغيرة
import '@/app/globals.css';

export default function AdultsPage() {
  return (
    <div className="min-h-screen bg-[#fcf9f1] text-slate-900 p-6 md:p-12 font-serif" dir="rtl">
      {/* باقي الكود كما هو... */}
      {/* شريط علوي بسيط للفخامة */}
      <header className="max-w-4xl mx-auto flex justify-between items-center mb-16 border-b border-amber-200 pb-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter">
            القاعة الملكية <span className="text-amber-600">للكبار</span> 🏺
          </h1>
          <p className="text-slate-500 mt-2 italic">رحلة في أعماق اللغة المصرية بوقار الملوك</p>
        </div>
        <Link href="/" className="text-sm font-bold text-amber-700 hover:underline">
          ⬅️ العودة للمقر
        </Link>
      </header>

      <main className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        {/* عمود المعلم الملكي */}
        <div className="md:col-span-1 flex flex-col items-center bg-white p-8 rounded-3xl shadow-xl border border-amber-100">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full blur opacity-25"></div>
            <PharaohAvatar src="/images/ramesses.jpg" />
          </div>
          <h2 className="mt-6 text-2xl font-black text-slate-800">الملك راميس</h2>
          <span className="text-amber-600 text-sm font-bold uppercase tracking-widest mt-1">المعلم الأول</span>
          
          <div className="mt-8 w-full space-y-3">
            <div className="bg-stone-50 p-3 rounded-xl text-center text-sm font-medium border border-stone-100">
              مستوى التقدم: 👑 ملكي
            </div>
          </div>
        </div>

        {/* عمود المحتوى والقصة */}
        <div className="md:col-span-2 space-y-8">
          <div className="bg-white p-2 rounded-3xl shadow-lg border border-amber-50">
             <PharaohStory />
          </div>

          {/* نصائح ملكية إضافية */}
          <div className="p-6 bg-slate-900 rounded-3xl text-white">
            <h4 className="text-yellow-500 font-bold mb-2 flex items-center gap-2">
              <span>💡</span> نصيحة اليوم الملكية
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              "تعلم العامية المصرية يبدأ من القلب قبل اللسان. استمع لنبرة الصوت وحاول تقليد روح الشخصية لتتقن اللغة كأهلها."
            </p>
          </div>
        </div>
      </main>

      {/* تذييل الصفحة */}
      <footer className="mt-20 text-center text-slate-400 text-xs">
        &copy; 2026 أكاديمية يالا مصري - جميع الحقوق محفوظة للملكة نفرتيتي
      </footer>
    </div>
  );
}
