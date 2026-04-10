import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserPlus,
  Settings,
  Users,
  CheckCircle2,
  AlertCircle,
  Bell,
  Link as LinkIcon,
  Upload,
  RefreshCw,
} from "lucide-react";

const COLORS = {
  received: "#10b981",
  missing: "#7A1C1C",
  active: "#3b82f6",
  border: "#e2e8f0",
  textMuted: "#94a3b8"
};

const Node = ({ icon: Icon, label, active, pulse }: { icon: any; label: string; active: boolean; pulse?: boolean }) => (
  <motion.div
    animate={{ opacity: active ? 1 : 0.4, y: active ? 0 : 5 }}
    className="flex flex-col items-center gap-1.5"
  >
    <div className={`w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-[1.25rem] flex items-center justify-center transition-all duration-500 relative
      ${active
        ? 'bg-white shadow-lg md:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border-slate-200 md:border-slate-100'
        : 'bg-slate-50 border-slate-100 md:bg-white/[0.2] md:border-white/20'} border-2 md:border relative overflow-hidden group`}>

      {/* Desktop-only subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity pointer-events-none" />

      <Icon className={`w-4 h-4 md:w-6 md:h-6 transition-colors duration-500 relative z-10 ${active ? 'text-slate-900' : 'text-slate-400'}`} />

      {active && pulse && (
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-xl md:rounded-[1.25rem] bg-blue-500/20"
        />
      )}
    </div>
    <span className={`text-[10px] md:text-[11px] font-bold md:font-black uppercase tracking-wider md:tracking-[0.2em] text-center max-w-[80px] md:max-w-[120px] leading-tight transition-colors duration-500 ${active ? 'text-slate-700 md:text-slate-900' : 'text-slate-400 md:text-slate-300'}`}>
      {label}
    </span>
  </motion.div>
);

const ConnectionLine = ({ d, active, color = COLORS.active }: { d: string; active: boolean; color?: string }) => (
  <g className="overflow-visible pointer-events-none">
    {/* Base faded line */}
    <path d={d} fill="none" stroke={COLORS.border} strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />

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
            filter: 'drop-shadow(0 0 4px rgba(59,130,246,0.3))'
          }}
        />
        {/* Only desktop gets the high-end blur trail */}
        <motion.path
          d={d}
          fill="none"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="round"
          className="hidden md:block blur-[6px] opacity-20"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        {/* Smooth data pulse */}
        <circle r="2.5" fill={color} className="blur-[0.5px] md:blur-none md:shadow-[0_0_8px_#3b82f6]">
          <animateMotion dur="3s" repeatCount="indefinite" path={d} />
        </circle>
      </>
    )}
  </g>
);

