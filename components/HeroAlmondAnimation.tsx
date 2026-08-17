"use client";

import React, { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Product } from "@/data/products";
import ProductModal from "@/components/ProductModal";

const TOTAL_FRAMES = 95;
const FRAME_PATH = "/assets/almond-sequence";
const SCROLL_HEIGHT_VH = 380;

function frameSrc(index: number): string {
  return `${FRAME_PATH}/ezgif-frame-${String(index).padStart(3, "0")}.jpg`;
}

function getLoadedImage(
  images: HTMLImageElement[],
  index: number
): HTMLImageElement | null {
  const clamped = Math.max(0, Math.min(TOTAL_FRAMES - 1, index));
  const img = images[clamped];
  if (img?.complete && img.naturalWidth > 0) return img;

  for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
    const prev = images[clamped - offset];
    if (prev?.complete && prev.naturalWidth > 0) return prev;
    const next = images[clamped + offset];
    if (next?.complete && next.naturalWidth > 0) return next;
  }

  return null;
}

export default function UnifiedHomepageExperience() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const progressRef = useRef(0);
  const lastDrawnFrameRef = useRef(-1);
  const rafRef = useRef<number | null>(null);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(
    null
  );
  const [quoteItems, setQuoteItems] = React.useState<string[]>([]);

  const toggleQuoteItem = (product: Product) => {
    setQuoteItems((prev) =>
      prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id]
    );
  };

  const computeContainRect = useCallback(
    (
      img: HTMLImageElement,
      width: number,
      height: number
    ): { x: number; y: number; w: number; h: number } => {
      const imgRatio = img.naturalWidth / img.naturalHeight;
      const viewRatio = width / height;

      // Use contain mode to maintain original size (not zoomed)
      if (viewRatio > imgRatio) {
        const drawHeight = height;
        const drawWidth = height * imgRatio;
        return {
          x: (width - drawWidth) / 2,
          y: 0,
          w: drawWidth,
          h: drawHeight,
        };
      }

      const drawWidth = width;
      const drawHeight = width / imgRatio;
      return {
        x: 0,
        y: (height - drawHeight) / 2,
        w: drawWidth,
        h: drawHeight,
      };
    },
    []
  );

  const drawFrame = useCallback(
    (exactFrameIndex: number) => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const frameIndex = Math.max(
        0,
        Math.min(TOTAL_FRAMES - 1, Math.round(exactFrameIndex))
      );

      const img = getLoadedImage(imagesRef.current, frameIndex);
      if (!img) return;

      const ctx = canvas.getContext("2d", { alpha: false });
      if (!ctx) return;

      const width = container.clientWidth;
      const height = container.clientHeight;
      if (width === 0 || height === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const canvasWidth = Math.round(width * dpr);
      const canvasHeight = Math.round(height * dpr);

      if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) {
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        lastDrawnFrameRef.current = -1;
      }

      if (lastDrawnFrameRef.current === frameIndex) return;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      // Fill with white background first to avoid black gaps
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, width, height);

      const rect = computeContainRect(img, width, height);
      ctx.drawImage(img, rect.x, rect.y, rect.w, rect.h);

      lastDrawnFrameRef.current = frameIndex;
    },
    [computeContainRect]
  );

  useEffect(() => {
    imagesRef.current = new Array(TOTAL_FRAMES);

    const loadFrame = (index: number, priority = false) => {
      if (imagesRef.current[index]?.src) return;

      const img = new Image();
      if (priority) {
        img.fetchPriority = "high";
      }
      img.decoding = "async";
      img.onload = () => {
        lastDrawnFrameRef.current = -1;
        drawFrame(progressRef.current * (TOTAL_FRAMES - 1));
      };
      img.src = frameSrc(index + 1);
      imagesRef.current[index] = img;
    };

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      loadFrame(i, i === 0 || i === TOTAL_FRAMES - 1 || i % 3 === 0);
    }
  }, [drawFrame]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const updateFromScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollable = rect.height - viewportHeight;

      if (totalScrollable <= 0) return;

      const scrollPx = -rect.top;
      const progress = Math.max(0, Math.min(1, scrollPx / totalScrollable));

      progressRef.current = progress;
      setScrollProgress(progress);
      drawFrame(progress * (TOTAL_FRAMES - 1));
    };

    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        updateFromScroll();
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateFromScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [drawFrame]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(() => {
      lastDrawnFrameRef.current = -1;
      drawFrame(progressRef.current * (TOTAL_FRAMES - 1));
    });

    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, [drawFrame]);

  // Calculate opacity for each text segment based on scroll progress
  const getTextOpacity = (startProgress: number, peakProgress: number, endProgress: number) => {
    const progress = scrollProgress;
    if (progress < startProgress || progress > endProgress) return 0;
    if (progress < peakProgress) {
      return (progress - startProgress) / (peakProgress - startProgress);
    }
    return 1 - (progress - peakProgress) / (endProgress - peakProgress);
  };

  return (
    <div className="w-full bg-white">
      {/* Scroll-driven animation only — no overlay content */}
      <div
        ref={wrapperRef}
        className="relative w-full bg-white"
        style={{ height: `${SCROLL_HEIGHT_VH}vh`, paddingTop: '1cm' }}
      >
        <div
          ref={containerRef}
          className="sticky top-0 h-screen w-full overflow-hidden bg-white"
        >
          <canvas
            ref={canvasRef}
            className="absolute inset-0 block h-full w-full bg-white"
            aria-hidden="true"
          />

          {/* Scroll-triggered animated text overlays */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            {/* Text 1: Opening - Top Left */}
            <div
              className="absolute top-[15%] left-[10%] text-black text-2xl md:text-4xl font-black tracking-tight transition-all duration-700"
              style={{
                opacity: getTextOpacity(0, 0.08, 0.16),
                transform: `translateY(${(1 - getTextOpacity(0, 0.08, 0.16)) * 20}px)`,
              }}
            >
              Premium Wholesale
            </div>

            {/* Text 2: Early - Right Side */}
            <div
              className="absolute top-[25%] right-[12%] text-black text-xl md:text-3xl font-bold tracking-wide transition-all duration-700"
              style={{
                opacity: getTextOpacity(0.12, 0.20, 0.28),
                transform: `translateX(${(1 - getTextOpacity(0.12, 0.20, 0.28)) * -20}px)`,
              }}
            >
              JJGM & CO
            </div>

            {/* Text 3: Quarter - Bottom Left */}
            <div
              className="absolute bottom-[30%] left-[8%] text-black text-lg md:text-2xl font-semibold tracking-wider transition-all duration-700"
              style={{
                opacity: getTextOpacity(0.24, 0.32, 0.40),
                transform: `translateY(${(1 - getTextOpacity(0.24, 0.32, 0.40)) * -20}px)`,
              }}
            >
              Nuts • Wafers • Confectionery
            </div>

            {/* Text 4: Mid - Center Top */}
            <div
              className="absolute top-[18%] left-1/2 -translate-x-1/2 text-black text-2xl md:text-4xl font-black tracking-tight transition-all duration-700"
              style={{
                opacity: getTextOpacity(0.36, 0.44, 0.52),
                transform: `translate(-50%, ${(1 - getTextOpacity(0.36, 0.44, 0.52)) * 30}px)`,
              }}
            >
              UK Distribution
            </div>

            {/* Text 5: Mid-Late - Right Bottom */}
            <div
              className="absolute bottom-[25%] right-[10%] text-black text-xl md:text-3xl font-bold tracking-wide transition-all duration-700"
              style={{
                opacity: getTextOpacity(0.48, 0.56, 0.64),
                transform: `translateX(${(1 - getTextOpacity(0.48, 0.56, 0.64)) * -30}px)`,
              }}
            >
              100+ Products
            </div>

            {/* Text 6: Late - Left Center */}
            <div
              className="absolute top-[45%] left-[12%] text-black text-lg md:text-2xl font-semibold tracking-wider transition-all duration-700"
              style={{
                opacity: getTextOpacity(0.60, 0.68, 0.76),
                transform: `translateY(${(1 - getTextOpacity(0.60, 0.68, 0.76)) * 20}px)`,
              }}
            >
              Trade-Focused Pricing
            </div>

            {/* Text 7: Final - Center */}
            <div
              className="absolute top-[35%] left-1/2 -translate-x-1/2 text-center transition-all duration-700"
              style={{
                opacity: getTextOpacity(0.72, 0.80, 0.88),
                transform: `translate(-50%, ${(1 - getTextOpacity(0.72, 0.80, 0.88)) * -30}px) scale(${0.9 + getTextOpacity(0.72, 0.80, 0.88) * 0.1})`,
              }}
            >
              <div className="text-black text-3xl md:text-5xl font-black tracking-tight">
                Built for UK Retailers
              </div>
              <div className="text-black/70 text-base md:text-xl font-medium tracking-wide mt-2">
                Hounslow • London
              </div>
            </div>
          </div>
        </div>

        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onToggleQuote={toggleQuoteItem}
          isInQuote={
            selectedProduct ? quoteItems.includes(selectedProduct.id) : false
          }
        />
      </div>

      {/* Static content — appears only after the animation section ends */}
      <section className="relative bg-white px-4 py-24 sm:px-6 md:py-32 lg:px-8 -mt-1">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/5 px-3 py-1 text-xs font-semibold tracking-widest text-black/60">
            Direct UK Trade Distribution
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-black sm:text-6xl">
            Partner With Us
          </h2>

          <p className="mx-auto max-w-xl text-sm font-medium leading-relaxed text-black/60 sm:text-lg">
            Ready to elevate your product offerings with a premium selection?
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row sm:gap-6">
            <Link
              href="/products"
              className="w-full rounded-full bg-black px-8 py-3.5 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-black/80 sm:w-auto"
            >
              View Catalog
            </Link>

            <Link
              href="/inquiry"
              className="w-full rounded-full border border-black/20 bg-transparent px-8 py-3.5 text-sm font-semibold text-black transition-all hover:bg-black/5 sm:w-auto"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="relative bg-white px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-black/70">
            <span className="h-2 w-2 animate-pulse rounded-full bg-black/40" />
            UK Trade & Wholesale Distribution
          </div>

          <h2 className="text-5xl font-semibold tracking-tight text-black sm:text-7xl">
            Elevate Your Offerings
          </h2>

          <p className="mx-auto max-w-2xl text-xl font-medium leading-relaxed text-black/60 sm:text-2xl">
            Direct UK Trade Distribution. Seamless supply for retailers and
            supermarkets.
          </p>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 pt-10 pb-6 text-left sm:grid-cols-3">
            <div className="rounded-3xl border border-black/5 bg-gray-50 p-8 shadow-sm transition-all hover:border-black/10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-lg font-bold text-white">
                1
              </div>
              <h3 className="mb-3 text-xl font-semibold text-black">
                Direct Distribution
              </h3>
              <p className="text-base font-medium text-black/60">
                Competitive bulk wholesale pricing direct to retailers,
                supermarkets, and catering.
              </p>
            </div>

            <div className="rounded-3xl border border-black/5 bg-gray-50 p-8 shadow-sm transition-all hover:border-black/10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-lg font-bold text-white">
                2
              </div>
              <h3 className="mb-3 text-xl font-semibold text-black">
                Premium Selection
              </h3>
              <p className="text-base font-medium text-black/60">
                Fresh almonds, roasted nuts, crisps, confectionery, wafers, and
                protein snacks.
              </p>
            </div>

            <div className="rounded-3xl border border-black/5 bg-gray-50 p-8 shadow-sm transition-all hover:border-black/10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-lg font-bold text-white">
                3
              </div>
              <h3 className="mb-3 text-xl font-semibold text-black">
                Fast Supply
              </h3>
              <p className="text-base font-medium text-black/60">
                Reliable nationwide logistics with dedicated trade customer
                service.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 pt-8 sm:flex-row sm:gap-6">
            <Link
              href="/products"
              className="w-full rounded-full bg-black px-10 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-black/80 sm:w-auto"
            >
              View Catalog
            </Link>

            <Link
              href="/inquiry"
              className="w-full rounded-full border border-black/20 bg-transparent px-10 py-4 text-base font-semibold text-black transition-all hover:bg-black/5 sm:w-auto"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
