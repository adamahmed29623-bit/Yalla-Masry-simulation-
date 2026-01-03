import React from 'react';
// استخدام @ يضمن الوصول لملف التنسيق في مجلد app مباشرة
import './globals.css'; 
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Yalla Masry Academy | أكاديمية يالا مصري 🏺',
  description: 'الهوية الملكية لتعليم اللغة المصرية - تحت رعاية الملكة نفرتيتي',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-[#0f172a] text-white antialiased`}>
        {/* الحاويات الرئيسية لضمان ظهور المحتوى بوقار */}
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            {children}
          </main>
          
          {/* تذييل الصفحة الملكي الموحد لكل الموقع */}
          <footer className="py-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p>© 2026 أكاديمية يالا مصري. صُمم بكل فخر للملكة نفرتيتي.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
