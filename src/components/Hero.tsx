import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";
import { LiquidCtaButton } from "@/components/ui/LiquidCtaButton";

export interface HeroProps {
    title: string;
    subtitle?: string;
    description: string;
    ctaLabel?: string;
    ctaHref?: string;
    onCtaClick?: () => void;
}

export function Hero({
    title,
    subtitle,
    description,
    ctaLabel = "Join Waitlist",
    ctaHref = "/waitlist",
    onCtaClick,
}: HeroProps) {
    return (
        <section className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center pb-16 md:pb-[120px] pt-48 md:pt-56 overflow-hidden text-white selection:bg-white/20 selection:text-white bg-[#050000] snap-section">
            <HeroBackground />
            <div className="container relative z-10 px-6 mx-auto flex flex-col items-center text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-6"
                >
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="text-sm text-white/80 font-medium tracking-wide">Document Collection, Automated</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-[56px] sm:text-[80px] md:text-[100px] lg:text-[110px] font-normal tracking-tight leading-[0.98] mb-4"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                    {title}
                </motion.h1>

                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="text-[44px] sm:text-[64px] md:text-[84px] lg:text-[100px] font-normal tracking-tight leading-[1] mb-10 inline-block bg-gradient-to-r from-[#707070] via-[#F5F5F7] to-[#707070] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]"
                        style={{ fontFamily: "'Instrument Serif', serif" }}
                    >
                        {subtitle}
                    </motion.p>
                )}

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl mb-12 leading-relaxed font-light"
                >
                    Documents Collection on <span className="text-white font-medium">Autopilot</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap items-center justify-center gap-4 mb-1"
                >
                    <a href={ctaHref} aria-label={ctaLabel} target={ctaHref?.startsWith("http") ? "_blank" : undefined} rel={ctaHref?.startsWith("http") ? "noopener noreferrer" : undefined}>
                        <LiquidCtaButton theme="dark" showArrow={false}>
                            {ctaLabel}
                        </LiquidCtaButton>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-28 mb-0 px-4 text-sm text-slate-300/80 font-medium"
                >
                    <span className="flex items-center gap-2">
                        <span className="text-red-600">✔</span>
                        Jobs created instantly
                    </span>
                    <span className="hidden sm:inline text-white/10">•</span>
                    <span className="flex items-center gap-2">
                        <span className="text-red-600">✔</span>
                        Documents assigned automatically
                    </span>
                    <span className="hidden sm:inline text-white/10">•</span>
                    <span className="flex items-center gap-2">
                        <span className="text-red-600">✔</span>
                        Missing tracked in real-time
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
