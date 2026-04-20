import { Check, ArrowRight } from 'lucide-react';
import CheckoutLink from '@/components/CheckoutLink';
import { SectionHeader } from './SectionHeader';
import type { BundlePlanData } from '@/lib/api';

interface PricingBlockProps {
  plans: BundlePlanData[];
}

const DEFAULT_PLANS: BundlePlanData[] = [
  {
    id: 'essentials',
    name: 'THE ESSENTIALS',
    price: 197,
    valuePrice: 2685,
    portalProMonths: 0,
    features: [
      '305 production-ready immigration assets',
      '27 categories · lifetime access',
      '4 free AI tools — CRS, NOC, EE, SOP',
      'Lifetime updates + new drops',
      '30-day money-back guarantee',
      'Instant access — delivered in minutes',
    ],
    delivery: 'Instant',
    highlight: false,
    active: true,
    valueAnchor: 'Save $2,488',
    tagline: 'The goldmine of Canadian immigration assets.',
  },
  {
    id: 'firm',
    name: 'THE FIRM',
    price: 397,
    valuePrice: 6985,
    portalProMonths: 0,
    features: [
      'Everything in The Essentials',
      'Your logo applied to all 305 files',
      '50 custom-branded social designs',
      'Letterhead + business card + email signature',
      'Brand guide PDF',
      '1–3 business day delivery',
    ],
    delivery: '1–3 business days',
    highlight: false,
    active: true,
    valueAnchor: 'Save $6,588',
    tagline: 'Your brand on the entire vault.',
  },
  {
    id: 'founder',
    name: 'THE FOUNDER',
    price: 697,
    valuePrice: 25112,
    portalProMonths: 3,
    features: [
      'Everything in The Firm',
      'Done-for-you website (5–7 days)',
      'Million Dollar Vault — 12 bonus assets',
      '90-day free access to AI Tools + CRM + DOSSIAR',
      '1-on-1 onboarding call with the founder (45 min)',
      'VIP Slack — 6 months',
      'Grandfathered lifetime pricing',
    ],
    delivery: '5–7 business days',
    highlight: true,
    active: true,
    valueAnchor: 'Save $24,415',
    tagline: 'Goldmine + the keys to the castle.',
  },
];

function pickTier(id: string): string {
  // Map internal plan ids to checkout tier values expected by the backend.
  // The existing backend accepts: 'starter' | 'toolkit' | 'firm' | 'founder'.
  const m: Record<string, string> = {
    essentials: 'toolkit',
    toolkit: 'toolkit',
    starter: 'toolkit',
    firm: 'firm',
    founder: 'founder',
  };
  return m[id.toLowerCase()] || id.toLowerCase();
}

