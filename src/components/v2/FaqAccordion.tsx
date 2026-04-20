'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const FAQS = [
  {
    q: 'How fast will I actually get access?',
    a: 'The Essentials and The Firm are delivered instantly by email plus a login link to the vault. The Firm adds 1–3 business days for custom-branding turnaround. The Founder tier adds a 5–7 business day done-for-you website build.',
  },
  {
    q: 'Is this CICC-compliant? Won\u2019t my licence be at risk?',
    a: 'Yes. The vault includes the CICC Compliance playbook (19 assets) and every client-facing asset was drafted against the 2024 Code of Professional Conduct. We also ship a one-page audit checklist to run before any campaign.',
  },
  {
    q: 'Do I need Photoshop / Illustrator?',
    a: 'For the PSD and AI files, yes — but most assets ship with Canva variants or editable DOCX/PPTX versions. You can run the bulk of the vault with Canva Pro alone.',
  },
  {
    q: 'What if I\u2019m still figuring out my brand?',
    a: 'Start with The Essentials — the designs land beautifully on any brand. When you\u2019re ready, upgrade to The Firm to get everything re-skinned with your logo and colors.',
  },
  {
    q: 'Can I share access with my team / associates?',
    a: 'Yes — solo practitioners and firms up to 5 users are covered under a single license. Firms larger than that, email us; we have a flat team license.',
  },
  {
    q: 'Does this work for Australian immigration agents?',
    a: 'Right now, 100% Canadian-first. The Australia variant is on the 2026 roadmap and every Canada buyer gets a 50% discount when it drops.',
  },
  {
    q: 'Will you update assets when IRCC policy changes?',
    a: 'Yes — lifetime updates on every tier. When categories shift, NOC codes change, or proof-of-funds thresholds move, the affected assets are re-shipped. Free, forever.',
  },
  {
    q: 'What\u2019s the refund policy again?',
    a: 'Email us within 30 days with \u201Crefund\u201D in the subject. Full refund, no questions. No form to fill. No call to schedule. You keep nothing. Fair.',
  },
];

export function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="bg-[var(--color-cream)] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <SectionHeader eyebrow="Questions, answered" title="The real FAQ." />

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white shadow-[var(--shadow-card)]">
          {FAQS.map((f, i) => {
            const open = openIdx === i;
            return (
              <div key={i} className="border-b border-[var(--color-line)] last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-[var(--color-cream)]"
                >
                  <span className="text-[15px] font-semibold text-[var(--color-navy)]">{f.q}</span>
                  <span
                    className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition ${
                      open
                        ? 'bg-[var(--color-navy)] text-white'
                        : 'bg-[var(--color-cream-2)] text-[var(--color-navy)]'
                    }`}
                  >
                    {open ? <Minus size={14} strokeWidth={2.5} /> : <Plus size={14} strokeWidth={2.5} />}
                  </span>
                </button>
                {open && (
                  <div className="px-6 pb-6 text-[14.5px] leading-relaxed text-[var(--color-muted)]">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
