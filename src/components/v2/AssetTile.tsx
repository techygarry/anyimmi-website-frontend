import { resolveImageUrl } from '@/lib/api';
import { Lock } from 'lucide-react';

interface AssetTileProps {
  name: string;
  format?: string;
  previewUrl?: string;
  sizeLabel?: string;
  description?: string;
  variant?: 'grid' | 'row';
}

const FORMAT_COLORS: Record<string, string> = {
  PDF: 'bg-[#DC2626] text-white',
  DOCX: 'bg-[var(--color-navy)] text-white',
  XLSX: 'bg-[#059669] text-white',
  PSD: 'bg-[#2563EB] text-white',
  AI: 'bg-[#EA580C] text-white',
  PPTX: 'bg-[#7C3AED] text-white',
  JPG: 'bg-[#0891B2] text-white',
  JPEG: 'bg-[#0891B2] text-white',
  PNG: 'bg-[#0E7490] text-white',
  MP4: 'bg-[#9333EA] text-white',
  TXT: 'bg-[var(--color-muted)] text-white',
};

function formatPill(fmt?: string) {
  if (!fmt) return 'bg-[var(--color-muted)] text-white';
  return FORMAT_COLORS[fmt.toUpperCase()] || 'bg-[var(--color-navy)] text-white';
}

export function AssetTile({
  name,
  format,
  previewUrl,
  sizeLabel,
  description,
  variant = 'grid',
}: AssetTileProps) {
  const widthClass =
    variant === 'row' ? 'w-[240px] shrink-0' : 'w-full';

  return (
    <div
      className={`${widthClass} group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]`}
    >
      <div className="relative aspect-[4/3] overflow-hidden preview-grid-bg">
        {previewUrl ? (
          // Heavily blurred thumbnail. Plain <img> is fine — small + blurred.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={resolveImageUrl(previewUrl)}
            alt=""
            aria-hidden
            draggable={false}
            className="pointer-events-none h-full w-full select-none object-cover"
            style={{ filter: 'blur(14px) saturate(0.85)' , transform: 'scale(1.1)' }}
          />
        ) : (
          <div className="h-full w-full" />
        )}

        {/* format pill */}
        <div className="absolute left-3 top-3">
          <span
            className={`rounded-md px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.08em] ${formatPill(format)}`}
          >
            {format || 'FILE'}
          </span>
        </div>

        {/* locked chip */}
        <div className="absolute right-3 top-3">
          <span className="inline-flex items-center gap-1 rounded-md bg-white/90 px-2 py-0.5 font-mono text-[10px] font-bold text-[var(--color-navy)] backdrop-blur">
            <Lock size={10} strokeWidth={2.5} />
            $197
          </span>
        </div>

        {/* center lock badge on hover */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
          <div className="rounded-full bg-[var(--color-navy)] px-3 py-1.5 text-[12px] font-semibold text-white shadow-[var(--shadow-lift)]">
            🔒 Unlock at $197
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-1 p-4">
        <h4 className="line-clamp-1 text-[13.5px] font-semibold leading-snug text-[var(--color-navy)]">
          {name}
        </h4>
        {description && (
          <p className="line-clamp-2 text-[12.5px] leading-relaxed text-[var(--color-muted)]">
            {description}
          </p>
        )}
        {sizeLabel && (
          <div className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.06em] text-[var(--color-muted)]">
            {sizeLabel}
          </div>
        )}
      </div>
    </div>
  );
}
