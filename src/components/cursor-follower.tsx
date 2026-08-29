"use client";

import { useEffect, useRef } from "react";
export function CursorFollower() {
  const blob = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const b = blob.current;
    const r = ring.current;
    const d = dot.current;
    if (!b || !r || !d) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let bx = tx;
    let by = ty;
    let rx = tx;
    let ry = ty;
    let raf = 0;
    let on = false;

    const step = () => {
      bx += (tx - bx) * 0.09;
      by += (ty - by) * 0.09;
      rx += (tx - rx) * 0.22;
      ry += (ty - ry) * 0.22;
      b.style.transform = `translate3d(${bx}px, ${by}px, 0)`;
      r.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      const moving = Math.hypot(tx - bx, ty - by) > 0.4 || Math.hypot(tx - rx, ty - ry) > 0.4;
      raf = moving ? requestAnimationFrame(step) : 0;
    };

    const move = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!on) {
        on = true;
        for (const el of [b, r, d]) el.dataset.on = "true";
        document.documentElement.style.cursor = "none";
      }
      d.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      const target = e.target as Element | null;
      const hot = target?.closest?.("a, button, [data-hot]");
      r.dataset.hot = hot ? "true" : "false";
      if (!raf) raf = requestAnimationFrame(step);
    };

    const leave = () => {
      on = false;
      for (const el of [b, r, d]) el.dataset.on = "false";
      document.documentElement.style.cursor = "";
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    window.addEventListener("blur", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      window.removeEventListener("blur", leave);
      if (raf) cancelAnimationFrame(raf);
      document.documentElement.style.cursor = "";
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[60] hidden md:block">
      <div ref={blob} data-on="false" className="absolute -ml-[280px] -mt-[280px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,var(--accent-soft),transparent_68%)] opacity-0 transition-opacity duration-500 data-[on=true]:opacity-100"/>
      <div ref={ring} data-on="false" data-hot="false" className="absolute -ml-[17px] -mt-[17px] h-[34px] w-[34px] rounded-full border border-foreground opacity-0 transition-[opacity,width,height,margin,border-color] duration-200 data-[hot=true]:-ml-[27px] data-[hot=true]:-mt-[27px] data-[hot=true]:h-[54px] data-[hot=true]:w-[54px] data-[on=true]:opacity-100 data-[hot=true]:border-accent"/>
      <div ref={dot} data-on="false" className="absolute -ml-[2.5px] -mt-[2.5px] h-[5px] w-[5px] rounded-full bg-accent opacity-0 transition-opacity duration-200 data-[on=true]:opacity-100"/>
    </div>
  );
}
