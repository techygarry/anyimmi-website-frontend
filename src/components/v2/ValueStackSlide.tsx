import { Check } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const ITEMS = [
  ['305 immigration assets, 27 categories', '$12,500'],
  ['4 free AI tools — CRS, NOC, EE, SOP', '$588/yr'],
  ['Lifetime updates + new asset drops', '$497/yr'],
  ['Custom branding on all files (The Firm)', '$2,000'],
  ['50 custom-branded social designs', '$1,500'],
  ['Letterhead + business card + signature', '$300'],
  ['Brand guide PDF', '$500'],
  ['Done-for-you website (5–7 days)', '$4,500'],
  ['Million Dollar Vault — 12 bonus assets', '$2,997'],
  ['90-day access to AI Tools + CRM + DOSSIAR', '$621'],
  ['1-on-1 founder onboarding call (45 min)', '$497'],
  ['VIP Slack — 6 months', '$1,200'],
  ['Lifetime grandfathering on future pricing', 'priceless'],
];

export function ValueStackSlide() {
  return (
    <section className="bg-[var(--color-cream)] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <SectionHeader
          eyebrow="The math if you bought this piecemeal"
          title="What you'd pay. What you'll pay."
        />

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-[var(--color-line)] bg-white shadow-[var(--shadow-card)]">
          <ul>
            {ITEMS.map(([label, price]) => (
              <li
                key={label}
                className="flex items-center justify-between gap-4 border-b border-[var(--color-line)] px-6 py-3.5 text-[14px] last:border-b-0 md:px-8 md:text-[15px]"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DCFCE7] text-[var(--color-success)]">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-[var(--color-navy)]">{label}</span>
                </div>
                <span className="font-mono text-[13.5px] font-semibold text-[var(--color-muted)]">
                  {price}
                </span>
              </li>
            ))}
          </ul>

          <div className="border-t-2 border-[var(--color-navy)]/10 bg-[var(--color-navy)] px-6 py-6 text-white md:px-8">
            <div className="flex items-center justify-between">
              <span className="text-[14px] font-semibold uppercase tracking-[0.08em] text-white/70">
                Real-world value
              </span>
              <span className="font-mono text-[22px] font-bold">$25,112</span>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-[13px] text-white/60">Typical agency retainer equivalent</span>
              <span className="font-mono text-[15px] text-white/60 line-through decoration-[var(--color-alert)] decoration-2">
                $3,500/mo
              </span>
            </div>
            <div className="mt-4 border-t border-white/10 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-[15px] font-semibold">Your price — The Founder</span>
                <span className="font-mono text-[32px] font-extrabold text-[var(--color-gold)]">
                  $697
                </span>
              </div>
              <div className="mt-1 text-right font-mono text-[12px] font-bold uppercase tracking-[0.1em] text-[var(--color-gold-soft)]">
                Save $24,415
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
