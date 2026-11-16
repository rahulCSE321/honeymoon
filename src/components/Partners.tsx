'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Plane, Compass, Hotel, Luggage, MapPin, Ticket } from 'lucide-react';

const partners = [
  { name: 'Airbnb', icon: Hotel },
  { name: 'Expedia', icon: Plane },
  { name: 'Delta Airlines', icon: Ticket },
  { name: 'Marriott Bonvoy', icon: Compass },
  { name: 'Booking.com', icon: MapPin },
  { name: 'Tripadvisor', icon: Luggage },
];

export default function Partners() {
  return (
    <section className="py-12 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1240px] mx-auto">
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-gray-300">
          <p className="font-normal text-gray-300">
            We partner with premier travel brands to help bring your getaway to life.
          </p>
          <a
            href="#stories"
            className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors font-medium self-start sm:self-auto"
          >
            <span>Read couple stories</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Logos Card Container */}
        <div className="mt-5 bg-[#1b1c21] border border-white/[0.08] rounded-[24px] sm:rounded-[28px] p-6 sm:p-8">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center">
            {partners.map((partner, index) => {
              const IconComp = partner.icon;
              return (
                <div
                  key={index}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center p-3 text-gray-400 hover:text-white hover:bg-white/[0.08] hover:border-white/15 transition-all duration-200 group"
                  title={partner.name}
                >
                  <IconComp className="w-7 h-7 sm:w-8 sm:h-8 opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

