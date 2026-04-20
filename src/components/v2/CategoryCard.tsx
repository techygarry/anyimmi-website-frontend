import Link from 'next/link';
import { ArrowUpRight, FolderOpen, Lock } from 'lucide-react';
import CategoryIcon from '@/components/CategoryIcon';
import type { CategoryData } from '@/lib/api';

interface CategoryCardProps {
  cat: CategoryData;
}

export function CategoryCard({ cat }: CategoryCardProps) {
  const locked = Boolean(cat.isLocked);
  const assetCount = cat.assetCount ?? 0;

  if (locked) {
    return (
      <div className="gold-border group relative flex h-full flex-col rounded-2xl bg-gradient-to-br from-[#FFFCF2] via-white to-[#FFF8E1] p-6 shadow-[var(--shadow-gold)] transition hover:-translate-y-0.5">
        <div className="flex items-start justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#FBD571] to-[#D4AF37] text-[var(--color-navy)]">
            <Lock size={17} strokeWidth={2.25} />
          </div>
          <span className="rounded-full bg-[var(--color-navy)] px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--color-gold-soft)]">
            Founder only
          </span>
        </div>
        <h3 className="mt-5 text-[16.5px] font-bold leading-snug text-[var(--color-navy)]">
          {cat.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-[13.5px] leading-relaxed text-[var(--color-muted)]">
          {cat.description || '12 high-value bonus assets only the Founder tier can open.'}
        </p>
        <div className="mt-auto flex items-center justify-between border-t border-[#F1E4B6] pt-4">
          <span className="font-mono text-[12px] font-bold text-[var(--color-navy)]">
            {assetCount} assets
          </span>
          <span className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#8A6B10]">
            Unlock at Founder →
          </span>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={`/categories/${cat.slug}`}
      className="group relative flex h-full flex-col rounded-2xl border border-[var(--color-line)] bg-white p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-[var(--color-indigo)]/40 hover:shadow-[var(--shadow-lift)]"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-indigo-bg)] text-[var(--color-indigo)]">
          {cat.icon ? <CategoryIcon name={cat.icon} size={18} /> : <FolderOpen size={18} />}
        </div>
        <span className="rounded-full bg-[var(--color-cream-2)] px-2.5 py-1 font-mono text-[10.5px] font-bold text-[var(--color-navy)]">
          {assetCount}
        </span>
      </div>

      <h3 className="mt-5 text-[16.5px] font-bold leading-snug text-[var(--color-navy)]">
        {cat.name}
      </h3>
      <p className="mt-2 line-clamp-2 text-[13.5px] leading-relaxed text-[var(--color-muted)]">
        {cat.description || 'Production-ready assets, fully editable, immediately deployable in your practice.'}
      </p>

      <div className="mt-auto flex items-center justify-between border-t border-[var(--color-line)] pt-4">
        <span className="font-mono text-[11.5px] uppercase tracking-[0.08em] text-[var(--color-muted)]">
          {assetCount} assets
        </span>
        <span className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-[var(--color-indigo)]">
          Preview category
          <ArrowUpRight
            size={13}
            strokeWidth={2.5}
            className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
