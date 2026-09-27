"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { signatureProduct } from "@/data/demo-products";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function FeaturedWatch() {
  const watch = signatureProduct;
  const sectionRef = useRef<HTMLElement>(null);
  const watchContainerRef = useRef<HTMLDivElement>(null);
  const watchImageRef = useRef<HTMLDivElement>(null);
  const lightRayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const section = sectionRef.current;
    const watchImg = watchImageRef.current;
    const lightRay = lightRayRef.current;
    if (!section || !watchImg) return;

    const ctx = gsap.context(() => {
      // 1. Ken Burns Effect: Continuous subtle scale, pan, and breathing
      gsap.to(watchImg, {
        scale: 1.07,
        x: 8,
        y: -10,
        rotation: 1.5,
        duration: 8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // 2. Light sweep across watch plinth
      if (lightRay) {
        gsap.fromTo(
          lightRay,
          { xPercent: -120, opacity: 0 },
          {
            xPercent: 180,
            opacity: 0.15,
            duration: 6,
            ease: "power2.inOut",
            repeat: -1,
            repeatDelay: 3,
          }
        );
      }

      // 3. Scroll-linked Parallax on the entire watch container
      if (watchContainerRef.current) {
        gsap.fromTo(
          watchContainerRef.current,
          { y: 30 },
          {
            y: -30,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="featured" className="relative w-full py-28 md:py-40 bg-obsidian/60 backdrop-blur-[2px] border-t border-white/[0.05] overflow-hidden">
      {/* Background radial lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-radial-gradient from-champagne/[0.04] via-transparent to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header Telemetry */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-12 border-b border-white/[0.06] mb-16 gap-4">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.3em] text-champagne uppercase">
              SECTION 02 {"//"} CURATOR&apos;S APEX
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
            <span className="font-mono text-xs tracking-[0.2em] text-stone uppercase">
              IN FOCUS
            </span>
          </div>
          <span className="font-mono text-xs tracking-widest text-stone">
            EDITION 01 / BANGLADESH MARKET
          </span>
        </div>

        {/* Asymmetric 12-Column Hero Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column (5 Cols): Editorial Copy & Identity */}
          <div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs tracking-[0.3em] text-champagne uppercase">
                {watch.brand} • {watch.collection}
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-warm-white font-normal uppercase leading-[1.08] tracking-wide">
                MAKO DIVER<br />CHRONOGRAPH
              </h2>
              <div className="flex items-baseline gap-4 mt-2 font-mono">
                <span className="text-3xl text-warm-white font-normal tracking-wider">
                  ৳ {watch.price.toLocaleString()}
                </span>
                {watch.compareAtPrice && (
                  <span className="text-sm text-stone line-through opacity-60">
                    ৳ {watch.compareAtPrice.toLocaleString()}
                  </span>
                )}
                <span className="px-2.5 py-1 text-[10px] tracking-widest bg-champagne/10 text-champagne border border-champagne/20 uppercase ml-2">
                  Immediate Delivery
                </span>
              </div>
            </div>

            <p className="font-sans text-stone text-sm sm:text-base leading-relaxed font-light max-w-lg">
              {watch.description}
            </p>

            {/* Micro Trust Guarantee */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-white/[0.06] font-mono text-xs text-soft-metal">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-champagne shrink-0" />
                <span>6-Month Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-champagne shrink-0" />
                <span>Cash on Delivery</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="#curated"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-warm-white text-obsidian font-mono text-xs tracking-[0.2em] font-medium hover:bg-champagne transition-colors duration-300 shadow-xl"
              >
                <span>SECURE TIMEPIECE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#craftsmanship"
                className="flex items-center justify-center px-8 py-4 border border-white/20 text-warm-white font-mono text-xs tracking-[0.2em] hover:border-champagne hover:text-champagne transition-colors duration-300"
              >
                VIEW HOROLOGICAL SPEC
              </Link>
            </div>
          </div>

          {/* Right Column (7 Cols): Oversized Product Canvas with Ken Burns effect */}
          <div ref={watchContainerRef} className="lg:col-span-7 relative flex items-center justify-center order-1 lg:order-2">
            {/* Ambient Dark Plinth Backing */}
            <div className="relative w-full aspect-[4/5] sm:aspect-[1/1] max-w-[620px] mx-auto bg-gradient-to-b from-carbon/70 via-carbon/40 to-obsidian border border-white/[0.06] flex items-center justify-center p-8 overflow-hidden group shadow-2xl">

              {/* Radial backdrop */}
              <div className="absolute inset-0 bg-radial-gradient from-white/[0.05] via-transparent to-transparent pointer-events-none" />

              {/* Dynamic Light Ray sweep */}
              <div
                ref={lightRayRef}
                className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-champagne/20 to-transparent skew-x-[-25deg] pointer-events-none opacity-0"
              />

              {/* Watermark horology coordinates */}
              <div className="absolute top-6 left-6 font-mono text-[10px] tracking-[0.3em] text-stone/40 uppercase">
                SPEC: OR-CH20-GR // 200M ISO
              </div>
              <div className="absolute bottom-6 right-6 font-mono text-[10px] tracking-[0.3em] text-stone/40 uppercase">
                JAPANESE CALIBER
              </div>

              {/* Large Product Render with Ken Burns zoom + pan */}
              <div
                ref={watchImageRef}
                className="relative w-full h-full max-h-[90%] flex items-center justify-center will-change-transform"
              >
                <Image
                  src={watch.heroImage}
                  alt={`${watch.brand} ${watch.name}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-contain filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)]"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Technical Specification Grid (Zirka-inspired numbered hierarchy) */}
        <div className="mt-20 pt-12 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 font-mono">
          {Object.entries(watch.specs).map(([label, value], i) => (
            <div key={label} className="flex flex-col gap-1.5 border-l border-white/[0.08] pl-4">
              <span className="text-[10px] tracking-[0.25em] text-stone uppercase">
                0{i + 1} / {label}
              </span>
              <span className="text-xs text-warm-white tracking-wider uppercase font-medium">
                {value}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
