'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Key, Home, Sparkle } from 'lucide-react';

interface ServicesSectionProps {
  onOpenBookingModal: (service?: string) => void;
}

export const SERVICES_DATA = [
  {
    id: 'bond',
    title: 'Bond Cleaning Perth',
    subtitle: 'Comprehensive 100% Bond Back Guarantee move-out cleaning designed strictly for Perth property managers & real estate agency inspections.',
    price: '$249',
    image: '/assets/cleaning-1.jpg',
    href: '/services/bond',
    badge: '100% Bond Guarantee',
    checklist: [
      'Full kitchen & deep oven degreasing',
      'Bathrooms, tile grout & vanity sanitization',
      'Internal windows, sills & track cleaning',
      'Skirting boards, doors & light fittings',
      'Built-in wardrobe & cabinet wiping',
      '72-Hour Free Re-clean Warranty'
    ]
  },
  {
    id: 'end-of-lease',
    title: 'End of Lease Cleaning Perth',
    subtitle: 'Tailored end-of-tenancy deep cleaning service to ensure zero stress during your tenancy handover and agent sign-off.',
    price: '$269',
    image: '/assets/cleaning-2.jpg',
    href: '/services/end-of-lease',
    badge: 'Real Estate Approved',
    checklist: [
      'REIWA approved inspection standard',
      'Full wall spot cleaning & cobweb removal',
      'Exhaust fan & rangehood filter degreasing',
      'Carpet vacuuming & hard floor mopping',
      'Balcony & outdoor entry sweeping',
      'Direct communication with your Property Manager'
    ]
  },
  {
    id: 'vacate',
    title: 'Vacate Cleaning Perth',
    subtitle: 'Full-property total deep cleaning for vacant rental properties, home sales, or move-ins across Metro & Greater Perth.',
    price: '$289',
    image: '/assets/cleaning-3.jpg',
    href: '/services/vacate',
    badge: 'Deep Property Transformation',
    checklist: [
      'Complete house or apartment deep clean',
      'Oven, stovetop & dishwasher detailing',
      'Shower glass descaling & mirror polishing',
      'Internal glass windows & sliding track detail',
      'Key pickup & drop-off available upon request',
      'Itemized tax invoice & bond receipt provided'
    ]
  }
];

export default function ServicesSection({ onOpenBookingModal }: ServicesSectionProps) {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-100 text-brand-800 text-xs font-bold rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            Exclusive Specialized Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Our Perth Cleaning Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 font-normal">
            We specialize exclusively in end-of-tenancy cleans to guarantee your bond refund without hassle.
          </p>
        </div>

        {/* 3 Main Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-amber-400 text-slate-900 font-extrabold text-xs rounded-full shadow-md">
                    {service.badge}
                  </span>
                </div>

                {/* Pricing Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <span className="text-xs font-medium text-slate-200 block">Starting From</span>
                    <span className="text-2xl font-black text-white">{service.price}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-bold text-emerald-400 bg-slate-900/80 px-2.5 py-1 rounded-lg backdrop-blur-sm border border-slate-700">
                    <ShieldCheck className="w-3.5 h-3.5" /> 100% Guaranteed
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-brand-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed font-normal">
                    {service.subtitle}
                  </p>

                  {/* Checklist Highlights */}
                  <div className="mt-6 pt-6 border-t border-slate-100 space-y-2.5">
                    <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider block mb-3">
                      Included In This Clean:
                    </span>
                    {service.checklist.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-8 pt-6 border-t border-slate-100 space-y-3">
                  <button
                    onClick={() => onOpenBookingModal(service.title)}
                    className="w-full py-3 px-4 bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-xs rounded-xl shadow-md shadow-brand-600/20 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Get Quote For {service.title.split(' ')[0]}</span>
                    <Sparkles className="w-4 h-4 text-amber-300" />
                  </button>

                  <Link
                    href={service.href}
                    className="w-full py-2.5 px-4 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5 border border-slate-200"
                  >
                    <span>Read Full Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </Link>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
