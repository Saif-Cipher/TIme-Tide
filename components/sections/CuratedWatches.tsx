"use client";

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { demoProducts, Product } from "@/data/demo-products";
import { 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  ArrowUpRight, 
  X, 
  ShieldCheck, 
  Truck, 
  RotateCcw,
  SlidersHorizontal
} from "lucide-react";
import clsx from "clsx";

export function CuratedWatches() {
  const products = demoProducts;
  const N = products.length; // 10 products

  // Continuous interpolated position & target index
  const [targetIndex, setTargetIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Dragging refs
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartTargetRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const requestRef = useRef<number>(0);
  const targetIndexRef = useRef(0);
  targetIndexRef.current = targetIndex;
  const currentIndexRef = useRef(0);
  currentIndexRef.current = currentIndex;

  // Window resize & reduced motion detection
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  // Close detail modal on Escape key
  useEffect(() => {
    if (!selectedProduct) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProduct(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProduct]);

  // Spring-like physics interpolation loop
  useEffect(() => {
    const animate = () => {
      const diff = targetIndexRef.current - currentIndexRef.current;
      if (Math.abs(diff) > 0.0005) {
        // Smooth lerp easing
        const lerpFactor = isDraggingRef.current ? 0.35 : 0.12;
        const next = currentIndexRef.current + diff * lerpFactor;
        setCurrentIndex(next);
      } else if (currentIndexRef.current !== targetIndexRef.current) {
        setCurrentIndex(targetIndexRef.current);
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Responsive spatial track dimensions
  const isDesktop = windowWidth >= 1024;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const cardSpacing = isDesktop ? 310 : isTablet ? 260 : 215;
  const arcDrop = isDesktop ? 34 : isTablet ? 26 : 18;

  // Navigation handlers
  const goToNext = useCallback(() => {
    setTargetIndex((prev) => Math.round(prev) + 1);
  }, []);

  const goToPrev = useCallback(() => {
    setTargetIndex((prev) => Math.round(prev) - 1);
  }, []);

  const goToIndex = useCallback((index: number) => {
    // Find shortest circular delta from current target
    const currentWrapped = ((targetIndexRef.current % N) + N) % N;
    let delta = index - currentWrapped;
    if (delta > N / 2) delta -= N;
    if (delta < -N / 2) delta += N;
    setTargetIndex(targetIndexRef.current + delta);
  }, [N]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
      }
    },
    [goToPrev, goToNext]
  );

  // Mouse Drag Events
  const onMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartTargetRef.current = targetIndexRef.current;
    lastXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const currentX = e.clientX;
      const currentTime = performance.now();
      const deltaX = currentX - dragStartXRef.current;
      
      // Calculate instantaneous velocity for release momentum
      const dt = currentTime - lastTimeRef.current;
      if (dt > 0) {
        velocityRef.current = (currentX - lastXRef.current) / dt;
      }
      lastXRef.current = currentX;
      lastTimeRef.current = currentTime;

      const deltaIndex = deltaX / cardSpacing;
      setTargetIndex(dragStartTargetRef.current - deltaIndex);
    };

    const onMouseUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      // Add momentum flick on release
      const momentum = velocityRef.current * 80;
      const momentumIndex = momentum / cardSpacing;
      setTargetIndex((prev) => Math.round(prev - momentumIndex));
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [cardSpacing]);

  // Touch Drag Events (Mobile & Tablet)
  const touchStartYRef = useRef(0);
  const touchStartXRef = useRef(0);
  const isHorizontalScrollRef = useRef<boolean | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    isDraggingRef.current = true;
    const touch = e.touches[0];
    touchStartXRef.current = touch.clientX;
    touchStartYRef.current = touch.clientY;
    dragStartXRef.current = touch.clientX;
    dragStartTargetRef.current = targetIndexRef.current;
    lastXRef.current = touch.clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
    isHorizontalScrollRef.current = null;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - touchStartXRef.current;
    const deltaY = touch.clientY - touchStartYRef.current;

    // Detect direction on initial movement: vertical scrolls page, horizontal scrolls carousel
    if (isHorizontalScrollRef.current === null) {
      if (Math.abs(deltaX) > 6 || Math.abs(deltaY) > 6) {
        isHorizontalScrollRef.current = Math.abs(deltaX) > Math.abs(deltaY);
      }
    }

    if (isHorizontalScrollRef.current) {
      // Horizontal swipe: prevent window scrolling
      if (e.cancelable) e.preventDefault();
      const currentTime = performance.now();
      const dt = currentTime - lastTimeRef.current;
      if (dt > 0) {
        velocityRef.current = (touch.clientX - lastXRef.current) / dt;
      }
      lastXRef.current = touch.clientX;
      lastTimeRef.current = currentTime;

      const totalDelta = touch.clientX - dragStartXRef.current;
      const deltaIndex = totalDelta / cardSpacing;
      setTargetIndex(dragStartTargetRef.current - deltaIndex);
    }
  };

  const onTouchEnd = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    if (isHorizontalScrollRef.current) {
      const momentum = velocityRef.current * 70;
      const momentumIndex = momentum / cardSpacing;
      setTargetIndex((prev) => Math.round(prev - momentumIndex));
    }
    isHorizontalScrollRef.current = null;
  };

  // Horizontal Wheel Event
  const onWheel = (e: React.WheelEvent) => {
    // Only intercept if user is explicitly scrolling horizontally or holding shift
    if (Math.abs(e.deltaX) > 12) {
      e.preventDefault();
      setTargetIndex((prev) => prev + e.deltaX * 0.002);
    }
  };

  // Active integer index (normalized 0 to N-1)
  const activeNormalizedIndex = useMemo(() => {
    const raw = Math.round(currentIndex) % N;
    return (raw + N) % N;
  }, [currentIndex, N]);

  const activeProduct = products[activeNormalizedIndex];

  return (
    <section
      id="curated"
      aria-label="Curated Watch Collection"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="relative w-full py-28 md:py-36 bg-obsidian text-warm-white overflow-hidden select-none outline-none focus-visible:ring-1 focus-visible:ring-champagne/30"
    >
      {/* Background Ambience: Subtle studio depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-radial-gradient from-champagne/[0.03] via-transparent to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header with Telemetry and Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 gap-6 pb-8 border-b border-white/[0.06]">
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-3 font-mono text-xs tracking-[0.3em] text-champagne uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SECTION 03 // THE EDIT</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl tracking-[0.08em] font-normal uppercase leading-[1.08]">
              CURATED WATCHES
            </h2>
            <p className="font-sans text-stone text-xs sm:text-sm max-w-lg font-light leading-relaxed pt-1">
              Positioned on our spatial horizontal gallery. Each model represents exemplary proportion, reliable movement calibration, and enduring finish.
            </p>
          </div>

          {/* Desktop Navigation Arrows and Counter */}
          <div className="flex items-center gap-6">
            {/* Active Counter Indicator */}
            <div className="font-mono text-xs tracking-[0.25em] text-soft-metal">
              <span className="text-champagne font-medium text-sm">
                {(activeNormalizedIndex + 1).toString().padStart(2, "0")}
              </span>
              <span className="opacity-40"> / {N.toString().padStart(2, "0")}</span>
            </div>

            {/* Arrow Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={goToPrev}
                aria-label="Previous watch"
                className="w-11 h-11 rounded-full border border-white/10 hover:border-champagne bg-carbon/80 hover:bg-carbon backdrop-blur-md flex items-center justify-center text-warm-white hover:text-champagne transition-all duration-300 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={goToNext}
                aria-label="Next watch"
                className="w-11 h-11 rounded-full border border-white/10 hover:border-champagne bg-carbon/80 hover:bg-carbon backdrop-blur-md flex items-center justify-center text-warm-white hover:text-champagne transition-all duration-300 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* CINEMATIC SPATIAL CAROUSEL STAGE                             */}
        {/* ------------------------------------------------------------- */}
        <div
          className="relative w-full h-[520px] sm:h-[560px] md:h-[600px] flex items-center justify-center overflow-visible cursor-grab active:cursor-grabbing"
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onWheel={onWheel}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ perspective: "1300px" }}
        >
          {/* Subtle Arc Guideline (Atmospheric Track Line) */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />

          {/* Cards Track */}
          <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
            {products.map((product, i) => {
              // Calculate circular offset relative to current float position
              let offset = ((i - currentIndex) % N);
              if (offset > N / 2) offset -= N;
              if (offset < -N / 2) offset += N;

              const absOffset = Math.abs(offset);
              const sign = Math.sign(offset);

              // Don't render cards that are far off the sides
              if (absOffset > 3.4) {
                return null;
              }

              // Distance-based physical positioning
              const x = sign * (absOffset * cardSpacing - (absOffset > 1 ? (absOffset - 1) * 22 : 0));
              // Parabolic Arc: center is at apex y=0, side cards curve gently downward
              const y = prefersReducedMotion ? 0 : Math.pow(absOffset, 1.55) * arcDrop;
              const scale = prefersReducedMotion ? Math.max(0.8, 1 - absOffset * 0.1) : Math.max(0.72, 1 - absOffset * 0.12);
              // Subtle rotation along the curve
              const rotateZ = prefersReducedMotion ? 0 : -offset * (isDesktop ? 3.2 : 2.4);
              // Subtle 3D perspective turn facing inward
              const rotateY = prefersReducedMotion ? 0 : -sign * Math.min(22, Math.pow(absOffset, 0.9) * 8.5);
              const translateZ = prefersReducedMotion ? 0 : -absOffset * (isDesktop ? 80 : 50);
              const opacity = Math.max(0, 1 - absOffset * (isDesktop ? 0.28 : 0.38));
              const zIndex = Math.round(100 - absOffset * 15);
              const blur = prefersReducedMotion ? 0 : Math.max(0, (absOffset - 1.25) * 2);

              const isActive = absOffset < 0.45;

              return (
                <div
                  key={product.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isActive) {
                      // Clicking an adjacent card glides it into focus
                      goToIndex(i);
                    } else {
                      // Clicking active card opens detail drawer
                      setSelectedProduct(product);
                    }
                  }}
                  className={clsx(
                    "absolute transition-shadow duration-500 rounded-sm pointer-events-auto",
                    "w-[275px] sm:w-[315px] md:w-[340px] h-[450px] sm:h-[490px] md:h-[515px]",
                    "flex flex-col justify-between p-6 sm:p-7 md:p-8",
                    "border backdrop-blur-md cursor-pointer group",
                    isActive
                      ? "bg-gradient-to-b from-[#181816]/95 via-[#131312]/90 to-[#0B0B0A]/95 border-champagne/45 shadow-[0_20px_50px_rgba(200,169,110,0.1),0_10px_30px_rgba(0,0,0,0.85)]"
                      : "bg-gradient-to-b from-[#151514]/80 via-[#10100F]/70 to-[#0B0B0A]/85 border-white/[0.07] hover:border-white/20 shadow-[0_15px_35px_rgba(0,0,0,0.7)]"
                  )}
                  style={{
                    transform: `translate3d(${x}px, ${y}px, ${translateZ}px) scale(${scale}) rotateZ(${rotateZ}deg) rotateY(${rotateY}deg)`,
                    opacity,
                    zIndex,
                    filter: blur > 0 ? `blur(${blur}px)` : "none",
                    transformStyle: "preserve-3d",
                    willChange: "transform, opacity",
                  }}
                >
                  {/* Top Bar: Brand, Category, and Tag */}
                  <div className="flex items-start justify-between font-mono text-[10px] sm:text-[11px] tracking-[0.25em] uppercase z-10">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-champagne font-medium">{product.brand}</span>
                      <span className="text-stone text-[9px] tracking-widest">{product.category}</span>
                    </div>

                    {product.tag ? (
                      <span className="px-2 py-0.5 border border-champagne/30 text-champagne text-[9px] tracking-widest uppercase bg-champagne/5">
                        {product.tag}
                      </span>
                    ) : (
                      <span className="text-stone/60 text-[9px] tracking-widest uppercase">
                        {product.stockQuantity <= 4 ? "LIMITED" : "IN STOCK"}
                      </span>
                    )}
                  </div>

                  {/* Center Watch Image Container */}
                  <div className="relative w-full aspect-[4/5] my-2 sm:my-3 flex items-center justify-center">
                    {/* Ambient Radial Spotlight */}
                    <div
                      className={clsx(
                        "absolute inset-0 rounded-full blur-2xl transition-opacity duration-700 pointer-events-none",
                        isActive
                          ? "bg-radial-gradient from-champagne/[0.12] to-transparent opacity-100"
                          : "bg-radial-gradient from-white/[0.03] to-transparent opacity-60"
                      )}
                    />

                    {/* Studio Transparent Watch Photography */}
                    <div className="relative w-full h-full max-h-[92%] flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-1">
                      <Image
                        src={product.heroImage}
                        alt={`${product.brand} ${product.name}`}
                        fill
                        sizes="(max-width: 768px) 275px, 340px"
                        priority={i === 0 || i === 1}
                        className="object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]"
                      />
                    </div>
                  </div>

                  {/* Bottom Information Bar */}
                  <div className="flex flex-col gap-2.5 z-10 border-t border-white/[0.06] pt-3.5 sm:pt-4">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3
                        className={clsx(
                          "font-display text-base sm:text-lg text-warm-white font-normal leading-tight transition-colors line-clamp-1",
                          isActive ? "text-warm-white group-hover:text-champagne" : "text-stone group-hover:text-warm-white"
                        )}
                      >
                        {product.name}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-stone group-hover:text-champagne transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                    </div>

                    {/* Price and Action Row */}
                    <div className="flex items-center justify-between font-mono pt-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-base sm:text-lg text-warm-white font-medium tracking-wider">
                          ৳ {product.price.toLocaleString()}
                        </span>
                        {product.compareAtPrice && (
                          <span className="text-[11px] text-stone line-through opacity-50">
                            ৳ {product.compareAtPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      {/* Active Card Micro-Callout */}
                      <span
                        className={clsx(
                          "text-[9px] sm:text-[10px] tracking-[0.2em] uppercase transition-colors flex items-center gap-1",
                          isActive ? "text-champagne font-medium" : "text-stone/60 group-hover:text-stone"
                        )}
                      >
                        {isActive ? "VIEW DETAILS" : "SELECT"} →
                      </span>
                    </div>

                    {/* Active Card Expanded Micro-Specs */}
                    {isActive && (
                      <div className="hidden sm:flex items-center justify-between text-[10px] font-mono text-stone/80 border-t border-white/[0.04] pt-2 mt-0.5 tracking-wider">
                        <span>{product.specs["Movement"]?.split(" ")[0]} Caliber</span>
                        <span>•</span>
                        <span>{product.specs["Water Resistance"] || "Waterproof"}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* CAROUSEL BOTTOM PROGRESS & INTERACTION HINT                  */}
        {/* ------------------------------------------------------------- */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/[0.06]">
          
          {/* Numbered Quick-Select Track */}
          <div className="flex items-center gap-1 sm:gap-2">
            {products.map((p, idx) => {
              const isPActive = idx === activeNormalizedIndex;
              return (
                <button
                  key={p.id}
                  onClick={() => goToIndex(idx)}
                  aria-label={`Go to watch ${idx + 1}: ${p.name}`}
                  className={clsx(
                    "px-2 sm:px-2.5 py-1 text-[10px] font-mono tracking-wider transition-all duration-300 rounded-sm",
                    isPActive
                      ? "bg-champagne text-obsidian font-semibold scale-105"
                      : "text-stone/70 hover:text-warm-white hover:bg-white/5"
                  )}
                >
                  {(idx + 1).toString().padStart(2, "0")}
                </button>
              );
            })}
          </div>

          {/* Active Model Name & Drag Indicator */}
          <div className="flex items-center gap-4 text-xs font-mono text-stone tracking-widest uppercase">
            <span className="hidden md:inline text-soft-metal">
              IN FOCUS: <strong className="text-warm-white font-normal">{activeProduct.brand} {activeProduct.name}</strong>
            </span>
            <span className="hidden md:inline opacity-30">|</span>
            <div className="flex items-center gap-2 text-stone/70">
              <SlidersHorizontal className="w-3.5 h-3.5 text-champagne" />
              <span className="text-[10px]">DRAG OR USE ARROWS</span>
            </div>
          </div>

        </div>

      </div>

      {/* ------------------------------------------------------------- */}
      {/* LUXURY HOROLOGICAL DETAIL DRAWER / MODAL                      */}
      {/* ------------------------------------------------------------- */}
      {selectedProduct && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-watch-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md transition-all duration-500"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-gradient-to-b from-[#181817] to-[#0E0E0D] border border-white/10 p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              aria-label="Close detail modal"
              className="absolute top-6 right-6 w-9 h-9 rounded-full border border-white/10 hover:border-champagne bg-carbon flex items-center justify-center text-stone hover:text-champagne transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              {/* Product Visual */}
              <div className="relative aspect-square w-full bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05] p-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-radial-gradient from-champagne/[0.08] to-transparent rounded-full blur-2xl pointer-events-none" />
                <div className="relative w-full h-full max-h-[90%]">
                  <Image
                    src={selectedProduct.heroImage}
                    alt={selectedProduct.name}
                    fill
                    sizes="(max-width: 768px) 300px, 400px"
                    className="object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)]"
                  />
                </div>
              </div>

              {/* Product Specifications & Purchase Options */}
              <div className="flex flex-col gap-5">
                <div>
                  <span className="font-mono text-xs tracking-[0.25em] text-champagne uppercase">
                    {selectedProduct.brand} // {selectedProduct.category}
                  </span>
                  <h3 id="modal-watch-title" className="font-display text-2xl sm:text-3xl text-warm-white font-normal uppercase mt-1 leading-tight">
                    {selectedProduct.name}
                  </h3>
                  <div className="flex items-baseline gap-3 mt-3 font-mono">
                    <span className="text-2xl text-warm-white font-medium">
                      ৳ {selectedProduct.price.toLocaleString()}
                    </span>
                    {selectedProduct.compareAtPrice && (
                      <span className="text-sm text-stone line-through opacity-50">
                        ৳ {selectedProduct.compareAtPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>

                <p className="font-sans text-xs text-stone leading-relaxed font-light">
                  {selectedProduct.description}
                </p>

                {/* Technical Specifications Matrix */}
                <div className="grid grid-cols-2 gap-3 py-3 border-y border-white/[0.08] font-mono text-[11px]">
                  {Object.entries(selectedProduct.specs).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="flex flex-col gap-0.5">
                      <span className="text-stone text-[9px] uppercase tracking-wider">{key}</span>
                      <span className="text-warm-white tracking-wide">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Trust Highlights */}
                <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-soft-metal">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-champagne shrink-0" />
                    <span>6-Mo Warranty</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-champagne shrink-0" />
                    <span>COD Nationwide</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <RotateCcw className="w-3.5 h-3.5 text-champagne shrink-0" />
                    <span>15-Day Return</span>
                  </div>
                </div>

                {/* Direct Action */}
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="#final-cta"
                    onClick={() => setSelectedProduct(null)}
                    className="flex-1 py-3.5 bg-champagne text-obsidian text-center font-mono text-xs tracking-[0.2em] font-medium hover:bg-warm-white transition-colors duration-300"
                  >
                    ORDER TIMEPIECE
                  </a>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="px-5 py-3.5 border border-white/20 text-warm-white font-mono text-xs tracking-[0.2em] hover:border-champagne hover:text-champagne transition-colors"
                  >
                    BACK
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
