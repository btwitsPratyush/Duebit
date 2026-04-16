"use client";

import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-white selection:text-black bg-background">
      <div className="relative z-10">
        <Navigation />
        
        <main className="pt-32 pb-24 bg-white">
          <div className="container mx-auto px-6 max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 font-display">
              Privacy Policy
            </h1>
            
            <div className="prose prose-slate max-w-none text-slate-600 font-light text-[15px] leading-relaxed">
              <p>Last updated: January 2026</p>
              
              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Information We Collect</h3>
              <p>
                We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us.
              </p>
              
              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. How We Use Your Information</h3>
              <p>
                We use the information we collect about you to provide, maintain, and improve our services, including to process transactions, send related information, and provide customer support.
              </p>
              
              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Data Security</h3>
              <p>
                We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
              </p>
              
              <p className="mt-12 text-sm italic">
                This is a summarized privacy policy template for demonstration purposes. Legal policies should be drafted by a qualified professional.
              </p>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
