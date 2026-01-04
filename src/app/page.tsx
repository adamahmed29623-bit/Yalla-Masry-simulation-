
'use client';
import React, { useState } from 'react';

export default function ImperialAcademy() {
  const [activeTab, setActiveTab] = useState('challenges');
  const [feedback, setFeedback] = useState('');

  const checkAnswer = (correct: boolean) => {
    if (correct) {
      setFeedback('🏰 أحسنتِ يا جلالة الملكة! إجابة ملكية صحيحة');
    } else {
      setFeedback('⚠️ المحاولة فخر للملكات، جربي مرة أخرى بدقة');
    }
  };

  return (
    <div style={{ backgroundColor: '#050a15', color: 'white', minHeight: '100vh', padding: '40px 20px', textAlign: 'center' }}>
      
      {/* عنوان الأكاديمية - الهوية الإمبراطورية */}
      <header style={{ marginBottom: '50px' }}>
        <h1 style={{ color: '#f59e0b', fontSize: '3rem', margin: 0 }}>أكاديمية يالا مصري</h1>
        <p style={{ opacity: 0.7 }}>إشراف الملكة نفرتيتي</p>
      </header>

      {/* أزرار التحكم - تعمل باللمس والضغط */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px' }}>
        <button onClick={() => {setActiveTab('challenges'); setFeedback('');}} 
          style={{ padding: '15px 30px', borderRadius: '15px', border: 'none', cursor: 'pointer', fontWeight: 'bold', backgroundColor: activeTab === 'challenges' ? '#f59e0b' : '#1e293b', color: activeTab === 'challenges' ? 'black' : 'white' }}>
          ⚔️ التحديات الملكية
        </button>
        <button onClick={() => {setActiveTab('lessons'); setFeedback('');}} 
          style={{ padding: '15px 30px', borderRadius: '15px', border: 'none', cursor: 'pointer', fontWeight: 'bold', backgroundColor: activeTab === 'lessons' ? '#f59e0b' : '#1e293b', color: activeTab === 'lessons' ? 'black' : 'white' }}>
          📖 قاعة الدروس
        </button>
      </div>

      {/* منطقة التحديات - كما في الصور */}
      {activeTab === 'challenges' && (
        <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#0f172a', padding: '40px', borderRadius: '40px', border: '2px solid rgba(245,158,11,0.2)' }}>
          <h2 style={{ color: '#f59e0b' }}>تحدي السفر: ميدان التحرير 🚕</h2>
          <p style={{ fontSize: '1.5rem', margin: '20px 0' }}>"أنا عايز اروح ميدان التحرير"</p>
          <div style={{ display: 'grid', gap: '15px' }}>
            <button onClick={() => checkAnswer(false)} style={{ padding: '15px', borderRadius: '15px', border: '1px solid #334155', background: 'none', color: 'white', cursor: 'pointer' }}>1. انا عايز الفندق</button>
            <button onClick={() => checkAnswer(true)} style={{ padding: '15px', borderRadius: '15px', border: 'none', background: '#f59e0b', color: 'black', cursor: 'pointer', fontWeight: '900' }}>2. انا عايز اروح الفندق</button>
          </div>
          {feedback && <p style={{ marginTop: '20px', color: feedback.includes('أحسنت') ? '#4ade80' : '#f87171', fontWeight: 'bold' }}>{feedback}</p>}
        </div>
      )}

      {/* قاعة الدروس - نظام الإطلاق المبدئي */}
      {activeTab === 'lessons' && (
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '50px', backgroundColor: '#0f172a', borderRadius: '40px' }}>
          <h2 style={{ fontSize: '2.5rem' }}>قاعة الدروس الملكية</h2>
          <p style={{ color: '#f59e0b' }}>يتم الآن تحميل "رحلة نفرتيتي" المحدثة بذكاء جميناي...</p>
          <div style={{ height: '4px', background: '#1e293b', marginTop: '30px', borderRadius: '2px', overflow: 'hidden' }}>
            <div style={{ width: '80%', height: '100%', background: '#f59e0b' }}></div>
          </div>
        </div>
      )}
    </div>
  );
}
