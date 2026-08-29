import Image from "next/image";

export function MediaFrame({
  label,
  src,
  sizes = "(max-width: 768px) 100vw, 600px",
  priority,
  fit = "cover",
}: {
  label: string;
  src?: string;
  sizes?: string;
  priority?: boolean;
  fit?: "cover" | "contain";
}) {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-surface-tint/40">
      {src ? (
        <Image src={src} alt={label} fill sizes={sizes} priority={priority} className={fit === "contain" ? "object-contain" : "object-cover"}/>
      ) : (
        <span className="pointer-events-none select-none px-6 text-center text-[11px] uppercase tracking-[0.18em] text-muted">
          {label}
        </span>
      )}
    </div>
  );
}
