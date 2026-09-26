import { HeroCinematic } from "@/components/hero/HeroCinematic";
import { FeaturedWatch } from "@/components/sections/FeaturedWatch";
import { CuratedWatches } from "@/components/sections/CuratedWatches";
import { CollectionStory } from "@/components/sections/CollectionStory";
import { DesignMaterial } from "@/components/sections/DesignMaterial";
import { WatchLifestyle } from "@/components/sections/WatchLifestyle";
import { PhilosophyStatement } from "@/components/sections/PhilosophyStatement";
import { ServiceTrust } from "@/components/sections/ServiceTrust";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-obsidian">
      {/* SECTION 01: CINEMATIC HERO (Canvas 50-Frame Image Sequence) */}
      <HeroCinematic />

      {/* SECTION 02: FEATURED WATCH (Asymmetric In-Focus Presentation) */}
      <FeaturedWatch />

      {/* SECTION 03: CURATED WATCHES (Asymmetric Editorial Product Grid) */}
      <CuratedWatches />

      {/* SECTION 04: COLLECTION STORY (Layered Editorial Narrative) */}
      <CollectionStory />

      {/* SECTION 05: DESIGN / MATERIAL (Macro Horology & Material Specs) */}
      <DesignMaterial />

      {/* SECTION 06: WATCH LIFESTYLE (Editorial Wrist Photography & Real-World Context) */}
      <WatchLifestyle />

      {/* SECTION 07: TIME AND TIDE PHILOSOPHY ("TIME IS MORE THAN WHAT THE CLOCK SHOWS") */}
      <PhilosophyStatement />

      {/* SECTION 08: SERVICE / TRUST (6-Month Warranty, 15-Day Returns, COD, Bangladesh Shipping) */}
      <ServiceTrust />

      {/* SECTION 09: FINAL CINEMATIC CTA ("FIND YOUR TIME. WE SAIL.") */}
      <FinalCTA />
    </div>
  );
}
