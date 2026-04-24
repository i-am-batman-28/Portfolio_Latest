import { useEffect } from "react";

export const CustomCursor = () => {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const dot   = document.getElementById("cursor-dot");
    const ring  = document.getElementById("cursor-ring");
    const trail = document.getElementById("cursor-trail");
    if (!dot || !ring || !trail) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX  = mouseX;
    let ringY  = mouseY;
    let raf;
    let isHovering = false;

    // Create trail dots
    const TRAIL = 8;
    const trailDots = Array.from({ length: TRAIL }, () => {
      const el = document.createElement("div");
      el.style.cssText = `
        position: fixed;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9997;
        transform: translate(-50%, -50%);
        transition: none;
        will-change: left, top, opacity, width, height;
      `;
      trail.appendChild(el);
      return { el, x: mouseX, y: mouseY };
    });

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = mouseX + "px";
      dot.style.top  = mouseY + "px";
    };

    const checkHover = (e) => {
      const target = e.target;
      isHovering = !!(
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-hover]")
      );
    };

    const loop = () => {
      // Ring lags behind
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + "px";
      ring.style.top  = ringY + "px";

      // Scale ring on hover
      if (isHovering) {
        ring.style.width  = "56px";
        ring.style.height = "56px";
        ring.style.borderColor = "#60a5fa";
        ring.style.opacity = "1";
        dot.style.width  = "14px";
        dot.style.height = "14px";
      } else {
        ring.style.width  = "36px";
        ring.style.height = "36px";
        ring.style.borderColor = "rgba(96,165,250,0.5)";
        ring.style.opacity = "0.8";
        dot.style.width  = "8px";
        dot.style.height = "8px";
      }

      // Trail — each follows the one before it
      trailDots[0].x += (mouseX - trailDots[0].x) * 0.25;
      trailDots[0].y += (mouseY - trailDots[0].y) * 0.25;
      for (let i = 1; i < TRAIL; i++) {
        trailDots[i].x += (trailDots[i - 1].x - trailDots[i].x) * 0.3;
        trailDots[i].y += (trailDots[i - 1].y - trailDots[i].y) * 0.3;
      }
      for (let i = 0; i < TRAIL; i++) {
        const t   = trailDots[i];
        const pct = 1 - i / TRAIL;
        const sz  = pct * 5;
        const op  = pct * 0.35;
        t.el.style.left    = t.x + "px";
        t.el.style.top     = t.y + "px";
        t.el.style.width   = sz + "px";
        t.el.style.height  = sz + "px";
        t.el.style.opacity = op;
        t.el.style.background = "#60a5fa";
      }

      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove,    { passive: true });
    window.addEventListener("mouseover", checkHover, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", checkHover);
      cancelAnimationFrame(raf);
      // cleanup trail nodes
      trailDots.forEach(t => t.el.remove());
    };
  }, []);

  return (
    <>
      <div id="cursor-trail" style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9997 }} />
    </>
  );
};
