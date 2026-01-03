'use client'; // لضمان التفاعل الملكي

export default function PharaohStory() {
  return (
    <div className="p-8 bg-stone-50 rounded-3xl border-r-8 border-amber-600 shadow-xl">
      <h3 className="text-3xl font-black text-slate-900 mb-4">📜 قصة الفراعنة</h3>
      
      {/* التعليق الصحيح في React يكون بهذا الشكل داخل الأقواس */}
      <div className="prose prose-slate text-lg leading-relaxed text-slate-700 italic">
        "هنا ستبدأ الرحلة عبر الزمن، حيث تحكي الجدران أسرار الملوك بلسان مصري حديث..."
      </div>
      
      <button className="mt-6 bg-amber-600 text-white px-8 py-2 rounded-full font-bold hover:bg-slate-900 transition-colors">
        ابدأ القصة الآن 🏺
      </button>
    </div>
  );
}
