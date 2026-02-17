import { useEffect, useRef } from "react";

/**
 * 3D Aurora-like hero background (Lance.live style):
 * Dark teal/blue base + swirling gradient orbs + star field.
 */
const HeroAuroraBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars: { x: number; y: number; r: number; opacity: number; twinkle: number }[] = [];
    for (let i = 0; i < 120; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.3,
        opacity: Math.random() * 0.5 + 0.2,
        twinkle: Math.random() * Math.PI * 2,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const t = Date.now() * 0.002;
      stars.forEach((s) => {
        const o = s.opacity * (0.6 + 0.4 * Math.sin(t + s.twinkle));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${o})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base: deep dark teal-blue gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% 0%, #0f172a 0%, #0c1222 40%, #080c14 100%)",
        }}
      />
      {/* Aurora orbs - teal / emerald / cyan - swirling */}
      <div
        className="absolute w-[min(120vw, 900px)] h-[min(80vh, 700px)] rounded-full opacity-40 blur-[100px] animate-aurora-hero"
        style={{
          background:
            "radial-gradient(circle, rgba(20, 184, 166, 0.5) 0%, rgba(6, 182, 212, 0.25) 40%, transparent 70%)",
          top: "30%",
          left: "10%",
        }}
      />
      <div
        className="absolute w-[min(100vw, 800px)] h-[min(70vh, 600px)] rounded-full opacity-30 blur-[120px] animate-aurora-hero-2"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(20, 184, 166, 0.2) 50%, transparent 70%)",
          top: "50%",
          right: "-10%",
        }}
      />
      <div
        className="absolute w-[min(90vw, 700px)] h-[min(50vh, 400px)] rounded-full opacity-25 blur-[100px] animate-aurora-hero-3"
        style={{
          background:
            "radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, rgba(20, 184, 166, 0.1) 50%, transparent 70%)",
          bottom: "10%",
          left: "30%",
        }}
      />
      {/* Extra wisp for depth */}
      <div
        className="absolute w-[min(80vw, 600px)] h-[min(40vh, 350px)] rounded-full opacity-20 blur-[80px] animate-aurora-hero"
        style={{
          background:
            "radial-gradient(circle, rgba(34, 211, 238, 0.35) 0%, transparent 65%)",
          top: "15%",
          right: "20%",
        }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: "screen" }}
      />
    </div>
  );
};

export default HeroAuroraBackground;
