"use client";

import { Navigation } from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";

export default function CareersPage() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-white selection:text-black bg-background">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 grid-pattern opacity-[0.4]" />
      </div>

      <div className="relative z-10">
        <Navigation />
        
        <main className="pt-32 md:pt-48 pb-24">
          <div className="container mx-auto px-6 max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-8 backdrop-blur-sm">
               <span className="text-xs font-bold text-slate-600 tracking-wide uppercase">Careers</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 system-heading leading-tight">
              We're building the future of compliance ops.
            </h1>

            <p className="text-lg md:text-xl text-slate-500 mb-12">
              We are a small, intense group of engineers and designers automating the entire operating layer of Indian Chartered Accountants. If you like solving complex pipeline issues and building premium UI, we want to hear from you.
            </p>

            <a 
              href="mailto:founders@duebit.com" 
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-slate-900 text-white font-bold tracking-wide hover:scale-105 transition-transform"
            >
              Email us your portfolio
            </a>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
