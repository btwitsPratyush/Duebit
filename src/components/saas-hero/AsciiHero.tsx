"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LiquidCtaButton } from "@/components/ui/LiquidCtaButton";
import { ArrowRight } from "lucide-react";
import { AsciiWave } from "./AsciiWave";

export function AsciiHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* ASCII Wave Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.65]">
        <AsciiWave className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-24">
        {/* Headline */}
        <div className="text-center max-w-5xl mx-auto mb-10">
          <h1
            className={`text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95] mb-8 transition-all duration-700 delay-100 lg:text-7xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            style={{ fontFamily: 'var(--font-geist-pixel-line), monospace' }}
          >
            <span className="block text-balance">Automate document collection</span>
            <span className="block text-balance text-primary">for your clients.</span>
          </h1>

          <p
            className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            No follow-ups. No chaos. Just everything submitted, on time.
          </p>
        </div>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <a href="https://cal.com/duebit-demo/30min" target="_blank" rel="noopener noreferrer">
            <LiquidCtaButton theme="dark" showArrow={false} size="md">
              Book a demo
            </LiquidCtaButton>
          </a>
        </div>
      </div>
    </section>
  );
}
