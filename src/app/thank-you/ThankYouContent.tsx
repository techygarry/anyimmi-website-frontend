'use client';
import { useSearchParams } from 'next/navigation';
import PostCheckoutUpgradeModal from '@/components/PostCheckoutUpgradeModal';

const PORTAL_URL = process.env.NEXT_PUBLIC_PORTAL_URL || 'http://localhost:3001';

// ─── Types ─────────────────────────────────────────────────────────────

type Tier = 'toolkit' | 'firm' | 'founder';

interface ValueItem {
  title: string;
  value: string; // displayed as "$X,XXX value"
}

// ─── Value stacks per tier (from BUNDLE_PRICING_STRATEGY_V2 §2) ────────

const TOOLKIT_STACK: ValueItem[] = [
  { title: '305 ready-to-use assets across 27 categories', value: '$1,997' },
  { title: 'Editable PSDs, AI files, PDFs, and calculators',   value: 'included' },
  { title: 'Lifetime updates (we ship monthly)',                value: '$288/yr' },
  { title: '4 free AI tools (CRS · NOC · EE Draw · SOP gen)',   value: '$300' },
];

const FIRM_STACK: ValueItem[] = [
  ...TOOLKIT_STACK,
  { title: "Custom branding on every key file (your logo + colors)", value: '$2,500' },
  { title: '50 social media designs custom-built for your firm',      value: '$1,500' },
  { title: 'Letterhead + business card + email signature',            value: '$300' },
  { title: 'Brand guide PDF (your colors, fonts, voice)',             value: '$500' },
];

const FOUNDER_STACK: ValueItem[] = [
  ...FIRM_STACK,
  { title: 'Done-for-you professional website (5–7 days)',                  value: '$4,997' },
  { title: 'THE MILLION DOLLAR VAULT — 12 locked bonus assets',             value: '$2,997' },
  { title: '90 days FREE — AI Tools + CRM + DOSSIAR',                       value: '$621' },
  { title: '1-on-1 founder onboarding call (45 min)',                       value: '$500' },
  { title: 'VIP Slack access + lifetime grandfathering',                    value: 'priceless' },
];

const STACK_BY_TIER: Record<Tier, ValueItem[]> = {
  toolkit: TOOLKIT_STACK,
  firm: FIRM_STACK,
  founder: FOUNDER_STACK,
};

const TIER_DISPLAY: Record<Tier, string> = {
  toolkit: 'THE TOOLKIT',
  firm: 'THE FIRM',
  founder: 'THE FOUNDER',
};

function normalizeTier(raw: string | null): Tier {
  const t = (raw || '').toLowerCase();
  if (t === 'firm') return 'firm';
  if (t === 'founder') return 'founder';
  return 'toolkit';
}

