import type { Metadata } from 'next';
import {
  getCategories,
  getBundlePlans,
  getFounderCounter,
  getTestimonials,
  getCategoryItems,
  type CategoryItemData,
} from '@/lib/api';
import { Banner } from '@/components/v2/Banner';
import { Nav } from '@/components/v2/Nav';
import { Hero } from '@/components/v2/Hero';
import { StatsBar } from '@/components/v2/StatsBar';
import { PainSection } from '@/components/v2/PainSection';
import { CostOfDoingNothing } from '@/components/v2/CostOfDoingNothing';
import { OriginStory } from '@/components/v2/OriginStory';
import { CategoryGrid } from '@/components/v2/CategoryGrid';
import { GlimpseInside } from '@/components/v2/GlimpseInside';
import { ProductShowcase } from '@/components/v2/ProductShowcase';
import { ValueStackSlide } from '@/components/v2/ValueStackSlide';
import { TestimonialRow } from '@/components/v2/TestimonialRow';
import { GuaranteeRow } from '@/components/v2/GuaranteeRow';
import { ObjectionGrid } from '@/components/v2/ObjectionGrid';
import { PricingBlock } from '@/components/v2/PricingBlock';
import { BonusStack } from '@/components/v2/BonusStack';
import { UrgencyLadder } from '@/components/v2/UrgencyLadder';
import { FaqAccordion } from '@/components/v2/FaqAccordion';
import { FinalClose } from '@/components/v2/FinalClose';
import { Footer } from '@/components/v2/Footer';

export const metadata: Metadata = {
  title: 'AnyImmi — The goldmine of Canadian immigration assets for RCICs',
  description:
    '305 production-ready immigration assets. 27 categories. Branded templates, client kits, lead-conversion scripts, AI tools. Built for Canadian RCICs tired of looking like everyone else.',
};

// Shuffle deterministically per-request to avoid hydration mismatches
// (server renders, no client hydration on this list)
function sample<T>(arr: T[], n: number): T[] {
  const copy = [...arr];
  // Fisher-Yates with a stable seed so result is identical on each render
  // within one request — no random to avoid mismatch across SSR/CSR.
  for (let i = copy.length - 1; i > 0; i--) {
    const j = (i * 2654435761) % (i + 1); // deterministic-ish
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, n);
}

export default async function Home() {
  const [categories, plans, counter, testimonials] = await Promise.all([
    getCategories(),
    getBundlePlans(),
    getFounderCounter(),
    getTestimonials(),
  ]);

  // Build a glimpse row: pick up to 4 unlocked categories, grab ~3 items each
  const unlockedCats = categories.filter((c) => !c.isLocked).slice(0, 4);
  const itemsNested = await Promise.all(
    unlockedCats.map((c) => getCategoryItems(c.slug).catch(() => [] as CategoryItemData[])),
  );
  const glimpse = sample(itemsNested.flat(), 12);

  const founderTaken = counter?.current ?? 287;
  const founderTarget = counter?.target ?? 500;

  return (
    <>
      <Banner />
      <Nav />
      <main>
        <Hero founderTaken={founderTaken} founderTarget={founderTarget} />
        <StatsBar />
        <PainSection />
        <CostOfDoingNothing />
        <OriginStory />
        <CategoryGrid categories={categories} />
        <GlimpseInside assets={glimpse} />
        <ProductShowcase />
        <ValueStackSlide />
        <TestimonialRow items={testimonials} />
        <GuaranteeRow />
        <ObjectionGrid />
        <PricingBlock plans={plans} />
        <BonusStack />
        <UrgencyLadder />
        <FaqAccordion />
        <FinalClose />
      </main>
      <Footer />
    </>
  );
}
