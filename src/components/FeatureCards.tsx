'use client';

import React from 'react';
import Image from 'next/image';
import { Map, Heart, Sparkles, Globe, CheckCircle2 } from 'lucide-react';

export default function FeatureCards() {
  return (
    <section id="features" className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 space-y-8 sm:space-y-10 max-w-[1240px] mx-auto">
      {/* Feature Card 1: Map your travel itinerary */}
      <div className="relative rounded-[32px] sm:rounded-[36px] overflow-hidden border border-white/[0.08] bg-[#1a1c22] shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          {/* Left Text Content */}
          <div className="p-8 sm:p-12 md:p-16 flex flex-col justify-between z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs text-gray-300 font-normal mb-8">
                <Map className="w-3.5 h-3.5 text-gray-400" />
                <span>Itinerary Registry</span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-[44px] font-normal text-white tracking-[-0.03em] leading-[1.15] mb-5">
                Map your travel itinerary
              </h3>

              <p className="text-gray-400 text-sm sm:text-[15px] leading-relaxed max-w-[440px] font-normal">
                Break down your honeymoon expenses into bite-sized gifts like romantic dinners, sunset cruises, or hotel nights.
              </p>
            </div>

            <div className="pt-10 flex items-center gap-2.5 text-xs sm:text-[13px] text-gray-300 font-normal">
              <CheckCircle2 className="w-4 h-4 text-gray-400" />
              <span>Easy customization for any destination</span>
            </div>
          </div>

          {/* Right Visual Area with Metallic Sheen */}
          <div className="relative flex items-center justify-center p-6 sm:p-10 metallic-sheen-right overflow-hidden min-h-[380px] lg:min-h-full">
            <div className="relative w-full max-w-[440px] aspect-[4/5] transform hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="/images/feat_1_surf.png"
                alt="Woman running into sunset surf with surfboard"
                fill
                className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)]"
                sizes="(max-width: 1024px) 90vw, 440px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Card 2: Easy contributions for guests */}
      <div className="relative rounded-[32px] sm:rounded-[36px] overflow-hidden border border-white/[0.08] bg-[#1a1c22] shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          {/* Left Visual Area with Metallic Sheen */}
          <div className="order-2 lg:order-1 relative flex items-center justify-center p-6 sm:p-10 metallic-sheen-left overflow-hidden min-h-[380px] lg:min-h-full">
            <div className="relative w-full max-w-[440px] aspect-[4/5] transform hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="/images/feat_2_phone.png"
                alt="Woman comfortably giving wedding gift on smartphone"
                fill
                className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)]"
                sizes="(max-width: 1024px) 90vw, 440px"
              />
            </div>
          </div>

          {/* Right Text Content */}
          <div className="order-1 lg:order-2 p-8 sm:p-12 md:p-16 flex flex-col justify-between z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs text-gray-300 font-normal mb-8">
                <Heart className="w-3.5 h-3.5 text-gray-400" />
                <span>Seamless Giving</span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-[44px] font-normal text-white tracking-[-0.03em] leading-[1.15] mb-5">
                Easy contributions <br className="hidden sm:inline" />
                for guests
              </h3>

              <p className="text-gray-400 text-sm sm:text-[15px] leading-relaxed max-w-[440px] font-normal">
                Friends and family can easily contribute any amount toward your dream trip with simple digital payment options.
              </p>
            </div>

            <div className="pt-10 flex items-center gap-2.5 text-xs sm:text-[13px] text-gray-300 font-normal">
              <CheckCircle2 className="w-4 h-4 text-gray-400" />
              <span>No physical gifts to manage</span>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Card 3: Track every memorable gift */}
      <div className="relative rounded-[32px] sm:rounded-[36px] overflow-hidden border border-white/[0.08] bg-[#1a1c22] shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          {/* Left Text Content */}
          <div className="p-8 sm:p-12 md:p-16 flex flex-col justify-between z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs text-gray-300 font-normal mb-8">
                <Sparkles className="w-3.5 h-3.5 text-gray-400" />
                <span>Gift Tracking</span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-[44px] font-normal text-white tracking-[-0.03em] leading-[1.15] mb-5">
                Track every <br className="hidden sm:inline" />
                memorable gift
              </h3>

              <p className="text-gray-400 text-sm sm:text-[15px] leading-relaxed max-w-[440px] font-normal">
                Receive instant notifications when loved ones fund an experience, making personal thank-you notes effortless.
              </p>
            </div>

            <div className="pt-10 flex items-center gap-2.5 text-xs sm:text-[13px] text-gray-300 font-normal">
              <CheckCircle2 className="w-4 h-4 text-gray-400" />
              <span>Instant updates for every contribution</span>
            </div>
          </div>

          {/* Right Visual Area with Metallic Sheen */}
          <div className="relative flex items-center justify-center p-6 sm:p-10 metallic-sheen-right overflow-hidden min-h-[380px] lg:min-h-full">
            <div className="relative w-full max-w-[440px] aspect-[4/5] transform hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="/images/feat_3_couple.png"
                alt="Smiling young couple checking gift notifications on phone"
                fill
                className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)]"
                sizes="(max-width: 1024px) 90vw, 440px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Card 4: Turn gifts into dream adventures */}
      <div className="relative rounded-[32px] sm:rounded-[36px] overflow-hidden border border-white/[0.08] bg-[#1a1c22] shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
          {/* Left Visual Area with Metallic Sheen */}
          <div className="order-2 lg:order-1 relative flex items-center justify-center p-6 sm:p-10 metallic-sheen-left overflow-hidden min-h-[380px] lg:min-h-full">
            <div className="relative w-full max-w-[440px] aspect-[4/5] transform hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="/images/feat_4_airport.png"
                alt="Couple seated at airport departure terminal with suitcases"
                fill
                className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.6)]"
                sizes="(max-width: 1024px) 90vw, 440px"
              />
            </div>
          </div>

          {/* Right Text Content */}
          <div className="order-1 lg:order-2 p-8 sm:p-12 md:p-16 flex flex-col justify-between z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs text-gray-300 font-normal mb-8">
                <Globe className="w-3.5 h-3.5 text-gray-400" />
                <span>Trip Funding</span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-[44px] font-normal text-white tracking-[-0.03em] leading-[1.15] mb-5">
                Turn gifts into <br className="hidden sm:inline" />
                dream adventures
              </h3>

              <p className="text-gray-400 text-sm sm:text-[15px] leading-relaxed max-w-[440px] font-normal">
                Use your honeymoon contributions for flight bookings, resort upgrades, and unmissable local excursions.
              </p>
            </div>

            <div className="pt-10 flex items-center gap-2.5 text-xs sm:text-[13px] text-gray-300 font-normal">
              <CheckCircle2 className="w-4 h-4 text-gray-400" />
              <span>Ready for your dream honeymoon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
