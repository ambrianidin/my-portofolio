"use client";

import { useRef, type RefObject } from "react";

/**
 * Snap-scrolling horizontal track, shared by the certifications and
 * experience carousels. A step is one card plus the track's column gap;
 * cards mark themselves with `data-card`.
 */
export function useSlider(): {
  track: RefObject<HTMLDivElement | null>;
  slide: (dir: number) => void;
} {
  const track = useRef<HTMLDivElement>(null);

  const slide = (dir: number) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const gap = parseFloat(getComputedStyle(el).columnGap || "20") || 20;
    const step = card
      ? card.getBoundingClientRect().width + gap
      : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return { track, slide };
}

export function SliderButtons({
  onPrev,
  onNext,
  label,
}: {
  onPrev: () => void;
  onNext: () => void;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <button
        type="button"
        onClick={onPrev}
        aria-label={`Previous ${label}`}
        className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border text-base text-foreground transition-colors hover:border-accent hover:text-accent"
      >
        ←
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label={`Next ${label}`}
        className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border text-base text-foreground transition-colors hover:border-accent hover:text-accent"
      >
        →
      </button>
    </div>
  );
}
