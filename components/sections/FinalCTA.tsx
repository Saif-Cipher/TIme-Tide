"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-36 md:py-52 px-6 md:px-12 bg-obsidian/60 backdrop-blur-[2px] text-warm-white overflow-hidden border-t border-white/[0.06]">
      {/* Background Watch Atmosphere Composition */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="relative w-[800px] h-[800px] max-w-full">
          <Image
            src="/animation/ezgif-frame-001.jpg"
            alt="Time and Tide Horizon"
            fill
            sizes="800px"
            className="object-contain filter blur-[1px] brightness-75"
          />
        </div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-obsidian/60 to-obsidian" />
      </div>

      {/* Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-champagne/[0.04] rounded-full blur-[140px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1000px] mx-auto text-center flex flex-col items-center gap-8">
        
        {/* Telemetry pill */}
        <div className="flex items-center gap-3 px-4 py-1.5 border border-champagne/30 bg-carbon/60 font-mono text-[10px] tracking-[0.3em] text-champagne uppercase">
          <Compass className="w-3.5 h-3.5" />
          <span>TIME AND TIDE // BANGLADESH CURATION</span>
        </div>

        {/* Main CTA Headline */}
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.08em] uppercase font-normal leading-[1.05]">
          FIND YOUR TIME.<br />
          <span className="text-champagne font-light">WE SAIL.</span>
        </h2>

        {/* Narrative */}
        <p className="font-sans text-stone text-sm sm:text-base max-w-lg font-light leading-relaxed">
          The inaugural Time and Tide curation is now open for Bangladesh. Every timepiece is delivered in custom shock-resistant cases with our verified 6-month mechanical guarantee.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
          <Link
            href="#curated"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-warm-white text-obsidian font-mono text-xs tracking-[0.2em] font-medium hover:bg-champagne transition-colors duration-300"
          >
            <span>EXPLORE FULL CURATION</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#featured"
            className="w-full sm:w-auto flex items-center justify-center px-10 py-4 border border-white/20 text-warm-white font-mono text-xs tracking-[0.2em] hover:border-champagne hover:text-champagne transition-colors duration-300"
          >
            INSPECT SIGNATURE TIMEPIECE
          </Link>
        </div>

        {/* Footer Coordinate Badges */}
        <div className="flex items-center gap-6 mt-12 font-mono text-[10px] text-stone tracking-[0.25em] uppercase">
          <span>DHAKA</span>
          <span className="text-champagne">•</span>
          <span>CHITTAGONG</span>
          <span className="text-champagne">•</span>
          <span>SYLHET</span>
          <span className="text-champagne">•</span>
          <span>NATIONWIDE COD</span>
        </div>

      </div>
    </section>
  );
}
