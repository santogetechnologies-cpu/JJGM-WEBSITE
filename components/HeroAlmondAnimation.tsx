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

  // Draw 3D almond frame fitting edge-to-edge across side screens without gaps
  // Positioned 2cm (~75px) below the fixed header section (80px header height)
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

    // Position hero animation 2cm (~75px) below header section (80px header height)
    const HEADER_HEIGHT = 80;
    const TWO_CM_GAP = 75; // 2 cm ≈ 75px
    const TOP_OFFSET = HEADER_HEIGHT + TWO_CM_GAP; // 155px top offset

    const availableHeight = Math.max(100, height - TOP_OFFSET);
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const availableRatio = width / availableHeight;

    let drawWidth: number, drawHeight: number, offsetX: number, offsetY: number;

    if (availableRatio > imgRatio) {
      drawWidth = width;
      drawHeight = width / imgRatio;
      offsetX = 0;
      offsetY = TOP_OFFSET + (availableHeight - drawHeight) / 2;
      if (offsetY < TOP_OFFSET) {
        offsetY = TOP_OFFSET;
      }
    } else {
      drawHeight = availableHeight;
      drawWidth = availableHeight * imgRatio;
      offsetX = (width - drawWidth) / 2;
      offsetY = TOP_OFFSET;
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

  // Show "Partner With Us" card smoothly when animation reaches final scenes (Frames 165-192)
  const finalCardOpacity = currentFrame < 165 ? 0 : Math.min(1, (currentFrame - 165) / 20);

  return (
    <div className="w-full bg-black">
      <div ref={wrapperRef} className="relative h-[550vh] w-full bg-black">
        {/* Pinned Sticky Canvas Background */}
        <div
          ref={containerRef}
          className="sticky top-0 h-screen w-full overflow-hidden bg-black"
        >
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Subtle dark gradient overlay to make text card pop */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none" />

          {/* Interactive Content Layer Over 3D Animation */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-end p-4 md:p-8 pb-12 sm:pb-16 md:pb-20 pointer-events-none">

            {/* Partner With Us Card - Displays evenly below hero animation as animation ends */}
            <div
              className="flex flex-col items-center justify-center text-center transition-all duration-500 ease-out px-4 w-full max-w-4xl"
              style={{
                opacity: finalCardOpacity,
                transform: `translateY(${(1 - finalCardOpacity) * 30}px) scale(${0.95 + finalCardOpacity * 0.05})`,
                pointerEvents: finalCardOpacity > 0.3 ? "auto" : "none",
              }}
            >
              <div className="w-full bg-black/80 p-6 sm:p-10 rounded-[2.5rem] backdrop-blur-2xl space-y-6 border border-amber-500/30 shadow-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest border border-amber-500/30">
                  Direct UK Trade Distribution
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
                  Partner With Us
                </h2>

                <p className="text-sm sm:text-lg text-gray-200 max-w-xl mx-auto font-light leading-relaxed">
                  Direct UK Trade Distribution. Ready to elevate your product offerings?
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-2">
                  <Link
                    href="/products"
                    className="w-full sm:w-auto px-8 py-3.5 bg-amber-500 text-black font-extrabold text-xs sm:text-sm uppercase tracking-widest rounded-full hover:bg-amber-400 transition-all duration-300 shadow-xl hover:scale-105"
                  >
                    View Catalog
                  </Link>

                  <Link
                    href="/inquiry"
                    className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-white font-bold text-xs sm:text-sm uppercase tracking-widest rounded-full hover:bg-white/10 transition-all border-2 border-white/20 hover:border-white/40"
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

      {/* Dedicated "Partner With Us" Section displayed below after animation ends */}
      <section className="relative bg-gradient-to-b from-black via-[#14120e] to-[#0d0c0a] py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-amber-900/30">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            UK Trade & Wholesale Distribution
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
            Partner With Us
          </h2>

          <p className="text-lg sm:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Direct UK Trade Distribution. Ready to elevate your product offerings?
          </p>

          {/* Trade Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 pb-4 max-w-4xl mx-auto text-left">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-amber-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-lg mb-4">
                01
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Direct UK Distribution</h3>
              <p className="text-sm text-gray-400">Competitive bulk wholesale pricing direct to retailers, supermarkets, and catering.</p>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-amber-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-lg mb-4">
                02
              </div>
              <h3 className="text-lg font-bold text-white mb-2">100+ Premium Products</h3>
              <p className="text-sm text-gray-400">Fresh almonds, roasted nuts, crisps, confectionery, wafers, and protein snacks.</p>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-amber-500/40 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-lg mb-4">
                03
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Fast Nationwide Supply</h3>
              <p className="text-sm text-gray-400">Reliable logistics based in Hounslow with dedicated trade customer service.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
            <Link
              href="/products"
              className="w-full sm:w-auto px-10 py-4 bg-amber-500 text-black font-extrabold text-sm uppercase tracking-widest rounded-full hover:bg-amber-400 transition-all duration-300 shadow-xl hover:scale-105"
            >
              View Catalog
            </Link>

            <Link
              href="/inquiry"
              className="w-full sm:w-auto px-10 py-4 bg-transparent text-white font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white/10 transition-all border-2 border-white/20 hover:border-white/40"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
