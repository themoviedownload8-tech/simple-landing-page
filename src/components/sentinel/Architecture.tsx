import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { PIPELINE } from "@/data/sentinel";
import { Section, SectionHead } from "./shared";

export function Architecture() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <Section id="pipeline">
      <SectionHead
        tag="System architecture"
        title="Five layers, one deterministic path from wire to verdict"
        lede="Capture stays passive, the AI engine never sees plaintext, and every downstream artefact carries the evidence that produced it."
      />

      <div ref={ref} className="mt-12">
        <svg viewBox="0 0 1000 120" className="w-full" role="img" aria-label="Five-stage analysis pipeline: Testbed, Capture, AI Engine, Scoring, Dashboard">
          <line x1="60" y1="60" x2="940" y2="60" stroke="var(--border)" strokeWidth="2" />
          <motion.line
            x1="60"
            y1="60"
            x2="940"
            y2="60"
            stroke="var(--primary)"
            strokeWidth="2"
            strokeDasharray="880"
            initial={{ strokeDashoffset: 880 }}
            animate={inView ? { strokeDashoffset: 0 } : {}}
            transition={{ duration: 2.2, ease: "easeInOut" }}
          />
          {PIPELINE.map((s, i) => {
            const x = 60 + (880 / (PIPELINE.length - 1)) * i;
            return (
              <g key={s.n}>
                <motion.circle
                  cx={x}
                  cy={60}
                  r={22}
                  fill="var(--background)"
                  stroke="var(--border-strong)"
                  strokeWidth="1.5"
                  animate={inView ? { stroke: "var(--primary)" } : {}}
                  transition={{ delay: 0.35 + i * 0.42, duration: 0.3 }}
                />
                <motion.circle
                  cx={x}
                  cy={60}
                  r={6}
                  fill="var(--primary)"
                  initial={{ opacity: 0.15 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.35 + i * 0.42, duration: 0.3 }}
                />
                <text
                  x={x}
                  y={22}
                  textAnchor="middle"
                  fill="var(--muted-foreground)"
                  fontFamily="var(--font-code)"
                  fontSize="12"
                >
                  {s.n}
                </text>
                <text
                  x={x}
                  y={102}
                  textAnchor="middle"
                  fill="var(--foreground)"
                  fontFamily="var(--font-code)"
                  fontSize="13"
                >
                  {s.name.toUpperCase()}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="mt-8 grid gap-px border border-border bg-border md:grid-cols-5">
          {PIPELINE.map((s, i) => (
            <motion.div
              key={s.n}
              className="bg-surface p-4"
              initial={{ opacity: 0.25 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.35 + i * 0.42, duration: 0.35 }}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">
                {s.n} / {s.name}
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
