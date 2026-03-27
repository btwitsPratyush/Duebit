import * as React from "react";
import { LiquidMetal } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

export type LiquidMetalBorderTheme = "dark" | "light";

export type LiquidMetalBorderProps = {
  children: React.ReactNode;
  className?: string;
  borderRadius?: number;
  borderWidth?: number;
  theme?: LiquidMetalBorderTheme;
  /** Override the inner background + shader base color (hex). */
  backgroundColor?: string;
  speed?: number;
  scale?: number;
  colorTint?: string;
  opacity?: number;
};

export function LiquidMetalBorder({
  children,
  className,
  borderRadius = 9999,
  borderWidth = 5,
  theme = "dark",
  backgroundColor,
  speed = 1.2,
  scale = 3,
  colorTint = "#ffffff",
  opacity = 1,
}: LiquidMetalBorderProps) {
  const background = backgroundColor ?? (theme === "dark" ? "#0B0B0B" : "#ffffff");

  return (
    <div
      className={cn("relative inline-flex isolate", className)}
      style={{
        padding: borderWidth,
        borderRadius,
      }}
    >
      {/* Shader border (visible only in padding area) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          borderRadius,
          overflow: "hidden",
          opacity,
        }}
        aria-hidden
      >
        {/* Overscan the shader so it fully covers rounded corners/ends */}
        <div
          style={{
            position: "absolute",
            inset: "-18%",
            transform: "translateZ(0)",
          }}
        >
          <LiquidMetal
            colorBack={background}
            colorTint={colorTint}
            speed={speed}
            scale={scale}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      {/* Inner surface (covers shader center, leaving only the border visible) */}
      <div
        className="relative inline-flex overflow-hidden"
        style={{
          borderRadius: Math.max(0, borderRadius - borderWidth),
          background,
        }}
      >
        {children}
      </div>
    </div>
  );
}

