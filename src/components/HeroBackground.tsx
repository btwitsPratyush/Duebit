"use client";

import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

export default function HeroBackground() {
    return (
        <div className="absolute inset-0 z-0 bg-black">
            <ShaderGradientCanvas
                style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 0,
                    pointerEvents: "none",
                }}
                // @ts-ignore
                pixelDensity={0.45}
            >
                <ShaderGradient
                    control="props"
                    animate="on"
                    type="sphere"
                    wireframe={false}
                    shader="defaults"
                    uTime={0}
                    uSpeed={0.2}
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
                    color1="#b91c1c"
                    color2="#7f1d1d"
                    color3="#450a0a"
                    reflection={0.4}
                    cAzimuthAngle={270}
                    cPolarAngle={180}
                    cDistance={0.5}
                    cameraZoom={15.1}
                    lightType="3d"
                    brightness={0.9}
                    envPreset="dawn"
                    grain="on"
                    toggleAxis={false}
                    zoomOut={false}
                />
            </ShaderGradientCanvas>

            {/* Dark overlay for better text readability */}
            <div
                className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none"
                aria-hidden="true"
            />
        </div>
    );
}
