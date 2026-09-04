import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bond Cleaning Perth | End of Lease & Vacate Cleaning Superboss',
  description: 'Perth\'s #1 100% Bond Back Guaranteed cleaning company. REIWA approved checklist for Bond Cleaning Perth, End of Lease Cleaning, and Vacate Cleaning.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-brand-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
