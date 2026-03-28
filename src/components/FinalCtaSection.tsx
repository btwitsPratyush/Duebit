import { LiquidCtaButton } from "@/components/ui/LiquidCtaButton";

const FinalCtaSection = () => {
  return (
    <section id="final-cta-section" className="relative z-10 min-h-[104vh] flex items-center justify-center py-20 md:py-[120px] overflow-hidden footer-and-cta bg-black">

      {/* Image Background */}
        <video
          className="absolute min-w-full min-h-full object-cover opacity-90"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="https://cdn.leonardo.ai/users/a53b7588-900c-49a8-8b06-5580e2946b97/generations/1f127b22-2407-6e70-889e-226e754c518d/kling-3.0_flying_above_ocean_toward_horizon_weightless_feeling_smooth_liquid_motion_clouds-0.mp4" type="video/mp4" />
        </video>
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />

      <div className="px-6 py-20 sm:py-24 container mx-auto max-w-4xl text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 font-display tracking-tight leading-[1.1]">
          Too many clients,  <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A1C1C] via-[#B91C1C] to-[#7A1C1C] animate-shimmer bg-[length:200%_100%] drop-shadow-[0_4px_12px_rgba(185,28,28,0.3)]">
            Too many follow-ups?
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-slate-200 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Stop wasting time on manual follow-ups. Start automating client data collection and compliance today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
          <a href="https://cal.com/duebit-demo/30min" target="_blank" rel="noopener noreferrer">
            <LiquidCtaButton theme="dark" showArrow={false}>
              Get Duebit Today
            </LiquidCtaButton>
          </a>
        </div>

        <p className="text-sm text-slate-400 font-medium">
          No credit card required <span className="mx-2 text-slate-600">•</span> Setup in 5 minutes
        </p>
      </div>
    </section>
  );
};

export default FinalCtaSection;
