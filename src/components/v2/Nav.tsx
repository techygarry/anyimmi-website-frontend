'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { href: '/#assets', label: 'Assets' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-white/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-[15px] font-bold tracking-tight text-[var(--color-navy)]">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[var(--color-navy)] text-white">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h10"/></svg>
            </span>
            AnyImmi
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[14px] font-medium text-[var(--color-navy)] transition-opacity hover:opacity-70"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/#pricing"
              className="hidden rounded-lg bg-[var(--color-indigo)] px-4 py-2 text-[13px] font-semibold text-white shadow-[var(--shadow-card)] transition hover:bg-[var(--color-indigo-soft)] lg:inline-flex"
            >
              Get Instant Access
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--color-line)] text-[var(--color-navy)] lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 top-16 z-30 bg-white px-6 pb-10 pt-6 lg:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[15px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-cream-2)]"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#pricing"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-lg bg-[var(--color-indigo)] px-5 py-3 text-center text-[14px] font-semibold text-white"
            >
              Get Instant Access — $197
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
