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
    <main className="bg-white min-h-screen text-black pt-24 pb-24">
      {/* Page Header - Reduced padding */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 via-white to-white border-b border-black/5 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-700 text-xs font-bold uppercase tracking-widest border border-amber-500/20">
            Wholesale & Trade Inquiries
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-black">
            Contact <span className="text-amber-600">JJGM & CO</span>
          </h1>
          <p className="text-black/60 text-sm md:text-base">
            Have questions about bulk orders, trade pricing, or UK distribution? Contact founder {COMPANY_DETAILS.founderFormatted} directly.
          </p>
        </div>
      </section>

      {/* Main Content - Reduced padding */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Direct Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-black">
                Wholesale & Trade Enquiries
              </h2>
              <p className="text-sm text-black/60 mt-2">
                <strong className="text-amber-700 capitalize">Founder: {COMPANY_DETAILS.founder}</strong>
              </p>
              <p className="text-sm text-black/60">
                Based in: <strong>Hounslow, London</strong>
              </p>
              <p className="text-sm text-black/60">
                Serving: <strong>UK retailers & businesses</strong>
              </p>
            </div>

            {/* Contact Details Cards */}
            <div className="space-y-4">
              
              {/* Office Address */}
              <div className="p-6 bg-gray-50 rounded-2xl border border-black/10 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="p-3 bg-amber-500/10 text-amber-600 rounded-xl border border-amber-500/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-amber-600 uppercase font-bold tracking-wider">Office Address</span>
                  <h3 className="text-base font-bold text-black mt-0.5">105, Myrtle Road, Hounslow, TW3 1QE</h3>
                  <p className="text-xs text-black/60 mt-1">Hounslow, London, United Kingdom</p>
                </div>
              </div>

              {/* Phone */}
              <div className="p-6 bg-gray-50 rounded-2xl border border-black/10 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="p-3 bg-amber-500/10 text-amber-600 rounded-xl border border-amber-500/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-amber-600 uppercase font-bold tracking-wider">Contact Phone Number</span>
                  <h3 className="text-lg font-bold text-black mt-0.5">
                    <a href={`tel:${COMPANY_DETAILS.phone}`} className="hover:text-amber-600 transition-colors">
                      {COMPANY_DETAILS.phone}
                    </a>
                  </h3>
                  <p className="text-xs text-black/60 mt-1">Available Mon - Sat, 8:00 AM - 7:00 PM</p>
                </div>
              </div>

              {/* Email */}
              <div className="p-6 bg-gray-50 rounded-2xl border border-black/10 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="p-3 bg-amber-500/10 text-amber-600 rounded-xl border border-amber-500/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-amber-600 uppercase font-bold tracking-wider">Email Address</span>
                  <h3 className="text-base font-bold text-black mt-0.5 break-all">
                    <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-amber-600 transition-colors">
                      {COMPANY_DETAILS.email}
                    </a>
                  </h3>
                  <p className="text-xs text-black/60 mt-1">Send bulk product requests & trade queries</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="p-8 bg-white rounded-3xl border border-black/10 shadow-lg">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-black">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-black">Inquiry Received!</h3>
                <p className="text-sm text-black/70 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Founder {COMPANY_DETAILS.founderFormatted} or our business team at JJGM & CO will contact you shortly via <strong>{formData.phone || formData.email}</strong>.
                </p>
                <button
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
                  className="px-6 py-2.5 bg-amber-500 text-black font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-amber-600 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-2xl font-bold text-black border-b border-black/10 pb-4">
                  Request a Wholesale Quote
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black/70 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Smith"
                      className="w-full px-4 py-2.5 bg-gray-50 border border-black/10 rounded-xl text-sm text-black focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black/70 mb-1.5">
                      Business / Store Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Hounslow Fine Foods"
                      className="w-full px-4 py-2.5 bg-gray-50 border border-black/10 rounded-xl text-sm text-black focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black/70 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@domain.com"
                      className="w-full px-4 py-2.5 bg-gray-50 border border-black/10 rounded-xl text-sm text-black focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-black/70 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 07404548779"
                      className="w-full px-4 py-2.5 bg-gray-50 border border-black/10 rounded-xl text-sm text-black focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-black/70 mb-1.5">
                    Business Type *
                  </label>
                  <select
                    required
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-4 py-2.5 bg-gray-50 border border-black/10 rounded-xl text-sm text-black focus:outline-none focus:border-amber-500 transition-colors"
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

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-black/70 mb-1.5">
                    Products / Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about products, quantities, or delivery requirements..."
                    className="w-full px-4 py-2.5 bg-gray-50 border border-black/10 rounded-xl text-sm text-black focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-amber-500 text-black font-extrabold text-sm uppercase tracking-widest rounded-xl hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/20"
                >
                  Request Wholesale Quote →
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </main>
  );
}
