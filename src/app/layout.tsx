import type { Metadata } from 'next';
import { PlatformProvider } from '@/lib/platform-client';
import './globals.css';

export const metadata: Metadata = {
  title: 'AnyImmi — The goldmine of Canadian immigration assets for RCICs',
  description:
    '305 production-ready immigration assets. Branded templates. Client kits. Lead-conversion scripts. Plus 4 AI tools free forever. Built for Canadian RCICs tired of looking like everyone else.',
  icons: { icon: '/assets/imgs/logo/favicon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap"
        />
      </head>
      <body>
        <PlatformProvider>{children}</PlatformProvider>
      </body>
    </html>
  );
}
