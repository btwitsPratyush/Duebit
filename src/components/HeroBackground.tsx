"use client";

import React from "react";

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 z-0 bg-[#050000] overflow-hidden">
            {/* Liquid Flow Gradient Orbs */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Orb 1: Deep Red */}
                <div
                    className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-red-900/40 rounded-full blur-[120px] animate-aurora-hero opacity-60"
                    style={{ animationDelay: '0s' }}
                />

                {/* Orb 2: Crimson */}
                <div
                    className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-red-600/30 rounded-full blur-[100px] animate-aurora-hero-2 opacity-50"
                    style={{ animationDelay: '-5s' }}
                />

                {/* Orb 3: Indigo/Deep Purple for depth */}
                <div
                    className="absolute top-[20%] right-[10%] w-[50%] h-[50%] bg-indigo-950/40 rounded-full blur-[110px] animate-aurora-hero-3 opacity-40"
                    style={{ animationDelay: '-10s' }}
                />

                {/* Orb 4: Soft Accent Red */}
                <div
                    className="absolute bottom-[20%] left-[10%] w-[45%] h-[45%] bg-red-950/30 rounded-full blur-[90px] animate-aurora-hero opacity-30"
                    style={{ animationDelay: '-15s' }}
                />
            </div>

            {/* Premium Film Grain Noise */}
            <div className="absolute inset-0 noise-overlay opacity-[0.15] pointer-events-none" />

            {/* Mesh Grid Pattern (Subtle Architectural feel) */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Vignette & Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050000] z-[1]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050000] via-transparent to-[#050000] opacity-60 z-[1]" />

            {/* Mouse Flow interactive glow (optional, but keep it minimal) */}
            <div
                className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(139,0,0,0.05)_0%,transparent_50%)]"
            />
        </div>
    );
}
