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

          <canvas
            ref={canvasRef}
            className="absolute inset-0 block h-full w-full bg-white"
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

          {/* Scroll-triggered animated text overlays - completely redesigned */}
          <div className="absolute inset-0 pointer-events-none">

            {/* Text 1: Key Message - Left Side (same timing as products) */}
            <div
              className="absolute top-[30%] left-5 right-5 sm:left-8 sm:right-auto md:top-[40%] md:left-[8%]"
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

            {/* Text 2: Product Range - Right Side Vertical (same timing as UK Trade) */}
            <div
              className="absolute bottom-[30%] right-5 left-5 text-right sm:right-8 sm:left-auto md:top-[35%] md:bottom-auto md:right-[8%]"
              style={{
                opacity: getTextOpacity(0.08, 0.18, 0.32),
                transform: `translateX(${(1 - getTextOpacity(0.08, 0.18, 0.32)) * 40}px)`,
              }}
            >
              <div className="text-xl sm:text-2xl md:text-4xl font-semibold text-black tracking-tight leading-snug">
                Nuts
              </div>
              <div className="text-xl sm:text-2xl md:text-4xl font-semibold text-black tracking-tight leading-snug mt-0.5">
                Wafers
              </div>
              <div className="text-xl sm:text-2xl md:text-4xl font-semibold text-black tracking-tight leading-snug mt-0.5">
                Confectionery
              </div>
            </div>

            {/* Text 3: Value Prop - Upper Left (Slide 2) */}
            <div
              className="absolute top-[25%] left-[20%] max-w-[44%] sm:left-[24%] md:top-[10%] md:left-[18%] lg:left-[22%]"
              style={{
                opacity: getTextOpacity(0.42, 0.52, 0.66),
                transform: `translateX(${(1 - getTextOpacity(0.42, 0.52, 0.66)) * -40}px)`,
              }}
            >
              <h2 className="text-xl sm:text-2xl md:text-5xl font-bold text-black tracking-tight leading-tight whitespace-nowrap">
                Trade Pricing
              </h2>
              <p className="text-sm sm:text-base md:text-3xl font-light text-black/60 tracking-wide mt-0.5 whitespace-nowrap">
                Hounslow Based
              </p>
            </div>

            {/* Text 4: Final Message - Right Side (same timing as Trade Pricing) */}
            <div
              className="absolute bottom-[20%] right-[20%] max-w-[44%] text-right sm:right-[25%] md:bottom-[15%] md:right-[20%] lg:right-[15%]"
              style={{
                opacity: getTextOpacity(0.42, 0.52, 0.66),
                transform: `translateX(${(1 - getTextOpacity(0.42, 0.52, 0.66)) * 40}px)`,
              }}
            >
              <h2 className="text-xl sm:text-2xl md:text-5xl font-bold text-black tracking-tight leading-tight whitespace-nowrap">
                Wholesale Excellence
              </h2>
              <p className="text-xs sm:text-base md:text-xl font-light text-black/70 tracking-wide mt-1">
                Trusted by UK Retailers
              </p>
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

      {/* Static content — appears only after the animation section ends */}
      <section className="relative bg-[#F7F5F1] px-4 pt-4 sm:pt-8 pb-6 sm:px-6 md:pt-16 md:pb-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Image — Handshake / Partnership */}
            <div className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-3xl border border-black/5 shadow-2xl shadow-black/10">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/business-partnership.jpg"
                    alt="Business partnership handshake"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 space-y-4 text-center sm:space-y-6 lg:order-2 lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/5 px-3.5 py-1 text-xs font-semibold tracking-widest text-black/60">
                Direct UK Trade Distribution
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-5xl md:text-6xl">
                Partner With Us
              </h2>

              <p className="mx-auto max-w-xl text-sm font-medium leading-relaxed text-black/60 sm:text-lg lg:mx-0">
                Ready to elevate your product offerings with a premium selection?
              </p>

              <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row sm:gap-6 lg:justify-start">
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
            <div className="rounded-3xl border border-black/5 bg-gray-50 p-8 shadow-sm transition-all hover:border-black/10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-lg font-bold text-white">
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
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-lg font-bold text-white">
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
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-lg font-bold text-white">
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
