import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, FileCheck, ShieldCheck } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroBackground from "./HeroBackground";

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
}: HeroProps) {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-40 pb-20 overflow-hidden text-white selection:bg-white/20 selection:text-white bg-[#050000]">
            {/* Premium R3F Background */}
            <HeroBackground />

            {/* Lighter overlay for better background visibility */}
            <div
                className="absolute inset-0 z-[1] bg-gradient-to-b from-black/30 via-black/20 to-black/40"
                aria-hidden="true"
            />

            {/* Floating Elements for "Coolness" */}
            <motion.div
                style={{ y: y1, opacity }}
                className="absolute top-[20%] left-[10%] z-[5] hidden lg:block"
            >
                <div className="bg-green-500/10 backdrop-blur-xl border border-green-500/20 p-4 rounded-2xl rotate-[-12deg] shadow-2xl">
                    <MessageSquare className="w-8 h-8 text-green-500" />
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-600 rounded-full border-2 border-white animate-bounce" />
                </div>
            </motion.div>

            <motion.div
                style={{ y: y2, opacity }}
                className="absolute bottom-[25%] right-[12%] z-[5] hidden lg:block"
            >
                <div className="bg-red-500/10 backdrop-blur-xl border border-red-500/20 p-5 rounded-2xl rotate-[15deg] shadow-2xl">
                    <FileCheck className="w-10 h-10 text-red-600" />
                </div>
            </motion.div>

            <motion.div
                style={{ y: y1, opacity }}
                className="absolute top-[35%] right-[15%] z-[5] hidden lg:block"
            >
                <div className="bg-blue-500/10 backdrop-blur-xl border border-blue-500/20 p-3 rounded-xl rotate-[10deg] shadow-xl">
                    <ShieldCheck className="w-6 h-6 text-blue-400" />
                </div>
            </motion.div>

            <div className="container relative z-10 px-6 mx-auto flex flex-col items-center text-center max-w-4xl">
                {/* Status badge */}
                {/* Status badge */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    <span className="text-sm text-white/80 font-medium tracking-wide">Document Collection, Automated</span>
                </motion.div>

                {/* Large headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-[44px] sm:text-[64px] md:text-[84px] lg:text-[96px] font-normal tracking-tight leading-[1.02]"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                    {title}
                </motion.h1>

                {/* Subtitle */}
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] font-normal tracking-tight leading-[1.02] mb-6 text-white/90"
                        style={{ fontFamily: "'Instrument Serif', serif" }}
                    >
                        {subtitle}
                    </motion.p>
                )}

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl mb-12 leading-relaxed font-light"
                >
                    WhatsApp-first document collection & compliance OS for <span className="text-white font-medium">CA and Law firms</span>.
                </motion.p>

                {/* Single CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap items-center justify-center gap-4 mb-16"
                >
                    <Button
                        size="xl"
                        className="btn-paper h-16 px-10 text-lg rounded-full"
                        asChild
                    >
                        <Link to="/waitlist">
                            Join Waitlist
                        </Link>
                    </Button>
                </motion.div>

                {/* Trust indicators */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-20 px-4 text-sm text-slate-300/80 font-medium"
                >
                    <span className="flex items-center gap-2">
                        <span className="text-red-600">✔</span>
                        Clients stay on WhatsApp
                    </span>
                    <span className="hidden sm:inline text-white/10">•</span>
                    <span className="flex items-center gap-2">
                        <span className="text-red-600">✔</span>
                        70–80% less follow-ups
                    </span>
                    <span className="hidden sm:inline text-white/10">•</span>
                    <span className="flex items-center gap-2">
                        <span className="text-red-600">✔</span>
                        Audit-ready logs + exports
                    </span>
                </motion.div>
            </div>

            {/* Bottom transition removed as per user request */}
        </section>
    );
}
