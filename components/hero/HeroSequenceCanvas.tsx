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
  const currentFrameIndexRef = useRef<number>(0);
  const progressRef = useRef<number>(progress);
  progressRef.current = progress;

  // Helper to draw image fitted / covered inside canvas
  const renderImageToCanvas = useCallback((
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    img: HTMLImageElement
  ) => {
    const cw = canvas.width;
    const ch = canvas.height;

    // Pitch black background (#000000) matching the animation frame background 100%
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, cw, ch);

    const imgW = img.naturalWidth || 2800;
    const imgH = img.naturalHeight || 2100;
    const canvasRatio = cw / ch;

    let dw = cw;
    let dh = ch;
    let dx = 0;
    let dy = 0;

    // Landscape / Desktop & Tablet Landscape
    if (canvasRatio >= 1.0) {
      // Scale to fill full width, but cap height to 1.35x canvas height so exploded parts are never clipped
      const rawCoverScale = Math.max(cw / imgW, ch / imgH);
      const maxCoverScale = (ch * 1.35) / imgH;
      const scale = Math.min(rawCoverScale, maxCoverScale);

      dw = imgW * scale;
      dh = imgH * scale;

      const baseDx = (cw - dw) / 2;
      const baseDy = (ch - dh) / 2;

      // On widescreen displays, offset watch slightly to the right to create an editorial left safe-zone
      const rightShift = canvasRatio >= 1.2 ? Math.round(cw * 0.08) : 0;

      dx = Math.round(baseDx + rightShift);
      dy = Math.round(baseDy);
    } else {
      // Portrait / Mobile & Tablet Portrait
      // In portrait, fit watch width comfortably with breathing room so dial and lugs are fully visible
      const targetWatchWidthRatio = 0.88;
      const watchWidthInImg = imgW * 0.65;
      const scale = (cw * targetWatchWidthRatio) / watchWidthInImg;

      dw = imgW * scale;
      dh = imgH * scale;

      dx = Math.round((cw - dw) / 2);
      // Vertically position watch at 54% height to leave upper safe zone completely clear
      dy = Math.round((ch * 0.54) - (dh / 2));
    }

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, dx, dy, dw, dh);
  }, []);

  // Draw a specific frame to canvas
  const drawFrame = useCallback((frameIdx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    currentFrameIndexRef.current = frameIdx;

    const img = imagesRef.current[frameIdx];
    if (!img || !img.complete || img.naturalWidth === 0) {
      // Find closest loaded frame if target frame is still downloading
      let closest: HTMLImageElement | null = null;
      let minDiff = Infinity;
      for (let i = 0; i < FRAME_COUNT; i++) {
        const candidate = imagesRef.current[i];
        if (candidate && candidate.complete && candidate.naturalWidth > 0) {
          const diff = Math.abs(i - frameIdx);
          if (diff < minDiff) {
            minDiff = diff;
            closest = candidate;
          }
        }
      }
      if (closest) {
        renderImageToCanvas(ctx, canvas, closest);
      }
      return;
    }

    renderImageToCanvas(ctx, canvas, img);
    lastDrawnFrameRef.current = frameIdx;
  }, [renderImageToCanvas]);

  // 1. Initial Load: Load frame 1 immediately, then background preload remaining frames
  useEffect(() => {
    let isCancelled = false;

    const preloadRemaining = () => {
      let loadedCount = 1;
      for (let i = 2; i <= FRAME_COUNT; i++) {
        const frameIndex = i - 1;
        if (imagesRef.current[frameIndex]?.complete) {
          loadedCount++;
          continue;
        }

        const img = new Image();
        img.onload = () => {
          imagesRef.current[frameIndex] = img;
          loadedCount++;
          if (!isCancelled) {
            setLoadPercentage(Math.round((loadedCount / FRAME_COUNT) * 100));
          }
          // If this newly loaded frame is the one currently requested, draw it
          if (frameIndex === currentFrameIndexRef.current) {
            drawFrame(frameIndex);
          }
        };
        img.onerror = () => {
          console.error(`[HeroSequenceCanvas] Failed to load frame ${i}: ${getFramePath(i)}`);
        };
        img.src = getFramePath(i);
      }
    };

    // Check if frame 1 is already cached/loaded
    if (imagesRef.current[0] && imagesRef.current[0].complete && imagesRef.current[0].naturalWidth > 0) {
      setFirstFrameReady(true);
      drawFrame(0);
      preloadRemaining();
      return;
    }

    const firstImg = new Image();
    const onFirstLoad = () => {
      imagesRef.current[0] = firstImg;
      if (!isCancelled) {
        setFirstFrameReady(true);
      }
      drawFrame(0);
      preloadRemaining();
    };

    firstImg.onload = onFirstLoad;
    firstImg.onerror = () => {
      console.error(`[HeroSequenceCanvas] Failed to load initial frame 1: ${getFramePath(1)}`);
    };
    firstImg.src = getFramePath(1);

    if (firstImg.complete && firstImg.naturalWidth > 0) {
      onFirstLoad();
    }

    return () => {
      isCancelled = true;
    };
  }, [drawFrame]);

  // 2. Resize handler with DPR support capped at 2 for performance
  // Note: Only depends on [drawFrame], NOT on progress, so canvas buffer is never wiped during scroll!
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

      // Redraw current frame at new canvas dimensions
      const currentIdx = Math.max(0, Math.min(FRAME_COUNT - 1, Math.floor(progressRef.current * (FRAME_COUNT - 1))));
      drawFrame(currentIdx);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawFrame]);

  // 3. React to progress changes (Scroll scrubbing)
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
    <div className="absolute inset-0 z-10 w-full h-full pointer-events-none overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block transition-opacity duration-700 ease-out"
        style={{ opacity: firstFrameReady ? 1 : 0 }}
      />
      {/* Subtle loader indicator if on slow network */}
      {!firstFrameReady && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-30 bg-black">
          <div className="w-12 h-[1px] bg-champagne/40 animate-pulse" />
          <span className="font-mono text-xs tracking-[0.3em] text-stone uppercase">
            Initiating Sequence {loadPercentage > 0 ? `${loadPercentage}%` : ""}
          </span>
        </div>
      )}
    </div>
  );
}
