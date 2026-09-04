'use client';

import React from 'react';

const AGENCIES = [
  'Ray White',
  'LJ Hooker',
  'ACTON | belle',
  'REALMARK',
  'Harcourts',
  'PEARD',
  'abel PROPERTY',
  'first national'
];

export default function AgencyTrustStrip() {
  return (
    <section className="bg-white border-b border-slate-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Agencies Section */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Trusted by Leading Real Estate Agencies Across Perth & WA
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal">
            Our vacate checklists are tailored to satisfy property managers from Western Australia&apos;s most demanding real estate agencies.
          </p>
        </div>

        {/* Agency Logos / Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-8">
          {AGENCIES.map((agency) => (
            <div
              key={agency}
              className="p-3 bg-slate-50 border border-slate-200 rounded-[8px] text-center font-extrabold text-xs text-slate-700 hover:border-brand-300 hover:text-brand-600 transition-colors flex items-center justify-center h-12"
            >
              {agency}
            </div>
          ))}
        </div>

        {/* Highlight Stats Bar (Light Theme) */}
        <div className="bg-brand-50/80 text-slate-900 rounded-[8px] p-6 grid grid-cols-1 md:grid-cols-4 gap-6 items-center border border-brand-200">
          <div>
            <span className="text-[10px] font-extrabold text-brand-700 uppercase tracking-wider block">Perth Vacate Specialists</span>
            <h4 className="text-base font-black text-slate-900 mt-0.5">Real Estate Inspection-Ready Standards</h4>
            <p className="text-xs text-slate-600 mt-0.5 font-normal">Every nook, cranny, and appliance cleaned to perfection.</p>
          </div>

          <div className="text-left md:text-center border-t md:border-t-0 md:border-l border-brand-200 pt-4 md:pt-0 md:pl-4">
            <span className="text-2xl font-black text-brand-700">100%</span>
            <span className="text-xs font-bold text-slate-800 block mt-0.5">Bond Return</span>
          </div>

          <div className="text-left md:text-center border-t md:border-t-0 md:border-l border-brand-200 pt-4 md:pt-0 md:pl-4">
            <span className="text-2xl font-black text-emerald-700">72-Hour</span>
            <span className="text-xs font-bold text-slate-800 block mt-0.5">Free Reclean</span>
          </div>

          <div className="text-left md:text-center border-t md:border-t-0 md:border-l border-brand-200 pt-4 md:pt-0 md:pl-4">
            <span className="text-2xl font-black text-slate-900">3,800+</span>
            <span className="text-xs font-bold text-slate-800 block mt-0.5">Perth Homes Handed Over Successfully</span>
          </div>
        </div>

      </div>
    </section>
  );
}
