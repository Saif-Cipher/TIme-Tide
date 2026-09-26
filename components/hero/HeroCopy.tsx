"use client";

import clsx from "clsx";
import Link from "next/link";
import { ArrowDown, ChevronRight } from "lucide-react";

interface HeroCopyProps {
  progress: number;
}

export function HeroCopy({ progress }: HeroCopyProps) {
  // Phase 1: 0.00 - 0.20 (Watch Introduction)
  const isPhase1 = progress >= 0.0 && progress < 0.20;
  // Phase 2: 0.22 - 0.42 (Camera / Depth Movement)
  const isPhase2 = progress >= 0.22 && progress < 0.42;
  // Phase 3: 0.44 - 0.64 (Watch Transformation)
  const isPhase3 = progress >= 0.44 && progress < 0.64;
  // Phase 4: 0.66 - 0.84 (Mechanical / Detail Reveal)
  const isPhase4 = progress >= 0.66 && progress < 0.84;
  // Phase 5: 0.86 - 0.98 (Final Hero State)
  const isPhase5 = progress >= 0.86 && progress <= 1.0;

  return (
    <div className="absolute inset-0 z-30 pointer-events-none flex flex-col justify-between p-6 md:p-12">
      {/* Top telemetry and phase indicator */}
      <div className="flex items-center justify-between font-mono text-[10px] md:text-xs tracking-[0.25em] text-stone uppercase pt-16 md:pt-14">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
          <span>SERIES 01 // BANGLADESH CURATION</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-warm-white">
            {progress < 0.2 ? "01" : progress < 0.44 ? "02" : progress < 0.66 ? "03" : progress < 0.86 ? "04" : "05"}
          </span>
          <span className="opacity-40">/ 05</span>
        </div>
      </div>

      {/* Main Center Stage Typography */}
      <div className="relative flex-1 flex flex-col items-center justify-center text-center">
        
        {/* PHASE 01: WATCH INTRODUCTION */}
        <div
          className={clsx(
            "absolute transition-all duration-700 ease-out flex flex-col items-center gap-6 max-w-3xl",
            isPhase1
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 -translate-y-8 scale-95 pointer-events-none"
          )}
        >
          <span className="font-mono text-xs tracking-[0.3em] text-champagne uppercase">
            Curated Timepieces
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.12em] text-warm-white font-normal uppercase leading-[1.05]">
            TIME SHOULD<br />BE WORN.
          </h1>
          <p className="font-sans text-stone text-sm md:text-base max-w-lg tracking-wide font-light">
            Curated watches for modern life. Affordable-premium horology selected for restraint, proportion, and quiet endurance.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Link
              href="#featured"
              className="px-8 py-3.5 bg-warm-white text-obsidian font-mono text-xs tracking-[0.2em] font-medium hover:bg-champagne hover:text-obsidian transition-colors duration-300"
            >
              EXPLORE COLLECTION
            </Link>
            <Link
              href="#signature"
              className="px-8 py-3.5 border border-white/20 text-warm-white font-mono text-xs tracking-[0.2em] hover:border-champagne hover:text-champagne transition-colors duration-300"
            >
              DISCOVER A WATCH
            </Link>
          </div>
        </div>

        {/* PHASE 02: CAMERA / DEPTH MOVEMENT */}
        <div
          className={clsx(
            "absolute transition-all duration-700 ease-out flex flex-col items-center gap-4 max-w-2xl",
            isPhase2
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-8 scale-95"
          )}
        >
          <span className="font-mono text-xs tracking-[0.3em] text-champagne uppercase">
            Phase 02 // Dynamic Perspective
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl tracking-[0.1em] text-warm-white font-normal">
            SCULPTED IN STEEL
          </h2>
          <p className="font-sans text-stone text-xs sm:text-sm max-w-md leading-relaxed font-light">
            Surgical-grade 316L stainless steel casework. High-polish beveled bevels meeting brushed satin surfaces designed to command light.
          </p>
          <div className="flex items-center gap-6 mt-2 font-mono text-[11px] tracking-widest text-soft-metal">
            <span>CASE: 43.5 MM</span>
            <span>•</span>
            <span>WATER: 200 METERS</span>
          </div>
        </div>

        {/* PHASE 03: WATCH TRANSFORMATION */}
        <div
          className={clsx(
            "absolute transition-all duration-700 ease-out flex flex-col items-center gap-4 max-w-2xl",
            isPhase3
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-8 scale-95"
          )}
        >
          <span className="font-mono text-xs tracking-[0.3em] text-champagne uppercase">
            Phase 03 // Horological Anatomy
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl tracking-[0.1em] text-warm-white font-normal">
            TIME, UNSEALED
          </h2>
          <p className="font-sans text-stone text-xs sm:text-sm max-w-md leading-relaxed font-light">
            The knurled bezel lifts. Anti-reflective sapphire crystal separates to reveal the multi-tiered dial architecture beneath.
          </p>
          <div className="flex items-center gap-6 mt-2 font-mono text-[11px] tracking-widest text-soft-metal">
            <span>CRYSTAL: ANTI-REFLECTIVE</span>
            <span>•</span>
            <span>BEZEL: 120-CLICK UNI-DIRECTIONAL</span>
          </div>
        </div>

        {/* PHASE 04: MECHANICAL / DETAIL REVEAL */}
        <div
          className={clsx(
            "absolute transition-all duration-700 ease-out flex flex-col items-center gap-4 max-w-2xl",
            isPhase4
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-8 scale-95"
          )}
        >
          <span className="font-mono text-xs tracking-[0.3em] text-champagne uppercase">
            Phase 04 // Internal Caliber
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl tracking-[0.1em] text-warm-white font-normal">
            THE ENGINE OF SECONDS
          </h2>
          <p className="font-sans text-stone text-xs sm:text-sm max-w-md leading-relaxed font-light">
            Split-second chronograph gearing, date wheel ring, and stepping motor exposed in zero-gravity suspension.
          </p>
          <div className="flex items-center gap-6 mt-2 font-mono text-[11px] tracking-widest text-champagne">
            <span>ACCURACY: ±15 SEC/MO</span>
            <span>•</span>
            <span>SUBDIALS: 1/10S, 60M, 24H</span>
          </div>
        </div>

        {/* PHASE 05: FINAL HERO STATE */}
        <div
          className={clsx(
            "absolute transition-all duration-700 ease-out flex flex-col items-center gap-6 max-w-2xl",
            isPhase5
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 -translate-y-8 scale-95 pointer-events-none"
          )}
        >
          <span className="font-mono text-xs tracking-[0.3em] text-champagne uppercase">
            Phase 05 // Complete Architecture
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl tracking-[0.1em] text-warm-white font-normal">
            WE SAIL.
          </h2>
          <p className="font-sans text-stone text-xs sm:text-sm max-w-md leading-relaxed font-light">
            A timepiece is not merely an instrument. It is a vessel of intention. Continue scrolling to encounter our curated catalog.
          </p>
          <Link
            href="#featured"
            className="flex items-center gap-3 px-8 py-3.5 bg-champagne text-obsidian font-mono text-xs tracking-[0.2em] font-medium hover:bg-warm-white transition-colors duration-300"
          >
            <span>MEET THE COLLECTION</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      {/* Bottom telemetry and scroll callout */}
      <div className="flex items-center justify-between font-mono text-[10px] md:text-xs text-stone tracking-[0.2em]">
        <div className="hidden sm:flex items-center gap-4">
          <span>MODEL: ORIENT 20BAR</span>
          <span className="opacity-30">|</span>
          <span>CALIBER: QUARTZ CHRONO</span>
        </div>
        
        {/* Scroll indicator */}
        <div className={clsx(
          "flex items-center gap-3 mx-auto sm:mx-0 transition-opacity duration-500",
          progress > 0.15 ? "opacity-30" : "opacity-100"
        )}>
          <span className="uppercase tracking-[0.25em]">SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 text-champagne animate-bounce" />
        </div>
      </div>

    </div>
  );
}
