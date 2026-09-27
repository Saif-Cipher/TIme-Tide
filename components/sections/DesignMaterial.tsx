"use client";

import { useState } from "react";
import Image from "next/image";
import { Sliders, Layers, Cpu, Eye, Sparkles } from "lucide-react";
import { SpringMouseFollow } from "@/components/ui/skiper-ui/skiper61";
import clsx from "clsx";

export function DesignMaterial() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: "design",
      icon: Eye,
      title: "DESIGN",
      tagline: "ARCHITECTURAL PROPORTION",
      desc: "Every dial is treated as a three-dimensional landscape. From radial sunburst brushing that reflects daylight dynamically to applied faceted indices and diamond-cut dauphine hands, proportion is calibrated for effortless legibility.",
      specs: ["Radial Sunburst Finishing", "Faceted Diamond-Cut Batons", "Sub-Dial Depth Staging"],
      image: "/images/craftsmanship/dial-detail.jpg",
      caption: "Macro inspection of teal sunburst dial and coin-edge bezel geometry."
    },
    {
      id: "material",
      icon: Layers,
      title: "MATERIAL",
      tagline: "316L SURGICAL STEEL & SAPPHIRE",
      desc: "We prioritize materials that resist everyday corrosion, humidity, and metropolitan wear. 316L surgical-grade stainless steel casings paired with anti-reflective coated sapphire and hardened mineral crystals preserve pristine transparency.",
      specs: ["316L Low-Carbon Surgical Steel", "Anti-Reflective Optical Crystal", "Ion-Plated Matte DLC Coatings"],
      image: "/images/craftsmanship/bezel-crystal.jpg",
      caption: "Precision-milled unidirectional bezel ring and beveled crystal seal."
    },
    {
      id: "movement",
      icon: Cpu,
      title: "MOVEMENT",
      tagline: "CALIBRATED ACCURACY",
      desc: "Horological reliability without unnecessary fragility. High-torque quartz stepping motors and multi-function calibers deliver split-second timing, multi-calendar synchronization, and exceptional battery longevity across all conditions.",
      specs: ["High-Torque Quartz Chronograph", "Split-Second Interval Measurement", "Extended 3-Year Power Reserve"],
      image: "/images/craftsmanship/movement-macro.jpg",
      caption: "Horological caliber mechanics, jewel bearings, and gear train assembly."
    },
    {
      id: "detail",
      icon: Sliders,
      title: "DETAIL",
      tagline: "THE UNSEEN REFINEMENT",
      desc: "True luxury lives in tactile feedback. Knurled crown surfaces designed for grip, firm 120-click bezel ratcheting, solid stainless steel links, and dual-pusher deployant clasps that close with reassuring weight.",
      specs: ["120-Click Unidirectional Action", "Dual-Pusher Security Clasps", "Hermetically Sealed Gaskets"],
      image: "/images/craftsmanship/gears-mechanism.jpg",
      caption: "Exploded module view exposing date wheel ring and interior casework."
    }
  ];

  const current = pillars[activeTab];

  return (
    <section id="craftsmanship" className="py-32 md:py-48 px-6 md:px-12 bg-obsidian/70 backdrop-blur-[2px] text-warm-white border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-12 border-b border-white/[0.06] mb-16 gap-6">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-champagne uppercase">
              SECTION 05 // HOROLOGICAL INTEGRITY
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wide uppercase font-normal mt-3">
              DESIGN & MATERIAL
            </h2>
          </div>
          <p className="font-sans text-stone text-sm max-w-sm font-light leading-relaxed">
            Every timepiece curated into Time and Tide is judged against rigorous material, finishing, and mechanical standards before being offered to our collectors.
          </p>
        </div>

        {/* 4-Pillar Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(idx)}
                className={clsx(
                  "p-6 border text-left transition-all duration-500 flex flex-col justify-between gap-4 group",
                  isSelected
                    ? "bg-carbon border-champagne text-warm-white"
                    : "bg-carbon/40 border-white/[0.06] text-stone hover:border-white/20 hover:text-warm-white"
                )}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-mono text-xs tracking-widest uppercase">0{idx + 1}</span>
                  <Icon className={clsx("w-4 h-4 transition-colors", isSelected ? "text-champagne" : "text-stone group-hover:text-warm-white")} />
                </div>
                <div>
                  <h3 className="font-mono text-sm tracking-[0.2em] font-medium uppercase">{item.title}</h3>
                  <p className="font-sans text-[11px] text-stone/80 tracking-wider truncate mt-0.5">{item.tagline}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-carbon/50 border border-white/[0.06] p-8 md:p-12 relative overflow-hidden">

          {/* Left Large Photography Display with Skiper61 Spring Follower (7 cols) */}
          <div className="lg:col-span-7">
            <SpringMouseFollow
              className="w-full h-[380px] sm:h-[480px] rounded-none bg-obsidian border-white/[0.06]"
              followerClassName="size-16 bg-champagne/20 border border-champagne/40 blur-[2px]"
            >
              <div className="relative w-full h-full overflow-hidden group">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 750px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80 pointer-events-none" />
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-obsidian/80 backdrop-blur-sm border border-white/10 font-mono text-[10px] text-champagne tracking-wider pointer-events-none">
                  <Sparkles className="w-3 h-3" />
                  <span>INTERACTIVE LENS</span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 font-mono text-[11px] tracking-wider text-soft-metal bg-obsidian/80 backdrop-blur-sm px-4 py-2 border border-white/10 pointer-events-none">
                  {current.caption}
                </div>
              </div>
            </SpringMouseFollow>
          </div>

          {/* Right Pillar Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs tracking-[0.25em] text-champagne uppercase">
                {current.tagline}
              </span>
              <h3 className="font-display text-3xl sm:text-4xl text-warm-white font-normal uppercase">
                THE {current.title} MANDATE
              </h3>
              <p className="font-sans text-stone text-sm leading-relaxed font-light mt-2">
                {current.desc}
              </p>
            </div>

            {/* Bullet Specifications */}
            <div className="flex flex-col gap-3 border-t border-white/[0.08] pt-6 font-mono text-xs">
              <span className="text-[10px] tracking-[0.2em] text-stone uppercase">VERIFIED STANDARDS</span>
              {current.specs.map((spec, i) => (
                <div key={i} className="flex items-center gap-3 text-warm-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne" />
                  <span className="tracking-wider">{spec}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
