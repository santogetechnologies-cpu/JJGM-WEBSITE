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
    <div className="group bg-gradient-to-b from-[#14120e] to-[#0a0907] border border-amber-950/40 hover:border-amber-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 flex flex-col justify-between">
      {/* Product Image Container */}
      <div className="relative aspect-square w-full bg-black/40 overflow-hidden flex items-center justify-center p-4">
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-amber-500 text-black font-extrabold text-[10px] uppercase tracking-wider rounded-full shadow-md">
            {product.badge}
          </span>
        )}

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Quick View Overlay Button */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 p-4">
          <button
            onClick={() => onQuickView(product)}
            className="px-4 py-2 bg-white text-black font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg hover:bg-amber-400 transition-colors"
          >
            Quick Details
          </button>
        </div>
      </div>

      {/* Details Container */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-500">
            {product.category}
          </span>
          <h3 className="text-sm md:text-base font-bold text-white mt-1 line-clamp-2 leading-snug group-hover:text-amber-300 transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-gray-400 mt-2 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between gap-2">
          <div className="text-xs text-amber-200/80 font-medium">
            <span className="text-gray-500 block text-[10px] uppercase">Pack Size:</span>
            {product.packageSize}
          </div>

          <button
            onClick={() => onToggleQuote(product)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
              isInQuote
                ? "bg-amber-500 text-black shadow-md shadow-amber-500/30"
                : "bg-white/10 text-white hover:bg-amber-500 hover:text-black"
            }`}
          >
            {isInQuote ? (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                Added
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                + Quote
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
