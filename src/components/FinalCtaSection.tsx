import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCtaSection = () => {
  return (
    <section id="final-cta-section" className="relative z-10 min-h-[104vh] flex items-center justify-center py-20 overflow-hidden footer-and-cta bg-black">

      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          className="absolute min-w-full min-h-full object-cover opacity-40"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/new.mp4" type="video/mp4" />
        </video>
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />

      </div>

      <div className="px-6 py-20 sm:py-24 container mx-auto max-w-4xl text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight leading-[1.1]">
          Too many clients,  <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-primary to-orange-500 animate-shimmer bg-[length:200%_100%] drop-shadow-[0_4px_10px_rgba(239,68,68,0.2)]">
            Too many follow-ups?
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-slate-200 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Stop wasting time on manual follow-ups. Start automating client data collection and compliance today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
          <Button
            size="xl"
            className="btn-paper h-16 px-10 text-lg rounded-full"
            asChild
          >
            <Link to="/waitlist">
              Join Waitlist
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>

        <p className="text-sm text-slate-400 font-medium">
          No credit card required <span className="mx-2 text-slate-600">•</span> Setup in 5 minutes
        </p>
      </div>
    </section>
  );
};

export default FinalCtaSection;
