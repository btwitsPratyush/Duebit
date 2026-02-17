import { Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 overflow-hidden footer-and-cta">
      {/* Fancy red section - brand classy red */}
      {/* Fancy red section - brand classy red */}
      <div className="relative border-t border-red-900/40 shadow-[0_-8px_30px_rgba(220,38,38,0.25)] overflow-hidden bg-black">
        {/* Deep red gradient base (brand-deep tokens) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0505] via-[#2a0a0a] to-black" />

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
                d={`M -20 ${50 + i * 2} Q 50 ${50 - i * 0.5} 120 ${20 + i * 4}`}
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
                d={`M -20 ${50 + i * 2} Q 50 ${50 - i * 0.5} 120 ${20 + i * 4}`}
                fill="none"
                stroke="white"
                strokeWidth="0.15"
                className="opacity-60"
              />
            ))}
          </svg>
        </div>

        <div className="container mx-auto px-6 pt-20 pb-16 relative z-10">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-16 mb-20">
            {/* Brand Column - duebit jahan tha wahi */}
            <div className="md:col-span-5 lg:col-span-6">
              <Link to="/" className="inline-flex items-center gap-3 mb-8 group transition-opacity">
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
                Automating legal & compliance workflows.
              </h2>
              <p className="text-white/70 text-base max-w-sm leading-relaxed">
                Built for the next generation of Chartered Accountants & Legal Firms.
              </p>
            </div>

            {/* Links */}
            <div className="md:col-span-7 lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-10">
              <div>
                <h4 className="text-xs font-semibold text-white mb-5 uppercase tracking-widest">Product</h4>
                <ul className="space-y-3">
                  <li><a href="#features" className="text-white/70 hover:text-white transition-colors text-sm">Features</a></li>
                  <li><a href="#how-it-works" className="text-white/70 hover:text-white transition-colors text-sm">How it Works</a></li>
                  <li><Link to="/pricing" className="text-white/70 hover:text-white transition-colors text-sm">Pricing</Link></li>
                  <li><Link to="/waitlist" className="text-white/70 hover:text-white transition-colors text-sm">Waitlist</Link></li>
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
                    <a href="https://x.com/TryDuebit" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      <span>X</span>
                    </a>
                  </li>
                  <li>
                    <div className="group flex items-center gap-2 text-white/30 cursor-not-allowed text-sm">
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                      <span className="ml-1 px-1.5 py-0.5 bg-black text-white text-[8px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                        Coming Soon
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="group flex items-center gap-2 text-white/30 cursor-not-allowed text-sm">
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                      <span className="ml-1 px-1.5 py-0.5 bg-black text-white text-[8px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                        Coming Soon
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="group flex items-center gap-2 text-white/30 cursor-not-allowed text-sm">
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                      </svg>
                      <span>Discord</span>
                      <span className="ml-1 px-1.5 py-0.5 bg-black text-white text-[8px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                        Coming Soon
                      </span>
                    </div>
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
                Made and Crafted in India
              </p>
            </div>
          </div>

          {/* DUEBIT wordmark - jahan tha wahi, red tint */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none">
            <span className="block text-[10rem] sm:text-[14rem] md:text-[18rem] font-bold text-red-600/[0.05] leading-none text-center font-display tracking-tighter translate-y-[30%]">
              DUEBIT
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
