"use client";

import { SaasNavigation } from "@/components/saas-hero/saas-navigation";
import { SaasHeroSection } from "@/components/saas-hero/saas-hero-section";
import ProductInAction from "@/components/ProductInAction";
import HowItWorks from "@/components/HowItWorks";
import FeaturesGrid from "@/components/FeaturesGrid";
import UseCases from "@/components/UseCases";
import SecuritySection from "@/components/SecuritySection";
import PricingSection from "@/components/PricingSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-white selection:text-black">
      <SaasNavigation
        brand="DUEBIT"
        navLinks={[]}
        ctaLabel="Get in Touch"
      />
      <main>
        <SaasHeroSection
          eyebrow="Documents Collection on Autopilot."
          headlineMain="Stop"
          headlineHighlightWords={[
            "chasing clients for documents",
            "following up for every file"
          ]}
          gradientColors={["#ffffff", "#94a3b8", "#ffffff"]}
        />
        <ProductInAction />
        <HowItWorks />
        <FeaturesGrid />
        <UseCases />
        <SecuritySection />
        <WhatWeDoSection />
        <PricingSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
