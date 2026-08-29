"use client";

import { MediaFrame } from "@/components/media-frame";
import { SliderButtons, useSlider } from "@/components/slider";
import { experiences } from "@/lib/content";

/**
 * "Experience" tab of the About section — a snap carousel of wide cards,
 * text on the left and the photo on the right (stacked below md).
 */
export function ExperiencePanel() {
  const { track, slide } = useSlider();

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-end">
        <SliderButtons
          onPrev={() => slide(-1)}
          onNext={() => slide(1)}
          label="experience"
        />
      </div>

      <div
        ref={track}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pt-1 pb-2 [scrollbar-width:none] md:gap-7"
      >
        {experiences.map((exp) => (
          <article
            key={exp.title}
            data-card
            className="grid w-[min(760px,92vw)] shrink-0 snap-start gap-5 rounded-[20px] border border-border bg-surface p-5 transition-colors hover:border-foreground md:grid-cols-[1.2fr_1fr] md:items-center md:gap-8 md:p-7"
          >
            <div className="flex min-w-0 flex-col gap-2.5">
              <span className="font-sans text-xs uppercase tracking-[0.08em] text-accent">
                {exp.period} · {exp.location}
              </span>
              <h3 className="text-[clamp(19px,2vw,23px)] font-semibold leading-tight tracking-[-0.02em]">
                {exp.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-muted text-pretty">
                {exp.desc}
              </p>
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border bg-background">
              <MediaFrame
                label={`Photo — ${exp.title}`}
                src={exp.image}
                sizes="(max-width: 768px) 92vw, 320px"
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
