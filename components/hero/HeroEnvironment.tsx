"use client";

export function HeroEnvironment() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-obsidian pointer-events-none">
      {/* Deep atmospheric gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-carbon via-obsidian to-obsidian opacity-80" />
      
      {/* Subtle light band that can be animated via GSAP later if desired */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-champagne/5 rounded-full blur-[120px] opacity-30 mix-blend-screen" />
      
      {/* Shadow overlay at bottom to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-obsidian to-transparent z-20" />
    </div>
  );
}
