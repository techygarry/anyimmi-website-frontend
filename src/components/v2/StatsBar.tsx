const STATS = [
  { k: '305', label: 'assets' },
  { k: '27', label: 'categories' },
  { k: '6.4 GB', label: 'arsenal' },
  { k: '500', label: 'founder seats' },
];

export function StatsBar() {
  return (
    <section className="border-y border-[var(--color-line)] bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-10 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-mono text-[30px] font-extrabold leading-none tracking-tight text-[var(--color-navy)] md:text-[40px]">
                {s.k}
              </div>
              <div className="mt-2 text-[12px] font-medium uppercase tracking-[0.08em] text-[var(--color-muted)] md:text-[13px]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
