"use client";

import React from "react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onToggleQuote: (product: Product) => void;
  isInQuote: boolean;
}

export default function ProductCard({
  product,
  onQuickView,
  onToggleQuote,
  isInQuote,
}: ProductCardProps) {
  return (
    <div className="group bg-white border border-stone-200/80 hover:border-amber-500/60 rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/10 hover:-translate-y-0.5 flex flex-col justify-between h-full shadow-2xs">
      {/* Product Image Container — Fixed Aspect Ratio & Consistent Height */}
      <div className="relative aspect-[1/0.95] sm:aspect-square w-full bg-stone-50/80 overflow-hidden flex items-center justify-center p-2 sm:p-3 shrink-0">
        {product.badge && (
          <span className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 z-10 px-1.5 py-0.5 bg-amber-500 text-stone-950 font-black text-[8px] sm:text-[9px] uppercase tracking-wider rounded-md shadow-2xs">
            {product.badge}
          </span>
        )}

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain group-hover:scale-[1.03] transition-transform duration-200"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/logo.png"; // Fallback to logo if image fails
            target.onerror = null; // Prevent infinite loop
          }}
        />

        {/* Quick View Overlay Button (Desktop) */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:flex items-center justify-center gap-2 p-3">
          <button
            type="button"
            onClick={() => onQuickView(product)}
            className="px-3 py-1.5 bg-white text-stone-900 font-bold text-[10px] sm:text-xs uppercase tracking-wider rounded-md shadow-md hover:bg-amber-500 transition-colors"
          >
            View Details
          </button>
        </div>
      </div>

      {/* Details Container */}
      <div className="p-2.5 sm:p-3.5 flex-1 flex flex-col justify-between gap-2">
        <div>
          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-amber-600 block truncate">
            {product.category}
          </span>
          <h3 className="text-xs sm:text-sm font-bold text-stone-900 mt-0.5 line-clamp-2 leading-[1.25] min-h-[1.9rem] sm:min-h-[2.2rem]">
            {product.name}
          </h3>

          {/* Case Size */}
          <div className="mt-1 text-[10px] sm:text-xs text-stone-500 font-medium truncate">
            <span className="font-semibold text-stone-700">Case:</span> {product.packageSize}
          </div>
        </div>

        {/* Add to Quote Button */}
        <div className="pt-1.5 border-t border-stone-100">
          <button
            type="button"
            onClick={() => onToggleQuote(product)}
            className={`w-full h-[34px] sm:h-[38px] px-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1 sm:gap-1.5 active:scale-98 cursor-pointer ${isInQuote
              ? "bg-amber-500 text-stone-950 shadow-xs shadow-amber-500/20 font-extrabold"
              : "bg-stone-100/80 text-stone-900 hover:bg-amber-500 hover:text-stone-950 border border-stone-200/80"
              }`}
          >
            {isInQuote ? (
              <>
                <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span className="truncate">Added to Quote</span>
              </>
            ) : (
              <>
                <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
                  />
                </svg>
                <span className="truncate">Add to Quote</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
