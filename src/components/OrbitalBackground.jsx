import { useEffect, useRef } from "react";

// speed = radians per millisecond
const ORBITS = [
  { rx: 0.38, ry: 0.13, tilt: -18, speed: 0.00022, phase: 0.0,  size: 5, color: [96,  165, 250], glow: 20 },
  { rx: 0.52, ry: 0.18, tilt:  14, speed: 0.00014, phase: 2.1,  size: 8, color: [129, 140, 248], glow: 26 },
  { rx: 0.67, ry: 0.23, tilt: -26, speed: 0.00008, phase: 4.2,  size: 4, color: [165, 180, 252], glow: 14 },
  { rx: 0.80, ry: 0.29, tilt:  22, speed: 0.00005, phase: 1.0,  size: 10, color: [99, 102, 241], glow: 32 },
  { rx: 0.93, ry: 0.34, tilt: -12, speed: 0.00003, phase: 3.5,  size: 3, color: [148, 163, 184], glow: 10 },
];

export const OrbitalBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W, H, cx, cy, raf;

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
      cx = W * 0.5;
      cy = H * 0.5;
    };
    resize();
    window.addEventListener("resize", resize);

    const toRad = d => d * Math.PI / 180;

    const getPoint = (orbit, angle) => {
      const a      = orbit.rx * W * 0.5;
      const b      = orbit.ry * H * 0.5;
      const cos    = Math.cos(toRad(orbit.tilt));
      const sin    = Math.sin(toRad(orbit.tilt));
      const ex     = a * Math.cos(angle);
      const ey     = b * Math.sin(angle);
      return { x: cx + ex * cos - ey * sin, y: cy + ex * sin + ey * cos };
    };

    const drawOrbit = orbit => {
      const [r, g, b] = orbit.color;
      const STEPS = 200;
      ctx.beginPath();
      for (let i = 0; i <= STEPS; i++) {
        const { x, y } = getPoint(orbit, (i / STEPS) * Math.PI * 2);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(${r},${g},${b},0.1)`;
      ctx.lineWidth = 0.7;
      ctx.stroke();
    };

    const drawPlanet = (orbit, angle) => {
      const [r, g, b] = orbit.color;
      const { x, y } = getPoint(orbit, angle);

      // glow halo
      const grad = ctx.createRadialGradient(x, y, 0, x, y, orbit.glow);
      grad.addColorStop(0,   `rgba(${r},${g},${b},0.55)`);
      grad.addColorStop(0.35,`rgba(${r},${g},${b},0.18)`);
      grad.addColorStop(1,   `rgba(${r},${g},${b},0)`);
      ctx.beginPath();
      ctx.arc(x, y, orbit.glow, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // core dot
      ctx.beginPath();
      ctx.arc(x, y, orbit.size * 0.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${b},1)`;
      ctx.fill();

      // specular highlight
      ctx.beginPath();
      ctx.arc(x - orbit.size * 0.12, y - orbit.size * 0.14, orbit.size * 0.18, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,0.45)`;
      ctx.fill();
    };

    const draw = (now) => {
      ctx.clearRect(0, 0, W, H);

      // central sun glow
      const r = Math.min(W, H) * 0.12;
      const sunGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      sunGrad.addColorStop(0,   "rgba(96,165,250,0.07)");
      sunGrad.addColorStop(0.6, "rgba(96,165,250,0.025)");
      sunGrad.addColorStop(1,   "rgba(96,165,250,0)");
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = sunGrad;
      ctx.fill();

      ORBITS.forEach(o => drawOrbit(o));
      ORBITS.forEach(o => drawPlanet(o, o.phase + now * o.speed));

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed", inset: 0,
        pointerEvents: "none", zIndex: 0,
        width: "100%", height: "100%",
        opacity: 0.8,
      }}
    />
  );
};
