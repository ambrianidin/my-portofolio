"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Fade + slide-up when the element scrolls into view.
 * SSR / no-JS / reduced-motion: renders fully visible (data-visible="true"),
 * so content is never hidden behind a script that failed to run.
 */
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) return;

    // Already on screen at mount — leave it visible, no flash.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    el.dataset.visible = "false";
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.dataset.visible = "true";
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible="true"
      className={`transition-[opacity,transform] duration-500 ease-out data-[visible=false]:translate-y-4 data-[visible=false]:opacity-0 ${className}`}
    >
      {children}
    </div>
  );
}
