import { useEffect, useRef } from "react";

// Ambient packet-flow topology: endpoints drift slowly, tunnels carry animated
// dashed packets. Canvas keeps it cheap; density stays low on purpose.
export default function NetworkCanvas({ className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf;
    let w = 0;
    let h = 0;
    let nodes = [];
    let links = [];

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = w < 640 ? 12 : 20;
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        r: Math.random() > 0.78 ? 3.2 : 1.8,
      }));
      links = [];
      nodes.forEach((n, i) => {
        const j = (i + 1 + Math.floor(Math.random() * 3)) % nodes.length;
        if (i !== j) links.push({ a: i, b: j, offset: Math.random() * 40, speed: 0.25 + Math.random() * 0.5 });
      });
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);

      links.forEach((l) => {
        const a = nodes[l.a];
        const b = nodes[l.b];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist > Math.min(w, h) * 0.55) return;
        const fade = 1 - dist / (Math.min(w, h) * 0.55);
        ctx.save();
        ctx.strokeStyle = `rgba(45, 212, 191, ${0.16 * fade})`;
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 9]);
        ctx.lineDashOffset = reduced ? 0 : -((t * 0.02 * l.speed + l.offset) % 1000);
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
        ctx.restore();
      });

      nodes.forEach((n) => {
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
        }
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.r > 2.5 ? "rgba(45, 212, 191, 0.85)" : "rgba(167, 179, 199, 0.45)";
        ctx.fill();
        if (n.r > 2.5) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.r + 5, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(45, 212, 191, 0.22)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      raf = requestAnimationFrame(draw);
    };

    build();
    raf = requestAnimationFrame(draw);
    const onResize = () => build();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={`h-full w-full ${className}`} />;
}
