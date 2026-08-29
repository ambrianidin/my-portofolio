"use client";

import { useEffect, useRef } from "react";
import { projects } from "@/lib/content";

export function Projects() {
  const section = useRef<HTMLElement>(null);
  const sticky = useRef<HTMLDivElement>(null);
  const stack = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sec = section.current;
    const stk = sticky.current;
    const wrap = stack.current;
    if (!sec || !stk || !wrap) return;

    const panels = Array.from(
      wrap.querySelectorAll<HTMLElement>("[data-panel]"),
    );
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let pinned = false;
    let raf = 0;

    const update = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (!pinned) return;
        const rect = sec.getBoundingClientRect();
        const span = rect.height - window.innerHeight;
        const progress = span > 0 ? Math.min(Math.max(-rect.top / span, 0), 0.9999) : 0;
        const active = Math.floor(progress * panels.length);
        panels.forEach((panel, i) => {
          panel.dataset.active = i === active ? "true" : "false";
          panel.dataset.pos = i < active ? "up" : i > active ? "down" : "at";
        });
      });
    };

    const layout = () => {
      pinned = window.innerWidth >= 768 && !reduce.matches;
      if (pinned) {
        sec.style.height = `${panels.length * 100}vh`;
        stk.style.position = "sticky";
        wrap.style.display = "block";
        panels.forEach((panel) => {
          panel.style.position = "absolute";
          panel.style.inset = "0";
        });
      } else {
        sec.style.height = "auto";
        stk.style.position = "static";
        wrap.style.display = "";
        panels.forEach((panel) => {
          panel.style.position = "";
          panel.style.inset = "";
          panel.dataset.active = "true";
          panel.dataset.pos = "at";
        });
      }
      update();
    };

    layout();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", layout);
    reduce.addEventListener("change", layout);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", layout);
      reduce.removeEventListener("change", layout);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="projects" ref={section} className="relative">
      <div ref={sticky} className="top-0 flex min-h-screen flex-col justify-center overflow-hidden px-6 py-12 sm:px-10 md:px-16">
        <div className="mx-auto w-full max-w-[1180px]">
          <h2 className="mb-6 text-[clamp(26px,3.4vw,40px)] font-semibold leading-tight tracking-[-0.025em] md:mb-8">
            My projects
          </h2>
          <div ref={stack} className="relative flex min-h-[clamp(340px,46vh,420px)] flex-col gap-4">
            {projects.map((project) => (
              <article key={project.num} data-panel data-active="true" data-pos="at" className="group flex flex-col justify-between gap-5 rounded-[20px] border border-border bg-surface p-6 transition-[opacity,transform] duration-300 ease-out hover:border-foreground data-[active=false]:pointer-events-none data-[active=false]:opacity-0 data-[pos=down]:translate-y-5 data-[pos=up]:-translate-y-4 md:p-8">
                <div className="flex flex-col gap-3.5">
                  <div className="flex items-center gap-2.5 font-sans text-xs text-muted">
                    <span className="text-accent">{project.num}</span>
                    <span>{project.year}</span>
                    <span>·</span>
                    <span>{project.client}</span>
                  </div>
                  <h3 className="text-[clamp(24px,3vw,36px)] font-semibold leading-tight tracking-[-0.03em]">
                    {project.title}
                  </h3>
                  <p className="max-w-[44ch] text-base leading-relaxed text-muted text-pretty">
                    {project.blurb}
                  </p>
                </div>
                <div className="flex flex-wrap items-end justify-between gap-5">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-md border border-border bg-background px-2.5 py-1.5 font-sans text-xs text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-[18px] py-2.5 font-sans text-sm text-foreground transition-colors hover:border-foreground">
                      Repo ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
