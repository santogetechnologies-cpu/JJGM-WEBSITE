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
            <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-amber-500/20 space-y-3 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-amber-500 text-black flex items-center justify-center font-black text-xl">
                  GD
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black capitalize">{COMPANY_DETAILS.founder}</h3>
                  <p className="text-xs text-amber-700 uppercase tracking-wider">Founder & Managing Director</p>
                </div>
              </div>
              <p className="text-xs text-black/60 italic">
                "Our commitment at JJGM & CO is to provide every client with fresh, delicious, top-tier snacks backed by honest service and reliable UK logistics."
              </p>
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

        {/* CTA section */}
        <div className="text-center pt-8">
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
