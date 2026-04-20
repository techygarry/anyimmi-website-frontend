import { SectionHeader } from './SectionHeader';

const OBJECTIONS = [
  {
    q: 'Isn\u2019t this just another template bundle?',
    a: 'No. Generic template bundles aren\u2019t Canadian. Aren\u2019t CICC-compliant. Aren\u2019t written by a licensed RCIC. This is the arsenal of a working $1M+ practice — the specific files, language, and funnels that convert Canadian immigration buyers.',
  },
  {
    q: 'I already have Canva Pro. Why do I need this?',
    a: 'Canva Pro gives you tools. The vault gives you 305 already-designed, already-branded, already-compliant deliverables. You\u2019re not paying for a canvas. You\u2019re paying to never stare at a blank one again.',
  },
  {
    q: 'My clients speak Punjabi / Tagalog / Arabic. Does this work?',
    a: 'Yes. Core assets ship in English (the compliance language) and many social/client-facing assets ship with Punjabi and Filipino variants. Tagalog + Arabic drops are on the Q3 2026 roadmap — free for every buyer.',
  },
  {
    q: '$697 is a lot. Can I start with $197?',
    a: 'Of course. The Essentials ($197) gets you the full vault. The Firm ($397) adds custom branding. The Founder ($697) adds the website, the Vault bonuses, and 90 days of AI Tools + CRM + DOSSIAR. Any tier, same vault, no upsell wall.',
  },
  {
    q: 'Will IRCC or CICC care?',
    a: 'CICC cares. We wrote every client-facing asset with the 2024 Code of Professional Conduct open on the other screen. Included in the bundle: the CICC-compliance playbook and a one-page audit checklist for every campaign you send.',
  },
  {
    q: 'What happens if IRCC policy changes tomorrow?',
    a: 'Lifetime updates. When Express Entry categories shift, when NOC codes move, when proof-of-funds thresholds change — we re-ship the affected assets and email you. Free, forever, on any tier.',
  },
];

export function ObjectionGrid() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <SectionHeader
          eyebrow="Objections, handled"
          title="Every question a smart RCIC asks first."
        />

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
          {OBJECTIONS.map((o, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-cream)] p-6 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[var(--color-navy)] font-mono text-[11px] font-bold text-[var(--color-gold-soft)]">
                  Q
                </span>
                <h3 className="text-[15.5px] font-semibold leading-snug text-[var(--color-navy)]">
                  {o.q}
                </h3>
              </div>
              <p className="ml-9 mt-3 text-[14px] leading-relaxed text-[var(--color-muted)]">{o.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
