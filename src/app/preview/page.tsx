import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { Banner } from '@/components/v2/Banner';
import { Nav } from '@/components/v2/Nav';
import { Footer } from '@/components/v2/Footer';
import { AssetTile } from '@/components/v2/AssetTile';
import CheckoutLink from '@/components/CheckoutLink';
import { getCategories, getCategoryItems, type CategoryItemData } from '@/lib/api';

export const metadata: Metadata = {
  title: 'A curated glimpse inside the goldmine · AnyImmi',
  description:
    'Heavily fogged previews of real assets from the AnyImmi vault. Unlock all 305 production-ready Canadian immigration assets for $197.',
};

function sampleShuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = (i * 2654435761) % (i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default async function PreviewPage() {
  const categories = await getCategories();
  const unlocked = categories.filter((c) => !c.isLocked).slice(0, 8);
  const itemsNested = await Promise.all(
    unlocked.map((c) => getCategoryItems(c.slug).catch(() => [] as CategoryItemData[])),
  );
  const assets = sampleShuffle(itemsNested.flat()).slice(0, 36);

  return (
    <>
      <Banner />
      <Nav />
      <main className="bg-[var(--color-cream)]">
        {/* Hero */}
        <section className="border-b border-[var(--color-line)] bg-white py-16 md:py-24">
          <div className="mx-auto max-w-[1280px] px-6 text-center lg:px-8">
            <div className="font-mono text-[11.5px] font-bold uppercase tracking-[0.14em] text-[var(--color-indigo)]">
              A curated glimpse inside the goldmine
            </div>
            <h1 className="mx-auto mt-4 max-w-3xl text-balance text-[34px] font-extrabold leading-[1.05] tracking-tight text-[var(--color-navy)] md:text-[52px]">
              Yes, it&rsquo;s real. Yes, it&rsquo;s yours the second you unlock.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-[var(--color-muted)]">
              Every thumbnail below is a real file in the vault. Heavily fogged on purpose.
              The full, clear source files land in your inbox the moment you grab access.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <CheckoutLink
                tier="toolkit"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-indigo)] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[var(--shadow-lift)] transition hover:bg-[var(--color-indigo-soft)]"
              >
                Unlock all 305 — $197
                <ArrowRight size={15} />
              </CheckoutLink>
              <CheckoutLink
                tier="founder"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-gold)] px-7 py-3.5 text-[15px] font-bold text-[var(--color-navy)] transition hover:brightness-105"
              >
                Founder — $697
                <ArrowRight size={15} />
              </CheckoutLink>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
            {assets.length > 0 ? (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {assets.map((a) => (
                  <AssetTile
                    key={a._id}
                    name={a.name}
                    format={a.fileFormat}
                    previewUrl={a.previewUrl}
                    variant="grid"
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-[var(--color-line)] bg-white p-12 text-center">
                <p className="text-[15px] text-[var(--color-muted)]">
                  Preview row is loading. In the meantime,{' '}
                  <CheckoutLink
                    tier="toolkit"
                    className="font-semibold text-[var(--color-indigo)] underline decoration-2 underline-offset-2"
                  >
                    unlock the full vault
                  </CheckoutLink>
                  .
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[var(--color-navy)] py-20 md:py-24">
          <div className="mx-auto max-w-[1280px] px-6 text-center lg:px-8">
            <h2 className="mx-auto max-w-2xl text-balance text-[28px] font-extrabold leading-tight tracking-tight text-white md:text-[38px]">
              Stop squinting at blurred thumbnails. Open the full vault.
            </h2>
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