export function PricingBlock({ plans }: PricingBlockProps) {
  const list = plans.length ? plans : DEFAULT_PLANS;
  const essentials = list.find((p) => p.price <= 250) || list[0];
  const firm = list.find((p) => p.price > 250 && p.price < 600) || list[1];
  const founder = list.find((p) => p.price >= 600) || list[2];

  return (
    <section id="pricing" className="bg-[var(--color-cream)] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <SectionHeader
          eyebrow="Three ways in"
          title="Three ways in. All of them pay for themselves."
          sub="Every tier unlocks the same 305 assets. The difference is how much of the rest of the practice you want handed to you."
        />

        {/* Essentials — full-width hero card */}
        <div className="mx-auto mt-14 max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl bg-[var(--color-navy)] p-8 text-white shadow-[var(--shadow-lift)] md:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-[320px] w-[320px] rounded-full"
              style={{
                background:
                  'radial-gradient(closest-side, rgba(79,70,229,0.35), rgba(79,70,229,0) 70%)',
              }}
            />
            <div className="relative grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
              <div>
                <div className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-gold-soft)]">
                  Start here
                </div>
                <h3 className="mt-3 text-[32px] font-extrabold leading-tight tracking-tight md:text-[40px]">
                  {essentials.name} — <span className="font-mono text-[var(--color-gold)]">${essentials.price}</span>
                </h3>
                <p className="mt-3 text-[16px] text-white/75">
                  {essentials.tagline || 'The goldmine of Canadian immigration assets.'}
                </p>
                <ul className="mt-6 grid gap-2.5">
                  {essentials.features.slice(0, 6).map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[14.5px] text-white/85">
                      <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[var(--color-success)]">
                        <Check size={10} strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-start gap-4 md:items-stretch">
                <CheckoutLink
                  tier={pickTier(essentials.id)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-indigo)] px-8 py-4 text-[16px] font-semibold text-white shadow-[var(--shadow-lift)] transition hover:bg-[var(--color-indigo-soft)]"
                >
                  <span>Get Instant Access — ${essentials.price}</span>
                  <ArrowRight size={16} />
                </CheckoutLink>
                <div className="text-[12.5px] text-white/55">
                  One-time payment · 30-day refund · No subscription
                </div>
                {essentials.valueAnchor && (
                  <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-mono text-[11.5px] font-bold uppercase tracking-[0.08em] text-[var(--color-gold-soft)]">
                    {essentials.valueAnchor}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Firm + Founder */}
        <div className="mx-auto mt-6 grid max-w-5xl gap-6 md:grid-cols-2">
          <TierCard plan={firm} tierId={pickTier(firm.id)} />
          <TierCard plan={founder} tierId={pickTier(founder.id)} featured />
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center font-mono text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--color-muted)]">
          No monthly subscription. No upsell wall. No drip-fed modules. Done.
        </div>
      </div>
    </section>
  );
}

function TierCard({
  plan,
  tierId,
  featured = false,
}: {
  plan: BundlePlanData;
  tierId: string;
  featured?: boolean;
}) {
  const borderCls = featured
    ? 'gold-border bg-gradient-to-br from-white via-[#FFFCF2] to-white shadow-[var(--shadow-gold)]'
    : 'border border-[var(--color-line)] bg-white shadow-[var(--shadow-card)]';
  const priceCls = featured ? 'text-[var(--color-navy)]' : 'text-[var(--color-navy)]';
  const ctaCls = featured
    ? 'bg-[var(--color-navy)] text-white hover:bg-[var(--color-navy-soft)]'
    : 'bg-[var(--color-navy)] text-white hover:bg-[var(--color-navy-soft)]';

  return (
    <div className={`relative flex flex-col rounded-3xl p-7 md:p-9 ${borderCls}`}>
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--color-gold)] px-3 py-1 font-mono text-[10.5px] font-bold uppercase tracking-[0.12em] text-[var(--color-navy)] shadow">
          ★ Most chosen
        </div>
      )}
      <div className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-muted)]">
        {featured ? 'The whole ecosystem' : 'Brand-ready'}
      </div>
      <h3 className={`mt-2 text-[24px] font-extrabold leading-tight tracking-tight ${priceCls}`}>
        {plan.name} —{' '}
        <span className="font-mono text-[var(--color-indigo)]">${plan.price}</span>
      </h3>
      <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--color-muted)]">
        {plan.tagline || 'Everything from the previous tier, plus more done for you.'}
      </p>

      <ul className="mt-5 space-y-2.5">
        {plan.features.slice(0, 7).map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-[var(--color-navy)]/85">
            <span className="mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#DCFCE7] text-[var(--color-success)]">
              <Check size={10} strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      {plan.valueAnchor && (
        <div className="mt-5 inline-flex self-start rounded-md bg-[var(--color-cream-2)] px-2.5 py-1 font-mono text-[10.5px] font-bold uppercase tracking-[0.1em] text-[var(--color-navy)]">
          {plan.valueAnchor}
        </div>
      )}

      <CheckoutLink
        tier={tierId}
        className={`mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[14.5px] font-semibold transition ${ctaCls}`}
      >
        <span>
          {featured ? 'Lock in Founder' : 'Upgrade'} — ${plan.price}
        </span>
        <ArrowRight size={15} />
      </CheckoutLink>
    </div>
  );
}
