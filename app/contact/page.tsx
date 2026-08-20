"use client";

import React, { useState } from "react";
import { COMPANY_DETAILS } from "@/data/products";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#FCFAF6] min-h-screen text-stone-900">
      {/* Page Hero / Top Area — Premium Subtle Food Imagery & Glassmorphism */}
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-stone-200/60 overflow-hidden text-center">
        {/* Background Mixed Nuts Image with Light Blur & Rich Visual Presence */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/contact-hero-nuts.png"
            alt="Wholesale Mixed Nuts"
            className="w-full h-full object-cover object-center blur-[1px] opacity-90"
          />
          {/* Subtle Warm Cream Protective Tint (15–25% opacity) */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FCFAF6]/20 via-[#FCFAF6]/15 to-[#FCFAF6]/35" />
        </div>

        {/* Hero Glassmorphism Content Box */}
        <div className="relative z-10 max-w-3xl mx-auto p-6 sm:p-8 md:p-10 rounded-[28px] bg-white/85 backdrop-blur-md border border-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.06)] space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-700 text-xs font-bold uppercase tracking-widest shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>Wholesale & Trade Inquiries</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-stone-950 leading-[1.08]">
            Contact <span className="text-amber-600">JJGM & CO</span>
          </h1>

          <p className="text-stone-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Have questions about bulk orders, trade pricing, or UK distribution? Contact founder {COMPANY_DETAILS.founderFormatted} directly.
          </p>
        </div>
      </section>

      {/* Main Content — Balanced 2-Column Composition */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24 sm:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-14 items-start">

          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Header / Intro */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-stone-950">
                Wholesale & Trade Enquiries
              </h2>
              <div className="space-y-1.5 text-sm text-stone-600">
                <p className="flex items-center gap-2">
                  <span className="text-stone-400 font-medium">Founder:</span>
                  <strong className="text-stone-900 font-bold capitalize">{COMPANY_DETAILS.founderFormatted}</strong>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-stone-400 font-medium">Based in:</span>
                  <strong className="text-stone-900 font-semibold">Hounslow, London</strong>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-stone-400 font-medium">Serving:</span>
                  <strong className="text-stone-900 font-semibold">UK retailers & businesses nationwide</strong>
                </p>
              </div>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-4">

              {/* Office Address Card */}
              <div className="p-5 sm:p-6 bg-white rounded-[22px] border border-stone-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex items-start gap-4 hover:border-amber-500/30 hover:shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-12 h-12 rounded-[14px] bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-bold text-amber-700 uppercase tracking-widest">Office Address</span>
                  <h3 className="text-base font-bold text-stone-950 mt-0.5 leading-snug">
                    105, Myrtle Road, Hounslow, TW3 1QE
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    Hounslow, London, United Kingdom
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-5 sm:p-6 bg-white rounded-[22px] border border-stone-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex items-start gap-4 hover:border-amber-500/30 hover:shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-12 h-12 rounded-[14px] bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-bold text-amber-700 uppercase tracking-widest">Contact Phone Number</span>
                  <h3 className="text-lg font-bold text-stone-950 mt-0.5 leading-snug">
                    <a href={`tel:${COMPANY_DETAILS.phone}`} className="hover:text-amber-600 transition-colors">
                      {COMPANY_DETAILS.phone}
                    </a>
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    Available Mon - Sat, 8:00 AM - 7:00 PM
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-5 sm:p-6 bg-white rounded-[22px] border border-stone-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex items-start gap-4 hover:border-amber-500/30 hover:shadow-[0_6px_20px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-12 h-12 rounded-[14px] bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[11px] font-bold text-amber-700 uppercase tracking-widest">Email Address</span>
                  <h3 className="text-base font-bold text-stone-950 mt-0.5 break-all leading-snug">
                    <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-amber-600 transition-colors">
                      {COMPANY_DETAILS.email}
                    </a>
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    Send bulk product requests & trade queries
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 md:p-10 bg-white rounded-[28px] border border-stone-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
              {submitted ? (
                <div className="py-14 sm:py-16 text-center space-y-4">
                  <div className="w-16 h-16 bg-amber-500 text-stone-950 rounded-2xl flex items-center justify-center mx-auto text-2xl font-black shadow-md shadow-amber-500/20">
                    ✓
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-stone-900">{formData.name}</strong>. Founder {COMPANY_DETAILS.founderFormatted} or our trade team at JJGM & CO will contact you shortly via <strong className="text-stone-900">{formData.phone || formData.email}</strong>.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          businessName: "",
                          email: "",
                          phone: "",
                          businessType: "",
                          message: "",
                        });
                      }}
                      className="px-7 py-3 bg-stone-950 text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-stone-800 transition-colors cursor-pointer"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Form Header */}
                  <div className="border-b border-stone-200/70 pb-5 mb-6 space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight">
                      Request a Wholesale Quote
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-500">
                      Fill out your trade requirements below for direct wholesale pricing.
                    </p>
                  </div>

                  {/* Name + Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                        Your Name <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Smith"
                        className="w-full h-12 px-4 bg-[#FCFAF6] border border-stone-200/90 rounded-xl text-sm font-medium text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-150"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                        Business / Store Name <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Hounslow Fine Foods"
                        className="w-full h-12 px-4 bg-[#FCFAF6] border border-stone-200/90 rounded-xl text-sm font-medium text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-150"
                      />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                        Email Address <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@domain.com"
                        className="w-full h-12 px-4 bg-[#FCFAF6] border border-stone-200/90 rounded-xl text-sm font-medium text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-150"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                        Phone Number <span className="text-amber-600">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 07404548779"
                        className="w-full h-12 px-4 bg-[#FCFAF6] border border-stone-200/90 rounded-xl text-sm font-medium text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-150"
                      />
                    </div>
                  </div>

                  {/* Business Type Select */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                      Business Type <span className="text-amber-600">*</span>
                    </label>
                    <select
                      required
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full h-12 px-4 bg-[#FCFAF6] border border-stone-200/90 rounded-xl text-sm font-medium text-stone-900 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-150 cursor-pointer"
                    >
                      <option value="">Select your business type...</option>
                      <option value="Convenience Store">Convenience Store</option>
                      <option value="Supermarket">Supermarket</option>
                      <option value="Food Service">Food Service</option>
                      <option value="Catering">Catering</option>
                      <option value="Distributor">Distributor</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message / Requirements Textarea */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                      Products / Requirements <span className="text-amber-600">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Provide details about products, quantities, or delivery requirements..."
                      className="w-full p-4 bg-[#FCFAF6] border border-stone-200/90 rounded-xl text-sm font-medium text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all duration-150 resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full h-14 bg-amber-500 hover:bg-amber-400 active:scale-[0.99] text-stone-950 font-black text-xs sm:text-sm uppercase tracking-widest rounded-xl transition-all duration-200 shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Request Wholesale Quote</span>
                      <span>→</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
