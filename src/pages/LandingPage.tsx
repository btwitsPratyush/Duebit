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

const LandingPage = () => {
    return (
        <div className="relative min-h-screen noise-overlay font-sans selection:bg-primary/20 selection:text-primary bg-[#050000]">
            <Navigation ctaLabel="Join Waitlist" ctaHref="/waitlist" />
            <main>
                <Hero
                    title="Stop chasing clients"
                    subtitle="for documents"
                    description="The operating system for compliance-led firms. Automate document collection, follow-ups, and client communication workflows."
                    ctaLabel="Join Waitlist"
                    ctaHref="/waitlist"
                />
                <ProductInAction />
                <HowItWorks />
                <FeaturesGrid />
                <UseCases />
                <SecuritySection />
                <PricingSection />
                <WhatWeDoSection />
                <FinalCtaSection />
            </main>
            <Footer />
        </div>
    );
};

export default LandingPage;
