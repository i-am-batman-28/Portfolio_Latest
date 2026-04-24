export const AnimatedOrbs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
    {/* Primary green orb — top left */}
    <div
      className="absolute rounded-full blur-[120px] opacity-[0.18]"
      style={{
        width: "600px",
        height: "600px",
        top: "-150px",
        left: "-100px",
        background: "hsl(153 60% 53%)",
        animation: "orb-1 18s ease-in-out infinite",
      }}
    />
    {/* Blue/indigo orb — bottom right */}
    <div
      className="absolute rounded-full blur-[140px] opacity-[0.12]"
      style={{
        width: "700px",
        height: "700px",
        bottom: "-200px",
        right: "-150px",
        background: "hsl(230 70% 60%)",
        animation: "orb-2 22s ease-in-out infinite",
      }}
    />
    {/* Subtle teal orb — center */}
    <div
      className="absolute rounded-full blur-[160px] opacity-[0.07]"
      style={{
        width: "500px",
        height: "500px",
        top: "40%",
        left: "35%",
        background: "hsl(180 60% 50%)",
        animation: "orb-3 28s ease-in-out infinite",
      }}
    />
    {/* Noise/grid overlay */}
    <div
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
      }}
    />
  </div>
);
