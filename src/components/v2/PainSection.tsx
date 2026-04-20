import { SectionHeader } from './SectionHeader';

export function PainSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-navy)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 900px 400px at 30% 0%, rgba(79,70,229,0.22), transparent 65%), radial-gradient(ellipse 600px 400px at 80% 80%, rgba(212,175,55,0.10), transparent 65%)',
        }}
      />
      <div className="relative mx-auto max-w-[1280px] px-6 py-20 lg:px-8 lg:py-28">
        <SectionHeader
          eyebrow="The real reason you're stuck at 6–10 clients/month"
          title="You're an RCIC. Not a graphic designer. Not a copywriter. Not a funnel-builder."
          sub="And that's exactly the problem. You're losing to people with half your credentials because they have twice your marketing."
          invert
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 text-[15.5px] leading-relaxed text-white/80 md:text-[16px]">
          <p>
            Every week, a <span className="font-semibold text-white">ghost consultant</span> with no
            license, no RCIC number, no professional liability insurance runs Instagram ads that
            make your licensed practice look amateurish. They post glossy reels. You post a logo
            you made in Canva at 11 PM.
          </p>
          <p>
            You&rsquo;re eight hours deep into a landing page in Elementor. Canva trial expired twice.
            Your client brochure is still the stock template from your intake week. You haven&rsquo;t
            shipped a campaign in three months because the design part
            breaks you every single time.
          </p>
          <p>
            A proper marketing agency quotes you{' '}
            <span className="font-mono font-semibold text-[var(--color-gold-soft)]">$3,500/month</span>.
            That&rsquo;s one full IRPA case, gone. And they don&rsquo;t even know what CICC-compliant
            means. You say no. You try to do it yourself. You stay stuck.
          </p>
        </div>
      </div>
    </section>
  );
}
