'use client';

import React from 'react';
import QuoteForm from './QuoteForm';
import { ShieldCheck, Phone, CheckCircle2, Star } from 'lucide-react';

interface QuoteFormSectionProps {
  onOpenBookingModal?: (service?: string) => void;
}

export default function QuoteFormSection({ onOpenBookingModal }: QuoteFormSectionProps) {
  return (
    <section className="py-14 bg-slate-100 border-b border-slate-200" id="quote-form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Quick Info */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-extrabold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-[8px] uppercase tracking-wider inline-block border border-brand-100">
              Guaranteed Fixed Quote
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
              Get Your Perth Bond Cleaning Quote in 30 Seconds
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              Complete our simple 2-step form for an immediate fixed-price quote tailored to your property. Backed by our 100% Bond Back Guarantee and 72-hour free re-clean warranty.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Zero Hidden Fees or Surprise Surcharges</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Official Real Estate GST Tax Invoice Included</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Fast 15-Minute Response via Call / SMS</span>
              </div>
            </div>

            <div className="pt-2 p-4 bg-white rounded-[8px] border border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-extrabold text-slate-500 uppercase block">Prefer to speak over phone?</span>
                <a href="tel:+61460849843" className="text-sm font-black text-brand-600 hover:underline flex items-center gap-1.5 mt-0.5">
                  <Phone className="w-4 h-4" /> +61 460 849 843
                </a>
              </div>
              <div className="text-right">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] font-bold text-slate-700">4.9 / 5.0 Rating</span>
              </div>
            </div>

          </div>

          {/* Right Column: Prominent 2-Step Quote Form */}
          <div className="lg:col-span-7">
            <QuoteForm onOpenBookingModal={onOpenBookingModal} />
          </div>

        </div>

      </div>
    </section>
  );
}
