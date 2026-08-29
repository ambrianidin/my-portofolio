"use client";

import { MediaFrame } from "@/components/media-frame";
import { Reveal } from "@/components/reveal";
import { SliderButtons, useSlider } from "@/components/slider";
import { certifications } from "@/lib/content";

export function Certifications() {
  const { track, slide } = useSlider();

  return (
    <section id="certifications" className="px-6 py-9 sm:px-10 md:px-16 md:py-16">
      <Reveal>
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-[16ch] text-[clamp(26px,3.4vw,40px)] font-semibold leading-tight tracking-[-0.025em]">
            My certifications
          </h2>
          <SliderButtons onPrev={() => slide(-1)} onNext={() => slide(1)} label="certification"/>
        </div>

        <div ref={track} className="mx-auto mt-6 flex max-w-[1180px] snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pt-1 pb-2 [scrollbar-width:none] md:mt-10 md:gap-7">
          {certifications.map((cert) => (
            <a key={cert.num} data-card href={encodeURI(cert.href)} target="_blank" rel="noopener noreferrer" aria-label={`${cert.title} — open the certificate`} className="group relative aspect-[4/3] w-[min(460px,86vw)] shrink-0 snap-start overflow-hidden rounded-[20px] border border-border bg-surface">
              <MediaFrame label={`Certificate — ${cert.title}`} src={cert.image} fit={cert.fit} sizes="(max-width: 768px) 86vw, 460px"/>
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-end gap-2.5 bg-gradient-to-t from-[rgba(16,18,20,0.92)] via-[rgba(16,18,20,0.62)] to-transparent p-5 text-[#f6f4ef] opacity-0 transition-opacity duration-300 group-focus-within:opacity-100 group-hover:opacity-100 md:p-7">
                <div className="flex items-center gap-2.5 font-sans text-xs text-[rgba(246,244,239,0.72)]">
                  <span className="text-accent">{cert.num}</span>
                  <span>{cert.year}</span>
                  {cert.issuer ? (
                    <>
                      <span>·</span>
                      <span>{cert.issuer}</span>
                    </>
                  ) : null}
                </div>
                <h3 className="text-[clamp(20px,2.4vw,28px)] font-semibold leading-tight tracking-[-0.03em]">
                  {cert.title}
                </h3>
                <p className="text-[15px] leading-snug text-[rgba(246,244,239,0.8)] text-pretty">
                  {cert.blurb}
                </p>
                <span className="mt-1.5 inline-flex items-center gap-2 self-start rounded-full border border-[rgba(246,244,239,0.4)] px-4 py-2.5 font-sans text-[13px] text-[#f6f4ef] transition-colors group-hover:border-[#f6f4ef]">
                  View credential ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
