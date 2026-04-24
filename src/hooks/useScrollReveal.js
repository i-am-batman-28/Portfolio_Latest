import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = Array.from(el.querySelectorAll(".reveal"));
    if (!targets.length) return;

    const ctx = gsap.context(() => {
      targets.forEach(t => {
        const delayClass = [...t.classList].find(c => c.startsWith("reveal-delay-"));
        const delayIdx = delayClass ? parseFloat(delayClass.replace("reveal-delay-", "")) : 0;

        gsap.fromTo(t,
          { opacity: 0, y: 44, filter: "blur(5px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
            delay: delayIdx * 0.1,
            scrollTrigger: {
              trigger: t,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return ref;
};
