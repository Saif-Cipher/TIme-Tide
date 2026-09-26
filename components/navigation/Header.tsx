"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu, X, Compass } from "lucide-react";
import clsx from "clsx";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-obsidian/90 backdrop-blur-md border-b border-white/[0.06] py-4"
            : "bg-gradient-to-b from-obsidian/80 via-obsidian/20 to-transparent py-6"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Compass className="w-5 h-5 text-champagne group-hover:rotate-45 transition-transform duration-500" />
            <span className="font-display text-xl sm:text-2xl tracking-[0.18em] text-warm-white font-normal uppercase">
              TIME AND TIDE
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10 font-mono text-xs tracking-[0.25em] text-stone">
            <Link href="#featured" className="hover:text-champagne transition-colors uppercase">
              IN FOCUS
            </Link>
            <Link href="#curated" className="hover:text-champagne transition-colors uppercase">
              CURATED WATCHES
            </Link>
            <Link href="#collections" className="hover:text-champagne transition-colors uppercase">
              COLLECTIONS
            </Link>
            <Link href="#craftsmanship" className="hover:text-champagne transition-colors uppercase">
              DESIGN & CRAFT
            </Link>
            <Link href="#lifestyle" className="hover:text-champagne transition-colors uppercase">
              LIFESTYLE
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6 font-mono text-xs text-stone tracking-widest">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="hover:text-champagne transition-colors flex items-center gap-2"
              aria-label="Search watches"
            >
              <Search className="w-4 h-4" />
              <span>SEARCH</span>
            </button>
            <div className="w-[1px] h-4 bg-white/10" />
            <button
              className="hover:text-champagne transition-colors flex items-center gap-2"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="text-warm-white">BAG (0)</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-stone hover:text-warm-white p-2"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-warm-white p-2"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>

        {/* Search Bar Drawer */}
        {searchOpen && (
          <div className="w-full bg-carbon/95 border-b border-white/10 px-6 py-4 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="max-w-[700px] mx-auto flex items-center gap-4">
              <Search className="w-4 h-4 text-champagne shrink-0" />
              <input
                type="text"
                placeholder="SEARCH CURATED TIMEPIECES (ORIENT, REGENT, TITAN, CHRONOGRAPH)..."
                className="w-full bg-transparent border-none text-warm-white font-mono text-xs tracking-wider placeholder:text-stone/60 focus:outline-none"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-stone hover:text-warm-white text-xs font-mono"
              >
                [ESC]
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-obsidian flex flex-col justify-between p-8 animate-in fade-in duration-300">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <Compass className="w-5 h-5 text-champagne" />
              <span className="font-display text-xl tracking-[0.18em] text-warm-white uppercase">
                TIME AND TIDE
              </span>
            </Link>
            <button
              className="text-warm-white p-2"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-8 font-mono text-lg tracking-[0.25em] text-stone">
            <Link
              href="#featured"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-champagne transition-colors"
            >
              01 // IN FOCUS
            </Link>
            <Link
              href="#curated"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-champagne transition-colors"
            >
              02 // CURATED WATCHES
            </Link>
            <Link
              href="#collections"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-champagne transition-colors"
            >
              03 // COLLECTIONS
            </Link>
            <Link
              href="#craftsmanship"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-champagne transition-colors"
            >
              04 // DESIGN & CRAFT
            </Link>
            <Link
              href="#lifestyle"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-champagne transition-colors"
            >
              05 // LIFESTYLE
            </Link>
          </div>

          <div className="border-t border-white/[0.08] pt-6 flex flex-col gap-4 font-mono text-xs text-soft-metal">
            <div className="flex items-center justify-between">
              <span>MARKET: BANGLADESH</span>
              <span className="text-champagne">BDT (৳)</span>
            </div>
            <p className="text-[10px] text-stone">
              6-Month Warranty • 15-Day Returns • Cash on Delivery
            </p>
          </div>
        </div>
      )}
    </>
  );
}
