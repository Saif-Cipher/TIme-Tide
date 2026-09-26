"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface HeroSequenceCanvasProps {
  progress: number;
}

const FRAME_COUNT = 50;

function getFramePath(index: number): string {
  const paddedIndex = index.toString().padStart(3, "0");
  return `/animation/ezgif-frame-${paddedIndex}.jpg`;
}

export function HeroSequenceCanvas({ progress }: HeroSequenceCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(FRAME_COUNT).fill(null));
  const [firstFrameReady, setFirstFrameReady] = useState(false);
  const [loadPercentage, setLoadPercentage] = useState(0);
  const requestRef = useRef<number>(0);
  const lastDrawnFrameRef = useRef<number>(-1);

  // Helper to draw image fitted inside canvas
  const renderImageToCanvas = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    img: HTMLImageElement
  ) => {
    const cw = canvas.width;
    const ch = canvas.height;

    // Fill background with obsidian
    ctx.fillStyle = "#0B0B0A";
    ctx.fillRect(0, 0, cw, ch);

    const imgW = img.naturalWidth;
    const imgH = img.naturalHeight;
    const imgRatio = imgW / imgH;
    const canvasRatio = cw / ch;

    let dw = cw;
    let dh = ch;
    let dx = 0;
    let dy = 0;

    // We use "contain" with a subtle scale boost so the watch fills nicely without clipping
    if (canvasRatio > imgRatio) {
      // Screen is wider than image
      dh = ch;
      dw = ch * imgRatio;
      dx = (cw - dw) / 2;
    } else {
      // Screen is taller than image (mobile/tablet portrait)
      dw = cw;
      dh = cw / imgRatio;
      dy = (ch - dh) / 2;
    }

    ctx.drawImage(img, dx, dy, dw, dh);
  };

  // Draw a specific frame to canvas
  const drawFrame = useCallback((frameIdx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const img = imagesRef.current[frameIdx];
    if (!img || !img.complete || img.naturalWidth === 0) {
      // Fallback to closest loaded frame if available
      const fallback = imagesRef.current.find(im => im && im.complete && im.naturalWidth > 0);
      if (fallback) {
        renderImageToCanvas(ctx, canvas, fallback);
      }
      return;
    }

    renderImageToCanvas(ctx, canvas, img);
    lastDrawnFrameRef.current = frameIdx;
  }, []);

  // 1. Initial Load: Load frame 1 immediately, then background preload remaining frames
  useEffect(() => {
    let isCancelled = false;

    // Prioritize frame 1
    const firstImg = new Image();
    firstImg.src = getFramePath(1);
    firstImg.onload = () => {
      if (isCancelled) return;
      imagesRef.current[0] = firstImg;
      setFirstFrameReady(true);
      drawFrame(0);

      // Now preload the remaining 49 frames sequentially / in chunks
      let loaded = 1;
      for (let i = 2; i <= FRAME_COUNT; i++) {
        const img = new Image();
        const frameIndex = i - 1;
        img.src = getFramePath(i);
        img.onload = () => {
          if (isCancelled) return;
          imagesRef.current[frameIndex] = img;
          loaded++;
          setLoadPercentage(Math.round((loaded / FRAME_COUNT) * 100));
        };
      }
    };

    return () => {
      isCancelled = true;
    };
  }, [drawFrame]);

  // 2. Resize handler with DPR support capped at 2 for performance
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      // Redraw current frame
      const currentIdx = Math.max(0, Math.min(FRAME_COUNT - 1, Math.floor(progress * (FRAME_COUNT - 1))));
      drawFrame(currentIdx);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawFrame, progress]);

  // 3. React to progress changes
  useEffect(() => {
    const targetIdx = Math.max(0, Math.min(FRAME_COUNT - 1, Math.floor(progress * (FRAME_COUNT - 1))));
    if (targetIdx === lastDrawnFrameRef.current) return;

    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }

    requestRef.current = requestAnimationFrame(() => {
      drawFrame(targetIdx);
    });

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [progress, drawFrame]);

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain transition-opacity duration-700 ease-out"
        style={{ opacity: firstFrameReady ? 1 : 0 }}
      />
      {/* Subtle loader indicator if on slow network */}
      {!firstFrameReady && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-30 bg-obsidian">
          <div className="w-12 h-[1px] bg-champagne/40 animate-pulse" />
          <span className="font-mono text-xs tracking-[0.3em] text-stone uppercase">
            Initiating Sequence {loadPercentage > 0 ? `${loadPercentage}%` : ""}
          </span>
        </div>
      )}
    </div>
  );
}
