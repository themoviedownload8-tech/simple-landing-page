import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Section, SectionHead } from "./shared";

const BEFORE = [
  "Manual Wireshark trawling across thousands of ESP frames",
  "IKE weaknesses found only by an expert who remembers the RFC",
  "Black-box tooling that outputs a verdict with no rationale",
  "No repeatable score — every audit reads differently",
  "Post-quantum exposure not measured at all",
];

const AFTER = [
  "Automated IKE state-machine parsing with RFC-cited findings",
  "ESP traffic classified without decryption, SHAP-explained",
  "Weighted rubric → reproducible 0–100 posture score",
  "Remediation mapped to exact config directives",
  "PQC readiness index and harvest-now exposure window",
];

export function ProblemSolution() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.4"] });
  const beforeOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0.15]);
  const beforeBlur = useTransform(scrollYProgress, [0, 0.55], ["blur(0px)", "blur(3px)"]);
  const beforeX = useTransform(scrollYProgress, [0, 0.55], [0, -18]);
  const afterOpacity = useTransform(scrollYProgress, [0.25, 0.8], [0.2, 1]);
  const afterX = useTransform(scrollYProgress, [0.25, 0.8], [18, 0]);
  const lineW = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <Section id="problem">
      <SectionHead
        tag="Problem statement 26160"
        title="From opaque captures to explainable posture"
        lede="NTRO's brief asks for assessment of IPsec VPN implementations where the traffic cannot be decrypted. Today that work is manual, expert-bound and unrepeatable."
      />

      <div ref={ref} className="mt-10">
        <div className="h-px w-full bg-border">
          <motion.div className="h-px bg-primary" style={{ width: lineW }} />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <motion.div
            className="panel p-6"
            style={{ opacity: beforeOpacity, filter: beforeBlur, x: beforeX }}
          >
            <p className="mono-tag text-destructive">state: before</p>
            <ul className="mt-4 space-y-3">
              {BEFORE.map((t) => (
                <li key={t} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-[7px] h-px w-4 shrink-0 bg-destructive/70" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="panel border-primary/30 p-6"
            style={{ opacity: afterOpacity, x: afterX }}
          >
            <p className="mono-tag">state: after · ipsec sentinel</p>
            <ul className="mt-4 space-y-3">
              {AFTER.map((t) => (
                <li key={t} className="flex gap-3 text-sm text-foreground">
                  <span className="mt-[7px] h-px w-4 shrink-0 bg-primary" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
