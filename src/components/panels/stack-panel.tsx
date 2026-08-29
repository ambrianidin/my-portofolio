import { skillGroups } from "@/lib/content";

/** "Tech stack" tab of the About section. */
export function StackPanel() {
  return (
    <div className="grid gap-px overflow-hidden rounded-[20px] border border-border bg-border sm:grid-cols-2">
      {skillGroups.map((group) => (
        <div
          key={group.num}
          className="flex flex-col gap-4 bg-surface p-6 transition-colors hover:bg-background md:gap-6 md:p-8"
        >
          <div className="flex items-baseline gap-3">
            <span className="font-sans text-xs text-accent">{group.num}</span>
            <h3 className="text-[clamp(18px,2vw,22px)] font-semibold leading-tight tracking-[-0.02em]">
              {group.label}
            </h3>
          </div>
          <p className="text-[15px] leading-relaxed text-muted text-pretty">
            {group.note}
          </p>
          {/* A long list flows in two columns so it does not tower over the
              short one beside it — the grid stretches both to equal height. */}
          <ul
            className={
              group.items.length > 8
                ? "sm:columns-2 sm:gap-x-8"
                : "flex flex-col"
            }
          >
            {group.items.map((item) => (
              <li
                key={item}
                className="flex break-inside-avoid items-center gap-2.5 border-t border-border py-2.5 text-[15px]"
              >
                <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
