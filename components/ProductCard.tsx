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
    <div className="group bg-white border border-black/10 hover:border-amber-500/60 rounded-xl overflow-hidden transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/10 hover:-translate-y-0.5 flex flex-col justify-between h-full">
      {/* Product Image Container */}
      <div className="relative aspect-square w-full bg-stone-50 overflow-hidden flex items-center justify-center p-2 sm:p-3">
        {product.badge && (
          <span className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-amber-500 text-black font-extrabold text-[9px] sm:text-[10px] uppercase tracking-wider rounded-md shadow-xs">
            {product.badge}
          </span>
        )}

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-200"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/logo.png'; // Fallback to logo if image fails
            target.onerror = null; // Prevent infinite loop
          }}
        />

        {/* Quick View Overlay Button */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 p-3">
          <button
            onClick={() => onQuickView(product)}
            className="px-3 py-1.5 bg-white text-black font-bold text-[10px] sm:text-xs uppercase tracking-wider rounded-md shadow-md hover:bg-amber-500 transition-colors"
          >
            View Details
          </button>
        </div>
      </div>

      {/* Details Container */}
      <div className="p-2.5 sm:p-3.5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 block">
            {product.category}
          </span>
          <h3 className="text-xs sm:text-sm font-bold text-black mt-0.5 line-clamp-2 leading-tight min-h-[2.1rem]">
            {product.name}
          </h3>
          
          {/* Case Size */}
          <div className="mt-1 text-[10px] sm:text-xs text-black/60">
            <span className="font-semibold">Case:</span> {product.packageSize}
          </div>
        </div>

        {/* Add to Quote Button */}
        <div className="mt-2 pt-2 border-t border-black/5">
          <button
            onClick={() => onToggleQuote(product)}
            className={`w-full px-2 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1 sm:gap-1.5 ${
              isInQuote
                ? "bg-amber-500 text-black shadow-sm shadow-amber-500/20"
                : "bg-black/5 text-black hover:bg-amber-500 hover:text-black border border-black/10"
            }`}
          >
            {isInQuote ? (
              <>
                <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <span>Added to Quote</span>
              </>
            ) : (
              <>
                <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span>Add to Quote</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
