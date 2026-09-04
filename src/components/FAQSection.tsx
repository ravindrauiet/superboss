'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: 'Do you provide a 100% Bond Back Guarantee?',
    a: 'Yes. Getting your bond back requires meeting strict Real Estate exit inspection standards. If your Perth property manager or landlord flags any cleaning item on the exit condition report within our guarantee period, we return to the property and rectify it completely free of charge. We prioritize inspection re-cleans urgently to protect your deposit.'
  },
  {
    q: 'Do you provide an itemised tax invoice for my Perth real estate agent?',
    a: 'Yes. We issue an official GST-compliant tax invoice and detailed cleaning receipt immediately upon job completion, accepted by all Western Australia real estate agencies.'
  },
  {
    q: "I don't have time to be at the property, can you organise key pick-up and drop-off with my Perth real estate agent?",
    a: "Yes. We can collect keys directly from your property manager's agency office prior to the clean and return them immediately upon completion for total convenience."
  },
  {
    q: 'Do you do pre-sale cleaning and move-in cleaning?',
    a: 'Yes. In addition to vacate cleans, we provide deep pre-sale detailing for property sellers and deep move-in cleans for new homeowners across Perth.'
  },
  {
    q: 'The previous tenant left the property in bad condition, will you still clean?',
    a: 'Yes. We specialise in heavy deep cleaning, grease degreasing, hard water descaling, and restoring neglected properties to inspection-ready standards.'
  },
  {
    q: 'Can I customize the quote or exclude items to save cost?',
    a: 'Yes. You can select specific rooms or add-on options tailored strictly to your budget and property requirements.'
  },
  {
    q: 'My house is a 2-storey townhouse, can you clean 2nd-floor windows?',
    a: 'Yes. We clean all internal windows, sliding tracks, and accessible external glass for multi-storey townhouses and apartments.'
  },
  {
    q: 'Is vacate cleaning the same as end of lease cleaning or bond cleaning in Perth?',
    a: 'Yes! Bond cleaning, end of lease cleaning, and vacate cleaning all refer to the exact same comprehensive inspection-ready move-out clean required for security deposit return in WA.'
  },
  {
    q: 'Can I add Carpet Steam Cleaning with a certificate for pet bond requirements?',
    a: 'Yes. Our carpet steam cleaning service includes hot water extraction and an official pet flea treatment certificate compliant with WA real estate pet bond clauses.'
  },
  {
    q: 'Does the rental property need electricity and hot water connected?',
    a: 'Yes. Electricity and running water must be connected at the property on the day of cleaning so our commercial equipment can operate.'
  }
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  return (
    <section className="py-14 bg-slate-50 border-b border-slate-200" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-wider block mb-1">
            Common Questions
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900">
            Frequently Asked Questions (Perth Bond Cleaning)
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 font-normal">
            Everything you need to know about your bond clean, real estate inspection checklists, and guarantee.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-2.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-[8px] border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 font-extrabold text-slate-900 text-xs sm:text-sm hover:text-brand-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-brand-600 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 text-slate-600 text-xs leading-relaxed border-t border-slate-100 pt-3 font-normal">
                    {faq.a}
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
