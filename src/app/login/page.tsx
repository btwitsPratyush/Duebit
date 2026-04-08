"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        toast.info("Preparing for takeoff. Public logins are currently disabled. 🚀", {
            description: "Book a demo to access your dashboard.",
            duration: 4000,
        });
    };

    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row overflow-hidden bg-[#FFFAF5]">

            {/* 1. Left Panel (Login Form) - 45% */}
            <div className="w-full md:w-[45%] flex flex-col justify-center pt-32 pb-12 md:py-12 lg:p-16 p-8 bg-[#FFFAF5] relative z-20 shadow-[20px_0_40px_-10px_rgba(0,0,0,0.1)]">

                <div className="max-w-md w-full mx-auto mt-0 animate-fade-in-up md:-translate-y-8">
                    <div className="mb-10 text-center">
                        <Link href="/" className="inline-flex items-center gap-3 mb-10 group">
                            <div className="bg-white rounded-2xl p-2 shadow-sm border border-slate-100 transition-all duration-300 group-hover:scale-105">
                                <img src="/logo.png" alt="Duebit" className="h-10 w-auto object-contain" />
                            </div>
                            <span className="text-3xl font-display font-bold text-slate-900 tracking-tight">Duebit</span>
                        </Link>
                        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Welcome back!</h2>
                        <p className="text-sm text-slate-500 mt-2 font-normal opacity-80">Sign in to manage clients & deadlines.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div className="space-y-1.5">
                            <Label htmlFor="email" className="text-slate-700 text-sm font-semibold">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                required
                                placeholder="you@example.com"
                                className="h-10 bg-white border-slate-200 focus-visible:ring-red-600 text-sm placeholder:text-slate-400"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="space-y-1.5">
                            <div className="flex justify-between items-center">
                                <Label htmlFor="password" className="text-slate-700 text-sm font-semibold">Password</Label>
                                <a href="#" className="text-xs font-medium text-slate-500 hover:text-red-700 transition-colors">Forgot password?</a>
                            </div>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    required
                                    placeholder="••••••••"
                                    className="h-10 bg-white border-slate-200 focus-visible:ring-red-600 text-sm placeholder:text-slate-400 pr-10"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                                >
                                    {showPassword ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" /></svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-11 bg-red-800 hover:bg-red-900 text-white font-bold text-sm rounded-md shadow-md hover:shadow-lg hover:shadow-red-900/20 shadow-slate-200 transition-all mt-4 tracking-wide"
                            disabled={isLoading}
                        >
                            {isLoading ? "Signing in..." : "Sign in"}
                        </Button>
                    </form>

                    <div className="mt-6 text-center text-xs text-slate-500 font-medium">
                        Not a customer? <Link href="https://cal.com/duebit-demo/30min" target="_blank" rel="noopener noreferrer" className="text-red-700 hover:text-red-800 font-semibold inline-flex items-center transition-colors">Book a Demo</Link>
                    </div>
                </div>
            </div>

            {/* 2. Right Panel (Brand/Showcase) - 55% */}
            <div className="hidden md:flex md:w-[55%] relative overflow-hidden bg-[#0b0b0f] items-center justify-center p-12 text-center">

                {/* Background Effect */}
                <div className="absolute inset-0">
                    {/* Base Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b0f] via-[#1a0505] to-[#2a0a0a] opacity-90 transition-all duration-1000"></div>

                    {/* Periwinkle Glow replaced with Red Glow */}
                    <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-red-600/20 blur-[120px] rounded-full mix-blend-screen animate-pulse"></div>
                    <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-red-900/40 blur-[100px] rounded-full mix-blend-screen"></div>

                    {/* Abstract Pattern / Noise Overlay */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

                    {/* TalkerIQ Style Converging Grid Lines */}
                    <div className="absolute inset-0 opacity-[0.15] w-full h-full pointer-events-none">
                        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                            {/* Radiating curves from center-ish to create depth */}
                            {Array.from({ length: 20 }).map((_, i) => (
                                <path
                                    key={i}
                                    d={`M -20 ${50 + i * 2} Q 50 ${50 - i * 0.5} 120 ${20 + i * 4}`}
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="0.15"
                                    className="opacity-60"
                                />
                            ))}
                            {Array.from({ length: 20 }).map((_, i) => (
                                <path
                                    key={`b-${i}`}
                                    d={`M -20 ${50 - i * 2} Q 50 ${50 + i * 0.5} 120 ${80 - i * 4}`}
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="0.15"
                                    className="opacity-60"
                                />
                            ))}
                        </svg>
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-lg space-y-10 animate-fade-in-up-delay-2 flex flex-col items-center">
                    {/* Large Text Logo */}
                    <h2 className="text-6xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight drop-shadow-2xl">
                        Duebit
                    </h2>
                    <div className="space-y-6">
                        <div className="w-20 h-1.5 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto rounded-full opacity-80"></div>

                        <p className="text-lg text-slate-300 font-medium max-w-sm mx-auto leading-relaxed tracking-wide opacity-90">
                            Automate follow-ups, docs & deadlines.
                        </p>
                        <p className="text-sm text-slate-300 font-medium tracking-wider uppercase opacity-90">
                            Built for modern Chartered Accountants
                        </p>
                    </div>
                </div>

                {/* Floating Abstract Element */}
                <div className="absolute bottom-10 right-10 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-red-600/50"></div>
                    <div className="w-2 h-2 rounded-full bg-red-600/20"></div>
                </div>
            </div>
        </div>
    );
}
