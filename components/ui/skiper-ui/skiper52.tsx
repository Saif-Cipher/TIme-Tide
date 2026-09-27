"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Product } from "@/data/demo-products";

interface WatchItem {
  id: string;
  brand: string;
  name: string;
  slug: string;
  price: number;
  category: string;
  tag?: string;
  heroImage?: string;
  image?: string;
  specs?: Record<string, string>;
  shortDescription?: string;
}

interface HoverExpandProps {
  products: (Product | WatchItem)[];
  className?: string;
  defaultActiveIndex?: number;
}

function getItemImage(item: Product | WatchItem): string {
  if ("heroImage" in item && item.heroImage) return item.heroImage;
  if ("image" in item && item.image) return item.image;
  return "/images/products/orient-diver-chrono.png";
}

export const HoverExpand_001 = ({
  products,
  className,
  defaultActiveIndex = 0,
}: HoverExpandProps) => {
  const [activeIdx, setActiveIdx] = useState<number | null>(defaultActiveIndex);

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* Desktop / Tablet Expandable Strip */}
      <div className="hidden md:flex w-full items-stretch justify-center gap-2 lg:gap-3 py-6 min-h-[520px] lg:min-h-[560px]">
        {products.map((item, index) => {
          const isActive = activeIdx === index;

          return (
            <motion.div
              key={item.id || index}
              layout
              className={cn(
                "relative cursor-pointer overflow-hidden rounded-2xl border transition-colors duration-500 flex flex-col justify-between",
                isActive
                  ? "bg-carbon/90 border-champagne/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)] shadow-champagne/5"
                  : "bg-carbon/40 border-white/[0.08] hover:border-white/20 hover:bg-carbon/60"
              )}
              initial={false}
              animate={{
                flex: isActive ? 4.5 : 1,
                minWidth: isActive ? "320px" : "80px",
              }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => setActiveIdx(index)}
              onHoverStart={() => setActiveIdx(index)}
            >
              {/* Background ambient glow for active card */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-b from-champagne/[0.06] via-transparent to-obsidian pointer-events-none"
                  />
                )}
              </AnimatePresence>

              {/* Inactive Vertical State Display */}
              {!isActive && (
                <div className="absolute inset-0 flex flex-col items-center justify-between py-8 px-2 select-none z-10">
                  <span className="font-mono text-xs tracking-widest text-stone/80">
                    0{index + 1}
                  </span>

                  <div className="relative w-14 h-32 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                    <Image
                      src={getItemImage(item)}
                      alt={item.name}
                      fill
                      sizes="80px"
                      className="object-contain filter grayscale contrast-125 brightness-75"
                    />
                  </div>

                  <div className="[writing-mode:vertical-rl] rotate-180 flex items-center gap-2">
                    <span className="font-mono text-[11px] tracking-[0.25em] text-stone uppercase whitespace-nowrap">
                      {item.brand}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-champagne/60" />
                    <span className="font-mono text-[10px] tracking-wider text-stone/60 uppercase whitespace-nowrap">
                      ৳ {item.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              )}

              {/* Active Expanded State Display */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="relative z-10 flex flex-col justify-between h-full p-6 lg:p-8"
                  >
                    {/* Top Metadata & Tag */}
                    <div className="flex items-center justify-between font-mono text-xs tracking-widest">
                      <div className="flex items-center gap-2 text-stone">
                        <span className="text-champagne font-medium uppercase">
                          {item.brand}
                        </span>
                        <span className="opacity-40">/</span>
                        <span className="text-[11px] uppercase">{item.category}</span>
                      </div>
                      {item.tag ? (
                        <span className="px-2 py-0.5 border border-champagne/40 bg-champagne/10 text-champagne text-[10px] tracking-wider uppercase">
                          {item.tag}
                        </span>
                      ) : (
                        <span className="font-mono text-[11px] text-stone">
                          0{index + 1} // 0{products.length}
                        </span>
                      )}
                    </div>

                    {/* Center Product Image with Subtle Scale */}
                    <div className="relative aspect-square max-h-[260px] lg:max-h-[290px] my-auto flex items-center justify-center">
                      <div className="absolute inset-0 bg-radial-gradient from-champagne/10 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />
                      <div className="relative w-full h-full flex items-center justify-center transition-transform duration-500 hover:scale-105">
                        <Image
                          src={getItemImage(item)}
                          alt={item.name}
                          fill
                          sizes="400px"
                          className="object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]"
                          priority={index === 0}
                        />
                      </div>
                    </div>

                    {/* Bottom Details & CTA Link */}
                    <div className="flex flex-col gap-3 border-t border-white/[0.08] pt-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-display text-xl lg:text-2xl text-warm-white font-normal uppercase leading-tight">
                            {item.name}
                          </h3>
                          <p className="font-sans text-xs text-stone line-clamp-2 font-light mt-1">
                            {item.shortDescription}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between font-mono pt-2">
                        <div>
                          <span className="text-xs text-stone/80 uppercase block text-[10px] tracking-wider">
                            INSPECTION PRICE
                          </span>
                          <span className="text-lg lg:text-xl text-warm-white font-medium">
                            ৳ {item.price.toLocaleString()}
                          </span>
                        </div>

                        <Link
                          href={`#${item.slug}`}
                          className="flex items-center gap-2 px-4 py-2 bg-champagne text-obsidian font-mono text-xs tracking-widest uppercase font-medium hover:bg-champagne/90 transition-all duration-300 group"
                        >
                          <span>DETAILS</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile Stacked Interactive Accordion */}
      <div className="flex md:hidden flex-col gap-4">
        {products.map((item, index) => {
          const isActive = activeIdx === index;

          return (
            <div
              key={item.id || index}
              onClick={() => setActiveIdx(isActive ? null : index)}
              className={cn(
                "rounded-2xl border transition-all duration-300 p-5 overflow-hidden",
                isActive
                  ? "bg-carbon/90 border-champagne/60 shadow-lg"
                  : "bg-carbon/40 border-white/[0.08]"
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-champagne">0{index + 1}</span>
                  <div>
                    <span className="font-mono text-xs text-stone uppercase block">
                      {item.brand}
                    </span>
                    <h4 className="font-display text-lg text-warm-white font-normal">
                      {item.name}
                    </h4>
                  </div>
                </div>
                <div className="text-right font-mono">
                  <span className="text-sm text-warm-white font-medium block">
                    ৳ {item.price.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-champagne">
                    {isActive ? "CLOSE ▲" : "VIEW ▼"}
                  </span>
                </div>
              </div>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden pt-4 flex flex-col items-center gap-4"
                  >
                    <div className="relative w-48 h-48">
                      <Image
                        src={getItemImage(item)}
                        alt={item.name}
                        fill
                        sizes="200px"
                        className="object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]"
                      />
                    </div>
                    <p className="font-sans text-xs text-stone text-center font-light leading-relaxed">
                      {item.shortDescription}
                    </p>
                    <Link
                      href={`#${item.slug}`}
                      className="w-full py-2.5 bg-champagne text-obsidian text-center font-mono text-xs tracking-widest uppercase font-medium"
                    >
                      EXPLORE DETAILS (৳ {item.price.toLocaleString()})
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Skiper52 = () => {
  const defaultItems = [
    {
      src: "/images/craftsmanship/dial-detail.jpg",
      alt: "Dial macro detail",
      code: "01 // DIAL",
    },
    {
      src: "/images/craftsmanship/bezel-crystal.jpg",
      alt: "Bezel crystal detail",
      code: "02 // CRYSTAL",
    },
    {
      src: "/images/craftsmanship/movement-macro.jpg",
      alt: "Movement mechanics",
      code: "03 // CALIBER",
    },
    {
      src: "/images/craftsmanship/gears-mechanism.jpg",
      alt: "Gears and casework",
      code: "04 // CASEWORK",
    },
  ];

  const [activeImage, setActiveImage] = useState<number | null>(0);

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden py-12">
      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="relative w-full max-w-6xl px-4"
      >
        <div className="flex w-full items-center justify-center gap-2">
          {defaultItems.map((image, index) => (
            <motion.div
              key={index}
              className={cn(
                "relative cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300",
                activeImage === index
                  ? "border-champagne/80 shadow-2xl"
                  : "border-white/10 hover:border-white/30"
              )}
              initial={{ width: "4rem", height: "18rem" }}
              animate={{
                width: activeImage === index ? "24rem" : "5.5rem",
                height: "22rem",
              }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActiveImage(index)}
              onHoverStart={() => setActiveImage(index)}
            >
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/30 to-transparent z-10"
                  />
                )}
              </AnimatePresence>
              <div className="absolute top-4 left-4 z-20 font-mono text-[10px] text-champagne tracking-widest bg-obsidian/80 px-2 py-1 border border-white/10 backdrop-blur-sm">
                {image.code}
              </div>
              <Image
                src={image.src}
                className="size-full object-cover"
                alt={image.alt}
                fill
                sizes="400px"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
