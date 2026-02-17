import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

/** Transparent logo: "d", red dot, red underline only. No vertical DUEBIT text. Uses currentColor for "d". */
const Logo = ({ className }: LogoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 90 110"
    fill="none"
    className={cn("object-contain", className)}
    aria-hidden
  >
    <defs>
      <radialGradient id="logo-red-dot" cx="40%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#B91C1C" />
      </radialGradient>
      <linearGradient id="logo-red-bar" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#B91C1C" />
        <stop offset="50%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#B91C1C" />
      </linearGradient>
    </defs>
    {/* Red dot: above top of 'd', slightly overlapping ascender */}
    <circle cx="36" cy="28" r="5.5" fill="url(#logo-red-dot)" />
    <text x="38" y="98" fontFamily="Georgia, 'Times New Roman', serif" fontSize="72" fontWeight="400" fill="currentColor">
      d
    </text>
    <rect x="27" y="101" width="56" height="4" rx="2" fill="url(#logo-red-bar)" />
  </svg>
);

export default Logo;
