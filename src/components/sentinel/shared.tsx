import type { ReactNode } from "react";

export function useReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function SectionHead({
  tag,
  title,
  lede,
}: {
  tag: string;
  title: string;
  lede?: ReactNode;
}) {
  return (
    <header className="max-w-3xl">
      <div className="mono-tag flex items-center gap-2">
        <span className="inline-block h-px w-6 bg-primary/70" />
        {tag}
      </div>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {lede ? <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{lede}</p> : null}
    </header>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`border-t border-border/70 px-5 py-20 sm:px-8 lg:px-12 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
