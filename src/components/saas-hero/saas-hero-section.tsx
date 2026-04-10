"use client";

import { useEffect, useState } from "react";
import { BlurWord } from "./blur-word";
import { LiquidCtaButton } from "@/components/ui/LiquidCtaButton";
import Link from "next/link";

interface HeroStat {
  value: string;
  label: string;
}

interface SaasHeroSectionProps {
  eyebrow: string;
  headlineMain: string;
  headlineHighlightWords: string[];
  rotationInterval?: number;
  stats?: HeroStat[];
  backgroundVideoUrl?: string;
  gradientColors?: string[];
  ctaLabel?: string;
  ctaHref?: string;
}

export function SaasHeroSection({
  eyebrow,
  headlineMain,
  headlineHighlightWords = [],
  rotationInterval = 2500,
  stats = [],
  backgroundVideoUrl = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-hero-0BnFGdr81Ifnj3WbBZoNt1KE4D5DMT.mp4",
  gradientColors = ["#eca8d6", "#a78bfa", "#67e8f9", "#fbbf24", "#eca8d6"],
  ctaLabel = "Book Demo",
  ctaHref = "https://cal.com/duebit-demo/30min",
}: SaasHeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (headlineHighlightWords.length === 0) return;
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % headlineHighlightWords.length);
    }, rotationInterval);
    return () => clearInterval(interval);
  }, [headlineHighlightWords.length, rotationInterval]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start overflow-hidden bg-black selection:bg-white selection:text-black">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-70 scale-[1.02]"
        >
          <source src={backgroundVideoUrl} type="video/mp4" />
        </video>
        {/* Subtle overlay to ensure text readability on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
      </div>

      {/* Subtle grid lines */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none opacity-20">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute h-px bg-white/10"
            style={{
              top: `${12.5 * (i + 1)}%`,
              left: 0,
              right: 0,
            }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute w-px bg-white/10"
            style={{
              left: `${8.33 * (i + 1)}%`,
              top: 0,
              bottom: 0,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-20 sm:py-32 lg:py-40">
        <div className="lg:max-w-[85%]">
          {/* Eyebrow */}
          <div
            className={`mb-6 sm:mb-10 transition-all duration-1000 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            <span className="inline-flex items-center gap-3 text-[10px] sm:text-xs md:text-sm font-mono tracking-[0.2em] text-white/50 uppercase">
              <span className="w-8 sm:w-12 h-px bg-white/20" />
              {eyebrow}
            </span>
          </div>

          {/* Main headline */}
          <div className="mb-10 sm:mb-14">
            <h1
              className={`text-left font-instrument leading-[1.1] tracking-tight transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
            >
              <div className="flex flex-col gap-2 sm:gap-4">
                <span className="text-[54px] xs:text-[64px] sm:text-[80px] md:text-[100px] lg:text-[110px] font-instrument font-bold italic text-[#7f1d1d] leading-none drop-shadow-xl select-none">Stop!</span>
                {headlineHighlightWords.length > 0 && (
                  <span className="text-[28px] xs:text-[32px] sm:text-[35px] md:text-[60px] lg:text-[85px] font-normal text-white tracking-tighter leading-[1.1] mt-2 sm:mt-4">
                    <BlurWord
                      word={headlineHighlightWords[wordIndex]}
                      trigger={wordIndex}
                      gradientColors={["#ffffff", "#94a3b8", "#ffffff"]}
                    />
                  </span>
                )}
              </div>
            </h1>
          </div>

          {/* CTA Button */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <Link href={ctaHref}>
              <LiquidCtaButton theme="dark" showArrow={false} backgroundColor="#000000" className="mt-2 sm:mt-4 ml-0">
                {ctaLabel}
              </LiquidCtaButton>
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
