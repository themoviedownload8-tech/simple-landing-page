import { useEffect, useRef } from "react";
import { PROJECT } from "@/data/sentinel";

type Node = { x: number; y: number; vx: number; vy: number; r: number };

function NetworkCanvas() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const nodes: Node[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      nodes.length = 0;
      const count = Math.max(14, Math.min(34, Math.round((w * h) / 34000)));
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          r: Math.random() > 0.82 ? 3 : 1.6,
        });
      }
    };

    resize();
    seed();

    let t = 0;
    const draw = () => {
      t += 1;
      ctx.clearRect(0, 0, w, h);

      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
        }
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > 190) continue;
          const alpha = (1 - d / 190) * 0.34;
          ctx.strokeStyle = `rgba(45, 212, 191, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.setLineDash([4, 6]);
          ctx.lineDashOffset = reduced ? 0 : -t * 0.35;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();

          if (!reduced && d < 150) {
            const p = ((t * 0.004 + (i + j) * 0.17) % 1);
            ctx.setLineDash([]);
            ctx.fillStyle = `rgba(94, 234, 212, ${alpha * 2.2})`;
            ctx.beginPath();
            ctx.arc(a.x + (b.x - a.x) * p, a.y + (b.y - a.y) * p, 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      ctx.setLineDash([]);
      for (const n of nodes) {
        ctx.fillStyle = n.r > 2 ? "rgba(94, 234, 212, 0.85)" : "rgba(148, 178, 190, 0.5)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
        if (n.r > 2) {
          ctx.strokeStyle = "rgba(45, 212, 191, 0.28)";
          ctx.beginPath();
          ctx.arc(n.x, n.y, 9 + Math.sin(t * 0.02 + n.x) * 2, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    const ro = new ResizeObserver(() => {
      resize();
      seed();
    });
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="absolute inset-0 h-full w-full" />;
}

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-28 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
      <NetworkCanvas />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_20%_0%,transparent_20%,var(--background)_78%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em]">
            <span className="border border-primary/40 bg-primary/10 px-2 py-1 text-primary">
              {PROJECT.ps}
            </span>
            <span className="border border-border px-2 py-1 text-muted-foreground">
              {PROJECT.org}
            </span>
            <span className="border border-border px-2 py-1 text-muted-foreground">
              {PROJECT.theme}
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Audit the tunnel.
            <br />
            <span className="text-primary">Never decrypt the payload.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {PROJECT.name} is an {PROJECT.tagline.toLowerCase()}. It parses IKE negotiation
            deterministically, classifies ESP traffic with explainable machine learning, and returns
            an auditable security posture score — without ever breaking confidentiality.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#pipeline"
              className="hover-glow border border-primary/60 bg-primary/15 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.16em] text-primary"
            >
              Inspect architecture
            </a>
            <a
              href="#score"
              className="hover-glow border border-border px-5 py-2.5 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground"
            >
              View sample assessment
            </a>
          </div>
        </div>

        <div className="panel scanlines p-4 font-mono text-[12px] leading-relaxed">
          <div className="flex items-center justify-between border-b border-border pb-2 text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            <span>sentinel@analyzer</span>
            <span className="text-primary">live</span>
          </div>
          <pre className="mt-3 overflow-x-auto whitespace-pre text-muted-foreground">
            {`$ sentinel scan --iface eth0 --peer 203.0.113.44
[ike] IKEv1 aggressive mode ......... FAIL
[ike] transform 3DES-CBC/SHA1 ....... WEAK
[esp] flows observed ................ 1,284
[ml ] class=VoIP conf=0.964 shap=+0.31
[pqc] hybrid ML-KEM support ......... none`}
          </pre>
          <p className="mt-3 text-primary caret">score 42/100 — posture: at risk</p>
        </div>
      </div>
    </section>
  );
}
