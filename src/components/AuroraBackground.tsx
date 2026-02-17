import { useEffect, useRef } from "react";

const AuroraBackground = () => {
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

    const particles: { x: number; y: number; speed: number; opacity: number; size: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.2 + Math.random() * 0.5,
        opacity: Math.random() * 0.4,
        size: Math.random() * 1.5,
      });
    }

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
        p.y += p.speed;
        p.x += Math.sin(p.y * 0.01) * 0.3;
        if (p.y > canvas.height) {
          p.y = -10;
          p.x = Math.random() * canvas.width;
        }
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
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-background transition-colors duration-300" />

      {/* Aurora blob 1 - red */}
      <div
        className="absolute w-[800px] h-[600px] rounded-full opacity-[0.08] blur-[120px]"
        style={{
          background: "radial-gradient(circle, hsl(var(--aurora-1)), transparent 70%)",
          top: "10%",
          left: "20%",
          animation: "aurora 20s ease-in-out infinite",
        }}
      />

      {/* Aurora blob 2 - blue/teal */}
      <div
        className="absolute w-[600px] h-[500px] rounded-full opacity-[0.06] blur-[100px]"
        style={{
          background: "radial-gradient(circle, hsl(var(--aurora-2)), transparent 70%)",
          top: "30%",
          right: "10%",
          animation: "aurora2 25s ease-in-out infinite",
        }}
      />

      {/* Aurora blob 3 - subtle red glow bottom */}
      <div
        className="absolute w-[900px] h-[400px] rounded-full opacity-[0.05] blur-[140px]"
        style={{
          background: "radial-gradient(circle, hsl(var(--aurora-3)), transparent 70%)",
          bottom: "10%",
          left: "40%",
          animation: "aurora 30s ease-in-out infinite reverse",
        }}
      />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10" />
    </div>
  );
};

export default AuroraBackground;
