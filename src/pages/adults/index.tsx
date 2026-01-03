'use client';
import PharaohAvatar from '@/components/ph/PharaohAvatar';

export default function AdultsPage() {
  return (
    <div className="min-h-screen bg-stone-100 p-8 flex flex-col items-center space-y-10">
      <header className="text-center">
        <h1 className="text-4xl font-black text-slate-900 mb-2">قسم الكبار الملكي 🏺</h1>
        <p className="text-amber-700 font-bold italic">تعلم اللغة المصرية بوقار الملوك</p>
      </header>

      {/* تصحيح: أضفنا رابط الصورة (src) بدلاً من الاسم فقط ليعمل الأفاتار */}
      <div className="flex flex-col items-center">
        <PharaohAvatar src="/images/ramesses.jpg" /> 
        <h2 className="mt-4 text-2xl font-bold text-slate-800 underline decoration-yellow-500">
          المعلم الملكي: راميس
        </h2>
      </div>

      <div className="w-full max-w-2xl">
        <PharaohStory />
      </div>
    </div>
  );
}
