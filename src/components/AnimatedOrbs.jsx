export const AnimatedOrbs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }} aria-hidden="true">
    {/* Deep blue nebula — top left */}
    <div className="absolute rounded-full" style={{
      width: "800px", height: "800px",
      top: "-250px", left: "-200px",
      background: "radial-gradient(circle at 40% 40%, hsl(217 91% 60%), hsl(230 80% 40%) 50%, transparent 70%)",
      opacity: 0.055,
      filter: "blur(90px)",
      animation: "orb-1 22s ease-in-out infinite",
    }} />
    {/* Indigo nebula — bottom right */}
    <div className="absolute rounded-full" style={{
      width: "700px", height: "700px",
      bottom: "-200px", right: "-180px",
      background: "radial-gradient(circle at 60% 60%, hsl(250 80% 65%), hsl(230 70% 45%) 50%, transparent 70%)",
      opacity: 0.045,
      filter: "blur(100px)",
      animation: "orb-2 28s ease-in-out infinite",
    }} />
    {/* Faint blue — mid screen */}
    <div className="absolute rounded-full" style={{
      width: "500px", height: "500px",
      top: "45%", left: "40%",
      background: "radial-gradient(circle, hsl(217 91% 60%), transparent 70%)",
      opacity: 0.025,
      filter: "blur(110px)",
      animation: "orb-3 35s ease-in-out infinite",
    }} />
    {/* Grid overlay */}
    <div className="absolute inset-0" style={{
      backgroundImage:
        "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
      backgroundSize: "72px 72px",
      opacity: 0.025,
    }} />
  </div>
);
