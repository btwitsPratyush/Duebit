"use client";

import { useEffect, useRef } from "react";

export function AsciiWave({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const chars = "█▓▒░ ";
    
    // Performance optimization for mobile
    const isMobile = window.innerWidth < 768;
    const width = isMobile ? 120 : 250;
    const height = isMobile ? 60 : 100;
    const charWidth = 8;
    const charHeight = 12;

    const animate = () => {
      // Throttle frame rate on mobile
      if (isMobile && Math.floor(time * 100) % 2 !== 0) {
        time += 0.03;
        animationId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${isMobile ? '10px' : '12px'} JetBrains Mono, monospace`;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const wave1 = Math.sin((x * 0.08) + time) * Math.cos((y * 0.12) + time * 0.5);
          const wave2 = Math.sin((x * 0.05) - time * 0.7) * Math.sin((y * 0.08) + time * 0.3);
          
          const combined = (wave1 + wave2) / 2;
          const normalized = (combined + 1) / 2;
          
          if (normalized < 0.2) continue; // Skip rendering dark/empty areas

          const charIndex = Math.floor(normalized * (chars.length - 1));
          const char = chars[charIndex];
          
          if (char !== " ") {
            const lightness = 0.5 + normalized * 0.3;
            ctx.fillStyle = `oklch(${lightness} 0 0 / ${0.3 + normalized * 0.7})`;
            ctx.fillText(char, x * charWidth, y * charHeight + charHeight);
          }
        }
      }

      time += 0.03;
      animationId = requestAnimationFrame(animate);
    };

    canvas.width = width * charWidth;
    canvas.height = height * charHeight;
    animate();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`${className}`}
      style={{ imageRendering: "pixelated" }}
    />
  );
}
