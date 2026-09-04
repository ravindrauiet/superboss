'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroBannerCarousel from '@/components/HeroBannerCarousel';
import AgencyTrustStrip from '@/components/AgencyTrustStrip';
import QuoteFormSection from '@/components/QuoteFormSection';
import BeforeAfterSection from '@/components/BeforeAfterSection';
import WhyUsSection from '@/components/WhyUsSection';
import ChecklistSection from '@/components/ChecklistSection';
import GallerySection from '@/components/GallerySection';
import ServiceAreaSection from '@/components/ServiceAreaSection';
import ReviewsSection from '@/components/ReviewsSection';
import FAQSection from '@/components/FAQSection';
import PerthSupportSection from '@/components/PerthSupportSection';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Bond Cleaning Perth');

  const handleOpenBookingModal = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-brand-600 selection:text-white">
      
      {/* Header */}
      <Navbar onOpenBookingModal={handleOpenBookingModal} />

      {/* Main Page Flow (Strictly Organized As Requested) */}
      <main className="flex-grow">
        
        {/* Section 1: Hero Banner with Auto-Scrolling Carousel & Key Info */}
        <HeroBannerCarousel onOpenBookingModal={handleOpenBookingModal} />

        {/* Section 2: Real Estate Agency Trust Bar */}
        <AgencyTrustStrip />

        {/* Section 3: Dedicated "Request a Quote" Form Section */}
        <QuoteFormSection onOpenBookingModal={handleOpenBookingModal} />

        {/* Section 4: Detailed Information & Visual Proof Sections */}
        <BeforeAfterSection onOpenBookingModal={handleOpenBookingModal} />
        <WhyUsSection onOpenBookingModal={handleOpenBookingModal} />
        <ChecklistSection onOpenBookingModal={handleOpenBookingModal} />
        <GallerySection />
        <ServiceAreaSection onOpenBookingModal={handleOpenBookingModal} />
        <ReviewsSection />
        <FAQSection />
        <PerthSupportSection onOpenBookingModal={handleOpenBookingModal} />

      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Booking Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultService={selectedService}
      />

    </div>
  );
}
