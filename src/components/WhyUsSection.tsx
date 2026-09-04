'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, MapPin, DollarSign, Key, ArrowRight, CheckCircle2 } from 'lucide-react';

interface WhyUsSectionProps {
  onOpenBookingModal: (service?: string) => void;
}

const WHY_US_ITEMS = [
  {
    num: '1',
    title: '100% Bond Return Guarantee',
    desc: 'If your Perth property fails inspection on any cleaning item, we return to fix it completely free of charge. Your deposit return is guaranteed with an official Real Estate-compliant tax invoice.',
    icon: ShieldCheck
  },
  {
    num: '2',
    title: 'Local Perth Expertise & Suburb Knowledge',
    desc: 'From coastal salt residue and grit in Fremantle to heavy hard water stains in Joondalup, we understand each suburb\'s unique cleaning challenges.',
    icon: MapPin
  },
  {
    num: '3',
    title: 'Transparent Quotes & No Hidden Fees',
    desc: 'Upfront, transparent quote tailored specifically to your property size and tenancy requirements. No surprise surcharges on cleaning day.',
    icon: DollarSign
  },
  {
    num: '4',
    title: 'Trusted by 50+ Real Estate Agencies & Key Drop-off',
    desc: 'Perth real estate agents recommend us as their preferred cleaning provider. We can even coordinate key pick-up and drop-off directly with your agency.',
    icon: Key
  }
];

export default function WhyUsSection({ onOpenBookingModal }: WhyUsSectionProps) {
  return (
    <section className="py-14 bg-slate-50 border-b border-slate-200" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-wider block mb-1">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900">
            Why Perth Tenants Choose Cleaning Superboss for Vacate Cleans
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 font-normal">
            We take the stress out of moving in Perth by delivering property manager-approved cleans backed by our unconditional guarantee.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: 4 Pillars */}
          <div className="lg:col-span-7 space-y-4">
            {WHY_US_ITEMS.map((item) => (
              <div
                key={item.num}
                className="bg-white p-5 rounded-[8px] border border-slate-200 shadow-xs flex items-start gap-4 hover:border-brand-300 transition-colors"
              >
                <div className="w-9 h-9 rounded-[8px] bg-brand-50 text-brand-600 border border-brand-200 flex items-center justify-center font-black text-sm flex-shrink-0">
                  {item.num}
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Visual Photo Feature Showcase */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="relative h-64 rounded-[8px] overflow-hidden border border-slate-300 shadow-sm group">
              <Image
                src="/assets/cleaning-7.jpg"
                alt="Perth Clean Property Result"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-slate-900/60 p-4 flex flex-col justify-between">
                <span className="text-[10px] font-black text-amber-400 uppercase bg-slate-900/80 px-2 py-1 rounded-[8px] w-fit border border-slate-700">
                  Real Estate Inspection Passed
                </span>
                <div>
                  <h4 className="text-sm font-black text-white">Full Property Transformation</h4>
                  <p className="text-xs text-slate-300 font-normal mt-0.5">Every room vacuumed, mopped, and wiped to agent standard.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-36 rounded-[8px] overflow-hidden border border-slate-300 group">
                <Image
                  src="/assets/cleaning-8.jpg"
                  alt="Rangehood Clean"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-900/60 p-2.5 flex flex-col justify-end">
                  <span className="text-[10px] font-extrabold text-white">Rangehood & Filter Clean</span>
                </div>
              </div>

              <div className="relative h-36 rounded-[8px] overflow-hidden border border-slate-300 group">
                <Image
                  src="/assets/cleaning-9.jpg"
                  alt="Bathroom Tile Clean"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-900/60 p-2.5 flex flex-col justify-end">
                  <span className="text-[10px] font-extrabold text-white">Tile Grout & Baseboard Wipe</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom CTA Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => onOpenBookingModal()}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs rounded-[8px] transition-colors inline-flex items-center gap-2"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
