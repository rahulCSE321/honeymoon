'use client';

import React from 'react';
import Image from 'next/image';
import { ListFilter } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-8 pb-20 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="max-w-[1240px] mx-auto text-center flex flex-col items-center">
        {/* Top Tag Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e2025]/90 border border-white/10 text-xs text-gray-300 font-normal mb-8 shadow-sm">
          <ListFilter className="w-3.5 h-3.5 text-gray-400" />
          <span>Honeymoon Registry</span>
        </div>

        {/* Hero Headline - Light/Regular weight with tight letter spacing */}
        <h1 className="text-4xl sm:text-6xl md:text-[70px] lg:text-[80px] font-normal text-white tracking-[-0.03em] leading-[1.08] max-w-[960px] mb-6">
          Trade traditional wedding <br className="hidden sm:inline" />
          gifts for your dream trip
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm sm:text-[15px] md:text-base leading-relaxed max-w-[540px] mb-9 font-normal">
          Give wedding guests a simple, personal way to contribute toward your honeymoon flights, stays, and experiences.
        </p>

        {/* CTA Button */}
        <a
          href="#contact"
          className="inline-flex items-center justify-center bg-[#d3d3d6] hover:bg-white text-black font-medium text-sm sm:text-[15px] px-8 py-3 rounded-full transition-all duration-200 shadow-lg shadow-black/30 hover:scale-105 active:scale-95"
        >
          Start your fund
        </a>

        {/* Hero Visual Card */}
        <div className="relative w-full mt-14 sm:mt-16 rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/[0.08] shadow-2xl bg-[#1c1d22]">
          {/* Main Hero Background Image */}
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[2.1/1] max-h-[640px]">
            <Image
              src="/images/hero_banner.jpg"
              alt="Honeymoon gifts on wooden table with red gift box"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 1240px"
            />
            {/* Subtle inner dark vignette border */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />

            {/* Floating Metric 1: Couples registered (Top Left) */}
            <div className="absolute top-4 left-4 sm:top-8 sm:left-8 md:top-10 md:left-10 bg-[#25272e]/92 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-4 text-left shadow-2xl z-10 w-[170px] sm:w-[200px]">
              <span className="text-[11px] sm:text-xs text-gray-400 font-normal block">
                Couples registered
              </span>
              <div className="flex items-center justify-between mt-1">
                <span className="text-lg sm:text-2xl font-semibold text-white tracking-tight">
                  10,000+
                </span>
                <span className="bg-[#d8ff5c] text-black text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                  +24%
                </span>
              </div>
              {/* Green Sparkline */}
              <div className="mt-2.5 h-4 sm:h-5 w-full relative overflow-hidden">
                <svg viewBox="0 0 100 24" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="sparklineGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#d8ff5c" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#d8ff5c" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  <polygon points="0,22 15,20 30,17 50,14 70,8 100,2 100,24 0,24" fill="url(#sparklineGrad1)" />
                  <polyline points="0,22 15,20 30,17 50,14 70,8 100,2" fill="none" stroke="#d8ff5c" strokeWidth="2.5" />
                </svg>
              </div>
            </div>

            {/* Floating Metric 2: Gifts funded (Middle Right) */}
            <div className="absolute top-[48%] -translate-y-1/2 right-4 sm:right-8 md:right-10 bg-[#25272e]/92 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-4 text-left shadow-2xl z-10 w-[150px] sm:w-[190px]">
              <span className="text-[11px] sm:text-xs text-gray-400 font-normal block">
                Gifts funded
              </span>
              <div className="flex items-center justify-between mt-1">
                <span className="text-lg sm:text-2xl font-semibold text-white tracking-tight">
                  $50M+
                </span>
                <span className="bg-[#d8ff5c] text-black text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                  +35%
                </span>
              </div>
            </div>

            {/* Floating Metric 3: Guest gifts sent (Bottom Left) */}
            <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 md:bottom-10 md:left-10 bg-[#25272e]/92 backdrop-blur-md border border-white/10 rounded-2xl p-3 sm:p-4 text-left shadow-2xl z-10 w-[170px] sm:w-[200px]">
              <span className="text-[11px] sm:text-xs text-gray-400 font-normal block">
                Guest gifts sent
              </span>
              <div className="mt-1">
                <span className="text-lg sm:text-2xl font-semibold text-white tracking-tight">
                  50,000+
                </span>
              </div>
              {/* Green Sparkline */}
              <div className="mt-2.5 h-4 sm:h-5 w-full relative overflow-hidden">
                <svg viewBox="0 0 100 24" className="w-full h-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="sparklineGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#86a32d" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#86a32d" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  <polygon points="0,22 20,20 45,18 70,12 100,5 100,24 0,24" fill="url(#sparklineGrad2)" />
                  <polyline points="0,22 20,20 45,18 70,12 100,5" fill="none" stroke="#a3c932" strokeWidth="2.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
