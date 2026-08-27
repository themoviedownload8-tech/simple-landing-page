import { TEAM } from "@/data/sentinel";
import { Section, SectionHead } from "./shared";

export function Team() {
  return (
    <Section id="team">
      <SectionHead
        tag="Team roster"
        title="Six roles, one build"
        lede="Ownership is mapped to protocol, model and interface boundaries so phases can run in parallel."
      />

      <ul className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((m) => (
          <li key={m.role} className="hover-glow bg-surface p-5">
            <p className="font-mono text-[12px] text-primary">
              <span className="text-muted-foreground">&gt; </span>
              {m.role}
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{m.scope}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
