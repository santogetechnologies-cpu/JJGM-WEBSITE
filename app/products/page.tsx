"use client";

import React, { useState, useMemo } from "react";
import { PRODUCTS, Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import Link from "next/link";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quoteItems, setQuoteItems] = useState<string[]>([]);

  const categories = [
    "All",
    "Nuts & Roasted",
    "Savoury & Crisps",
    "Wafers & Bakery",
    "Protein & Creatine",
    "Confectionery & Sweets",
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleQuoteItem = (product: Product) => {
    setQuoteItems((prev) =>
      prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id]
    );
  };

  return (
    <main className="bg-white min-h-screen text-black pb-24">
      {/* Catalog Header Banner */}
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-white">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-700 text-xs font-bold uppercase tracking-widest border border-amber-500/20">
            JJGM & CO Complete Range
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-black tracking-tight">
            Wholesale <span className="text-amber-600">Product Catalog</span>
          </h1>
          <p className="text-black/60 text-base md:text-lg max-w-2xl mx-auto">
            Browse 100+ wholesale products across snacks, nuts, bakery, confectionery and nutrition. Search or filter by category to build your trade order.
          </p>

          {quoteItems.length > 0 && (
            <div className="pt-4">
              <Link
                href="/inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-black font-extrabold text-sm uppercase tracking-wider rounded-full shadow-lg hover:bg-amber-400 transition-all"
              >
                Review Selected Items ({quoteItems.length}) & Request Quote →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Lifestyle Banner - Why Choose JJGM & CO */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[380px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl bg-white flex flex-col justify-between border border-black/5 p-4 sm:p-5 group">
              {/* Large prominent visual container occupying ~70% card height */}
              <div className="relative w-full h-[250px] sm:h-[280px] overflow-hidden rounded-2xl bg-stone-50 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/mixed-nuts-bowl.jpg"
                  alt="Stocked & Ready Mixed Nuts"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text area with clean, balanced spacing */}
              <div className="text-center pt-3 pb-1">
                <h3 className="text-2xl sm:text-3xl font-black text-black mb-1">Stocked & Ready</h3>
                <p className="text-black/70 text-xs sm:text-sm font-medium">Fast wholesale delivery from Hounslow</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-black text-black">
                Premium Products, Competitive Trade Prices
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-black/70 text-sm"><strong>100+ SKUs</strong> across nuts, wafers, savouries & confectionery</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-black/70 text-sm"><strong>Bulk wholesale pricing</strong> for retailers, convenience stores & supermarkets</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-black/70 text-sm"><strong>24-48h delivery</strong> across London & UK from our distribution hub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter and Search Bar Section — Normal Page Flow */}
      <section className="my-6 py-5 px-4 sm:px-6 lg:px-8 bg-[#FAFAF8] border-y border-stone-200/80 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 md:gap-6">
          {/* Horizontally scrollable category filter buttons */}
          <div className="w-full md:w-auto overflow-x-auto scrollbar-hide py-1">
            <div className="flex items-center gap-2 min-w-max">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${selectedCategory === cat
                      ? "bg-amber-500 text-black shadow-md shadow-amber-500/20 scale-[1.02]"
                      : "bg-white text-stone-700 hover:bg-stone-100 hover:text-black border border-stone-200/80"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Search Bar Input */}
          <div className="relative w-full md:w-80 shrink-0">
            <input
              type="text"
              placeholder="Search 100+ products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-200/80 rounded-xl text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors shadow-xs"
            />
            <svg
              className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Catalog Grid Section — Standard Normal Flow */}
      <section className="py-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between pb-6 border-b border-black/5">
          <p className="text-sm text-black/60">
            Showing <strong className="text-amber-700">{filteredProducts.length}</strong> of {PRODUCTS.length} products
          </p>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs text-amber-700 hover:underline"
            >
              Clear search filter
            </button>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="py-24 text-center space-y-4">
            <h3 className="text-2xl font-bold text-black/60">No products found</h3>
            <p className="text-sm text-black/50">Try adjusting your category filter or search query.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="px-6 py-2.5 bg-amber-500 text-black font-bold text-xs uppercase tracking-wider rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 pt-6 sm:pt-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setSelectedProduct}
                onToggleQuote={toggleQuoteItem}
                isInQuote={quoteItems.includes(product.id)}
              />
            ))}
          </div>
        )}
      </section>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onToggleQuote={toggleQuoteItem}
        isInQuote={selectedProduct ? quoteItems.includes(selectedProduct.id) : false}
      />
    </main>
  );
}
