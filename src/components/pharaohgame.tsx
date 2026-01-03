'use client'; // ضروري لأنها لعبة تفاعلية

export default function PharaohGame() {
  return (
    <div className="p-6 bg-slate-800 rounded-3xl text-center border-2 border-yellow-500 shadow-2xl">
      <h3 className="text-2xl font-black text-yellow-500 mb-4">🏺 لعبة الفراعنة</h3>
      <p className="text-white opacity-80 mb-6">قريباً.. خض تحديات الملوك واجمع نقاط النيل!</p>
      
      {/* منطقة الألعاب التعليمية التفاعلية */}
      <div className="bg-slate-700 p-8 rounded-2xl border border-dashed border-slate-500 text-slate-400">
        🎮 منطقة التدريب الملكي
      </div>
    </div>
  );
}
