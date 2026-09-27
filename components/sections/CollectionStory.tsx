"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { demoProducts } from "@/data/demo-products";
import { ArrowRight, Compass, ShieldCheck } from "lucide-react";
import clsx from "clsx";

export function CollectionStory() {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      title: "CHRONOGRAPHY",
      subtitle: "Split-Second Instruments",
      description: "Rooted in nautical navigation and automotive endurance. Multi-compax registers and high-torque movements engineered to track elapsed intervals with mathematical precision.",
      product: demoProducts[0], // Orient Chrono
      bgDetail: "/images/craftsmanship/dial-detail.jpg",
      tagline: "200M ISO / DIVER BEZEL",
      accent: "TEAL & BRUSHED STEEL"
    },
    {
      title: "STEALTH MONOCHROME",
      subtitle: "The Dark Spectrum",
      description: "Low-light reflection and understated presence. Matte black ion-plated casings paired with warm rose-gold batons that only catch intentional illumination.",
      product: demoProducts[3], // Regent Stealth Rose
      bgDetail: "/images/editorial/lifestyle-wrist.jpg",
      tagline: "MATTE DLC / ROSE GOLD",
      accent: "OBSIDIAN & WARM GOLD"
    },
    {
      title: "HERITAGE SAPPHIRE",
      subtitle: "Enduring Horological Craft",
      description: "Created for executive composure. Guilloché dials, unyielding scratch-resistant sapphire crystals, and hand-selected full-grain leather straps that age with distinct character.",
      product: demoProducts[2], // Titan Sapphire Grand Class
      bgDetail: "/images/craftsmanship/movement-macro.jpg",
      tagline: "SAPPHIRE GLASS / DUAL TIME",
      accent: "NAVY GUILLOCHÉ"
    }
  ];

  const current = stories[activeStory];

  return (
    <section id="collections" className="relative py-32 md:py-48 bg-carbon/65 backdrop-blur-[2px] text-warm-white overflow-hidden border-t border-white/[0.06]">
      {/* Background ambient light */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-champagne/[0.03] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-12 border-b border-white/[0.06] mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-champagne uppercase mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>SECTION 04 // THE PILLARS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wide uppercase font-normal">
              COLLECTION STORIES
            </h2>
          </div>
          <p className="font-sans text-stone text-sm max-w-sm font-light leading-relaxed">
            Move through our three design pillars. Each represents an intentional horological perspective curated specifically for the contemporary Bangladeshi wardrobe.
          </p>
        </div>

        {/* Chapter Selection Tabs */}
        <div className="flex flex-wrap gap-4 sm:gap-8 pb-8 font-mono text-xs tracking-[0.2em] border-b border-white/[0.06]">
          {stories.map((story, idx) => (
            <button
              key={story.title}
              onClick={() => setActiveStory(idx)}
              className={clsx(
                "pb-3 uppercase transition-all duration-300 relative text-left",
                activeStory === idx
                  ? "text-warm-white font-medium"
                  : "text-stone hover:text-warm-white/70"
              )}
            >
              <span>0{idx + 1} / {story.title}</span>
              {activeStory === idx && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-champagne" />
              )}
            </button>
          ))}
        </div>

        {/* Main Layered Showcase */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Layered Visual Composition (7 cols) */}
          <div className="lg:col-span-7 relative h-[450px] sm:h-[550px] w-full flex items-center justify-center">
            
            {/* Background Editorial Texture Frame (Layer 1) */}
            <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-4/5 h-4/5 bg-obsidian border border-white/[0.08] overflow-hidden opacity-40 shadow-2xl">
              <Image
                src={current.bgDetail}
                alt="Craftsmanship detail"
                fill
                className="object-cover filter grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/50 to-transparent" />
            </div>

            {/* Front Floating Watch Cutout (Layer 2) */}
            <div className="relative z-10 w-full h-full max-h-[85%] flex items-center justify-center transform hover:scale-105 transition-transform duration-700">
              <Image
                src={current.product.heroImage}
                alt={current.product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-contain filter drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)]"
              />
            </div>

            {/* Floating Telemetry Badge (Layer 3) */}
            <div className="absolute bottom-6 left-6 z-20 bg-obsidian/90 backdrop-blur-md border border-white/10 px-5 py-3 font-mono text-[10px] tracking-widest text-champagne uppercase">
              {current.tagline}
            </div>

          </div>

          {/* Right Narrative & Product Specs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs tracking-[0.25em] text-champagne uppercase">
                {current.subtitle}
              </span>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-warm-white font-normal uppercase leading-[1.1]">
                {current.title}
              </h3>
              <p className="font-sans text-stone text-sm leading-relaxed font-light mt-2 max-w-md">
                {current.description}
              </p>
            </div>

            {/* Featured Product within this story */}
            <div className="bg-obsidian/80 border border-white/[0.08] p-6 flex flex-col gap-4 font-mono">
              <div className="flex items-center justify-between text-xs tracking-wider text-stone">
                <span className="uppercase">{current.product.brand}</span>
                <span className="text-champagne">{current.accent}</span>
              </div>
              
              <div className="flex items-baseline justify-between">
                <h4 className="font-display text-xl text-warm-white font-normal">
                  {current.product.name}
                </h4>
                <span className="text-base text-warm-white">
                  ৳ {current.product.price.toLocaleString()}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px] text-stone tracking-wider border-t border-white/[0.06] pt-3">
                {Object.entries(current.product.specs).slice(0, 4).map(([key, val]) => (
                  <div key={key}>
                    <span className="opacity-50">{key}: </span>
                    <span className="text-warm-white">{val}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[11px] text-soft-metal">
                  <ShieldCheck className="w-3.5 h-3.5 text-champagne" />
                  <span>Time and Tide Verified</span>
                </div>
                <Link
                  href={`#${current.product.slug}`}
                  className="flex items-center gap-2 text-xs text-champagne hover:text-warm-white transition-colors tracking-widest uppercase"
                >
                  <span>ACQUIRE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
