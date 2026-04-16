import * as React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { LiquidMetalBorder, type LiquidMetalBorderTheme } from "@/components/ui/LiquidMetalBorder";

export type LiquidCtaButtonProps = {
  children: React.ReactNode;
  className?: string;
  theme?: LiquidMetalBorderTheme;
  speed?: number;
  scale?: number;
  colorTint?: string;
  opacity?: number;
  showArrow?: boolean;
  backgroundColor?: string;
  size?: "sm" | "md" | "lg";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function LiquidCtaButton({
  children,
  className,
  theme = "dark",
  speed = 1.2,
  scale = 3,
  colorTint = "#ffffff",
  opacity = 1,
  showArrow = true,
  backgroundColor,
  size = "md",
  type = "button",
  ...props
}: LiquidCtaButtonProps) {
  const isDark = theme === "dark";
  const maroonBrown = "#811d1e";
  const resolvedBg = backgroundColor ?? (isDark ? maroonBrown : "#ffffff");

  const sizeClasses = {
    sm: "h-11 px-6 text-sm",
    md: "h-14 px-9 text-base",
    lg: "h-16 px-10 text-lg",
  };

  return (
    <LiquidMetalBorder
      theme={theme}
      backgroundColor={resolvedBg}
      borderRadius={9999}
      borderWidth={2}
      speed={speed}
      scale={scale}
      colorTint={colorTint}
      opacity={opacity}
      className={cn("shadow-[0_18px_45px_rgba(0,0,0,0.6)]", className)}
    >
      <button
        type={type}
        className={cn(
          "group inline-flex items-center justify-center gap-3 rounded-full font-medium transition-transform active:scale-[0.99]",
          sizeClasses[size],
          isDark ? "bg-transparent text-white" : "bg-transparent text-black"
        )}
        {...props}
      >
        <span>{children}</span>
        {showArrow && <ArrowRight className="w-5 h-5 opacity-85 group-hover:translate-x-0.5 transition-transform" />}
      </button>
    </LiquidMetalBorder>
  );
}

