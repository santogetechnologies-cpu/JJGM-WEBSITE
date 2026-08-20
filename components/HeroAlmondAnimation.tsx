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

function LeafSprig({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 60 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-9 h-4 sm:w-11 sm:h-5 text-[#163820] shrink-0 ${flip ? "-scale-x-100" : ""} ${className}`}
    >
      {/* Central horizontal stem */}
      <path
        d="M2 10H52"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      {/* Terminal tip leaf */}
      <path
        d="M58 10C52 7.5 45 8.2 43 10C45 11.8 52 12.5 58 10Z"
        fill="currentColor"
      />
      {/* Outer pair of leaves */}
      <path
        d="M40 10C36 4.5 27 4.5 24 9C29 9 36 9.8 40 10Z"
        fill="currentColor"
      />
      <path
        d="M40 10C36 15.5 27 15.5 24 11C29 11 36 10.2 40 10Z"
        fill="currentColor"
      />
      {/* Inner pair of leaves */}
      <path
        d="M25 10C21 5.5 13 5.5 10 9C15 9 21 9.8 25 10Z"
        fill="currentColor"
      />
      <path
        d="M25 10C21 14.5 13 14.5 10 11C15 11 21 10.2 25 10Z"
        fill="currentColor"
      />
    </svg>
  );
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
      const isMobile = width < 768;
      // On mobile only, shift the almond slightly down (+4% viewport height)
      const mobileYShift = isMobile ? Math.round(height * 0.04) : 0;

      // Use contain mode to maintain original size (not zoomed)
      if (viewRatio > imgRatio) {
        const drawHeight = height;
        const drawWidth = height * imgRatio;
        return {
          x: (width - drawWidth) / 2,
          y: mobileYShift,
          w: drawWidth,
          h: drawHeight,
        };
      }

      const drawWidth = width;
      const drawHeight = width / imgRatio;
      return {
        x: 0,
        y: (height - drawHeight) / 2 + mobileYShift,
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

      // Mask top and bottom edge lines of image frame across ALL screen sizes (mobile, tablet, desktop, full-screen)
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, Math.floor(rect.y) - 1, width, 4);
      ctx.fillRect(0, Math.floor(rect.y + rect.h) - 2, width, 4);

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
    <div className="w-full bg-white relative">
      {/* Leave space for navbar */}
      <div className="h-12 md:h-20 w-full bg-white" />

      {/* White line to cover top gap */}
      <div className="w-full h-1 bg-white relative z-10" style={{ marginTop: '-1px' }} />

      {/* Scroll-driven animation only — no overlay content */}
      <div
        ref={wrapperRef}
        className="relative w-full bg-white h-[200vh] md:h-[380vh]"
        style={{
          marginTop: '0',
          paddingTop: '0px',
          paddingBottom: '0px'
        }}
      >
        {/* White mask overlays to hide top & bottom thin border lines across ALL breakpoints */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-white z-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-3 bg-white z-20 pointer-events-none" />

        <div
          ref={containerRef}
          className="sticky top-0 h-screen w-full overflow-hidden bg-white"
          style={{
            margin: '0',
            padding: '0',
            border: 'none',
            outline: 'none',
            lineHeight: '0',
            fontSize: '0'
          }}
        >
          {/* White mask overlays to hide subpixel lines across ALL breakpoints */}
          <div className="absolute top-0 left-0 right-0 h-3 bg-white z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-3 bg-white z-20 pointer-events-none" />

          {/* ─── LAYER 1: MOBILE-ONLY BACKGROUND ARTWORK (Green Brush Circle + Centered "Taste. Quality. Value.") ─── */}
          <div
            className="mobile-only-hero-artwork block md:hidden absolute inset-0 z-0 pointer-events-none transition-opacity duration-150"
            style={{
              opacity: scrollProgress > 0.08 ? 0 : Math.max(0, 1 - scrollProgress / 0.07),
              transform: `translateY(${-scrollProgress * 80}px)`,
              pointerEvents: 'none',
            }}
          >
            {/* Green Brush Circle + Typography positioned in upper-middle area BEHIND the almond */}
            <div className="absolute top-[-5%] sm:top-[-3%] left-1/2 -translate-x-1/2 w-[90vw] max-w-[380px] aspect-[682/1024] flex items-center justify-center pointer-events-none">
              {/* Green Brush Circle Asset */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/brush-circle.png"
                alt="Decorative green brush circle"
                className="w-full h-full object-contain pointer-events-none select-none"
              />

              {/* Typography Block with comfortable breathing room below the top brush stroke */}
              <div className="absolute inset-x-0 top-[27%] sm:top-[25%] flex flex-col items-center justify-start pointer-events-none">
                <div className="flex flex-col text-left space-y-0.5 select-none pl-2">
                  <span className="font-serif text-[40px] sm:text-[44px] text-[#163820] leading-[1.08] tracking-tight font-normal">
                    Taste.
                  </span>
                  <span className="font-serif text-[40px] sm:text-[44px] text-[#163820] leading-[1.08] tracking-tight font-normal -ml-2.5">
                    Quality.
                  </span>
                  <span className="font-serif text-[40px] sm:text-[44px] text-[#BC531A] leading-[1.08] tracking-tight font-normal pl-1">
                    Value.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ─── LAYER 2: ANIMATED ALMOND CANVAS (IN FRONT OF GREEN CIRCLE) ─── */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 block h-full w-full bg-white z-10 mix-blend-multiply md:mix-blend-normal"
            style={{
              margin: '0',
              padding: '0',
              border: 'none',
              outline: 'none',
              display: 'block',
              lineHeight: '0',
              fontSize: '0'
            }}
            aria-hidden="true"
          />

          {/* ─── LAYER 3: FOREGROUND OVERLAYS (JJGM & CO Leaf Footer + Animated Text Overlays) ─── */}
          <div className="absolute inset-0 z-20 pointer-events-none">

            {/* Mobile JJGM & CO Leaf Footer (Moved Upward from bottom edge) */}
            <div
              className="mobile-only-hero-artwork block md:hidden absolute inset-0 pointer-events-none transition-opacity duration-150"
              style={{
                opacity: scrollProgress > 0.08 ? 0 : Math.max(0, 1 - scrollProgress / 0.07),
                transform: `translateY(${-scrollProgress * 80}px)`,
                pointerEvents: 'none',
              }}
            >
              <div className="absolute bottom-[10%] sm:bottom-[12%] left-1/2 -translate-x-1/2 flex items-center justify-center gap-3 sm:gap-4 w-full px-4 pointer-events-none">
                <LeafSprig />
                <span className="font-serif font-black text-xl sm:text-2xl tracking-[0.22em] text-[#163820] uppercase whitespace-nowrap select-none">
                  JJGM & CO
                </span>
                <LeafSprig flip />
              </div>
            </div>

            {/* ─── ORIGINAL ANIMATED TEXT OVERLAYS (STRICTLY PRESERVED & VISIBLE ON ALL BREAKPOINTS) ─── */}
            <div className="absolute inset-0 pointer-events-none">

              {/* Text 1: Key Message - Left Side (Timing: 0.08 -> 0.32) */}
              <div
                className="absolute top-[26%] sm:top-[28%] left-4 sm:left-6 md:top-[40%] md:left-[8%]"
                style={{
                  opacity: getTextOpacity(0.08, 0.18, 0.32),
                  transform: `translateX(${(1 - getTextOpacity(0.08, 0.18, 0.32)) * -40}px)`,
                }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black tracking-tight leading-tight">
                  UK Trade
                </h2>
                <p className="text-sm sm:text-base md:text-3xl font-light text-black/60 tracking-wide mt-1">
                  100+ Products
                </p>
              </div>

              {/* Text 2: Product Range - Right Side Vertical (Timing: 0.08 -> 0.32) */}
              <div
                className="absolute top-[72%] sm:top-[72%] right-4 sm:right-6 text-right md:top-[35%] md:right-[8%]"
                style={{
                  opacity: getTextOpacity(0.08, 0.18, 0.32),
                  transform: `translateX(${(1 - getTextOpacity(0.08, 0.18, 0.32)) * 40}px)`,
                }}
              >
                <div className="text-lg sm:text-xl md:text-4xl font-semibold text-black tracking-tight leading-snug">
                  Nuts
                </div>
                <div className="text-lg sm:text-xl md:text-4xl font-semibold text-black tracking-tight leading-snug mt-1">
                  Wafers
                </div>
                <div className="text-lg sm:text-xl md:text-4xl font-semibold text-black tracking-tight leading-snug mt-1">
                  Confectionery
                </div>
              </div>

              {/* Text 3: Value Prop - Upper Left (Slide 2, Timing: 0.42 -> 0.66) */}
              <div
                className="absolute top-[18%] left-5 sm:left-8 md:top-[10%] md:left-[18%] lg:left-[22%] max-w-[80%] md:max-w-[44%]"
                style={{
                  opacity: getTextOpacity(0.42, 0.52, 0.66),
                  transform: `translateX(${(1 - getTextOpacity(0.42, 0.52, 0.66)) * -40}px)`,
                }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black tracking-tight leading-tight whitespace-nowrap">
                  Trade Pricing
                </h2>
                <p className="text-sm sm:text-base md:text-3xl font-light text-black/60 tracking-wide mt-0.5 whitespace-nowrap">
                  Hounslow Based
                </p>
              </div>

              {/* Text 4: Final Message - Right Side (Timing: 0.42 -> 0.66) */}
              <div
                className="absolute bottom-[18%] right-5 sm:right-8 md:bottom-[15%] md:right-[20%] lg:right-[15%] max-w-[80%] md:max-w-[44%] text-right"
                style={{
                  opacity: getTextOpacity(0.42, 0.52, 0.66),
                  transform: `translateX(${(1 - getTextOpacity(0.42, 0.52, 0.66)) * 40}px)`,
                }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black tracking-tight leading-tight whitespace-nowrap">
                  Wholesale Excellence
                </h2>
                <p className="text-xs sm:text-sm md:text-xl font-light text-black/70 tracking-wide mt-1">
                  Trusted by UK Retailers
                </p>
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

      {/* White line to cover bottom gap */}
      <div className="w-full h-1 bg-white relative z-10" style={{ marginBottom: '-1px' }} />

      {/* Static content — Premium Redesigned "Partner With Us" Section */}
      <section className="relative bg-gradient-to-b from-[#FCFAF6] via-[#F8F6F0] to-[#FCFAF6] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-stone-200/60 overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/[0.025] blur-3xl rounded-full pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">

            {/* Left Image — Dominant, Clean Rounded Container */}
            <div className="order-1 lg:col-span-6">
              <div className="relative overflow-hidden rounded-3xl lg:rounded-[28px] border border-stone-200/80 shadow-xl shadow-stone-900/5 bg-stone-100 group">
                <div className="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/business-partnership.jpg"
                    alt="Business partnership handshake"
                    className="h-full w-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Right Text Content — Strong Hierarchy & Generous Whitespace */}
            <div className="order-2 lg:col-span-6 space-y-6 text-left">

              {/* Top Refined Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-bold uppercase tracking-widest shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span>Direct UK Trade Distribution</span>
              </div>

              {/* Heading */}
              <div className="space-y-2 w-fit">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-stone-950 leading-[1.08]">
                  Partner <span className="text-amber-600">With Us</span>
                </h2>
                <div className="w-12 h-1 bg-amber-500 rounded-full mx-auto" />
              </div>

              {/* Description */}
              <p className="text-stone-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl">
                Ready to elevate your product offerings with a premium selection? Partner directly with JJGM & CO. for dependable wholesale distribution across the UK.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-stone-950 text-white font-bold text-sm tracking-wide shadow-md hover:bg-stone-800 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
                >
                  <span>View Catalog</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>

                <Link
                  href="/inquiry"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-stone-900 font-bold text-sm tracking-wide border border-stone-300 hover:border-stone-900 hover:bg-stone-50 transition-all duration-200 shadow-2xs"
                >
                  <span>Request Quote</span>
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─── NEW: EXPLORE OUR PRODUCT RANGE SECTION ─── */}
      <section className="relative bg-[#FCFAF6] py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-t border-stone-200/60 overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-amber-500/[0.03] blur-3xl rounded-full pointer-events-none" />

        <div className="mx-auto max-w-7xl relative z-10 space-y-12 sm:space-y-14">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-bold uppercase tracking-widest shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>Wholesale Collections</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-stone-950 leading-[1.08]">
              Explore Our <span className="text-amber-600">Product Range</span>
            </h2>

            <p className="text-stone-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed">
              Premium products selected for UK retailers, supermarkets and trade customers.
            </p>
          </div>

          {/* Editorial Asymmetric Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">

            {/* ROW 1: Card 1 — Nuts & Roasted (approx 60% / 7 cols) */}
            <Link
              href="/products"
              className="group relative lg:col-span-7 h-[280px] sm:h-[340px] lg:h-[390px] rounded-[24px] lg:rounded-[28px] overflow-hidden border border-stone-200/80 shadow-md hover:shadow-2xl hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 block cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/categories/nuts-roasted.jpg"
                alt="Nuts & Roasted Wholesale Selection"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 group-hover:from-black/90 transition-colors duration-300" />
              <div className="absolute inset-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-end text-left space-y-2">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30 w-fit backdrop-blur-xs">
                  Direct UK Supply
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                  Nuts & Roasted
                </h3>
                <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-white/90 group-hover:text-amber-400 pt-1 transition-colors duration-200">
                  <span>Explore Category</span>
                  <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </div>
              </div>
            </Link>

            {/* ROW 1: Card 2 — Wafers & Biscuits (approx 40% / 5 cols) */}
            <Link
              href="/products"
              className="group relative lg:col-span-5 h-[280px] sm:h-[340px] lg:h-[390px] rounded-[24px] lg:rounded-[28px] overflow-hidden border border-stone-200/80 shadow-md hover:shadow-2xl hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 block cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/categories/wafers-biscuits.jpg"
                alt="Wafers & Biscuits Wholesale Selection"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 group-hover:from-black/90 transition-colors duration-300" />
              <div className="absolute inset-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-end text-left space-y-2">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30 w-fit backdrop-blur-xs">
                  European Bakery
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                  Wafers & Biscuits
                </h3>
                <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-white/90 group-hover:text-amber-400 pt-1 transition-colors duration-200">
                  <span>Explore Category</span>
                  <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </div>
              </div>
            </Link>

            {/* ROW 2: Card 3 — Savouries (approx 40% / 5 cols) */}
            <Link
              href="/products"
              className="group relative lg:col-span-5 h-[280px] sm:h-[340px] lg:h-[390px] rounded-[24px] lg:rounded-[28px] overflow-hidden border border-stone-200/80 shadow-md hover:shadow-2xl hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 block cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/categories/savouries.jpg"
                alt="Savouries & Crisps Wholesale Selection"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 group-hover:from-black/90 transition-colors duration-300" />
              <div className="absolute inset-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-end text-left space-y-2">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30 w-fit backdrop-blur-xs">
                  Retail Favourites
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                  Savouries
                </h3>
                <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-white/90 group-hover:text-amber-400 pt-1 transition-colors duration-200">
                  <span>Explore Category</span>
                  <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </div>
              </div>
            </Link>

            {/* ROW 2: Card 4 — Confectionery (approx 60% / 7 cols) */}
            <Link
              href="/products"
              className="group relative lg:col-span-7 h-[280px] sm:h-[340px] lg:h-[390px] rounded-[24px] lg:rounded-[28px] overflow-hidden border border-stone-200/80 shadow-md hover:shadow-2xl hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 block cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/categories/confectionery.jpg"
                alt="Confectionery & Chocolates Wholesale Selection"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 group-hover:from-black/90 transition-colors duration-300" />
              <div className="absolute inset-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-end text-left space-y-2">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30 w-fit backdrop-blur-xs">
                  Artisan Chocolates
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                  Confectionery
                </h3>
                <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-white/90 group-hover:text-amber-400 pt-1 transition-colors duration-200">
                  <span>Explore Category</span>
                  <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </div>
              </div>
            </Link>

            {/* ROW 3: Card 5 — Protein & Snacks (100% full-width / 12 cols) */}
            <Link
              href="/products"
              className="group relative lg:col-span-12 h-[260px] sm:h-[320px] lg:h-[360px] rounded-[24px] lg:rounded-[28px] overflow-hidden border border-stone-200/80 shadow-md hover:shadow-2xl hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 block cursor-pointer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/categories/protein-snacks.jpg"
                alt="Protein & Fitness Snacks Wholesale Range"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/15 group-hover:from-black/90 transition-colors duration-300" />
              <div className="absolute inset-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-end text-left space-y-2">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-400/30 w-fit backdrop-blur-xs">
                  High Protein & Energy
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                  Protein & Snacks
                </h3>
                <div className="flex items-center gap-2 text-sm sm:text-base font-semibold text-white/90 group-hover:text-amber-400 pt-1 transition-colors duration-200">
                  <span>Explore Category</span>
                  <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </div>
              </div>
            </Link>

          </div>

        </div>
      </section>

      <section className="relative bg-white px-4 pt-6 pb-16 sm:px-6 md:pt-8 md:pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-6 text-center sm:space-y-8">
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

          {/* Supermarket / Retail Image */}
          <div className="mx-auto max-w-5xl pt-2">
            <div className="relative overflow-hidden rounded-3xl border border-black/5 shadow-2xl shadow-black/10">
              <div className="aspect-[16/9] w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/retail-shopping.jpg"
                  alt="Customer shopping in modern supermarket"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 text-left sm:grid-cols-3">
            <div className="group rounded-3xl border border-black/5 bg-gray-50 p-8 shadow-xs transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.015] hover:border-amber-500/40 hover:bg-white hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:shadow-amber-500/5 cursor-pointer">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-lg font-bold text-white transition-all duration-300 group-hover:scale-105 group-hover:bg-amber-500 group-hover:text-stone-950 group-hover:shadow-md group-hover:shadow-amber-500/20">
                1
              </div>
              <h3 className="mb-3 text-xl font-semibold text-black transition-colors duration-300 group-hover:text-stone-950">
                Direct Distribution
              </h3>
              <p className="text-base font-medium text-black/60 leading-relaxed">
                Competitive bulk wholesale pricing direct to retailers,
                supermarkets, and catering.
              </p>
            </div>

            <div className="group rounded-3xl border border-black/5 bg-gray-50 p-8 shadow-xs transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.015] hover:border-amber-500/40 hover:bg-white hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:shadow-amber-500/5 cursor-pointer">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-lg font-bold text-white transition-all duration-300 group-hover:scale-105 group-hover:bg-amber-500 group-hover:text-stone-950 group-hover:shadow-md group-hover:shadow-amber-500/20">
                2
              </div>
              <h3 className="mb-3 text-xl font-semibold text-black transition-colors duration-300 group-hover:text-stone-950">
                Premium Selection
              </h3>
              <p className="text-base font-medium text-black/60 leading-relaxed">
                Fresh almonds, roasted nuts, crisps, confectionery, wafers, and
                protein snacks.
              </p>
            </div>

            <div className="group rounded-3xl border border-black/5 bg-gray-50 p-8 shadow-xs transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.015] hover:border-amber-500/40 hover:bg-white hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:shadow-amber-500/5 cursor-pointer">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-lg font-bold text-white transition-all duration-300 group-hover:scale-105 group-hover:bg-amber-500 group-hover:text-stone-950 group-hover:shadow-md group-hover:shadow-amber-500/20">
                3
              </div>
              <h3 className="mb-3 text-xl font-semibold text-black transition-colors duration-300 group-hover:text-stone-950">
                Fast Supply
              </h3>
              <p className="text-base font-medium text-black/60 leading-relaxed">
                Reliable nationwide logistics with dedicated trade customer
                service.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row sm:gap-6">
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
