'use client';

import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

interface ServiceAreaSectionProps {
  onOpenBookingModal: (service?: string) => void;
}

const SERVICE_REGIONS = [
  {
    region: 'Perth CBD & Inner City',
    suburbs: ['Perth CBD', 'East Perth', 'West Perth', 'Northbridge', 'Subiaco', 'Leederville', 'Highgate', 'Mount Lawley', 'South Perth', 'Victoria Park']
  },
  {
    region: 'Northern Suburbs',
    suburbs: ['Joondalup', 'Scarborough', 'Innaloo', 'Karrinyup', 'Hillarys', 'Clarkson', 'Duncraig', 'Balcatta', 'Morley', 'Wangara']
  },
  {
    region: 'Southern Suburbs & Fremantle',
    suburbs: ['Fremantle', 'Cockburn Central', 'Cannington', 'Melville', 'Applecross', 'Murdoch', 'Rockingham', 'Baldivis', 'Mandurah', 'Booragoon']
  },
  {
    region: 'Eastern Suburbs & Hills',
    suburbs: ['Midland', 'Bayswater', 'Bassendean', 'Guildford', 'Belmont', 'Ellenbrook', 'Kalamunda', 'Forrestfield', 'Armadale', 'Maddington']
  }
];

export default function ServiceAreaSection({ onOpenBookingModal }: ServiceAreaSectionProps) {
  return (
    <section className="py-14 bg-slate-50 border-b border-slate-200" id="service-area">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-wider block mb-1">
            Service Area
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900">
            Perth Suburbs & Areas We Service
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 font-normal">
            Covering all suburbs North and South of the Swan River, from Joondalup down to Mandurah and east to the Perth Hills.
          </p>
        </div>

        {/* 4 Regions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {SERVICE_REGIONS.map((reg) => (
            <div key={reg.region} className="bg-white p-5 rounded-[8px] border border-slate-200 shadow-xs">
              <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5 pb-2 border-b border-slate-100">
                <MapPin className="w-3.5 h-3.5 text-brand-600" />
                <span>{reg.region}</span>
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {reg.suburbs.map((sub) => (
                  <span
                    key={sub}
                    className="text-[11px] font-semibold text-slate-700 bg-slate-50 px-2 py-0.5 rounded-[8px] border border-slate-200"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-white p-5 rounded-[8px] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <span className="text-xs font-bold text-slate-900 block">
              Don&apos;t see your suburb listed? We cover 100% of the Greater Perth Metropolitan Area.
            </span>
          </div>
          <button
            onClick={() => onOpenBookingModal()}
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs rounded-[8px] transition-colors flex items-center gap-1.5 flex-shrink-0"
          >
            <span>Get a Quote for Your Suburb</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
