"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { PRODUCTS, Product, COMPANY_DETAILS } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";

const TOTAL_FRAMES = 192;
const KEYFRAME_STEP = 2;

export default function UnifiedHomepageExperience() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(1);
  const [currentFrame, setCurrentFrame] = useState<number>(1);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quoteItems, setQuoteItems] = useState<string[]>([]);

  const featuredProducts = PRODUCTS.filter((p) => p.popular).slice(0, 8);

  const toggleQuoteItem = (product: Product) => {
    setQuoteItems((prev) =>
      prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id]
    );
  };

  // Draw 3D almond frame centered without cutoffs
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = container.clientWidth;
    const height = container.clientHeight;
    if (width === 0 || height === 0) return;

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }

    const targetIdx = Math.max(1, Math.min(TOTAL_FRAMES, frameIndex)) - 1;
    let img = imagesRef.current[targetIdx];

    // Nearest loaded keyframe fallback
    if (!img || !img.complete || img.naturalWidth === 0) {
      if (img) {
        img.onload = () => {
          if (currentFrameRef.current === frameIndex) {
            drawFrame(frameIndex);
          }
        };
      }

      let nearestImg: HTMLImageElement | null = null;
      for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
        const prev = imagesRef.current[targetIdx - offset];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          nearestImg = prev;
          break;
        }
        const next = imagesRef.current[targetIdx + offset];
        if (next && next.complete && next.naturalWidth > 0) {
          nearestImg = next;
          break;
        }
      }
      if (nearestImg) {
        img = nearestImg;
      } else {
        return;
      }
    }

    ctx.clearRect(0, 0, width, height);

    // Object-fit contain logic scaled to 85% so almond is NEVER cut off at top or bottom
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = width / height;

    let drawWidth: number, drawHeight: number, offsetX: number, offsetY: number;

    const maxScale = 0.88; // 88% of screen bounds for crisp centered framing

    if (canvasRatio > imgRatio) {
      drawHeight = height * maxScale;
      drawWidth = drawHeight * imgRatio;
      offsetX = (width - drawWidth) / 2;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawWidth = width * maxScale;
      drawHeight = drawWidth / imgRatio;
      offsetX = (width - drawWidth) / 2;
      offsetY = (height - drawHeight) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  // Preload frames with high priority keyframes first
  useEffect(() => {
    imagesRef.current = new Array(TOTAL_FRAMES);

    const loadSingleFrame = (index: number, isPriority: boolean = false) => {
      const paddedIndex = String(index).padStart(4, "0");
      const img = new Image();
      if (isPriority) {
        img.fetchPriority = "high";
      }

      img.onload = () => {
        if (currentFrameRef.current === index) {
          drawFrame(index);
        }
      };

      img.src = `/assets/almond-sequence/frame-${paddedIndex}.png`;
      imagesRef.current[index - 1] = img;

      if (img.complete && img.naturalWidth > 0) {
        if (currentFrameRef.current === index) {
          drawFrame(index);
        }
      }
    };

    // Load keyframes first
    for (let i = 1; i <= TOTAL_FRAMES; i += KEYFRAME_STEP) {
      loadSingleFrame(i, true);
    }
    loadSingleFrame(1, true);
    loadSingleFrame(TOTAL_FRAMES, true);

    // Load all remaining frames
    const timer = setTimeout(() => {
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        if (!imagesRef.current[i - 1]) {
          loadSingleFrame(i, false);
        }
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [drawFrame]);

  // Scroll listener mapped across the 550vh wrapper — progress tracks wrapper position
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let ticking = false;

    const updateFromScroll = () => {
      const rect = wrapper.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const totalScrollable = rect.height - viewportHeight;

      if (totalScrollable <= 0) return;

      const scrollPx = -rect.top;
      let progress = scrollPx / totalScrollable;
      progress = Math.max(0, Math.min(1, progress));

      const targetFrame = Math.min(
        TOTAL_FRAMES,
        Math.max(1, Math.floor(progress * (TOTAL_FRAMES - 1)) + 1)
      );

      if (targetFrame === currentFrameRef.current) return;

      currentFrameRef.current = targetFrame;
      setCurrentFrame(targetFrame);
      drawFrame(targetFrame);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        updateFromScroll();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("scroll", onScroll, { passive: true });
    updateFromScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("scroll", onScroll);
    };
  }, [drawFrame]);

  // ResizeObserver to handle canvas resizing
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleResize = () => {
      drawFrame(currentFrameRef.current);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [drawFrame]);

  // Dynamic Opacities for content stages over the 3D almond sequence
  // Stage 1: Hero Intro (Frames 1-60)
  const stage1Opacity = currentFrame <= 40 ? 1 : currentFrame <= 60 ? (60 - currentFrame) / 20 : 0;

  // Stage 2: Features (Frames 60-120)
  const stage2Opacity =
    currentFrame < 50 ? 0 :
    currentFrame <= 70 ? (currentFrame - 50) / 20 :
    currentFrame <= 100 ? 1 :
    currentFrame <= 120 ? (120 - currentFrame) / 20 : 0;

  // Stage 3: Wholesale Inquiry (Frames 120-192)
  const stage3Opacity = currentFrame < 130 ? 0 : currentFrame <= 150 ? (currentFrame - 130) / 20 : 1;

  return (
    <div ref={wrapperRef} className="relative h-[550vh] w-full bg-[#0d0c0a]">
      {/* Pinned Sticky Canvas Background */}
      <div
        ref={containerRef}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-contain"
        />

        {/* Light vignette overlay to let animation pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none" />

        {/* Interactive Content Layers Over 3D Animation */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 md:p-8 pt-20">

          {/* STAGE 1: Hero Header */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-300 ease-out px-4 pt-16"
            style={{
              opacity: stage1Opacity,
              transform: `translateY(${(1 - stage1Opacity) * -20}px)`,
              pointerEvents: stage1Opacity > 0.2 ? "auto" : "none",
            }}
          >
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black text-white tracking-tighter uppercase drop-shadow-2xl">
              JJGM & CO
            </h1>
            <p className="mt-4 text-xl sm:text-3xl md:text-4xl font-light text-amber-200 tracking-widest uppercase drop-shadow-lg">
              Premium Wholesale Nuts & Fine Foods
            </p>

            <div className="absolute bottom-12 flex flex-col items-center gap-2 text-amber-400 animate-bounce">
              <span className="text-xs uppercase tracking-widest font-bold">Scroll to explore</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          {/* STAGE 2: Features */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out px-4 pt-16"
            style={{
              opacity: stage2Opacity,
              transform: `scale(${0.95 + stage2Opacity * 0.05})`,
              pointerEvents: stage2Opacity > 0.2 ? "auto" : "none",
            }}
          >
            <div className="flex flex-col md:flex-row w-full max-w-6xl justify-between items-center gap-10 md:px-12">
              <div className="max-w-sm bg-black/20 p-8 rounded-3xl backdrop-blur-md space-y-3 text-center border border-white/5">
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider">Premium Quality</h3>
                <p className="text-base text-gray-200 font-light">
                  The finest selection of artisanal nuts and savory snacks, roasted to perfection.
                </p>
              </div>

              <div className="max-w-sm bg-black/20 p-8 rounded-3xl backdrop-blur-md space-y-3 text-center border border-white/5 self-end md:self-auto">
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider">Direct Wholesale</h3>
                <p className="text-base text-gray-200 font-light">
                  Supplying supermarkets and catering businesses across the UK with fast fulfillment.
                </p>
              </div>
            </div>
          </div>

          {/* STAGE 3: Wholesale Inquiry */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-300 ease-out px-4 pt-16"
            style={{
              opacity: stage3Opacity,
              transform: `translateY(${(1 - stage3Opacity) * 30}px)`,
              pointerEvents: stage3Opacity > 0.2 ? "auto" : "none",
            }}
          >
            <div className="max-w-3xl bg-black/40 p-10 rounded-[2.5rem] backdrop-blur-xl space-y-8 border border-white/10">
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight uppercase">
                Partner With Us
              </h2>

              <p className="text-lg text-gray-200 max-w-xl mx-auto font-light">
                Direct UK Trade Distribution. Ready to elevate your product offerings?
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                <Link
                  href="/products"
                  className="w-full sm:w-auto px-10 py-4 bg-amber-500 text-black font-extrabold text-sm uppercase tracking-widest rounded-full hover:bg-amber-400 transition-all duration-300 shadow-xl hover:scale-105"
                >
                  View Catalog
                </Link>

                <Link
                  href="/inquiry"
                  className="w-full sm:w-auto px-10 py-4 bg-transparent text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white/10 transition-all border-2 border-white/20"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onToggleQuote={toggleQuoteItem}
        isInQuote={selectedProduct ? quoteItems.includes(selectedProduct.id) : false}
      />
    </div>
  );
}
