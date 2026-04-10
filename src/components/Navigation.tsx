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
    const pathname = usePathname();

    const navItems = [
        { name: "Features", href: "/#features" },
        { name: "Solutions", href: "/#use-cases" },
        { name: "Docs", href: "/docs" },
        { name: "Pricing", href: "/pricing" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isHome = pathname === "/";
    const textColor = scrolled || dark ? "text-slate-900" : "text-white";
    const linkColor = scrolled || dark ? "text-slate-600 hover:text-slate-900" : "text-white/70 hover:text-white";

    // Clean subtle bottom border
    const borderColor = scrolled || dark ? "border-slate-200" : "border-white/10";
    // Standard frosting
    const bgColor = scrolled ? "bg-white/80 backdrop-blur-md" : "bg-transparent";

    return (
        <header className={`fixed z-50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${scrolled
            ? "top-6 left-6 right-6"
            : "top-0 left-0 right-0"
            }`}>
            <nav className={`mx-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${scrolled
                ? "bg-white/80 backdrop-blur-md border border-slate-200 rounded-full shadow-lg max-w-[1200px]"
                : "bg-transparent max-w-[1400px] border-b border-transparent"
                }`}>
                <div className="flex items-center justify-between w-full mx-auto px-8 lg:px-10 h-16">
                    {/* Left side: Logo */}
                    <div className="flex-1 flex justify-start">
                        <Link href="/" className="flex items-center gap-2 group shrink-0" aria-label="Duebit home">
                            <span className={`font-display font-bold transition-colors duration-300 ${textColor} ${scrolled ? "text-[18px]" : "text-[22px]"}`}>
                                Duebit
                            </span>
                        </Link>
                    </div>

                    {/* Right side: Actions */}
                    <div className="flex-1 flex items-center justify-end gap-5">
                        <Link
                            href="/login"
                            className={`text-[13px] font-medium transition-colors ${linkColor}`}
                        >
                            Login
                        </Link>

                        <Button
                            asChild
                            className="h-10 px-8 rounded-full border border-white/40 bg-transparent text-white hover:bg-white/10 shadow-lg text-[13px] font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <Link href={ctaHref || "https://cal.com/duebit-demo/30min"}>
                                {ctaLabel}
                            </Link>
                        </Button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

