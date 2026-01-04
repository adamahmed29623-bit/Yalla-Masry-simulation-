'use client';
import React, { useState } from 'react';

export default function YallaMasryAcademy() {
  // الحالات البرمجية (العقل المحرك)
  const [view, setView] = useState('home'); 
  const [feedback, setFeedback] = useState('');
  const [points, setPoints] = useState(0);

  // دالة تغيير الأقسام (الحركة)
  const goTo = (pageName: string) => {
    console.log("الانتقال إلى:", pageName); // للتأكد في المتصفح
    setView(pageName);
    setFeedback('');
  };

  const handleChallenge = (isCorrect: boolean) => {
    if (isCorrect) {
      setFeedback('🏰 أحسنتِ! إجابة ملكية صحيحة (+10 XP)');
      setPoints(prev => prev + 10);
    } else {
      setFeedback('⚠️ جربي مرة أخرى بتركيز أكبر');
    }
  };

  return (
    <div style={{ backgroundColor: '#050a15', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif', direction: 'rtl' }}>
      
      {/* الهيدر الملكي الثابت */}
      <header style={{ padding: '20px', textAlign: 'center', background: '#0a0f1a', borderBottom: '2px solid #f59e0b' }}>
        <h1 style={{ color: '#f59e0b', margin: '0 0 10px 0' }}>أكاديمية يالا مصري 🏺</h1>
        <p style={{ margin: 0, opacity: 0.8 }}>رصيد الفخامة: <span style={{color:'#f59e0b'}}>{points} XP</span></p>
        
        {/* أزرار التحكم - يجب أن تضغط وتغير الصفحة */}
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <button onClick={() => goTo('home')} style={btnStyle(view === 'home')}>🏠 الرئيسية</button>
          <button onClick={() => goTo('challenges')} style={btnStyle(view === 'challenges')}>⚔️ التحديات</button>
          <button onClick={() => goTo('lessons')} style={btnStyle(view === 'lessons')}>📖 الدروس</button>
        </div>
      </header>

      <main style={{ maxWidth: '600px', margin: '40px auto', padding: '20px' }}>
        
        {/* محتوى الرئيسية */}
        {view === 'home' && (
          <div style={{ textAlign: 'center', animation: 'fadeIn 0.5s' }}>
            <h2>مرحباً بكِ يا ملكة نفرتيتي 👑</h2>
            <p>جاهزة للبدء في رحلة تعلم اللهجة المصرية؟</p>
            <button onClick={() => goTo('challenges')} style={{ padding: '15px 30px', background: '#f59e0b', border: 'none', borderRadius: '50px', fontWeight: 'bold', cursor: 'pointer', marginTop: '20px' }}>
              ابدأي التحدي الآن 🚀
            </button>
          </div>
        )}

        {/* محتوى التحديات */}
        {view === 'challenges' && (
          <div style={{ background: '#0f172a', padding: '30px', borderRadius: '20px', border: '1px solid #f59e0b', textAlign: 'center' }}>
            <h3>تحدي التاكسي 🚕</h3>
            <p style={{ fontSize: '1.2rem' }}>"أنا عايز اروح ميدان التحرير"</p>
            <div style={{ display: 'grid', gap: '10px', marginTop: '20px' }}>
              <button onClick={() => handleChallenge(false)} style={choiceStyle}>1. انا عايز الفندق</button>
              <button onClick={() => handleChallenge(true)} style={{...choiceStyle, borderColor: '#f59e0b'}}>2. انا عايز اروح الفندق ✅</button>
            </div>
            {feedback && <p style={{ marginTop: '20px', color: feedback.includes('أحسنت') ? '#4ade80' : '#f87171', fontWeight: 'bold' }}>{feedback}</p>}
          </div>
        )}

        {/* محتوى الدروس */}
        {view === 'lessons' && (
          <div style={{ textAlign: 'center', padding: '40px', background: '#0a0f1a', borderRadius: '20px' }}>
            <h2>قاعة الدروس الملكية</h2>
            <p style={{ color: '#f59e0b' }}>جاري تحميل الرحلة... 80%</p>
            <div style={{ width: '100%', height: '10px', background: '#1e293b', borderRadius: '5px', overflow: 'hidden' }}>
              <div style={{ width: '80%', height: '100%', background: '#f59e0b' }}></div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// تنسيقات مساعدة للأزرار
const btnStyle = (active: boolean) => ({
  padding: '10px 20px',
  borderRadius: '10px',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: active ? '#f59e0b' : '#1e293b',
  color: active ? 'black' : 'white',
  fontWeight: 'bold' as const,
  transition: '0.3s'
});

const choiceStyle = {
  padding: '15px',
  borderRadius: '12px',
  border: '1px solid #334155',
  background: 'none',
  color: 'white',
  cursor: 'pointer',
  fontWeight: 'bold' as const
};
