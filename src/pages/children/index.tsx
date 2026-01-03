'use client';
import PharaohAvatar from '../../components/PharaohAvatar';
import PharaohGame from '../../components/PharaohGame';

export default function ChildrenPage() {
  return (
    <div className="min-h-screen bg-sky-50 p-6 flex flex-col items-center">
      {/* عنوان مرح للأطفال */}
      <header className="text-center mb-10">
        <h1 className="text-4xl font-black text-blue-900 mb-2">مغامرات الفراعنة الصغار ✨</h1>
        <p className="text-amber-600 font-bold">العب وتعلم لغة الملوك يا بطل!</p>
      </header>

      {/* تصحيح الأفاتار: تمرير الرابط src بدلاً من name */}
      <div className="bg-white p-6 rounded-full shadow-2xl border-4 border-yellow-400 mb-8">
        <PharaohAvatar src="/images/ramesses-junior.jpg" />
        <p className="text-center mt-2 font-black text-slate-800">صديقك: راميس</p>
      </div>

      {/* منطقة اللعبة */}
      <div className="w-full max-w-xl">
        <PharaohGame />
      </div>

      {/* زر العودة للمنزل - بلمسة طفولية */}
      <button className="mt-12 bg-blue-500 text-white px-10 py-3 rounded-full font-black shadow-lg hover:bg-yellow-500 transition-all">
        العودة للخريطة 🗺️
      </button>
    </div>
  );
}
