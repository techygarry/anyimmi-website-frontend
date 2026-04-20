export function Banner() {
  return (
    <div
      className="relative z-50 w-full bg-gradient-to-r from-[#B91C1C] via-[#DC2626] to-[#B91C1C] text-white"
      role="banner"
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-center gap-2 px-4 py-2 text-center text-[12.5px] font-medium tracking-tight md:text-[13px]">
        <span className="hidden md:inline">🇨🇦</span>
        <span>
          <span className="font-mono font-bold">LAUNCHING JULY 1, 2026</span> — Canada Day. Founder seats live now —{' '}
          <span className="underline underline-offset-2">287 of 500 taken.</span>
        </span>
      </div>
    </div>
  );
}
