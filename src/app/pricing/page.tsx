"use client";

import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";

export default function PricingPage() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-white selection:text-black bg-background">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 grid-pattern opacity-[0.4]" />
      </div>

      <div className="relative z-10">
        <Navigation />
        
        <main className="pt-24 md:pt-32">
          <PricingSection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
