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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-[#12100d] border border-amber-500/30 rounded-3xl overflow-hidden shadow-2xl p-6 md:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Image */}
          <div className="relative aspect-square w-full bg-black/50 rounded-2xl p-4 flex items-center justify-center border border-white/5">
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
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                {product.category}
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-white mt-1">
                {product.name}
              </h2>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed">
              {product.description}
            </p>

            <div className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Packaging Specification:</span>
                <span className="text-amber-300 font-bold">{product.packageSize}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Distributor:</span>
                <span className="text-white font-semibold">JJGM & CO</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Origin / Quality:</span>
                <span className="text-gray-200">UK Wholesale Grade</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={() => {
                  onToggleQuote(product);
                }}
                className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${isInQuote
                    ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                    : "bg-white text-black hover:bg-amber-400"
                  }`}
              >
                {isInQuote ? "In Wholesale Quote Basket" : "Add to Quote Request"}
              </button>
            </div>

            <div className="text-[11px] text-gray-500 text-center">
              Direct Wholesale Inquiries: <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-amber-400 hover:underline">{COMPANY_DETAILS.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
