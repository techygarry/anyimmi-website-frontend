import type { Metadata } from 'next';
import { Check, Lock, Shield, Star, X } from 'lucide-react';
import InnerPageLayout from '@/components/InnerPageLayout';
import CheckoutLink from '@/components/CheckoutLink';
import FounderCounterBanner from '@/components/FounderCounterBanner';
import BonusCountdownBanner from '@/components/BonusCountdownBanner';
import FaqAccordion, { type FaqItem } from '@/components/FaqAccordion';
import {
  getBundlePlans,
  getFounderCounter,
  getBonusCountdown,
  type BundlePlanData,
} from '@/lib/api';

export const metadata: Metadata = {
  title: 'Pricing — AnyImmi Bundle | The 305-asset shortcut to a real immigration practice',
  description:
    'THE TOOLKIT $147 · THE FIRM $397 · THE FOUNDER $697. 305 ready-to-use assets, custom branding, done-for-you website, and 3 months of AI Tools + CRM + DOSSIAR.',
};

// ─── Defaults mirroring the locked strategy spec (used if API is cold) ───

const DEFAULT_PLANS: BundlePlanData[] = [
  {
    id: 'toolkit',
    name: 'THE TOOLKIT',
    price: 147,
    valuePrice: 2585,
    portalProMonths: 0,
    tagline: "I'm starting and need the tools.",
    valueAnchor: 'was $97 launch · normally $1,997',
    features: [
      '305 ready-to-use assets across 27 categories',
      'All PSDs, AI files, PDFs, calculators',
      'Lifetime updates (we ship monthly)',
      '4 free AI tools (CRS · NOC · EE Draw · SOP gen)',
      "Money-back if you don't save 20 hrs in 30 days",
    ],
    delivery: 'Instant',
    highlight: false,
    active: true,
  },
  {
    id: 'firm',
    name: 'THE FIRM',
    price: 397,
    valuePrice: 6885,
    portalProMonths: 0,
    tagline: 'I run a firm and need to look like one.',
    valueAnchor: 'was $297 launch · normally $4,997',
    features: [
      "EVERYTHING IN THE TOOLKIT, plus:",
      "Your firm's logo + colors on every key file",
      '50 social media designs custom-built for you',
      'Letterhead + business card + email signature',
      'Brand guide PDF (your colors / fonts / voice)',
      'Delivered in 1–3 business days, not weeks',
      'Same money-back guarantee',
    ],
    delivery: '1–3 business days',
    highlight: false,
    active: true,
  },
  {
    id: 'founder',
    name: 'THE FOUNDER',
    price: 697,
    valuePrice: 24812,
    portalProMonths: 3,
    tagline: "I'm building something. I take it seriously.",
    valueAnchor: 'was $497 launch · normally $14,997',
    features: [
      'EVERYTHING IN THE FIRM, plus:',
      'Done-for-you website (5–7 days, mobile, SEO)',
      'THE MILLION DOLLAR VAULT — locked bonus pack',
      '3 MONTHS FREE — AI Tools, CRM, and DOSSIAR',
      '1-on-1 onboarding call with founder (45 min)',
      'VIP support for 6 months (Slack DM access)',
      'Lifetime grandfathering on everything',
    ],
    topTierEntitlements: ['AI Tools', 'CRM', 'DOSSIAR'],
    delivery: '5–7 days for website, rest instant',
    highlight: true,
    active: true,
  },
];

// ─── Comparison shame table rows (from §3.7) ───────────────────────────

interface ShameRow {
  label: string;
  toolkit: 'yes' | 'no' | 'locked';
  firm: 'yes' | 'no' | 'locked';
  founder: 'yes' | 'no' | 'locked';
  emphasize?: boolean;
}

