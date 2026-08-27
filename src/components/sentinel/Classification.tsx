import { useEffect, useMemo, useState } from "react";
import { CLASSES } from "@/data/sentinel";
import { Section, SectionHead } from "./shared";

export function Classification() {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<"scan" | "resolved">("scan");

  const blocks = useMemo(
    () =>
      Array.from({ length: 56 }, (_, i) => ({
        h: 12 + ((i * 37) % 54),
        gap: (i * 13) % 3,
      })),
    [],
  );

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("resolved");
      return;
    }
    let alive = true;
    const loop = () => {
      setPhase("scan");
      window.setTimeout(() => alive && setPhase("resolved"), 2200);
      window.setTimeout(() => {
        if (!alive) return;
        setIdx((v) => (v + 1) % CLASSES.length);
        loop();
      }, 4400);
    };
    const id = window.setTimeout(loop, 400);
    return () => {
      alive = false;
      window.clearTimeout(id);
    };
  }, []);

  const active = CLASSES[idx];

  return (
    <Section id="classify" className="dot-bg">
      <SectionHead
        tag="Tier 1 · WOW-01"
        title="Zero-decryption classification, in motion"
        lede="The analyzer only sees encrypted ESP blocks — size, spacing and burst cadence. That side-channel is enough to resolve the application class with calibrated confidence, while the payload stays sealed."
      />

      <div className="panel mt-10 overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          <span>esp_flow_window · 56 packets · payload opaque</span>
          <button
            type="button"
            onClick={() => {
              setIdx((v) => (v + 1) % CLASSES.length);
              setPhase("scan");
              window.setTimeout(() => setPhase("resolved"), 1400);
            }}
            className="hover-glow border border-border px-2.5 py-1 text-primary"
          >
            re-run
          </button>
        </div>

        <div className="relative flex h-44 items-end gap-[3px] overflow-hidden px-4 py-5">
          {blocks.map((b, i) => (
            <div
              key={i}
              aria-hidden="true"
              className="flex-1 border-t border-primary/40 bg-primary/15 transition-[height,background-color] duration-300"
              style={{
                height: `${b.h + (phase === "resolved" ? 6 : 0)}%`,
                marginLeft: b.gap ? `${b.gap * 2}px` : undefined,
                backgroundColor:
                  phase === "resolved"
                    ? "color-mix(in oklab, var(--primary) 26%, transparent)"
                    : undefined,
              }}
            />
          ))}
          {phase === "scan" ? (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 w-24 animate-[sweep_2.2s_linear] bg-[linear-gradient(90deg,transparent,color-mix(in_oklab,var(--primary)_35%,transparent),transparent)]"
              style={{ left: 0 }}
            />
          ) : null}
        </div>

        <div className="grid gap-4 border-t border-border px-4 py-4 sm:grid-cols-[1fr_auto] sm:items-center">
          <div aria-live="polite">
            <p className="font-mono text-sm text-foreground">
              {phase === "scan" ? (
                <span className="text-muted-foreground caret">analysing side-channel features</span>
              ) : (
                <>
                  <span className="text-primary">class = {active.label}</span>
                  <span className="text-muted-foreground"> · {active.hint}</span>
                </>
              )}
            </p>
          </div>
          <span
            className="font-mono text-2xl tabular-nums text-primary transition-opacity duration-300"
            style={{ opacity: phase === "resolved" ? 1 : 0.15 }}
          >
            {active.conf.toFixed(1)}%
          </span>
        </div>
      </div>

      <style>{`@keyframes sweep { from { transform: translateX(-6rem); } to { transform: translateX(calc(100% + 100vw)); } }`}</style>
    </Section>
  );
}
