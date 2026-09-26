"use client";

import { HeroScrollController } from "./HeroScrollController";

export function HeroCinematic() {
  return (
    <section className="relative w-full bg-black text-warm-white overflow-hidden">
      <HeroScrollController />
    </section>
  );
}
