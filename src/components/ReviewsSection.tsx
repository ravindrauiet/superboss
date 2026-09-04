'use client';

import React from 'react';
import Image from 'next/image';
import { Star, ShieldCheck } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Sarah T.',
    suburb: 'Subiaco WA',
    image: '/assets/cleaning-11.jpg',
    text: 'Our property manager in Subiaco was notoriously strict, but Cleaning Superboss passed the exit condition report on the very first inspection. Full $2,400 bond refunded within 48 hours.'
  },
  {
    name: 'Mark & Dan',
    suburb: 'Scarborough WA',
    image: '/assets/cleaning-12.jpg',
    text: 'Moving out of our Scarborough rental was super stressful until we hired this team. The oven and shower screens looked brand new. Got our quote in 15 mins and clean done the next day.'
  },
  {
    name: 'Chloe R.',
    suburb: 'Joondalup WA',
    image: '/assets/cleaning-13.jpg',
    text: 'Booked their end of lease clean with carpet steam cleaning in Joondalup. The tax invoice and carpet certificate were accepted by the real estate agent immediately with zero fuss.'
  }
];

export default function ReviewsSection() {
  return (
    <section className="py-14 bg-white border-b border-slate-200" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-wider block mb-1">
            Verified Perth Reviews
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900">
            Trusted by Hundreds of Perth Tenants & Landlords
          </h2>
        </div>

        {/* 3 Review Cards with Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-5 rounded-[8px] border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3 pb-3 border-b border-slate-200">
                  <div className="relative w-12 h-12 rounded-[8px] overflow-hidden border border-slate-300 flex-shrink-0 bg-slate-200">
                    <Image
                      src={rev.image}
                      alt={rev.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-slate-900 block">{rev.name}</span>
                    <span className="text-[11px] font-semibold text-brand-600">{rev.suburb}</span>
                    <div className="flex items-center gap-0.5 text-amber-400 mt-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed italic font-normal">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-[8px] flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" /> Verified Pass
                </span>
                <span className="text-[10px] text-slate-400 font-semibold">100% Bond Returned</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
