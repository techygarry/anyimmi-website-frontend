import Link from 'next/link';
import { V, MAX } from './tokens';

export function FounderLockIn() {
  const rows = [
    { label: 'THE ESSENTIALS', now: '$197', after: '$297' },
    { label: 'THE FIRM', now: '$397', after: '$597' },
    { label: 'THE FOUNDER', now: '$697', after: '$1,497' },
    { label: 'Pre-launch bonuses', now: 'All 6 included', after: 'None' },
    { label: 'Trial of AI Portal + CRM + DOSSIAR', now: '90 days', after: '30 days' },
    { label: 'Lifetime grandfathering', now: 'Included', after: 'Gone' },
  ];

  return (
    <section
      style={{
        background: V.bg,
        padding: '140px 32px',
        borderBottom: `1px solid ${V.divider}`,
      }}
    >
      <div style={{ maxWidth: MAX, margin: '0 auto' }}>
        <div
          style={{
            fontFamily: V.mono,
            fontSize: 11,
            letterSpacing: '0.22em',
            color: V.gold,
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          BEFORE JULY 1
        </div>
        <h2
          style={{
            fontFamily: V.serif,
            fontWeight: 600,
            fontSize: 'clamp(40px, 6vw, 72px)',
            lineHeight: 1.0,
            letterSpacing: '-0.025em',
            color: V.cream,
            margin: 0,
            marginBottom: 72,
            maxWidth: 1050,
          }}
        >
          The first 500 members get rates we&apos;ll never offer again.
        </h2>

        <div
          style={{
            border: `1px solid ${V.divider}`,
            borderRadius: 12,
            overflow: 'hidden',
            background: V.card,
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr 1fr',
              padding: '24px 32px',
              background: V.bgDeep,
              borderBottom: `1px solid ${V.divider}`,
            }}
          >
            <div />
            <div
              style={{
                fontFamily: V.mono,
                fontSize: 12,
                letterSpacing: '0.2em',
                color: V.gold,
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              NOW — FOUNDER PRICING
            </div>
            <div
              style={{
                fontFamily: V.mono,
                fontSize: 12,
                letterSpacing: '0.2em',
                color: V.muted,
                textTransform: 'uppercase',
                fontWeight: 600,
              }}
            >
              AFTER JULY 1
            </div>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.label}
              style={{
                display: 'grid',
                gridTemplateColumns: '1.2fr 1fr 1fr',
                padding: '24px 32px',
                borderBottom: i < rows.length - 1 ? `1px solid ${V.divider}` : 'none',
                alignItems: 'center',
              }}
            >
              <div style={{ fontFamily: V.serif, fontSize: 18, color: V.cream, fontWeight: 500 }}>
                {r.label}
              </div>
              <div
                style={{
                  fontFamily: V.serif,
                  fontSize: 22,
                  color: V.gold,
                  fontWeight: 600,
                }}
              >
                {r.now}
              </div>
              <div
                style={{
                  fontFamily: V.serif,
                  fontSize: 18,
                  color: V.muted,
                  textDecoration: /\$|Included|\d+ days/.test(r.after) ? 'none' : 'line-through',
                }}
              >
                {r.after}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 56 }}>
          <Link
            href="#pricing"
            style={{
              background: V.gold,
              color: V.bg,
              padding: '20px 36px',
              borderRadius: 4,
              fontFamily: V.sans,
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            LOCK IN YOUR FOUNDER SEAT BEFORE THE DOOR CLOSES
          </Link>
        </div>
      </div>
    </section>
  );
}
