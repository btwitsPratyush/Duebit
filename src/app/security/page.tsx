"use client";

import { Navigation } from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";
import SecuritySection from "@/components/security/SecuritySection";

export default function SecurityPage() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-white selection:text-black bg-[#111111]">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10">
        <Navigation dark />
        
        <main className="pt-24">
          <div className="container mx-auto px-6 max-w-4xl text-center mb-8 pt-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 system-heading">
              Your data is safe with Duebit.
            </h1>
            <p className="text-lg text-white/50 max-w-2xl mx-auto">
              We employ enterprise-grade security protocols including end-to-end encryption, strict role-based access controls, and audited infrastructure to guarantee your firm's protection.
            </p>
          </div>
          <SecuritySection />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
