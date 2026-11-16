'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Steps from '@/components/Steps';
import FeatureCards from '@/components/FeatureCards';
import Testimonials from '@/components/Testimonials';
import Partners from '@/components/Partners';
import Faq from '@/components/Faq';
import ContactCta from '@/components/ContactCta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#15161a] text-white flex flex-col selection:bg-[#d8ff5c] selection:text-black">
      {/* Top Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* 3 Simple Steps */}
      <Steps />

      {/* 4 Large Alternating Feature Cards */}
      <FeatureCards />

      {/* Loved by couples and guests (Testimonial Carousel) */}
      <Testimonials />

      {/* Travel Partner Brands */}
      <Partners />

      {/* FAQ Section */}
      <Faq />

      {/* Contact Form & CTA */}
      <ContactCta />

      {/* Footer */}
      <Footer />
    </main>
  );
}

