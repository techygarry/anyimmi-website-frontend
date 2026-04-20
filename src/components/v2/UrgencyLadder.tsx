import { SectionHeader } from './SectionHeader';

const STEPS = [
  {
    tag: 'Right now',
    price: 697,
    label: 'Founder tier',
    body: 'First 500 Canadian RCICs. Full bonus stack. Grandfathered on every future price change.',
    tone: 'bg-[var(--color-navy)] text-white',
    price_cls: 'text-[var(--color-gold)]',
  },
  {
    tag: 'When we hit 500',
    price: 1497,
    label: 'Public launch',
    body: 'Same vault, no founder bonuses, no grandfather. New buyers only. Slack closes to founders only.',
    tone: 'border border-[var(--color-line)] bg-white text-[var(--color-navy)]',
    price_cls: 'text-[var(--color-navy)]',
  },
  {
    tag: 'After July 1, 2026',
    price: 1997,
    label: 'Post-launch',
    body: 'Priced like what it actually is: a million-dollar practice playbook. No more bonuses. No trials.',
    tone: 'border border-[var(--color-line)] bg-white text-[var(--color-navy)]',
    price_cls: 'text-[var(--color-navy)]',
  },
];

export function UrgencyLadder() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why the price only goes up"
          title="This is the cheapest it will ever be."
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <div
              key={s.tag}
              className={`relative overflow-hidden rounded-2xl p-7 shadow-[var(--shadow-card)] ${s.tone}`}
            >
              <div className="font-mono text-[10.5px] font-bold uppercase tracking-[0.14em] opacity-70">
                Step {i + 1} · {s.tag}
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className={`font-mono text-[40px] font-extrabold leading-none ${s.price_cls}`}>
                  ${s.price.toLocaleString()}
                </span>
              </div>
              <div className="mt-1 text-[13px] font-semibold uppercase tracking-[0.08em] opacity-70">
                {s.label}
              </div>
              <p className="mt-4 text-[13.5px] leading-relaxed opacity-80">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
