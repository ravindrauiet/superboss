'use client';

import React from 'react';
import { Send, Key, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Request a Quote',
    desc: 'Fill in our 30-second form or call us. Receive an exact fixed-price quote with a 15-minute response guarantee.',
    icon: Send
  },
  {
    step: '02',
    title: 'Key Pickup & Access',
    desc: 'We arrange property access via lockbox or collect keys directly from your Perth real estate agent.',
    icon: Key
  },
  {
    step: '03',
    title: 'REIWA Deep Clean',
    desc: 'Our police-checked team carries out a thorough top-to-bottom clean covering every item on the agent checklist.',
    icon: Sparkles
  },
  {
    step: '04',
    title: '100% Bond Returned',
    desc: 'You receive your official cleaning invoice & receipt. Backed by our 72-hour free re-clean guarantee.',
    icon: CheckCircle2
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-100 text-brand-800 text-xs font-bold rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            Simple 4-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            How Superboss Bond Cleaning Works
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 font-normal">
            From initial quote to final agent sign-off, we make moving out effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {STEPS.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-200/80 hover:border-brand-300 hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-white text-brand-600 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-black text-slate-300 group-hover:text-brand-400 transition-colors">
                      {st.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                    {st.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {st.desc}
                  </p>
                </div>

                {idx < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
