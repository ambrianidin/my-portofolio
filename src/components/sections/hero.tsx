export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-10 pt-14 sm:px-10 md:px-16 md:pb-14 md:pt-24">
      {/* flowing lines + glow decoration */}
      <svg
        aria-hidden
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
      >
        <path
          d="M-40 150 C 220 40, 420 300, 660 220 S 1020 60, 1240 170"
          fill="none"
          stroke="color-mix(in oklab, var(--foreground) 12%, transparent)"
          strokeWidth="1.2"
        />
        <path
          d="M-40 300 C 200 200, 430 470, 700 360 S 1030 200, 1240 320"
          fill="none"
          stroke="color-mix(in oklab, var(--accent) 55%, transparent)"
          strokeWidth="1.4"
        />
        <path
          d="M-40 380 C 240 300, 400 560, 690 470 S 1060 320, 1240 420"
          fill="none"
          stroke="color-mix(in oklab, var(--foreground) 9%, transparent)"
          strokeWidth="1.2"
        />
        <path
          d="M-40 500 C 260 430, 470 640, 740 540 S 1050 430, 1240 520"
          fill="none"
          stroke="color-mix(in oklab, var(--accent) 28%, transparent)"
          strokeWidth="1.2"
        />
      </svg>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[6%] -top-[14%] aspect-square w-[clamp(280px,42vw,620px)] rounded-full bg-[radial-gradient(circle_at_35%_35%,color-mix(in_oklab,var(--accent)_34%,transparent),transparent_68%)] blur-xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[24%] -left-[10%] aspect-square w-[clamp(240px,34vw,520px)] rounded-full bg-[radial-gradient(circle_at_60%_40%,color-mix(in_oklab,var(--foreground)_12%,transparent),transparent_70%)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[8%] right-[clamp(4%,10vw,18%)] h-px w-[clamp(120px,16vw,240px)] bg-[linear-gradient(to_right,transparent,color-mix(in_oklab,var(--accent)_55%,transparent),transparent)]"
      />

      <div className="relative mx-auto max-w-[1180px]">
        <h1 className="m-0 font-display text-[clamp(52px,13.5vw,210px)] font-semibold uppercase leading-[0.92] tracking-[-0.045em]">
          <span className="block">Nadine</span>
          <span className="block text-right font-script text-[1.12em] font-semibold normal-case leading-[0.9] tracking-[-0.01em] text-transparent [-webkit-text-stroke:1.5px_var(--foreground)]">
           Ambriani
          </span>
        </h1>
      </div>

      <a
        href="#about"
        className="relative mx-auto mt-10 flex w-fit flex-col items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-accent md:mt-12"
      >
        <span>Scroll for more</span>
        <span className="block h-7 w-px origin-top animate-scroll-hint bg-gradient-to-b from-border to-transparent motion-reduce:animate-none md:h-11" />
      </a>
    </section>
  );
}
