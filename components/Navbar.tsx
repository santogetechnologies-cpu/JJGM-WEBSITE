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

      // Never hide header when mobile menu is open
      if (mobileMenuOpen) {
        setIsHidden(false);
        return;
      }

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
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body/html scrolling and handle ESC key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalTouchAction = document.body.style.touchAction;

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.touchAction = "none";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setMobileMenuOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.touchAction = originalTouchAction;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "PRODUCTS CATALOG", href: "/products" },
    { name: "ABOUT US", href: "/about" },
    { name: "WHOLESALE & CONTACT", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[10000] w-full transition-all duration-300 ${
          isHidden && !mobileMenuOpen ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        }`}
      >
        {/* Full-width edge-to-edge navbar across all screen sizes */}
        <div className="w-full bg-white border-b border-stone-200/80 shadow-xs px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between relative z-[10000]">
          {/* BRAND LOGO */}
          <Link
            href="/"
            className="relative z-10 flex items-center transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="JJGM & CO Logo"
              className="h-9 sm:h-10 md:h-[50px] w-auto object-contain"
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

          {/* Mobile Actions: Quote Badge + Hamburger Menu Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <Link
              href="/inquiry"
              className="px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-700 rounded-full text-xs font-bold flex items-center gap-1.5 transition-colors active:scale-95"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
                />
              </svg>
              <span>Quote</span>
              {quoteCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-amber-500 text-stone-950 text-[10px] font-black flex items-center justify-center">
                  {quoteCount}
                </span>
              )}
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-stone-100 hover:bg-stone-200 active:scale-95 border border-stone-200 text-stone-900 focus:outline-none transition-all cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-5 h-5 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.25}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.25}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Solid Opaque Mobile Menu Panel — Modern Luxury Floating Aesthetic */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed top-[56px] sm:top-[64px] left-0 right-0 bottom-0 w-full h-[calc(100dvh-56px)] sm:h-[calc(100dvh-64px)] z-[9999] bg-[#FCFBF8] overflow-y-auto px-5 py-6 flex flex-col justify-between transition-all duration-300 animate-fadeIn"
          style={{
            backgroundColor: "#FCFBF8",
            backgroundImage: "radial-gradient(circle at 50% 0%, rgba(245, 158, 11, 0.05) 0%, transparent 60%)",
            opacity: 1,
          }}
        >
          <div className="max-w-md mx-auto w-full flex flex-col justify-between h-full space-y-6">
            
            {/* 4 Main Floating-Pill Navigation Rows */}
            <nav className="space-y-3 pt-1">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      animationDelay: `${index * 45}ms`,
                    }}
                    className={`flex items-center justify-between h-[60px] px-5 rounded-[20px] text-[13.5px] tracking-wider uppercase transition-all duration-200 group active:scale-[0.98] ${
                      isActive
                        ? "text-amber-900 bg-gradient-to-r from-amber-500/[0.14] via-amber-500/[0.08] to-amber-500/[0.04] font-black border border-amber-500/40 shadow-[0_4px_18px_rgba(245,158,11,0.12)] hover:-translate-y-0.5"
                        : "text-stone-900 font-bold bg-white/95 border border-stone-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-amber-500/35 hover:text-amber-600 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)]"
                    }`}
                  >
                    {/* Left: Indicator + Navigation Label */}
                    <span className="flex items-center gap-3">
                      {isActive ? (
                        <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
                        </span>
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-stone-300 group-hover:bg-amber-400 transition-colors" />
                      )}
                      <span>{link.name}</span>
                    </span>

                    {/* Right: Minimal Arrow Icon */}
                    <svg
                      className={`w-4 h-4 transition-all duration-200 ${
                        isActive
                          ? "text-amber-600 translate-x-0.5"
                          : "text-stone-400 group-hover:text-amber-600 group-hover:translate-x-1"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                );
              })}
            </nav>

            {/* Prominent Floating CTA: REQUEST WHOLESALE QUOTE */}
            <div className="pt-6 pb-6 border-t border-stone-200/70 mt-auto">
              <Link
                href="/inquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2.5 w-full h-[60px] bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:brightness-105 text-stone-950 font-black text-xs uppercase tracking-widest rounded-[20px] transition-all duration-200 shadow-[0_8px_25px_rgba(245,158,11,0.28)] hover:shadow-[0_12px_30px_rgba(245,158,11,0.36)] hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <svg className="w-4 h-4 text-stone-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
                  />
                </svg>
                <span>Request Wholesale Quote</span>
                {quoteCount > 0 && (
                  <span className="ml-1.5 px-2 py-0.5 bg-stone-950 text-amber-400 text-[10px] font-black rounded-full shadow-2xs">
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
