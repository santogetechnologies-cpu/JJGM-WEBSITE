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
    <main className="bg-white min-h-screen text-black pb-24">
      {/* Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-white border-b border-black/5 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-700 text-xs font-bold uppercase tracking-widest border border-amber-500/20">
            Wholesale Basket
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-black">
            Request Bulk Price Quote
          </h1>
          <p className="text-black/60 text-sm md:text-base">
            Review your selected products and submit a bulk order quote request to JJGM & CO.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {submitted ? (
          <div className="py-20 text-center space-y-6 bg-white/5 rounded-3xl border border-amber-500/30 p-8 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-amber-500 text-black rounded-full flex items-center justify-center mx-auto text-2xl font-black">
              ✓
            </div>
            <h2 className="text-3xl font-extrabold text-white">Quote Request Sent!</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your wholesale pricing request for <strong>{selectedProducts.length} items</strong> has been submitted to <strong>{COMPANY_DETAILS.name}</strong>. Founder {COMPANY_DETAILS.founderFormatted} will review your order requirements and send trade pricing to your contact details.
            </p>
            <div className="p-4 bg-black/40 rounded-xl text-xs text-amber-300">
              Direct Contact: {COMPANY_DETAILS.phone} | {COMPANY_DETAILS.email}
            </div>
            <Link
              href="/products"
              className="inline-block px-8 py-3 bg-amber-500 text-black font-extrabold text-xs uppercase tracking-widest rounded-xl hover:bg-amber-400 transition-all"
            >
              Return to Catalog
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Product List */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between pb-2">
                <h2 className="text-xl font-bold text-white">Selected Items ({selectedProducts.length})</h2>
                <Link href="/products" className="text-xs text-amber-400 hover:underline">
                  + Add More Products from Catalog
                </Link>
              </div>

              {selectedProducts.length === 0 ? (
                <div className="py-16 text-center bg-white/5 rounded-2xl border border-white/10 space-y-4 p-6">
                  <p className="text-gray-400 text-sm">Your quote request basket is currently empty.</p>
                  <Link
                    href="/products"
                    className="inline-block px-6 py-2.5 bg-amber-500 text-black font-bold text-xs uppercase tracking-wider rounded-xl"
                  >
                    Browse 100+ Products
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {selectedProducts.map((product) => {
                    const qty = quantities[product.id] || 1;
                    return (
                      <div
                        key={product.id}
                        className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-black/40 rounded-xl p-2 shrink-0 flex items-center justify-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={product.image}
                              alt={product.name}
                              className="max-h-full max-w-full object-contain"
                            />
                          </div>
                          <div>
                            <span className="text-[10px] text-amber-500 font-bold uppercase">{product.category}</span>
                            <h3 className="text-sm font-bold text-white leading-snug">{product.name}</h3>
                            <p className="text-xs text-gray-400">Case Size: {product.packageSize}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
                            <button
                              onClick={() => updateQuantity(product.id, qty - 1)}
                              className="text-gray-400 hover:text-white font-bold"
                            >
                              -
                            </button>
                            <span className="text-xs font-bold text-amber-300 w-8 text-center">{qty} Cases</span>
                            <button
                              onClick={() => updateQuantity(product.id, qty + 1)}
                              className="text-gray-400 hover:text-white font-bold"
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() => removeProduct(product.id)}
                            className="p-1.5 text-gray-500 hover:text-red-400 transition-colors"
                            title="Remove item"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

            {/* Quote Summary Box */}
            <div className="p-6 bg-gradient-to-b from-[#181511] to-[#0d0c0a] rounded-3xl border border-amber-500/30 space-y-6 h-fit">
              <h3 className="text-xl font-bold text-white border-b border-white/10 pb-3">
                Request Trade Quote
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-300 mb-1">Company / Store Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter business name"
                    className="w-full px-3.5 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-300 mb-1">Contact Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 07404548779"
                    className="w-full px-3.5 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-300 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. buyer@store.com"
                    className="w-full px-3.5 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white"
                  />
                </div>
              </div>

              <div className="p-4 bg-black/50 rounded-xl border border-white/5 space-y-2 text-xs">
                <div className="flex justify-between text-gray-400">
                  <span>Total Items:</span>
                  <span className="text-white font-bold">{selectedProducts.length}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Distributor:</span>
                  <span className="text-amber-400 font-bold">{COMPANY_DETAILS.name}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Hounslow Office:</span>
                  <span className="text-gray-300 capitalize text-[10px]">{COMPANY_DETAILS.address}</span>
                </div>
              </div>

              <button
                onClick={() => setSubmitted(true)}
                disabled={selectedProducts.length === 0}
                className="w-full py-3.5 bg-amber-500 text-black font-extrabold text-xs uppercase tracking-widest rounded-xl hover:bg-amber-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-amber-500/20"
              >
                Submit Trade Quote Request
              </button>
            </div>

          </div>
        )}
      </section>
    </main>
  );
}
