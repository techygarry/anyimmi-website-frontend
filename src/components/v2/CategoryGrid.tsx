import { SectionHeader } from './SectionHeader';
import { CategoryCard } from './CategoryCard';
import type { CategoryData } from '@/lib/api';

interface CategoryGridProps {
  categories: CategoryData[];
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <section id="assets" className="bg-[var(--color-cream)] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <SectionHeader
          eyebrow="27 categories · 305 assets · zero fluff"
          title="The goldmine of Canadian immigration assets."
          sub="Every asset battle-tested against real IRCC refusals. Every template already compliant. Every script already converting in a live RCIC practice."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
  );
}
