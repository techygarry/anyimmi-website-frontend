import Link from 'next/link';

const COLS = [
  {
    title: 'Product',
    links: [
      { label: 'All 27 categories', href: '/categories' },
      { label: 'Preview the vault', href: '/preview' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Ecosystem',
    links: [
      { label: 'AI Portal', href: 'https://portal.anyimmi.com' },
      { label: 'AnyImmi CRM', href: 'https://crm.anyimmi.com' },
      { label: 'DOSSIAR', href: 'https://dossiar.anyimmi.com' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms', href: '/terms' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Refund policy', href: '/refund' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-white">
      <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-[15px] font-bold">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white text-[var(--color-navy)]">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h10"/></svg>
              </span>
              AnyImmi
            </Link>
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-white/60">
              The goldmine of Canadian immigration assets for licensed RCICs.
              Built by a working $1M+ practice.
            </p>
            <div className="mt-6 font-mono text-[10.5px] font-bold uppercase tracking-[0.12em] text-[var(--color-gold-soft)]">
              🇨🇦 Launching Canada Day — July 1, 2026
            </div>
          </div>

          {COLS.map((c) => (
            <div key={c.title}>
              <div className="mb-3 font-mono text-[10.5px] font-bold uppercase tracking-[0.14em] text-white/50">
                {c.title}
              </div>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[13.5px] text-white/80 transition hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-[12px] text-white/50 md:flex-row">
          <div>© {new Date().getFullYear()} AnyImmi AI Labs. All rights reserved.</div>
          <div>Built for Canadian RCICs. Australia coming 2026.</div>
        </div>
      </div>
    </footer>
  );
}
