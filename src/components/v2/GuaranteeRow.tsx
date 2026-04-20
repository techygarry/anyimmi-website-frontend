import { ShieldCheck, ThumbsUp, Lock } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const ITEMS = [
  {
    icon: ShieldCheck,
    title: '30-Day Money-Back',
    body: 'If you hate it, we refund it. No form. No call. Just an email. You keep nothing — including anything you\u2019ve already used. Fair.',
    tint: 'from-[#10B981] to-[#059669]',
  },
  {
    icon: ThumbsUp,
    title: 'Better-Than-Consultant',
    body: 'If a Canadian consultant friend sees your new kit and doesn\u2019t ask where you got it, we\u2019ll refund you and give you back your weekend.',
    tint: 'from-[#4F46E5] to-[#7C3AED]',
  },
  {
    icon: Lock,
    title: 'Founder Lock-In',
    body: 'Founders grandfathered forever. When prices go to $1,497 and $1,997, your $697 stays $697. Future AI modules at founder rates too.',
    tint: 'from-[#D4AF37] to-[#B8912A]',
  },
];

export function GuaranteeRow() {
  return (
    <section className="bg-[var(--color-cream)] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <SectionHeader
          eyebrow="The triple guarantee"
          title="Three ways you can't lose."
          sub="This isn't a lead magnet. It's a serious purchase. So we put serious guarantees behind it."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {ITEMS.map((g) => (
            <div
              key={g.title}
              className="rounded-2xl border border-[var(--color-line)] bg-white p-7 shadow-[var(--shadow-card)]"
            >
              <div
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${g.tint} text-white`}
              >
                <g.icon size={18} strokeWidth={2.25} />
              </div>
              <h3 className="mt-5 text-[18px] font-bold text-[var(--color-navy)]">{g.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-muted)]">{g.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
