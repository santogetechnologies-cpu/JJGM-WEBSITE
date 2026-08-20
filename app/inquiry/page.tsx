"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PRODUCTS, COMPANY_DETAILS } from "@/data/products";

export default function InquiryPage() {
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>(
    PRODUCTS.slice(0, 3).map((p) => p.id) // Default preset items
  );
  const [quantities, setQuantities] = useState<Record<string, number>>({
    "prod-1": 5,
    "prod-2": 2,
    "prod-3": 4,
  });
  const [submitted, setSubmitted] = useState(false);

  const selectedProducts = PRODUCTS.filter((p) =>
    selectedProductIds.includes(p.id)
  );

  const removeProduct = (id: string) => {
    setSelectedProductIds((prev) => prev.filter((item) => item !== id));
  };

  const updateQuantity = (id: string, qty: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, qty),
    }));
  };

  return (
    <main className="bg-[#FCFAF6] min-h-screen text-stone-900 pb-24">
      {/* Page Hero / Banner — Generous clearance below fixed floating navbar */}
      <section className="pt-32 sm:pt-36 md:pt-40 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F7F4EE] via-[#FCFAF6] to-[#FCFAF6] border-b border-stone-200/50 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-bold uppercase tracking-widest shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>Trade Quote Builder</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-stone-950 leading-[1.08]">
            Build Your <span className="text-amber-600">Wholesale Quote</span>
          </h1>

          <p className="text-stone-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Select products, specify quantities, and get competitive trade pricing from JJGM & CO.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {submitted ? (
          <div className="py-16 text-center space-y-5 bg-white rounded-[28px] border border-amber-500/30 p-8 sm:p-12 max-w-2xl mx-auto shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
            <div className="w-16 h-16 bg-amber-500 text-stone-950 rounded-2xl flex items-center justify-center mx-auto text-2xl font-black shadow-md shadow-amber-500/20">
              ✓
            </div>
            <h2 className="text-3xl font-extrabold text-stone-950 tracking-tight">Quote Request Sent!</h2>
            <p className="text-stone-600 text-sm leading-relaxed max-w-md mx-auto">
              Your wholesale pricing request for <strong className="text-stone-900">{selectedProducts.length} items</strong> has been submitted to <strong className="text-stone-900">{COMPANY_DETAILS.name}</strong>. Founder {COMPANY_DETAILS.founderFormatted} will review your order requirements and send trade pricing to your contact details.
            </p>
            <div className="p-4 bg-[#FAF7F2] rounded-2xl text-xs text-stone-700 border border-stone-200/80 font-medium">
              Direct Contact: <strong className="text-amber-700">{COMPANY_DETAILS.phone}</strong> | <strong className="text-amber-700">{COMPANY_DETAILS.email}</strong>
            </div>
            <div className="pt-2">
              <Link
                href="/products"
                className="inline-block px-8 py-3.5 bg-stone-950 text-white font-extrabold text-xs uppercase tracking-widest rounded-xl hover:bg-stone-800 transition-all shadow-sm"
              >
                Return to Catalog
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">

            {/* Left Column: Product List */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between pb-1">
                <h2 className="text-xl sm:text-2xl font-extrabold text-stone-950 tracking-tight">
                  Your Quote Basket <span className="text-amber-600">({selectedProducts.length})</span>
                </h2>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-800 uppercase tracking-wider bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 transition-colors"
                >
                  <span>+ Add More Products</span>
                </Link>
              </div>

              {selectedProducts.length === 0 ? (
                <div className="py-16 text-center bg-white rounded-[22px] border border-stone-200/80 space-y-4 p-8 shadow-xs">
                  <p className="text-stone-600 text-sm font-medium">Your quote basket is currently empty.</p>
                  <Link
                    href="/products"
                    className="inline-block px-7 py-3 bg-amber-500 text-stone-950 font-extrabold text-xs uppercase tracking-widest rounded-xl hover:bg-amber-400 transition-colors shadow-md shadow-amber-500/20"
                  >
                    Browse 100+ Products
                  </Link>
                </div>
              ) : (
                <div className="space-y-3.5">
                  {selectedProducts.map((product) => {
                    const qty = quantities[product.id] || 1;
                    return (
                      <div
                        key={product.id}
                        className="p-4 sm:p-5 bg-white border border-stone-200/80 rounded-[20px] shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-amber-500/30 hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-all duration-200"
                      >
                        {/* Product Info & Thumbnail */}
                        <div className="flex items-center gap-4 min-w-0">
                          <div className="w-16 h-16 sm:w-18 sm:h-18 bg-[#FCFAF6] rounded-[14px] p-2 shrink-0 flex items-center justify-center border border-stone-200/80">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={product.image}
                              alt={product.name}
                              className="max-h-full max-w-full object-contain"
                            />
                          </div>
                          <div className="min-w-0">
                            <span className="text-[10px] font-bold text-amber-700 uppercase tracking-widest bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/15 inline-block mb-1">
                              {product.category}
                            </span>
                            <h3 className="text-sm sm:text-base font-bold text-stone-950 leading-snug truncate">
                              {product.name}
                            </h3>
                            <p className="text-xs text-stone-500 mt-0.5">
                              Case Size: <span className="font-semibold text-stone-700">{product.packageSize}</span>
                            </p>
                          </div>
                        </div>

                        {/* Controls: Stepper & Remove Action */}
                        <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-100">
                          <div className="flex items-center gap-1.5 bg-[#FCFAF6] px-2.5 py-1.5 rounded-xl border border-stone-200/80 shadow-2xs">
                            <button
                              type="button"
                              onClick={() => updateQuantity(product.id, qty - 1)}
                              className="w-7 h-7 rounded-lg bg-white border border-stone-200 text-stone-700 hover:text-stone-950 hover:bg-stone-100 font-bold flex items-center justify-center transition-colors cursor-pointer"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span className="text-xs font-extrabold text-amber-700 px-2 min-w-[65px] text-center">
                              {qty} Cases
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(product.id, qty + 1)}
                              className="w-7 h-7 rounded-lg bg-white border border-stone-200 text-stone-700 hover:text-stone-950 hover:bg-stone-100 font-bold flex items-center justify-center transition-colors cursor-pointer"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeProduct(product.id)}
                            className="w-9 h-9 rounded-xl bg-stone-100/70 hover:bg-red-50 text-stone-400 hover:text-red-600 border border-stone-200/60 hover:border-red-200 flex items-center justify-center transition-all cursor-pointer"
                            title="Remove item"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Right Column: Quote Summary Panel */}
            <div className="lg:col-span-5">
              <div className="p-6 sm:p-7 bg-white rounded-[24px] border border-stone-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-6 h-fit sticky top-24">
                <div className="border-b border-stone-200/70 pb-3.5 space-y-1">
                  <h3 className="text-xl font-extrabold text-stone-950 tracking-tight">
                    Wholesale Quote Details
                  </h3>
                  <p className="text-xs text-stone-500">
                    Direct trade inquiry for fast wholesale fulfillment.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Company / Store Name <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter business name"
                      className="w-full h-11 px-3.5 bg-[#FCFAF6] border border-stone-200/90 rounded-xl text-xs font-medium text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Contact Phone <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 07404548779"
                      className="w-full h-11 px-3.5 bg-[#FCFAF6] border border-stone-200/90 rounded-xl text-xs font-medium text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Email Address <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. buyer@store.com"
                      className="w-full h-11 px-3.5 bg-[#FCFAF6] border border-stone-200/90 rounded-xl text-xs font-medium text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Delivery Location <span className="text-amber-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Postcode or area (e.g. TW3, West London)"
                      className="w-full h-11 px-3.5 bg-[#FCFAF6] border border-stone-200/90 rounded-xl text-xs font-medium text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                    />
                  </div>
                </div>

                {/* Information Grouping Box */}
                <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-stone-200/70 space-y-2.5 text-xs">
                  <div className="flex justify-between items-center text-stone-600">
                    <span className="font-medium">Total Items:</span>
                    <span className="text-stone-950 font-extrabold bg-stone-100 px-2.5 py-0.5 rounded-md border border-stone-200/60">
                      {selectedProducts.length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-stone-600">
                    <span className="font-medium">Distributor:</span>
                    <span className="text-amber-700 font-bold">{COMPANY_DETAILS.name}</span>
                  </div>
                  <div className="flex justify-between items-start text-stone-600 pt-1.5 border-t border-stone-200/50">
                    <span className="font-medium shrink-0">Hounslow Office:</span>
                    <span className="text-stone-500 text-[11px] text-right font-normal leading-tight ml-2">
                      105, Myrtle Road, Hounslow, TW3 1QE
                    </span>
                  </div>
                </div>

                {/* Action CTA Button */}
                <button
                  type="button"
                  onClick={() => setSubmitted(true)}
                  disabled={selectedProducts.length === 0}
                  className="w-full h-14 sm:h-[56px] px-6 bg-amber-500 hover:bg-amber-400 active:scale-[0.98] text-stone-950 font-black text-xs sm:text-sm uppercase tracking-widest rounded-2xl transition-all duration-200 shadow-[0_4px_18px_rgba(245,158,11,0.25)] hover:shadow-[0_6px_22px_rgba(245,158,11,0.35)] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none cursor-pointer flex items-center justify-center gap-2.5"
                >
                  <span>Request Wholesale Pricing</span>
                  <span className="text-base font-black leading-none">→</span>
                </button>
              </div>
            </div>

          </div>
        )}
      </section>
    </main>
  );
}
