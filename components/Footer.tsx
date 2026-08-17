import React from "react";
import Link from "next/link";
import { COMPANY_DETAILS } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 text-black/70 border-t border-black/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Company Logo & Founder Info */}
          <div className="space-y-4">
            <div className="inline-block p-2 bg-black/5 rounded-xl border border-black/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="JJGM & CO Logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-black/60 leading-relaxed">
              Premier UK Wholesale & Retail Distributor of Premium Almonds, Nuts, Savouries, Wafers, Bakery & Confectionery.
            </p>
            
            {/* Founder Highlight Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Founder: <strong className="text-black capitalize">{COMPANY_DETAILS.founder}</strong></span>
              </div>
            </div>
          </div>

          {/* Column 2: Direct Contact Details (As Specified by User) */}
          <div className="space-y-4">
            <h4 className="text-black text-sm font-bold uppercase tracking-wider border-l-2 border-amber-500 pl-3">
              Official Contact
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <strong className="block text-black">Office Address:</strong>
                  <span className="text-black/60">105, Myrtle Road, Hounslow, TW3 1QE</span>
                </div>
              </li>
              
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <strong className="block text-black">Contact Phone:</strong>
                  <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-amber-700 hover:underline">
                    {COMPANY_DETAILS.phone}
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-amber-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <strong className="block text-black">Email ID:</strong>
                  <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-amber-700 hover:underline break-all">
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-black text-sm font-bold uppercase tracking-wider border-l-2 border-amber-500 pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-amber-600 transition-colors">
                  Home Page & 3D Almond Showcase
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-600 transition-colors">
                  Full 100+ Product Wholesale Catalog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-600 transition-colors">
                  About JJGM & CO & Founder Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-600 transition-colors">
                  Wholesale & Distribution Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Wholesale */}
          <div className="space-y-4">
            <h4 className="text-black text-sm font-bold uppercase tracking-wider border-l-2 border-amber-500 pl-3">
              Wholesale
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/inquiry" className="hover:text-amber-600 transition-colors">
                  Request Quote
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-600 transition-colors">
                  Wholesale Catalogue
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-600 transition-colors">
                  Become Trade Customer
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-600 transition-colors">
                  Delivery Info
                </Link>
              </li>
            </ul>

            <div className="pt-3 space-y-1.5">
              <p className="text-[11px] text-black/70 font-semibold">Product Range:</p>
              <div className="flex flex-wrap gap-1.5 text-[10px]">
                <span className="px-2 py-0.5 rounded bg-black/5 border border-black/10 text-black/60">Nuts</span>
                <span className="px-2 py-0.5 rounded bg-black/5 border border-black/10 text-black/60">Wafers</span>
                <span className="px-2 py-0.5 rounded bg-black/5 border border-black/10 text-black/60">Savouries</span>
                <span className="px-2 py-0.5 rounded bg-black/5 border border-black/10 text-black/60">Confectionery</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-black/50 gap-4">
          <p>© {new Date().getFullYear()} JJGM & CO. All Rights Reserved. Office: 105, Myrtle Road, Hounslow, TW3 1QE.</p>
          <p>Founder: <span className="capitalize">{COMPANY_DETAILS.founder}</span> | Phone: {COMPANY_DETAILS.phone}</p>
        </div>
      </div>
    </footer>
  );
}
