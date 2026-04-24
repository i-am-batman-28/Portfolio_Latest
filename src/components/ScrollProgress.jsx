import { useEffect, useState } from "react";

export const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      setProgress(Math.min((el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100, 100));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[100]">
      <div
        className="h-full transition-none"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd)",
          boxShadow: "0 0 12px rgba(96,165,250,0.9), 0 0 4px rgba(96,165,250,1)",
        }}
      />
    </div>
  );
};
