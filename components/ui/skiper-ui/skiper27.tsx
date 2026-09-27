"use client";

import { motion } from "framer-motion";
import React from "react";

interface RollingTextProps {
  text?: string;
  speed?: number;
  className?: string;
  duration?: number;
}

export function RollingText({
  text = "ROLLING",
  speed = 0.05,
  className = "text-4xl sm:text-6xl lg:text-7xl font-display font-normal text-warm-white uppercase tracking-wider",
  duration = 3.5,
}: RollingTextProps) {
  const middle = Math.floor(text.length / 2);

  return (
    <div className={`flex items-center justify-center flex-wrap ${className}`}>
      {text.split("").map((char, index) => {
        if (char === " ") {
          return <span key={index} className="inline-block w-[0.35em]">&nbsp;</span>;
        }

        const distanceFromCenter = Math.abs(index - middle);
        const rolls = Math.max(3, Math.floor(duration / (0.2 + 0.15 * distanceFromCenter)));

        return (
          <div
            key={index}
            className="relative inline-block overflow-hidden"
            style={{ height: "1.15em" }}
          >
            <motion.div
              className="flex flex-col"
              initial={{ y: "0em" }}
              whileInView={{ y: `-${1.15 * rolls}em` }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: duration,
                ease: [0.15, 1, 0.1, 1],
                delay: distanceFromCenter * speed,
              }}
            >
              {Array(rolls + 2)
                .fill(null)
                .map((_, rIdx) => (
                  <span
                    key={rIdx}
                    className="flex shrink-0 items-center justify-center"
                    style={{ height: "1.15em" }}
                  >
                    {char}
                  </span>
                ))}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export function Skiper27() {
  return (
    <section className="w-full py-20 flex flex-col items-center justify-center gap-12 text-center">
      <div className="flex flex-col items-center gap-3">
        <span className="font-mono text-xs tracking-[0.3em] text-champagne uppercase">
          SKIPER 27 // ROLLING HOROLOGY TEXT
        </span>
      </div>

      <div className="flex flex-col items-center gap-4">
        <RollingText text="TIME AND TIDE" />
        <RollingText
          text="WE SAIL"
          className="text-3xl sm:text-5xl lg:text-6xl font-display text-champagne uppercase tracking-widest"
        />
      </div>
    </section>
  );
}
