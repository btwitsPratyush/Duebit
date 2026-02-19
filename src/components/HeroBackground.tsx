"use client";

import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 z-0 bg-[#050000]">
            {/* Bottom Layer: Raw ShaderGradient (z-0) */}
            <div className="absolute inset-0 z-0">
                <ShaderGradientCanvas
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                    pixelDensity={1}
                    pointerEvents="none"
                >
                    <ShaderGradient
                        control="props"
                        animate="on"
                        type="sphere"
                        uSpeed={0.3}
                        uStrength={0.3}
                        uDensity={0.8}
                        uFrequency={5.5}
                        uAmplitude={3.2}
                        positionX={-0.1}
                        positionY={0}
                        positionZ={0}
                        rotationX={0}
                        rotationY={130}
                        rotationZ={70}
                        color1="#e23b4a"
                        color2="#800000"
                        color3="#2a0505"
                        reflection={0.5}
                        cameraZoom={15.1}
                        lightType="env"
                        brightness={1.5}
                        envPreset="city"
                        grain="on"
                    />
                </ShaderGradientCanvas>
            </div>
            {/* Lighter Overlay for better visibility of background colors */}
            <div
                className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-transparent to-black/50"
                aria-hidden="true"
            />
        </div>
    );
}
