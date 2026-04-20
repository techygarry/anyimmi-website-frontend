import Link from 'next/link';
import type { BundlePlanData } from '@/lib/api';
import { V, MAX } from './tokens';

const FALLBACK: BundlePlanData[] = [
  {
    id: 'toolkit',
    name: 'THE ESSENTIALS',
    price: 197,
    valuePrice: 2685,
    portalProMonths: 0,
    features: [
      '305 assets across 27 categories',
      '4 free AI tools — CRS, NOC, EE Draw, SOP Gen',
      'Lifetime updates',
      '30-day, no-questions refund',
      'Instant download',
    ],
    delivery: 'Instant',
    highlight: false,
    active: true,
    tagline: 'All 305 files. One price. Forever.',
  },
  {
    id: 'firm',
    name: 'THE FIRM',
    price: 397,
    valuePrice: 6985,
    portalProMonths: 0,
    features: [
      'Everything in THE ESSENTIALS',
      'Custom branding applied to all 305 files',
      '50 custom-branded social designs',
      'Letterhead + business card + email signature',
      'Brand guide PDF',
      '1-3 business day delivery',
    ],
    delivery: '1-3 days',
    highlight: false,
    active: true,
    tagline: 'Your logo on every asset.',
  },
  {
    id: 'founder',
    name: 'THE FOUNDER',
    price: 697,
    valuePrice: 25112,
    portalProMonths: 3,
    features: [
      'Everything in THE FIRM',
      'Done-for-you website (5-7 days)',
      'Million Dollar Vault — 12 bonus assets',
      '90-day free trial — AI Portal + CRM + DOSSIAR',
      '1-on-1 onboarding call with the founder',
      'VIP Slack access · 6 months',
      'Lifetime grandfathering',
    ],
    delivery: '5-7 days',
    highlight: true,
    active: true,
    tagline: '★ Most chosen',
  },
];

export function VariantPricing({ plans }: { plans: BundlePlanData[] }) {
  const data = plans && plans.length >= 3 ? plans : FALLBACK;
  const essentials = data.find((p) => /essential|toolkit/i.test(p.id) || p.price === 197) ?? FALLBACK[0];
  const firm = data.find((p) => /firm/i.test(p.id) || p.price === 397) ?? FALLBACK[1];
  const founder = data.find((p) => /founder/i.test(p.id) || p.price === 697) ?? FALLBACK[2];

  return (
    <section
      id="pricing"
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
          THREE WAYS TO ENTER
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
          }}
        >
          Pick your doorway.
        </h2>

        {/* Hero tier — THE ESSENTIALS */}
        <TierCardHero tier={essentials} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: 24,
            marginTop: 24,
          }}
        >
          <TierCard tier={firm} />
          <TierCard tier={founder} accent />
        </div>

        <p
          style={{
            fontFamily: V.serif,
            fontStyle: 'italic',
            fontSize: 22,
            color: V.mutedSoft,
            textAlign: 'center',
            marginTop: 72,
          }}
        >
          No subscription. No upsell wall. No drip. Pay once, own forever.
        </p>
      </div>
    </section>
  );
}

function TierCardHero({ tier }: { tier: BundlePlanData }) {
  return (
    <div
      style={{
        background: V.bgDeep,
        border: `1px solid ${V.gold}`,
        borderRadius: 12,
        padding: 64,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: -60,
          right: -60,
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(212,175,55,0.16) 0%, rgba(212,175,55,0) 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) auto',
          gap: 48,
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <div>
          <div
            style={{
              fontFamily: V.mono,
              fontSize: 11,
              letterSpacing: '0.22em',
              color: V.gold,
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            THE DOORWAY
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 24,
              marginBottom: 24,
              flexWrap: 'wrap',
            }}
          >
            <h3
              style={{
                fontFamily: V.serif,
                fontWeight: 600,
                fontSize: 'clamp(40px, 5vw, 60px)',
                color: V.cream,
                margin: 0,
                letterSpacing: '-0.025em',
              }}
            >
              {tier.name}
            </h3>
            <div
              style={{
                fontFamily: V.serif,
                fontWeight: 700,
                fontSize: 'clamp(48px, 6vw, 84px)',
                color: V.gold,
                letterSpacing: '-0.03em',
                lineHeight: 1,
              }}
            >
              ${tier.price}
            </div>
          </div>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 12,
            }}
          >
            {tier.features.map((f) => (
              <li
                key={f}
                style={{
                  fontFamily: V.sans,
                  fontSize: 15,
                  color: V.cream,
                  paddingLeft: 24,
                  position: 'relative',
                  lineHeight: 1.5,
                }}
              >
                <span
                  aria-hidden
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 2,
                    color: V.gold,
                    fontWeight: 700,
                  }}
                >
                  ✓
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="#checkout"
          style={{
            background: V.gold,
            color: V.bg,
            padding: '22px 36px',
            borderRadius: 4,
            fontFamily: V.sans,
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            alignSelf: 'end',
          }}
        >
          GET INSTANT ACCESS — ${tier.price}
        </Link>
      </div>
    </div>
  );
}

function TierCard({ tier, accent = false }: { tier: BundlePlanData; accent?: boolean }) {
  return (
    <div
      style={{
        background: accent ? 'linear-gradient(180deg, #1A1F2E 0%, #0F1320 100%)' : V.card,
        border: accent ? `1px solid ${V.gold}` : `1px solid ${V.cardBorder}`,
        borderRadius: 12,
        padding: 40,
        position: 'relative',
      }}
    >
      {accent && (
        <div
          style={{
            position: 'absolute',
            top: -14,
            left: 32,
            background: V.gold,
            color: V.bg,
            fontFamily: V.mono,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            padding: '6px 14px',
            borderRadius: 2,
          }}
        >
          ★ Most chosen
        </div>
      )}
      <h3
        style={{
          fontFamily: V.serif,
          fontWeight: 600,
          fontSize: 32,
          color: V.cream,
          margin: 0,
          letterSpacing: '-0.02em',
        }}
      >
        {tier.name}
      </h3>
      <div
        style={{
          fontFamily: V.serif,
          fontWeight: 700,
          fontSize: 64,
          color: accent ? V.gold : V.cream,
          letterSpacing: '-0.03em',
          lineHeight: 1,
          margin: '20px 0 28px',
        }}
      >
        ${tier.price}
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 36px' }}>
        {tier.features.map((f) => (
          <li
            key={f}
            style={{
              fontFamily: V.sans,
              fontSize: 14,
              color: V.cream,
              paddingLeft: 22,
              position: 'relative',
              lineHeight: 1.55,
              marginBottom: 10,
            }}
          >
            <span aria-hidden style={{ position: 'absolute', left: 0, top: 0, color: V.gold, fontWeight: 700 }}>✓</span>
            {f}
          </li>
        ))}
      </ul>
      <Link
        href="#checkout"
        style={{
          display: 'block',
          textAlign: 'center',
          background: accent ? V.gold : 'transparent',
          color: accent ? V.bg : V.gold,
          border: accent ? 'none' : `1px solid ${V.gold}`,
          padding: '16px 24px',
          borderRadius: 4,
          fontFamily: V.sans,
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: '0.08em',
          textDecoration: 'none',
        }}
      >
        CLAIM {tier.name.replace(/^THE /, '')} — ${tier.price}
      </Link>
    </div>
  );
}
