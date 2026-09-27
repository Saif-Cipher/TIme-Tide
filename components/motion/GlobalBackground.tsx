"use client";

import { SoffitCanvas } from "./SoffitCanvas";

export function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* 1. Underlying WebGL2 Dynamic Tide Gradient Canvas */}
      <SoffitCanvas className="w-full h-full" />

      {/* 2. Atmospheric Dark Luxury Tint Overlay (ensures maximum legibility & contrast) */}
      <div className="absolute inset-0 bg-obsidian/65 backdrop-blur-[1px] pointer-events-none" />

      {/* 3. Deep Radial Vignette Overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-obsidian/40 to-obsidian/90 pointer-events-none" />

      {/* 4. Subtle Top/Bottom Edge Gradients for depth continuity */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-obsidian/80 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-obsidian/80 to-transparent pointer-events-none" />
    </div>
  );
}
