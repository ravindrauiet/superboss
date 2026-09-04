'use client';

import React, { useState } from 'react';
import { Sparkles, ShieldCheck, Check, ArrowRight, Home, Flame, Wind, Layers } from 'lucide-react';

interface QuoteCalculatorProps {
  onOpenBookingModal: (service?: string) => void;
}

export default function QuoteCalculator({ onOpenBookingModal }: QuoteCalculatorProps) {
  const [service, setService] = useState('Bond Cleaning Perth');
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(2);
  const [carpetClean, setCarpetClean] = useState(false);
  const [ovenClean, setOvenClean] = useState(true);
  const [windowClean, setWindowClean] = useState(false);

  // Price Calculation Logic
  const calculatePrice = () => {
    let base = 199;
    base += (bedrooms - 1) * 40;
    base += (bathrooms - 1) * 35;
    if (carpetClean) base += bedrooms * 35;
    if (ovenClean) base += 50;
    if (windowClean) base += 45;
    return base;
  };

  const price = calculatePrice();

  return (
    <div className="w-full bg-white rounded-3xl p-6 sm:p-8 shadow-2xl shadow-slate-900/10 border border-slate-100 relative overflow-hidden">
      
      {/* Background Accent glow */}
      <div className="absolute -right-20 -top-20 w-56 h-56 bg-brand-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex items-center justify-between gap-2 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-full mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Instant Estimator • Fixed Price
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Calculate Your Perth Cleaning Price
          </h3>
        </div>
        <div className="hidden sm:block text-right">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Real-time Estimate</span>
          <span className="text-3xl font-black text-brand-600">${price}</span>
        </div>
      </div>

      <div className="space-y-5">
        
        {/* Service Type Selector (Strictly 3 services) */}
        <div>
          <label className="block text-xs font-extrabold text-slate-600 uppercase tracking-wider mb-2">
            1. Select Service Type
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'Bond Cleaning Perth', label: 'Bond Clean' },
              { id: 'End of Lease Cleaning Perth', label: 'End of Lease' },
              { id: 'Vacate Cleaning Perth', label: 'Vacate Clean' }
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setService(item.id)}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border text-center ${
                  service === item.id
                    ? 'bg-brand-600 text-white border-brand-600 shadow-md shadow-brand-600/20'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bedroom & Bathroom Selector */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-extrabold text-slate-600 uppercase tracking-wider mb-2">
              Bedrooms ({bedrooms})
            </label>
            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-2xl border border-slate-200">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setBedrooms(num)}
                  className={`flex-1 py-2 text-xs font-extrabold rounded-xl transition-all ${
                    bedrooms === num
                      ? 'bg-white text-brand-600 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-extrabold text-slate-600 uppercase tracking-wider mb-2">
              Bathrooms ({bathrooms})
            </label>
            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-2xl border border-slate-200">
              {[1, 2, 3, 4].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setBathrooms(num)}
                  className={`flex-1 py-2 text-xs font-extrabold rounded-xl transition-all ${
                    bathrooms === num
                      ? 'bg-white text-brand-600 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Add-on Options */}
        <div>
          <label className="block text-xs font-extrabold text-slate-600 uppercase tracking-wider mb-2">
            2. Popular Add-on Extras
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setOvenClean(!ovenClean)}
              className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                ovenClean
                  ? 'border-brand-500 bg-brand-50/50 text-slate-900'
                  : 'border-slate-200 text-slate-500 bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2">
                <Flame className={`w-4 h-4 ${ovenClean ? 'text-amber-500' : 'text-slate-400'}`} />
                <span className="text-xs font-semibold">Oven Deep Clean</span>
              </div>
              <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${ovenClean ? 'bg-brand-600 border-brand-600 text-white' : 'border-slate-300 bg-white'}`}>
                {ovenClean && <Check className="w-3.5 h-3.5" />}
              </div>
            </button>

            <button
              type="button"
              onClick={() => setCarpetClean(!carpetClean)}
              className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                carpetClean
                  ? 'border-brand-500 bg-brand-50/50 text-slate-900'
                  : 'border-slate-200 text-slate-500 bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2">
                <Layers className={`w-4 h-4 ${carpetClean ? 'text-brand-500' : 'text-slate-400'}`} />
                <span className="text-xs font-semibold">Carpet Steam</span>
              </div>
              <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${carpetClean ? 'bg-brand-600 border-brand-600 text-white' : 'border-slate-300 bg-white'}`}>
                {carpetClean && <Check className="w-3.5 h-3.5" />}
              </div>
            </button>

            <button
              type="button"
              onClick={() => setWindowClean(!windowClean)}
              className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                windowClean
                  ? 'border-brand-500 bg-brand-50/50 text-slate-900'
                  : 'border-slate-200 text-slate-500 bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-2">
                <Wind className={`w-4 h-4 ${windowClean ? 'text-cyan-500' : 'text-slate-400'}`} />
                <span className="text-xs font-semibold">Ext Windows</span>
              </div>
              <div className={`w-5 h-5 rounded-md flex items-center justify-center border ${windowClean ? 'bg-brand-600 border-brand-600 text-white' : 'border-slate-300 bg-white'}`}>
                {windowClean && <Check className="w-3.5 h-3.5" />}
              </div>
            </button>
          </div>
        </div>

        {/* Price Output & CTA */}
        <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="sm:hidden text-center">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Estimated Price</span>
            <span className="text-3xl font-black text-brand-600">${price}</span>
          </div>

          <div className="flex items-center gap-2 text-emerald-600 text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 flex-shrink-0" />
            <span>Includes 100% Bond Back Guarantee & Receipt</span>
          </div>

          <button
            onClick={() => onOpenBookingModal(service)}
            className="w-full sm:w-auto px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-900 font-extrabold text-sm rounded-xl shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2"
          >
            <span>Book This Estimate</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
