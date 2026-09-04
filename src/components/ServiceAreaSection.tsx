'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  MapPin, 
  ArrowRight, 
  Search, 
  CheckCircle2, 
  Building2, 
  Sun, 
  Anchor, 
  Trees, 
  Sparkles,
  ShieldCheck,
  Compass,
  Check
} from 'lucide-react';

interface ServiceAreaSectionProps {
  onOpenBookingModal: (service?: string) => void;
}

const SERVICE_REGIONS = [
  {
    id: 'cbd',
    region: 'Perth CBD & Inner City',
    shortName: 'CBD & Inner',
    tagline: 'High-density apartments, heritage terraces & inner city rentals',
    icon: Building2,
    image: '/assets/cleaning-13.jpg',
    suburbs: [
      'Perth CBD', 'East Perth', 'West Perth', 'Northbridge', 
      'Subiaco', 'Leederville', 'Highgate', 'Mount Lawley', 
      'South Perth', 'Victoria Park'
    ]
  },
  {
    id: 'north',
    region: 'Northern Suburbs',
    shortName: 'Northern Suburbs',
    tagline: 'Coastal strip, northern corridor & Joondalup precinct',
    icon: Sun,
    image: '/assets/cleaning-14.jpg',
    suburbs: [
      'Joondalup', 'Scarborough', 'Innaloo', 'Karrinyup', 
      'Hillarys', 'Clarkson', 'Duncraig', 'Balcatta', 
      'Morley', 'Wangara'
    ]
  },
  {
    id: 'south',
    region: 'Southern Suburbs & Fremantle',
    shortName: 'Southern & Freo',
    tagline: 'Freo harbour, Melville waterside & Peel region corridor',
    icon: Anchor,
    image: '/assets/cleaning-15.jpg',
    suburbs: [
      'Fremantle', 'Cockburn Central', 'Cannington', 'Melville', 
      'Applecross', 'Murdoch', 'Rockingham', 'Baldivis', 
      'Mandurah', 'Booragoon'
    ]
  },
  {
    id: 'east',
    region: 'Eastern Suburbs & Hills',
    shortName: 'Eastern & Hills',
    tagline: 'Swan Valley gateway, airport precinct & foothill properties',
    icon: Trees,
    image: '/assets/cleaning-16.jpg',
    suburbs: [
      'Midland', 'Bayswater', 'Bassendean', 'Guildford', 
      'Belmont', 'Ellenbrook', 'Kalamunda', 'Forrestfield', 
      'Armadale', 'Maddington'
    ]
  }
];

