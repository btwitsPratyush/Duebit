"use client";

import { Navigation } from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";

export default function TermsPage() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-white selection:text-black bg-background">
      <div className="relative z-10">
        <Navigation />
        
        <main className="pt-32 pb-24 bg-white">
          <div className="container mx-auto px-6 max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 font-display">
              Terms & Conditions
            </h1>
            
            <div className="prose prose-slate max-w-none text-slate-600 font-light text-[15px] leading-relaxed">
              <p>Last updated: January 2026</p>
              
              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Agreement to Terms</h3>
              <p>
                By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
              </p>
              
              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Use License</h3>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on Duebit's website for personal, non-commercial transitory viewing only.
              </p>
              
              <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Limitations</h3>
              <p>
                In no event shall Duebit or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Duebit's website.
              </p>

              <p className="mt-12 text-sm italic">
                These terms are a summarized template for demonstration purposes. Legal terms should be drafted by a qualified professional.
              </p>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
