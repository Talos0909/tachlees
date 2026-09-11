'use client';

import Providers from './providers';

export const metadata = {
  title: 'תאכלס - הכי זול בארץ',
  description: 'פלטפורמה לשוואת מחירים בישראל',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body className="font-hebrew">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
