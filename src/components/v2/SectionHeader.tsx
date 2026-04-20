interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: 'left' | 'center';
  invert?: boolean;
}

export function SectionHeader({ eyebrow, title, sub, align = 'center', invert = false }: SectionHeaderProps) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const titleCls = invert ? 'text-white' : 'text-[var(--color-navy)]';
  const subCls = invert ? 'text-white/70' : 'text-[var(--color-muted)]';
  const eyebrowCls = invert ? 'text-[var(--color-gold-soft)]' : 'text-[var(--color-indigo)]';

  return (
    <div className={`${alignCls} max-w-3xl`}>
      {eyebrow && (
        <div
          className={`mb-4 font-mono text-[11.5px] font-bold uppercase tracking-[0.14em] ${eyebrowCls}`}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-balance text-[30px] font-extrabold leading-[1.1] tracking-tight sm:text-[36px] md:text-[44px] ${titleCls}`}
      >
        {title}
      </h2>
      {sub && (
        <p className={`mt-5 text-[16px] leading-relaxed md:text-[17px] ${subCls}`}>{sub}</p>
      )}
    </div>
  );
}
