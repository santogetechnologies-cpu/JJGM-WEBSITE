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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products Catalog", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Wholesale & Contact", href: "/contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm transition-all duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* BRAND LOGO - Strictly ONLY THE LOGO IMAGE (NO TEXT) as requested */}
        <Link href="/" className="flex items-center group transition-transform duration-300 hover:scale-105">
          <div className="relative h-14 w-auto min-w-[120px] flex items-center justify-center p-1 bg-black/5 rounded-lg border border-black/10 shadow-sm group-hover:border-amber-500/50 transition-colors">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="JJGM & CO Logo"
              className="h-12 w-auto max-h-12 object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${
                  isActive
                    ? "text-amber-600 font-bold border-b-2 border-amber-600 pb-1"
                    : "text-black/70 hover:text-black"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Wholesale Quote Request CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/inquiry"
            className="relative inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-600 to-amber-500 text-black font-bold text-xs uppercase tracking-widest rounded-full hover:from-amber-500 hover:to-amber-400 transition-all duration-300 shadow-md hover:shadow-amber-500/25"
          >
            <svg
              className="w-4 h-4"
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
            Request Quote
            {quoteCount > 0 && (
              <span className="ml-1 px-2 py-0.5 bg-black text-amber-400 text-[10px] font-extrabold rounded-full">
                {quoteCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="flex md:hidden items-center space-x-3">
          <Link
            href="/inquiry"
            className="p-2 bg-amber-500/20 text-amber-600 rounded-lg border border-amber-500/30 text-xs font-bold"
          >
            Quote ({quoteCount})
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-black/70 hover:text-black focus:outline-none"
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

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 border-b border-black/10 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-black/70 hover:text-amber-600 py-2 border-b border-black/5"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/inquiry"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center w-full mt-4 py-3 bg-amber-500 text-black font-bold uppercase tracking-wider rounded-lg text-sm"
          >
            Request Wholesale Quote ({quoteCount})
          </Link>
        </div>
      )}
    </header>
  );
}
