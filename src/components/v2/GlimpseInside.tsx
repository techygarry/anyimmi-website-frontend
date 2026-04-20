import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { AssetTile } from './AssetTile';

export interface GlimpseAsset {
  _id: string;
  name: string;
  description?: string;
  fileFormat?: string;
  previewUrl?: string;
}

interface GlimpseInsideProps {
  assets: GlimpseAsset[];
}

export function GlimpseInside({ assets }: GlimpseInsideProps) {
  if (!assets.length) return null;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <SectionHeader
          eyebrow="A glimpse inside the goldmine"
          title="Yes, it's real. No, you can't pirate it."
          sub="Every thumbnail is a real asset. Heavily fogged on purpose — the clear files land in your inbox the moment you lock in."
        />

        <div className="mt-12 -mx-6 px-6 lg:mx-0 lg:px-0">
          <div className="scroll-row flex gap-4 overflow-x-auto pb-4">
            {assets.map((a) => (
              <AssetTile
                key={a._id}
                name={a.name}
                format={a.fileFormat}
                previewUrl={a.previewUrl}
                description={a.description}
                variant="row"
              />
            ))}
            <Link
              href="/preview"
              className="flex w-[200px] shrink-0 flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[var(--color-indigo)]/40 bg-[var(--color-indigo-bg)]/40 p-6 text-center transition hover:border-[var(--color-indigo)] hover:bg-[var(--color-indigo-bg)]"
            >
              <div className="font-mono text-[13px] font-bold text-[var(--color-indigo)]">
                See all 305
              </div>
              <div className="text-[11.5px] text-[var(--color-muted)]">curated glimpse</div>
              <ArrowRight size={16} className="text-[var(--color-indigo)]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
