"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import React from "react";

const SPRING = {
  mass: 0.1,
  damping: 10,
  stiffness: 131,
};

interface SimpleMouseFollowProps {
  className?: string;
  dotClassName?: string;
  children?: React.ReactNode;
}

const SimpleMouseFollow = ({
  className = "size-[500px]",
  dotClassName = "size-5 bg-champagne/80",
  children,
}: SimpleMouseFollowProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const opacity = useMotionValue(0);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - bounds.left);
    y.set(e.clientY - bounds.top);
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerEnter={() => opacity.set(1)}
      onPointerLeave={() => opacity.set(0)}
      className={`relative rounded-3xl bg-carbon/60 border border-white/[0.08] cursor-none overflow-hidden ${className}`}
    >
      <motion.div
        style={{
          x,
          y,
          opacity,
        }}
        className={`pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-[1px] ${dotClassName}`}
      />
      {children}
    </div>
  );
};

interface SpringMouseFollowProps {
  className?: string;
  followerClassName?: string;
  children?: React.ReactNode;
}

const SpringMouseFollow = ({
  className = "size-[500px]",
  followerClassName = "size-10 bg-champagne/30 border border-champagne/50",
  children,
}: SpringMouseFollowProps) => {
  const xSpring = useSpring(0, SPRING);
  const ySpring = useSpring(0, SPRING);
  const opacitySpring = useSpring(0, SPRING);
  const scaleSpring = useSpring(0, SPRING);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    xSpring.set(e.clientX - bounds.left);
    ySpring.set(e.clientY - bounds.top);
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerEnter={() => {
        opacitySpring.set(1);
        scaleSpring.set(1);
      }}
      onPointerLeave={() => {
        opacitySpring.set(0);
        scaleSpring.set(0);
      }}
      className={`relative rounded-3xl bg-carbon/60 border border-white/[0.08] overflow-hidden ${className}`}
    >
      <motion.div
        style={{
          x: xSpring,
          y: ySpring,
          opacity: opacitySpring,
          scale: scaleSpring,
        }}
        className={`pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-sm ${followerClassName}`}
      />
      {children}
    </div>
  );
};

const Skiper61 = () => {
  return (
    <section className="w-full py-16 flex flex-col md:flex-row gap-8 items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="grid content-start justify-items-center gap-4 text-center mb-6">
          <span className="font-mono text-xs tracking-[0.25em] text-champagne uppercase">
            01 // SIMPLE CURSOR TRACKER
          </span>
        </div>
        <SimpleMouseFollow className="w-full max-w-[420px] h-[340px] flex items-center justify-center p-8">
          <div className="text-center font-mono text-xs text-stone tracking-widest uppercase pointer-events-none">
            HOVER OVER INTERACTIVE AREA
          </div>
        </SimpleMouseFollow>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="grid content-start justify-items-center gap-4 text-center mb-6">
          <span className="font-mono text-xs tracking-[0.25em] text-champagne uppercase">
            02 // SPRING DAMPED LERP
          </span>
        </div>
        <SpringMouseFollow className="w-full max-w-[420px] h-[340px] flex items-center justify-center p-8">
          <div className="text-center font-mono text-xs text-stone tracking-widest uppercase pointer-events-none">
            SPRING DAMPING INERTIA
          </div>
        </SpringMouseFollow>
      </div>
    </section>
  );
};

export { SimpleMouseFollow, Skiper61, SpringMouseFollow };
