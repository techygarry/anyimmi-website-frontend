import { SectionHeader } from './SectionHeader';
import { ExternalLink, Sparkles, Users, FolderCog } from 'lucide-react';

const PRODUCTS = [
  {
    name: 'AI Portal',
    tag: 'LIVE NOW',
    tagCls: 'bg-[#DCFCE7] text-[#065F46]',
    summary:
      'Four production-grade tools for Canadian RCIC practices: CRS Calculator, NOC Finder, Express Entry Draw Tracker, SOP Generator.',
    points: ['CRS + NOC logic current to IRCC', 'Unlimited runs on the free plan', 'Client-facing embeddable widgets'],
    href: 'https://portal.anyimmi.com',
    icon: Sparkles,
    accent: 'from-[#4F46E5] to-[#7C3AED]',
  },
  {
    name: 'AnyImmi CRM',
    tag: 'COMING JULY 2026',
    tagCls: 'bg-[#FEF3C7] text-[#92400E]',
    summary:
      'Canada-first CRM with GCKey handoff, document request automation, CICC audit log, WhatsApp + email pipelines.',
    points: ['Replace Docketwise for a fraction', '90 days free with the Founder tier', 'Built by RCICs, for RCICs'],
    href: 'https://crm.anyimmi.com',
    icon: Users,
    accent: 'from-[#0EA5E9] to-[#4F46E5]',
  },
  {
    name: 'DOSSIAR',
    tag: 'COMING JULY 2026',
    tagCls: 'bg-[#FEF3C7] text-[#92400E]',
    summary:
      'AI dossier builder. Drag-drop client documents in, get an IRCC-formatted submission package out in minutes — not weeks.',
    points: ['Auto LOE drafting', 'Program-aware checklists', '90 days free with the Founder tier'],
    href: 'https://dossiar.anyimmi.com',
    icon: FolderCog,
    accent: 'from-[#D4AF37] to-[#F59E0B]',
  },
];

export function ProductShowcase() {
  return (
    <section className="bg-[var(--color-cream-2)] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <SectionHeader
          eyebrow="Three products. One ecosystem."
          title="The vault is step one. The software is the rest of your career."
          sub="Founder-tier buyers get 90 days free on all three. They ship with the same opinion: Canadian-compliant by default."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {PRODUCTS.map((p) => (
            <div
              key={p.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white p-7 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
            >
              <div
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${p.accent} text-white`}
              >
                <p.icon size={18} strokeWidth={2.25} />
              </div>
              <div className="mt-5 flex items-center gap-2">
                <h3 className="text-[19px] font-bold tracking-tight text-[var(--color-navy)]">
                  {p.name}
                </h3>
                <span
                  className={`rounded-full px-2 py-0.5 font-mono text-[9.5px] font-bold uppercase tracking-[0.09em] ${p.tagCls}`}
                >
                  {p.tag}
                </span>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-muted)]">
                {p.summary}
              </p>
              <ul className="mt-4 space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2 text-[13px] text-[var(--color-navy)]/85">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-indigo)]" />
                    {pt}
                  </li>
                ))}
              </ul>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-indigo)] hover:opacity-80"
              >
                Visit website
                <ExternalLink size={13} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
