import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/nav-bar';
import Watermark from '@/components/watermark';
import { MSCI_COLORS } from '@/lib/brand';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MSCI Research Portal',
  description: 'Exploring the future of wealth management and AI innovation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: MSCI_COLORS.gray[50] }}>
        <NavBar />
        <Watermark />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}