const SHAME_ROWS: ShameRow[] = [
  { label: 'Files', toolkit: 'yes', firm: 'yes', founder: 'yes' },
  { label: 'Custom branding', toolkit: 'no', firm: 'yes', founder: 'yes' },
  { label: 'Done-for-you website', toolkit: 'no', firm: 'no', founder: 'yes' },
  { label: 'Million Dollar Vault', toolkit: 'locked', firm: 'locked', founder: 'yes' },
  { label: 'AI Tools (3 mo)', toolkit: 'no', firm: 'no', founder: 'yes' },
  { label: 'CRM (3 mo)', toolkit: 'no', firm: 'no', founder: 'yes' },
  { label: 'DOSSIAR (3 mo)', toolkit: 'no', firm: 'no', founder: 'yes' },
  { label: 'Founder onboarding call', toolkit: 'no', firm: 'no', founder: 'yes' },
  { label: 'Slack VIP access', toolkit: 'no', firm: 'no', founder: 'yes' },
  { label: 'Lifetime price lock', toolkit: 'no', firm: 'no', founder: 'yes' },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Why is this so cheap? What's the catch?",
    a: "There isn't one. The bundle is priced to get as many RCICs inside our ecosystem as possible. We make our real money on the AI Tools, CRM, and DOSSIAR subscriptions that come free with THE FOUNDER for 3 months. If even 30% of you keep one of those products, the math works. You win either way — keep the assets forever, cancel the subs if you don't use them.",
  },
  {
    q: "Do I need the done-for-you website to get value?",
    a: "No. THE TOOLKIT ($147) alone gives you 305 assets that would take a freelancer 100+ hours to recreate. The website in THE FOUNDER is a shortcut for people who don't have one yet — if you already have a site you're happy with, THE FIRM ($397) with custom branding is probably your tier.",
  },
  {
    q: "What happens after the 3 free months on AI Tools / CRM / DOSSIAR?",
    a: "You get a 14-day heads-up before your trial ends. Each product continues at its standard monthly rate only if you choose to keep it — AI Tools $49/mo, CRM $79/mo, DOSSIAR $79/mo. No auto-renew traps, no annual lock-in. Cancel any or all with two clicks. FOUNDER buyers are price-locked forever on whatever they keep.",
  },
  {
    q: "Can I upgrade from THE TOOLKIT or THE FIRM later?",
    a: "Yes — for 24 hours after purchase. After that the upgrade path closes and you'd need to buy the higher tier at full price. That's intentional: the founder price only exists for people who commit on day one. We'll show you the exact difference in a modal right after checkout.",
  },
  {
    q: "What if I'm not in Canada yet, or I consult on another country?",
    a: "The branding, social media, brochures, and website templates work for any immigration practice globally — we'll ship Australia, UK, and US regional variants through 2026 and everything inside THE FOUNDER's lifetime grandfathering means you get those updates free forever. Anyone outside Canada today is getting early-bird pricing on a product that only gets bigger.",
  },
  {
    q: "What's THE MILLION DOLLAR VAULT?",
    a: "12 assets we spent 8 years and $1M+ figuring out — the high-ticket lead-magnet funnel, the referral flywheel deck, the IRCC complaint-proof client-intake SOP, the price-anchor proposal template, and 8 others. It's locked behind THE FOUNDER because those are the assets that actually built our practice. Available nowhere else.",
  },
  {
    q: "Is there a refund policy?",
    a: "Triple guarantee. 30-day 100% money-back if you don't save 20+ hours in your first month. 'Better than your $5k consultant' — find better assets anywhere, even free, we refund. Founder Lock-In — if AnyImmi raises prices, your tier is grandfathered forever. We take the risk, not you.",
  },
  {
    q: "How many founder seats are left?",
    a: "See the counter at the top of this page — it's real and ticks up in real time. Once we hit 500, THE FOUNDER closes and the next tier is $1,497. We don't run sales. The price only goes up.",
  },
];

// ─── Page ──────────────────────────────────────────────────────────────

