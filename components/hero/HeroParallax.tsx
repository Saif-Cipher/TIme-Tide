"use client";

import { useEffect, useRef, useState } from "react";

interface ParticlePosition {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
}

export function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<ParticlePosition[]>([]);
  const rafRef = useRef<ReturnType<typeof requestAnimationFrame> | null>(null);

  // Initialize particles
  useEffect(() => {
    if (typeof window === "undefined") return;

    const particleCount = 8;
    const newParticles: ParticlePosition[] = [];
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.4 + 0.1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
      });
    }
    setParticles(newParticles);
  }, []);

  // Handle mouse move for parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate particles
  useEffect(() => {
    if (typeof window === "undefined") return;

    const animate = () => {
      setParticles((prev) =>
        prev.map((p) => {
          let x = p.x + p.speedX;
          let y = p.y + p.speedY;

          if (x < 0 || x > window.innerWidth) {
            x = x < 0 ? window.innerWidth : 0;
          }
          if (y < 0 || y > window.innerHeight) {
            y = y < 0 ? window.innerHeight : 0;
          }

          return { ...p, x, y };
        })
      );
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Background parallax layers */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`,
          transition: "transform 0.3s ease-out",
          background: typeof window !== "undefined" ? `radial-gradient(ellipse at ${50 + (mousePos.x - window.innerWidth / 2) * 0.01}% ${50 + (mousePos.y - window.innerHeight / 2) * 0.01}%, rgba(197, 164, 109, 0.08) 0%, transparent 70%)` : "transparent",
        }}
      />

      {/* Mid parallax layer - subtle shift opposite direction */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          transform: `translate(${mousePos.x * -0.01}px, ${mousePos.y * -0.01}px)`,
          transition: "transform 0.4s ease-out",
        }}
      >
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1920 1080">
          {/* Subtle geometric elements */}
          <circle cx="200" cy="300" r="120" fill="none" stroke="currentColor" strokeWidth="1" className="text-champagne/20" />
          <circle cx="1700" cy="800" r="200" fill="none" stroke="currentColor" strokeWidth="1" className="text-champagne/15" />
          <line x1="400" y1="0" x2="400" y2="1080" stroke="currentColor" strokeWidth="1" className="text-champagne/10" />
          <line x1="1500" y1="0" x2="1500" y2="1080" stroke="currentColor" strokeWidth="1" className="text-champagne/10" />
        </svg>
      </div>

      {/* Floating particles with parallax */}
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-champagne pointer-events-none transition-opacity duration-500"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity,
            transform: `translate(${mousePos.x * 0.015}px, ${mousePos.y * 0.015}px)`,
          }}
        />
      ))}

      {/* Subtle light sweep overlay */}
      <div
        className="absolute inset-0 opacity-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.02) 0%, transparent 50%)`,
          transition: "background 0.3s ease-out",
        }}
      />
    </div>
  );
}
