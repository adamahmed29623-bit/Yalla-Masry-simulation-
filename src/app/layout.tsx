export const metadata = {
  title: 'Yalla Masry Academy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ margin: 0, padding: 0, background: '#050a15' }}>
        {children}
      </body>
    </html>
  )
}
