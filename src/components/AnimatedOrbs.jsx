export const AnimatedOrbs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
    {/* Blue orb — top left */}
    <div
      className="absolute rounded-full"
      style={{
        width: "700px", height: "700px",
        top: "-200px", left: "-150px",
        background: "hsl(217 91% 60%)",
        opacity: 0.07,
        filter: "blur(130px)",
        animation: "orb-1 20s ease-in-out infinite",
      }}
    />
    {/* Indigo orb — bottom right */}
    <div
      className="absolute rounded-full"
      style={{
        width: "600px", height: "600px",
        bottom: "-180px", right: "-120px",
        background: "hsl(230 80% 62%)",
        opacity: 0.06,
        filter: "blur(140px)",
        animation: "orb-2 25s ease-in-out infinite",
      }}
    />
    {/* Grid overlay */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
        opacity: 0.03,
      }}
    />
  </div>
);
