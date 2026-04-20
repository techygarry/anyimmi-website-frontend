import {
  getCategories,
  getBundlePlans,
  getFounderCounter,
  getTestimonials,
} from '@/lib/api';
import { VariantBanner } from '@/components/variant/VariantBanner';
import { VariantNav } from '@/components/variant/VariantNav';
import { VariantHero } from '@/components/variant/VariantHero';
import { BigNumberStatement } from '@/components/variant/BigNumberStatement';
import { MembersSection } from '@/components/variant/MembersSection';
import { VaultList } from '@/components/variant/VaultList';
import { OriginStory } from '@/components/variant/OriginStory';
import { VariantPricing } from '@/components/variant/VariantPricing';
import { UpcomingProducts } from '@/components/variant/UpcomingProducts';
import { FounderLockIn } from '@/components/variant/FounderLockIn';
import { VariantFaq } from '@/components/variant/VariantFaq';
import { ManifestoClose } from '@/components/variant/ManifestoClose';
import { VariantFooter } from '@/components/variant/VariantFooter';
import { V } from '@/components/variant/tokens';

// Server-render the variant landing. All data fetches degrade to fallbacks
// inside each component if the backend is unavailable — intentional for a
// marketing page where empty sections are worse than well-chosen defaults.
export default async function VariantPage() {
  const [categories, plans, founderCounter, testimonials] = await Promise.all([
    getCategories(),
    getBundlePlans(),
    getFounderCounter(),
    getTestimonials(),
  ]);

  return (
    <main
      style={{
        background: V.bg,
        color: V.cream,
        minHeight: '100vh',
        fontFamily: V.sans,
      }}
    >
      <VariantBanner />
      <VariantNav />
      <VariantHero
        founderCount={founderCounter?.current ?? 287}
        founderTarget={founderCounter?.target ?? 500}
      />
      <BigNumberStatement />
      <MembersSection testimonials={testimonials} />
      <VaultList categories={categories} />
      <OriginStory />
      <VariantPricing plans={plans} />
      <UpcomingProducts />
      <FounderLockIn />
      <VariantFaq />
      <ManifestoClose />
      <VariantFooter />
    </main>
  );
}
