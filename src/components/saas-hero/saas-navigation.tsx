"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

interface NavLink {
  name: string;
  href: string;
}

interface SaasNavigationProps {
  brand: string;
  navLinks: NavLink[];
  onSignIn?: () => void;
  onCTA?: () => void;
  ctaLabel?: string;
}

export function SaasNavigation({
  brand = "DUEBIT",
  navLinks = [],
  onSignIn,
  onCTA,
  ctaLabel = "Get in Touch"
}: SaasNavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-[100] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isScrolled
        ? "top-6 left-6 right-6"
        : "top-0 left-0 right-0"
        }`}
    >
      <nav
        className={`mx-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isScrolled || isMobileMenuOpen
          ? "bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl max-w-[1200px]"
          : "bg-transparent max-w-[1400px]"
          }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-700 px-4 sm:px-8 lg:px-10 ${isScrolled ? "h-16" : "h-20 sm:h-24"
            }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group relative z-[60]">
            <span className={`font-display font-bold tracking-tight transition-all duration-700 ${isScrolled ? "text-[18px] text-white" : "text-[22px] text-white"}`}>
              Duebit
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[13px] font-medium transition-all duration-300 relative group text-white/60 hover:text-white`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full bg-white`} />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/login"
              className={`text-[13px] font-medium transition-all duration-300 text-white/60 hover:text-white`}
            >
              Login
            </Link>
            <Button
              asChild
              onClick={onCTA}
              size="sm"
              variant="default"
              className={`rounded-full transition-all duration-700 font-bold border border-white/40 bg-transparent text-white hover:bg-white/10 ${isScrolled ? "px-6 h-10 text-[13px]" : "px-8 h-12 text-sm"}`}
            >
              <Link href="https://cal.com/duebit-demo/30min">
                {ctaLabel}
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors duration-500 text-white relative z-[60]`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 shadow-glow" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-black z-[50] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isMobileMenuOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-full pointer-events-none"
          }`}
      >
        <div className="flex flex-col h-full px-8 pt-32 pb-12">
          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-start gap-12 mt-12">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-4xl font-display text-white transition-all duration-700 ${isMobileMenuOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
                  }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${200 + (i * 100)}ms` : "0ms" }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Bottom CTAs */}
          <div className={`flex flex-col gap-4 pt-12 border-t border-white/10 transition-all duration-700 ${isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "600ms" : "0ms" }}
          >
            <Link href="/login" className="w-full">
              <Button
                variant="outline"
                className="w-full rounded-full h-16 text-lg border-white/20 text-white hover:bg-white hover:text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Button>
            </Link>
            <Link href="/book-demo" className="w-full">
              <Button
                className="w-full rounded-full h-16 text-lg bg-[#7f1d1d] text-white hover:bg-[#6b1919] font-bold border border-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {ctaLabel}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
