export function OriginStory() {
  return (
    <section className="bg-[var(--color-cream-2)] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="mb-5 text-center font-mono text-[11.5px] font-bold uppercase tracking-[0.14em] text-[var(--color-indigo)]">
            A letter from the founder
          </div>
          <div className="rounded-3xl border border-[var(--color-line)] bg-white p-8 shadow-[var(--shadow-card)] md:p-12">
            <h3 className="text-balance text-[26px] font-extrabold leading-tight tracking-tight text-[var(--color-navy)] md:text-[32px]">
              8 years ago, I was you.
            </h3>
            <div className="mt-6 space-y-5 text-[15.5px] leading-relaxed text-[var(--color-navy)]/80">
              <p>
                Canva trial expired. A $40 Fiverr website that looked like a dental clinic. Zero
                idea how to market legally under CICC without tripping a compliance complaint.
                Instagram DMs from ghost consultants quoting clients half my fee.
              </p>
              <p>
                Took me <span className="font-semibold text-[var(--color-navy)]">eight years</span>{' '}
                and well over <span className="font-semibold text-[var(--color-navy)]">$1,000,000</span>{' '}
                in designers, funnel builders, copywriters, compliance lawyers, and failed
                campaigns to figure out what actually converts for a Canadian RCIC practice.
              </p>
              <p className="text-[var(--color-navy)]">
                Every template, every script, every client kit in the vault is something I use in
                my own practice, right now. This is the{' '}
                <span className="border-b-2 border-[var(--color-gold)] font-semibold">
                  goldmine I wish someone had handed me on day one.
                </span>
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3 border-t border-[var(--color-line)] pt-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-navy)] text-[13px] font-bold text-white">
                AI
              </div>
              <div>
                <div className="text-[14px] font-semibold text-[var(--color-navy)]">AnyImmi Founder</div>
                <div className="text-[12.5px] text-[var(--color-muted)]">RCIC-IRB · Licensed since 2018</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
