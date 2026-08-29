import { Reveal } from "@/components/reveal";
import { contact } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-14 sm:px-10 md:px-16 md:py-22">
      <Reveal className="mx-auto flex max-w-[1180px] flex-col items-center text-center">
        <h2 className="max-w-[14ch] text-[clamp(40px,8vw,96px)] font-semibold leading-[1.02] tracking-[-0.04em] text-balance">
          Got a system that needs building?
        </h2>

        <a
          href={`mailto:${contact.email}`}
          className="mt-7 inline-flex items-center gap-3 border-b border-border pb-2 font-sans text-[clamp(20px,3.4vw,42px)] tracking-[-0.02em] text-foreground transition-colors hover:border-accent hover:text-accent sm:gap-5 md:mt-12"
        >
          {contact.email}
          <span className="text-[0.5em] text-muted">↗</span>
        </a>

        <div className="mt-12 grid w-full gap-6 border-t border-border pt-7 text-left sm:grid-cols-2 md:mt-22 md:gap-10 md:pt-10">
          <div className="flex flex-col gap-3">
            <span className="font-sans text-[11px] uppercase tracking-[0.1em] text-muted">
              Social
            </span>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-[17px] text-foreground transition-colors hover:text-accent"
            >
              LinkedIn ↗
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-[17px] text-foreground transition-colors hover:text-accent"
            >
              GitHub ↗
            </a>
          </div>

          <div className="flex flex-col items-start gap-3">
            <span className="font-sans text-[11px] uppercase tracking-[0.1em] text-muted">
              Email
            </span>
            <a
              href={`mailto:${contact.email}?subject=Project%20inquiry&body=Hi%20Nadine%2C%0A%0A`}
              className="inline-flex w-fit items-center gap-2.5 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Write an email ↗
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
