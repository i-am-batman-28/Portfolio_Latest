import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimations = () => {
  useEffect(() => {
    // Small stagger on every <section> entering the viewport
    const sections = document.querySelectorAll("section");
    const ctxs = [];

    sections.forEach(section => {
      const ctx = gsap.context(() => {
        // Subtle parallax on the section background glow divs
        const glows = section.querySelectorAll(".absolute.pointer-events-none");
        if (glows.length) {
          glows.forEach((g, i) => {
            gsap.to(g, {
              y: (i % 2 === 0 ? -40 : 40),
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
              },
            });
          });
        }

        // Section heading — scale from 0.96 → 1 as it enters
        const headings = section.querySelectorAll("h2");
        headings.forEach(h => {
          gsap.fromTo(h,
            { scale: 0.96, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: h,
                start: "top 88%",
                toggleActions: "play none none none",
              },
            }
          );
        });

        // Metric/stat chips — count-up feel via slight y + stagger
        const chips = section.querySelectorAll("[data-metric]");
        if (chips.length) {
          gsap.fromTo(chips,
            { y: 20, opacity: 0, scale: 0.9 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.5,
              stagger: 0.08,
              ease: "back.out(1.5)",
              scrollTrigger: {
                trigger: chips[0],
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // Timeline nodes on experience section
        const nodes = section.querySelectorAll(".timeline-node");
        if (nodes.length) {
          gsap.fromTo(nodes,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.4,
              stagger: 0.15,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: nodes[0],
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // Tag pills — wave stagger
        const tagGroups = section.querySelectorAll(".tag-group");
        tagGroups.forEach(group => {
          const tags = group.querySelectorAll(".tag");
          if (!tags.length) return;
          gsap.fromTo(tags,
            { y: 8, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.35,
              stagger: 0.04,
              ease: "power2.out",
              scrollTrigger: {
                trigger: group,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        });

      }, section);
      ctxs.push(ctx);
    });

    // Navbar fade-in on load
    const navbar = document.querySelector("nav");
    if (navbar) {
      gsap.fromTo(navbar,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out", delay: 0.2 }
      );
    }

    return () => ctxs.forEach(c => c.revert());
  }, []);
};
