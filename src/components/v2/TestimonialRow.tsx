import { SectionHeader } from './SectionHeader';
import { Star } from 'lucide-react';
import type { TestimonialData } from '@/lib/api';

interface TestimonialRowProps {
  items: TestimonialData[];
}

export function TestimonialRow({ items }: TestimonialRowProps) {
  const list = items.length
    ? items
    : FALLBACK;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <SectionHeader
          eyebrow="From RCICs actually using it"
          title="Real practices. Real outcomes. Real Canadian files."
        />

        <div className="mt-12 -mx-6 px-6 lg:mx-0 lg:px-0">
          <div className="scroll-row flex gap-5 overflow-x-auto pb-4">
            {list.map((t, i) => (
              <article
                key={t._id || i}
                className="flex w-[340px] shrink-0 flex-col rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-card)]"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: Math.min(5, t.rating || 5) }).map((_, idx) => (
                    <Star key={idx} size={14} className="fill-[var(--color-gold)] text-[var(--color-gold)]" />
                  ))}
                </div>
                <p className="mt-4 text-[14.5px] leading-relaxed text-[var(--color-navy)]/85">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-[var(--color-line)] pt-4">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-full text-[12px] font-bold text-white"
                    style={{ backgroundColor: t.avatarColor || '#4F46E5' }}
                  >
                    {initials(t.name)}
                  </div>
                  <div>
                    <div className="text-[13.5px] font-semibold text-[var(--color-navy)]">{t.name}</div>
                    <div className="text-[11.5px] text-[var(--color-muted)]">{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function initials(name: string): string {
  return name
    .split(' ')
    .map((s) => s[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

const FALLBACK: TestimonialData[] = [
  {
    _id: '1',
    name: 'Harpreet S.',
    role: 'RCIC-IRB, Brampton',
    text: 'I stopped rebuilding my brochure in Canva every month. Dropped one asset in, sent it. Closed two Start-Up Visa files in the next 11 days.',
    rating: 5,
    avatarColor: '#4F46E5',
  },
  {
    _id: '2',
    name: 'Jennylyn P.',
    role: 'RCIC, Mississauga',
    text: 'The LOE templates alone are worth $697. My last refusal-turned-approval used the CanadaGap letter template almost verbatim.',
    rating: 5,
    avatarColor: '#D4AF37',
  },
  {
    _id: '3',
    name: 'Ahmed K.',
    role: 'RCIC, Calgary',
    text: 'Ghost consultants quoted my client $1,200. I sent the compliance comparison PDF from the vault. Client signed with me the same afternoon.',
    rating: 5,
    avatarColor: '#0EA5E9',
  },
];
