'use client';

import { useEffect, useState } from 'react';

interface BonusCountdownBannerProps {
  expiresAt: string;
  bonusDescription?: string;
}

function pad(n: number) {
  return n.toString().padStart(2, '0');
}

export default function BonusCountdownBanner({ expiresAt, bonusDescription }: BonusCountdownBannerProps) {
  const [now, setNow] = useState<number>(() => Date.now());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const target = new Date(expiresAt).getTime();
  const diff = Math.max(0, target - now);
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const expired = mounted && diff <= 0;

  return (
    <div
      style={{
        background: 'linear-gradient(90deg, #4F46E5 0%, #7C3AED 100%)',
        color: '#fff',
        padding: '14px 16px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 12,
          flexWrap: 'wrap',
        }}
      >
        <span style={{ fontSize: 18 }} aria-hidden>⏱</span>
        <span style={{ fontSize: 15, fontWeight: 600, letterSpacing: 0.2 }}>
          {expired ? 'Founder bonuses have ended for this week.' : 'Bonuses expire in'}
        </span>
        {!expired && (
          <span
            style={{
              fontFamily: 'var(--font-mono, ui-monospace, SFMono-Regular, Menlo, monospace)',
              fontVariantNumeric: 'tabular-nums',
              fontSize: 18,
              fontWeight: 700,
              background: 'rgba(0,0,0,0.22)',
              padding: '4px 10px',
              borderRadius: 6,
              letterSpacing: 1,
              minWidth: 110,
              display: 'inline-block',
            }}
          >
            {mounted ? `${pad(hours)}:${pad(minutes)}:${pad(seconds)}` : '--:--:--'}
          </span>
        )}
        {bonusDescription && (
          <span style={{ fontSize: 13, opacity: 0.92, maxWidth: 640 }}>
            {bonusDescription}
          </span>
        )}
      </div>
    </div>
  );
}
