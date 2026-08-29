"use client";

import { useEffect, useRef } from "react";

const LINKS = [
  { href: "#projects", label: "Work" },
  { href: "#certifications", label: "Trainings" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = header.current;
    if (!el) return;
    const onScroll = () => {
      el.dataset.scrolled = window.scrollY > 24 ? "true" : "false";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={header}
      data-scrolled="false"
      className="group sticky top-0 z-40 px-4 py-[18px] transition-[padding] duration-300 data-[scrolled=true]:py-3 sm:px-6 lg:px-10"
    >
      <nav className="mx-auto flex max-w-[1180px] items-center gap-3 rounded-full border border-transparent px-2.5 py-2 transition-[max-width,background-color,border-color,box-shadow] duration-500 ease-out group-data-[scrolled=true]:border-border group-data-[scrolled=true]:bg-background/70 group-data-[scrolled=true]:shadow-[0_10px_30px_-18px_rgba(0,0,0,0.4)] group-data-[scrolled=true]:backdrop-blur-md lg:group-data-[scrolled=true]:max-w-[920px]">
        <a
          href="#top"
          aria-label="Nadine Ambriani — home"
          className="mr-auto inline-flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[10px] border border-border font-display text-[17px] font-semibold leading-none text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          N
        </a>
        <div className="flex items-center gap-4 overflow-x-auto sm:gap-6 [scrollbar-width:none]">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
