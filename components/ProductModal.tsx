"use client";

import React from "react";
import { Product, COMPANY_DETAILS } from "@/data/products";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onToggleQuote: (product: Product) => void;
  isInQuote: boolean;
}

export default function ProductModal({
  product,
  onClose,
  onToggleQuote,
  isInQuote,
}: ProductModalProps) {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white border border-stone-200/80 rounded-3xl overflow-hidden shadow-2xl p-6 md:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-900 border border-stone-200 transition-all shadow-xs z-10"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image Container */}
          <div className="relative aspect-square w-full bg-[#F8F8F6] rounded-2xl p-4 sm:p-6 flex items-center justify-center border border-stone-200/70 shadow-xs">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">
                {product.category}
              </span>
              <h2 className="text-xl md:text-2xl font-black text-stone-900 mt-1">
                {product.name}
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {product.description}
            </p>

            {/* Specification Box */}
            <div className="p-4 bg-[#F8F8F6] rounded-2xl border border-stone-200/80 space-y-2.5 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-stone-500 font-medium">Packaging Specification:</span>
                <span className="text-amber-700 font-bold">{product.packageSize}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-500 font-medium">Distributor:</span>
                <span className="text-stone-900 font-bold">JJGM & CO</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-500 font-medium">Origin / Quality:</span>
                <span className="text-stone-800 font-semibold">UK Wholesale Grade</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onToggleQuote(product)}
                className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                  isInQuote
                    ? "bg-amber-600 text-white shadow-md shadow-amber-600/20"
                    : "bg-amber-500 hover:bg-amber-400 text-black shadow-md shadow-amber-500/20"
                }`}
              >
                {isInQuote ? (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    Added to Quote Request
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Add to Quote Request
                  </>
                )}
              </button>
            </div>

            <div className="text-[11px] text-stone-500 text-center pt-1">
              Direct Wholesale Inquiries: <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-amber-600 font-semibold hover:underline">{COMPANY_DETAILS.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
