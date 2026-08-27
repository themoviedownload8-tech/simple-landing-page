import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { SCORE_BREAKDOWN } from "@/data/sentinel";
import { Section, SectionHead } from "./shared";

const TARGET = 42;

function colorFor(v: number) {
  if (v < 40) return "var(--destructive)";
  if (v < 70) return "var(--warn)";
  return "var(--primary)";
}

export function ScoreGauge() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(TARGET);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(TARGET * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  const R = 78;
  const C = 2 * Math.PI * R;
  const pct = value / 100;

  return (
    <Section id="score">
      <SectionHead
        tag="Assessment output"
        title="A posture score you can defend line by line"
        lede="Every point is traceable to a parsed IKE field or an RFC clause. Sample verdict from a deliberately mis-configured site-to-site tunnel in the reference testbed."
      />

      <div ref={ref} className="mt-10 grid gap-8 lg:grid-cols-[300px_1fr] lg:items-center">
        <div className="panel relative flex flex-col items-center p-8">
          <svg viewBox="0 0 200 200" className="h-52 w-52 -rotate-90" role="img" aria-label={`Security posture score ${TARGET} out of 100`}>
            <circle cx="100" cy="100" r={R} fill="none" stroke="var(--border)" strokeWidth="10" />
            <circle
              cx="100"
              cy="100"
              r={R}
              fill="none"
              stroke={colorFor(value)}
              strokeWidth="10"
              strokeLinecap="butt"
              strokeDasharray={C}
              strokeDashoffset={C * (1 - pct)}
              style={{ transition: "stroke 300ms linear" }}
            />
          </svg>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center pt-6">
            <span
              className="font-mono text-5xl font-semibold tabular-nums"
              style={{ color: colorFor(value) }}
            >
              {value}
            </span>
            <span className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              / 100 posture
            </span>
          </div>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-destructive">
            classification: at risk
          </p>
        </div>

        <ul className="space-y-4">
          {SCORE_BREAKDOWN.map((row, i) => (
            <li key={row.label}>
              <div className="flex items-baseline justify-between gap-4 font-mono text-[12px]">
                <span className="text-foreground">{row.label}</span>
                <span className="tabular-nums" style={{ color: colorFor(row.value) }}>
                  {row.value}
                </span>
              </div>
              <div className="mt-2 h-[6px] w-full bg-muted">
                <motion.div
                  className="h-full"
                  style={{ background: colorFor(row.value) }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${row.value}%` } : { width: 0 }}
                  transition={{ duration: 0.7, delay: 0.25 + i * 0.09, ease: "easeOut" }}
                />
              </div>
              <p className="mt-1.5 font-mono text-[11px] text-muted-foreground">{row.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
