import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
    ctaLabel = "Join Waitlist",
    ctaHref = "/waitlist",
    onCtaClick,
    dark = false,
}: NavigationProps) {
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const location = useLocation();

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

    const isHome = location.pathname === "/";

    const navLinks = [
        { name: "Features", href: isHome ? "#features" : "/#features" },
        { name: "How it Works", href: isHome ? "#how-it-works" : "/#how-it-works" },
        { name: "Pricing", href: "/pricing" },
    ];

    const textColor = scrolled || dark ? "text-slate-900" : "text-white";
    const linkColor = scrolled || dark ? "text-slate-600 hover:text-slate-900" : "text-white/70 hover:text-white";
    const borderColor = scrolled || dark ? "border-black/10" : "border-white/10";
    const bgColor = scrolled ? "bg-white/80 backdrop-blur-xl shadow-md" : dark ? "bg-black/5 backdrop-blur-md" : "bg-white/10 backdrop-blur-md";

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 py-6 pointer-events-none">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`flex items-center justify-between w-full max-w-5xl gap-4 sm:gap-8 px-6 py-3 rounded-full transition-colors duration-500 pointer-events-auto border ${bgColor} ${borderColor}`}
            >
                {/* Left: Branding */}
                <Link to="/" className="flex items-center gap-3 group shrink-0" aria-label="Duebit home">
                    <span className={`font-display font-bold text-xl tracking-tight transition-colors duration-300 ${textColor}`}>
                        Duebit
                    </span>
                </Link>

                {/* Center: Nav links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors duration-300 ${linkColor}`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-3">
                    <Link
                        to="/login"
                        className={`inline-block text-sm font-medium transition-colors duration-300 px-6 py-2 rounded-full border ${scrolled || dark ? 'border-slate-300' : 'border-white/30'} ${linkColor}`}
                    >
                        Log in
                    </Link>

                    <Button
                        asChild
                        className="btn-paper px-6 py-2 h-auto text-sm group"
                    >
                        <Link to={ctaHref}>
                            {ctaLabel}
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </Button>
                </div>
            </motion.div>
        </nav>
    );
}
