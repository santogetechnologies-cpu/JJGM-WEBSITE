"use client";

import React, { useState } from "react";
import Link from "next/link";
import { COMPANY_DETAILS } from "@/data/products";

type TradeChannelKey = "retailers" | "convenience" | "supermarkets" | "catering" | "tradeBuyers";

const tradeChannels: Record<
  TradeChannelKey,
  {
    id: TradeChannelKey;
    tag: string;
    badge: string;
    title: string;
    shortDesc: string;
    description: string;
    idealFor: string[];
    productFocus: string[];
    tradeAdvantage: string;
    icon: React.ReactNode;
  }
> = {
  retailers: {
    id: "retailers",
    tag: "RETAILERS",
    badge: "RETAIL CHANNEL",
    title: "Independent Retail & Specialty Stores",
    shortDesc: "Independent food shops & specialty retail outlets.",
    description:
      "JJGM & CO supports independent food shops, gourmet delicatessens and specialty retailers with dependable wholesale supply across high-margin snacking and confectionery lines.",
    idealFor: [
      "Independent food shops & grocers",
      "Specialist & artisan food retailers",
      "Delicatessens & farm shops",
      "Local high-street snack retailers",
    ],
    productFocus: [
      "California roasted almonds & whole nuts",
      "Traditional Indian Bombay mix & sev",
      "European premium wafer rolls & biscuits",
      "Gourmet bagged confectionery & jellies",
      "High-protein snack bars",
    ],
    tradeAdvantage:
      "Accessible case quantities, broad product selection, long shelf-life items, and rapid dispatch from our Hounslow London hub.",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  convenience: {
    id: "convenience",
    tag: "CONVENIENCE",
    badge: "NEIGHBOURHOOD OUTLETS",
    title: "Forecourts, Newsagents & Convenience Stores",
    shortDesc: "Neighborhood convenience stores & forecourts.",
    description:
      "Tailored for high footfall convenience stores, newsagents and forecourts requiring fast-moving impulse confectionery, sweet bags and everyday grab-and-go snack ranges.",
    idealFor: [
      "Neighbourhood convenience stores",
      "Petrol station forecourts & kiosks",
      "High-turnover newsagents & CTNs",
      "Transit station retail outlets",
    ],
    productFocus: [
      "Single-serve savoury bags & nuts",
      "Impulse sweet bags, belts & cables",
      "Creatine & protein energy bars",
      "Counter display SRP packs",
      "Pre-priced impulse snack cards",
    ],
    tradeAdvantage:
      "Strong trade margins, compact shelf-ready packaging (SRP), rapid repeat order turnaround, and steady high-turnover lines.",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  supermarkets: {
    id: "supermarkets",
    tag: "SUPERMARKETS",
    badge: "GROCERY CHAINS",
    title: "Regional Grocery Supermarkets & Food Halls",
    shortDesc: "Regional grocery supermarkets and food halls.",
    description:
      "Catering to regional supermarket chains, multi-branch grocers and large food halls requiring consistent pallet volume, robust barcode compliance, and steady year-round inventory.",
    idealFor: [
      "Multi-branch grocery supermarket chains",
      "Regional independent food halls",
      "High-volume ethnic supermarkets",
      "Commercial department store food halls",
    ],
    productFocus: [
      "Full wholesale snack & nut catalog",
      "Large case assortments & multi-packs",
      "Premium wafer tins & seasonal bakery",
      "Bulk roasted nuts & specialty pulse mixes",
      "Private-label & commercial lines",
    ],
    tradeAdvantage:
      "Tiered volume wholesale pricing, scheduled pallet-ready distribution across the UK, and dedicated trade account management.",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  catering: {
    id: "catering",
    tag: "CATERING",
    badge: "FOODSERVICE & VENUES",
    title: "Hospitality, Bars, Venues & Event Foodservice",
    shortDesc: "Catering suppliers, hospitality venues & events.",
    description:
      "Supporting catering suppliers, corporate hospitality venues, hotels, bars and event caterers with bulk quality snacks, pub card nuts, and foodservice snacking essentials.",
    idealFor: [
      "Pubs, bars & hospitality venues",
      "Hotel minibars, lounges & conference suites",
      "Event caterers & festival food services",
      "Corporate catering & office pantries",
    ],
    productFocus: [
      "Pub hanging card nuts & savoury snacks",
      "Bulk catering pack confectionery & sweets",
      "High-protein nutrition bars for gyms/venues",
      "Individually wrapped wafer snacks",
      "Premium dry-roasted nut blends",
    ],
    tradeAdvantage:
      "Consistent product quality standards, straightforward trade ordering, transparent invoicing, and dependable UK delivery schedules.",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  tradeBuyers: {
    id: "tradeBuyers",
    tag: "TRADE BUYERS",
    badge: "COMMERCIAL WHOLESALE",
    title: "Wholesale Distributors & Regional Trade Buyers",
    shortDesc: "Wholesale distributors and regional trade buyers.",
    description:
      "Partnering with regional wholesalers, cash & carry operators and B2B trade intermediaries seeking dependable master carton cases and high-volume trade supply.",
    idealFor: [
      "Cash & carry wholesale operators",
      "Regional sub-distributors & wholesalers",
      "B2B commodity & food trading houses",
      "Commercial institutional procurement",
    ],
    productFocus: [
      "Full master carton cases & pallet loads",
      "Comprehensive 100+ SKU wholesale catalog",
      "Multi-category container shipments",
      "Wholesale confectionery & savoury staples",
      "Direct bulk nutrition & snack supplies",
    ],
    tradeAdvantage:
      "Maximum commercial margins for distributors, dedicated logistics support from our London hub, and prioritized trade fulfillment.",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
};

export default function AboutPage() {
  const [selectedChannelKey, setSelectedChannelKey] = useState<TradeChannelKey | null>(null);
  const modalChannel = selectedChannelKey ? tradeChannels[selectedChannelKey] : null;

  // Handle ESC key & scroll locking
  React.useEffect(() => {
    if (selectedChannelKey) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setSelectedChannelKey(null);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedChannelKey]);

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

      {/* 3. MAIN STORY & FOUNDER SECTION — WITH PROMINENT NUTS PHOTOGRAPHY BACKGROUND */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-4">
        <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 border border-amber-500/20 shadow-xs overflow-hidden bg-[#FAF8F5]">
          
          {/* Layer 1: Clearly Recognizable Mixed Nuts Photography Layer (45-50% opacity, minimal 3px blur) */}
          <div
            className="absolute inset-0 bg-no-repeat bg-cover bg-[center_right] pointer-events-none select-none z-0 filter blur-[3px] opacity-40 sm:opacity-50 scale-105"
            style={{
              backgroundImage: "url('/images/nuts-flow-bg.png')",
            }}
          />

          {/* Layer 2: Targeted Linear Gradient Overlay (Left text protected, Right side highly photographic) */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.72) 38%, rgba(255, 248, 238, 0.35) 70%, rgba(255, 248, 238, 0.18) 100%)",
            }}
          />

          {/* Subtle Warm Amber Glow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/[0.04] blur-3xl rounded-full pointer-events-none z-0" />

          {/* Layer 3: Section Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10">

            <div className="space-y-6">
              <div className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">
                  OUR FOUNDATION
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
                  The Story of <span className="text-amber-600">JJGM & CO</span>
                </h2>
              </div>

              <p className="text-stone-900 leading-relaxed text-sm sm:text-base font-medium">
                <strong>JJGM & CO</strong> was established with a singular vision: to deliver superior quality almonds, roasted nuts, authentic Bombay mixes, and international confectionery directly to retailers, supermarkets, and hospitality venues across the United Kingdom.
              </p>

              <p className="text-stone-900 leading-relaxed text-sm sm:text-base font-medium">
                Under the leadership of our founder, <strong className="text-amber-700 capitalize">{COMPANY_DETAILS.founder}</strong>, we have built a trusted reputation for consistent supply, competitive trade prices, and uncompromised food freshness.
              </p>

              {/* Translucent Frosted Glass Founder Card */}
              <div className="p-6 bg-white/75 backdrop-blur-md rounded-2xl border border-stone-200/70 space-y-4 shadow-sm relative overflow-hidden">
                <div className="text-center pb-4 border-b border-stone-200/70">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">Built by People Who Know the Trade</p>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
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

                <div className="pt-3 border-t border-stone-200/70">
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                    "Our commitment at JJGM & CO is to provide every client with fresh, delicious, top-tier snacks backed by honest service and reliable UK logistics."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Company Image & Stats */}
            <div className="space-y-6">
              <div className="p-8 bg-white/75 backdrop-blur-md rounded-3xl border border-stone-200/70 text-center space-y-6 shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.png"
                  alt="JJGM & CO"
                  className="h-24 w-auto mx-auto object-contain drop-shadow-xs"
                />

                <div className="space-y-1.5 text-xs sm:text-sm text-stone-600 border-t border-stone-200/70 pt-6">
                  <p><strong className="text-stone-900">Headquarters Address:</strong></p>
                  <p className="text-amber-700 font-semibold capitalize">{COMPANY_DETAILS.addressFormatted}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left pt-3">
                  {/* Phone Action Card */}
                  <a
                    href={`tel:${COMPANY_DETAILS.phone}`}
                    className="p-4 bg-[#171717] rounded-2xl border border-white/10 hover:border-amber-500/70 hover:shadow-lg hover:shadow-amber-500/10 hover:-translate-y-0.5 transition-all duration-200 block group"
                  >
                    <div className="text-[11px] text-white/55 font-bold uppercase tracking-wider flex items-center justify-between">
                      <span>Direct Phone</span>
                      <svg className="w-3.5 h-3.5 text-amber-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white mt-1 group-hover:text-amber-400 transition-colors">
                      {COMPANY_DETAILS.phone}
                    </div>
                  </a>

                  {/* Email Action Card */}
                  <a
                    href={`mailto:${COMPANY_DETAILS.email}`}
                    className="p-4 bg-[#171717] rounded-2xl border border-white/10 hover:border-amber-500/70 hover:shadow-lg hover:shadow-amber-500/10 hover:-translate-y-0.5 transition-all duration-200 block group"
                  >
                    <div className="text-[11px] text-white/55 font-bold uppercase tracking-wider flex items-center justify-between">
                      <span>Email Contact</span>
                      <svg className="w-3.5 h-3.5 text-amber-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-[11px] sm:text-xs font-bold text-white mt-1 break-all group-hover:text-amber-400 transition-colors">
                      {COMPANY_DETAILS.email}
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Core Pillars — Premium Editorial Trade Journey / Timeline */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto my-4">
        {/* Subtle Warm Radial Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/[0.04] blur-3xl rounded-full pointer-events-none" />

        {/* Section Heading */}
        <div className="text-center mb-16 space-y-2 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block">
            PROVEN VALUE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight">
            Why Businesses Choose JJGM & CO
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto pt-1 rounded-full" />
        </div>

        {/* DESKTOP ALTERNATING VERTICAL TIMELINE */}
        <div className="hidden md:block relative py-6">
          {/* Central Vertical Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-amber-500/10 via-amber-500/40 to-amber-500/10" />

          <div className="space-y-14 relative z-10">
            {/* Item 01 - Premium Product Range (Left side) */}
            <div className="grid grid-cols-2 gap-12 sm:gap-16 items-center group">
              <div className="text-right pr-6 space-y-1.5 transition-transform duration-300 group-hover:translate-x-1">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-amber-600 block">
                  PREMIUM SELECTION
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-stone-900 tracking-tight group-hover:text-amber-600 transition-colors duration-200">
                  Premium Product Range
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-sm ml-auto">
                  Slow-roasted California whole almonds and nuts dry roasted for maximum flavor.
                </p>
              </div>

              <div className="relative flex items-center pl-6">
                {/* Horizontal connector branch */}
                <div className="h-px w-10 sm:w-14 bg-gradient-to-r from-amber-500/50 to-transparent group-hover:from-amber-500 transition-colors duration-300 ml-8" />
                {/* Large Icon Medallion sitting on center line */}
                <div className="absolute -left-7 sm:-left-8 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-white via-[#FCFAF8] to-amber-50/80 border-2 border-amber-500/35 text-amber-600 flex items-center justify-center shadow-md shadow-amber-950/5 group-hover:scale-105 group-hover:border-amber-500 group-hover:shadow-lg group-hover:shadow-amber-500/20 group-hover:bg-white transition-all duration-300">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Item 02 - 100+ Wholesale Products (Right side) */}
            <div className="grid grid-cols-2 gap-12 sm:gap-16 items-center group">
              <div className="relative flex items-center justify-end pr-6">
                {/* Horizontal connector branch */}
                <div className="h-px w-10 sm:w-14 bg-gradient-to-l from-amber-500/50 to-transparent group-hover:from-amber-500 transition-colors duration-300 mr-8" />
                {/* Large Icon Medallion sitting on center line */}
                <div className="absolute -right-7 sm:-right-8 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-white via-[#FCFAF8] to-amber-50/80 border-2 border-amber-500/35 text-amber-600 flex items-center justify-center shadow-md shadow-amber-950/5 group-hover:scale-105 group-hover:border-amber-500 group-hover:shadow-lg group-hover:shadow-amber-500/20 group-hover:bg-white transition-all duration-300">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
              </div>

              <div className="text-left pl-6 space-y-1.5 transition-transform duration-300 group-hover:-translate-x-1">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-amber-600 block">
                  WIDE RANGE
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-stone-900 tracking-tight group-hover:text-amber-600 transition-colors duration-200">
                  100+ Wholesale Products
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-sm mr-auto">
                  From traditional Bombay mix to European Tago wafer rolls and creatine bars.
                </p>
              </div>
            </div>

            {/* Item 03 - UK Distribution (Left side) */}
            <div className="grid grid-cols-2 gap-12 sm:gap-16 items-center group">
              <div className="text-right pr-6 space-y-1.5 transition-transform duration-300 group-hover:translate-x-1">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-amber-600 block">
                  UK SUPPLY
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-stone-900 tracking-tight group-hover:text-amber-600 transition-colors duration-200">
                  UK Distribution
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-sm ml-auto">
                  Fast, dependable wholesale delivery from our Hounslow distribution hub.
                </p>
              </div>

              <div className="relative flex items-center pl-6">
                {/* Horizontal connector branch */}
                <div className="h-px w-10 sm:w-14 bg-gradient-to-r from-amber-500/50 to-transparent group-hover:from-amber-500 transition-colors duration-300 ml-8" />
                {/* Large Icon Medallion sitting on center line */}
                <div className="absolute -left-7 sm:-left-8 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-white via-[#FCFAF8] to-amber-50/80 border-2 border-amber-500/35 text-amber-600 flex items-center justify-center shadow-md shadow-amber-950/5 group-hover:scale-105 group-hover:border-amber-500 group-hover:shadow-lg group-hover:shadow-amber-500/20 group-hover:bg-white transition-all duration-300">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Item 04 - Trade-Focused Pricing (Right side) */}
            <div className="grid grid-cols-2 gap-12 sm:gap-16 items-center group">
              <div className="relative flex items-center justify-end pr-6">
                {/* Horizontal connector branch */}
                <div className="h-px w-10 sm:w-14 bg-gradient-to-l from-amber-500/50 to-transparent group-hover:from-amber-500 transition-colors duration-300 mr-8" />
                {/* Large Icon Medallion sitting on center line */}
                <div className="absolute -right-7 sm:-right-8 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-white via-[#FCFAF8] to-amber-50/80 border-2 border-amber-500/35 text-amber-600 flex items-center justify-center shadow-md shadow-amber-950/5 group-hover:scale-105 group-hover:border-amber-500 group-hover:shadow-lg group-hover:shadow-amber-500/20 group-hover:bg-white transition-all duration-300">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
              </div>

              <div className="text-left pl-6 space-y-1.5 transition-transform duration-300 group-hover:-translate-x-1">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-amber-600 block">
                  TRADE VALUE
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-stone-900 tracking-tight group-hover:text-amber-600 transition-colors duration-200">
                  Trade-Focused Pricing
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-sm mr-auto">
                  Competitive bulk margins tailored for convenience stores and supermarkets.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE & TABLET VERTICAL TIMELINE */}
        <div className="md:hidden relative pl-8 sm:pl-10 space-y-9 pt-2">
          {/* Vertical line on left */}
          <div className="absolute left-[23px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-amber-500/30 via-amber-500/60 to-amber-500/30" />

          {/* Item 01 */}
          <div className="relative flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-full bg-white border-2 border-amber-500/40 text-amber-600 flex items-center justify-center shrink-0 shadow-xs z-10 -ml-[30px] group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-stone-900 transition-all duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div className="space-y-1 pt-0.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 block">
                PREMIUM SELECTION
              </span>
              <h3 className="text-base font-extrabold text-stone-900 tracking-tight">
                Premium Product Range
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Slow-roasted California whole almonds and nuts dry roasted for maximum flavor.
              </p>
            </div>
          </div>

          {/* Item 02 */}
          <div className="relative flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-full bg-white border-2 border-amber-500/40 text-amber-600 flex items-center justify-center shrink-0 shadow-xs z-10 -ml-[30px] group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-stone-900 transition-all duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div className="space-y-1 pt-0.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 block">
                WIDE RANGE
              </span>
              <h3 className="text-base font-extrabold text-stone-900 tracking-tight">
                100+ Wholesale Products
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                From traditional Bombay mix to European Tago wafer rolls and creatine bars.
              </p>
            </div>
          </div>

          {/* Item 03 */}
          <div className="relative flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-full bg-white border-2 border-amber-500/40 text-amber-600 flex items-center justify-center shrink-0 shadow-xs z-10 -ml-[30px] group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-stone-900 transition-all duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="space-y-1 pt-0.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 block">
                UK SUPPLY
              </span>
              <h3 className="text-base font-extrabold text-stone-900 tracking-tight">
                UK Distribution
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Fast, dependable wholesale delivery from our Hounslow distribution hub.
              </p>
            </div>
          </div>

          {/* Item 04 */}
          <div className="relative flex items-start gap-4 group">
            <div className="w-12 h-12 rounded-full bg-white border-2 border-amber-500/40 text-amber-600 flex items-center justify-center shrink-0 shadow-xs z-10 -ml-[30px] group-hover:border-amber-500 group-hover:bg-amber-500 group-hover:text-stone-900 transition-all duration-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <div className="space-y-1 pt-0.5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 block">
                TRADE VALUE
              </span>
              <h3 className="text-base font-extrabold text-stone-900 tracking-tight">
                Trade-Focused Pricing
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Competitive bulk margins tailored for convenience stores and supermarkets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL BRAND STORY STORYTELLING */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-[#FBFAF7] rounded-3xl border border-stone-200/80 shadow-xs my-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center p-2 sm:p-4">

          {/* Left High-Res Visual */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[20px] overflow-hidden shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/our-approach-nuts.jpg"
                alt="JJGM & CO Premium Wholesale Range"
                className="w-full h-[360px] sm:h-[420px] object-cover rounded-[20px]"
              />
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

      {/* 6. WHO WE SUPPORT (PREMIUM TRADE ECOSYSTEM — ASYMMETRIC COMPOSITION) */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-6 bg-[#FFFCF7] rounded-3xl border border-stone-200/80 shadow-xs overflow-hidden">
        {/* Subtle Watermark & Radial Glow */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/[0.04] blur-3xl rounded-full pointer-events-none" />
        <div className="absolute -bottom-8 left-6 text-[120px] sm:text-[180px] font-black text-stone-900/[0.02] tracking-tighter select-none pointer-events-none leading-none">
          TRADE
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10 p-2 sm:p-4">

          {/* Left ~45%: Editorial Heading & Statement */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block">
                WHO WE SUPPORT
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
                Supplying Businesses Across The UK Trade
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">
                From independent retailers and convenience stores to supermarkets, catering businesses and trade customers, our product range is designed for dependable wholesale supply.
              </p>
            </div>

            {/* Editorial Statement */}
            <div className="pt-6 border-t border-stone-200/80 space-y-2">
              <p className="text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight tracking-tight">
                One wholesale partner. <br />
                <span className="text-amber-600">Multiple trade channels.</span>
              </p>
              <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                Connecting UK businesses with dependable wholesale confectionery, roasted nuts, savoury snacks and bakery supply.
              </p>
            </div>

            {/* Quick Category Highlights (Pill Badges) */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1.5 rounded-full bg-white border border-stone-200/80 text-[11px] font-bold text-stone-700 shadow-2xs hover:border-amber-500 hover:text-amber-700 transition-colors">
                • Retail Stores
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-stone-200/80 text-[11px] font-bold text-stone-700 shadow-2xs hover:border-amber-500 hover:text-amber-700 transition-colors">
                • Forecourts & Convenience
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-stone-200/80 text-[11px] font-bold text-stone-700 shadow-2xs hover:border-amber-500 hover:text-amber-700 transition-colors">
                • Supermarkets
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-stone-200/80 text-[11px] font-bold text-stone-700 shadow-2xs hover:border-amber-500 hover:text-amber-700 transition-colors">
                • Catering & Events
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-stone-200/80 text-[11px] font-bold text-stone-700 shadow-2xs hover:border-amber-500 hover:text-amber-700 transition-colors">
                • Regional Distributors
              </span>
            </div>
          </div>

          {/* Right ~55%: Hero Warehouse Visual with Floating Trade Category Tags */}
          <div className="lg:col-span-7 relative space-y-4">
            <div className="relative rounded-[28px] overflow-hidden shadow-2xl shadow-stone-950/10 border border-stone-200/80 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/warehouse-trade.jpg"
                alt="JJGM & CO UK Warehouse, Logistics & Wholesale Supply"
                className="w-full h-[400px] sm:h-[480px] object-cover rounded-[28px] group-hover:scale-[1.01] transition-transform duration-500"
              />
              {/* Subtle dark gradient overlay at the bottom to ensure caption readability without washing out warehouse/truck */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent pointer-events-none" />

              {/* Top Badge Overlay */}
              <div className="absolute top-5 left-5 z-10 flex items-center gap-2 px-3.5 py-1.5 bg-amber-500 text-stone-950 font-extrabold text-[11px] uppercase tracking-wider rounded-full shadow-md">
                <span className="w-2 h-2 rounded-full bg-stone-950 animate-pulse" />
                <span>UK Wholesale Distribution Hub</span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-5 left-5 right-5 text-white space-y-1 z-10">
                <p className="text-base sm:text-lg font-extrabold leading-snug">
                  Supplying UK Retailers, Convenience Forecourts, Supermarkets & Foodservice.
                </p>
                <p className="text-xs text-stone-300">
                  Dependable wholesale pallet logistics & prompt distribution direct from Hounslow.
                </p>
              </div>
            </div>

            {/* 5 Spacious Category Selectors — Click opens Modal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {(Object.keys(tradeChannels) as TradeChannelKey[]).map((key, idx) => {
                const channel = tradeChannels[key];
                const isLast = idx === Object.keys(tradeChannels).length - 1;

                return (
                  <button
                    key={channel.id}
                    type="button"
                    id={`channel-btn-${channel.id}`}
                    onClick={() => setSelectedChannelKey(key)}
                    className={`p-4 rounded-2xl bg-white/95 backdrop-blur-xs border border-stone-200/90 hover:border-amber-500/80 hover:bg-white hover:shadow-md hover:-translate-y-0.5 text-left transition-all duration-250 flex items-center justify-between gap-3 group cursor-pointer ${isLast ? "sm:col-span-2" : ""
                      }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 border border-amber-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-amber-500 group-hover:text-stone-950 transition-all">
                        {channel.icon}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-stone-900 group-hover:text-amber-600 transition-colors">
                          {channel.tag}
                        </h3>
                        <p className="text-[11px] text-stone-500 truncate mt-0.5">
                          {channel.shortDesc}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-1 text-[11px] font-bold text-stone-400 group-hover:text-amber-600 transition-colors pl-2">
                      <span className="hidden sm:inline">View details</span>
                      <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* PREMIUM MODAL / POPUP FOR TRADE CHANNEL DETAILS */}
        {modalChannel && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-channel-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedChannelKey(null);
              }
            }}
          >
            <div className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-[#FCFAF7] border border-stone-200/90 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 sm:space-y-8 animate-fadeIn text-stone-900">

              {/* Top Close Button (Circular X) */}
              <button
                type="button"
                onClick={() => setSelectedChannelKey(null)}
                aria-label="Close details"
                className="absolute top-5 right-5 sm:top-6 sm:right-6 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-stone-200 text-stone-600 hover:text-stone-900 hover:border-amber-500 hover:bg-amber-500/10 transition-all flex items-center justify-center shadow-xs cursor-pointer z-20 group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Header */}
              <div className="pr-12 space-y-2 border-b border-stone-200/80 pb-5">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 inline-block">
                  {modalChannel.badge}
                </span>
                <h2 id="modal-channel-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
                  {modalChannel.tag}
                </h2>
                <p className="text-sm sm:text-base font-semibold text-amber-700">
                  {modalChannel.title}
                </p>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pt-1">
                  {modalChannel.description}
                </p>
              </div>

              {/* 3 Spacious Detail Sections */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-1">

                {/* Col 1: IDEAL FOR */}
                <div className="p-5 rounded-2xl bg-white border border-stone-200/80 space-y-3 shadow-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-stone-900">
                      IDEAL FOR
                    </h3>
                  </div>
                  <ul className="space-y-2 text-xs text-stone-600 leading-relaxed">
                    {modalChannel.idealFor.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Col 2: PRODUCT FOCUS */}
                <div className="p-5 rounded-2xl bg-white border border-stone-200/80 space-y-3 shadow-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-stone-900">
                      PRODUCT FOCUS
                    </h3>
                  </div>
                  <ul className="space-y-2 text-xs text-stone-600 leading-relaxed">
                    {modalChannel.productFocus.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Col 3: TRADE ADVANTAGE */}
                <div className="p-5 rounded-2xl bg-amber-500/[0.08] border border-amber-500/25 space-y-3 shadow-xs flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                      <h3 className="text-xs font-extrabold uppercase tracking-wider text-amber-800">
                        TRADE ADVANTAGE
                      </h3>
                    </div>
                    <p className="text-xs text-stone-700 leading-relaxed">
                      {modalChannel.tradeAdvantage}
                    </p>
                  </div>

                  <div className="pt-3">
                    <Link
                      href="/products"
                      onClick={() => setSelectedChannelKey(null)}
                      className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm"
                    >
                      <span>Explore Wholesale Range</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}
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
