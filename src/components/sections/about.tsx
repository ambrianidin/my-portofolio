"use client";

import { useState } from "react";
import { MediaFrame } from "@/components/media-frame";
import { ExperiencePanel } from "@/components/panels/experience-panel";
import { StackPanel } from "@/components/panels/stack-panel";
import { Reveal } from "@/components/reveal";

/** One section, three faces — the heading follows the active tab. */
const TABS = [
  { id: "about", label: "About", heading: "About me" },
  { id: "stack", label: "Tech stack", heading: "My tech stack" },
  { id: "experience", label: "Experience", heading: "My experiences" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function About() {
  const [tab, setTab] = useState<TabId>("about");
  const active = TABS.find((item) => item.id === tab) ?? TABS[0];

  return (
    <section id="about" className="px-6 py-10 sm:px-10 md:px-16 md:py-16">
      <Reveal className="mx-auto max-w-[1180px]">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-5 md:mb-10">
          <h2 className="text-[clamp(26px,3.4vw,40px)] font-semibold leading-tight tracking-[-0.025em]">
            {active.heading}
          </h2>
          <div role="tablist" aria-label="About sections" className="flex items-center gap-1 rounded-full border border-border bg-surface p-1">
            {TABS.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                id={`about-tab-${item.id}`}
                aria-selected={item.id === tab}
                aria-controls={`about-panel-${item.id}`}
                onClick={() => setTab(item.id)}
                className="cursor-pointer rounded-full px-4 py-2.5 text-sm font-medium transition-colors aria-[selected=false]:text-muted aria-[selected=false]:hover:text-foreground aria-selected:bg-foreground aria-selected:text-background md:px-[18px]"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div
          role="tabpanel"
          id={`about-panel-${tab}`}
          aria-labelledby={`about-tab-${tab}`}
        >
          {tab === "about" ? <AboutPanel /> : null}
          {tab === "stack" ? <StackPanel /> : null}
          {tab === "experience" ? <ExperiencePanel /> : null}
        </div>
      </Reveal>
    </section>
  );
}

function AboutPanel() {
  return (
    <div className="grid items-start gap-7 md:grid-cols-2 md:gap-[clamp(28px,5vw,72px)]">
      <div className="flex min-w-0 flex-col gap-[18px] md:gap-6">
        <p className="text-[clamp(17px,1.6vw,20px)] leading-[1.65] text-foreground text-pretty">
          {
            "I'm Nadine Ambriani - Full-stack Web Developer"
          }
        </p>
        <p className="text-base leading-[1.7] text-muted text-pretty">
          {
            "As a Fullstack Developer, I build responsive, scalable web applications that bridge the gap between solid backend architecture and engaging UI/UX design. For me, developing a new feature is never just about writing backend logic; it's about crafting a seamless, intuitive, and user-centric experience."
          }
        </p>
      </div>

      <div className="aspect-[3/2] w-[clamp(240px,30vw,360px)] justify-self-end overflow-hidden rounded-2xl border border-border bg-surface">
        <MediaFrame label="About" src="/me.jpeg" />
      </div>
    </div>
  );
}