export default async function PricingPage() {
  const [plansRaw, founderCounter, bonusCountdown] = await Promise.all([
    getBundlePlans(),
    getFounderCounter(),
    getBonusCountdown(),
  ]);

  // Merge API plans over defaults by id so we always have copy for all three tiers.
  const byId = new Map<string, BundlePlanData>();
  for (const p of DEFAULT_PLANS) byId.set(p.id, p);
  for (const p of plansRaw) {
    const existing = byId.get(p.id);
    byId.set(p.id, existing ? { ...existing, ...p } : p);
  }
  const order = ['toolkit', 'firm', 'founder'];
  const plans = order
    .map((id) => byId.get(id))
    .filter((p): p is BundlePlanData => Boolean(p));

  const counter = founderCounter ?? { current: 227, target: 500, remaining: 273 };

  // Default countdown: next Sunday midnight (local to render time)
  const defaultExpiresAt = (() => {
    const d = new Date();
    const day = d.getUTCDay(); // 0 = Sunday
    const daysUntilSunday = (7 - day) % 7 || 7;
    d.setUTCDate(d.getUTCDate() + daysUntilSunday);
    d.setUTCHours(0, 0, 0, 0);
    return d.toISOString();
  })();
  const countdown = bonusCountdown ?? {
    expiresAt: defaultExpiresAt,
    bonusDescription:
      'After Sunday midnight, THE FOUNDER drops the 3-month free trial to 30 days and loses the 1-on-1 call.',
    secondsRemaining: 0,
  };

  return (
    <InnerPageLayout>
      <FounderCounterBanner current={counter.current} target={counter.target} />
      <BonusCountdownBanner expiresAt={countdown.expiresAt} bonusDescription={countdown.bonusDescription} />

      {/* Hero */}
      <section
        style={{
          background: '#fff',
          padding: '96px 24px 56px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '6px 14px',
              borderRadius: 999,
              background: '#EEF2FF',
              color: '#4F46E5',
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 0.3,
              marginBottom: 24,
            }}
          >
            Pricing
          </div>
          <h1
            style={{
              fontSize: 'clamp(36px, 5.5vw, 60px)',
              fontWeight: 800,
              lineHeight: 1.1,
              color: '#0F172A',
              margin: '0 0 24px',
              letterSpacing: -0.5,
            }}
          >
            The 305-asset shortcut to a real Canadian immigration practice.
          </h1>
          <p
            style={{
              fontSize: 'clamp(17px, 2vw, 20px)',
              color: '#475569',
              lineHeight: 1.6,
              maxWidth: 720,
              margin: '0 auto',
            }}
          >
            Built on 8 years and <strong style={{ color: '#0F172A' }}>$1M+</strong> of what actually works for RCICs.
            One payment. Yours forever. Pick the tier that matches how seriously you're building.
          </p>
        </div>
      </section>

      {/* Loss-aversion math block */}
      <section style={{ padding: '40px 24px', background: '#fff' }}>
        <div
          style={{
            maxWidth: 960,
            margin: '0 auto',
            background: '#0F172A',
            color: '#F8FAFC',
            borderRadius: 20,
            padding: '40px 32px',
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 2,
              color: '#818CF8',
              textTransform: 'uppercase',
              marginBottom: 12,
            }}
          >
            The cost of not buying
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 24,
              marginBottom: 28,
            }}
          >
            <LossRow amount="$5,000" label="One unfilled deal/month lost" />
            <LossRow amount="$7,500" label="50 hours of unbilled work lost" />
            <LossRow amount="$25,000" label="One CICC complaint from sloppy comms" />
          </div>
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: '#fff',
              lineHeight: 1.4,
              borderTop: '1px solid rgba(255,255,255,0.12)',
              paddingTop: 24,
            }}
          >
            THE FOUNDER pays for itself the day you close one extra deal.
          </div>
        </div>
      </section>

      {/* Pricing grid */}
      <section style={{ padding: '56px 24px 24px', background: '#fff' }} id="pricing-grid">
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 24,
            alignItems: 'stretch',
          }}
        >
          {plans.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Can't refuse line under FOUNDER */}
        <div
          style={{
            maxWidth: 960,
            margin: '40px auto 0',
            padding: '24px 28px',
            background: '#F0FDF4',
            border: '1px solid #BBF7D0',
            borderRadius: 16,
            color: '#14532D',
            fontSize: 16,
            lineHeight: 1.6,
          }}
        >
          <strong style={{ display: 'block', marginBottom: 6, color: '#065F46' }}>
            THE FOUNDER includes 3 months of AI Tools + CRM + DOSSIAR — worth $621 retail.
          </strong>
          If you'll use even one of them, the bundle effectively costs you <strong>$76</strong>.
          If you'll use all three, you'd be <strong>PAID $76</strong> to take the website + branding + Vault.
        </div>
      </section>

      {/* Million Dollar Vault locked tease */}
      <section style={{ padding: '64px 24px', background: '#FAFAF9' }}>
        <div
          style={{
            maxWidth: 960,
            margin: '0 auto',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2416 100%)',
            borderRadius: 24,
            padding: '48px 40px',
            border: '1px solid rgba(234, 179, 8, 0.25)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: -40,
              right: -40,
              width: 200,
              height: 200,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(234,179,8,0.18) 0%, rgba(234,179,8,0) 70%)',
            }}
            aria-hidden
          />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginBottom: 20,
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 14,
                background: 'linear-gradient(135deg, #EAB308 0%, #CA8A04 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(234, 179, 8, 0.35)',
              }}
            >
              <Lock size={26} color="#1a1a1a" strokeWidth={2.5} />
            </div>
            <div>
              <div
                style={{
                  fontSize: 12,
                  letterSpacing: 2.5,
                  color: '#EAB308',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: 4,
                }}
              >
                Locked bonus · $2,997 value
              </div>
              <h2
                style={{
                  margin: 0,
                  fontSize: 'clamp(24px, 3.5vw, 34px)',
                  color: '#fff',
                  fontWeight: 700,
                  letterSpacing: -0.3,
                }}
              >
                THE MILLION DOLLAR VAULT
              </h2>
            </div>
          </div>
          <p
            style={{
              color: '#E7E5E4',
              fontSize: 17,
              lineHeight: 1.65,
              margin: '0 0 24px',
              maxWidth: 680,
            }}
          >
            12 assets that took 8 years and $1M+ to figure out — the lead-magnet funnel, the referral flywheel,
            the IRCC complaint-proof intake SOP, and nine more. Not sold separately. Not available anywhere else.
          </p>
          <a
            href="#pricing-grid"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '12px 22px',
              background: 'linear-gradient(135deg, #EAB308 0%, #CA8A04 100%)',
              color: '#1a1a1a',
              textDecoration: 'none',
              borderRadius: 10,
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: 0.2,
              boxShadow: '0 10px 30px rgba(234, 179, 8, 0.25)',
            }}
            title="Unlock at THE FOUNDER"
            aria-label="Unlock the Million Dollar Vault at the Founder tier"
          >
            <Lock size={16} /> Unlock at THE FOUNDER →
          </a>
        </div>
      </section>

      {/* Comparison shame table */}
      <section style={{ padding: '64px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 700,
              color: '#0F172A',
              textAlign: 'center',
              margin: '0 0 12px',
              letterSpacing: -0.3,
            }}
          >
            What's actually in each tier
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: '#64748B',
              fontSize: 16,
              margin: '0 0 40px',
            }}
          >
            One look tells you whether you should go cheap or go serious.
          </p>
          <div
            style={{
              border: '1px solid #E2E8F0',
              borderRadius: 16,
              overflow: 'hidden',
              overflowX: 'auto',
            }}
          >
            <table
              style={{
                width: '100%',
                minWidth: 640,
                borderCollapse: 'collapse',
                fontSize: 15,
              }}
            >
              <thead>
                <tr style={{ background: '#F8FAFC' }}>
                  <th style={thStyle}></th>
                  <th style={thStyle}>THE TOOLKIT</th>
                  <th style={thStyle}>THE FIRM</th>
                  <th style={{ ...thStyle, background: '#ECFDF5', color: '#065F46' }}>THE FOUNDER</th>
                </tr>
              </thead>
              <tbody>
                {SHAME_ROWS.map((row) => (
                  <tr key={row.label} style={{ borderTop: '1px solid #F1F5F9' }}>
                    <td style={tdLabelStyle}>{row.label}</td>
                    <td style={tdCellStyle}>
                      <TierMark kind={row.toolkit} />
                    </td>
                    <td style={tdCellStyle}>
                      <TierMark kind={row.firm} />
                    </td>
                    <td style={{ ...tdCellStyle, background: '#ECFDF5' }}>
                      <TierMark kind={row.founder} />
                    </td>
                  </tr>
                ))}
                <tr style={{ borderTop: '2px solid #E2E8F0', background: '#F8FAFC' }}>
                  <td style={{ ...tdLabelStyle, fontWeight: 700 }}>Total price</td>
                  <td style={{ ...tdCellStyle, fontWeight: 700, color: '#0F172A' }}>$147</td>
                  <td style={{ ...tdCellStyle, fontWeight: 700, color: '#0F172A' }}>$397</td>
                  <td
                    style={{
                      ...tdCellStyle,
                      background: '#ECFDF5',
                      fontWeight: 800,
                      color: '#065F46',
                      fontSize: 17,
                    }}
                  >
                    $697
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Triple guarantee */}
      <section style={{ padding: '64px 24px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 700,
              color: '#0F172A',
              textAlign: 'center',
              margin: '0 0 12px',
              letterSpacing: -0.3,
            }}
          >
            Three guarantees. You take no risk.
          </h2>
          <p style={{ textAlign: 'center', color: '#64748B', fontSize: 16, margin: '0 0 40px' }}>
            We take it. Any of these three fails, you get a full refund — no forms, no friction.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 20,
            }}
          >
            <GuaranteeCard
              title="30-day money-back"
              body="If you don't save 20+ hours in your first month, 100% refund. No questions, no forms."
            />
            <GuaranteeCard
              title={'"Better than your $5k consultant"'}
              body="Find better assets anywhere — even free — and we'll refund you. We've compared. We win."
            />
            <GuaranteeCard
              title="Founder Lock-In"
              body="If AnyImmi raises prices, your tier is grandfathered forever. You never pay more."
            />
            <GuaranteeCard
              title="🛡 Fastest refund in the industry"
              body={
                <>
                  If you're going to refund, please do it in <strong>24 hours</strong> — we process within 1 business day,
                  no exit interview, no friction. We'd rather you leave happy than stay annoyed.
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '72px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 700,
              color: '#0F172A',
              textAlign: 'center',
              margin: '0 0 12px',
              letterSpacing: -0.3,
            }}
          >
            Questions, honestly answered.
          </h2>
          <p style={{ textAlign: 'center', color: '#64748B', fontSize: 16, margin: '0 0 40px' }}>
            If we're missing one, email founder@anyimmi.com — we reply within 4 hours.
          </p>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* Final CTA */}
      <section
        style={{
          padding: '80px 24px',
          background: 'linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              fontWeight: 800,
              color: '#fff',
              margin: '0 0 16px',
              lineHeight: 1.15,
              letterSpacing: -0.5,
            }}
          >
            Lock in your founder seat — $697
          </h2>
          <p
            style={{
              color: 'rgba(248, 250, 252, 0.75)',
              fontSize: 18,
              lineHeight: 1.6,
              margin: '0 0 32px',
            }}
          >
            305 assets. Custom branding. Done-for-you website. Million Dollar Vault.
            3 months of AI Tools + CRM + DOSSIAR. One payment. Yours forever.
          </p>
          <CheckoutLink
            tier="founder"
            className=""
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '18px 36px',
              background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
              color: '#fff',
              borderRadius: 12,
              fontWeight: 700,
              fontSize: 18,
              textDecoration: 'none',
              boxShadow: '0 20px 40px rgba(79, 70, 229, 0.4)',
              letterSpacing: 0.2,
            }}
          >
            Claim your founder seat — $697
          </CheckoutLink>
          <div
            style={{
              marginTop: 20,
              color: 'rgba(248, 250, 252, 0.55)',
              fontSize: 14,
            }}
          >
            Only {counter.remaining.toLocaleString()} of {counter.target.toLocaleString()} seats left at this price.
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}

