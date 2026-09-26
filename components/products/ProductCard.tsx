"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/demo-products";
import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
  aspect?: "portrait" | "wide" | "square";
  showSpecs?: boolean;
}

export function ProductCard({ product, aspect = "portrait", showSpecs = false }: ProductCardProps) {
  const aspectClass =
    aspect === "wide"
      ? "aspect-[16/10]"
      : aspect === "square"
      ? "aspect-square"
      : "aspect-[3/4]";

  return (
    <Link
      href={`#product-${product.slug}`}
      className="group relative flex flex-col justify-between bg-carbon/60 border border-white/[0.06] hover:border-champagne/40 transition-all duration-500 overflow-hidden p-6 md:p-8"
    >
      {/* Top Bar: Brand, Tag & Status */}
      <div className="flex items-start justify-between z-10 font-mono text-[11px] tracking-[0.2em] uppercase">
        <div className="flex flex-col gap-1">
          <span className="text-stone group-hover:text-warm-white transition-colors">{product.brand}</span>
          {product.tag && (
            <span className="text-[9px] tracking-widest text-champagne">{product.tag}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
          <span className="text-stone/80 text-[10px]">
            {product.stockQuantity <= 3 ? "Low Stock" : "In Stock"}
          </span>
        </div>
      </div>

      {/* Center Image Container with Subtle Ambient Pedestal */}
      <div className={`relative ${aspectClass} w-full my-6 flex items-center justify-center overflow-hidden`}>
        {/* Soft radial glow behind watch */}
        <div className="absolute inset-0 bg-radial-gradient from-white/[0.04] to-transparent rounded-full blur-2xl group-hover:from-champagne/[0.08] transition-all duration-700 pointer-events-none" />

        <div className="relative w-full h-full max-h-[85%] flex items-center justify-center transform group-hover:scale-105 group-hover:-translate-y-1 transition-transform duration-700 ease-out">
          <Image
            src={product.heroImage}
            alt={`${product.brand} ${product.name}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>

      {/* Bottom Bar: Model Name, Specs, Price, Action */}
      <div className="flex flex-col gap-3 z-10 border-t border-white/[0.06] pt-4">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-display text-lg md:text-xl text-warm-white font-normal tracking-wide group-hover:text-champagne transition-colors">
            {product.name}
          </h3>
          <ArrowUpRight className="w-4 h-4 text-stone group-hover:text-champagne group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
        </div>

        {showSpecs && product.specs && (
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 font-mono text-[10px] text-stone tracking-wider py-1 border-y border-white/[0.03]">
            {Object.entries(product.specs).slice(0, 2).map(([key, val]) => (
              <div key={key} className="truncate">
                <span className="text-stone/60">{key}: </span>
                <span className="text-soft-metal">{val}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between font-mono">
          <div className="flex items-baseline gap-2">
            <span className="text-base text-warm-white font-medium tracking-wider">
              ৳ {product.price.toLocaleString()}
            </span>
            {product.compareAtPrice && (
              <span className="text-xs text-stone line-through opacity-60">
                ৳ {product.compareAtPrice.toLocaleString()}
              </span>
            )}
          </div>
          <span className="text-[10px] tracking-[0.2em] text-stone group-hover:text-warm-white uppercase transition-colors">
            View Watch →
          </span>
        </div>
      </div>
    </Link>
  );
}
