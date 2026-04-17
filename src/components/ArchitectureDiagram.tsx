import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileUp,
  LineChart,
  Bot,
  CheckCircle2,
  AlertCircle,
  BellRing,
  MailWarning,
  UploadCloud,
  RefreshCw,
  Sparkles
} from "lucide-react";

const COLORS = {
  received: "#10b981", // Emerald
  missing: "#EF4444",  // Brand Primary (Maroon/Red)
  active: "#EF4444",   // Glow
  border: "rgba(255,255,255,0.1)",
  textMuted: "#64748b"
};

const Node = ({ icon: Icon, label, active, pulse }: { icon: any; label: string; active: boolean; pulse?: boolean }) => (
  <motion.div
    animate={{ opacity: active ? 1 : 0.4, y: active ? 0 : 5 }}
    className="flex flex-col items-center gap-2"
  >
    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-[14px] md:rounded-[1.25rem] flex items-center justify-center transition-all duration-500 relative
      ${active
        ? 'bg-white/10 shadow-[0_0_30px_-5px_rgba(239,68,68,0.3)] border-white/20'
        : 'bg-white/5 border-white/5'} border-2 md:border relative overflow-hidden group`}>

      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity pointer-events-none" />

      <Icon className={`w-4 h-4 md:w-6 md:h-6 transition-colors duration-500 relative z-10 ${active ? 'text-white' : 'text-white/30'}`} />

      {active && pulse && (
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-[14px] md:rounded-[1.25rem] bg-primary/30"
        />
      )}
    </div>
    <span className={`text-[10px] md:text-[11px] font-bold md:font-black uppercase tracking-wider md:tracking-[0.2em] text-center max-w-[80px] md:max-w-[120px] leading-tight transition-colors duration-500 ${active ? 'text-white' : 'text-white/20'}`}>
      {label}
    </span>
  </motion.div>
);

const ConnectionLine = ({ d, active, color = COLORS.active }: { d: string; active: boolean; color?: string }) => (
  <g className="overflow-visible pointer-events-none">
    {/* Base faded line */}
    <path d={d} fill="none" stroke={COLORS.border} strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

    {/* Active glowing line */}
    {active && (
      <>
        <motion.path
          d={d}
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            filter: `drop-shadow(0 0 6px ${color})`
          }}
        />
        <motion.path
          d={d}
          fill="none"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          className="hidden md:block blur-[8px] opacity-30"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        {/* Smooth data pulse */}
        <circle r="3" fill={color} className="blur-[1px] shadow-[0_0_10px_#EF4444]">
          <animateMotion dur="3s" repeatCount="indefinite" path={d} />
        </circle>
      </>
    )}
  </g>
);

const FlowArrow = ({ active }: { active: boolean }) => (
  <motion.div
    animate={{ opacity: active ? 1 : 0.2 }}
    className="flex items-center justify-center my-2"
  >
    <svg width="24" height="28" viewBox="0 0 16 20" fill="none">
      <motion.path
        d="M 8 0 L 8 16 M 2 10 L 8 17 L 14 10"
        stroke={active ? COLORS.active : COLORS.border}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ opacity: active ? 1 : 0.4 }}
      />
    </svg>
  </motion.div>
);

export const ArchitectureDiagram = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const cycle = setInterval(() => {
      setPhase((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(cycle);
  }, []);

  return (
    <div className="w-full relative px-2 md:px-12 py-10 md:py-24 flex items-center justify-center bg-[#0A0A0A] overflow-hidden rounded-[2rem] md:rounded-[4rem] border border-white/10 shadow-2xl">

      {/* ── DESKTOP ONLY: High-end Background Pattern ── */}
      <div className="absolute inset-0 opacity-[0.2] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(239,68,68,0.08),transparent_70%)] pointer-events-none" />

      {/* Connection Lines (Desktop) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
        <ConnectionLine d="M 230 180 Q 300 180 430 280" active={phase >= 0} />
        <ConnectionLine d="M 230 300 L 430 300" active={phase >= 0} />
        <ConnectionLine d="M 230 420 Q 300 420 430 320" active={phase >= 0} />
        <ConnectionLine d="M 570 280 Q 680 160 770 160" active={phase >= 2} color={phase === 3 ? COLORS.received : COLORS.active} />
        <ConnectionLine d="M 570 300 L 770 300" active={phase >= 2} color={phase === 3 ? COLORS.received : COLORS.active} />
        <ConnectionLine d="M 570 320 Q 680 440 770 440" active={phase >= 2} color={phase === 3 ? COLORS.received : COLORS.active} />
      </svg>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* ── MOBILE LAYOUT: Vertical Stacked Flow ── */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="md:hidden flex flex-col items-center gap-4 w-full max-w-[400px] z-10 px-1">
        <div className="grid grid-cols-3 gap-3 w-full mb-4">
          <Node icon={FileUp} label="CSV Upload" active={phase >= 0} />
          <Node icon={LineChart} label="Track Clients" active={phase >= 0} pulse={phase === 0} />
          <Node icon={Bot} label="Bot Engine" active={phase >= 0} />
        </div>

        <FlowArrow active={phase >= 0} />

        <motion.div
          animate={{
            scale: phase >= 1 ? 1 : 0.98,
            boxShadow: phase === 3 ? "0 20px 40px -10px rgba(16,185,129,0.15)" : "0 10px 40px -10px rgba(239,68,68,0.2)"
          }}
          className="w-full bg-[#121212] rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative"
        >
          {/* Internal Glow Mobile */}
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_50%_0%,rgba(239,68,68,0.1),transparent_50%)] pointer-events-none" />

          <div className="px-4 py-4 border-b border-white/5 bg-white/[0.02] relative z-10">
            <div className="flex justify-between items-start mb-1">
              <h4 className="text-xs font-bold text-white tracking-wide">Client Profile: Acme Corp</h4>
              <div className={`px-2 py-0.5 rounded-[4px] text-[8px] font-black uppercase tracking-wider border ${phase === 3 ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : 'bg-primary/20 text-primary border-primary/30'}`}>
                {phase === 3 ? 'Resolved' : 'Bot Active'}
              </div>
            </div>
            <p className="text-[10px] text-white/30 font-medium">Deadline: Upcoming</p>
          </div>

          <div className="p-4 space-y-4 relative z-10">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
               <div className="flex items-center gap-2">
                 <Bot className={`w-4 h-4 ${phase >= 1 ? 'text-primary' : 'text-white/20'}`} />
                 <span className="text-[11px] font-medium text-white/70">Duebit AI Tracker</span>
               </div>
               <span className={`text-[8px] font-bold uppercase tracking-widest ${phase >= 1 ? 'text-primary animate-pulse' : 'text-white/20'}`}>
                 {phase === 3 ? 'Sleeping' : 'Monitoring'}
               </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                </div>
                <span className="text-[11px] font-semibold text-white/80">FY25 Returns</span>
              </div>
              <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest">Done</span>
            </div>

            <motion.div animate={{ opacity: phase >= 1 ? 1 : 0.5 }} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors duration-500 border ${phase === 3 ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-red-500/10 border-red-500/20'}`}>
                  {phase === 3 ? <CheckCircle2 className="w-3 h-3 text-emerald-400" /> : <AlertCircle className={`w-3 h-3 ${phase >= 1 ? 'text-primary' : 'text-white/30'}`} />}
                </div>
                <span className="text-[11px] font-semibold text-white/80">Q3 Bank Statements</span>
              </div>
              {phase === 3
                ? <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest">Done</span>
                : <motion.span animate={phase === 1 ? { opacity: [1, 0.4, 1] } : {}} transition={{ duration: 1, repeat: Infinity }} className={`text-[9px] font-bold uppercase tracking-widest ${phase >= 1 ? 'text-primary' : 'text-white/30'}`}>Missing</motion.span>
              }
            </motion.div>

            <div className="pt-3 space-y-2">
              <div className="flex justify-between items-center text-[9px] font-black text-white/30 uppercase tracking-widest">
                <span>Bot Confidence</span>
                <span className="text-white/60">{phase === 3 ? '100%' : 'Active Engine'}</span>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: phase === 3 ? '100%' : phase >= 1 ? '80%' : '30%' }}
                  className={`h-full transition-colors duration-1000 ${phase === 3 ? 'bg-emerald-500' : 'bg-primary'}`}
                />
              </div>
            </div>
          </div>
        </motion.div>

        <FlowArrow active={phase >= 2} />

        <div className="grid grid-cols-2 gap-x-6 gap-y-5 w-full mt-2 px-2 pb-2">
          <Node icon={BellRing} label="Auto Follow-up" active={phase >= 2} pulse={phase === 2} />
          <Node icon={MailWarning} label="Bot Reminder" active={phase >= 2} />
          <Node icon={UploadCloud} label="Client Uploads" active={phase === 3} />
          <Node icon={RefreshCw} label="Dashboard Sync" active={phase === 3} />
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* ── DESKTOP LAYOUT: Horizontal ── */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="hidden md:flex relative w-full max-w-6xl items-center justify-between gap-12 z-10 px-10 min-h-[580px]">

        {/* Left Inputs */}
        <div className="flex flex-col gap-16">
          <Node icon={FileUp} label="CSV Upload" active={phase >= 0} />
          <Node icon={LineChart} label="Track Clients" active={phase >= 0} pulse={phase === 0} />
          <Node icon={Bot} label="Bot Engine" active={phase >= 0} />
        </div>

        {/* Center: Premium Dark Tech Card */}
        <div className="relative">
          <motion.div
            animate={{
              scale: phase >= 1 ? 1 : 0.98,
              boxShadow: phase === 3 ? "0 40px 100px -20px rgba(16,185,129,0.2)" : "0 40px 100px -20px rgba(239,68,68,0.2)"
            }}
            className="w-[380px] md:w-[440px] bg-[#111111] rounded-[2.5rem] border border-white/10 overflow-hidden relative group transition-all duration-700"
          >
            {/* Tech gloss effect */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
            <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_0%,rgba(239,68,68,0.15),transparent_60%)] pointer-events-none" />

            {/* Mission Control Header */}
            <div className="px-10 py-8 border-b border-white/5 bg-[#171717]/50 backdrop-blur-sm relative z-10">
              <div className="flex justify-between items-center mb-3">
                <h4 className="text-xl font-bold text-white tracking-tight">Acme Corp Ltd.</h4>
                <div className={`px-3 py-1 rounded-[6px] text-[10px] font-black uppercase tracking-[0.2em] shadow-sm ${phase === 3 ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-primary/10 text-primary border border-primary/20'}`}>
                  {phase === 3 ? 'Resolved' : 'Bot Active'}
                </div>
              </div>
              <div className="text-xs text-white/50 font-bold uppercase tracking-widest flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${phase === 3 ? 'bg-emerald-500' : 'bg-primary animate-pulse'}`} /> Tracking Deadlines
              </div>
            </div>

            {/* Checklist Core */}
            <div className="p-10 relative z-10">
              
              <div className="flex items-center gap-3 mb-8 p-4 rounded-2xl bg-white/5 border border-white/5">
                <Bot className={`w-5 h-5 ${phase >= 1 ? 'text-primary shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 'text-white/20'}`} />
                <div className="flex-1">
                  <p className="text-xs font-bold text-white/80">Duebit AI Tracker</p>
                  <p className="text-[10px] text-white/40">{phase === 3 ? 'All documents collected automatically.' : 'Actively monitoring pending documents.'}</p>
                </div>
                {phase === 1 && <Sparkles className="w-4 h-4 text-primary animate-pulse" />}
              </div>

              <div className="space-y-6 mb-10">
                <div className="flex items-center justify-between group/line">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover/line:scale-110 transition-transform">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-[15px] font-semibold text-white/80 transition-colors">FY25 Income Tax</span>
                  </div>
                  <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em]">Verified</span>
                </div>

                <motion.div animate={{ opacity: phase >= 1 ? 1 : 0.5 }} className="flex items-center justify-between group/line">
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-700 group-hover/line:scale-110 border ${phase === 3 ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-red-500/10 border-red-500/20'}`}>
                      {phase === 3 ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <AlertCircle className={`w-4 h-4 ${phase >= 1 ? 'text-primary' : 'text-white/30'}`} />}
                    </div>
                    <span className="text-[15px] font-semibold text-white/80 transition-colors">Q3 Bank Statements</span>
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-700 ${phase === 3 ? 'text-emerald-500' : phase >= 1 ? 'text-primary' : 'text-white/30'}`}>
                    {phase === 3 ? 'Verified' : 'Missing'}
                  </span>
                </motion.div>
              </div>

              {/* Enhanced Progress Visual */}
              <div className="space-y-4 pt-8 border-t border-white/5">
                <div className="flex justify-between items-center text-[10px] font-black text-white/30 uppercase tracking-[0.3em]">
                  <span>Bot Confidence Level</span>
                  <span className="text-white/80">{phase === 3 ? '100%' : 'High / Tracking'}</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ width: phase === 3 ? '100%' : phase >= 1 ? '85%' : '30%' }}
                    className={`h-full rounded-full transition-all duration-1000 relative overflow-hidden ${phase === 3 ? 'bg-emerald-500' : 'bg-primary'}`}
                  >
                     <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Outputs */}
        <div className="flex flex-col gap-12">
          <Node icon={BellRing} label="Auto Follow-up" active={phase >= 2} pulse={phase === 2} />
          <Node icon={MailWarning} label="Bot Reminder" active={phase >= 2} />
          <Node icon={UploadCloud} label="Client Uploads" active={phase === 3} />
          <Node icon={RefreshCw} label="Dashboard Sync" active={phase === 3} />
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-[9px] md:text-[11px] font-black text-white/20 uppercase tracking-[1em] whitespace-nowrap select-none"
      >
        Autonomous Duebit Engine
      </motion.p>
    </div>
  );
};
