"use client";

import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-white selection:text-black bg-background">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 grid-pattern opacity-[0.4]" />
      </div>

      <div className="relative z-10">
        <Navigation />
        
        <main className="pt-32 md:pt-48 pb-24">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm">
               <span className="text-xs font-bold text-primary tracking-wide uppercase">About Us</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 system-heading leading-tight">
              Why Duebit exists.
            </h1>

            <div className="space-y-12 text-lg md:text-xl text-slate-600 leading-relaxed font-light">
              <section>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">The Problem</h3>
                <p>
                  For decades, Chartered Accountants and compliance firms have been bogged down by the administrative nightmare of chasing clients for documents, explaining what a "Purchase Register" is for the hundredth time, and manually tracking deadlines on whiteboards or chaotic spreadsheets.
                </p>
                <p className="mt-4">
                  CAs waste more time doing secretarial work than actual high-impact advisory. This leads to missed deadlines, frustrated teams, and stressed founders.
                </p>
              </section>

              <section>
                <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Our Vision</h3>
                <p>
                  We are building Duebit to entirely automate compliance workflows. We believe that professional firms should spend their cognitive cycles on complex problem-solving—not playing receptionist or human reminder bots.
                </p>
                <p className="mt-4">
                  By applying autonomous software to the traditional chartered ecosystem, Duebit acts as the ultimate un-sleeping engine that operates in the background—securing documents, delivering pristine client portals, and accelerating financial workflows.
                </p>
              </section>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
