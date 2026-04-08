"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";

export interface NavigationProps {
    ctaLabel?: string;
    ctaHref?: string;
    onCtaClick?: () => void;
    dark?: boolean;
}

export function Navigation({
    ctaLabel = "Book Demo",
    ctaHref = "https://cal.com/duebit-demo/30min",
    onCtaClick,
    dark = false,
}: NavigationProps) {
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrolled(currentScrollY > 20);

            // Hide navbar when reaching the Features section ("Everything you need.")
            const featuresSection = document.getElementById("features");
            const finalCtaSection = document.getElementById("final-cta-section");

            let isVisible = true;

            // 1. Hide if we are at or below the features section
            if (featuresSection) {
                const rect = featuresSection.getBoundingClientRect();
                if (rect.top <= 100) {
                    isVisible = false;
                }
            }

            // 2. Also hide when approaching the Final CTA section
            if (finalCtaSection) {
                const rect = finalCtaSection.getBoundingClientRect();
                if (rect.top <= 100) {
                    isVisible = false;
                }
            }

            setVisible(isVisible);
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isHome = pathname === "/";
    const textColor = scrolled || dark ? "text-slate-900" : "text-white";
    const linkColor = scrolled || dark ? "text-slate-600 hover:text-slate-900" : "text-white/70 hover:text-white";
    const borderColor = scrolled || dark ? "border-slate-200" : "border-white/10";
    const bgColor = scrolled ? "bg-white/80 backdrop-blur-xl shadow-sm border-slate-200" : "bg-white/5 backdrop-blur-md";

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 py-6 pointer-events-none">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`flex items-center justify-between w-full max-w-[1300px] gap-2 sm:gap-8 px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-colors duration-500 pointer-events-auto border ${bgColor} ${borderColor}`}
            >
                {/* Left: Branding */}
                <Link href="/" className="flex items-center gap-2 group shrink-0" aria-label="Duebit home">
                    <span className={`font-display font-bold text-lg sm:text-xl tracking-tight transition-colors duration-300 ${textColor}`}>
                        Duebit
                    </span>
                </Link>

                {/* Right: Actions */}
                <div className="flex items-center gap-1.5 sm:gap-3">
                    <Link
                        href="/login"
                        className={`inline-block text-[11px] sm:text-sm font-medium transition-colors duration-300 px-3 sm:px-6 py-1.5 sm:py-2 rounded-full border ${scrolled || dark ? 'border-slate-300' : 'border-white/30'} ${linkColor}`}
                    >
                        Log in
                    </Link>

                    <Button
                        asChild
                        variant="maroon"
                        className="px-4 sm:px-6 py-1.5 sm:py-2 h-auto text-[11px] sm:text-sm"
                    >
                        <Link href={ctaHref || "https://cal.com/duebit-demo/30min"}>
                            {ctaLabel}
                        </Link>
                    </Button>
                </div>
            </motion.div>
        </nav>
    );
}

