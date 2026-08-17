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
    <div className="group bg-white border border-black/10 hover:border-amber-500 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 hover:-translate-y-1 flex flex-col justify-between">
      {/* Product Image Container */}
      <div className="relative aspect-square w-full bg-gray-50 overflow-hidden flex items-center justify-center p-4">
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
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 p-4">
          <button
            onClick={() => onQuickView(product)}
            className="px-4 py-2 bg-white text-black font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg hover:bg-amber-500 transition-colors"
          >
            View Details
          </button>
        </div>
      </div>

      {/* Details Container */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-600">
            {product.category}
          </span>
          <h3 className="text-sm md:text-base font-bold text-black mt-1 line-clamp-2 leading-snug">
            {product.name}
          </h3>
          
          {/* Case Size */}
          <div className="mt-2 text-xs text-black/60">
            <span className="font-semibold">Case:</span> {product.packageSize}
          </div>
          
          {/* Wholesale Pricing Available */}
          <div className="mt-2">
            <span className="text-xs text-amber-700 font-medium">Wholesale pricing available</span>
          </div>
        </div>

        {/* Add to Quote Button */}
        <div className="mt-4 pt-3 border-t border-black/5">
          <button
            onClick={() => onToggleQuote(product)}
            className={`w-full px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
              isInQuote
                ? "bg-amber-500 text-black shadow-md shadow-amber-500/20"
                : "bg-black/5 text-black hover:bg-amber-500 hover:text-black border border-black/10"
            }`}
          >
            {isInQuote ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                Added to Quote
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add to Quote
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
