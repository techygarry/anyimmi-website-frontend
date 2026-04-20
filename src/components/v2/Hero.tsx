import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  founderTaken: number;
  founderTarget: number;
}

export function Hero({ founderTaken, founderTarget }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--color-cream)]">
      {/* soft gradient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-[#F3F1EA] via-[#FAFAF7] to-transparent"
      />
      <div className="relative mx-auto max-w-[1280px] px-6 pb-20 pt-20 md:pt-28 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-white px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-navy)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-alert)]" />
            For Canadian RCICs tired of looking like everyone else
          </div>

          <h1 className="text-balance text-[40px] font-extrabold leading-[1.02] tracking-tight text-[var(--color-navy)] sm:text-[52px] md:text-[64px] lg:text-[72px]">
            Look like a{' '}
            <span className="relative inline-block">
              $50,000/month
              <span
                aria-hidden
                className="absolute -bottom-2 left-0 right-0 h-2 rounded-full bg-[var(--color-gold)]/40"
              />
            </span>
            <br />
            Practice. For $197.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-balance text-[16.5px] leading-relaxed text-[var(--color-muted)] md:text-[18px]">
            305 production-ready immigration assets. Branded templates. Client kits.
            Lead-conversion scripts. Plus 4 AI tools free forever. Everything a Canadian
            immigration consultant needs to stop looking like they opened shop yesterday.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-3">
            <Link
              href="/#pricing"
              className="group inline-flex items-center gap-2 rounded-lg bg-[var(--color-indigo)] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[var(--shadow-lift)] transition hover:bg-[var(--color-indigo-soft)]"
            >
              See what&rsquo;s inside — $197
              <ArrowRight size={17} className="transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/#pricing"
              className="text-[14px] font-semibold text-[var(--color-navy)] underline decoration-[var(--color-gold)] decoration-2 underline-offset-4 hover:opacity-70"
            >
              Or lock in <span className="font-mono">THE FOUNDER</span> for $697 →
            </Link>
          </div>

          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12.5px] font-medium text-[var(--color-muted)]">
            <span>
              <span className="font-mono font-bold text-[var(--color-navy)]">{founderTaken}</span> of{' '}
              <span className="font-mono font-bold text-[var(--color-navy)]">{founderTarget}</span>{' '}
              Founder seats taken
            </span>
            <span className="h-1 w-1 rounded-full bg-[var(--color-line)]" />
            <span>30-day refund</span>
            <span className="h-1 w-1 rounded-full bg-[var(--color-line)]" />
            <span>No subscription</span>
          </div>
        </div>

        {/* premium proof row */}
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="rounded-2xl border border-[var(--color-line)] bg-white p-5 shadow-[var(--shadow-card)] sm:p-6">
            <div className="mb-3 text-center font-mono text-[10.5px] font-bold uppercase tracking-[0.16em] text-[var(--color-muted)]">
              Built on the playbook of a million-dollar RCIC practice
            </div>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                ['$1M+', 'revenue blueprint'],
                ['8 yrs', 'in the trenches'],
                ['305', 'assets shipped'],
                ['100%', 'CICC-compliant'],
              ].map(([k, v]) => (
                <div key={k} className="text-center">
                  <div className="font-mono text-[18px] font-bold text-[var(--color-navy)]">{k}</div>
                  <div className="mt-0.5 text-[11.5px] font-medium text-[var(--color-muted)]">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
