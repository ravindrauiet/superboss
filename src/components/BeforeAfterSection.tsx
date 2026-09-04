'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

interface BeforeAfterSectionProps {
  onOpenBookingModal: (service?: string) => void;
}

export default function BeforeAfterSection({ onOpenBookingModal }: BeforeAfterSectionProps) {
  const [sliderPos, setSliderPos] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-extrabold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-[8px] uppercase tracking-wider inline-block mb-1 border border-brand-100">
            Real Inspection Results
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            See The Transformation For Yourself
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal">
            Drag the slider to compare grease & scum buildup versus our final agent-passed clean result.
          </p>
        </div>

        {/* Interactive Comparison Slider */}
        <div className="max-w-4xl mx-auto bg-slate-100 rounded-[8px] p-4 sm:p-6 border border-slate-200 shadow-sm">
          <div className="relative w-full h-[320px] sm:h-[420px] rounded-[8px] overflow-hidden select-none border border-slate-300">
            
            {/* After Image (Full background) */}
            <Image
              src="/assets/cleaning-1.jpg"
              alt="After Deep Clean Result"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute top-4 right-4 bg-emerald-600 text-white text-xs font-black px-3 py-1 rounded-[8px] shadow-sm z-10 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>AFTER (100% Agent Passed)</span>
            </div>

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute top-0 bottom-0 left-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="relative w-full h-full min-w-[320px] sm:min-w-[768px] lg:min-w-[896px]">
                <Image
                  src="/assets/cleaning-8.jpg"
                  alt="Before Clean State"
                  fill
                  priority
                  className="object-cover filter contrast-125 brightness-90 grayscale-[30%]"
                />
              </div>
              <div className="absolute top-4 left-4 bg-slate-900/90 text-amber-400 text-xs font-black px-3 py-1 rounded-[8px] shadow-sm z-10 border border-slate-700">
                BEFORE (Exit Inspection State)
              </div>
            </div>

            {/* Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none z-20"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 text-white border-2 border-white flex items-center justify-center font-bold text-xs shadow-md">
                ↔
              </div>
            </div>

            {/* Range Input Overlay */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              aria-label="Drag to compare before and after cleaning result"
            />

          </div>

          {/* Bottom Bar */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <span className="text-xs font-extrabold text-slate-700">
              👈 Drag left/right to reveal full transformation
            </span>
            <button
              onClick={() => onOpenBookingModal()}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs rounded-[8px] transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <span>Get Quote For Your Property</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
