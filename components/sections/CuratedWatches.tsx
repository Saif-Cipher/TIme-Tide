"use client";

import { useState } from "react";
import Link from "next/link";
import { demoProducts } from "@/data/demo-products";
import { Sparkles, ArrowRight, ShieldCheck, Compass, Clock, SlidersHorizontal } from "lucide-react";
import { HoverExpand_001 } from "@/components/ui/skiper-ui/skiper52";
import clsx from "clsx";

const CATEGORIES = [
  { id: "all", label: "ALL CURATED", count: 6 },
  { id: "chrono", label: "CHRONOGRAPHS", filter: "Chronograph" },
  { id: "dress", label: "HERITAGE DRESS", filter: "Classic" },
  { id: "statement", label: "STATEMENT & TWO-TONE", filter: "Statement" },
];

export function CuratedWatches() {
  const [activeCategory, setActiveCategory] = useState("all");

  const getFilteredProducts = () => {
    if (activeCategory === "all") {
      // 6 signature flagship models for the horizontal expandable strip
      return [
        demoProducts[0], // Orient Mako Diver Chrono
        demoProducts[1], // Regent Emerald Sunburst Chrono
        demoProducts[2], // Titan Sapphire Grand Class
        demoProducts[3], // Regent Stealth Rose
        demoProducts[4], // Titan Bronze Sunburst
        demoProducts[6], // Richmond Emerald Jubilee
      ];
    }
    if (activeCategory === "chrono") {
      return demoProducts.filter(p => p.collection === "Chronograph").slice(0, 5);
    }
    if (activeCategory === "dress") {
      return demoProducts.filter(p => p.collection === "Classic" || p.category.includes("Dress")).slice(0, 5);
    }
    if (activeCategory === "statement") {
      return demoProducts.filter(p => p.collection === "Statement" || p.category.includes("Two-Tone")).slice(0, 5);
    }
    return demoProducts.slice(0, 6);
  };

  const filtered = getFilteredProducts();

  return (
    <section id="curated" className="py-32 md:py-44 px-6 md:px-12 bg-obsidian/70 backdrop-blur-[2px] text-warm-white border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8 pb-10 border-b border-white/[0.06]">
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
            Every piece curated into Time and Tide represents a verified union of Japanese/Swiss caliber reliability, architectural casework, and hand-finished dials. Hover over any piece to inspect its specifications.
          </p>
        </div>

        {/* Category Selector Tabs & Counter */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={clsx(
                    "px-4 py-2 font-mono text-xs tracking-widest uppercase transition-all duration-300 border flex items-center gap-2",
                    isSelected
                      ? "bg-champagne text-obsidian border-champagne font-medium shadow-md shadow-champagne/10"
                      : "bg-carbon/40 text-stone border-white/[0.08] hover:border-white/20 hover:text-warm-white"
                  )}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-stone tracking-wider">
            <SlidersHorizontal className="w-3.5 h-3.5 text-champagne" />
            <span className="text-warm-white">{filtered.length} MODELS</span>
            <span className="text-stone/60">// INTERACTIVE HOVER EXPAND</span>
          </div>
        </div>

        {/* Skiper52 Expandable Horizontal Showcase */}
        <div className="w-full my-6">
          <HoverExpand_001
            key={activeCategory}
            products={filtered}
            defaultActiveIndex={0}
          />
        </div>

        {/* Curation Guarantees & Bottom Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 mt-12 border-t border-white/[0.06] font-mono text-xs text-stone">
          <div className="flex items-start gap-4 p-4 bg-carbon/20 border border-white/[0.04]">
            <ShieldCheck className="w-5 h-5 text-champagne shrink-0 mt-0.5" />
            <div>
              <span className="text-warm-white tracking-wider uppercase block text-xs font-medium mb-1">
                AUTHENTICITY VERIFIED
              </span>
              <p className="text-[11px] text-stone/80 font-sans font-light leading-relaxed">
                100% genuine movements and factory seals inspected before dispatch in Dhaka.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-carbon/20 border border-white/[0.04]">
            <Compass className="w-5 h-5 text-champagne shrink-0 mt-0.5" />
            <div>
              <span className="text-warm-white tracking-wider uppercase block text-xs font-medium mb-1">
                BANGLADESH-WIDE DELIVERY
              </span>
              <p className="text-[11px] text-stone/80 font-sans font-light leading-relaxed">
                Secure insured transit across all 64 districts with Cash on Delivery available.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-carbon/20 border border-white/[0.04]">
            <Clock className="w-5 h-5 text-champagne shrink-0 mt-0.5" />
            <div>
              <span className="text-warm-white tracking-wider uppercase block text-xs font-medium mb-1">
                6-MONTH CALIBER WARRANTY
              </span>
              <p className="text-[11px] text-stone/80 font-sans font-light leading-relaxed">
                Full movement calibration support and service guarantee by our watch technicians.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
