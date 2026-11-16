'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, X } from 'lucide-react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: 'Is it free to create our honeymoon fund?',
    answer: 'Yes, setting up your customized honeymoon fund page requires zero upfront fees.',
  },
  {
    id: 2,
    question: 'Are guest contributions secure?',
    answer: 'Yes, all contributions are encrypted with bank-grade 256-bit security protocols and processed through tier-one PCI-compliant gateways.',
  },
  {
    id: 3,
    question: 'How do we transfer our honeymoon money?',
    answer: 'You can initiate a direct bank payout anytime with one tap. Funds typically arrive safely in your checking account within 24 to 48 hours.',
  },
  {
    id: 4,
    question: 'Are there processing fees on gifts?',
    answer: 'Standard industry payment processing applies. You can choose to absorb it or allow your guests to seamlessly cover it during checkout.',
  },
  {
    id: 5,
    question: 'Can wedding guests send personal messages?',
    answer: 'Absolutely! Each guest can leave heartfelt well wishes, advice, and personalized notes with their gift, all stored in your registry guestbook.',
  },
];

export default function Faq() {
  const [openIds, setOpenIds] = useState<number[]>([1]);

  const toggleFaq = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1240px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs text-gray-300 font-normal mb-6">
            <span>Questions Answered</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-[56px] font-normal text-white tracking-[-0.03em] flex items-center justify-center flex-wrap gap-x-3 gap-y-2">
            <span>Everything you need to</span>
            <span className="inline-flex items-center justify-center bg-[#d8ff5c] text-black px-4 py-0.5 sm:py-1 rounded-xl text-3xl sm:text-5xl md:text-[54px] font-medium tracking-tight">
              know
            </span>
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Support Card (takes 4 cols) */}
          <div className="lg:col-span-4 bg-[#1e2025] border border-white/[0.08] rounded-[32px] p-5 sm:p-6 flex flex-col justify-between shadow-xl">
            <div>
              {/* Photo */}
              <div className="relative w-full aspect-[4/3] rounded-[22px] overflow-hidden mb-5 bg-[#15161a]">
                <Image
                  src="/images/faq_support.jpg"
                  alt="Lauren Shaw customer support representative"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>

              {/* Support Pill */}
              <div className="inline-block bg-[#282a32] text-gray-300 text-[11px] font-normal px-2.5 py-1 rounded-md mb-3">
                Support
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-[22px] font-medium text-white tracking-tight mb-2">
                Still have questions?
              </h3>

              {/* Subtitle */}
              <p className="text-gray-400 text-xs sm:text-[13px] leading-relaxed mb-6 font-normal">
                Lauren Shaw is here to help you set up your dream trip fund.
              </p>
            </div>

            {/* Button */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#d3d3d6] hover:bg-white text-black font-medium text-xs sm:text-[13px] px-6 py-2.5 rounded-full transition-all duration-200 w-fit shadow-md hover:scale-105 active:scale-95"
            >
              Get in touch
            </a>
          </div>

          {/* Right Accordion List (takes 8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-3.5">
            {faqData.map((item) => {
              const isOpen = openIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="bg-[#1e2025] border border-white/[0.08] hover:border-white/15 rounded-[22px] sm:rounded-[24px] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(item.id)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-medium text-white tracking-tight">
                      {item.question}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-gray-300 flex-shrink-0">
                      {isOpen ? (
                        <X className="w-4 h-4 text-white" />
                      ) : (
                        <Plus className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-gray-400 text-xs sm:text-sm leading-relaxed border-t border-white/[0.04] font-normal">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
