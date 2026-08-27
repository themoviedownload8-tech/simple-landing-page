import { useState } from "react";
import { FEATURES } from "@/data/sentinel";
import { Section, SectionHead } from "./shared";

export function Features() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <Section id="features">
      <SectionHead
        tag="Differentiators"
        title="Three tiers of capability, each with a technique ID"
        lede="Tier 1 is the core research contribution, Tier 2 makes it operationally useful, Tier 3 pushes into audit, language interfaces and adversarial resilience."
      />

      <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => {
          const isOpen = open === f.id;
          return (
            <button
              key={f.id}
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : f.id)}
              onMouseEnter={() => setOpen(f.id)}
              onMouseLeave={() => setOpen(null)}
              className="hover-glow group bg-surface p-5 text-left"
            >
              <div className="flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.16em]">
                <span className="text-primary">{f.id}</span>
                <span className="text-muted-foreground">{f.tier}</span>
              </div>
              <h3 className="mt-3 text-base font-medium leading-snug text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.blurb}</p>
              <div
                className="grid transition-[grid-template-rows,opacity] duration-300 ease-out"
                style={{
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="overflow-hidden">
                  <p className="mt-3 border-t border-border pt-3 font-mono text-[11.5px] leading-relaxed text-primary/85">
                    {f.detail}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </Section>
  );
}
