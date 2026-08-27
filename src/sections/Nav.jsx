import { useEffect, useState } from "react";

const LINKS = [
  { href: "#assessment", label: "Assessment" },
  { href: "#classification", label: "Classification" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#architecture", label: "Architecture" },
  { href: "#roadmap", label: "Roadmap" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        solid ? "border-b border-line bg-base-950/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-3.5 md:px-8" aria-label="Primary">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative grid h-7 w-7 place-items-center border border-signal-400/50">
            <span className="h-2 w-2 bg-signal-300" />
            <span className="absolute inset-0 border border-signal-300/20" />
          </span>
          <span className="font-mono text-sm tracking-tight text-slateish-100">
            ipsec<span className="text-signal-300">·</span>sentinel
          </span>
        </a>

        <ul className="ml-auto hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-xs tracking-wide text-slateish-400 transition-colors hover:text-signal-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#docs"
          className="ml-auto hidden border border-signal-400/40 px-3.5 py-1.5 font-mono text-xs text-signal-100 transition-shadow duration-200 hover:glow-edge md:ml-0 md:inline-block"
        >
          view_docs
        </a>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="ml-auto border border-line px-3 py-1.5 font-mono text-xs text-slateish-300 md:hidden"
        >
          {open ? "close" : "menu"}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-line bg-base-950/95 px-5 pb-4 md:hidden">
          {LINKS.concat({ href: "#docs", label: "Docs" }).map((l) => (
            <li key={l.href} className="border-b border-line/60 last:border-0">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-mono text-sm text-slateish-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
