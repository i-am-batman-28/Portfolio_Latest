import { useEffect, useRef } from "react";

const COLORS = [
  [96, 165, 250],   // blue
  [96, 165, 250],   // blue (weighted)
  [129, 140, 248],  // indigo (subtle variation)
];

export const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width  = W;
    canvas.height = H;

    let mouseX = -1000;
    let mouseY = -1000;

    const onResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width  = W;
      canvas.height = H;
    };
    const onMouseMove = (e) => { mouseX = e.clientX; mouseY = e.clientY; };
    const onMouseLeave = () => { mouseX = -1000; mouseY = -1000; };
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave);

    const COUNT = Math.min(Math.floor((W * H) / 9000), 120);
    const particles = Array.from({ length: COUNT }, () => {
      const colorSet = COLORS[Math.floor(Math.random() * COLORS.length)];
      return {
        x:  Math.random() * W,
        y:  Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r:  Math.random() * 1.4 + 0.4,
        alpha: Math.random() * 0.5 + 0.15,
        color: colorSet,
        pulse: Math.random() * Math.PI * 2,
      };
    });

    const CONNECT      = 140;
    const REPEL_R      = 180;
    const ATTRACT_R    = 320;

    let raf;
    let frame = 0;

    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, W, H);

      for (const p of particles) {
        p.pulse += 0.01;
        const dx   = p.x - mouseX;
        const dy   = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < REPEL_R && dist > 0) {
          // repel hard when close
          const force = (REPEL_R - dist) / REPEL_R;
          p.vx += (dx / dist) * force * 0.5;
          p.vy += (dy / dist) * force * 0.5;
        } else if (dist < ATTRACT_R && dist > REPEL_R) {
          // gentle pull toward cursor in the outer ring
          const force = ((ATTRACT_R - dist) / (ATTRACT_R - REPEL_R)) * 0.04;
          p.vx -= (dx / dist) * force;
          p.vy -= (dy / dist) * force;
        }

        p.vx *= 0.97;
        p.vy *= 0.97;
        p.x  += p.vx;
        p.y  += p.vy;

        if (p.x < 0)  p.x = W;
        if (p.x > W)  p.x = 0;
        if (p.y < 0)  p.y = H;
        if (p.y > H)  p.y = 0;
      }

      // connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a  = particles[i];
          const b  = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECT) {
            const t     = 1 - d / CONNECT;
            const alpha = t * t * 0.18;
            const [r, g, bl] = a.color;
            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            grad.addColorStop(0, `rgba(${r},${g},${bl},${alpha})`);
            grad.addColorStop(1, `rgba(${b.color[0]},${b.color[1]},${b.color[2]},${alpha})`);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = t * 0.9;
            ctx.stroke();
          }
        }
      }

      // dots with subtle pulse
      for (const p of particles) {
        const pulsedR     = p.r * (1 + Math.sin(p.pulse) * 0.15);
        const pulsedAlpha = p.alpha * (0.85 + Math.sin(p.pulse) * 0.15);
        const [r, g, bl]  = p.color;

        // outer glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pulsedR * 3);
        grd.addColorStop(0, `rgba(${r},${g},${bl},${pulsedAlpha * 0.6})`);
        grd.addColorStop(1, `rgba(${r},${g},${bl},0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulsedR * 3, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, pulsedR, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${bl},${pulsedAlpha})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.7,
        width: "100%",
        height: "100%",
      }}
    />
  );
};
