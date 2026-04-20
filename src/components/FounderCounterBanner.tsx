'use client';

interface FounderCounterBannerProps {
  current: number;
  target: number;
}

export default function FounderCounterBanner({ current, target }: FounderCounterBannerProps) {
  const remaining = Math.max(0, target - current);
  const pct = Math.min(100, Math.round((current / Math.max(1, target)) * 100));

  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'linear-gradient(90deg, #0f172a 0%, #1e293b 100%)',
        color: '#fff',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '10px 16px',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: 0.2,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#10B981',
              boxShadow: '0 0 0 0 rgba(16,185,129,0.7)',
              animation: 'pulse 2s infinite',
            }}
          />
          <strong style={{ color: '#fff' }}>{current.toLocaleString()}</strong>
          <span style={{ color: 'rgba(255,255,255,0.7)' }}>/ {target.toLocaleString()} founder seats taken.</span>
          <span style={{ color: 'rgba(255,255,255,0.9)' }}>
            When we hit {target.toLocaleString()}, the $697 tier closes.
          </span>
        </span>
        <div
          style={{
            flex: '1 1 220px',
            maxWidth: 320,
            height: 6,
            background: 'rgba(255,255,255,0.1)',
            borderRadius: 999,
            overflow: 'hidden',
          }}
          aria-label={`${remaining} founder seats remaining`}
        >
          <div
            style={{
              width: `${pct}%`,
              height: '100%',
              background: 'linear-gradient(90deg, #10B981 0%, #34D399 100%)',
              transition: 'width 400ms ease-out',
            }}
          />
        </div>
      </div>
      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(16,185,129,0.7); }
          70% { box-shadow: 0 0 0 8px rgba(16,185,129,0); }
          100% { box-shadow: 0 0 0 0 rgba(16,185,129,0); }
        }
      `}</style>
    </div>
  );
}
