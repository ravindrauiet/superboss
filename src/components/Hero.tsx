'use client';

import React from 'react';
import Image from 'next/image';
import QuoteForm from './QuoteForm';
import { ShieldCheck, Flame, FileCheck, Star, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenBookingModal: (service?: string) => void;
}

export default function Hero({ onOpenBookingModal }: HeroProps) {
  return (
    <section className="bg-slate-100 py-10 lg:py-14 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Top Subheadline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 border border-brand-200 rounded-[8px] text-brand-700 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              100% Bond Back Guarantee · Real Estate Approved
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              Perth Bond Cleaning & End Of Lease Specialists
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              Pass your Perth property manager&apos;s exit inspection first time. Includes full oven degreasing, window tracks, sanitisation, and a 72-hour free re-clean guarantee.
            </p>

            {/* Visual Hero Highlights Row */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="relative h-28 rounded-[8px] overflow-hidden border border-slate-300 group shadow-xs">
                <Image
                  src="/assets/cleaning-1.jpg"
                  alt="Perth Oven Degreasing Clean"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-900/60 flex flex-col justify-end p-2.5">
                  <span className="text-[10px] font-black text-amber-400 uppercase">Oven & Kitchen Detail</span>
                  <span className="text-xs font-bold text-white leading-tight">100% Degreased & Polished</span>
                </div>
              </div>

              <div className="relative h-28 rounded-[8px] overflow-hidden border border-slate-300 group shadow-xs">
                <Image
                  src="/assets/cleaning-2.jpg"
                  alt="Perth Bathroom Scum Descaling Clean"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-900/60 flex flex-col justify-end p-2.5">
                  <span className="text-[10px] font-black text-emerald-400 uppercase">Shower & Bathroom</span>
                  <span className="text-xs font-bold text-white leading-tight">Hard Water Scum Removed</span>
                </div>
              </div>
            </div>

            {/* 3 Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="bg-white p-3 rounded-[8px] border border-slate-200 shadow-xs">
                <div className="w-6 h-6 bg-emerald-100 text-emerald-700 rounded-[8px] flex items-center justify-center mb-1.5 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-xs font-extrabold text-slate-900">72-Hr Free Re-Clean</h4>
                <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">Zero cost if agent flags any cleaning item.</p>
              </div>

              <div className="bg-white p-3 rounded-[8px] border border-slate-200 shadow-xs">
                <div className="w-6 h-6 bg-amber-100 text-amber-700 rounded-[8px] flex items-center justify-center mb-1.5 font-bold">
                  <Flame className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-xs font-extrabold text-slate-900">Oven & Tracks Included</h4>
                <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">Full degreasing & glass descaling standard.</p>
              </div>

              <div className="bg-white p-3 rounded-[8px] border border-slate-200 shadow-xs">
                <div className="w-6 h-6 bg-brand-100 text-brand-700 rounded-[8px] flex items-center justify-center mb-1.5 font-bold">
                  <FileCheck className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-xs font-extrabold text-slate-900">Agent Tax Receipt</h4>
                <p className="text-[10px] text-slate-500 mt-0.5 leading-snug">Itemised compliance invoice for speedy bond return.</p>
              </div>
            </div>

            {/* Customer Avatars from real asset photos */}
            <div className="pt-2 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[3, 4, 5, 6].map((idx) => (
                  <div key={idx} className="w-8 h-8 rounded-[8px] overflow-hidden border-2 border-white relative bg-slate-300">
                    <Image
                      src={`/assets/cleaning-${idx}.jpg`}
                      alt="Perth Client Clean"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-xs text-slate-700 font-semibold">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span className="font-black text-slate-900">4.9 / 5.0</span>
                </div>
                <span className="text-[11px] text-slate-500 font-normal">Over 3,800+ Perth Vacate Cleans Completed</span>
              </div>
            </div>

          </div>

          {/* Right Column: Quote Form */}
          <div className="lg:col-span-6">
            <QuoteForm onOpenBookingModal={onOpenBookingModal} />
          </div>

        </div>
      </div>
    </section>
  );
}
