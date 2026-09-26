"use client";

import { Shield, RotateCcw, Banknote, Truck, Award } from "lucide-react";

export function ServiceTrust() {
  const commitments = [
    {
      number: "01",
      icon: Shield,
      title: "6-MONTH WARRANTY",
      subtitle: "MOVEMENT GUARANTEE",
      description: "Every curated timepiece carries Time and Tide's 6-month mechanical guarantee, protecting against internal movement defects and calibrator failure."
    },
    {
      number: "02",
      icon: RotateCcw,
      title: "15-DAY RETURNS",
      subtitle: "INSPECTION WINDOW",
      description: "Experience your timepiece in natural light. Return or exchange any unworn watch in its original protective packaging within 15 days."
    },
    {
      number: "03",
      icon: Banknote,
      title: "CASH ON DELIVERY",
      subtitle: "NATIONWIDE CONVENIENCE",
      description: "Pay upon physical handover anywhere in Bangladesh. Inspect the exterior package seals directly before finalizing your transaction."
    },
    {
      number: "04",
      icon: Truck,
      title: "BANGLADESH SHIPPING",
      subtitle: "ALL 64 DISTRICTS",
      description: "Express insured door-to-door dispatch to Dhaka, Chittagong, Sylhet, and every district across the country in shock-resistant packaging."
    },
    {
      number: "05",
      icon: Award,
      title: "CURATED AUTHENTICITY",
      subtitle: "PHYSICALLY VERIFIED",
      description: "We are curators, not an unvetted marketplace. Every single unit undergoes dial inspection, timing calibration, and bezel checks before dispatch."
    }
  ];

  return (
    <section className="py-28 md:py-40 px-6 md:px-12 bg-carbon text-warm-white border-t border-white/[0.06]">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pb-12 border-b border-white/[0.06] mb-16 gap-6">
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-champagne uppercase">
              SECTION 08 // THE COMMITMENT
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wide uppercase font-normal mt-3">
              SERVICE & TRUST
            </h2>
          </div>
          <p className="font-sans text-stone text-sm max-w-sm font-light leading-relaxed">
            Time and Tide is built on transparency and dependability. Our policies are designed to bring peace of mind to every horology purchase in Bangladesh.
          </p>
        </div>

        {/* 5-Column Luxury Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {commitments.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="bg-obsidian/70 border border-white/[0.06] hover:border-champagne/30 transition-all duration-500 p-8 flex flex-col justify-between gap-8 group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.25em] text-stone group-hover:text-champagne transition-colors">
                    {item.number} {"//"}
                  </span>
                  <Icon className="w-5 h-5 text-champagne/70 group-hover:text-champagne transition-colors" />
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-champagne uppercase">
                    {item.subtitle}
                  </span>
                  <h3 className="font-mono text-sm tracking-[0.15em] text-warm-white font-medium uppercase">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-stone font-light leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
