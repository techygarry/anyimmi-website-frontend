import type { Metadata } from 'next';
import Script from 'next/script';
import NavigationInit from '@/components/NavigationInit';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import StickyCtaBar from '@/components/StickyCtaBar';
// import ExitIntentPopup from '@/components/ExitIntentPopup';
import SocialProofToast from '@/components/SocialProofToast';
import './globals.css';

export const metadata: Metadata = {
  title: 'AnyImmi — The Ultimate Marketing Bundle for Canadian Immigration Consultants',
  description: 'Get 500+ professionally designed, IRCC-compliant marketing templates for immigration consultants. Social media, brochures, email templates & more. Instant download, Canva-editable.',
  icons: { icon: '/assets/imgs/logo/favicon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {/* Critical CSS first */}
        <link rel="stylesheet" href="/assets/vandor/bootstrap/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/vandor/fontawesome/fontawesome-pro.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/vandor/wow/animate.css" />
        {/* Secondary CSS */}
        <link rel="stylesheet" href="/assets/vandor/swiper/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/vandor/menu/meanmenu.min.css" />
        <link rel="stylesheet" href="/assets/vandor/popup/magnific-popup.css" />
        <link rel="stylesheet" href="/assets/vandor/nice-select/nice-select.css" />
        <link rel="stylesheet" href="/assets/vandor/odometer/odometer-theme-default.css" />
      </head>
      <body>
        <NavigationInit />
        {children}
        <WhatsAppWidget />
        <StickyCtaBar />
        {/* <ExitIntentPopup /> */}
        <SocialProofToast />
        {/* jQuery — must load first (before anything else) */}
        <Script src="/assets/vandor/jquery/jquery.js" strategy="beforeInteractive" />
        {/* Sequential vendor loader — guarantees plugins load before common/main */}
        <Script src="/assets/js/vendor-loader.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
