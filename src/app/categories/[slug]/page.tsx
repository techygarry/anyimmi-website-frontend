import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Lock } from 'lucide-react';
import { Banner } from '@/components/v2/Banner';
import { Nav } from '@/components/v2/Nav';
import { Footer } from '@/components/v2/Footer';
import { AssetTile } from '@/components/v2/AssetTile';
import { SectionHeader } from '@/components/v2/SectionHeader';
import { CategoryCard } from '@/components/v2/CategoryCard';
import CategoryIcon from '@/components/CategoryIcon';
import CheckoutLink from '@/components/CheckoutLink';
import {
  getCategories,
  getCategoryBySlug,
  getCategoryItems,
} from '@/lib/api';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = await getCategoryBySlug(slug);
  if (!cat) return { title: 'Category not found — AnyImmi' };
  return {
    title: `${cat.name} — ${cat.assetCount || 0} assets · AnyImmi Vault`,
    description:
      cat.description ||
      `${cat.assetCount || 0} production-ready immigration assets in ${cat.name}. Part of the AnyImmi vault — 305 assets total, $197.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [cat, items, allCategories] = await Promise.all([
    getCategoryBySlug(slug),
    getCategoryItems(slug),
    getCategories(),
  ]);
  if (!cat) notFound();

  const related = allCategories.filter((c) => c.slug !== slug && !c.isLocked).slice(0, 4);

  return (
    <>
      <Banner />
      <Nav />
      <main className="bg-[var(--color-cream)]">
        {/* Hero */}
        <section className="border-b border-[var(--color-line)] bg-white py-14 md:py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
            <nav className="mb-6 flex items-center gap-2 text-[12.5px] text-[var(--color-muted)]">
              <Link href="/" className="hover:text-[var(--color-navy)]">
                Home
              </Link>
              <span>/</span>
              <Link href="/categories" className="hover:text-[var(--color-navy)]">
                Categories
              </Link>
              <span>/</span>
              <span className="text-[var(--color-navy)]">{cat.name}</span>
            </nav>

            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-indigo-bg)] text-[var(--color-indigo)]">
                    {cat.icon ? <CategoryIcon name={cat.icon} size={22} /> : <Lock size={22} />}
                  </div>
                  <div className="font-mono text-[11.5px] font-bold uppercase tracking-[0.14em] text-[var(--color-indigo)]">
                    Category {String((cat.sortOrder ?? 0) + 1).padStart(2, '0')}
                  </div>
                </div>
                <h1 className="mt-4 text-balance text-[34px] font-extrabold leading-[1.1] tracking-tight text-[var(--color-navy)] md:text-[48px]">
                  {cat.name}
                </h1>
                {(cat.longDescription || cat.description) && (
                  <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[var(--color-muted)]">
                    {cat.longDescription || cat.description}
                  </p>
                )}
                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] font-medium text-[var(--color-muted)]">
                  <span>
                    <span className="font-mono font-bold text-[var(--color-navy)]">
                      {cat.assetCount ?? items.length}
                    </span>{' '}
                    assets
                  </span>
                  <span className="h-1 w-1 rounded-full bg-[var(--color-line)]" />
                  <span>Fully editable sources</span>
                  <span className="h-1 w-1 rounded-full bg-[var(--color-line)]" />
                  <span>CICC-compliant</span>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3">
                <CheckoutLink
                  tier="toolkit"
                  className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-indigo)] px-6 py-3.5 text-[14.5px] font-semibold text-white shadow-[var(--shadow-lift)] transition hover:bg-[var(--color-indigo-soft)]"
                >
                  Unlock all 305 — $197
                  <ArrowRight size={15} />
                </CheckoutLink>
                <div className="text-[11.5px] text-[var(--color-muted)]">
                  Instant access · 30-day refund
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Asset grid */}
        <section className="py-14 md:py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <div className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-muted)]">
                  Every asset in this category
                </div>
                <h2 className="mt-2 text-[22px] font-bold text-[var(--color-navy)] md:text-[26px]">
                  {items.length > 0
                    ? `${items.length} assets · heavily fogged`
                    : `${cat.assetCount || 0} assets · fogged previews`}
                </h2>
              </div>
              <div className="hidden text-right md:block">
                <div className="text-[12.5px] text-[var(--color-muted)]">
                  Clear files land in your inbox the moment you unlock.
                </div>
              </div>
            </div>

            {items.length > 0 ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((a) => (
                  <AssetTile
                    key={a._id}
                    name={a.name}
                    description={a.description}
                    format={a.fileFormat}
                    previewUrl={a.previewUrl}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-[var(--color-line)] bg-white p-10 text-center">
                <p className="mx-auto max-w-xl text-[15px] leading-relaxed text-[var(--color-muted)]">
                  This category is being prepared for the Canada Day drop. All{' '}
                  <span className="font-semibold text-[var(--color-navy)]">
                    {cat.assetCount || 'listed'}
                  </span>{' '}
                  assets will land in your vault the moment you unlock. No extra charge, no
                  waiting, no drip.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Browse other categories */}
        {related.length > 0 && (
          <section className="bg-white py-16 md:py-20">
            <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
              <div className="mb-8 flex items-end justify-between">
                <SectionHeader eyebrow="Keep browsing" title="More from the vault." align="left" />
                <Link
                  href="/categories"
                  className="hidden items-center gap-1 text-[13px] font-semibold text-[var(--color-indigo)] md:inline-flex"
                >
                  All 27 categories <ArrowRight size={13} />
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {related.map((c) => (
                  <CategoryCard key={c._id} cat={c} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Pricing teaser */}
        <section className="bg-[var(--color-navy)] py-20 md:py-24">
          <div className="mx-auto max-w-[1280px] px-6 text-center lg:px-8">
            <h2 className="mx-auto max-w-2xl text-balance text-[28px] font-extrabold leading-tight tracking-tight text-white md:text-[40px]">
              Unlock {cat.name} — and the other 26 categories — for $197.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] text-white/70">
              One purchase. 305 production-ready assets. 30-day refund. No subscription.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <CheckoutLink
                tier="toolkit"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-indigo)] px-6 py-3.5 text-[14.5px] font-semibold text-white transition hover:bg-[var(--color-indigo-soft)]"
              >
                Get Instant Access — $197
                <ArrowRight size={15} />
              </CheckoutLink>
              <CheckoutLink
                tier="founder"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-gold)] px-6 py-3.5 text-[14.5px] font-bold text-[var(--color-navy)] transition hover:brightness-105"
              >
                Lock in Founder — $697
                <ArrowRight size={15} />
              </CheckoutLink>
            </div>
            <div className="mt-8 flex justify-center">
              <Link
                href="/categories"
                className="inline-flex items-center gap-1 text-[12.5px] font-medium text-white/60 hover:text-white"
              >
                <ArrowLeft size={13} /> Back to all categories
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
