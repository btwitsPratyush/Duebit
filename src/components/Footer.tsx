import { Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 overflow-hidden footer-and-cta mt-12 md:mt-24">
      {/* Fancy red section - brand classy red */}
      {/* Fancy red section - brand classy red */}
      <div className="relative border-t border-white/10 overflow-hidden bg-[#1a0505] rounded-t-[50px] md:rounded-t-[100px]">
        {/* Deep maroon-toned dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0505] via-[#2d0a0a] to-[#1a0505]" />

        {/* Top LED Strip effect */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-80 blur-[2px]" />

        {/* Red glow orbs */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px] pointer-events-none opacity-60"
          style={{
            background: "radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, rgba(239, 68, 68, 0.15) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/4 left-0 w-[400px] h-[300px] rounded-full blur-[100px] pointer-events-none opacity-50"
          style={{
            background: "radial-gradient(circle, rgba(239, 68, 68, 0.3) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute top-1/4 right-0 w-[400px] h-[300px] rounded-full blur-[100px] pointer-events-none opacity-50"
          style={{
            background: "radial-gradient(circle, rgba(239, 68, 68, 0.28) 0%, transparent 60%)",
          }}
        />

        {/* Red light streaks from bottom going upward */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[70%] pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(239, 68, 68, 0.35) 0%, rgba(239, 68, 68, 0.12) 25%, rgba(239, 68, 68, 0.04) 50%, transparent 100%)",
          }}
        />
        {/* Vertical streaks for extra glow */}
        <div className="absolute bottom-0 left-0 right-0 h-full pointer-events-none overflow-hidden">
          <div className="absolute bottom-0 left-[10%] w-[120px] h-[80%] bg-red-600/20 blur-[80px] -translate-y-1/4" />
          <div className="absolute bottom-0 left-[35%] w-[100px] h-[60%] bg-red-600/25 blur-[70px] -translate-y-1/4" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180px] h-[75%] bg-red-600/30 blur-[90px] -translate-y-1/4" />
          <div className="absolute bottom-0 right-[35%] w-[100px] h-[60%] bg-red-600/25 blur-[70px] -translate-y-1/4" />
          <div className="absolute bottom-0 right-[10%] w-[120px] h-[80%] bg-red-600/20 blur-[80px] -translate-y-1/4" />
        </div>

        {/* TalkerIQ Style Wave Patterns - Top Corners */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] opacity-10 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            {Array.from({ length: 20 }).map((_, i) => (
              <path
                key={i}
                d={`M - 20 ${50 + i * 2} Q 50 ${50 - i * 0.5} 120 ${20 + i * 4} `}
                fill="none"
                stroke="white"
                strokeWidth="0.15"
                className="opacity-60"
              />
            ))}
          </svg>
        </div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-10 pointer-events-none scale-x-[-1]">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            {Array.from({ length: 20 }).map((_, i) => (
              <path
                key={i}
                d={`M - 20 ${50 + i * 2} Q 50 ${50 - i * 0.5} 120 ${20 + i * 4} `}
                fill="none"
                stroke="white"
                strokeWidth="0.15"
                className="opacity-60"
              />
            ))}
          </svg>
        </div>

        <div className="container mx-auto px-6 pt-20 md:pt-[120px] pb-16 relative z-10">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-16 mb-20">
            {/* Brand Column - duebit jahan tha wahi */}
            <div className="md:col-span-5 lg:col-span-6">
              <Link href="/" className="inline-flex items-center gap-3 mb-8 group transition-opacity">
                <div className="bg-white rounded-2xl p-2 shadow-xl shadow-black/30 border border-white/5 transition-transform duration-500 group-hover:scale-105">
                  <img src="/logo.png" alt="Duebit" className="h-10 w-auto object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white tracking-tight font-display drop-shadow-md">Duebit</span>
                  <span className="text-[10px] font-bold bg-red-500/30 text-white px-2 py-0.5 rounded border border-red-500/50 uppercase tracking-[0.2em] self-start mt-0.5 w-fit font-sans">
                    Beta
                  </span>
                </div>
              </Link>
              <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-lg leading-[1.15] mb-6 font-display">
                Automating compliance workflows.
              </h2>
              <p className="text-white/70 text-base max-w-sm leading-relaxed">
                Built for the next generation of Chartered Accountants.
              </p>
            </div>

            {/* Links */}
            <div className="md:col-span-7 lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-10">
              <div>
                <h4 className="text-xs font-semibold text-white mb-5 uppercase tracking-widest">Product</h4>
                <ul className="space-y-3">
                  <li><a href="#features" className="text-white/70 hover:text-white transition-colors text-sm">Features</a></li>
                  <li><a href="#how-it-works" className="text-white/70 hover:text-white transition-colors text-sm">How it Works</a></li>
                  <li><Link href="/pricing" className="text-white/70 hover:text-white transition-colors text-sm">Pricing</Link></li>
                  <li><a href="https://cal.com/duebit-demo/30min" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm">Book Demo</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white mb-5 uppercase tracking-widest">Company</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">About</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Careers</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Privacy</a></li>
                  <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Terms</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white mb-5 uppercase tracking-widest">Socials</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="https://x.com/duebitHQ" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      <span>X</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/tryduebit/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm">
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Duebit" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm">
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-red-900/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-white/60 font-medium">
              © {currentYear} Duebit. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <p className="text-sm text-white/60 flex items-center gap-1.5">
                Made and crafted in India
              </p>
            </div>
          </div>

          {/* DUEBIT wordmark - jahan tha wahi, red tint */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none">
            <span className="block text-[16vw] sm:text-[14rem] md:text-[18rem] font-bold text-red-600/[0.05] leading-none text-center font-display tracking-tighter translate-y-[10%] sm:translate-y-[30%]">
              DUEBIT
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
