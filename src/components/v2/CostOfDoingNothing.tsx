import { AlertTriangle, Clock, Gavel } from 'lucide-react';

const ITEMS = [
  {
    k: '$5,000',
    label: 'lost per month',
    detail: 'One unfilled PR deal, every month, because your funnel leaks leads to the unlicensed guy with a flashier reel.',
    icon: AlertTriangle,
    tint: 'text-[var(--color-alert)] bg-[#FEE2E2]',
  },
  {
    k: '50 hours',
    label: 'DIY black hole',
    detail: 'The time you\u2019ll spend per launch in Canva tutorials, YouTube rabbit holes, and redoing colors. You\u2019re billing $300/hr.',
    icon: Clock,
    tint: 'text-[var(--color-indigo)] bg-[var(--color-indigo-bg)]',
  },
  {
    k: '$25,000',
    label: 'CICC complaint',
    detail: 'One non-compliant post, one screenshot, one former client. That\u2019s the lower bound on a compliance complaint defense.',
    icon: Gavel,
    tint: 'text-[#92400E] bg-[#FEF3C7]',
  },
];

export function CostOfDoingNothing() {
  return (
    <section className="bg-[var(--color-cream)] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 font-mono text-[11.5px] font-bold uppercase tracking-[0.14em] text-[var(--color-alert)]">
            The cost of doing nothing
          </div>
          <h2 className="text-balance text-[28px] font-extrabold leading-tight tracking-tight text-[var(--color-navy)] md:text-[40px]">
            Every month you wait, the math gets worse.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ITEMS.map((it) => (
            <div
              key={it.label}
              className="rounded-2xl border border-[var(--color-line)] bg-white p-7 shadow-[var(--shadow-card)]"
            >
              <div
                className={`mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg ${it.tint}`}
              >
                <it.icon size={18} strokeWidth={2.25} />
              </div>
              <div className="font-mono text-[36px] font-extrabold leading-none tracking-tight text-[var(--color-navy)]">
                {it.k}
              </div>
              <div className="mt-1 text-[13px] font-semibold uppercase tracking-[0.06em] text-[var(--color-muted)]">
                {it.label}
              </div>
              <p className="mt-4 text-[14.5px] leading-relaxed text-[var(--color-muted)]">{it.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
