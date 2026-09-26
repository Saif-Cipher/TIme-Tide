"use client";

import Link from "next/link";
import { Compass, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-obsidian border-t border-white/[0.08] pt-24 pb-12 px-6 md:px-12 text-warm-white">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-white/[0.06]">
          
          {/* Brand & Purpose (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Compass className="w-5 h-5 text-champagne" />
              <span className="font-display text-2xl tracking-[0.15em] text-warm-white font-normal uppercase">
                TIME AND TIDE
              </span>
            </div>

            <p className="font-sans text-stone text-sm font-light leading-relaxed max-w-sm">
              A Bangladesh-focused affordable-premium fashion watch marketplace. Curated pieces of horological conviction, selected for restraint, proportion, and enduring passage.
            </p>

            <div className="flex flex-col gap-2 font-mono text-xs text-soft-metal pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-champagne" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-champagne" />
                <span>Concierge & Inquiries: +880 1700-000000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-champagne" />
                <span>curator@timeandtide.com.bd</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="font-mono text-[10px] tracking-[0.3em] text-champagne uppercase">
                WE SAIL.
              </span>
            </div>
          </div>

          {/* Links: Collections (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-mono text-xs tracking-[0.25em] text-warm-white uppercase mb-2">
              COLLECTIONS
            </h4>
            <div className="flex flex-col gap-2.5 font-sans text-sm text-stone font-light">
              <Link href="#collections" className="hover:text-champagne transition-colors">Chronograph Series</Link>
              <Link href="#collections" className="hover:text-champagne transition-colors">Stealth Monochrome</Link>
              <Link href="#collections" className="hover:text-champagne transition-colors">Heritage Sapphire</Link>
              <Link href="#collections" className="hover:text-champagne transition-colors">Mako Diver Edition</Link>
              <Link href="#curated" className="hover:text-champagne transition-colors">All Curated Pieces</Link>
            </div>
          </div>

          {/* Links: Navigation (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-mono text-xs tracking-[0.25em] text-warm-white uppercase mb-2">
              EXPERIENCE
            </h4>
            <div className="flex flex-col gap-2.5 font-sans text-sm text-stone font-light">
              <Link href="#top" className="hover:text-champagne transition-colors">Cinematic Hero</Link>
              <Link href="#featured" className="hover:text-champagne transition-colors">In Focus Piece</Link>
              <Link href="#curated" className="hover:text-champagne transition-colors">Curated Catalog</Link>
              <Link href="#craftsmanship" className="hover:text-champagne transition-colors">Design & Material</Link>
              <Link href="#lifestyle" className="hover:text-champagne transition-colors">Watch Lifestyle</Link>
            </div>
          </div>

          {/* Links: Support & Policies (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-mono text-xs tracking-[0.25em] text-warm-white uppercase mb-2">
              ASSURANCE
            </h4>
            <div className="flex flex-col gap-2.5 font-sans text-sm text-stone font-light">
              <span className="text-soft-metal text-xs">6-Month Warranty</span>
              <span className="text-soft-metal text-xs">15-Day Return Window</span>
              <span className="text-soft-metal text-xs">Nationwide COD</span>
              <span className="text-soft-metal text-xs">64 Districts Delivery</span>
              <span className="text-soft-metal text-xs">Physical Verification</span>
            </div>
          </div>

          {/* Links: Legal & Region (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-mono text-xs tracking-[0.25em] text-warm-white uppercase mb-2">
              MARKET
            </h4>
            <div className="flex flex-col gap-3 font-mono text-xs text-stone">
              <div className="p-3 bg-carbon border border-white/[0.06] flex flex-col gap-1">
                <span className="text-[10px] text-champagne uppercase tracking-widest">REGION</span>
                <span className="text-warm-white">BANGLADESH (BDT ৳)</span>
              </div>
              <div className="flex flex-col gap-2 font-sans text-xs text-stone/80 pt-2">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
                <span>Authenticity Mandate</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Social */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-stone">
          <p>
            &copy; {new Date().getFullYear()} TIME AND TIDE. All rights reserved. Curated for Bangladesh.
          </p>
          <div className="flex items-center gap-6 text-soft-metal tracking-wider">
            <span className="hover:text-champagne cursor-pointer transition-colors">INSTAGRAM</span>
            <span className="hover:text-champagne cursor-pointer transition-colors">FACEBOOK</span>
            <span className="hover:text-champagne cursor-pointer transition-colors">WHATSAPP</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
