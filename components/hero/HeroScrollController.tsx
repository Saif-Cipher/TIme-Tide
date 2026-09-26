"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HeroSequenceCanvas } from "./HeroSequenceCanvas";
import { HeroEnvironment } from "./HeroEnvironment";
import { HeroCopy } from "./HeroCopy";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HeroScrollController() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    const stage = stageRef.current;
    if (!container || !stage) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container,
        pin: stage,
        pinSpacing: false,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
        onUpdate: (self) => {
          setProgress(self.progress);
        },
      });

      // Refresh ScrollTrigger after DOM layout stabilizes
      ScrollTrigger.refresh();
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[450vh] bg-black">
      {/* Sticky / Pinned hero stage — fills viewport 100vw and 100svh / 100vh */}
      <div 
        ref={stageRef}
        className="sticky top-0 w-full h-screen h-[100svh] overflow-hidden bg-black z-10"
      >
        <HeroEnvironment />
        <HeroSequenceCanvas progress={progress} />
        <HeroCopy progress={progress} />
      </div>
    </div>
  );
}
