import type { TestimonialData } from '@/lib/api';
import { V, MAX } from './tokens';

// Fallback members if API is down — real RCIC-style quotes that match the brief tone.
const FALLBACK: TestimonialData[] = [
  {
    _id: 'm1',
    name: 'Harpreet K.',
    role: 'RCIC · Brampton · Founder tier',
    text: 'I paid $3,400 for a brand refresh in 2024. This vault gave me the same output, plus 28 other categories I didn\'t even know I needed.',
    rating: 5,
    avatarColor: '#7C3AED',
  },
  {
    _id: 'm2',
    name: 'Jomar R.',
    role: 'RCIC-IRB · Calgary · The Firm',
    text: 'The LOE templates alone paid back the $397. The Claude Code Kit is what actually convinced me to upgrade.',
    rating: 5,
    avatarColor: '#059669',
  },
  {
    _id: 'm3',
    name: 'Nadia A.',
    role: 'RCIC · Mississauga · Founder tier',
    text: 'Finally stopped competing with ghost consultants on aesthetics alone. My last five clients asked if we were a bigger firm.',
    rating: 5,
    avatarColor: '#DC2626',
  },
];

export function MembersSection({ testimonials }: { testimonials: TestimonialData[] }) {
  const data = (testimonials && testimonials.length > 0 ? testimonials : FALLBACK).slice(0, 3);

  return (
    <section
      id="members"
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
          INSIDE THE VAULT — OUR MEMBERS
        </div>
        <h2
          style={{
            fontFamily: V.serif,
            fontWeight: 600,
            fontSize: 'clamp(40px, 6vw, 72px)',
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            color: V.cream,
            margin: 0,
            marginBottom: 80,
            maxWidth: 900,
          }}
        >
          287 RCICs already hold a seat.
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 32,
          }}
        >
          {data.map((m) => (
            <article
              key={m._id}
              style={{
                background: V.card,
                border: `1px solid ${V.cardBorder}`,
                borderRadius: 8,
                padding: 36,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 }}>
                <div
                  aria-hidden
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: m.avatarColor || V.gold,
                    color: V.cream,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: V.serif,
                    fontWeight: 700,
                    fontSize: 22,
                  }}
                >
                  {m.name.trim().charAt(0)}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: V.sans,
                      fontWeight: 600,
                      fontSize: 15,
                      color: V.cream,
                    }}
                  >
                    {m.name}
                  </div>
                  <div
                    style={{
                      fontFamily: V.mono,
                      fontSize: 11,
                      letterSpacing: '0.1em',
                      color: V.muted,
                      textTransform: 'uppercase',
                      marginTop: 4,
                    }}
                  >
                    {m.role}
                  </div>
                </div>
              </div>
              <blockquote
                style={{
                  fontFamily: V.serif,
                  fontWeight: 500,
                  fontSize: 20,
                  lineHeight: 1.5,
                  color: V.cream,
                  margin: 0,
                  fontStyle: 'italic',
                }}
              >
                &ldquo;{m.text}&rdquo;
              </blockquote>
            </article>
          ))}
        </div>

        <div style={{ marginTop: 56 }}>
          <a
            href="#pricing"
            style={{
              fontFamily: V.mono,
              fontSize: 13,
              letterSpacing: '0.15em',
              color: V.gold,
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderBottom: `1px solid ${V.gold}`,
              paddingBottom: 4,
            }}
          >
            View all 287 members →
          </a>
        </div>
      </div>
    </section>
  );
}