function trialEndDate(): string {
  const d = new Date();
  d.setDate(d.getDate() + 90);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// ─── Component ─────────────────────────────────────────────────────────

export default function ThankYouContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const justBought = searchParams.get('just-bought');
  const tierRaw = searchParams.get('tier') ?? justBought;
  const tier = normalizeTier(tierRaw);

  // Upgrade modal still fires for toolkit/firm (existing behavior).
  const showUpgradeModal = justBought === 'toolkit' || justBought === 'firm';

  const stack = STACK_BY_TIER[tier];
  const tierLabel = TIER_DISPLAY[tier];
  const isFounder = tier === 'founder';

  return (
    <>
      {showUpgradeModal && <PostCheckoutUpgradeModal />}

      {/* ─── Hero: "Welcome inside" ───────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)',
          padding: '96px 24px 72px',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '6px 14px',
              borderRadius: 999,
              background: isFounder
                ? 'linear-gradient(135deg, #EAB308 0%, #CA8A04 100%)'
                : 'rgba(129, 140, 248, 0.18)',
              color: isFounder ? '#1a1a1a' : '#C7D2FE',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: 'uppercase',
              marginBottom: 20,
            }}
          >
            You're in · {tierLabel}
          </div>
          <h1
            style={{
              fontSize: 'clamp(36px, 5.5vw, 60px)',
              fontWeight: 800,
              lineHeight: 1.1,
              margin: '0 0 20px',
              letterSpacing: -0.5,
            }}
          >
            Welcome inside. {isFounder ? "You just moved differently." : "Let's get you moving."}
          </h1>
          <p
            style={{
              fontSize: 'clamp(16px, 2vw, 19px)',
              color: 'rgba(248, 250, 252, 0.75)',
              lineHeight: 1.6,
              maxWidth: 620,
              margin: '0 auto',
            }}
          >
            Your payment is confirmed. Your library is unlocked. Your future self is already grateful.
          </p>
          {sessionId && (
            <p
              style={{
                marginTop: 18,
                fontSize: 13,
                color: 'rgba(248, 250, 252, 0.5)',
              }}
            >
              Order reference: {sessionId.slice(0, 20)}…
            </p>
          )}
        </div>
      </section>

      {/* ─── Section 1: What you got ───────────────────────────── */}
      <section style={{ background: '#fff', padding: '72px 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div
            style={{
              fontSize: 12,
              letterSpacing: 2,
              color: '#4F46E5',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: 10,
            }}
          >
            What you got
          </div>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 36px)',
              fontWeight: 700,
              color: '#0F172A',
              margin: '0 0 32px',
              letterSpacing: -0.3,
            }}
          >
            Everything in {tierLabel}, unlocked right now.
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {stack.map((item, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 16,
                  padding: '18px 22px',
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: 12,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, flex: 1, minWidth: 0 }}>
                  <span
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: '50%',
                      background: isFounder
                        ? 'linear-gradient(135deg, #EAB308 0%, #CA8A04 100%)'
                        : 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                      color: '#fff',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 14,
                      fontWeight: 800,
                      flexShrink: 0,
                      boxShadow: isFounder
                        ? '0 6px 14px rgba(234, 179, 8, 0.3)'
                        : '0 6px 14px rgba(16, 185, 129, 0.25)',
                    }}
                  >
                    ✓
                  </span>
                  <strong style={{ fontSize: 15, color: '#0F172A', lineHeight: 1.45 }}>
                    {item.title}
                  </strong>
                </div>
                <span
                  style={{
                    fontSize: 13,
                    color: '#059669',
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  {item.value === 'included' || item.value === 'priceless'
                    ? item.value
                    : `${item.value} value`}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── Section 2: Trial countdown (FOUNDER only) ─────────── */}
      {isFounder && (
        <section style={{ background: '#FAFAF9', padding: '64px 24px' }}>
          <div
            style={{
              maxWidth: 820,
              margin: '0 auto',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2416 100%)',
              borderRadius: 20,
              padding: '36px 32px',
              border: '1px solid rgba(234, 179, 8, 0.3)',
              color: '#fff',
            }}
          >
            <div
              style={{
                fontSize: 12,
                letterSpacing: 2.5,
                color: '#EAB308',
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: 12,
              }}
            >
              Your 90-day trial starts now
            </div>
            <h2
              style={{
                fontSize: 'clamp(24px, 3.5vw, 32px)',
                fontWeight: 700,
                color: '#fff',
                margin: '0 0 14px',
                letterSpacing: -0.3,
                lineHeight: 1.25,
              }}
            >
              Your 90-day trial of AI Tools + CRM + DOSSIAR starts now.
            </h2>
            <p
              style={{
                color: '#E7E5E4',
                fontSize: 16,
                lineHeight: 1.65,
                margin: '0 0 8px',
              }}
            >
              Trial ends{' '}
              <strong style={{ color: '#FBBF24' }}>{trialEndDate()}</strong>. Use them — they're worth{' '}
              <strong style={{ color: '#FBBF24' }}>$621</strong> retail.
            </p>
            <p style={{ color: 'rgba(231, 229, 228, 0.7)', fontSize: 13, margin: 0 }}>
              No auto-renew traps. Cancel any or all with two clicks. Price-locked if you keep them.
            </p>
          </div>
        </section>
      )}

      {/* ─── Section 3: Your next 3 actions ────────────────────── */}
      <section style={{ background: '#fff', padding: '72px 24px 96px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div
            style={{
              fontSize: 12,
              letterSpacing: 2,
              color: '#4F46E5',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: 10,
            }}
          >
            Your next 3 actions
          </div>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 36px)',
              fontWeight: 700,
              color: '#0F172A',
              margin: '0 0 32px',
              letterSpacing: -0.3,
            }}
          >
            Do these in the next 10 minutes.
          </h2>

          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <ActionRow
              num={1}
              title="Browse your 305 assets"
              body="Your library is live. Everything is in there — social, brochures, email templates, calculators, SOPs."
              cta={{ href: '/library', label: 'Open library →' }}
            />
            <ActionRow
              num={2}
              title="Bookmark your dashboard"
              body={`Head to ${PORTAL_URL.replace(/^https?:\/\//, '')} and pin it in your browser. That's your home base for every tool we ship.`}
              cta={{ href: PORTAL_URL, label: 'Open dashboard →', external: true }}
            />
            {isFounder && (
              <ActionRow
                num={3}
                title="Join the Founder Slack"
                body="Private channel with every Founder tier buyer + the AnyImmi team. Direct access to the founder, plus price-locked feature votes."
                pill="Coming soon"
              />
            )}
            {!isFounder && (
              <ActionRow
                num={3}
                title="Keep your upgrade window open"
                body="You have 24 hours to upgrade to a higher tier at the difference in price. After that, the founder pricing closes."
                cta={{ href: '/pricing', label: 'Review upgrade options →' }}
              />
            )}
          </ol>
        </div>
      </section>
    </>
  );
}

// ─── Small sub-component ───────────────────────────────────────────────

function ActionRow({
  num,
  title,
  body,
  cta,
  pill,
}: {
  num: number;
  title: string;
  body: string;
  cta?: { href: string; label: string; external?: boolean };
  pill?: string;
}) {
  return (
    <li
      style={{
        display: 'flex',
        gap: 18,
        padding: '22px 24px',
        background: '#F8FAFC',
        border: '1px solid #E2E8F0',
        borderRadius: 14,
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          background: '#0F172A',
          color: '#fff',
          fontWeight: 800,
          fontSize: 15,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {num}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 6 }}>
          <h3 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: '#0F172A' }}>{title}</h3>
          {pill && (
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 1,
                padding: '4px 10px',
                background: '#FEF3C7',
                color: '#92400E',
                borderRadius: 999,
                textTransform: 'uppercase',
              }}
            >
              {pill}
            </span>
          )}
        </div>
        <p style={{ margin: '0 0 12px', color: '#475569', fontSize: 14.5, lineHeight: 1.6 }}>{body}</p>
        {cta && (
          <a
            href={cta.href}
            target={cta.external ? '_blank' : undefined}
            rel={cta.external ? 'noopener noreferrer' : undefined}
            style={{
              display: 'inline-block',
              padding: '10px 18px',
              background: '#4F46E5',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 14,
              letterSpacing: 0.2,
            }}
          >
            {cta.label}
          </a>
        )}
      </div>
    </li>
  );
}
