import React from "react";
import Link from "next/link";
import { COMPANY_DETAILS } from "@/data/products";

export default function AboutPage() {
  return (
    <main className="bg-[#0d0c0a] min-h-screen text-white pt-24 pb-24">
      {/* Header Banner */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1c1914] via-[#12100d] to-[#0d0c0a] border-b border-white/10 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest border border-amber-500/30">
            About JJGM & CO
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">
            Our Legacy & <span className="text-amber-400">Wholesale Mission</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg">
            Connecting London and UK businesses with premium nuts, traditional savouries, fine European wafers, and high-protein nutrition.
          </p>
        </div>
      </section>

      {/* Main Story & Founder Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-white">
              The Story of <span className="text-amber-400">JJGM & CO</span>
            </h2>

            <p className="text-gray-300 leading-relaxed text-base">
              <strong>JJGM & CO</strong> was established with a singular vision: to deliver superior quality almonds, roasted nuts, authentic Bombay mixes, and international confectionery directly to retailers, supermarkets, and hospitality venues across the United Kingdom.
            </p>

            <p className="text-gray-300 leading-relaxed text-base">
              Under the leadership of our founder, <strong className="text-amber-300 capitalize">{COMPANY_DETAILS.founder}</strong>, we have built a trusted reputation for consistent supply, competitive trade prices, and uncompromised food freshness.
            </p>

            {/* Founder Card */}
            <div className="p-6 bg-gradient-to-br from-[#1a1713] to-[#100e0b] rounded-2xl border border-amber-500/30 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-amber-500 text-black flex items-center justify-center font-black text-xl">
                  GD
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white capitalize">{COMPANY_DETAILS.founder}</h3>
                  <p className="text-xs text-amber-400 uppercase tracking-wider">Founder & Managing Director</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 italic">
                "Our commitment at JJGM & CO is to provide every client with fresh, delicious, top-tier snacks backed by honest service and reliable UK logistics."
              </p>
            </div>
          </div>

          {/* Right Column: Company Image & Stats */}
          <div className="space-y-6">
            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 text-center space-y-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="JJGM & CO"
                className="h-28 w-auto mx-auto object-contain"
              />

              <div className="space-y-2 text-sm text-gray-300 border-t border-white/10 pt-6">
                <p><strong>Headquarters Address:</strong></p>
                <p className="text-amber-400 font-semibold capitalize">{COMPANY_DETAILS.address}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-left pt-4">
                <div className="p-4 bg-black/40 rounded-xl">
                  <div className="text-xs text-gray-400 uppercase">Direct Phone</div>
                  <div className="text-sm font-bold text-white mt-1">{COMPANY_DETAILS.phone}</div>
                </div>
                <div className="p-4 bg-black/40 rounded-xl">
                  <div className="text-xs text-gray-400 uppercase">Email Contact</div>
                  <div className="text-xs font-bold text-amber-300 mt-1 break-all">{COMPANY_DETAILS.email}</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Core Pillars */}
        <div className="pt-12 border-t border-white/10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Why Businesses Choose JJGM & CO</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">01</div>
              <h3 className="text-lg font-bold text-white">Artisanal Crunch</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Slow-roasted California whole almonds and nuts dry roasted for maximum flavor.
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">02</div>
              <h3 className="text-lg font-bold text-white">100+ Catalog Items</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                From traditional Bombay mix to European Tago wafer rolls and creatine bars.
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">03</div>
              <h3 className="text-lg font-bold text-white">UK Wholesale Network</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Fast, dependable wholesale delivery from our Hounslow distribution hub.
              </p>
            </div>

            <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">04</div>
              <h3 className="text-lg font-bold text-white">Trade Pricing</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
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
