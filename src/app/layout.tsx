import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const interTight = localFont({
  src: '../fonts/InterTight-Variable.woff2',
  variable: '--font-inter-tight',
  display: 'swap',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'HoneymoonFund — Trade traditional wedding gifts for your dream trip',
  description: 'Give wedding guests a simple, personal way to contribute toward your honeymoon flights, stays, and experiences.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${interTight.variable} dark scroll-smooth`}>
      <body className="font-[family-name:var(--font-inter-tight)] bg-[#15161a] text-white selection:bg-[#d8ff5c] selection:text-black min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
