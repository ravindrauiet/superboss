'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, Mail, Clock, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

interface PerthSupportSectionProps {
  onOpenBookingModal: (service?: string) => void;
}

const RECENT_BOOKINGS = [
  { suburb: 'Subiaco (WA 6008)', time: '12 mins ago', detail: '3 Bed House Bond Clean', agency: 'Ray White Subiaco', category: 'Subiaco' },
  { suburb: 'Scarborough (WA 6019)', time: '26 mins ago', detail: '2 Bed Unit Vacate + Carpet Clean', agency: 'Peard Real Estate', category: 'Scarborough' },
  { suburb: 'Joondalup (WA 6027)', time: '41 mins ago', detail: '4 Bed House End of Lease', agency: 'Harcourts Joondalup', category: 'Joondalup' },
  { suburb: 'Fremantle (WA 6160)', time: '1 hour ago', detail: '2 Bed Apartment Vacate Clean', agency: 'ACTON | Belle Fremantle', category: 'Fremantle' }
];

export default function PerthSupportSection({ onOpenBookingModal }: PerthSupportSectionProps) {
  const [activeFilter, setActiveFilter] = useState('All Perth Metro');

  const filteredBookings = activeFilter === 'All Perth Metro'
    ? RECENT_BOOKINGS
    : RECENT_BOOKINGS.filter(b => b.category === activeFilter || b.suburb.includes(activeFilter));

  return (
    <div id="contact">
      {/* Perth Support Contact Section */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-wider block mb-1">
              Perth Support
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900">
              Contact Our Perth Cleaning Team
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 font-normal">
              Have questions about your Western Australia tenancy exit clean? Our local support team is here 7 days a week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            
            {/* Direct Phone / SMS */}
            <div className="bg-slate-50 p-6 rounded-[8px] border border-slate-200 text-center">
              <div className="w-10 h-10 bg-amber-100 text-amber-800 rounded-[8px] flex items-center justify-center mx-auto mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Call / SMS (Perth Direct)</h3>
              <a
                href="tel:+61460849843"
                className="text-lg font-black text-brand-600 hover:underline mt-1 block"
              >
                +61 460 849 843
              </a>
              <span className="text-[11px] text-slate-500 font-medium mt-1 block">15-Minute Response Guaranteed</span>
            </div>

            {/* Email Support */}
            <div className="bg-slate-50 p-6 rounded-[8px] border border-slate-200 text-center">
              <div className="w-10 h-10 bg-brand-100 text-brand-800 rounded-[8px] flex items-center justify-center mx-auto mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">Email Support</h3>
              <a
                href="mailto:support@cleaningsuperboss.com.au"
                className="text-sm font-bold text-slate-900 hover:text-brand-600 mt-2 block"
              >
                support@cleaningsuperboss.com.au
              </a>
              <span className="text-[11px] text-slate-500 font-medium mt-1 block">Same Day Response</span>
            </div>

            {/* Operating Hours */}
            <div className="bg-slate-50 p-6 rounded-[8px] border border-slate-200 text-center">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-800 rounded-[8px] flex items-center justify-center mx-auto mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-1">
                Operating Hours (AWST)
              </h3>
              <div className="text-xs text-slate-700 font-semibold space-y-0.5 mt-2">
                <p>Monday – Friday: 7:00 AM – 8:00 PM</p>
                <p>Saturday: 7:00 AM – 7:00 PM</p>
                <p>Sunday: 8:00 AM – 6:00 PM</p>
              </div>
            </div>

          </div>

          {/* Coverage note banner (Light Theme) */}
          <div className="p-3.5 bg-brand-50 text-brand-900 rounded-[8px] text-xs font-semibold text-center flex items-center justify-center gap-1.5 border border-brand-200">
            <MapPin className="w-4 h-4 text-brand-600 flex-shrink-0" />
            <span>📍 Perth Metro Coverage: North & South of Swan River · Inner City · Coastal Suburbs · Eastern Suburbs · Peel Region (Rockingham & Mandurah)</span>
          </div>

        </div>
      </section>

      {/* LIVE BOOKING ACTIVITY Section */}
      <section className="py-14 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-[10px] font-black text-amber-800 bg-amber-100 px-2.5 py-1 rounded-[8px] uppercase tracking-wider inline-block mb-1 border border-amber-200">
              LIVE BOOKING ACTIVITY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Recent Cleaning Bookings Across Perth
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 font-normal">
              See where Perth residents are booking our professional cleaning services throughout the metropolitan area
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mb-6">
            {['All Perth Metro', 'Subiaco', 'Scarborough', 'Joondalup', 'Fremantle', 'Perth CBD', 'Rockingham'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-3 py-1.5 text-xs font-bold rounded-[8px] border transition-colors ${
                  activeFilter === tab
                    ? 'bg-brand-600 text-white border-brand-600'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Activity Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredBookings.map((b, idx) => (
              <div key={idx} className="bg-white p-4 rounded-[8px] border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 mb-1">
                    <span className="text-brand-600 font-bold">{b.suburb}</span>
                    <span>{b.time}</span>
                  </div>
                  <h4 className="text-xs font-extrabold text-slate-900">{b.detail}</h4>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-slate-600 font-medium">{b.agency}</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-0.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom Light Theme CTA Banner */}
      <section className="py-14 bg-white text-slate-900 border-b border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-[8px] border border-emerald-200 inline-block mb-3">
            100% Bond Back Guarantee
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900">
            Moving Out in Perth? Claim Your Free Vacate Quote Today
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl mx-auto font-normal">
            Get an itemised quote tailored to your Perth rental. 100% inspection-ready results backed by our 72-hour free reclean policy.
          </p>
          
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => onOpenBookingModal()}
              className="px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm rounded-[8px] transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Request a Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Capabilities Marquee Banner (Light Theme) */}
      <div className="bg-brand-50 text-brand-800 text-xs font-extrabold py-2.5 overflow-hidden whitespace-nowrap border-y border-brand-200">
        <div className="animate-marquee">
          <span className="mx-4">PROFESSIONAL HOME CLEANING · DEEP CLEANING · BOND CLEANING · AIRBNB TURNOVERS · COMMERCIAL CLEANING · 100% SPOTLESS GUARANTEE · POLICE CHECKED & INSURED</span>
          <span className="mx-4">PROFESSIONAL HOME CLEANING · DEEP CLEANING · BOND CLEANING · AIRBNB TURNOVERS · COMMERCIAL CLEANING · 100% SPOTLESS GUARANTEE · POLICE CHECKED & INSURED</span>
        </div>
      </div>

    </div>
  );
}
