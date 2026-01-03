'use client';
import React from 'react';
// المسار الصحيح للخروج من المجلدات والوصول للمكونات
import PharaohAvatar from '../../components/ph/pharaoavatar';
import PharaohGame from '../../components/ph/pharaohgame';

export default function ChildrenPage() {
  return (
    <div className="min-h-screen bg-sky-50 p-6 flex flex-col items-center">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-black text-blue-900 mb-2">مغامرات الفراعنة الصغار ✨</h1>
      </header>

      <div className="bg-white p-6 rounded-full shadow-2xl border-4 border-yellow-400 mb-8">
        <PharaohAvatar src="/images/ramesses-junior.jpg" />
        <p className="text-center mt-2 font-black text-slate-800">صديقك: راميس</p>
      </div>

      <div className="w-full max-w-xl">
        <PharaohGame />
      </div>
    </div>
  );
}
