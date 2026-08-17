import React from "react";
import Link from "next/link";
import { COMPANY_DETAILS } from "@/data/products";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen text-black pt-24 pb-24">
      {/* Header Banner */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-white border-b border-black/5 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-700 text-xs font-bold uppercase tracking-widest border border-amber-500/20">
            About JJGM & CO
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-black">
            Our Legacy & <span className="text-amber-600">Wholesale Mission</span>
          </h1>
          <p className="text-black/60 text-base md:text-lg">
            Connecting London and UK businesses with premium nuts, traditional savouries, fine European wafers, and high-protein nutrition.
          </p>
        </div>
      </section>

      {/* Main Story & Founder Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-black">
              The Story of <span className="text-amber-600">JJGM & CO</span>
            </h2>

            <p className="text-black/70 leading-relaxed text-base">
              <strong>JJGM & CO</strong> was established with a singular vision: to deliver superior quality almonds, roasted nuts, authentic Bombay mixes, and international confectionery directly to retailers, supermarkets, and hospitality venues across the United Kingdom.
            </p>

            <p className="text-black/70 leading-relaxed text-base">
              Under the leadership of our founder, <strong className="text-amber-700 capitalize">{COMPANY_DETAILS.founder}</strong>, we have built a trusted reputation for consistent supply, competitive trade prices, and uncompromised food freshness.
            </p>

            {/* Founder Card */}
            <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-amber-500/20 space-y-4 shadow-sm">
              <div className="text-center pb-4 border-b border-black/5">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">Built by People Who Know the Trade</p>
                <p className="text-sm text-black/70 leading-relaxed">
                  JJGM & CO was built around a simple idea: make premium food products easier for UK retailers and businesses to source reliably.
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center font-black text-2xl shadow-lg">
                  GD
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black capitalize">{COMPANY_DETAILS.founder}</h3>
                  <p className="text-xs text-amber-700 font-semibold uppercase tracking-wider">Founder & Managing Director</p>
                  <p className="text-xs text-black/60 mt-1">Hounslow, London</p>
                </div>
              </div>
              
              <div className="pt-4 border-t border-black/5">
                <p className="text-sm text-black/70 leading-relaxed italic">
                  "Our commitment at JJGM & CO is to provide every client with fresh, delicious, top-tier snacks backed by honest service and reliable UK logistics."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Company Image & Stats */}
          <div className="space-y-6">
            <div className="p-8 bg-gray-50 rounded-3xl border border-black/5 text-center space-y-6 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="JJGM & CO"
                className="h-28 w-auto mx-auto object-contain"
              />

              <div className="space-y-2 text-sm text-black/70 border-t border-black/5 pt-6">
                <p><strong>Headquarters Address:</strong></p>
                <p className="text-amber-700 font-semibold capitalize">{COMPANY_DETAILS.address}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-left pt-4">
                <div className="p-4 bg-white rounded-xl border border-black/5">
                  <div className="text-xs text-black/60 uppercase">Direct Phone</div>
                  <div className="text-sm font-bold text-black mt-1">{COMPANY_DETAILS.phone}</div>
                </div>
                <div className="p-4 bg-white rounded-xl border border-black/5">
                  <div className="text-xs text-black/60 uppercase">Email Contact</div>
                  <div className="text-xs font-bold text-amber-700 mt-1 break-all">{COMPANY_DETAILS.email}</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars */}
        <div className="pt-12 border-t border-black/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black">Why Businesses Choose JJGM & CO</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="p-6 bg-gray-50 rounded-2xl border border-black/5 space-y-3 shadow-sm hover:shadow-md hover:border-amber-500 hover:-translate-y-1 transition-all group">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold border border-amber-500/20 text-sm">01</div>
                <svg className="w-8 h-8 text-amber-600/30 group-hover:text-amber-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black">Premium Product Range</h3>
              <p className="text-xs text-black/60 leading-relaxed">
                Slow-roasted California whole almonds and nuts dry roasted for maximum flavor.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-gray-50 rounded-2xl border border-black/5 space-y-3 shadow-sm hover:shadow-md hover:border-amber-500 hover:-translate-y-1 transition-all group">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold border border-amber-500/20 text-sm">02</div>
                <svg className="w-8 h-8 text-amber-600/30 group-hover:text-amber-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black">100+ Wholesale Products</h3>
              <p className="text-xs text-black/60 leading-relaxed">
                From traditional Bombay mix to European Tago wafer rolls and creatine bars.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-gray-50 rounded-2xl border border-black/5 space-y-3 shadow-sm hover:shadow-md hover:border-amber-500 hover:-translate-y-1 transition-all group">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold border border-amber-500/20 text-sm">03</div>
                <svg className="w-8 h-8 text-amber-600/30 group-hover:text-amber-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black">UK Distribution</h3>
              <p className="text-xs text-black/60 leading-relaxed">
                Fast, dependable wholesale delivery from our Hounslow distribution hub.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 bg-gray-50 rounded-2xl border border-black/5 space-y-3 shadow-sm hover:shadow-md hover:border-amber-500 hover:-translate-y-1 transition-all group">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold border border-amber-500/20 text-sm">04</div>
                <svg className="w-8 h-8 text-amber-600/30 group-hover:text-amber-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black">Trade-Focused Pricing</h3>
              <p className="text-xs text-black/60 leading-relaxed">
                Competitive bulk margins tailored for convenience stores and supermarkets.
              </p>
            </div>
          </div>
        </div>

        {/* Premium Product Showcase Section with Images */}
        <div className="pt-16 border-t border-black/5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight">
              Premium Quality Products
            </h2>
            <p className="text-black/60 text-base mt-4 max-w-2xl mx-auto">
              From farm-fresh nuts to European bakery delights, every product meets our strict wholesale standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Nuts & Dried Fruits */}
            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/lifestyle/nuts-assortment.jpg"
                alt="Premium Nuts Assortment"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Premium Nuts Range</h3>
                  <p className="text-white/90 text-sm mt-2">Almonds, Cashews, Pistachios & More</p>
                </div>
              </div>
            </div>

            {/* Wafers & Bakery */}
            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/lifestyle/wafer-rolls.jpg"
                alt="Wafer Rolls Collection"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">European Wafers</h3>
                  <p className="text-white/90 text-sm mt-2">Tago Premium Wafer Rolls</p>
                </div>
              </div>
            </div>

            {/* Confectionery */}
            <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/lifestyle/snacks-pile.jpg"
                alt="Snacks & Confectionery"
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">Savouries & Snacks</h3>
                  <p className="text-white/90 text-sm mt-2">Bombay Mix, Popcorn & Crisps</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warehouse & Distribution Section */}
        <div className="pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/lifestyle/warehouse-1.jpg"
                alt="JJGM & CO Warehouse Distribution"
                className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-white shadow-xl hidden md:block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/lifestyle/delivery-courier.jpg"
                  alt="Fast Delivery Service"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <span className="inline-block px-4 py-2 bg-amber-500/10 text-amber-700 text-xs font-bold uppercase tracking-wider rounded-full border border-amber-500/20">
                UK-Wide Distribution
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight">
                Efficient Logistics & Fast Delivery
              </h2>
              <p className="text-black/70 text-base leading-relaxed">
                Operating from our Hounslow distribution center, we ensure rapid turnaround times for wholesale orders across London and the UK. Our dedicated logistics team manages inventory, quality control, and timely deliveries to keep your shelves stocked.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-gray-50 rounded-xl border border-black/5">
                  <div className="text-3xl font-black text-amber-600">24-48h</div>
                  <div className="text-sm text-black/60 mt-1">Delivery Time</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-xl border border-black/5">
                  <div className="text-3xl font-black text-amber-600">500+</div>
                  <div className="text-sm text-black/60 mt-1">Active Retailers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Family Business Section */}
        <div className="pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <span className="inline-block px-4 py-2 bg-amber-500/10 text-amber-700 text-xs font-bold uppercase tracking-wider rounded-full border border-amber-500/20">
                Family Values
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-black tracking-tight">
                Serving UK Families & Retailers
              </h2>
              <p className="text-black/70 text-base leading-relaxed">
                JJGM & CO isn't just a distributor—we're a family business that understands the needs of UK families and independent retailers. Every product we supply ends up on family tables, in convenience stores, and in local supermarkets across the country.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-black/70 text-sm">Quality products families trust</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-black/70 text-sm">Supporting independent retailers</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-black/70 text-sm">Building long-term trade partnerships</p>
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/lifestyle/happy-family.jpg"
                alt="Happy UK Family"
                className="w-full h-[450px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="text-center pt-16">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-amber-500 text-black font-extrabold text-sm uppercase tracking-widest rounded-full hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20"
          >
            Connect With JJGM & CO Today
          </Link>
        </div>

      </section>
    </main>
  );
}
