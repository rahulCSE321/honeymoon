'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ContactCta() {
  const [formData, setFormData] = useState({
    fullName: 'Lauren Shaw',
    email: 'hello@honeymoonfund.com',
    weddingDate: 'October 24, 2026',
    details: 'Tell us about your dream honeymoon destination.',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-[56px] font-normal text-white tracking-[-0.03em] leading-[1.1] mb-10">
          Start Your Honeymoon <br />
          Registry Today
        </h2>

        {/* 2-Column Form & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Form Card (takes 6 cols) */}
          <div className="lg:col-span-6 bg-[#1e2025] border border-white/[0.08] rounded-[32px] p-8 sm:p-10 flex flex-col justify-between shadow-2xl">
            <div>
              <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight mb-8">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-normal text-gray-400 mb-2">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-transparent border-b border-white/15 focus:border-[#d8ff5c] text-white text-sm py-2 px-0 focus:outline-none transition-colors"
                      placeholder="Jane Doe"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-normal text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-white/15 focus:border-[#d8ff5c] text-white text-sm py-2 px-0 focus:outline-none transition-colors"
                      placeholder="jane@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Wedding Date */}
                <div>
                  <label className="block text-xs font-normal text-gray-400 mb-2">
                    Wedding Date
                  </label>
                  <input
                    type="text"
                    value={formData.weddingDate}
                    onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                    className="w-full bg-transparent border-b border-white/15 focus:border-[#d8ff5c] text-white text-sm py-2 px-0 focus:outline-none transition-colors"
                    placeholder="October 24, 2026"
                  />
                </div>

                {/* Destination & Details */}
                <div>
                  <label className="block text-xs font-normal text-gray-400 mb-2">
                    Honeymoon Destination & Details
                  </label>
                  <textarea
                    rows={3}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full bg-transparent border-b border-white/15 focus:border-[#d8ff5c] text-white text-sm py-2 px-0 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your dream honeymoon destination."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-[#d3d3d6] hover:bg-white text-black font-medium text-sm sm:text-base py-3.5 rounded-full transition-all duration-200 shadow-md hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    {submitted ? 'Fund Requested Successfully!' : 'Create My Fund'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Photo Card (takes 6 cols) */}
          <div className="lg:col-span-6 relative rounded-[32px] overflow-hidden border border-white/[0.08] shadow-2xl min-h-[460px] lg:min-h-full">
            <Image
              src="/images/contact_beach_clean.jpg"
              alt="Couple walking and holding hands along sunset beach shore"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
