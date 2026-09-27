"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  triggerElement?: React.RefObject<HTMLElement>;
}

export function ScrollReveal({ children, className = "", delay = 0, triggerElement }: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const element = elementRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 40,
          clipPath: "inset(0 0 100% 0)",
        },
        {
          opacity: 1,
          y: 0,
          clipPath: "inset(0 0 0% 0)",
          duration: 0.8,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: triggerElement?.current || element,
            start: "top 80%",
            end: "top 20%",
            scrub: false,
          },
        }
      );
    }, element);

    return () => ctx.revert();
  }, [delay, triggerElement]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
