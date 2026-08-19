import React from "react";
import Link from "next/link";
import { COMPANY_DETAILS } from "@/data/products";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F7F5F1] border-t border-stone-200/80 pt-12 pb-8 md:pt-16 md:pb-10 text-stone-700 relative overflow-hidden">
      {/* Subtle top ambient warm glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-amber-500/5 blur-3xl pointer-events-none" />

      {/* Centered inner max-width content area */}
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-stone-200/60 pb-10">

          {/* Column 1: Company Logo & Founder Info */}
          <div className="space-y-4 lg:pr-8 pb-6 sm:pb-0">
            <div className="inline-block p-3.5 bg-white rounded-2xl border border-stone-200/80 shadow-md shadow-stone-900/5 hover:-translate-y-0.5 hover:shadow-lg hover:border-amber-500/30 transition-all duration-300">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="JJGM & CO Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-stone-500 leading-relaxed max-w-xs">
              Premier UK Wholesale & Retail Distributor of Premium Almonds, Nuts, Savouries, Wafers, Bakery & Confectionery.
            </p>

            {/* Founder Highlight Badge */}
            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-stone-700 text-xs font-medium shadow-xs hover:bg-amber-500/15 hover:border-amber-500/40 hover:-translate-y-0.5 transition-all duration-300">
                <svg className="w-3.5 h-3.5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Founder: <strong className="text-stone-900 capitalize">{COMPANY_DETAILS.founder}</strong></span>
              </div>
            </div>
          </div>

          {/* Column 2: Direct Contact Details */}
          <div className="space-y-4 pt-6 sm:pt-0 lg:px-8 lg:pt-0">
            <div className="group space-y-2">
              <h4 className="text-stone-900 text-xs font-bold uppercase tracking-wider">
                Official Contact
              </h4>
              <div className="w-8 h-0.5 bg-gradient-to-r from-amber-500 via-amber-500 to-amber-500/20 rounded-full group-hover:w-11 transition-all duration-300" />
            </div>
            <ul className="space-y-3.5 text-xs divide-y divide-stone-200/40">
              <li className="flex items-center gap-3 pt-2 first:pt-0 group">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <strong className="block text-stone-900 mb-0.5">Office Address:</strong>
                  <span className="text-stone-500">105, Myrtle Road, Hounslow, TW3 1QE</span>
                </div>
              </li>

              <li className="flex items-center gap-3 pt-3 group">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <strong className="block text-stone-900 mb-0.5">Contact Phone:</strong>
                  <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-amber-600 font-semibold hover:underline">
                    {COMPANY_DETAILS.phone}
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3 pt-3 group">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-all duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <strong className="block text-stone-900 mb-0.5">Email ID:</strong>
                  <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-amber-600 font-semibold hover:underline break-all">
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4 pt-6 sm:pt-0 lg:px-8 lg:pt-0">
            <div className="group space-y-2">
              <h4 className="text-stone-900 text-xs font-bold uppercase tracking-wider">
                Quick Links
              </h4>
              <div className="w-8 h-0.5 bg-gradient-to-r from-amber-500 via-amber-500 to-amber-500/20 rounded-full group-hover:w-11 transition-all duration-300" />
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/" className="text-stone-600 hover:text-amber-600 hover:translate-x-1.5 transition-all duration-300 inline-flex items-center gap-1.5 group font-medium">
                  <span className="text-amber-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">›</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-stone-600 hover:text-amber-600 hover:translate-x-1.5 transition-all duration-300 inline-flex items-center gap-1.5 group font-medium">
                  <span className="text-amber-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">›</span>
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-stone-600 hover:text-amber-600 hover:translate-x-1.5 transition-all duration-300 inline-flex items-center gap-1.5 group font-medium">
                  <span className="text-amber-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">›</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-stone-600 hover:text-amber-600 hover:translate-x-1.5 transition-all duration-300 inline-flex items-center gap-1.5 group font-medium">
                  <span className="text-amber-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">›</span>
                  <span>Wholesale Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Wholesale */}
          <div className="space-y-4 pt-6 sm:pt-0 lg:pl-8 lg:pt-0">
            <div className="group space-y-2">
              <h4 className="text-stone-900 text-xs font-bold uppercase tracking-wider">
                Wholesale
              </h4>
              <div className="w-8 h-0.5 bg-gradient-to-r from-amber-500 via-amber-500 to-amber-500/20 rounded-full group-hover:w-11 transition-all duration-300" />
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/inquiry" className="text-amber-600 font-semibold hover:text-amber-700 hover:translate-x-1.5 transition-all duration-300 inline-flex items-center gap-1.5 group">
                  <span className="text-amber-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">›</span>
                  <span>Request Quote</span>
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-stone-600 hover:text-amber-600 hover:translate-x-1.5 transition-all duration-300 inline-flex items-center gap-1.5 group font-medium">
                  <span className="text-amber-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">›</span>
                  <span>Wholesale Catalogue</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-stone-600 hover:text-amber-600 hover:translate-x-1.5 transition-all duration-300 inline-flex items-center gap-1.5 group font-medium">
                  <span className="text-amber-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">›</span>
                  <span>Become Trade Customer</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-stone-600 hover:text-amber-600 hover:translate-x-1.5 transition-all duration-300 inline-flex items-center gap-1.5 group font-medium">
                  <span className="text-amber-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">›</span>
                  <span>Delivery Info</span>
                </Link>
              </li>
            </ul>

            <div className="pt-3 space-y-2">
              <p className="text-[11px] text-stone-900 font-bold uppercase tracking-wider">PRODUCT RANGE:</p>
              <div className="flex flex-wrap gap-1.5 text-[11px]">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-stone-700 font-medium hover:bg-amber-500 hover:text-white hover:border-amber-500 hover:-translate-y-0.5 transition-all duration-300 shadow-xs cursor-default">Nuts</span>
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-stone-700 font-medium hover:bg-amber-500 hover:text-white hover:border-amber-500 hover:-translate-y-0.5 transition-all duration-300 shadow-xs cursor-default">Wafers</span>
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-stone-700 font-medium hover:bg-amber-500 hover:text-white hover:border-amber-500 hover:-translate-y-0.5 transition-all duration-300 shadow-xs cursor-default">Savouries</span>
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-stone-700 font-medium hover:bg-amber-500 hover:text-white hover:border-amber-500 hover:-translate-y-0.5 transition-all duration-300 shadow-xs cursor-default">Confectionery</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-stone-200/60 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500 gap-3 text-center md:text-left">
          <p>© {new Date().getFullYear()} JJGM & CO. All Rights Reserved. Office: 105, Myrtle Road, Hounslow, TW3 1QE.</p>
          <p>Founder: <span className="font-semibold text-stone-800 capitalize">{COMPANY_DETAILS.founder}</span> | Phone: <span className="font-semibold text-amber-600">{COMPANY_DETAILS.phone}</span></p>
        </div>
      </div>
    </footer>
  );
}
