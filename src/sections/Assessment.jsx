import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionShell from "../components/SectionShell";
import { scoreBreakdown } from "../content";

const TARGET = 42;
const R = 78;
const CIRC = 2 * Math.PI * R;

function scoreColor(v) {
  if (v < 35) return "var(--color-risk-400)";
  if (v < 60) return "var(--color-warn-400)";
  return "var(--color-signal-300)";
}

function verdict(v) {
  if (v < 35) return "HIGH RISK";
  if (v < 60) return "DEGRADED";
  return "ACCEPTABLE";
}

export default function Assessment() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(TARGET);
      return;
    }
    const start = performance.now();
    const dur = 1400;
    let raf;
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * TARGET));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  const color = scoreColor(value);

  return (
    <SectionShell
      id="assessment"
      kicker="02 / posture"
      title="A 0–100 security score you can actually defend in a report."
      lede="The rubric is weighted, deterministic and itemised — every point deducted maps to a specific IKE or ESP observation with an RFC or CVE citation behind it."
    >
      <div ref={ref} className="grid gap-10 md:grid-cols-[300px_1fr] md:gap-14">
        <figure className="hairline relative bg-base-850/60 p-6">
          <div className="pointer-events-none absolute inset-0 dot-bg opacity-40" aria-hidden="true" />
          <svg viewBox="0 0 200 200" className="relative mx-auto block w-full max-w-[240px]" role="img"
            aria-label={`Composite tunnel security score ${TARGET} out of 100, rated ${verdict(TARGET)}`}>
            <circle cx="100" cy="100" r={R} fill="none" stroke="var(--color-base-700)" strokeWidth="10" />
            <circle
              cx="100"
              cy="100"
              r={R}
              fill="none"
              stroke={color}
              strokeWidth="10"
              strokeLinecap="butt"
              strokeDasharray={CIRC}
              strokeDashoffset={CIRC * (1 - value / 100)}
              transform="rotate(-90 100 100)"
              style={{ transition: "stroke 300ms linear" }}
            />
            {Array.from({ length: 40 }).map((_, i) => {
              const a = (i / 40) * Math.PI * 2 - Math.PI / 2;
              const inner = 62;
              const outer = 68;
              return (
                <line
                  key={i}
                  x1={100 + Math.cos(a) * inner}
                  y1={100 + Math.sin(a) * inner}
                  x2={100 + Math.cos(a) * outer}
                  y2={100 + Math.sin(a) * outer}
                  stroke={i / 40 <= value / 100 ? color : "var(--color-base-700)"}
                  strokeWidth="1.5"
                />
              );
            })}
            <text x="100" y="98" textAnchor="middle" className="font-mono" fontSize="44" fill="var(--color-slateish-100)">
              {value}
            </text>
            <text x="100" y="120" textAnchor="middle" className="font-mono" fontSize="10" fill="var(--color-slateish-500)"
              letterSpacing="2">
              / 100
            </text>
          </svg>
          <figcaption className="relative mt-4 text-center">
            <span className="font-mono text-[11px] tracking-[0.18em]" style={{ color }}>
              {verdict(value)}
            </span>
            <p className="mt-1 font-mono text-[11px] text-slateish-500">tunnel-04 · aggressive mode · DH-2</p>
          </figcaption>
        </figure>

        <div>
          <p className="font-mono text-[11px] tracking-wider text-slateish-500">RUBRIC COMPONENTS</p>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {scoreBreakdown.map((c, i) => (
              <li key={c.id} className="py-4">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="text-sm text-slateish-100">{c.label}</span>
                  <span className="font-mono text-xs text-slateish-400">
                    <span className="text-signal-300">{c.id}</span> · {c.value}
                  </span>
                </div>
                <div className="mt-2.5 h-1.5 w-full bg-base-700">
                  <motion.div
                    className="h-full"
                    style={{ background: scoreColor(c.value) }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${(c.value / c.max) * 100}%` } : {}}
                    transition={{ duration: 0.55, delay: 0.25 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-slateish-400">
            PQC readiness drags the composite down hardest: the tunnel negotiates a classical
            DH group with no hybrid ML-KEM fallback, leaving it exposed to harvest-now,
            decrypt-later collection.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
