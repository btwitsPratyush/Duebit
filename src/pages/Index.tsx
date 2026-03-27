import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import ProductInAction from "@/components/ProductInAction";
import HowItWorks from "@/components/HowItWorks";
import FeaturesGrid from "@/components/FeaturesGrid";
import UseCases from "@/components/UseCases";
import SecuritySection from "@/components/SecuritySection";
import PricingSection from "@/components/PricingSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen noise-overlay font-sans selection:bg-primary/20 selection:text-primary bg-[#050000]">
      <Navigation ctaLabel="Get in Touch" ctaHref="https://cal.com/duebit-demo/30min" />
      <main>
        <Hero
          title="Stop chasing clients"
          subtitle="for documents"
          description="WhatsApp-first document collection + email reminders for CA & law firms."
          ctaLabel="Book Demo"
          ctaHref="https://cal.com/duebit-demo/30min"
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
};

export default Index;
