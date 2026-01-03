
import '@/app/globals.css';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Yalla Masry Academy 🏺',
  description: 'أكاديمية الملكة نفرتيتي لتعليم اللغة المصرية',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.className} bg-slate-900 text-white`}>
        {/* هذا هو السقف الذي سيغطي كل الصفحات */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
