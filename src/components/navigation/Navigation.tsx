"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";

export interface NavigationProps {
    ctaLabel?: string;
    ctaHref?: string;
    onCtaClick?: () => void;
    dark?: boolean;
}

export function Navigation({
    ctaLabel = "Get in touch",
    ctaHref = "https://cal.com/duebit-demo/30min",
    onCtaClick,
    dark = false,
}: NavigationProps) {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: "Features", href: "/#features" },
        { name: "How it works", href: "/#detailed-how-it-works" },
        { name: "Security", href: "/#security" },
        { name: "Pricing", href: "/#pricing" },
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
    const textColor = scrolled || dark ? "text-slate-900" : "text-slate-800";
    const linkColor = scrolled || dark ? "text-slate-600 hover:text-slate-900" : "text-slate-500 hover:text-slate-900";
    const loginUrl = process.env.NEXT_PUBLIC_APP_LOGIN_URL || "http://localhost:5173/login";

    // Clean subtle bottom border
    const borderColor = scrolled || dark ? "border-slate-200" : "border-white/10";
    // Standard frosting
    const bgColor = scrolled ? "bg-white/80 backdrop-blur-md" : "bg-transparent";

    return (
        <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
            <nav className={`w-full transition-all duration-300 border-b ${scrolled
                ? "bg-white/90 backdrop-blur-md border-slate-200 shadow-sm"
                : "bg-transparent border-transparent"
                }`}>
                <div className="flex items-center justify-between w-full mx-auto px-2 md:px-6 h-16">
                    {/* Left side: Logo */}
                    <div className="flex-1 flex justify-start">
                        <Link href="/" className="flex items-center gap-2 group shrink-0" aria-label="Duebit home">
                            <img src="/logo.png" alt="" className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-8" : "h-10"}`} />
                            <span className={`font-display font-bold transition-colors duration-300 ${textColor} ${scrolled ? "text-[18px]" : "text-[22px]"} hidden md:block`}>
                                Duebit
                            </span>
                        </Link>
                    </div>

                    {/* Right side: Actions */}
                    <div className="flex-1 flex items-center justify-end gap-5">
                        <Link
                            href={loginUrl}
                            className={`text-[13px] font-medium transition-colors ${linkColor}`}
                        >
                            Login
                        </Link>

                        <Button
                            asChild
                            className={`h-10 px-6 rounded-full font-bold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] bg-primary text-white hover:bg-primary/90 shadow-md`}
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

