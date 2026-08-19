import React from "react";
import Link from "next/link";
import { COMPANY_DETAILS } from "@/data/products";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen text-stone-900 pb-20 overflow-x-hidden">
      {/* 1. HERO BANNER */}
      <section className="relative pt-28 pb-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF9F6] via-white to-white text-center border-b border-stone-200/60 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-700 text-xs font-bold uppercase tracking-widest border border-amber-500/20 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>About JJGM & CO</span>
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-stone-900 leading-tight">
            Our Legacy & <span className="text-amber-600">Wholesale Mission</span>
          </h1>

          <p className="text-stone-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Connecting London and UK businesses with premium nuts, traditional savouries, fine European wafers, and high-protein nutrition.
          </p>

          <div className="pt-2 flex justify-center gap-3">
            <Link
              href="/products"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-amber-500/20"
            >
              Explore Wholesale Catalog
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-white hover:bg-stone-50 text-stone-900 border border-stone-200 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-xs"
            >
              Contact Direct
            </Link>
          </div>
        </div>
      </section>

      {/* 3. MAIN STORY & FOUNDER SECTION (ORIGINAL PRESERVED WITH TINTED BACKGROUND) */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-4">
        <div className="bg-[#FCFAF6] rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
                  OUR FOUNDATION
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                  The Story of <span className="text-amber-600">JJGM & CO</span>
                </h2>
              </div>

              <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                <strong>JJGM & CO</strong> was established with a singular vision: to deliver superior quality almonds, roasted nuts, authentic Bombay mixes, and international confectionery directly to retailers, supermarkets, and hospitality venues across the United Kingdom.
              </p>

              <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                Under the leadership of our founder, <strong className="text-amber-700 capitalize">{COMPANY_DETAILS.founder}</strong>, we have built a trusted reputation for consistent supply, competitive trade prices, and uncompromised food freshness.
              </p>

              {/* Founder Card */}
              <div className="p-6 bg-white rounded-2xl border border-amber-500/30 space-y-4 shadow-xs relative overflow-hidden">
                <div className="text-center pb-4 border-b border-stone-200/60">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">Built by People Who Know the Trade</p>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    JJGM & CO was built around a simple idea: make premium food products easier for UK retailers and businesses to source reliably.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 text-stone-900 flex items-center justify-center font-black text-xl shadow-md shrink-0">
                    GD
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 capitalize">{COMPANY_DETAILS.founderFormatted}</h3>
                    <p className="text-xs text-amber-700 font-semibold uppercase tracking-wider">Founder & Managing Director</p>
                    <p className="text-xs text-stone-500 mt-0.5">Hounslow, London</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-200/60">
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                    "Our commitment at JJGM & CO is to provide every client with fresh, delicious, top-tier snacks backed by honest service and reliable UK logistics."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Company Image & Stats */}
            <div className="space-y-6">
              <div className="p-8 bg-white rounded-3xl border border-stone-200/80 text-center space-y-6 shadow-xs">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.png"
                  alt="JJGM & CO"
                  className="h-24 w-auto mx-auto object-contain"
                />

                <div className="space-y-1.5 text-xs sm:text-sm text-stone-600 border-t border-stone-200/60 pt-6">
                  <p><strong className="text-stone-900">Headquarters Address:</strong></p>
                  <p className="text-amber-700 font-semibold capitalize">{COMPANY_DETAILS.addressFormatted}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-left pt-3">
                  <div className="p-3.5 bg-[#FAF9F6] rounded-xl border border-stone-200/80 shadow-xs">
                    <div className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Direct Phone</div>
                    <div className="text-xs font-bold text-stone-900 mt-1">{COMPANY_DETAILS.phone}</div>
                  </div>
                  <div className="p-3.5 bg-[#FAF9F6] rounded-xl border border-stone-200/80 shadow-xs">
                    <div className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">Email Contact</div>
                    <div className="text-[11px] font-bold text-amber-700 mt-1 break-all">{COMPANY_DETAILS.email}</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Core Pillars — Horizontal Trade Journey / Timeline */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="pt-6">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-1">PROVEN VALUE</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">Why Businesses Choose JJGM & CO</h2>
          </div>

          {/* DESKTOP TIMELINE (Hidden on mobile) */}
          <div className="hidden lg:block relative py-6">
            {/* Subtle background radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-amber-500/5 blur-2xl rounded-full pointer-events-none" />

            {/* Horizontal connecting line */}
            <div className="absolute top-10 left-12 right-12 h-0.5 bg-gradient-to-r from-amber-500/20 via-amber-500/40 to-amber-500/20" />

            <div className="grid grid-cols-4 gap-8 relative z-10">
              {/* Item 01 */}
              <div className="space-y-3 group text-center px-3">
                <div className="w-12 h-12 rounded-full bg-white border border-amber-500/30 text-amber-600 font-extrabold text-base flex items-center justify-center mx-auto shadow-sm group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-stone-900 group-hover:border-amber-500 transition-all duration-300">
                  01
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-1.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                    <svg className="w-4 h-4 text-stone-400 group-hover:text-amber-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <h3 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider">Premium Product Range</h3>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed max-w-[220px] mx-auto">
                    Slow-roasted California whole almonds and nuts dry roasted for maximum flavor.
                  </p>
                  <div className="w-0 group-hover:w-8 h-0.5 bg-amber-500 rounded-full mx-auto transition-all duration-300" />
                </div>
              </div>

              {/* Item 02 */}
              <div className="space-y-3 group text-center px-3">
                <div className="w-12 h-12 rounded-full bg-white border border-amber-500/30 text-amber-600 font-extrabold text-base flex items-center justify-center mx-auto shadow-sm group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-stone-900 group-hover:border-amber-500 transition-all duration-300">
                  02
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-1.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                    <svg className="w-4 h-4 text-stone-400 group-hover:text-amber-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <h3 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider">100+ Wholesale Products</h3>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed max-w-[220px] mx-auto">
                    From traditional Bombay mix to European Tago wafer rolls and creatine bars.
                  </p>
                  <div className="w-0 group-hover:w-8 h-0.5 bg-amber-500 rounded-full mx-auto transition-all duration-300" />
                </div>
              </div>

              {/* Item 03 */}
              <div className="space-y-3 group text-center px-3">
                <div className="w-12 h-12 rounded-full bg-white border border-amber-500/30 text-amber-600 font-extrabold text-base flex items-center justify-center mx-auto shadow-sm group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-stone-900 group-hover:border-amber-500 transition-all duration-300">
                  03
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-1.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                    <svg className="w-4 h-4 text-stone-400 group-hover:text-amber-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <h3 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider">UK Distribution</h3>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed max-w-[220px] mx-auto">
                    Fast, dependable wholesale delivery from our Hounslow distribution hub.
                  </p>
                  <div className="w-0 group-hover:w-8 h-0.5 bg-amber-500 rounded-full mx-auto transition-all duration-300" />
                </div>
              </div>

              {/* Item 04 */}
              <div className="space-y-3 group text-center px-3">
                <div className="w-12 h-12 rounded-full bg-white border border-amber-500/30 text-amber-600 font-extrabold text-base flex items-center justify-center mx-auto shadow-sm group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-stone-900 group-hover:border-amber-500 transition-all duration-300">
                  04
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-1.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                    <svg className="w-4 h-4 text-stone-400 group-hover:text-amber-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider">Trade-Focused Pricing</h3>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed max-w-[220px] mx-auto">
                    Competitive bulk margins tailored for convenience stores and supermarkets.
                  </p>
                  <div className="w-0 group-hover:w-8 h-0.5 bg-amber-500 rounded-full mx-auto transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE & TABLET VERTICAL TIMELINE (Visible on sm & mobile) */}
          <div className="lg:hidden relative pl-6 space-y-6">
            <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-amber-500/40 via-amber-500/60 to-amber-500/40" />

            <div className="relative flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-full bg-white border border-amber-500/40 text-amber-600 font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs z-10">
                01
              </div>
              <div className="pt-1 space-y-1">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-amber-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <h3 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider">Premium Product Range</h3>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Slow-roasted California whole almonds and nuts dry roasted for maximum flavor.
                </p>
              </div>
            </div>

            <div className="relative flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-full bg-white border border-amber-500/40 text-amber-600 font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs z-10">
                02
              </div>
              <div className="pt-1 space-y-1">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-amber-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <h3 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider">100+ Wholesale Products</h3>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed">
                  From traditional Bombay mix to European Tago wafer rolls and creatine bars.
                </p>
              </div>
            </div>

            <div className="relative flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-full bg-white border border-amber-500/40 text-amber-600 font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs z-10">
                03
              </div>
              <div className="pt-1 space-y-1">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-amber-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <h3 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider">UK Distribution</h3>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Fast, dependable wholesale delivery from our Hounslow distribution hub.
                </p>
              </div>
            </div>

            <div className="relative flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-full bg-white border border-amber-500/40 text-amber-600 font-extrabold text-xs flex items-center justify-center shrink-0 shadow-xs z-10">
                04
              </div>
              <div className="pt-1 space-y-1">
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-amber-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider">Trade-Focused Pricing</h3>
                </div>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Competitive bulk margins tailored for convenience stores and supermarkets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL BRAND STORY STORYTELLING */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#FBFAF7] rounded-3xl border border-stone-200/80 shadow-xs my-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center p-2 sm:p-4">
          
          {/* Left High-Res Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden bg-white border border-stone-200/80 p-3 shadow-xl group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/mixed-nuts-bowl.jpg"
                alt="JJGM & CO Premium Wholesale Range"
                className="w-full h-[340px] sm:h-[400px] object-cover rounded-xl group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute top-6 left-6 z-10 px-3 py-1 bg-amber-500 text-stone-900 font-extrabold text-[10px] uppercase tracking-wider rounded-full shadow-md">
                UK Wholesale Quality
              </div>
            </div>
          </div>

          {/* Right Editorial Copy */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
                OUR APPROACH
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight leading-snug">
                More Than Products. <br />
                A Reliable Trade Partnership.
              </h2>
            </div>

            <div className="space-y-3.5 text-stone-600 text-xs sm:text-sm leading-relaxed">
              <p>
                At <strong>JJGM & CO.</strong>, we focus on making wholesale supply straightforward, dependable and commercially useful for the businesses we serve.
              </p>
              <p>
                Our range brings together premium nuts, savouries, wafers, confectionery and nutrition products, giving trade customers access to a broad selection through one dedicated wholesale partner.
              </p>
              <p>
                From product selection to order enquiries and distribution, our approach is built around clear communication, dependable service and long-term relationships.
              </p>
            </div>

            <div className="p-4 bg-white rounded-xl border-l-4 border-l-amber-500 border border-stone-200/80 shadow-xs">
              <p className="text-xs sm:text-sm font-bold text-stone-900">
                "Quality products. Reliable supply. Personal service."
              </p>
              <p className="text-[11px] text-stone-500 mt-0.5">
                The core philosophy guiding every wholesale delivery across the UK.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. ASYMMETRICAL EDITORIAL PRODUCT RANGE COLLAGE */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            WHOLESALE RANGE SHOWCASE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            THE RANGE WE BRING TO TRADE
          </h2>
          <p className="text-stone-500 text-xs sm:text-sm">
            Curated selection across 5 key food categories for fast retail turnover.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Large Tile: Nuts */}
          <Link
            href="/products?category=Nuts+%26+Roasted"
            className="md:col-span-7 group relative rounded-2xl overflow-hidden h-[300px] sm:h-[360px] border border-stone-200/80 shadow-md"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mixed-nuts-bowl.jpg"
              alt="Nuts & Roasted Range"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent flex items-end p-6">
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/20 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-amber-500/30">
                  CATEGORY 01
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">NUTS & ROASTED</h3>
                <p className="text-xs text-stone-300">California almonds, cashews, pistachios & roasted mixes.</p>
              </div>
            </div>
          </Link>

          {/* Small Tile: Savoury */}
          <Link
            href="/products?category=Savoury+%26+Crisps"
            className="md:col-span-5 group relative rounded-2xl overflow-hidden h-[300px] sm:h-[360px] border border-stone-200/80 shadow-md"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/products/imghunt_co_20260811_ginnis_bombay_mix_1.webp"
              alt="Savoury & Crisps"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent flex items-end p-6">
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/20 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-amber-500/30">
                  CATEGORY 02
                </span>
                <h3 className="text-xl font-bold text-white">SAVOURY & CRISPS</h3>
                <p className="text-xs text-stone-300">Traditional Bombay mix, popcorn & savouries.</p>
              </div>
            </div>
          </Link>

          {/* Small Tile: Wafers */}
          <Link
            href="/products?category=Wafers+%26+Bakery"
            className="md:col-span-4 group relative rounded-2xl overflow-hidden h-[260px] border border-stone-200/80 shadow-md"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/products/imghunt_co_20260811_tago_crispy_wafer_roll_with_tiramisu_filling_9172.jpeg"
              alt="Wafers & Bakery"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent flex items-end p-5">
              <div className="space-y-0.5">
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/20 backdrop-blur-md px-2 py-0.5 rounded-md border border-amber-500/30">
                  CATEGORY 03
                </span>
                <h3 className="text-base font-bold text-white">WAFERS & BAKERY</h3>
              </div>
            </div>
          </Link>

          {/* Small Tile: Protein */}
          <Link
            href="/products?category=Protein+%26+Creatine"
            className="md:col-span-4 group relative rounded-2xl overflow-hidden h-[260px] border border-stone-200/80 shadow-md"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/products/cookie_dough_creatine_srp_bar_f26e633a_7520_49ba_8915_d6fcde2024b6.webp"
              alt="Protein & Creatine Bars"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent flex items-end p-5">
              <div className="space-y-0.5">
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/20 backdrop-blur-md px-2 py-0.5 rounded-md border border-amber-500/30">
                  CATEGORY 04
                </span>
                <h3 className="text-base font-bold text-white">PROTEIN & CREATINE</h3>
              </div>
            </div>
          </Link>

          {/* Small Tile: Confectionery */}
          <Link
            href="/products?category=Confectionery+%26+Sweets"
            className="md:col-span-4 group relative rounded-2xl overflow-hidden h-[260px] border border-stone-200/80 shadow-md"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/products/dexters_strawberry_belts_12x180g_22441_p.png"
              alt="Confectionery & Sweets"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent flex items-end p-5">
              <div className="space-y-0.5">
                <span className="text-[9px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/20 backdrop-blur-md px-2 py-0.5 rounded-md border border-amber-500/30">
                  CATEGORY 05
                </span>
                <h3 className="text-base font-bold text-white">CONFECTIONERY</h3>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 6. WHO WE SUPPORT (BUILT FOR THE UK TRADE — REFINED CARDS) */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#FAF9F6] rounded-3xl border border-stone-200/80 my-6">
        <div className="text-center mb-10 space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            WHO WE SUPPORT
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
            Supplying Businesses Across The UK Trade
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            From independent retailers and convenience stores to supermarkets, catering businesses and trade customers, our product range is designed for dependable wholesale supply.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          
          <div className="p-5 bg-white rounded-2xl border border-stone-200/80 space-y-3 shadow-xs hover:-translate-y-[3px] hover:shadow-md hover:border-amber-500/60 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center border border-amber-500/20 mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider">RETAILERS</h3>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">Independent food shops & specialty retail outlets.</p>
            </div>
            <div className="w-6 h-0.5 bg-amber-500/40 rounded-full group-hover:w-10 group-hover:bg-amber-500 transition-all duration-300" />
          </div>

          <div className="p-5 bg-white rounded-2xl border border-stone-200/80 space-y-3 shadow-xs hover:-translate-y-[3px] hover:shadow-md hover:border-amber-500/60 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center border border-amber-500/20 mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider">CONVENIENCE</h3>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">Neighborhood convenience stores & forecourts.</p>
            </div>
            <div className="w-6 h-0.5 bg-amber-500/40 rounded-full group-hover:w-10 group-hover:bg-amber-500 transition-all duration-300" />
          </div>

          <div className="p-5 bg-white rounded-2xl border border-stone-200/80 space-y-3 shadow-xs hover:-translate-y-[3px] hover:shadow-md hover:border-amber-500/60 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center border border-amber-500/20 mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider">SUPERMARKETS</h3>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">Regional grocery supermarkets and food halls.</p>
            </div>
            <div className="w-6 h-0.5 bg-amber-500/40 rounded-full group-hover:w-10 group-hover:bg-amber-500 transition-all duration-300" />
          </div>

          <div className="p-5 bg-white rounded-2xl border border-stone-200/80 space-y-3 shadow-xs hover:-translate-y-[3px] hover:shadow-md hover:border-amber-500/60 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center border border-amber-500/20 mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider">CATERING</h3>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">Catering suppliers, hospitality venues & events.</p>
            </div>
            <div className="w-6 h-0.5 bg-amber-500/40 rounded-full group-hover:w-10 group-hover:bg-amber-500 transition-all duration-300" />
          </div>

          <div className="p-5 bg-white rounded-2xl border border-stone-200/80 space-y-3 shadow-xs hover:-translate-y-[3px] hover:shadow-md hover:border-amber-500/60 transition-all duration-300 group flex flex-col justify-between col-span-2 sm:col-span-1">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center border border-amber-500/20 mb-3 group-hover:scale-110 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider">TRADE BUYERS</h3>
              <p className="text-xs text-stone-500 mt-1 leading-relaxed">Wholesale distributors and regional trade buyers.</p>
            </div>
            <div className="w-6 h-0.5 bg-amber-500/40 rounded-full group-hover:w-10 group-hover:bg-amber-500 transition-all duration-300" />
          </div>

        </div>
      </section>

      {/* 7. UK DISTRIBUTION FEATURE PANEL */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#FAF9F6] rounded-3xl p-8 sm:p-12 border border-stone-200/80 shadow-sm space-y-8 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
                UK DISTRIBUTION
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
                From Hounslow To The Trade.
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Based in Hounslow, London, JJGM & CO. operates with a clear focus on wholesale distribution and dependable trade supply across the UK.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 relative">
                <div className="p-4 bg-white rounded-xl border border-stone-200/80 text-center space-y-1 shadow-xs hover:border-amber-500/50 transition-colors">
                  <span className="text-amber-600 font-black text-xs block">01</span>
                  <h4 className="text-xs font-bold text-stone-900 uppercase">PRODUCT SELECTION</h4>
                  <p className="text-[11px] text-stone-500">Fresh stock catalog</p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-stone-200/80 text-center space-y-1 shadow-xs hover:border-amber-500/50 transition-colors">
                  <span className="text-amber-600 font-black text-xs block">02</span>
                  <h4 className="text-xs font-bold text-stone-900 uppercase">WHOLESALE ORDER</h4>
                  <p className="text-[11px] text-stone-500">Trade order specs</p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-stone-200/80 text-center space-y-1 shadow-xs hover:border-amber-500/50 transition-colors">
                  <span className="text-amber-600 font-black text-xs block">03</span>
                  <h4 className="text-xs font-bold text-stone-900 uppercase">DISTRIBUTION</h4>
                  <p className="text-[11px] text-stone-500">Hounslow hub dispatch</p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-stone-200/80 text-center space-y-1 shadow-xs hover:border-amber-500/50 transition-colors">
                  <span className="text-amber-600 font-black text-xs block">04</span>
                  <h4 className="text-xs font-bold text-stone-900 uppercase">TRADE DELIVERY</h4>
                  <p className="text-[11px] text-stone-500">Direct to your business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. COMPANY VALUES (EDITORIAL 2-COLUMN LAYOUT) */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            GUIDING PRINCIPLES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mt-1">
            THE PRINCIPLES BEHIND JGJM & CO.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="p-8 bg-stone-900 text-white rounded-3xl space-y-3 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
              <h3 className="text-3xl font-black text-amber-400 leading-tight">
                Quality. <br />
                Reliability. <br />
                Partnership. <br />
                Consistency.
              </h3>
              <p className="text-xs text-stone-400 pt-3 border-t border-white/10">
                The foundation of our UK wholesale operations.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-1">
              <h3 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider">Quality</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                We focus strictly on food products that trade customers and retail consumers can trust for fresh taste, consistent packaging, and top-grade ingredients.
              </p>
            </div>

            <div className="space-y-1 pt-3 border-t border-stone-200/60">
              <h3 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider">Reliability</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Consistency in stock availability, packaging specification, and order fulfillment is at the heart of our commercial promise to every client.
              </p>
            </div>

            <div className="space-y-1 pt-3 border-t border-stone-200/60">
              <h3 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider">Partnership</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                We aim to build long-term, mutually beneficial commercial relationships with independent retailers, stores, and distribution partners.
              </p>
            </div>

            <div className="space-y-1 pt-3 border-t border-stone-200/60">
              <h3 className="text-sm font-extrabold text-stone-900 uppercase tracking-wider">Consistency</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Dependable wholesale product supply across every order, helping businesses maintain stock confidence without supply chain friction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FINAL PARTNERSHIP CTA */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="p-8 sm:p-14 bg-[#F7F5F1] rounded-3xl border border-stone-200/80 text-center space-y-6 shadow-xl relative overflow-hidden">
          <span className="inline-block px-4 py-1.5 bg-amber-500/10 text-amber-700 text-xs font-extrabold uppercase tracking-widest rounded-full border border-amber-500/20">
            WORK WITH JGJM & CO.
          </span>

          <h2 className="text-2xl sm:text-4xl font-black text-stone-900 tracking-tight">
            Let's Build A Better Wholesale Partnership.
          </h2>

          <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Explore our product range, discover products for your business, or speak directly with our team about your wholesale requirements.
          </p>

          <div className="pt-2 flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/products"
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-900 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-amber-500/20"
            >
              VIEW PRODUCT CATALOGUE
            </Link>

            <Link
              href="/inquiry"
              className="px-6 py-3.5 bg-stone-900 hover:bg-stone-800 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-stone-900/10"
            >
              REQUEST A QUOTE
            </Link>
          </div>
        </div>

        {/* Preserved Original Connect Button */}
        <div className="text-center pt-10">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-amber-500 text-stone-900 font-extrabold text-sm uppercase tracking-widest rounded-full hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/20"
          >
            Connect With JJGM & CO Today
          </Link>
        </div>
      </section>
    </main>
  );
}
