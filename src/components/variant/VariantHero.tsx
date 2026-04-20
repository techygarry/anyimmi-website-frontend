import Link from 'next/link';
import { V, MAX } from './tokens';

export function VariantHero({ founderCount = 287, founderTarget = 500 }: { founderCount?: number; founderTarget?: number }) {
  return (
    <section
      style={{
        background: V.bg,
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 32px 140px',
      }}
    >
      {/* Slow gradient bloom */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '-40%',
          left: '50%',
          width: 1100,
          height: 1100,
          transform: 'translateX(-50%)',
          background: 'radial-gradient(circle, rgba(212,175,55,0.10) 0%, rgba(212,175,55,0) 60%)',
          pointerEvents: 'none',
        }}
      />
      <div style={{ maxWidth: MAX, margin: '0 auto', position: 'relative' }}>
        <div
          style={{
            fontFamily: V.mono,
            fontSize: 12,
            letterSpacing: '0.2em',
            color: V.gold,
            textTransform: 'uppercase',
            marginBottom: 32,
          }}
        >
          THE CANADIAN IMMIGRATION CONSULTANT&apos;S ARSENAL · EST. 2026
        </div>

        <h1
          style={{
            fontFamily: V.serif,
            fontWeight: 600,
            fontSize: 'clamp(48px, 8vw, 108px)',
            lineHeight: 0.96,
            letterSpacing: '-0.03em',
            color: V.cream,
            margin: 0,
            marginBottom: 40,
            maxWidth: 1100,
          }}
        >
          The goldmine of Canadian
          <br />
          immigration assets —
          <br />
          <span style={{ fontStyle: 'italic', color: V.gold }}>finally in one vault.</span>
        </h1>

        <p
          style={{
            fontFamily: V.sans,
            fontSize: 20,
            lineHeight: 1.55,
            color: V.mutedSoft,
            maxWidth: 680,
            margin: '0 0 56px',
          }}
        >
          305 battle-tested templates, playbooks, and arsenal pieces from 8 years and $1M+ of
          practice-building. Priced for RCICs, not agencies.
        </p>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}>
          <Link
            href="#pricing"
            style={{
              background: V.gold,
              color: V.bg,
              padding: '18px 32px',
              borderRadius: 4,
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textDecoration: 'none',
              fontFamily: V.sans,
              display: 'inline-block',
            }}
          >
            ENTER THE VAULT — $197
          </Link>
          <Link
            href="#manifesto"
            style={{
              background: 'transparent',
              color: V.gold,
              padding: '18px 32px',
              borderRadius: 4,
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: '0.08em',
              textDecoration: 'none',
              fontFamily: V.sans,
              border: `1px solid ${V.gold}`,
              display: 'inline-block',
            }}
          >
            READ THE MANIFESTO →
          </Link>
        </div>

        <div
          style={{
            fontFamily: V.mono,
            fontSize: 11,
            letterSpacing: '0.18em',
            color: V.muted,
            textTransform: 'uppercase',
          }}
        >
          {founderCount}/{founderTarget} FOUNDER SEATS CLAIMED · CANADA DAY LAUNCH
        </div>
      </div>
    </section>
  );
}
