import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { ClerkProvider } from '@clerk/nextjs';
import { romanianClerk } from '@/lib/clerk-ro';
import { ToasterProvider } from '@/components/providers/toast-provider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alfacad Project',
  description: 'Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      localization={romanianClerk}
      appearance={{
        variables: {
          colorBackground: '#FFFFFF',
          colorPrimary: '#1E293B',
          colorText: '#0F172A',
        },
        elements: {
          navbar: {
            display: 'none',
          },
          navbarMobileMenuButton: {
            display: 'none',
          },
          navbarMobileMenuRow: {
            display: 'none',
          },
        },
      }}
    >
      <html lang='en'>
        <body className={inter.className}>
          <ToasterProvider />

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
