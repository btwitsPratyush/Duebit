"use client";

import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import FeaturesGrid from "@/components/FeaturesGrid";
import UseCases from "@/components/UseCases";

export default function FeaturesPage() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-white selection:text-black bg-background">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 grid-pattern opacity-[0.4]" />
      </div>

      <div className="relative z-10">
        <Navigation />
        
        <main className="pt-32 md:pt-48 pb-20">
          <div className="container mx-auto px-6 max-w-5xl text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight system-heading">
              Everything you need to <br className="hidden md:block"/> run compliance.
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
              From document tracking and auto reminders to client portals and a deadline engine. The complete operating system for CA firms.
            </p>
          </div>

          <FeaturesGrid />
          <UseCases />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
