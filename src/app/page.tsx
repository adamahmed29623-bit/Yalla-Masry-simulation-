'use client';
import React, { useState, useEffect } from 'react';

export default function YallaMasryLive() {
  // حالات التحكم في الحركة والتفاعل
  const [view, setView] = useState('challenges');
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // التأكد من أن الصفحة تعمل بالكامل قبل بدء التفاعل
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div style={{ backgroundColor: '#050a15', color: 'white', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }} dir="rtl">
      
      {/* 1. رأس الصفحة (Navigation) */}
      <header style={{ padding: '25px', borderBottom: '2px solid #f59e0b', backgroundColor: '#0a0f1a', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
        <h1 style={{ color: '#f59e0b', margin: '0 0 15px 0', fontSize: '28px' }}>أكاديمية يالا مصري 🏺</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <button 
            onClick={() => { setView('challenges'); setSelectedAnswer(null); }}
            style={{ padding: '12px 20px', borderRadius: '15px', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', transition: '0.3s', backgroundColor: view === 'challenges' ? '#f59e0b' : '#1e293b', color: view === 'challenges' ? 'black' : 'white' }}>
            ⚔️ التحديات
          </button>
          <button 
            onClick={() => { setView('lessons'); setSelectedAnswer(null); }}
            style={{ padding: '12px 20px', borderRadius: '15px', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', transition: '0.3s', backgroundColor: view === 'lessons' ? '#f59e0b' : '#1e293b', color: view === 'lessons' ? 'black' : 'white' }}>
            📖 الدروس
          </button>
        </div>
      </header>

      {/* 2. المحتوى التفاعلي الرئيسي */}
      <main style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
        
        {/* قسم التحديات - منطق الاستجابة المباشر */}
        {view === 'challenges' && (
          <div style={{ backgroundColor: '#0f172a', padding: '40px', borderRadius: '35px', border: '1px solid rgba(245,158,11,0.2)', textAlign: 'center', animation: 'fadeIn 0.5s' }}>
            <h2 style={{ color: '#f59e0b', marginBottom: '10px' }}>تحدي الميدان 🚕</h2>
            <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#cbd5e1' }}>"أنا عايز اروح ميدان التحرير"</p>
            <p style={{ opacity: 0.7, fontSize: '14px', marginBottom: '30px' }}>اطلب من السائق الذهاب للفندق بلهجة ملكية</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <button 
                onClick={() => setSelectedAnswer(1)}
                style={{ padding: '20px', borderRadius: '20px', border: selectedAnswer === 1 ? '2px solid #ef4444' : '1px solid #334155', backgroundColor: '#1e293b', color: 'white', cursor: 'pointer', fontSize: '18px', fontWeight: 'bold' }}>
                1. انا عايز الفندق
              </button>
              
              <button 
                onClick={() => setSelectedAnswer(2)}
                style={{ padding: '20px', borderRadius: '20px', border: selectedAnswer === 2 ? '2px solid #22c55e' : 'none', backgroundColor: '#f59e0b', color: 'black', cursor: 'pointer', fontSize: '18px', fontWeight: '900' }}>
                2. انا عايز اروح الفندق
              </button>
            </div>

            {/* رسائل التفاعل (جميناي/المنطق المحلي) */}
            {selectedAnswer === 1 && <p style={{ color: '#f87171', marginTop: '25px', fontWeight: 'bold' }}>❌ ناقصة شوية يا بطل.. جرب "أروح"!</p>}
            {selectedAnswer === 2 && <p style={{ color: '#4ade80', marginTop: '25px', fontWeight: 'bold', fontSize: '20px' }}>🏰 أحسنت يا بطل النيل! إجابة ملكية صحيحة</p>}
          </div>
        )}

        {/* قسم الدروس - جاري الربط بجميناي */}
        {view === 'lessons' && (
          <div style={{ textAlign: 'center', padding: '60px', backgroundColor: '#0f172a', borderRadius: '35px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h2 style={{ fontSize: '36px', margin: '0 0 20px 0' }}>قاعة الدروس</h2>
            <p style={{ color: '#f59e0b', fontSize: '18px' }}>جاري ربط "رحلة نفرتيتي" بذكاء جميناي المباشر.. 🤖</p>
            <div style={{ width: '100%', height: '6px', background: '#1e293b', borderRadius: '10px', marginTop: '40px', overflow: 'hidden' }}>
              <div style={{ width: '90%', height: '100%', background: 'linear-gradient(to right, #f59e0b, #fbbf24)', animation: 'pulse 2s infinite' }}></div>
            </div>
          </div>
        )}
      </main>

      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0% { opacity: 0.6; } 50% { opacity: 1; } 100% { opacity: 0.6; } }
      `}</style>
    </div>
  );
}
