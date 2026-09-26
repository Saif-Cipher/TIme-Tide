"use client";

export function PhilosophyStatement() {
  return (
    <section className="relative py-40 md:py-60 px-6 md:px-12 bg-obsidian text-warm-white overflow-hidden border-t border-white/[0.04]">
      {/* Subtle background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-champagne/[0.02] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto text-center relative z-10 flex flex-col items-center gap-12">
        
        {/* Top Tag */}
        <div className="flex items-center gap-4 font-mono text-xs tracking-[0.35em] text-champagne uppercase">
          <span className="w-8 h-[1px] bg-champagne/40" />
          <span>SECTION 07 // THE PHILOSOPHY</span>
          <span className="w-8 h-[1px] bg-champagne/40" />
        </div>

        {/* Major Editorial Statement */}
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.06em] text-warm-white uppercase font-normal leading-[1.08] max-w-5xl">
          TIME IS MORE THAN<br />
          <span className="text-stone">WHAT THE CLOCK</span><br />
          SHOWS.
        </h2>

        {/* Supporting Narrative */}
        <p className="font-sans text-stone text-base sm:text-lg max-w-2xl font-light leading-relaxed tracking-wide">
          A watch does not stop time. It anchors you within it. Time and Tide was established in Bangladesh to curate pieces of quiet horological conviction—watches built with disciplined restraint, honest materials, and timeless dignity.
        </p>

        {/* Tri-Pillar Minimal Footprint */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mt-8 pt-12 border-t border-white/[0.06] w-full max-w-3xl font-mono text-xs text-soft-metal">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] tracking-[0.25em] text-stone uppercase">01 / DISCIPLINE</span>
            <span className="text-warm-white tracking-widest uppercase">RESTRICTION AS LUXURY</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] tracking-[0.25em] text-stone uppercase">02 / INTEGRITY</span>
            <span className="text-warm-white tracking-widest uppercase">PROPORTION OVER NOISE</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] tracking-[0.25em] text-stone uppercase">03 / HOROLOGY</span>
            <span className="text-warm-white tracking-widest uppercase">BUILT FOR PASSAGE</span>
          </div>
        </div>

      </div>
    </section>
  );
}