export default function ServiceAreaSection({ onOpenBookingModal }: ServiceAreaSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<string>('all');

  // Flatten all suburbs for search checking
  const allSuburbs = SERVICE_REGIONS.flatMap(r => r.suburbs);
  
  const searchMatch = searchQuery.trim() !== '';
  const isDirectMatch = allSuburbs.some(
    s => s.toLowerCase() === searchQuery.trim().toLowerCase()
  );

  // Active region data if a specific tab is chosen
  const activeRegionObj = SERVICE_REGIONS.find(r => r.id === activeTab);

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200 relative overflow-hidden" id="service-area">
      {/* Subtle Light Glass Backdrop Ornaments */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[8px] bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-brand-600" />
            <span>Service Area</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Perth Suburbs & Areas We Service
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 font-normal leading-relaxed">
            Covering all suburbs North and South of the Swan River, from Joondalup down to Mandurah and east to the Perth Hills.
          </p>
        </div>

        {/* Suburb Search Bar Box */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="glass-card-light p-4 sm:p-5 rounded-[8px] border border-slate-200/80 shadow-xs bg-white">
            <label htmlFor="suburb-search-input" className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-2">
              Instant Suburb Availability Checker
            </label>
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="suburb-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type your suburb (e.g. Scarborough, Fremantle, Joondalup, Midland)..."
                className="w-full pl-11 pr-16 py-3 bg-white border border-slate-200 rounded-[8px] text-sm text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded-[8px]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Search Match Feedback */}
            {searchMatch && (
              <div className="mt-3 p-3 rounded-[8px] bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-medium flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>
                    {isDirectMatch ? (
                      <><strong>Yes! We clean in {searchQuery}.</strong> Zero travel fee & 100% Bond Back Guarantee included.</>
                    ) : (
                      <><strong>We cover 100% of Greater Perth</strong> including {searchQuery} and surrounding areas.</>
                    )}
                  </span>
                </div>
                <button
                  onClick={() => onOpenBookingModal(`Bond Cleaning - ${searchQuery}`)}
                  className="px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs rounded-[8px] flex-shrink-0 transition-colors"
                >
                  Book for {searchQuery}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Region Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-bold rounded-[8px] transition-all border ${
              activeTab === 'all'
                ? 'bg-brand-600 text-white border-brand-600 shadow-xs'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
          >
            All 4 Perth Regions
          </button>
          {SERVICE_REGIONS.map((r) => {
            const Icon = r.icon;
            const isSelected = activeTab === r.id;
            return (
              <button
                key={r.id}
                onClick={() => setActiveTab(r.id)}
                className={`px-4 py-2 text-xs font-bold rounded-[8px] transition-all border flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-brand-600 text-white border-brand-600 shadow-xs ring-2 ring-brand-300'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{r.shortName}</span>
                {isSelected && <Check className="w-3 h-3 text-white ml-0.5" />}
              </button>
            );
          })}
        </div>

        {/* Display Mode A: Specific Region Focus View when a single tab is selected */}
        {activeRegionObj && activeTab !== 'all' && (
          <div className="mb-10 bg-white rounded-[8px] border border-brand-300 shadow-md p-6 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-[8px] bg-brand-500 text-white flex items-center justify-center font-black text-xl shadow-xs">
                  {React.createElement(activeRegionObj.icon, { className: 'w-6 h-6' })}
                </div>
                <div>
                  <span className="text-xs font-extrabold text-brand-600 uppercase tracking-wider">
                    Selected Region
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                    {activeRegionObj.region}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {activeRegionObj.tagline}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-[8px] border border-emerald-200">
                  ✓ 100% Coverage · Zero Travel Fee
                </span>
                <button
                  onClick={() => onOpenBookingModal(`Bond Cleaning - ${activeRegionObj.region}`)}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs rounded-[8px] transition-colors flex items-center gap-1.5"
                >
                  <span>Get Quote in {activeRegionObj.shortName}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Suburbs Grid for Selected Region */}
            <div className="pt-6">
              <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-600" />
                <span>Core Suburbs Included in {activeRegionObj.shortName}:</span>
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {activeRegionObj.suburbs.map((sub) => {
                  const isHighlighted = searchQuery && sub.toLowerCase().includes(searchQuery.toLowerCase());
                  return (
                    <button
                      key={sub}
                      onClick={() => onOpenBookingModal(`Bond Cleaning - ${sub}`)}
                      className={`p-3 rounded-[8px] border text-left transition-all hover:border-brand-400 group flex items-center justify-between ${
                        isHighlighted
                          ? 'bg-amber-100 border-amber-300 text-amber-950 font-bold scale-102'
                          : 'bg-slate-50 hover:bg-brand-50 border-slate-200/80 text-slate-800'
                      }`}
                    >
                      <span className="text-xs font-bold">{sub}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-600 transition-colors" />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Display Mode B: 4 Regions Cards Grid (Shown when 'All' tab is active OR as list below) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {SERVICE_REGIONS.map((reg) => {
            const Icon = reg.icon;
            const isTabActive = activeTab === reg.id;
            return (
              <div
                key={reg.region}
                className={`glass-card-light bg-white rounded-[8px] border transition-all flex flex-col overflow-hidden group ${
                  isTabActive
                    ? 'border-brand-500 ring-2 ring-brand-200 shadow-md'
                    : 'border-slate-200/80 shadow-xs hover:shadow-md'
                }`}
              >
                {/* Visual Header Image Banner */}
                <div className="relative h-32 w-full overflow-hidden">
                  <Image
                    src={reg.image}
                    alt={reg.region}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/40 to-transparent p-3 flex flex-col justify-between">
                    <div className="flex justify-end">
                      <span className="text-[10px] font-extrabold text-white bg-slate-900/80 backdrop-blur-xs px-2 py-0.5 rounded-[8px] border border-white/20">
                        {reg.suburbs.length} Core Suburbs
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-[8px] bg-brand-500 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-black text-white leading-tight">
                        {reg.region}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <p className="text-[11px] text-slate-500 font-medium mb-3 italic">
                    {reg.tagline}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {reg.suburbs.map((sub) => {
                      const isHighlighted = searchQuery && sub.toLowerCase().includes(searchQuery.toLowerCase());
                      return (
                        <button
                          key={sub}
                          onClick={() => {
                            onOpenBookingModal(`Bond Cleaning - ${sub}`);
                          }}
                          className={`text-[11px] font-semibold px-2 py-1 rounded-[8px] border transition-all flex items-center gap-1 ${
                            isHighlighted
                              ? 'bg-amber-100 text-amber-900 border-amber-300 font-bold scale-105'
                              : 'bg-slate-50 hover:bg-brand-50 text-slate-700 hover:text-brand-700 border-slate-200/80 hover:border-brand-300'
                          }`}
                        >
                          <MapPin className="w-2.5 h-2.5 text-slate-400 group-hover:text-brand-600 flex-shrink-0" />
                          <span>{sub}</span>
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => {
                      setActiveTab(reg.id);
                      onOpenBookingModal(`Bond Cleaning - ${reg.region}`);
                    }}
                    className="w-full py-2 bg-slate-100 hover:bg-brand-50 text-slate-700 hover:text-brand-700 font-bold text-xs rounded-[8px] border border-slate-200 transition-colors flex items-center justify-center gap-1.5 mt-auto"
                  >
                    <span>Quote in {reg.shortName}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Coverage Guarantees Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded-[8px] border border-slate-200/80 flex items-center gap-3">
            <div className="w-9 h-9 rounded-[8px] bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center flex-shrink-0 font-bold text-sm">
              100%
            </div>
            <div>
              <h4 className="text-xs font-black text-slate-900">Greater Perth Metro</h4>
              <p className="text-[11px] text-slate-500 font-normal">North, South, East & Central</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-[8px] border border-slate-200/80 flex items-center gap-3">
            <div className="w-9 h-9 rounded-[8px] bg-brand-50 text-brand-600 border border-brand-200 flex items-center justify-center flex-shrink-0 font-bold text-sm">
              $0
            </div>
            <div>
              <h4 className="text-xs font-black text-slate-900">Zero Travel Surcharge</h4>
              <p className="text-[11px] text-slate-500 font-normal">Flat rate quotes across all suburbs</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-[8px] border border-slate-200/80 flex items-center gap-3">
            <div className="w-9 h-9 rounded-[8px] bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center flex-shrink-0 font-bold text-sm">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black text-slate-900">100% Bond Guarantee</h4>
              <p className="text-[11px] text-slate-500 font-normal">Free re-clean within 72 hours</p>
            </div>
          </div>
        </div>

        {/* Bottom Callout Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-brand-950 to-slate-900 text-white p-6 sm:p-8 rounded-[8px] shadow-lg border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Full Perth Metropolitan Coverage</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-white">
              Don&apos;t see your suburb listed? We cover 100% of the Greater Perth Metropolitan Area.
            </h3>
            <p className="text-slate-300 text-xs font-normal">
              Whether you are moving out in Yanchep, Byford, Two Rocks, or Mundaring, our mobile team brings all commercial equipment directly to your door.
            </p>
          </div>

          <button
            onClick={() => onOpenBookingModal()}
            className="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm rounded-[8px] shadow-md hover:shadow-lg transition-all flex items-center gap-2 flex-shrink-0 group"
          >
            <span>Get a Quote for Your Suburb</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
