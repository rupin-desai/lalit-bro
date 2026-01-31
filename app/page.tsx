import React from 'react';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Stats from '@/components/landing/Stats';
import Services from '@/components/landing/Services'; // Outcomes
import Process from '@/components/landing/Process';
import Pricing from '@/components/landing/Pricing';
import FAQ from '@/components/landing/FAQ';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-transparent font-rubik text-landing-body selection:bg-landing-primary selection:text-white">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
