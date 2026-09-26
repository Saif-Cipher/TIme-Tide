"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { demoProducts } from "@/data/demo-products";

export function WatchLifestyle() {
  const pSteel = demoProducts[0]; // Orient Diver
  const pLeather = demoProducts[2]; // Titan Sapphire

  return (
    <section id="lifestyle" className="py-32 md:py-48 px-6 md:px-12 bg-carbon text-warm-white border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-12 border-b border-white/[0.06] mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-champagne uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SECTION 06 // CONTEXT & WEAR</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wide uppercase font-normal">
              IN THE CURRENT OF LIFE
            </h2>
          </div>
          <p className="font-sans text-stone text-sm max-w-sm font-light leading-relaxed">
            A timepiece is not intended to sleep inside a velvet box. It accompanies morning executive meetings in Dhaka, coastal dusk in Chittagong, and quiet evening reflection.
          </p>
        </div>

        {/* Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Large Editorial Lifestyle Image (7 cols) */}
          <div className="lg:col-span-7 relative min-h-[500px] lg:min-h-[620px] bg-obsidian border border-white/[0.08] overflow-hidden group">
            <Image
              src="/images/editorial/lifestyle-wrist.jpg"
              alt="Time and Tide Lifestyle Editorial"
              fill
              sizes="(max-width: 1024px) 100vw, 750px"
              className="object-cover object-center transition-transform duration-1000 group-hover:scale-105 filter brightness-95"
            />
            {/* Vignette Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-90" />

            {/* Editorial Caption Box */}
            <div className="absolute bottom-8 left-8 right-8 z-10 flex flex-col gap-3 max-w-lg">
              <span className="font-mono text-[10px] tracking-[0.3em] text-champagne uppercase">
                EDITORIAL STUDY {"//"} 01
              </span>
              <p className="font-display text-2xl sm:text-3xl text-warm-white font-normal uppercase leading-tight">
                &ldquo;TIME IS THE ONLY LUXURY YOU CANNOT RENEGOTIATE.&rdquo;
              </p>
              <span className="font-sans text-xs text-stone tracking-wider font-light">
                Tailored charcoal wool, brushed stainless steel chronometer, ambient tungsten interior.
              </span>
            </div>
          </div>

          {/* Right Supporting Dual Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            
            {/* Card 1: Sartorial Composure */}
            <div className="bg-obsidian/70 border border-white/[0.06] hover:border-champagne/30 transition-all duration-500 p-8 flex flex-col justify-between flex-1">
              <div className="flex items-center justify-between font-mono text-xs tracking-widest text-stone uppercase">
                <span className="text-champagne">01 // SARTORIAL DRESS</span>
                <span>CALFSKIN LEATHER</span>
              </div>
              <div className="flex items-center gap-6 my-6">
                <div className="relative w-24 h-28 shrink-0">
                  <Image
                    src={pLeather.heroImage}
                    alt={pLeather.name}
                    fill
                    className="object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-display text-xl text-warm-white font-normal">
                    {pLeather.brand} {pLeather.name}
                  </h4>
                  <p className="font-sans text-xs text-stone font-light leading-relaxed">
                    Understated 38.5mm profile slipping effortlessly beneath formal cuffs without catching fabric.
                  </p>
                  <span className="font-mono text-sm text-champagne mt-1">৳ {pLeather.price.toLocaleString()}</span>
                </div>
              </div>
              <Link
                href={`#${pLeather.slug}`}
                className="flex items-center gap-2 text-xs font-mono text-stone hover:text-champagne tracking-widest uppercase transition-colors pt-2 border-t border-white/[0.04]"
              >
                <span>VIEW SPECIFICATIONS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Card 2: Metropolitan Endurance */}
            <div className="bg-obsidian/70 border border-white/[0.06] hover:border-champagne/30 transition-all duration-500 p-8 flex flex-col justify-between flex-1">
              <div className="flex items-center justify-between font-mono text-xs tracking-widest text-stone uppercase">
                <span className="text-champagne">02 // COASTAL ENDURANCE</span>
                <span>SURGICAL STEEL</span>
              </div>
              <div className="flex items-center gap-6 my-6">
                <div className="relative w-24 h-28 shrink-0">
                  <Image
                    src={pSteel.heroImage}
                    alt={pSteel.name}
                    fill
                    className="object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h4 className="font-display text-xl text-warm-white font-normal">
                    {pSteel.brand} {pSteel.name}
                  </h4>
                  <p className="font-sans text-xs text-stone font-light leading-relaxed">
                    200-meter diver certification with hermetic screw-down seal, impervious to monsoon rain and active water.
                  </p>
                  <span className="font-mono text-sm text-champagne mt-1">৳ {pSteel.price.toLocaleString()}</span>
                </div>
              </div>
              <Link
                href={`#${pSteel.slug}`}
                className="flex items-center gap-2 text-xs font-mono text-stone hover:text-champagne tracking-widest uppercase transition-colors pt-2 border-t border-white/[0.04]"
              >
                <span>VIEW SPECIFICATIONS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
