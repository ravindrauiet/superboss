'use client';

import React from 'react';
import { ShieldCheck, RotateCcw, FileText, CheckCircle, Sparkles } from 'lucide-react';

interface GuaranteeBannerProps {
  onOpenBookingModal: () => void;
}

export default function GuaranteeBanner({ onOpenBookingModal }: GuaranteeBannerProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900 text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-800/80 rounded-3xl p-8 sm:p-12 border border-slate-700/80 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Guarantee Badge & Icon */}
            <div className="lg:col-span-4 text-center lg:text-left">
              <div className="w-20 h-20 bg-emerald-500/20 border-2 border-emerald-400 rounded-3xl flex items-center justify-center text-emerald-400 mx-auto lg:mx-0 mb-6 shadow-lg shadow-emerald-500/20">
                <ShieldCheck className="w-12 h-12" />
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-full mb-3 border border-emerald-500/40">
                <CheckCircle className="w-3.5 h-3.5" />
                100% Risk-Free Guarantee
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                72-Hour Free Re-Clean Warranty
              </h3>
            </div>

            {/* Middle Column: Detailed Text */}
            <div className="lg:col-span-5 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Moving home is stressful enough. That&apos;s why Superboss guarantees your security deposit refund. If your real estate agent or landlord notes any cleaning issues on their final inspection report, <strong className="text-white font-semibold">we return within 72 hours to re-clean for FREE</strong>.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-200 font-semibold bg-slate-900/60 p-3 rounded-xl border border-slate-700">
                  <RotateCcw className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>No Extra Cost Re-Cleans</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200 font-semibold bg-slate-900/60 p-3 rounded-xl border border-slate-700">
                  <FileText className="w-4 h-4 text-brand-400 flex-shrink-0" />
                  <span>REIWA Agency Approved</span>
                </div>
              </div>
            </div>

            {/* Right Column: CTA */}
            <div className="lg:col-span-3 text-center lg:text-right">
              <button
                onClick={onOpenBookingModal}
                className="w-full py-4 px-6 bg-amber-500 hover:bg-amber-400 text-slate-900 font-black text-sm sm:text-base rounded-2xl shadow-xl shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-slate-900" />
                Book Guaranteed Clean
              </button>
              <p className="text-[11px] text-slate-400 font-medium mt-3">
                Instant confirmation • No hidden fees
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
