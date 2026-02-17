import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center pt-32 pb-20 overflow-hidden bg-slate-900 selection:bg-[hsl(var(--primary)/0.2)] selection:text-primary">

      {/* 1. Ambient Background (Matches BentoGrid) */}
      {/* 1. Image Background Layer - Alien Plant Life */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src="/maroon.jpeg"
          alt="Duebit Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay for contrast (Adjusted for Maroon Image which is likely dark) */}
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>

        {/* Bottom Fade to section bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-slate-900 pointer-events-none"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center text-center mt-14">

        {/* 2. Top Tagline */}
        <div className="animate-fade-in-up mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-widest shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_var(--primary)]"></span>
            The Future of Audit
          </div>
        </div>

        {/* 3. Headline - SERIF FONT UPDATE */}
        <h1 className="animate-fade-in-up-delay-1 text-6xl sm:text-7xl md:text-8xl font-medium tracking-tight text-white mb-8 leading-[1.1] z-20 font-['Playfair_Display']">
          Docs. Deadlines.<br />
          <span className="text-primary relative inline-block italic">
            Done.
            {/* Hand-drawn underline effect */}
            <svg className="absolute w-full h-3 -bottom-2 left-0 text-primary opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        {/* 4. Subheadline */}
        <p className="animate-fade-in-up-delay-2 text-xl sm:text-2xl text-gray-200 max-w-2xl font-medium leading-relaxed mb-10 tracking-tight">
          Stop chasing clients. Duebit follows up, collects docs, and tracks deadlines automatically.
          <br className="hidden sm:block" />
        </p>

        {/* 5. Buttons */}
        <div className="animate-fade-in-up-delay-3 flex flex-col items-center gap-6 mb-20 z-20">
          <div className="flex flex-col sm:flex-row items-center gap-5">
            {/* Primary: Request a Demo */}
            <Button size="xl" className="h-14 px-10 rounded-full bg-red-800 hover:bg-red-900 text-white text-lg font-bold shadow-xl shadow-red-900/20 hover:scale-105 transition-all duration-300" asChild>
              <Link to="/waitlist">
                Request a Demo <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            {/* Secondary: Join Waitlist */}
            <Button size="xl" variant="outline" className="h-14 px-10 rounded-full bg-white border-2 border-primary text-primary hover:bg-[hsl(var(--primary)/0.05)] hover:border-primary hover:text-primary text-lg font-bold transition-all duration-300" asChild>
              <Link to="/waitlist">
                Join Waitlist
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-400">
          <ArrowRight className="w-6 h-6 rotate-90" />
        </div>

        {/* 6. Dashboard Removed as per request */}

      </div>
    </section >
  );
};

export default HeroSection;
