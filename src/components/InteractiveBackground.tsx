import { useEffect, useRef, useCallback } from "react";

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const scrollRef = useRef(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    const spacing = 40;
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y + scrollRef.current;
    const radius = 180;

    ctx.clearRect(0, 0, w, h);

    // Offset grid by scroll for parallax
    const scrollOffset = scrollRef.current * 0.05;

    for (let x = 0; x < w; x += spacing) {
      for (let y = 0; y < h + spacing; y += spacing) {
        const drawY = ((y + scrollOffset) % (h + spacing));
        const dx = mx - x;
        const dy = my - drawY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let size = 1;
        let opacity = 0.12;

        if (dist < radius) {
          const factor = 1 - dist / radius;
          size = 1 + factor * 3;
          opacity = 0.12 + factor * 0.5;
        }

        // Dot color using CSS variable tones
        ctx.beginPath();
        ctx.arc(x, drawY, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${opacity})`;
        ctx.fill();
      }
    }

    // Mouse glow
    if (mx > 0 && my > 0) {
      const glowY = my;
      const gradient = ctx.createRadialGradient(mx, glowY, 0, mx, glowY, 250);
      gradient.addColorStop(0, "rgba(99, 102, 241, 0.08)");
      gradient.addColorStop(0.5, "rgba(6, 182, 212, 0.04)");
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fillRect(mx - 250, glowY - 250, 500, 500);
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let raf: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };

    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("scroll", onScroll, { passive: true });
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default InteractiveBackground;
