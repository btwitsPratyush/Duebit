"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="light" storageKey="duebit-theme">
      <TooltipProvider delayDuration={0}>
        {children}
      </TooltipProvider>
    </ThemeProvider>
  );
}
