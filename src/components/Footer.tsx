'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full pt-16 mt-20 relative">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
        <div className="bg-[#1b1c21] border-t border-x border-white/[0.08] rounded-t-[36px] sm:rounded-t-[44px] p-8 sm:p-14 md:p-16 relative overflow-hidden">
          {/* Main Footer Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-12 gap-10 sm:gap-12 pb-16">
            {/* Brand Column (takes 3 cols) */}
            <div className="col-span-2 md:col-span-3">
              <a href="#" className="text-2xl sm:text-[26px] font-medium tracking-tight text-white block">
                HoneymoonFund
              </a>
            </div>

            {/* Platform Column (takes 2 cols) */}
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-xs font-normal text-gray-400 uppercase tracking-wider mb-4">
                Platform
              </h4>
              <ul className="space-y-3 text-xs sm:text-[13px] text-gray-300 font-normal">
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Registry Features</a></li>
                <li><a href="#stories" className="hover:text-white transition-colors">Couple Stories</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Start Your Fund</a></li>
              </ul>
            </div>

            {/* Explore Column (takes 2 cols) */}
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-xs font-normal text-gray-400 uppercase tracking-wider mb-4">
                Explore
              </h4>
              <ul className="space-y-3 text-xs sm:text-[13px] text-gray-300 font-normal">
                <li><a href="#" className="hover:text-white transition-colors">Honeymoon Registry</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guest Contributions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Travel Partners</a></li>
              </ul>
            </div>

            {/* Resources Column (takes 2 cols) */}
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-xs font-normal text-gray-400 uppercase tracking-wider mb-4">
                Resources
              </h4>
              <ul className="space-y-3 text-xs sm:text-[13px] text-gray-300 font-normal">
                <li><a href="#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Registry Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Email Support</a></li>
              </ul>
            </div>

            {/* Contact Column (takes 3 cols) */}
            <div className="col-span-1 md:col-span-3">
              <h4 className="text-xs font-normal text-gray-400 uppercase tracking-wider mb-4">
                Contact
              </h4>
              <ul className="space-y-3 text-xs sm:text-[13px] text-gray-300 font-normal">
                <li><a href="mailto:hello@honeymoonfund.com" className="hover:text-white transition-colors">hello@honeymoonfund.com</a></li>
                <li className="text-gray-400">742 Evergreen Terrace,<br />Austin, TX</li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Copyright & Back to Top Row */}
          <div className="flex items-center justify-between pt-8 border-t border-white/[0.08] text-xs text-gray-400 font-normal">
            <p>© 2026 HoneymoonFund. All rights reserved.</p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer group"
            >
              <span>Back to top</span>
              <div className="w-6 h-6 rounded bg-white/[0.06] group-hover:bg-white/[0.12] flex items-center justify-center transition-colors">
                <ArrowUp className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>

          {/* Giant Watermark Typography */}
          <div className="mt-14 sm:mt-20 overflow-hidden select-none pointer-events-none text-center">
            <span className="text-[13vw] font-bold text-white/[0.08] tracking-[-0.04em] leading-none block select-none">
              HoneymoonFund.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
