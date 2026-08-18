"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  quoteCount?: number;
}

export default function Navbar({ quoteCount = 0 }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide header when scrolling down in the first 3000px (animation area)
      if (currentScrollY < 3000) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      } else {
        // Show header after animation area
        setIsHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "PRODUCTS CATALOG", href: "/products" },
    { name: "ABOUT US", href: "/about" },
    { name: "WHOLESALE & CONTACT", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 md:px-6 transition-all duration-300 pointer-events-none ${
          isHidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="w-full max-w-[98%] mx-auto bg-white/95 backdrop-blur-md rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] px-3.5 sm:px-6 py-2.5 md:py-3 flex items-center justify-between pointer-events-auto border-none">
          {/* BRAND LOGO - Clean & Seamless */}
          <Link
            href="/"
            className="flex items-center transition-transform duration-300 hover:scale-[1.03]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="JJGM & CO Logo"
              className="h-7 sm:h-9 md:h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-xs md:text-sm font-semibold tracking-wide transition-all duration-200 rounded-full ${
                    isActive
                      ? "text-amber-700 bg-amber-500/10 font-bold"
                      : "text-neutral-700 hover:text-amber-600 hover:bg-neutral-100/70"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Wholesale Quote Request CTA Button - Desktop */}
          <div className="hidden md:flex items-center">
            <Link
              href="/inquiry"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-600 text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-amber-500 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-amber-500/20 active:scale-98"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
                />
              </svg>
              <span>Request Quote</span>
              {quoteCount > 0 && (
                <span className="ml-1 px-2 py-0.5 bg-neutral-900 text-amber-400 text-[10px] font-black rounded-full">
                  {quoteCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Hamburger Menu Toggle & Quote Pill */}
          <div className="flex md:hidden items-center space-x-1.5 sm:space-x-2">
            <Link
              href="/inquiry"
              className="px-2.5 py-1 bg-amber-50 text-amber-700 rounded-full text-[11px] sm:text-xs font-semibold flex items-center gap-1"
            >
              Quote ({quoteCount})
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-neutral-800 hover:text-amber-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer - Clean Full Screen Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-white w-full h-full min-h-screen flex flex-col p-6 pointer-events-auto overflow-y-auto animate-slideIn">
          {/* Header with Logo and Close */}
          <div className="flex items-center justify-between pb-5 border-b border-neutral-100">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="JJGM & CO"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-neutral-800 hover:text-amber-600 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Items + Request Quote */}
          <div className="flex-1 py-8 flex flex-col justify-between">
            {/* 4 Main Navigation Links */}
            <nav className="space-y-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-3 px-4 rounded-xl font-semibold text-base transition-colors ${
                      isActive
                        ? "text-amber-700 bg-amber-50 font-bold"
                        : "text-neutral-900 hover:bg-neutral-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Primary CTA: REQUEST QUOTE */}
            <div className="pt-8 pb-4">
              <Link
                href="/inquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-4 bg-amber-600 text-white font-bold text-xs uppercase tracking-wider rounded-full hover:bg-amber-500 transition-all shadow-md active:scale-98"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
                <span>Request Quote</span>
                {quoteCount > 0 && (
                  <span className="ml-1 px-2 py-0.5 bg-neutral-900 text-amber-400 text-[10px] font-black rounded-full">
                    {quoteCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
