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
    <main className="bg-[#0d0c0a] min-h-screen text-white pt-24 pb-24">
      {/* Catalog Header Banner */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#181510] via-[#12100d] to-[#0d0c0a] border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest border border-amber-500/30">
            JJGM & CO Complete Range
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Wholesale <span className="text-amber-400">Product Catalog</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Browse all 100+ premium products distributed by JJGM & CO. Filter by category or search for specific items to request bulk pricing.
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

      {/* Filter and Search Bar */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 sticky top-20 z-40 bg-[#0d0c0a]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-amber-500 text-black shadow-md shadow-amber-500/20"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search 100+ products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-gray-400 focus:outline-none focus:border-amber-500 transition-colors"
            />
            <svg
              className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5"
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

      {/* Catalog Grid Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between pb-6 border-b border-white/5">
          <p className="text-sm text-gray-400">
            Showing <strong className="text-amber-400">{filteredProducts.length}</strong> of {PRODUCTS.length} products
          </p>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs text-amber-400 hover:underline"
            >
              Clear search filter
            </button>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="py-24 text-center space-y-4">
            <h3 className="text-2xl font-bold text-gray-400">No products found</h3>
            <p className="text-sm text-gray-500">Try adjusting your category filter or search query.</p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-8">
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
