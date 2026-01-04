'use client';
import React, { useState } from 'react';

export default function SimulationAcademy() {
  const [activeTab, setActiveTab] = useState('challenges');

  return (
    <div style={{ backgroundColor: '#050a15', color: 'white', minHeight: '100vh', padding: '20px' }} dir="rtl">
      {/* هيدر المحاكاة الملكي */}
      <header style={{ textAlign: 'center', marginBottom: '40px', borderBottom: '2px solid #f59e0b' }}>
        <h1 style={{ color: '#f59e0b', fontSize: '2.5rem' }}>محاكاة أكاديمية يالا مصري 🏺</h1>
        <p style={{ opacity: 0.7 }}>إعداد الملكة نفرتيتي</p>
      </header>

      {/* أزرار التنقل في المحاكاة */}
      <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
        <button onClick={() => setActiveTab('challenges')} style={{ padding: '15px 30px', borderRadius: '15px', border: 'none', backgroundColor: activeTab === 'challenges' ? '#f59e0b' : '#1e293b', fontWeight: 'bold', cursor: 'pointer' }}>
          ⚔️ التحديات المباشرة
        </button>
        <button onClick={() => setActiveTab('lessons')} style={{ padding: '15px 30px', borderRadius: '15px', border: 'none', backgroundColor: activeTab === 'lessons' ? '#f59e0b' : '#1e293b', fontWeight: 'bold', cursor: 'pointer' }}>
          📖 نظام الدروس
        </button>
      </nav>

      <main style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* قسم التحديات - كما في تخطيطك المسبق */}
        {activeTab === 'challenges' && (
          <div style={{ background: '#0f172a', padding: '30px', borderRadius: '25px', border: '1px solid rgba(245,158,11,0.3)' }}>
            <h2 style={{ color: '#f59e0b' }}>تحدي: ميدان التحرير</h2>
            <div style={{ margin: '20px 0', fontSize: '1.5rem', fontWeight: 'bold' }}>
              "أنا عايز اروح ميدان التحرير"
            </div>
            <p style={{ color: '#64748b', marginBottom: '20px' }}>اطلب من السائق الذهاب للفندق بلهجة ملكية</p>
            <div style={{ display: 'grid', gap: '10px' }}>
              <button style={{ padding: '15px', borderRadius: '10px', background: '#1e293b', color: 'white', border: '1px solid #334155' }}>1. انا عايز الفندق</button>
              <button style={{ padding: '15px', borderRadius: '10px', background: '#f59e0b', color: 'black', fontWeight: 'bold', border: 'none' }}>2. انا عايز اروح الفندق</button>
            </div>
            <p style={{ marginTop: '20px', color: '#4ade80', fontWeight: 'bold' }}>🏰 أحسنت يا بطل النيل!</p>
          </div>
        )}

        {/* نظام الدروس - الهيكل المبدئي للإطلاق */}
        {activeTab === 'lessons' && (
          <div style={{ textAlign: 'center', background: '#0f172a', padding: '50px', borderRadius: '25px' }}>
            <h2 style={{ fontSize: '2rem' }}>قاعة الدروس الملكية</h2>
            <p style={{ color: '#f59e0b', fontSize: '1.2rem', marginTop: '20px' }}>يتم الآن تحميل "رحلة نفرتيتي" المحدثة...</p>
            <div style={{ width: '100%', height: '5px', background: '#334155', borderRadius: '10px', marginTop: '30px', overflow: 'hidden' }}>
              <div style={{ width: '80%', height: '100%', background: '#f59e0b' }}></div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