const FlowArrow = ({ active }: { active: boolean }) => (
  <motion.div
    animate={{ opacity: active ? 1 : 0.2 }}
    className="flex items-center justify-center my-1"
  >
    <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
      <motion.path
        d="M8 0 L8 14 M3 9 L8 15 L13 9"
        stroke={active ? COLORS.active : COLORS.border}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ opacity: active ? 1 : 0.3 }}
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
    <div className="w-full relative px-4 md:px-12 py-10 md:py-24 flex items-center justify-center bg-zinc-50/30 md:bg-white overflow-hidden rounded-[2.5rem] md:rounded-[4rem] md:border border-slate-100">

      {/* ── DESKTOP ONLY: High-end Background Pattern ── */}
      <div className="absolute inset-0 opacity-[0.4] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none hidden md:block" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.03),transparent_70%)] pointer-events-none hidden md:block" />

      {/* Ambient Orbs (Desktop) */}
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none hidden md:block" />
      <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-emerald-50/30 rounded-full blur-[100px] pointer-events-none hidden md:block" />

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
      <div className="md:hidden flex flex-col items-center gap-0 w-full max-w-sm z-10 px-2">
        <div className="grid grid-cols-3 gap-4 w-full mb-3">
          <Node icon={UserPlus} label="Add Client" active={phase >= 0} pulse={phase === 0} />
          <Node icon={Settings} label="Select Service" active={phase >= 0} />
          <Node icon={Users} label="Assign Team" active={phase >= 0} />
        </div>

        <FlowArrow active={phase >= 0} />

        <motion.div
          animate={{
            scale: phase >= 1 ? 1 : 0.98,
            boxShadow: phase === 3 ? "0 20px 40px -10px rgba(16,185,129,0.15)" : "0 10px 30px -8px rgba(0,0,0,0.08)"
          }}
          className="w-full bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-md"
        >
          <div className="px-4 py-3 border-b border-slate-100 bg-slate-50/50">
            <div className="flex justify-between items-start mb-0.5">
              <h4 className="text-xs font-bold text-slate-800">GST Filing — March 2026</h4>
              <div className={`px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider ${phase === 3 ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                {phase === 3 ? 'Completed' : 'In Progress'}
              </div>
            </div>
            <p className="text-[9px] text-slate-400 font-medium">Due in 4 days</p>
          </div>

          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
                  <CheckCircle2 className="w-2.5 h-2.5 text-white" />
                </div>
                <span className="text-[11px] font-semibold text-slate-600">Bank Statement</span>
              </div>
              <span className="text-[8px] font-bold text-emerald-500 uppercase tracking-widest">Received</span>
            </div>

            <motion.div animate={{ opacity: phase >= 1 ? 1 : 0.5 }} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors duration-500 ${phase === 3 ? 'bg-emerald-500' : 'bg-red-900/10'}`}>
                  {phase === 3 ? <CheckCircle2 className="w-2.5 h-2.5 text-white" /> : <AlertCircle className={`w-2.5 h-2.5 ${phase >= 1 ? 'text-red-800' : 'text-slate-300'}`} />}
                </div>
                <span className="text-[11px] font-semibold text-slate-600">Sales Register</span>
              </div>
              {phase === 3
                ? <span className="text-[8px] font-bold text-emerald-500 uppercase tracking-widest">Received</span>
                : <motion.span animate={phase === 1 ? { opacity: [1, 0.5, 1] } : {}} transition={{ duration: 1, repeat: Infinity }} className={`text-[8px] font-bold uppercase tracking-widest ${phase >= 1 ? 'text-[#7A1C1C]' : 'text-slate-300'}`}>Missing</motion.span>
              }
            </motion.div>

            <motion.div animate={{ opacity: phase >= 1 ? 1 : 0.4 }} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-red-900/10 flex items-center justify-center">
                  <AlertCircle className={`w-2.5 h-2.5 ${phase >= 1 ? 'text-red-800' : 'text-slate-300'}`} />
                </div>
                <span className="text-[11px] font-semibold text-slate-600">Purchase Register</span>
              </div>
              <span className={`text-[8px] font-bold uppercase tracking-widest ${phase >= 1 ? 'text-[#7A1C1C]' : 'text-slate-300'}`}>Missing</span>
            </motion.div>

            <div className="pt-2 space-y-1.5">
              <div className="flex justify-between items-center text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                <span>Progress</span>
                <span className="text-slate-600">{phase === 3 ? '100%' : phase >= 1 ? '65%' : '30%'}</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: phase === 3 ? '100%' : phase >= 1 ? '65%' : '30%' }}
                  className={`h-full transition-colors duration-1000 ${phase === 3 ? 'bg-emerald-500' : 'bg-blue-500'}`}
                />
              </div>
            </div>
          </div>
        </motion.div>

        <FlowArrow active={phase >= 2} />

        <div className="grid grid-cols-2 gap-x-8 gap-y-6 w-full mt-4 px-4 pb-4">
          <Node icon={Bell} label="Notified" active={phase >= 2} pulse={phase === 2} />
          <Node icon={LinkIcon} label="Link Sent" active={phase >= 2} />
          <Node icon={Upload} label="Uploaded" active={phase === 3} />
          <Node icon={RefreshCw} label="Updated" active={phase === 3} />
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/* ── DESKTOP LAYOUT: Horizontal ── */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="hidden md:flex relative w-full max-w-6xl items-center justify-between gap-12 z-10 px-8 min-h-[580px]">

        {/* Left Inputs */}
        <div className="flex flex-col gap-20">
          <Node icon={UserPlus} label="Add Client" active={phase >= 0} pulse={phase === 0} />
          <Node icon={Settings} label="Select Service" active={phase >= 0} />
          <Node icon={Users} label="Assign Team" active={phase >= 0} />
        </div>

        {/* Center: High-end Glass Card */}
        <div className="relative">
          <motion.div
            animate={{
              scale: phase >= 1 ? 1 : 0.98,
              boxShadow: phase === 3 ? "0 60px 100px -20px rgba(16,185,129,0.12)" : "0 50px 80px -20px rgba(0,0,0,0.06)"
            }}
            className="w-[380px] md:w-[420px] bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden relative group transition-all duration-700"
          >
            {/* Subtle gloss effect */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-50/50 to-transparent pointer-events-none" />

            {/* Mission Control Header */}
            <div className="px-10 py-8 border-b border-slate-50 bg-white relative z-10">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-[17px] font-black text-slate-900 tracking-tight">GST Filing — March 2026</h4>
                <div className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-sm ${phase === 3 ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20' : 'bg-blue-500/10 text-blue-600 border border-blue-500/20'}`}>
                  {phase === 3 ? 'Completed' : 'Live Sync'}
                </div>
              </div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-widest flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" /> Due in 4 days
              </div>
            </div>

            {/* Checklist Core */}
            <div className="p-10 relative z-10">
              <div className="space-y-6 mb-10">
                <div className="flex items-center justify-between group/line">
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover/line:scale-110 transition-transform">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    </div>
                    <span className="text-base font-bold text-slate-700 transition-colors">Bank Statement</span>
                  </div>
                  <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.2em]">Validated</span>
                </div>

                <motion.div animate={{ opacity: phase >= 1 ? 1 : 0.5 }} className="flex items-center justify-between group/line">
                  <div className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-700 group-hover/line:scale-110 border ${phase === 3 ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-red-500/5 border-red-500/10'}`}>
                      {phase === 3 ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <AlertCircle className={`w-4 h-4 ${phase >= 1 ? 'text-red-700' : 'text-slate-300'}`} />}
                    </div>
                    <span className="text-base font-bold text-slate-700 transition-colors">Sales Register</span>
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-700 ${phase === 3 ? 'text-emerald-500' : phase >= 1 ? 'text-red-700' : 'text-slate-300'}`}>
                    {phase === 3 ? 'Validated' : 'Missing'}
                  </span>
                </motion.div>

                <motion.div animate={{ opacity: phase >= 1 ? 1 : 0.4 }} className="flex items-center justify-between group/line">
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-red-500/5 border border-red-500/10 flex items-center justify-center group-hover/line:scale-110 transition-transform">
                      <AlertCircle className={`w-4 h-4 ${phase >= 1 ? 'text-red-700' : 'text-slate-300'}`} />
                    </div>
                    <span className="text-base font-bold text-slate-700 transition-colors">Purchase Register</span>
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${phase >= 1 ? 'text-red-700' : 'text-slate-300'}`}>Missing</span>
                </motion.div>
              </div>

              {/* Enhanced Progress Visual */}
              <div className="space-y-4 pt-8 border-t border-slate-50">
                <div className="flex justify-between items-center text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">
                  <span>Engine Sync</span>
                  <span className="text-slate-900">{phase === 3 ? '100%' : phase >= 1 ? '65%' : '30%'}</span>
                </div>
                <div className="h-3 w-full bg-slate-50 rounded-full overflow-hidden border border-slate-100 p-0.5">
                  <motion.div
                    animate={{ width: phase === 3 ? '100%' : phase >= 1 ? '65%' : '30%' }}
                    className={`h-full rounded-full transition-all duration-1000 ${phase === 3 ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]' : 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]'}`}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Outputs */}
        <div className="flex flex-col gap-12">
          <Node icon={Bell} label="Notified Sent" active={phase >= 2} pulse={phase === 2} />
          <Node icon={LinkIcon} label="Token Generated" active={phase >= 2} />
          <Node icon={Upload} label="Data Received" active={phase === 3} />
          <Node icon={RefreshCw} label="Live Updated" active={phase === 3} />
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 text-[9px] md:text-[11px] font-black text-slate-400 uppercase tracking-[1em] italic whitespace-nowrap select-none"
      >
        Autonomous Workflow Engine
      </motion.p>
    </div>
  );
};
