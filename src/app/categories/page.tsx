import type { Metadata } from 'next';
import { Banner } from '@/components/v2/Banner';
import { Nav } from '@/components/v2/Nav';
import { Footer } from '@/components/v2/Footer';
import { CategoryCard } from '@/components/v2/CategoryCard';
import { SectionHeader } from '@/components/v2/SectionHeader';
import CheckoutLink from '@/components/CheckoutLink';
import { getCategories } from '@/lib/api';

export const metadata: Metadata = {
  title: 'All 27 categories · AnyImmi — The goldmine of Canadian immigration assets',
  description:
    'Browse every category in the AnyImmi vault. 305 production-ready immigration assets across 27 categories, built for Canadian RCIC practices.',
};

export default async function CategoriesPage() {
  const categories = await getCategories();
  const totalAssets = categories.reduce((sum, c) => sum + (c.assetCount || 0), 0);

  return (
    <>
      <Banner />
      <Nav />
      <main className="bg-[var(--color-cream)]">
        <section className="border-b border-[var(--color-line)] bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
            <div className="font-mono text-[11.5px] font-bold uppercase tracking-[0.14em] text-[var(--color-indigo)]">
              {categories.length} categories · {totalAssets} assets · zero fluff
            </div>
            <h1 className="mt-4 text-balance text-[34px] font-extrabold leading-[1.1] tracking-tight text-[var(--color-navy)] md:text-[52px]">
              Browse every asset in the goldmine.
            </h1>
            <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-[var(--color-muted)]">
              Every category ships with layered PSD/AI source files, editable DOCX, Canva variants
              where relevant, and a one-line description of exactly when to use it. All 100%
              CICC-compliant.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {categories.map((cat) => (
                <CategoryCard key={cat._id || cat.slug} cat={cat} />
              ))}
            </div>

            {categories.length === 0 && (
              <div className="mt-12 rounded-2xl border border-dashed border-[var(--color-line)] bg-white px-6 py-14 text-center">
                <p className="text-[14.5px] text-[var(--color-muted)]">
                  The vault is loading. Check back in a moment — or grab instant access now.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
            <SectionHeader
              eyebrow="All 27 included in every tier"
              title="One purchase. Everything unlocked. Forever."
              sub="No upsell wall. No drip-fed modules. No subscription. Pay once, download everything, run your practice."
            />
            <div className="mt-10 flex justify-center">
              <CheckoutLink
                tier="toolkit"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-indigo)] px-8 py-4 text-[15px] font-semibold text-white shadow-[var(--shadow-lift)] transition hover:bg-[var(--color-indigo-soft)]"
              >
                Get Instant Access — $197
              </CheckoutLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