// ─── Sub-components (kept server-side) ─────────────────────────────────

function LossRow({ amount, label }: { amount: string; label: string }) {
  return (
    <div>
      <div style={{ fontSize: 28, fontWeight: 800, color: '#fff', lineHeight: 1.1 }}>{amount}</div>
      <div style={{ fontSize: 14, color: 'rgba(248,250,252,0.7)', marginTop: 6 }}>{label}</div>
    </div>
  );
}

function GuaranteeCard({ title, body }: { title: string; body: React.ReactNode }) {
  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #E2E8F0',
        borderRadius: 16,
        padding: '28px 24px',
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 10,
          background: '#EEF2FF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 16,
        }}
      >
        <Shield size={22} color="#4F46E5" />
      </div>
      <h3
        style={{
          margin: '0 0 8px',
          fontSize: 18,
          fontWeight: 700,
          color: '#0F172A',
        }}
      >
        {title}
      </h3>
      <p style={{ margin: 0, color: '#475569', fontSize: 15, lineHeight: 1.6 }}>{body}</p>
    </div>
  );
}

function PricingCard({ plan }: { plan: BundlePlanData }) {
  const isFounder = plan.id === 'founder';
  const savings = Math.max(0, plan.valuePrice - plan.price);

  const borderStyle: React.CSSProperties = isFounder
    ? {
        border: '2px solid transparent',
        backgroundImage:
          'linear-gradient(#fff, #fff), linear-gradient(135deg, #10B981 0%, #4F46E5 100%)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        boxShadow: '0 30px 60px rgba(16, 185, 129, 0.18)',
      }
    : {
        border: '1px solid #E2E8F0',
        background: '#fff',
      };

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 20,
        padding: isFounder ? '36px 28px 32px' : '32px 28px',
        display: 'flex',
        flexDirection: 'column',
        ...borderStyle,
      }}
    >
      {isFounder && (
        <div
          style={{
            position: 'absolute',
            top: -14,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            padding: '6px 14px',
            background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
            color: '#fff',
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 1.2,
            boxShadow: '0 6px 16px rgba(16, 185, 129, 0.4)',
          }}
        >
          <Star size={12} fill="#fff" /> MOST CHOSEN
        </div>
      )}

      <div style={{ marginBottom: 20 }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 2,
            color: isFounder ? '#059669' : '#64748B',
            textTransform: 'uppercase',
            marginBottom: 10,
          }}
        >
          {plan.name}
        </div>
        {plan.tagline && (
          <div
            style={{
              fontSize: 15,
              color: '#475569',
              lineHeight: 1.5,
              marginBottom: 18,
              fontStyle: 'italic',
            }}
          >
            "{plan.tagline}"
          </div>
        )}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
          <span
            style={{
              fontSize: 'clamp(40px, 5vw, 52px)',
              fontWeight: 800,
              color: '#0F172A',
              letterSpacing: -1.5,
              lineHeight: 1,
            }}
          >
            ${plan.price}
          </span>
          <span style={{ fontSize: 15, color: '#64748B' }}>once</span>
        </div>
        {plan.valueAnchor && (
          <div style={{ fontSize: 13, color: '#94A3B8', marginBottom: 6 }}>{plan.valueAnchor}</div>
        )}
        <div style={{ fontSize: 14, color: '#059669', fontWeight: 600 }}>
          ${plan.valuePrice.toLocaleString()} in value · you save ${savings.toLocaleString()}
        </div>
      </div>

      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: '0 0 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          flex: 1,
        }}
      >
        {plan.features.map((f, i) => {
          const isHeader = f.toUpperCase().startsWith('EVERYTHING IN');
          if (isHeader) {
            return (
              <li
                key={i}
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: '#0F172A',
                  textTransform: 'uppercase',
                  letterSpacing: 0.6,
                  paddingTop: 4,
                }}
              >
                {f}
              </li>
            );
          }
          return (
            <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <Check
                size={18}
                color={isFounder ? '#10B981' : '#4F46E5'}
                strokeWidth={2.5}
                style={{ flexShrink: 0, marginTop: 2 }}
              />
              <span style={{ fontSize: 15, color: '#334155', lineHeight: 1.5 }}>{f}</span>
            </li>
          );
        })}
      </ul>

      {isFounder && (
        <div
          style={{
            background: '#F0FDF4',
            border: '1px solid #BBF7D0',
            borderRadius: 12,
            padding: '14px 16px',
            marginBottom: 20,
            fontSize: 13,
            color: '#14532D',
            lineHeight: 1.55,
          }}
        >
          <strong style={{ color: '#065F46' }}>Why you can't refuse this:</strong> 3 months of AI Tools + CRM + DOSSIAR
          is worth $621. Use one, the bundle costs you $76. Use all three, you're PAID $76 to take the website + Vault.
        </div>
      )}

      <CheckoutLink
        tier={plan.id}
        className=""
        style={{
          display: 'block',
          textAlign: 'center',
          padding: '14px 20px',
          borderRadius: 10,
          fontWeight: 700,
          fontSize: 15,
          textDecoration: 'none',
          letterSpacing: 0.3,
          background: isFounder
            ? 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
            : '#0F172A',
          color: '#fff',
          boxShadow: isFounder ? '0 10px 24px rgba(16, 185, 129, 0.3)' : 'none',
        }}
      >
        {isFounder ? `Lock in founder — $${plan.price}` : `Get ${plan.name} — $${plan.price}`}
      </CheckoutLink>
    </div>
  );
}

function TierMark({ kind }: { kind: 'yes' | 'no' | 'locked' }) {
  if (kind === 'yes') {
    return <Check size={20} color="#10B981" strokeWidth={3} aria-label="Included" />;
  }
  if (kind === 'locked') {
    return <Lock size={18} color="#EAB308" aria-label="Locked — unlock at Founder" />;
  }
  return <X size={18} color="#CBD5E1" aria-label="Not included" />;
}

// ─── Style tokens ──────────────────────────────────────────────────────

const thStyle: React.CSSProperties = {
  padding: '16px 20px',
  textAlign: 'center',
  fontSize: 13,
  fontWeight: 700,
  letterSpacing: 1,
  color: '#64748B',
  textTransform: 'uppercase',
};

const tdLabelStyle: React.CSSProperties = {
  padding: '16px 20px',
  fontSize: 15,
  color: '#0F172A',
  fontWeight: 500,
};

const tdCellStyle: React.CSSProperties = {
  padding: '16px 20px',
  textAlign: 'center',
};
