import { PROJECT } from "@/data/sentinel";

const LINKS = [
  { label: "GitHub repository", href: "#", meta: "source · issues · CI" },
  { label: "Demo video", href: "#", meta: "6 min walkthrough" },
  { label: "Technical documentation", href: "#", meta: "architecture · rubric spec" },
];

export function Footer() {
  return (
    <footer id="docs" className="border-t border-border px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="mono-tag">Resources</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              Read the spec, run the testbed
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              {PROJECT.name} — {PROJECT.tagline}. Built for {PROJECT.event}, {PROJECT.ps} ·{" "}
              {PROJECT.org} · {PROJECT.theme}.
            </p>
          </div>

          <ul className="grid gap-px border border-border bg-border">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="hover-glow flex items-center justify-between gap-4 bg-surface px-5 py-4"
                >
                  <span className="text-sm text-foreground">{l.label}</span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                    {l.meta}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          <span>© 2026 {PROJECT.name}</span>
          <span className="text-primary">no payload was decrypted in the making of this tool</span>
        </div>
      </div>
    </footer>
  );
}
