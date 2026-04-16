"use client";

import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import WhatWeDoSection from "@/components/WhatWeDoSection";

export default function HowItWorksPage() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-white selection:text-black bg-background">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 grid-pattern opacity-[0.4]" />
      </div>

      <div className="relative z-10">
        <Navigation />
        
        <main className="pt-32 md:pt-40">
          <div className="container mx-auto px-6 max-w-4xl text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 system-heading">
              How it works
            </h1>
            <p className="text-lg text-slate-500">
              A simple 3-step process to put your firm on autopilot.
            </p>
          </div>

          <HowItWorks />
          <WhatWeDoSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
