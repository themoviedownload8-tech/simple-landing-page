import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ROADMAP } from "@/data/sentinel";
import { Section, SectionHead } from "./shared";

export function Roadmap() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState<string | null>("P1");
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
  const fill = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section id="roadmap" className="dot-bg">
      <SectionHead
        tag="Execution roadmap"
        title="Eight phases from testbed to evaluation"
        lede="Sequenced so that a demonstrable artefact exists at the end of every phase, not only at the finish line."
      />

      <div ref={ref} className="mt-10">
        <div className="relative hidden h-px w-full bg-border md:block">
          <motion.div className="absolute inset-y-0 left-0 bg-primary" style={{ width: fill }} />
        </div>

        <div className="grid gap-px border border-border bg-border md:mt-6 md:grid-cols-4">
          {ROADMAP.map((r) => {
            const isOpen = open === r.p;
            return (
              <button
                key={r.p}
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : r.p)}
                className="hover-glow bg-surface p-4 text-left"
              >
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em]">
                  <span className="text-primary">{r.p}</span>
                  <span className="h-px flex-1 bg-border" />
                  <span className="text-muted-foreground">{isOpen ? "−" : "+"}</span>
                </div>
                <h3 className="mt-2 text-sm font-medium text-foreground">{r.name}</h3>
                <div
                  className="grid transition-[grid-template-rows,opacity] duration-300"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0 }}
                >
                  <div className="overflow-hidden">
                    <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{r.obj}</p>
                    <p className="mt-2 font-mono text-[11px] text-primary/85">↳ {r.del}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
