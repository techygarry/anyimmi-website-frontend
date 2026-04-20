import type { Metadata } from 'next';
import { Fraunces } from 'next/font/google';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AnyImmi — The goldmine of Canadian immigration assets (Members Vault)',
  description:
    'A private vault of 305 battle-tested templates, playbooks, and arsenal pieces for Canadian RCICs. Membership closes July 1, 2026.',
};

export default function VariantLayout({ children }: { children: React.ReactNode }) {
  return <div className={fraunces.variable}>{children}</div>;
}
