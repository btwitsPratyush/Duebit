import { cn } from "@/lib/utils";

type WingsLogoProps = {
  className?: string;
};

/** Wings + red triangle logo, no background. Uses currentColor for wings and triangle stroke. */
const WingsLogo = ({ className }: WingsLogoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 80 90"
    fill="none"
    className={cn("object-contain", className)}
    aria-hidden
  >
    <defs>
      <linearGradient id="wings-logo-red" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#B91C1C" />
      </linearGradient>
    </defs>
    {/* Inverted red triangle, dashed outline */}
    <path
      d="M40 18 L58 48 L22 48 Z"
      fill="url(#wings-logo-red)"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeDasharray="4 3"
      strokeLinejoin="round"
    />
    {/* Left wing */}
    <path d="M22 48 L8 72 L14 78 L28 58 L24 52 Z" fill="currentColor" />
    <path d="M24 52 L12 68 L16 72 L26 56 Z" fill="currentColor" opacity={0.85} />
    {/* Right wing */}
    <path d="M58 48 L72 72 L66 78 L52 58 L56 52 Z" fill="currentColor" />
    <path d="M56 52 L68 68 L64 72 L54 56 Z" fill="currentColor" opacity={0.85} />
  </svg>
);

export default WingsLogo;
