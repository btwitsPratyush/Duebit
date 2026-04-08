"use client";

import { motion } from "framer-motion";

const Wave = ({
    color,
    opacity,
    duration,
    delay,
    points
}: {
    color: string;
    opacity: number;
    duration: number;
    delay: number;
    points: string
}) => (
    <motion.path
        d={points}
        fill={color}
        initial={{ opacity: 0 }}
        animate={{
            opacity,
            d: [
                points,
                points.replace(/[-.\d]+/g, (m) => (parseFloat(m) + (Math.random() * 20 - 10)).toString()),
                points
            ]
        }}
        transition={{
            opacity: { duration: 2 },
            d: {
                duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay
            }
        }}
    />
);

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 z-0 bg-[#1a0505] overflow-hidden">
            {/* Deep Maroon Gradient Base */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a0505] via-[#2d0a0a] to-[#1a0505]" />

            <svg
                viewBox="0 0 1440 800"
                className="absolute inset-0 w-full h-full preserve-3d"
                preserveAspectRatio="none"
            >
                {/* Deep Maroon Wave Base */}
                <Wave
                    color="#4A0E1A"
                    opacity={0.4}
                    duration={12}
                    delay={0}
                    points="M0,160 C320,300 420,-10 1440,160 V800 H0 Z"
                />

                {/* Brand Maroon Mid Wave */}
                <Wave
                    color="#7B1E2B"
                    opacity={0.3}
                    duration={15}
                    delay={1}
                    points="M0,200 C480,400 960,0 1440,200 V800 H0 Z"
                />

                {/* Silver Accent Wave */}
                <Wave
                    color="#E5E4E2"
                    opacity={0.08}
                    duration={18}
                    delay={2}
                    points="M0,240 C320,100 720,500 1440,240 V800 H0 Z"
                />

                {/* Shadow Wave */}
                <Wave
                    color="#000000"
                    opacity={0.6}
                    duration={20}
                    delay={3}
                    points="M0,280 C640,480 1280,180 1440,280 V800 H0 Z"
                />
            </svg>

            {/* Subtle Texture Grain Overlay */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Bottom Fade Removed as requested */}
        </div>
    );
}
