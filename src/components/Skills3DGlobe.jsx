import { useEffect, useRef } from "react";

export const Skills3DGlobe = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const skills = [
      "Python","TypeScript","JavaScript","Java","FastAPI","Node.js","Express",
      "PostgreSQL","MongoDB","Redis","React","Next.js","Tailwind","Redux",
      "LangChain","LLaMA-3","RAG","HuggingFace","Pandas","NumPy","Docker",
      "Git","Linux","Postman","Vercel","Pinecone","Celery","REST APIs","JWT",
      "OAuth2","Scikit-learn","System Design","DSA","OOP","Microservices",
      "SQL","TypeScript","Vite","Webpack","RBAC",
    ];

    let rotX = 0.3;
    let rotY = 0;
    let width = 0;
    let height = 0;
    let rafId = null;
    let isDragging = false;
    let lastX = 0;
    let lastY = 0;
    let mousePos = { x: -9999, y: -9999 };

    const points = skills.map((skill, i) => {
      const goldenRatio = (1 + Math.sqrt(5)) / 2;
      const theta = Math.acos(1 - (2 * (i + 0.5)) / skills.length);
      const phi = (2 * Math.PI * i) / goldenRatio;
      return {
        label: skill,
        ox: Math.sin(theta) * Math.cos(phi),
        oy: Math.cos(theta),
        oz: Math.sin(theta) * Math.sin(phi),
      };
    });

    function project(x, y, z, cx, cy, radius) {
      const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY), sinY = Math.sin(rotY);

      const x1 = cosY * x + sinY * z;
      const z1 = -sinY * x + cosY * z;
      const y1 = cosX * y - sinX * z1;
      const z2 = sinX * y + cosX * z1;

      const scale = radius * 0.85;
      return {
        sx: cx + x1 * scale,
        sy: cy + y1 * scale,
        sz: z2,
      };
    }

    function drawPill(label, sx, sy, sz, hovered) {
      const depth = (sz + 1) / 2;
      const alpha = 0.15 + depth * 0.85;

      ctx.font = `11px 'JetBrains Mono', monospace`;
      const textW = ctx.measureText(label).width;
      const padX = 10;
      const padY = 5;
      const pillW = textW + padX * 2;
      const pillH = 22;
      const r = pillH / 2;

      let scaleFactor = 1;
      if (hovered) scaleFactor = 1.12;

      const w = pillW * scaleFactor;
      const h = pillH * scaleFactor;
      const x = sx - w / 2;
      const y = sy - h / 2;
      const rr = (h / 2);

      if (hovered) {
        ctx.fillStyle = `rgba(96,165,250,0.2)`;
        ctx.strokeStyle = `rgba(96,165,250,1)`;
      } else {
        ctx.fillStyle = `rgba(96,165,250,${alpha * 0.15})`;
        ctx.strokeStyle = `rgba(96,165,250,${alpha * 0.4})`;
      }

      ctx.lineWidth = hovered ? 1.5 : 1;
      ctx.beginPath();
      ctx.moveTo(x + rr, y);
      ctx.lineTo(x + w - rr, y);
      ctx.arcTo(x + w, y, x + w, y + rr, rr);
      ctx.lineTo(x + w, y + h - rr);
      ctx.arcTo(x + w, y + h, x + w - rr, y + h, rr);
      ctx.lineTo(x + rr, y + h);
      ctx.arcTo(x, y + h, x, y + h - rr, rr);
      ctx.lineTo(x, y + rr);
      ctx.arcTo(x, y, x + rr, y, rr);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      const textAlpha = hovered ? 1 : 0.2 + depth * 0.8;
      ctx.fillStyle = `rgba(255,255,255,${textAlpha})`;
      ctx.font = `${11 * scaleFactor}px 'JetBrains Mono', monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(label, sx, sy);

      return { x, y, w, h };
    }

    function getHoveredIndex(projected) {
      for (let i = projected.length - 1; i >= 0; i--) {
        const { bx, by, bw, bh } = projected[i];
        if (
          mousePos.x >= bx &&
          mousePos.x <= bx + bw &&
          mousePos.y >= by &&
          mousePos.y <= by + bh
        ) {
          return i;
        }
      }
      return -1;
    }

    function resize() {
      const parent = canvas.parentElement;
      if (!parent) return;
      const size = Math.min(parent.clientWidth, parent.clientHeight, 520);
      width = size;
      height = size;
      canvas.width = size * window.devicePixelRatio;
      canvas.height = size * window.devicePixelRatio;
      canvas.style.width = size + "px";
      canvas.style.height = size + "px";
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) * 0.42;

      const projected = points.map((p) => {
        const { sx, sy, sz } = project(p.ox, p.oy, p.oz, cx, cy, radius);
        return { label: p.label, sx, sy, sz, bx: 0, by: 0, bw: 0, bh: 0 };
      });

      projected.sort((a, b) => a.sz - b.sz);

      const hoveredIdx = getHoveredIndex(projected);

      projected.forEach((p, i) => {
        const hovered = i === hoveredIdx;
        const bounds = drawPill(p.label, p.sx, p.sy, p.sz, hovered);
        p.bx = bounds.x;
        p.by = bounds.y;
        p.bw = bounds.w;
        p.bh = bounds.h;
      });
    }

    function loop() {
      if (!isDragging) {
        rotY += 0.003;
        rotX += 0.0008;
      }
      draw();
      rafId = requestAnimationFrame(loop);
    }

    function onMouseDown(e) {
      isDragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
    }

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mousePos.x = e.clientX - rect.left;
      mousePos.y = e.clientY - rect.top;

      if (isDragging) {
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        rotY += dx * 0.008;
        rotX += dy * 0.008;
        lastX = e.clientX;
        lastY = e.clientY;
      }
    }

    function onMouseUp() {
      isDragging = false;
    }

    function onMouseLeave() {
      isDragging = false;
      mousePos.x = -9999;
      mousePos.y = -9999;
    }

    function onTouchStart(e) {
      if (e.touches.length === 1) {
        isDragging = true;
        lastX = e.touches[0].clientX;
        lastY = e.touches[0].clientY;
      }
    }

    function onTouchMove(e) {
      if (!isDragging || e.touches.length !== 1) return;
      e.preventDefault();
      const dx = e.touches[0].clientX - lastX;
      const dy = e.touches[0].clientY - lastY;
      rotY += dx * 0.008;
      rotX += dy * 0.008;
      lastX = e.touches[0].clientX;
      lastY = e.touches[0].clientY;
    }

    function onTouchEnd() {
      isDragging = false;
    }

    const ro = new ResizeObserver(() => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      resize();
    });
    ro.observe(canvas.parentElement || canvas);

    resize();
    loop();

    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("touchstart", onTouchStart, { passive: false });
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    canvas.addEventListener("touchend", onTouchEnd);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      canvas.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ display: "block" }} />;
};
