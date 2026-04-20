import { SectionHeader } from './SectionHeader';
import { Gift } from 'lucide-react';

const BONUSES = [
  { name: 'Million Dollar Vault (12 bonus assets)', value: 2997 },
  { name: 'Done-for-you website (5–7 days)', value: 4500 },
  { name: '90-day access to AI Tools + CRM + DOSSIAR', value: 621 },
  { name: '1-on-1 founder onboarding call', value: 497 },
  { name: 'VIP Slack — 6 months', value: 1200 },
  { name: 'Grandfathered lifetime pricing', value: 0, note: 'priceless' },
];

const TOTAL = BONUSES.reduce((acc, b) => acc + b.value, 0);

export function BonusStack() {
  return (
    <section className="bg-gradient-to-br from-[#FAF6E9] via-[#FFFCF2] to-[#FAF6E9] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <SectionHeader
          eyebrow="If you act before July 1"
          title="Stack these bonuses on top — free for Founder buyers."
          sub="Every single one disappears the moment we hit 500 Founder seats or Canada Day, whichever comes first."
        />

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-[#E8D791] bg-white p-8 shadow-[var(--shadow-gold)] md:p-10">
          <ul className="divide-y divide-[#F1E4B6]">
            {BONUSES.map((b) => (
              <li
                key={b.name}
                className="flex items-center justify-between gap-4 py-3.5 text-[14.5px]"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-gold)]/15 text-[var(--color-gold)]">
                    <Gift size={15} strokeWidth={2.25} />
                  </span>
                  <span className="text-[var(--color-navy)]">{b.name}</span>
                </div>
                <span className="font-mono text-[13px] font-bold text-[var(--color-navy)]">
                  {b.note ? b.note : `$${b.value.toLocaleString()}`}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center justify-between border-t-2 border-[var(--color-gold)] pt-5">
            <span className="font-mono text-[11.5px] font-bold uppercase tracking-[0.12em] text-[var(--color-navy)]">
              Bonus stack total
            </span>
            <span className="font-mono text-[24px] font-extrabold text-[var(--color-navy)]">
              ${TOTAL.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
