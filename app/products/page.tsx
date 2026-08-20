"use client";

import React, { useState, useMemo } from "react";
import { PRODUCTS, Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import Link from "next/link";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("featured");
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
    const list = PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (sortBy === "name-asc") {
      return [...list].sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortBy === "name-desc") {
      return [...list].sort((a, b) => b.name.localeCompare(a.name));
    }
    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  const toggleQuoteItem = (product: Product) => {
    setQuoteItems((prev) =>
      prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id]
    );
  };

  return (
    <main className="bg-[#FAF8F5] min-h-screen text-stone-900 pb-24 selection:bg-amber-500 selection:text-white">
      {/* 1. TOP CATALOG HEADER BANNER */}
      <section className="pt-28 sm:pt-32 pb-4 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-3">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-stone-950 tracking-tight">
          Wholesale <span className="text-amber-600">Product Catalog</span>
        </h1>
        <p className="text-stone-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Browse 100+ wholesale products across snacks, nuts, bakery, confectionery and nutrition. Search or filter by category to build your trade order.
        </p>

        {quoteItems.length > 0 && (
          <div className="pt-2">
            <Link
              href="/inquiry"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-xs uppercase tracking-wider rounded-full shadow-md transition-all"
            >
              <span>Review Selected Items ({quoteItems.length}) & Request Quote →</span>
            </Link>
          </div>
        )}
      </section>

      {/* 2. RESTORED 2-COLUMN HERO SECTION WITH NEW PREMIUM COMMERCIAL PHOTOGRAPHY */}
      <section className="py-6 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-amber-50/60 via-[#FCFAF6] to-stone-100/60 rounded-3xl p-6 sm:p-8 lg:p-10 border border-stone-200/80 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Card: White Floating Card with High-Res Showcase Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white flex flex-col justify-between border border-stone-200/80 p-4 sm:p-5 group">
                {/* Visual Container */}
                <div className="relative w-full h-[240px] sm:h-[280px] overflow-hidden rounded-2xl bg-stone-50 flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/products-hero-showcase.jpg"
                    alt="JJGM & CO Stocked & Ready Wholesale Range"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                {/* Text Area */}
                <div className="text-center pt-4 pb-1">
                  <h3 className="text-2xl sm:text-3xl font-black text-stone-950 mb-1 tracking-tight">
                    Stocked & Ready
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm font-medium">
                    Fast wholesale delivery from Hounslow
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Key Trade Benefits */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-950 tracking-tight leading-tight">
                Premium Products, <br className="hidden sm:inline" />
                <span className="text-amber-600">Competitive Trade Prices</span>
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-amber-500/15 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                    <strong className="text-stone-950">100+ SKUs</strong> across nuts, wafers, savouries & confectionery
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-amber-500/15 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                    <strong className="text-stone-950">Bulk wholesale pricing</strong> for retailers, convenience stores & supermarkets
                  </p>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-amber-500/15 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                    <strong className="text-stone-950">24-48h delivery</strong> across London & UK from our distribution hub
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SEARCH & CATEGORY FILTER CONTROL PANEL */}
      <section className="px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto my-6">
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-stone-200/80 shadow-xs p-4 sm:p-6 space-y-4">

          {/* Top Row: Category Pills + Search Box */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">

            {/* Category Pills (Scrollable on Mobile) */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-1">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer ${isActive
                        ? "bg-amber-500 text-stone-950 shadow-sm"
                        : "bg-white text-stone-700 border border-stone-200/80 hover:bg-stone-50 hover:text-stone-900"
                      }`}
                  >
                    {cat === "All" ? "ALL" : cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input Box */}
            <div className="relative w-full lg:w-80 shrink-0">
              <input
                type="text"
                placeholder="Search 100+ products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-stone-50/70 border border-stone-200/80 rounded-xl text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-all shadow-2xs"
              />
              <svg
                className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5 pointer-events-none"
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
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-2.5 text-xs text-stone-400 hover:text-stone-700 p-1"
                >
                  ✕
                </button>
              )}
            </div>

          </div>

          {/* Bottom Bar: Sort & Counter */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-stone-100">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-stone-500">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1.5 bg-stone-50/70 border border-stone-200/80 rounded-lg text-xs font-semibold text-stone-800 focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                <option value="featured">Featured Order</option>
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
              </select>
            </div>

            <div className="text-xs text-stone-500 font-medium">
              Showing <strong className="text-amber-600 font-bold">{filteredProducts.length}</strong> of {PRODUCTS.length} products
            </div>
          </div>

        </div>
      </section>

      {/* 4. PRODUCT GRID (2 COLUMNS MOBILE, 4 COLUMNS DESKTOP) */}
      <section className="px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {filteredProducts.length === 0 ? (
          <div className="py-20 text-center bg-white rounded-3xl border border-stone-200/80 p-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center mx-auto">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-stone-900">No products found</h3>
            <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto">
              We couldn't find any products matching your search or category filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
                setSortBy("featured");
              }}
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6">
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

      {/* Product Quick View Detail Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onToggleQuote={toggleQuoteItem}
        isInQuote={selectedProduct ? quoteItems.includes(selectedProduct.id) : false}
      />
    </main>
  );
}
