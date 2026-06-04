"use client";

import { Navigation } from "@/components/navigation/Navigation";
import { AsciiHero } from "@/components/saas-hero/AsciiHero";
import ProductInAction from "@/components/product-demo/ProductInAction";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import FeaturesGrid from "@/components/features/FeaturesGrid";
import UseCases from "@/components/use-cases/UseCases";
import SecuritySection from "@/components/security/SecuritySection";
import PricingSection from "@/components/pricing/PricingSection";
import WhatWeDoSection from "@/components/features/WhatWeDoSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-white selection:text-black bg-background">
      {/* Global Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 grid-pattern opacity-[0.4]" />
      </div>

      <div className="relative z-10">
        <Navigation />
        <main>
          <AsciiHero />
          <ProductInAction />
          <HowItWorks />
          <FeaturesGrid />
          <UseCases />
          <SecuritySection />
          <WhatWeDoSection />
          <PricingSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
