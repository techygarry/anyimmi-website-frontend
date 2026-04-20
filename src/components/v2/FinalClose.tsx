import CheckoutLink from '@/components/CheckoutLink';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function FinalClose() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-navy)] py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 900px 500px at 50% 0%, rgba(212,175,55,0.16), transparent 65%), radial-gradient(ellipse 600px 500px at 50% 100%, rgba(79,70,229,0.18), transparent 65%)',
        }}
      />
      <div className="relative mx-auto max-w-[1280px] px-6 text-center lg:px-8">
        <div className="mb-5 font-mono text-[11.5px] font-bold uppercase tracking-[0.14em] text-[var(--color-gold-soft)]">
          You&rsquo;re going to do one of three things
        </div>
        <h2 className="mx-auto max-w-3xl text-balance text-[34px] font-extrabold leading-[1.1] tracking-tight text-white md:text-[50px]">
          Build the million-dollar brand now. Or keep watching ghost consultants build it for themselves.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-white/70">
          Close this tab. Open the vault. The third option — waiting until July 2 when it&rsquo;s $1,997 — is the one you
          regret.
        </p>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-3">
          <CheckoutLink
            tier="founder"
            className="group flex items-center justify-center gap-2 rounded-xl bg-[var(--color-gold)] px-6 py-4 text-[14.5px] font-bold text-[var(--color-navy)] shadow-[var(--shadow-gold)] transition hover:brightness-105"
          >
            Lock in Founder — $697
            <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
          </CheckoutLink>
          <CheckoutLink
            tier="toolkit"
            className="group flex items-center justify-center gap-2 rounded-xl bg-[var(--color-indigo)] px-6 py-4 text-[14.5px] font-semibold text-white transition hover:bg-[var(--color-indigo-soft)]"
          >
            Essentials — $197
            <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
          </CheckoutLink>
          <Link
            href="/categories"
            className="group flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-4 text-[14.5px] font-semibold text-white transition hover:bg-white/10"
          >
            Explore all 27 categories
            <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-10 text-[12.5px] font-medium text-white/60">
          30-day refund · No subscription · No upsell wall · Delivered instantly
        </div>
      </div>
    </section>
  );
}
