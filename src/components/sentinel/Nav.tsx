const LINKS = [
  { href: "#problem", label: "Problem" },
  { href: "#classify", label: "Classification" },
  { href: "#features", label: "Capabilities" },
  { href: "#pipeline", label: "Architecture" },
  { href: "#roadmap", label: "Roadmap" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-5 py-3 sm:px-8 lg:px-12"
      >
        <a href="#top" className="flex items-center gap-2 font-mono text-sm tracking-tight">
          <span className="inline-block h-2 w-2 bg-primary" aria-hidden="true" />
          <span className="text-foreground">ipsec</span>
          <span className="text-primary">/sentinel</span>
        </a>
        <ul className="hidden items-center gap-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors duration-200 hover:text-primary">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#docs"
          className="hover-glow border border-border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-primary"
        >
          SIH 2026
        </a>
      </nav>
    </header>
  );
}
