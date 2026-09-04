'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CheckCircle2, ShieldCheck, PlusCircle, AlertCircle, ArrowRight } from 'lucide-react';

interface ChecklistSectionProps {
  onOpenBookingModal?: (service?: string) => void;
}

const CHECKLIST_CARDS = [
  {
    id: 'interior',
    title: 'Interior Living Standard',
    subtitle: 'Windows, Skirtings & Ledges',
    image: '/assets/cleaning-4.jpg',
    badge: 'Real Estate Standard',
    items: [
      'Clean inside/outside window glass & sliding door tracks',
      'Wipe clean inside & out of all built-in wardrobes & drawers',
      'Wipe all window sills, door frames, architraves & skirting boards',
      'Remove fly screens, wash free of coastal grit, & reinstall',
      'Dust ceiling fans, light switches, power points & cornices',
      'Deep edge-to-edge vacuuming & sanitised hard floor mopping'
    ]
  },
  {
    id: 'kitchen',
    title: 'Kitchen Deep Degreasing',
    subtitle: 'Oven, Rangehood & Benches',
    image: '/assets/cleaning-1.jpg',
    badge: 'Deep Degrease Included',
    items: [
      'Full degreasing of oven cavity, glass door, racks & baking trays',
      'Stovetop burners, control knobs & splashback polished',
      'Exhaust rangehood hood wiped down & mesh filters degreased',
      'Dishwasher door seal wiped, inside washed & filter rinsed',
      'All kitchen cupboards, drawers & pantry shelves wiped clean',
      'Stainless steel sink descaled, polished & tapware sanitized'
    ]
  },
  {
    id: 'bathroom',
    title: 'Bathrooms & Laundry',
    subtitle: 'Mould, Grout & Descaling',
    image: '/assets/cleaning-2.jpg',
    badge: 'Scum & Grout Scrubbed',
    items: [
      'Shower glass screen descaled of hard water stains & soap scum',
      'Shower recess wall tiles & floor tile grout deep scrubbed',
      'Vanity basin, drawers, mirror & tapware polished & disinfected',
      'Toilet bowl, seat, cistern & pipework thoroughly disinfected',
      'Exhaust fan covers removed, washed clean & re-fitted',
      'Laundry tub, splashback tiles & washing machine taps cleaned'
    ]
  },
  {
    id: 'external',
    title: 'External & Patio Areas',
    subtitle: 'Patio, Garage & Cobwebs',
    image: '/assets/cleaning-14.jpg',
    badge: 'Outdoor Entry Polish',
    items: [
      'Front entrance door, frame, handle & glass insert wiped clean',
      'Patio & balcony floors swept clean of leaves & coastal sand',
      'Garage floor swept edge-to-edge & cobwebs removed',
      'Outdoor entry light covers dusted & wiped clean'
    ]
  }
];

export default function ChecklistSection({ onOpenBookingModal }: ChecklistSectionProps) {
  return (
    <section className="py-14 bg-white border-b border-slate-200" id="checklist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-wider block mb-1">
            Real Estate Vacate Standard
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900">
            What Does Our Perth Vacate Clean Include?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 font-normal">
            Our comprehensive move-out cleaning standard is designed to cover every area required for rental bond release, pre-sale property detailing, and move-in cleans.
          </p>
        </div>

        {/* 4 Visual Checklist Cards Grid (Pixel-Perfect Aligned) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {CHECKLIST_CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-slate-50 border border-slate-200 rounded-[8px] overflow-hidden flex flex-col justify-between shadow-xs hover:border-brand-300 transition-colors"
            >
              {/* Card Image Header */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-extrabold bg-slate-900/90 text-amber-400 px-2.5 py-1 rounded-[8px] border border-slate-700">
                    {card.badge}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-base font-extrabold leading-snug">{card.title}</h3>
                  <p className="text-xs text-slate-300 font-normal">{card.subtitle}</p>
                </div>
              </div>

              {/* Card Checklist Items */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <ul className="space-y-2.5 mb-4">
                  {card.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {onOpenBookingModal && (
                  <button
                    onClick={() => onOpenBookingModal()}
                    className="w-full py-2.5 bg-white border border-slate-200 hover:bg-brand-50 hover:text-brand-600 font-extrabold text-xs text-slate-800 rounded-[8px] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Request Quote For {card.title.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-[8px] text-xs font-semibold text-emerald-900 flex items-center gap-2 mb-10">
          <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
          <span>72-Hour Free Re-Clean Guarantee: If your Perth property manager marks anything on this checklist, we return within 72 hours for free.</span>
        </div>

        {/* Add-ons and Exclusions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Add-ons Box */}
          <div className="bg-white p-6 rounded-[8px] border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-100">
              <PlusCircle className="w-5 h-5 text-brand-600" />
              <div>
                <h4 className="text-sm font-extrabold text-slate-900">Move-Out Cleaning Add-Ons (Selectable in Quote)</h4>
                <p className="text-[11px] text-slate-500 font-normal">Customise your vacate package with specialised extras</p>
              </div>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-700 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-brand-600 font-bold">•</span>
                <span><strong>Carpet Steam Cleaning</strong> (Hot water extraction with real estate pet flea certificate)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-600 font-bold">•</span>
                <span><strong>External Window Cleaning & Fly Screens</strong> (Deep wash of all external glass)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-600 font-bold">•</span>
                <span><strong>Blinds Wiping & Dusting</strong> (Detailed slat washing & heavy dust removal)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-600 font-bold">•</span>
                <span><strong>Full Wall Washing</strong> (Removal of heavy nicotine, marker or scuff marks)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-600 font-bold">•</span>
                <span><strong>High-Pressure Washing</strong> for Balconies, Decks & Outdoor Pavers</span>
              </li>
            </ul>
          </div>

          {/* Exclusions Box */}
          <div className="bg-white p-6 rounded-[8px] border border-slate-200 shadow-xs">
            <div className="flex items-center gap-2 mb-3 pb-3 border-b border-slate-100">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              <div>
                <h4 className="text-sm font-extrabold text-slate-900">Standard Service Exclusions & Custom Work</h4>
                <p className="text-[11px] text-slate-500 font-normal">Clear transparency on what requires separate specialized booking</p>
              </div>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-700 font-normal">
              <li className="flex items-start gap-2">
                <span className="text-slate-400">•</span>
                <span>Full-house tile & grout restoration (shower tiles included; other areas on custom quote)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400">•</span>
                <span>Ceiling washing and curtain dry cleaning (requires specialised restoration)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400">•</span>
                <span>Heavy garden weeding, mowing or landscaping maintenance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-slate-400">•</span>
                <span>Mould remediation caused by internal structural plumbing leaks</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
