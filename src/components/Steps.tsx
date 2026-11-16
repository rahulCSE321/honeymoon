'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const stepsData: StepCardProps[] = [
  {
    number: '01',
    title: 'Build your wishlist',
    description: 'Add specific trips, romantic dinners, or flight upgrades with photos and your story.',
    imageSrc: '/images/step_1_clean.jpg',
    imageAlt: 'Couple kissing on seaside pier',
  },
  {
    number: '02',
    title: 'Share your link',
    description: 'Include your custom registry link on wedding invitations and save-the-dates.',
    imageSrc: '/images/step_2_girl.jpg',
    imageAlt: 'Smiling woman sharing registry link',
  },
  {
    number: '03',
    title: 'Receive love and gifts',
    description: 'Friends and family contribute cash directly to your trip with heartfelt wishes.',
    imageSrc: '/images/step_3_box.jpg',
    imageAlt: 'Wrapped gift box with red ribbon and flowers',
  },
];

export default function Steps() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 md:px-8 relative">
      <div className="max-w-[1240px] mx-auto text-center">
        {/* Top Tag Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e2025]/90 border border-white/10 text-xs text-gray-300 font-normal mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-gray-400" />
          <span>Three simple steps</span>
        </div>

        {/* Section Headline - font-normal matching Webild design */}
        <h2 className="text-3xl sm:text-5xl md:text-[56px] font-normal text-white tracking-[-0.03em] leading-[1.12] mb-4">
          From registry setup <br className="hidden sm:inline" />
          to boarding pass
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm sm:text-[15px] md:text-base leading-relaxed max-w-[500px] mx-auto mb-16 font-normal">
          Setting up your honeymoon fund takes minutes, leaving you free to focus on wedding plans.
        </p>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 text-left">
          {stepsData.map((step) => (
            <div
              key={step.number}
              className="group bg-[#1e2025] border border-white/[0.08] hover:border-white/20 rounded-[28px] p-4 sm:p-5 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Card Photo */}
              <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden bg-[#15161a]">
                <Image
                  src={step.imageSrc}
                  alt={step.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 380px"
                />
              </div>

              {/* Number Badge */}
              <div className="w-7 h-7 rounded-full bg-[#d8ff5c] text-black text-xs font-bold flex items-center justify-center mt-6 mb-4 shadow-sm">
                {step.number}
              </div>

              {/* Card Title */}
              <h3 className="text-xl sm:text-[22px] font-medium text-white tracking-tight mb-2">
                {step.title}
              </h3>

              {/* Card Description */}
              <p className="text-gray-400 text-xs sm:text-[13px] leading-relaxed pb-3 font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Center Neon Lime Button */}
        <div className="mt-12 sm:mt-14">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#d8ff5c] hover:bg-[#c9f24b] text-black font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(216,255,92,0.25)] hover:shadow-[0_0_30px_rgba(216,255,92,0.4)] hover:scale-105 active:scale-95"
          >
            Create your fund
          </a>
        </div>
      </div>
    </section>
  );
}
