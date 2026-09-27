"use client";

import { useEffect, useRef } from "react";
import { Shield, RotateCcw, Banknote, Truck, Award } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ServiceTrust() {
  const sectionRef = useRef<HTMLElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  const commitments = [
    {
      number: "01",
      icon: Shield,
      statValue: 6,
      statUnit: "MO",
      title: "6-MONTH WARRANTY",
      subtitle: "MOVEMENT GUARANTEE",
      description: "Every curated timepiece carries Time and Tide's 6-month mechanical guarantee, protecting against internal movement defects and calibrator failure."
    },
    {
      number: "02",
      icon: RotateCcw,
      statValue: 15,
      statUnit: "DAYS",
      title: "15-DAY RETURNS",
      subtitle: "INSPECTION WINDOW",
      description: "Experience your timepiece in natural light. Return or exchange any unworn watch in its original protective packaging within 15 days."
    },
    {
      number: "03",
      icon: Banknote,
      statValue: 100,
      statUnit: "% COD",
      title: "CASH ON DELIVERY",
      subtitle: "NATIONWIDE CONVENIENCE",
      description: "Pay upon physical handover anywhere in Bangladesh. Inspect the exterior package seals directly before finalizing your transaction."
    },
    {
      number: "04",
      icon: Truck,
      statValue: 64,
      statUnit: "DIST",
      title: "BANGLADESH SHIPPING",
      subtitle: "ALL 64 DISTRICTS",
      description: "Express insured door-to-door dispatch to Dhaka, Chittagong, Sylhet, and every district across the country in shock-resistant packaging."
    },
    {
      number: "05",
      icon: Award,
      statValue: 100,
      statUnit: "% QC",
      title: "CURATED AUTHENTICITY",
      subtitle: "PHYSICALLY VERIFIED",
      description: "We are curators, not an unvetted marketplace. Every single unit undergoes dial inspection, timing calibration, and bezel checks before dispatch."
    }
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      // In reduced motion, populate final values immediately
      commitments.forEach((item, i) => {
        const el = countersRef.current[i];
        if (el) el.innerText = item.statValue.toString();
      });
      return;
    }

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      commitments.forEach((item, i) => {
        const el = countersRef.current[i];
        if (!el) return;

        const counterObj = { val: 0 };
        gsap.to(counterObj, {
          val: item.statValue,
          duration: 2.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.innerText = Math.floor(counterObj.val).toString();
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, [commitments]);

  return (
    <section ref={sectionRef} className="py-28 md:py-40 px-6 md:px-12 bg-carbon text-warm-white border-t border-white/[0.06] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-12 border-b border-white/[0.06] mb-16 gap-6">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-champagne uppercase">
              SECTION 08 // THE COMMITMENT
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wide uppercase font-normal mt-3">
              SERVICE & TRUST
            </h2>
          </div>
          <p className="font-sans text-stone text-sm max-w-sm font-light leading-relaxed">
            Time and Tide is built on transparency and dependability. Our policies are designed to bring peace of mind to every horology purchase in Bangladesh.
          </p>
        </div>

        {/* 5-Column Luxury Grid with Animated Counters */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {commitments.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="bg-obsidian/70 border border-white/[0.06] hover:border-champagne/30 transition-all duration-500 p-8 flex flex-col justify-between gap-8 group relative overflow-hidden"
              >
                {/* Subtle top indicator glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-champagne/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.25em] text-stone group-hover:text-champagne transition-colors">
                    {item.number} {"//"}
                  </span>
                  <Icon className="w-5 h-5 text-champagne/70 group-hover:text-champagne transition-colors" />
                </div>

                {/* Animated Metric Hero Counter */}
                <div className="flex items-baseline gap-2 pt-2 border-b border-white/[0.04] pb-4">
                  <span
                    ref={(el) => {
                      countersRef.current[index] = el;
                    }}
                    className="font-mono text-3xl sm:text-4xl text-warm-white font-normal tracking-tight group-hover:text-champagne transition-colors duration-300"
                  >
                    0
                  </span>
                  <span className="font-mono text-xs tracking-widest text-champagne uppercase font-medium">
                    {item.statUnit}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-champagne uppercase">
                    {item.subtitle}
                  </span>
                  <h3 className="font-mono text-sm tracking-[0.15em] text-warm-white font-medium uppercase">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-stone font-light leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
