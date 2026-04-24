import { useEffect, useRef } from "react";

export const MouseSpotlight = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      el.style.left = e.clientX + "px";
      el.style.top  = e.clientY + "px";
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 1,
        transform: "translate(-50%, -50%)",
        background: "radial-gradient(circle, rgba(96,165,250,0.04) 0%, rgba(96,165,250,0.015) 35%, transparent 70%)",
        transition: "left 0.08s linear, top 0.08s linear",
      }}
    />
  );
};
