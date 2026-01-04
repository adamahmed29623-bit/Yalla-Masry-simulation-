'use client';
import React, { useState } from 'react';

export default function YallaMasryLive() {
  const [view, setView] = useState('challenges');
  const [feedback, setFeedback] = useState('');

  // دالة التعامل مع الإجابات (بداية ربط المنطق)
  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setFeedback('🏰 أحسنت يا بطل النيل! إجابة ملكية صحيحة');
    } else {
      setFeedback('⚠️ حاول مرة أخرى يا بطل، اللهجة المصرية تحتاج دقة');
    }
  };

  return (
    <div style={{ backgroundColor: '#050a15', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }} dir="rtl">
      
      {/* الهيدر الملكي */}
      <header style={{ padding: '20px', borderBottom: '1px solid #f59e0b', backgroundColor: '#0a0f1a', textAlign: 'center' }}>
        <h1 style={{ color: '#f59e0b', margin: 0 }}>محاكاة أكاديمية يالا مصري 🏺</h1>
        <p style={{ fontSize: '12px', opacity: 0.7 }}>إعداد الملكة نفرتيتي</p>
        
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
          <button onClick={() => { setView('challenges'); setFeedback(''); }} 
                  style={{ padding: '12px 25px', borderRadius: '12px', cursor: 'pointer', border: 'none', backgroundColor: view === 'challenges' ? '#f59e0b' : '#1e293b', fontWeight: 'bold' }}>
            ⚔️ التحديات المباشرة
          </button>
          <button onClick={() => { setView('lessons'); setFeedback(''); }} 
                  style={{ padding: '12px 25px', borderRadius: '12px', cursor: 'pointer', border: 'none', backgroundColor: view === 'lessons' ? '#f59e0b' : '#1e293b', fontWeight: 'bold' }}>
            📖 نظام الدروس
          </button>
        </div>
      </header>

      <main style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px' }}>
        
        {view === 'challenges' && (
          <div style={{ background: 'linear-gradient(to bottom, #1e293b, #0f172a)', padding: '40px', borderRadius: '40px', border: '1px solid rgba(245,158,11,0.3)', textAlign: 'center' }}>
            <h2 style={{ color: '#f59e0b' }}>تحدي: ميدان التحرير 🚕</h2>
            <p style={{ fontSize: '22px', fontWeight: 'bold' }}>"أنا عايز اروح ميدان التحرير"</p>
            <p style={{ opacity: 0.6 }}>اطلب من السائق الذهاب للفندق بلهجة ملكية</p>

            <div style={{ display: 'grid', gap: '15px', marginTop: '30px' }}>
              <button onClick={() => handleAnswer(false)} style={{ padding: '20px', borderRadius: '15px', border: '1px solid #334155', backgroundColor: '#1e293b', color: 'white', cursor: 'pointer', fontSize: '18px' }}>
                1. انا عايز الفندق
              </button>
              <button onClick={() => handleAnswer(true)} style={{ padding: '20px', borderRadius: '15px', border: 'none', backgroundColor: '#f59e0b', color: 'black', cursor: 'pointer', fontSize: '18px', fontWeight: 'black' }}>
                2. انا عايز اروح الفندق
              </button>
            </div>

            {feedback && (
              <div style={{ marginTop: '30px', padding: '20px', borderRadius: '15px', backgroundColor: feedback.includes('أحسنت') ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)', color: feedback.includes('أحسنت') ? '#4ade80' : '#f87171', fontWeight: 'bold', fontSize: '20px' }}>
                {feedback}
              </div>
            )}
          </div>
        )}

        {view === 'lessons' && (
          <div style={{ textAlign: 'center', padding: '60px', backgroundColor: '#0f172a', borderRadius: '40px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <h2 style={{ fontSize: '45px', marginBottom: '10px' }}>قاعة الدروس</h2>
            <p style={{ color: '#f59e0b', fontSize: '20px' }}>جاري ربط "رحلة نفرتيتي" بذكاء جميناي... 🤖</p>
            <div style={{ width: '100%', height: '8px', background: '#1e293b', borderRadius: '10px', marginTop: '40px', overflow: 'hidden' }}>
              <div style={{ width: '85%', height: '100%', background: 'linear-gradient(to right, #f59e0b, #fbbf24)', boxShadow: '0 0 20px #f59e0b' }}></div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
