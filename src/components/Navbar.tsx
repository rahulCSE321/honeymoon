'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full relative z-50">
      <nav className="max-w-[1280px] mx-auto px-6 sm:px-8 py-7 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="text-xl sm:text-[22px] font-bold tracking-tight text-white hover:opacity-90 transition-opacity">
          HoneymoonFund
        </a>

        {/* Right CTA & Menu Button */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center bg-[#212328] hover:bg-[#2a2d34] text-[#e2e4e9] text-xs sm:text-[13px] font-medium px-5 py-2.5 rounded-full border border-white/10 transition-all duration-200"
          >
            Create Your Fund
          </a>

          {/* Hamburger toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="w-10 h-10 rounded-full bg-[#212328] hover:bg-[#2a2d34] border border-white/10 flex flex-col items-center justify-center gap-1.5 transition-all duration-200 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4 text-white" />
            ) : (
              <>
                <span className="w-4 h-[2px] bg-white rounded-full block"></span>
                <span className="w-4 h-[2px] bg-white rounded-full block"></span>
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-6 pb-6 pt-2 max-w-[1280px] mx-auto">
          <div className="bg-[#1f2025] border border-white/10 rounded-2xl p-5 flex flex-col gap-4 shadow-2xl">
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white text-sm font-medium py-1 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white text-sm font-medium py-1 transition-colors"
            >
              Features
            </a>
            <a
              href="#stories"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white text-sm font-medium py-1 transition-colors"
            >
              Couple Stories
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-white text-sm font-medium py-1 transition-colors"
            >
              FAQ
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-[#d8ff5c] text-black font-semibold text-sm py-2.5 rounded-full transition-transform active:scale-95 mt-1"
            >
              Create Your Fund
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

