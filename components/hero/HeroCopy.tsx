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
  // Phase 2: 0.22 - 0.42 (Precision Geometry / Steel)
  const isPhase2 = progress >= 0.22 && progress < 0.42;
  // Phase 3: 0.44 - 0.64 (Horological Anatomy / Crystal & Bezel Lift)
  const isPhase3 = progress >= 0.44 && progress < 0.64;
  // Phase 4: 0.66 - 0.84 (Mechanical Caliber / Detail Reveal)
  const isPhase4 = progress >= 0.66 && progress < 0.84;
  // Phase 5: 0.86 - 1.00 (Final Hero State)
  const isPhase5 = progress >= 0.86 && progress <= 1.0;

  return (
    <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-between p-6 sm:p-10 lg:p-16">
      {/* Top telemetry and phase indicator */}
      <div className="flex items-center justify-between font-mono text-[10px] md:text-xs tracking-[0.25em] text-stone uppercase pt-16 md:pt-12">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
          <span>SERIES 01 // BANGLADESH CURATION</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-warm-white font-medium">
            {progress < 0.2 ? "01" : progress < 0.44 ? "02" : progress < 0.66 ? "03" : progress < 0.86 ? "04" : "05"}
          </span>
          <span className="opacity-40">/ 05</span>
        </div>
      </div>

      {/* Main Content Stage: Left column on desktop, upper safe-zone on mobile */}
      <div className="relative flex-1 flex flex-col justify-start lg:justify-center items-center lg:items-start pt-6 sm:pt-8 lg:pt-0">
        
        {/* PHASE 01: WATCH INTRODUCTION */}
        <div
          className={clsx(
            "absolute transition-all duration-700 ease-out flex flex-col max-w-md sm:max-w-lg lg:max-w-xl",
            "items-center text-center lg:items-start lg:text-left",
            isPhase1
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 -translate-y-8 scale-95 pointer-events-none"
          )}
        >
          <span className="font-mono text-[11px] sm:text-xs tracking-[0.3em] text-champagne uppercase">
            Curated Timepieces
          </span>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-[0.14em] text-warm-white font-normal uppercase leading-[1.08] mt-3 sm:mt-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            TIME<br className="hidden sm:inline" /> SHOULD BE<br />WORN.
          </h1>
          <p className="font-sans text-stone text-xs sm:text-sm lg:text-base max-w-sm sm:max-w-md tracking-wide font-light leading-relaxed mt-3 sm:mt-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
            Curated watches for modern life. Affordable-premium horology selected for restraint, proportion, and quiet endurance.
          </p>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4 mt-8">
            <Link
              href="#featured"
              className="px-8 py-3.5 bg-warm-white text-obsidian font-mono text-xs tracking-[0.2em] font-medium hover:bg-champagne transition-colors duration-300 shadow-xl"
            >
              EXPLORE COLLECTION
            </Link>
            <Link
              href="#signature"
              className="px-8 py-3.5 border border-white/20 text-warm-white font-mono text-xs tracking-[0.2em] hover:border-champagne hover:text-champagne transition-colors duration-300 backdrop-blur-sm"
            >
              DISCOVER A WATCH
            </Link>
          </div>
        </div>

        {/* PHASE 02: DYNAMIC PERSPECTIVE */}
        <div
          className={clsx(
            "absolute transition-all duration-700 ease-out flex flex-col max-w-md sm:max-w-lg lg:max-w-xl",
            "items-center text-center lg:items-start lg:text-left",
            isPhase2
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 -translate-y-8 scale-95 pointer-events-none"
          )}
        >
          <span className="font-mono text-[11px] sm:text-xs tracking-[0.3em] text-champagne uppercase">
            Phase 02 // Precision Geometry
          </span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl tracking-[0.12em] text-warm-white font-normal uppercase leading-tight mt-3 sm:mt-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            SCULPTED IN STEEL
          </h2>
          <p className="font-sans text-stone text-xs sm:text-sm lg:text-base max-w-sm sm:max-w-md leading-relaxed font-light mt-3 sm:mt-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
            Surgical-grade 316L stainless steel casework. High-polish beveled edges meeting brushed satin surfaces designed to command light.
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 mt-5 font-mono text-[10px] sm:text-xs tracking-widest text-soft-metal">
            <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-sm">CASE: 43.5 MM</span>
            <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-sm">316L BRUSHED</span>
            <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-sm">200M WATER</span>
          </div>
        </div>

        {/* PHASE 03: HOROLOGICAL ANATOMY */}
        <div
          className={clsx(
            "absolute transition-all duration-700 ease-out flex flex-col max-w-md sm:max-w-lg lg:max-w-xl",
            "items-center text-center lg:items-start lg:text-left",
            isPhase3
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 -translate-y-8 scale-95 pointer-events-none"
          )}
        >
          <span className="font-mono text-[11px] sm:text-xs tracking-[0.3em] text-champagne uppercase">
            Phase 03 // Horological Anatomy
          </span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl tracking-[0.12em] text-warm-white font-normal uppercase leading-tight mt-3 sm:mt-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            TIME, UNSEALED
          </h2>
          <p className="font-sans text-stone text-xs sm:text-sm lg:text-base max-w-sm sm:max-w-md leading-relaxed font-light mt-3 sm:mt-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
            The knurled bezel lifts in zero gravity. Anti-reflective sapphire crystal separates to reveal the multi-tiered dial architecture beneath.
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 mt-5 font-mono text-[10px] sm:text-xs tracking-widest text-champagne/90">
            <span className="px-3 py-1.5 bg-champagne/10 border border-champagne/20 rounded-sm">SAPPHIRE AR CRYSTAL</span>
            <span className="px-3 py-1.5 bg-champagne/10 border border-champagne/20 rounded-sm">120-CLICK BEZEL</span>
          </div>
        </div>

        {/* PHASE 04: INTERNAL CALIBER */}
        <div
          className={clsx(
            "absolute transition-all duration-700 ease-out flex flex-col max-w-md sm:max-w-lg lg:max-w-xl",
            "items-center text-center lg:items-start lg:text-left",
            isPhase4
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 -translate-y-8 scale-95 pointer-events-none"
          )}
        >
          <span className="font-mono text-[11px] sm:text-xs tracking-[0.3em] text-champagne uppercase">
            Phase 04 // Internal Caliber
          </span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl tracking-[0.12em] text-warm-white font-normal uppercase leading-tight mt-3 sm:mt-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            THE ENGINE OF SECONDS
          </h2>
          <p className="font-sans text-stone text-xs sm:text-sm lg:text-base max-w-sm sm:max-w-md leading-relaxed font-light mt-3 sm:mt-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
            Split-second chronograph gearing, date wheel ring, and stepping motor exposed in radial symmetry.
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 mt-5 font-mono text-[10px] sm:text-xs tracking-widest text-champagne">
            <span className="px-3 py-1.5 bg-champagne/10 border border-champagne/20 rounded-sm">QUARTZ CHRONO CALIBER</span>
            <span className="px-3 py-1.5 bg-champagne/10 border border-champagne/20 rounded-sm">±15 SEC/MO ACCURACY</span>
          </div>
        </div>

        {/* PHASE 05: FINAL HERO STATE */}
        <div
          className={clsx(
            "absolute transition-all duration-700 ease-out flex flex-col max-w-md sm:max-w-lg lg:max-w-xl",
            "items-center text-center lg:items-start lg:text-left",
            isPhase5
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 -translate-y-8 scale-95 pointer-events-none"
          )}
        >
          <span className="font-mono text-[11px] sm:text-xs tracking-[0.3em] text-champagne uppercase">
            Phase 05 // Complete Architecture
          </span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl tracking-[0.12em] text-warm-white font-normal uppercase leading-tight mt-3 sm:mt-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            WE SAIL.
          </h2>
          <p className="font-sans text-stone text-xs sm:text-sm lg:text-base max-w-sm sm:max-w-md leading-relaxed font-light mt-3 sm:mt-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
            A timepiece is not merely an instrument. It is a vessel of intention. Continue scrolling to encounter our curated catalog.
          </p>
          <div className="hidden lg:block mt-8">
            <Link
              href="#featured"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-champagne text-obsidian font-mono text-xs tracking-[0.2em] font-medium hover:bg-warm-white transition-colors duration-300 shadow-xl"
            >
              <span>MEET THE COLLECTION</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Area: Telemetry, Mobile CTA, and Scroll Prompts */}
      <div className="flex flex-col gap-4">
        {/* Mobile Action Buttons (Phase 1 & Phase 5) */}
        <div className="lg:hidden pointer-events-auto flex flex-col items-center gap-2.5">
          {isPhase1 && (
            <Link
              href="#featured"
              className="w-full max-w-xs py-3 bg-warm-white text-obsidian font-mono text-xs tracking-[0.2em] font-medium text-center shadow-lg transition-transform active:scale-95"
            >
              EXPLORE COLLECTION
            </Link>
          )}
          {isPhase5 && (
            <Link
              href="#featured"
              className="w-full max-w-xs py-3 bg-champagne text-obsidian font-mono text-xs tracking-[0.2em] font-medium text-center shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2"
            >
              <span>MEET THE COLLECTION</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Telemetry metadata & scroll prompt */}
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

    </div>
  );
}
