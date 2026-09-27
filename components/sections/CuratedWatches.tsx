"use client";

import Image from "next/image";
import Link from "next/link";
import { demoProducts } from "@/data/demo-products";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function CuratedWatches() {
  const p1 = demoProducts[1]; // Regent Emerald Chrono (Large)
  const p2 = demoProducts[2]; // Titan Sapphire (Stack 1)
  const p3 = demoProducts[3]; // Regent Stealth Rose (Stack 2)
  const p4 = demoProducts[4]; // Titan Bronze (Medium 4-col)
  const p5 = demoProducts[5]; // Richmond Two-Tone (Wide 8-col)
  const p6 = demoProducts[6]; // Richmond Emerald Jubilee (6-col)
  const p7 = demoProducts[7]; // Cairnhill Silver (6-col)

  return (
    <section id="curated" className="py-32 md:py-44 px-6 md:px-12 bg-obsidian/70 backdrop-blur-[2px] text-warm-white border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8 pb-10 border-b border-white/[0.06]">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-champagne uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SECTION 03 // THE EDIT</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-[0.08em] font-normal uppercase leading-[1.08]">
              CURATED WATCHES
            </h2>
          </div>
          <p className="font-sans text-stone text-sm max-w-md font-light leading-relaxed">
            Time and Tide curates individual models selected from across independent and renowned makers. Each timepiece is inspected for case finish, dial equilibrium, and reliable timekeeping.
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
          
          {/* Item 1: Large Featured Watch (7 cols) */}
          <Link
            href={`#${p1.slug}`}
            className="lg:col-span-7 group bg-carbon/70 border border-white/[0.06] hover:border-champagne/40 transition-all duration-700 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="flex items-center justify-between font-mono text-xs tracking-[0.25em] text-stone uppercase z-10">
              <div className="flex items-center gap-3">
                <span className="text-champagne font-medium">{p1.brand}</span>
                <span className="opacity-40">/</span>
                <span>{p1.category}</span>
              </div>
              <span className="px-2 py-0.5 border border-champagne/30 text-champagne text-[10px]">
                {p1.tag}
              </span>
            </div>

            <div className="relative aspect-[16/10] my-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-radial-gradient from-white/[0.03] to-transparent rounded-full blur-3xl pointer-events-none group-hover:from-champagne/[0.07] transition-all duration-700" />
              <div className="relative w-full h-full max-h-[92%] flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                <Image
                  src={p1.heroImage}
                  alt={p1.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-white/[0.06] pt-6 z-10">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl sm:text-3xl text-warm-white group-hover:text-champagne transition-colors font-normal">
                  {p1.name}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-stone group-hover:text-champagne transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <p className="font-sans text-xs text-stone leading-relaxed font-light max-w-lg">
                {p1.shortDescription}
              </p>
              <div className="flex items-center justify-between font-mono pt-2">
                <span className="text-xl text-warm-white font-medium">
                  ৳ {p1.price.toLocaleString()}
                </span>
                <span className="text-xs tracking-[0.2em] text-champagne uppercase">
                  EXPLORE DETAILS →
                </span>
              </div>
            </div>
          </Link>

          {/* Items 2 & 3: Two Stacked Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8 md:gap-10">
            
            {/* Stack 1: Titan Sapphire */}
            <Link
              href={`#${p2.slug}`}
              className="group bg-carbon/50 border border-white/[0.06] hover:border-champagne/40 transition-all duration-500 p-6 sm:p-8 flex flex-col justify-between flex-1 relative overflow-hidden"
            >
              <div className="flex items-center justify-between font-mono text-xs tracking-widest text-stone uppercase">
                <span className="text-stone group-hover:text-warm-white transition-colors">{p2.brand}</span>
                <span className="text-[10px] text-champagne">{p2.tag}</span>
              </div>
              <div className="relative aspect-[16/9] my-4 flex items-center justify-center">
                <div className="relative w-full h-full max-h-[85%] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={p2.heroImage}
                    alt={p2.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-white/[0.06] pt-4 font-mono">
                <div>
                  <h4 className="font-display text-lg text-warm-white group-hover:text-champagne transition-colors font-normal">
                    {p2.name}
                  </h4>
                  <span className="text-xs text-stone tracking-wider">৳ {p2.price.toLocaleString()}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-stone group-hover:text-champagne" />
              </div>
            </Link>

            {/* Stack 2: Regent Stealth Rose */}
            <Link
              href={`#${p3.slug}`}
              className="group bg-carbon/50 border border-white/[0.06] hover:border-champagne/40 transition-all duration-500 p-6 sm:p-8 flex flex-col justify-between flex-1 relative overflow-hidden"
            >
              <div className="flex items-center justify-between font-mono text-xs tracking-widest text-stone uppercase">
                <span className="text-stone group-hover:text-warm-white transition-colors">{p3.brand}</span>
                <span className="text-[10px] text-champagne">{p3.tag}</span>
              </div>
              <div className="relative aspect-[16/9] my-4 flex items-center justify-center">
                <div className="relative w-full h-full max-h-[85%] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={p3.heroImage}
                    alt={p3.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-white/[0.06] pt-4 font-mono">
                <div>
                  <h4 className="font-display text-lg text-warm-white group-hover:text-champagne transition-colors font-normal">
                    {p3.name}
                  </h4>
                  <span className="text-xs text-stone tracking-wider">৳ {p3.price.toLocaleString()}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-stone group-hover:text-champagne" />
              </div>
            </Link>

          </div>

          {/* Item 4: Medium Product Card (4 cols) */}
          <Link
            href={`#${p4.slug}`}
            className="lg:col-span-4 group bg-carbon/50 border border-white/[0.06] hover:border-champagne/40 transition-all duration-500 p-8 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="flex items-center justify-between font-mono text-xs tracking-widest text-stone uppercase">
              <span>{p4.brand}</span>
              <span>{p4.collection}</span>
            </div>
            <div className="relative aspect-square my-6 flex items-center justify-center">
              <div className="relative w-full h-full max-h-[85%] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={p4.heroImage}
                  alt={p4.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 350px"
                  className="object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.65)]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 border-t border-white/[0.06] pt-4">
              <h4 className="font-display text-xl text-warm-white group-hover:text-champagne transition-colors font-normal">
                {p4.name}
              </h4>
              <div className="flex items-center justify-between font-mono">
                <span className="text-sm text-warm-white font-medium">৳ {p4.price.toLocaleString()}</span>
                <span className="text-[10px] tracking-widest text-stone uppercase">In Stock</span>
              </div>
            </div>
          </Link>

          {/* Item 5: Wide Feature Card (8 cols) */}
          <Link
            href={`#${p5.slug}`}
            className="lg:col-span-8 group bg-carbon/60 border border-white/[0.06] hover:border-champagne/40 transition-all duration-700 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden"
          >
            {/* Left Watch Image */}
            <div className="relative w-full md:w-1/2 aspect-[4/3] flex items-center justify-center">
              <div className="relative w-full h-full max-h-[90%] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={p5.heroImage}
                  alt={p5.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.65)]"
                />
              </div>
            </div>

            {/* Right Information */}
            <div className="w-full md:w-1/2 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-xs tracking-[0.25em] text-champagne uppercase">
                  {p5.brand} {"//"} TWO-TONE SERIES
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-warm-white font-normal group-hover:text-champagne transition-colors">
                  {p5.name}
                </h3>
                <p className="font-sans text-xs text-stone leading-relaxed font-light mt-1">
                  {p5.shortDescription}
                </p>
              </div>

              {/* Numbered mini specs */}
              <div className="grid grid-cols-2 gap-3 font-mono text-[10px] tracking-wider text-soft-metal border-y border-white/[0.06] py-3">
                <div>
                  <span className="text-stone">CASE: </span>40 MM TWO-TONE
                </div>
                <div>
                  <span className="text-stone">STRAP: </span>ENGINEER STEEL
                </div>
              </div>

              <div className="flex items-center justify-between font-mono pt-1">
                <span className="text-lg text-warm-white font-medium">
                  ৳ {p5.price.toLocaleString()}
                </span>
                <div className="flex items-center gap-2 text-xs tracking-widest text-champagne">
                  <span>DISCOVER</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>

          {/* Row 3: Pair of Editorial Cards (6 cols + 6 cols) */}
          <Link
            href={`#${p6.slug}`}
            className="lg:col-span-6 group bg-carbon/50 border border-white/[0.06] hover:border-champagne/40 transition-all duration-500 p-8 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden"
          >
            <div className="relative w-full sm:w-1/2 aspect-square flex items-center justify-center">
              <div className="relative w-full h-full max-h-[85%] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={p6.heroImage}
                  alt={p6.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 300px"
                  className="object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2 flex flex-col gap-3">
              <span className="font-mono text-[10px] tracking-[0.25em] text-champagne uppercase">{p6.brand}</span>
              <h4 className="font-display text-xl text-warm-white group-hover:text-champagne transition-colors font-normal">
                {p6.name}
              </h4>
              <p className="font-sans text-xs text-stone font-light">
                {p6.shortDescription}
              </p>
              <div className="flex items-baseline gap-3 font-mono mt-2">
                <span className="text-base text-warm-white font-medium">৳ {p6.price.toLocaleString()}</span>
                <span className="text-[10px] text-stone tracking-widest uppercase">Jubilee 5-Link</span>
              </div>
            </div>
          </Link>

          <Link
            href={`#${p7.slug}`}
            className="lg:col-span-6 group bg-carbon/50 border border-white/[0.06] hover:border-champagne/40 transition-all duration-500 p-8 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden"
          >
            <div className="relative w-full sm:w-1/2 aspect-square flex items-center justify-center">
              <div className="relative w-full h-full max-h-[85%] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={p7.heroImage}
                  alt={p7.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 300px"
                  className="object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
                />
              </div>
            </div>
            <div className="w-full sm:w-1/2 flex flex-col gap-3">
              <span className="font-mono text-[10px] tracking-[0.25em] text-champagne uppercase">{p7.brand}</span>
              <h4 className="font-display text-xl text-warm-white group-hover:text-champagne transition-colors font-normal">
                {p7.name}
              </h4>
              <p className="font-sans text-xs text-stone font-light">
                {p7.shortDescription}
              </p>
              <div className="flex items-baseline gap-3 font-mono mt-2">
                <span className="text-base text-warm-white font-medium">৳ {p7.price.toLocaleString()}</span>
                <span className="text-[10px] text-stone tracking-widest uppercase">Alligator Leather</span>
              </div>
            </div>
          </Link>

        </div>

      </div>
    </section>
  );
}
