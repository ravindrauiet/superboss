'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ShieldCheck, ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface HeroBannerCarouselProps {
  onOpenBookingModal: (service?: string) => void;
}

const CAROUSEL_SLIDES = [
  {
    id: 1,
    image: '/assets/cleaning-1.jpg',
    badge: '100% Bond Back Guarantee · Real Estate Approved',
    title: 'Perth Bond Cleaning & End Of Lease Specialists',
    desc: 'Pass your Perth property manager\'s exit inspection first time. Includes full oven degreasing, window tracks, sanitisation, and a 72-hour free re-clean guarantee.',
    tag: 'Kitchen & Oven Deep Degreasing'
  },
  {
    id: 2,
    image: '/assets/cleaning-2.jpg',
    badge: '72-Hour Free Re-Clean Warranty',
    title: 'Inspection-Ready Vacate Cleaning Perth',
    desc: 'Deep shower glass descaling, tile grout scrubbing, and complete bathroom sanitisation tailored for WA real estate agency sign-offs.',
    tag: 'Bathroom & Tile Grout Descaling'
  },
  {
    id: 3,
    image: '/assets/cleaning-4.jpg',
    badge: 'REIWA Checklist Compliant',
    title: 'Stress-Free Moving & Move-Out Cleans',
    desc: 'Edge-to-edge vacuuming, window sills, sliding tracks, skirting boards, and mirrored wardrobes wiped clean across all Perth suburbs.',
    tag: 'Interior Living & Window Tracks'
  },
  {
    id: 4,
    image: '/assets/cleaning-7.jpg',
    badge: 'Trusted by 50+ Perth Real Estate Agencies',
    title: 'Full Property Handover Transformation',
    desc: 'Zero-friction tenancy exit cleans with official GST tax receipt and direct key pickup/drop-off service available.',
    tag: 'Full Home Vacate Detailing'
  }
];

export default function HeroBannerCarousel({ onOpenBookingModal }: HeroBannerCarouselProps) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIdx((prev) => (prev + 1) % CAROUSEL_SLIDES.length);
  const prevSlide = () => setCurrentIdx((prev) => (prev - 1 + CAROUSEL_SLIDES.length) % CAROUSEL_SLIDES.length);

  const activeSlide = CAROUSEL_SLIDES[currentIdx];

  return (
    <section className="bg-slate-100/80 border-b border-slate-200 py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Text & CTA (Light Glass Theme) */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Top Glass Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 glass-pill-light text-brand-700 text-xs font-extrabold rounded-[8px] shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>{activeSlide.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
              {activeSlide.title}
            </h1>

            {/* Subtext */}
            <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
              {activeSlide.desc}
            </p>

            {/* Primary CTA */}
            <div className="pt-2">
              <button
                onClick={() => onOpenBookingModal()}
                className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm rounded-[8px] transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Trust Rating Footnote */}
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-600">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-slate-900">4.9 / 5.0 Rating</span>
              <span className="text-slate-500">• 3,800+ Perth Vacate Cleans Completed</span>
            </div>

          </div>

          {/* Right Column: Light Glassmorphic Sliding Image Showcase */}
          <div className="lg:col-span-6">
            <div className="relative h-[360px] sm:h-[440px] w-full rounded-[8px] overflow-hidden border border-white/80 shadow-lg bg-white">
              {CAROUSEL_SLIDES.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    idx === currentIdx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={idx === 0}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-5">
                    <span className="text-xs font-black text-amber-950 bg-amber-400/90 backdrop-blur-md px-2.5 py-1 rounded-[8px] w-fit shadow-xs">
                      {slide.tag}
                    </span>
                    <h3 className="text-base font-bold text-white mt-1.5">{slide.title}</h3>
                  </div>
                </div>
              ))}

              {/* Glass Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 glass-pill-light text-slate-900 hover:bg-white rounded-[8px] transition-colors shadow-xs"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 glass-pill-light text-slate-900 hover:bg-white rounded-[8px] transition-colors shadow-xs"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Glass Indicators */}
              <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5">
                {CAROUSEL_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-2 rounded-[8px] transition-all ${
                      idx === currentIdx ? 'w-6 bg-amber-400' : 'w-2 bg-white/70'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
