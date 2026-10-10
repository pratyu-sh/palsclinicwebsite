import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import TrustMetrics from "@/components/sections/TrustMetrics";
import DigitalSmileDesign from "@/components/sections/DigitalSmileDesign";
import PatientIntent from "@/components/sections/PatientIntent";
import Treatments from "@/components/sections/Treatments";
import WhyUs from "@/components/sections/WhyUs";
import Doctor from "@/components/sections/Doctor";
import PatientJourney from "@/components/sections/PatientJourney";
import Reviews from "@/components/sections/Reviews";
import BeforeAfter from "@/components/sections/BeforeAfter";
import ClinicGallery from "@/components/sections/ClinicGallery";
import FAQ from "@/components/sections/FAQ";
import Location from "@/components/sections/Location";
import FinalCTA from "@/components/sections/FinalCTA";
import BookingForm from "@/components/sections/BookingForm";

export default function HomePage() {
  return (
    <main>
      <Header />

      {/* 01 — Hero */}
      <Hero />

      {/* 02 — Trust Metrics */}
      <TrustMetrics />

      {/* 03 — Digital Smile Design */}
      <DigitalSmileDesign />

      {/* 04 — Patient Intent */}
      <PatientIntent />

      {/* 05 — Treatments */}
      <Treatments />

      {/* 06 — Why Dr. Arora's */}
      <WhyUs />

      {/* 07 — Doctor */}
      <Doctor />

      {/* 08 — Patient Journey */}
      <PatientJourney />

      {/* 09 — Reviews */}
      <Reviews />

      {/* 10 — Before / After */}
      <BeforeAfter />

      {/* 11 — Clinic Experience */}
      <ClinicGallery />

      {/* 12 — FAQ */}
      <FAQ />

      {/* 13 — Location */}
      <Location />

      {/* 14 — Booking Form */}
      <BookingForm />

      {/* 15 — Final CTA */}
      <FinalCTA />

      {/* 16 — Footer */}
      <Footer />
    </main>
  );
}
