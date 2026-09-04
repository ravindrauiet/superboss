'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import QuoteForm from '@/components/QuoteForm';
import ChecklistSection from '@/components/ChecklistSection';
import AgencyTrustStrip from '@/components/AgencyTrustStrip';
import ServiceAreaSection from '@/components/ServiceAreaSection';
import { ShieldCheck, CheckCircle2, Phone, Award, Clock } from 'lucide-react';

export default function BondCleaningPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Bond Cleaning Perth');

  const handleOpenBookingModal = (service?: string) => {
    if (service) setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onOpenBookingModal={handleOpenBookingModal} />

      <main className="flex-grow">
        
        {/* Page Hero */}
        <section className="bg-slate-100 py-10 lg:py-14 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 border border-brand-200 rounded-[8px] text-brand-700 text-xs font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  100% Security Bond Recovery Guarantee
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
                  Bond Cleaning Perth
                </h1>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  Perth&apos;s premier real estate agency approved bond cleaning service. We follow strict REIWA property manager checklists to ensure your security deposit is returned in full.
                </p>

                <div className="space-y-2.5 pt-1">
                  {[
                    '100% Bond Back Guarantee with 72-Hour Free Re-clean',
                    'Full Internal Oven & Cooktop Degreasing Included',
                    'Bathroom Shower Glass Descaling & Tile Scrubbing',
                    'Itemized Real Estate Compliant Receipt Provided'
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 flex items-center gap-3">
                  <button
                    onClick={() => handleOpenBookingModal('Bond Cleaning Perth')}
                    className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs rounded-[8px] transition-colors"
                  >
                    Request a Quote
                  </button>
                  <a
                    href="tel:+61460849843"
                    className="px-5 py-2.5 bg-white border border-slate-200 text-slate-800 font-bold text-xs rounded-[8px] hover:bg-slate-50 transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-600" />
                    +61 460 849 843
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6">
                <QuoteForm onOpenBookingModal={handleOpenBookingModal} />
              </div>

            </div>
          </div>
        </section>

        <AgencyTrustStrip />
        <ChecklistSection onOpenBookingModal={handleOpenBookingModal} />
        <ServiceAreaSection onOpenBookingModal={handleOpenBookingModal} />

      </main>

      <Footer />

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
}
