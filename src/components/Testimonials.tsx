'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface TestimonialItem {
  id: string;
  badgeLetter: string;
  badgeTitle: string;
  quote: string;
  author: string;
  location: string;
  imageSrc: string;
  stat1Label: string;
  stat1Value: string;
  stat2Label: string;
  stat2Value: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 'amalfi',
    badgeLetter: 'A',
    badgeTitle: 'Amalfi Honeymoon',
    quote: '“Our guests loved giving us sunset cruises and romantic dinners instead of another toaster. It made our honeymoon to Italy completely unforgettable.”',
    author: 'Lauren Shaw',
    location: 'Married in Austin, TX',
    imageSrc: '/images/testimonial_amalfi.jpg',
    stat1Label: 'Gifts received',
    stat1Value: '34 contributions',
    stat2Label: 'Trip funded',
    stat2Value: '100% completed',
  },
  {
    id: 'bali',
    badgeLetter: 'B',
    badgeTitle: 'Bali Escape Registry',
    quote: '“Setting up our honeymoon fund was effortless. Relatives overseas could contribute directly to our scuba experiences and private villa stays.”',
    author: 'Elena & Marcus',
    location: 'Married in San Diego, CA',
    imageSrc: '/images/step_1_clean.jpg',
    stat1Label: 'Memorable activities',
    stat1Value: '8 experiences',
    stat2Label: 'Trip funded',
    stat2Value: '100% completed',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeIndex];
  const nextItem = testimonials[(activeIndex + 1) % testimonials.length];

  return (
    <section id="stories" className="py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs text-gray-300 font-normal mb-5">
            <span>Couple Stories</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-[56px] font-normal text-white tracking-[-0.03em]">
            Loved by couples and guests
          </h2>
        </div>

        {/* Big Frosted Panel */}
        <div className="relative rounded-[36px] border border-white/[0.08] p-6 sm:p-10 md:p-14 overflow-hidden bg-gradient-to-b from-[#33353c]/70 via-[#22242a]/80 to-[#18191e]/90 shadow-2xl backdrop-blur-md">
          {/* Subtle top sheen */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Cards Flex Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Active Card (Neon Lime) - takes 8 cols */}
            <div className="lg:col-span-8 bg-[#d8ff5c] text-black rounded-[30px] p-6 sm:p-10 flex flex-col justify-between shadow-2xl transition-all duration-500">
              {/* Card Header & Content */}
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-6 h-6 rounded-full bg-black/15 text-black font-semibold text-xs flex items-center justify-center">
                    {current.badgeLetter}
                  </div>
                  <span className="text-xs sm:text-[13px] font-semibold tracking-tight text-black">
                    {current.badgeTitle}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  {/* Quote - Regular/Medium weight */}
                  <div className="md:col-span-7">
                    <p className="text-xl sm:text-2xl md:text-[26px] font-normal tracking-[-0.02em] leading-[1.3] text-black">
                      {current.quote}
                    </p>
                  </div>

                  {/* Photo & Caption */}
                  <div className="md:col-span-5 flex flex-col items-center md:items-start">
                    <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden shadow-lg border border-black/10">
                      <Image
                        src={current.imageSrc}
                        alt={current.author}
                        fill
                        className="object-cover"
                        sizes="200px"
                      />
                    </div>
                    <div className="mt-3 text-left w-full">
                      <h4 className="font-semibold text-black text-sm sm:text-base leading-tight">
                        {current.author}
                      </h4>
                      <p className="text-xs text-black/70 font-normal">
                        {current.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Footer */}
              <div className="grid grid-cols-2 gap-4 pt-8 mt-6 border-t border-black/10">
                <div>
                  <span className="text-[11px] sm:text-xs text-black/65 font-normal block">
                    {current.stat1Label}
                  </span>
                  <span className="text-base sm:text-lg font-semibold text-black mt-0.5 block">
                    {current.stat1Value}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] sm:text-xs text-black/65 font-normal block">
                    {current.stat2Label}
                  </span>
                  <span className="text-base sm:text-lg font-semibold text-black mt-0.5 block">
                    {current.stat2Value}
                  </span>
                </div>
              </div>
            </div>

            {/* Peeking Inactive Card - takes 4 cols */}
            <div
              onClick={handleNext}
              className="hidden lg:flex lg:col-span-4 bg-[#2b3324] border border-[#404c35] text-[#b6c7a3] rounded-[30px] p-8 flex-col justify-between cursor-pointer hover:border-[#526344] transition-all duration-300 opacity-90 hover:opacity-100"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-6">
                  <div className="w-6 h-6 rounded-full bg-white/10 text-white font-semibold text-xs flex items-center justify-center">
                    {nextItem.badgeLetter}
                  </div>
                  <span className="text-xs sm:text-[13px] font-semibold tracking-tight text-white/90">
                    {nextItem.badgeTitle}
                  </span>
                </div>

                <p className="text-lg sm:text-xl font-normal tracking-tight leading-snug text-white/80 line-clamp-4">
                  {nextItem.quote}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <span className="text-xs text-white/60 block font-normal">
                  {nextItem.stat1Label}
                </span>
                <span className="text-base font-semibold text-white mt-0.5 block">
                  {nextItem.stat1Value}
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Navigation Controls */}
          <div className="flex items-center justify-between pt-10">
            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous story"
                className="w-11 h-11 rounded-full bg-[#25272e] hover:bg-[#2e313a] border border-white/10 hover:border-white/25 flex items-center justify-center text-white transition-all active:scale-95 shadow-md cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next story"
                className="w-11 h-11 rounded-full bg-[#25272e] hover:bg-[#2e313a] border border-white/10 hover:border-white/25 flex items-center justify-center text-white transition-all active:scale-95 shadow-md cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Pagination Progress Indicator */}
            <div className="flex items-center gap-1.5 w-32 sm:w-44 h-1 bg-[#373a44] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#d8ff5c] rounded-full transition-all duration-300"
                style={{
                  width: `${100 / testimonials.length}%`,
                  transform: `translateX(${activeIndex * 100}%)`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
