import { STACK } from "@/data/sentinel";
import { Section, SectionHead } from "./shared";

export function TechStack() {
  return (
    <Section id="stack">
      <SectionHead
        tag="Implementation"
        title="Stack, grouped by layer"
        lede="Chosen for reproducibility in a hackathon timebox and credibility in a SOC: everything containerised, everything scriptable."
      />

      <dl className="mt-10 divide-y divide-border border-y border-border">
        {STACK.map((g) => (
          <div key={g.layer} className="grid gap-3 py-5 sm:grid-cols-[160px_1fr] sm:gap-6">
            <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
              {g.layer}
            </dt>
            <dd className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-muted-foreground">
              {g.items.map((i) => (
                <span key={i} className="transition-colors duration-200 hover:text-foreground">
                  {i}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
