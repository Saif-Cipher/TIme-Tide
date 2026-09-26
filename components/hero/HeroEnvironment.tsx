"use client";

export function HeroEnvironment() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-black pointer-events-none">
      {/* 1. Deep radial ambient champagne glow centered behind watch */}
      {/* On desktop: shifted to the center-right behind watch (~60% X). On mobile: centered (50% X) */}
      <div 
        className="absolute top-1/2 left-1/2 lg:left-[60%] -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] lg:w-[1100px] h-[600px] sm:h-[850px] lg:h-[1100px] rounded-full blur-[140px] lg:blur-[180px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(200, 169, 110, 0.08) 0%, rgba(200, 169, 110, 0.02) 45%, rgba(0, 0, 0, 0) 70%)"
        }}
      />

      {/* 2. Desktop Left-Side Vignette: ensures editorial safe zone on left has supreme contrast */}
      <div className="hidden lg:block absolute inset-y-0 left-0 w-[52%] bg-gradient-to-r from-black via-black/70 to-transparent z-[12] pointer-events-none" />

      {/* 3. Mobile Top Vignette: ensures header safe zone has perfect contrast */}
      <div className="lg:hidden absolute top-0 inset-x-0 h-52 bg-gradient-to-b from-black via-black/60 to-transparent z-[12] pointer-events-none" />

      {/* 4. Bottom shadow overlay blending smoothly into Section 2 (#0B0B0A obsidian) */}
      <div className="absolute bottom-0 inset-x-0 h-40 sm:h-52 bg-gradient-to-t from-obsidian via-obsidian/75 to-transparent z-[12] pointer-events-none" />
    </div>
  );
}
