import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nequi - Por fin, llegó TuAsesorNequi',
  description:
    'TuAsesorNequi es tu nuevo aliado financiero: un chat inteligente, emocional y hecho a tu medida. Consulta tus gastos, genera extractos y entiende tus finanzas con tus propias palabras, fácil y a tu ritmo.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={` main-background`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
