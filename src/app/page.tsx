'use client';
import React, { useState } from 'react';

export default function RealitySimulation() {
  const [stage, setStage] = useState('simulation_start');

  return (
    <div className="simulation-container" style={{ backgroundColor: '#050a15', color: 'white', minHeight: '100vh', padding: '20px', fontFamily: 'sans-serif' }} dir="rtl">
      
      {/* هيدر محاكاة الواقع - فخامة ملكية مستقلة */}
      <header style={{ textAlign: 'center', padding: '30px', borderBottom: '1px solid #f59e0b' }}>
        <h1 style={{ color: '#f59e0b', fontSize: '2.2rem', fontWeight: '900' }}>محاكاة الواقع المصري 🏺</h1>
        <p style={{ color: '#64748b', fontWeight: 'bold' }}>الإصدار المستقل - برؤية الملكة نفرتيتي</p>
      </header>

      <main style={{ maxWidth: '900px', margin: '40px auto' }}>
        
        {/* نظام التحديات الواقعية */}
        <section style={{ background: 'linear-gradient(145deg, #0f172a, #050a15)', padding: '40px', borderRadius: '40px', border: '1px solid rgba(245,158,11,0.2)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <span style={{ background: '#f59e0b', color: 'black', padding: '5px 15px', borderRadius: '20px', fontWeight: 'black', fontSize: '12px' }}>موقف حي: المواصلات</span>
            <h2 style={{ marginTop: '15px', fontSize: '1.8rem' }}>أنت الآن أمام سائق تاكسي في القاهرة.. ماذا ستقول؟</h2>
          </div>

          {/* محاكي الموقف */}
          <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '25px', borderRadius: '25px', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '30px' }}>
             <p style={{ fontSize: '1.4rem', textAlign: 'center', color: '#cbd5e1' }}>"أنا عايز أروح ميدان التحرير"</p>
             <p style={{ textAlign: 'center', color: '#64748b', fontStyle: 'italic', marginTop: '5px' }}>I want to go to Tahrir Square</p>
          </div>

          {/* خيارات المحاكاة - بدون تشتيت */}
          <div style={{ display: 'grid', gap: '15px' }}>
            <button style={{ padding: '20px', borderRadius: '20px', border: '2px solid #1e293b', background: 'transparent', color: 'white', fontWeight: 'bold', cursor: 'pointer', textAlign: 'right' }}>1. أنا عايز الفندق</button>
            <button style={{ padding: '20px', borderRadius: '20px', border: '2px solid #1e293b', background: 'transparent', color: 'white', fontWeight: 'bold', cursor: 'pointer', textAlign: 'right' }}>2. خدني الفندق</button>
            <button style={{ padding: '20px', borderRadius: '20px', border: '2px solid #f59e0b', background: 'rgba(245,158,11,0.1)', color: '#f59e0b', fontWeight: 'black', cursor: 'pointer', textAlign: 'right' }}>3. أنا عايز أروح الفندق (الإجابة الملكية)</button>
          </div>

          <div style={{ marginTop: '30px', textAlign: 'center', color: '#4ade80', fontWeight: 'bold', fontSize: '1.2rem' }}>
            🏰 أحسنت! لقد عبرت الموقف بنجاح كأبن أصيل للنيل
          </div>
        </section>

        {/* قاعة دروس المحاكاة */}
        <section style={{ marginTop: '40px', textAlign: 'center', opacity: 0.8 }}>
          <h3 style={{ color: '#f59e0b' }}>قاعة دروس المحاكاة</h3>
          <p>يتم الآن مزامنة "رحلة نفرتيتي" مع مواقف الواقع...</p>
        </section>

      </main>

      <footer style={{ marginTop: '60px', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '20px', color: '#334155' }}>
        مشروع محاكاة الواقع - v2.0 الملكي
      </footer>
    </div>
  );
}
