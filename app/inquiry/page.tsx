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
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-white border-b border-black/5 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-700 text-xs font-bold uppercase tracking-widest border border-amber-500/20">
            Trade Quote Builder
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-black">
            Build Your Wholesale Quote
          </h1>
          <p className="text-black/60 text-sm md:text-base">
            Select products, specify quantities, and get competitive trade pricing from JJGM & CO.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {submitted ? (
          <div className="py-20 text-center space-y-6 bg-gradient-to-b from-gray-50 to-white rounded-3xl border border-amber-500/30 p-8 max-w-2xl mx-auto shadow-lg">
            <div className="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-black">
              ✓
            </div>
            <h2 className="text-3xl font-extrabold text-black">Quote Request Sent!</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Your wholesale pricing request for <strong>{selectedProducts.length} items</strong> has been submitted to <strong>{COMPANY_DETAILS.name}</strong>. Founder {COMPANY_DETAILS.founderFormatted} will review your order requirements and send trade pricing to your contact details.
            </p>
            <div className="p-4 bg-amber-50 rounded-xl text-xs text-amber-900 border border-amber-200">
              Direct Contact: {COMPANY_DETAILS.phone} | {COMPANY_DETAILS.email}
            </div>
            <Link
              href="/products"
              className="inline-block px-8 py-3 bg-amber-500 text-white font-extrabold text-xs uppercase tracking-widest rounded-xl hover:bg-amber-600 transition-all"
            >
              Return to Catalog
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Product List */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between pb-2">
                <h2 className="text-xl font-bold text-black">Your Quote Basket ({selectedProducts.length})</h2>
                <Link href="/products" className="text-xs text-amber-600 hover:text-amber-700 font-semibold hover:underline">
                  + Add More Products
                </Link>
              </div>

              {selectedProducts.length === 0 ? (
                <div className="py-16 text-center bg-gray-50 rounded-2xl border border-gray-200 space-y-4 p-6">
                  <p className="text-gray-600 text-sm">Your quote basket is currently empty.</p>
                  <Link
                    href="/products"
                    className="inline-block px-6 py-2.5 bg-amber-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-amber-600 transition-colors"
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
                        className="p-4 bg-white border border-gray-200 rounded-2xl flex items-center justify-between gap-4 hover:border-amber-500/50 transition-all hover:shadow-md"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-gray-50 rounded-xl p-2 shrink-0 flex items-center justify-center border border-gray-200">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={product.image}
                              alt={product.name}
                              className="max-h-full max-w-full object-contain"
                            />
                          </div>
                          <div>
                            <span className="text-[10px] text-amber-600 font-bold uppercase">{product.category}</span>
                            <h3 className="text-sm font-bold text-black leading-snug">{product.name}</h3>
                            <p className="text-xs text-gray-500">Case Size: {product.packageSize}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                            <button
                              onClick={() => updateQuantity(product.id, qty - 1)}
                              className="text-gray-500 hover:text-black font-bold"
                            >
                              -
                            </button>
                            <span className="text-xs font-bold text-amber-600 w-8 text-center">{qty} Cases</span>
                            <button
                              onClick={() => updateQuantity(product.id, qty + 1)}
                              className="text-gray-500 hover:text-black font-bold"
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() => removeProduct(product.id)}
                            className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
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
            <div className="p-6 bg-white rounded-3xl border border-gray-200 space-y-6 h-fit shadow-sm">
              <h3 className="text-xl font-bold text-black border-b border-gray-200 pb-3">
                Wholesale Quote Details
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Company / Store Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter business name"
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs text-black placeholder:text-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Contact Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 07404548779"
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs text-black placeholder:text-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. buyer@store.com"
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs text-black placeholder:text-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Delivery Location *</label>
                  <input
                    type="text"
                    required
                    placeholder="Postcode or area (e.g. TW3, West London)"
                    className="w-full px-3.5 py-2 bg-gray-50 border border-gray-300 rounded-xl text-xs text-black placeholder:text-gray-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-2 text-xs">
                <div className="flex justify-between text-gray-600">
                  <span>Total Items:</span>
                  <span className="text-black font-bold">{selectedProducts.length}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Distributor:</span>
                  <span className="text-amber-600 font-bold">{COMPANY_DETAILS.name}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Hounslow Office:</span>
                  <span className="text-gray-700 text-[10px]">105, Myrtle Road, Hounslow, TW3 1QE</span>
                </div>
              </div>

              <button
                onClick={() => setSubmitted(true)}
                disabled={selectedProducts.length === 0}
                className="w-full py-3.5 bg-amber-500 text-white font-extrabold text-xs uppercase tracking-widest rounded-xl hover:bg-amber-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-amber-500/20"
              >
                Request Wholesale Pricing
              </button>
            </div>

          </div>
        )}
      </section>
    </main>
  );
}
