'use client';
import React, { useState } from 'react';

export default function YallaMasryRealWorld() {
  const [stage, setStage] = useState(1); // نظام المراحل الواقعية
  const [xp, setXp] = useState(0);

  return (
    <div style={{ backgroundColor: '#050a15', color: 'white', minHeight: '100vh', fontFamily: 'sans-serif' }} dir="rtl">
      
      {/* شريط الإنجاز الملكي */}
      <header style={{ padding: '15px 30px', background: '#0a0f1a', borderBottom: '2px solid #f59e0b', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ color: '#f59e0b', margin: 0, fontSize: '1.2rem' }}>أكاديمية يالا مصري 🏺</h2>
        </div>
        <div style={{ background: 'rgba(245,158,11,0.1)', padding: '5px 20px', borderRadius: '20px', border: '1px solid #f59e0b' }}>
          <span style={{ fontWeight: 'bold' }}>رصيدك الملكي: {xp} XP 🪙</span>
        </div>
      </header>

      <main style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
        
        {/* المرحلة الأولى: تحدي التاكسي (الواقعي) */}
        {stage === 1 && (
          <div className="animate-in fade-in">
            <h3 style={{ textAlign: 'center', color: '#64748b' }}>الموقف الأول: الوصول للمطار 🚕</h3>
            <div style={{ backgroundColor: '#0f172a', padding: '40px', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', marginTop: '20px' }}>
              <p style={{ fontSize: '22px', marginBottom: '30px' }}>وصلت المطار وعايز تروح الفندق، هتقول إيه للسواق؟</p>
              <div style={{ display: 'grid', gap: '15px' }}>
                <button onClick={() => { setXp(xp + 10); setStage(2); }} style={{ padding: '20px', background: '#1e293b', color: 'white', border: 'none', borderRadius: '15px', cursor: 'pointer', fontWeight: 'bold' }}>
                  "أنا عايز أروح الفندق" (الإجابة الملكية)
                </button>
                <button style={{ padding: '20px', background: '#111827', color: '#475569', border: '1px solid #1e293b', borderRadius: '15px' }}>
                  "خدني أي حتة"
                </button>
              </div>
            </div>
          </div>
        )}

        {/* المرحلة الثانية: الدخول لقاعة دروس المحاكاة */}
        {stage === 2 && (
          <div className="animate-in slide-in">
             <div style={{ textAlign: 'center', padding: '50px', background: 'linear-gradient(180deg, #0f172a 0%, #050a15 100%)', borderRadius: '40px', border: '2px solid #f59e0b' }}>
                <h2 style={{ fontSize: '35px', color: '#f59e0b' }}>قاعة دروس المحاكاة</h2>
                <p style={{ fontSize: '18px', margin: '20px 0' }}>يتم الآن مزامنة "رحلة نفرتيتي" مع مواقف الواقع...</p>
                
                <div style={{ padding: '20px', background: 'rgba(34, 197, 94, 0.1)', borderRadius: '15px', border: '1px solid #22c55e', color: '#4ade80', marginBottom: '30px' }}>
                   ✅ أحسنت! لقد عبرت الموقف بنجاح كأبن أصيل للنيل
                </div>

                <button onClick={() => setStage(1)} style={{ padding: '15px 40px', background: '#f59e0b', color: 'black', border: 'none', borderRadius: '15px', fontWeight: 'black', cursor: 'pointer' }}>
                   الانتقال للموقف التالي ⬅️
                </button>
             </div>
          </div>
        )}

      </main>

      <footer style={{ position: 'fixed', bottom: '20px', width: '100%', textAlign: 'center', opacity: 0.5 }}>
        <p style={{ fontSize: '12px' }}>تمكين القيادة التعليمية في أكاديمية يالا مصري</p>
      </footer>
    </div>
  );
}
