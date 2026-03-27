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
  FileText
} from "lucide-react";

/* ───── Constants & Styled Subcomponents ───── */

const COLORS = {
  received: "#10b981", // Emerald 500
  missing: "#7A1C1C",  // User specified deep red
  active: "#3b82f6",   // Blue 500
  border: "#e2e8f0",
  textMuted: "#94a3b8"
};

const Node = ({ icon: Icon, label, active, pulse }: { icon: any; label: string; active: boolean; pulse?: boolean }) => (
  <motion.div
    animate={{ opacity: active ? 1 : 0.4, y: active ? 0 : 5 }}
    className="flex flex-col items-center gap-2"
  >
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${active ? 'bg-white shadow-lg border-slate-200' : 'bg-slate-50 border-slate-100'} border-2 relative`}>
      <Icon className={`w-5 h-5 transition-colors duration-500 ${active ? 'text-slate-900' : 'text-slate-400'}`} />
      {active && pulse && (
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-xl bg-blue-500/20"
        />
      )}
    </div>
    <span className={`text-[10px] font-bold uppercase tracking-wider text-center max-w-[80px] leading-tight ${active ? 'text-slate-700' : 'text-slate-400'}`}>
      {label}
    </span>
  </motion.div>
);

const ConnectionLine = ({ d, active, color = COLORS.active }: { d: string; active: boolean; color?: string }) => (
  <g className="overflow-visible pointer-events-none">
    <path d={d} fill="none" stroke={COLORS.border} strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
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
        />
        <circle r="2.5" fill={color} className="blur-[0.5px]">
          <animateMotion dur="4s" repeatCount="indefinite" path={d} />
        </circle>
      </>
    )}
  </g>
);

export const ArchitectureDiagram = () => {
  const [phase, setPhase] = useState(0);

  // Animation Cycle:
  // 0: Initial Flow (Left -> Center)
  // 1: Center Logic (Checklist + Missing items)
  // 2: System Action (Center -> Right)
  // 3: Completion (Final status + Loop)

  useEffect(() => {
    const cycle = setInterval(() => {
      setPhase((prev) => (prev + 1) % 4);
    }, 4500);
    return () => clearInterval(cycle);
  }, []);

  return (
    <div className="w-full relative px-4 py-16 min-h-[550px] flex items-center justify-center bg-zinc-50/30 overflow-hidden">

      {/* ── SVG CONNECTIONS ── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
        {/* Left to Center */}
        <ConnectionLine d="M 230 180 Q 300 180 430 280" active={phase >= 0} />
        <ConnectionLine d="M 230 300 L 430 300" active={phase >= 0} />
        <ConnectionLine d="M 230 420 Q 300 420 430 320" active={phase >= 0} />

        {/* Center to Right */}
        <ConnectionLine d="M 570 280 Q 680 160 770 160" active={phase >= 2} color={phase === 3 ? COLORS.received : COLORS.active} />
        <ConnectionLine d="M 570 300 L 770 300" active={phase >= 2} color={phase === 3 ? COLORS.received : COLORS.active} />
        <ConnectionLine d="M 570 320 Q 680 440 770 440" active={phase >= 2} color={phase === 3 ? COLORS.received : COLORS.active} />
      </svg>

      <div className="relative w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12 z-10 px-8">

        {/* ── LEFT: FIRM INPUT ── */}
        <div className="flex flex-col gap-16 order-2 md:order-1">
          <Node icon={UserPlus} label="Add Client" active={phase >= 0} pulse={phase === 0} />
          <Node icon={Settings} label="Select Service" active={phase >= 0} />
          <Node icon={Users} label="Assign Team" active={phase >= 0} />
        </div>

        {/* ── CENTER: JOB SYSTEM UI ── */}
        <div className="relative order-1 md:order-2">
          <motion.div
            animate={{
              scale: phase >= 1 ? 1 : 0.98,
              boxShadow: phase === 3 ? "0 40px 80px -20px rgba(16,185,129,0.15)" : "0 30px 60px -15px rgba(0,0,0,0.08)"
            }}
            className="w-[320px] md:w-[360px] bg-white rounded-3xl border border-slate-200 overflow-hidden"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-slate-100 bg-slate-50/50">
              <div className="flex justify-between items-start mb-1">
                <h4 className="text-sm font-bold text-slate-800">GST Filing — March 2026</h4>
                <div className={`px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider ${phase === 3 ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                  {phase === 3 ? 'Completed' : 'In Progress'}
                </div>
              </div>
              <p className="text-[10px] text-slate-400 font-medium">Due in 4 days</p>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="space-y-4 mb-6">
                {/* Checklist Item 1 */}
                <div className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                      <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-slate-600">Bank Statement</span>
                  </div>
                  <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">Received</span>
                </div>

                {/* Checklist Item 2 */}
                <motion.div
                  animate={{ opacity: phase >= 1 ? 1 : 0.5 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-500 ${phase === 3 ? 'bg-emerald-500' : 'bg-red-900/10'}`}>
                      {phase === 3 ? <CheckCircle2 className="w-3.5 h-3.5 text-white" /> : <AlertCircle className={`w-3.5 h-3.5 ${phase >= 1 ? 'text-red-800' : 'text-slate-300'}`} />}
                    </div>
                    <span className="text-xs font-semibold text-slate-600">Sales Register</span>
                  </div>
                  {phase === 3 ? (
                    <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">Received</span>
                  ) : (
                    <motion.span
                      animate={phase === 1 ? { opacity: [1, 0.5, 1] } : {}}
                      transition={{ duration: 1, repeat: Infinity }}
                      className={`text-[9px] font-bold uppercase tracking-widest ${phase >= 1 ? 'text-[#7A1C1C]' : 'text-slate-300'}`}
                    >
                      Missing
                    </motion.span>
                  )}
                </motion.div>

                {/* Checklist Item 3 */}
                <motion.div
                  animate={{ opacity: phase >= 1 ? 1 : 0.4 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-900/10 flex items-center justify-center">
                      <AlertCircle className={`w-3.5 h-3.5 ${phase >= 1 ? 'text-red-800' : 'text-slate-300'}`} />
                    </div>
                    <span className="text-xs font-semibold text-slate-600">Purchase Register</span>
                  </div>
                  <span className={`text-[9px] font-bold uppercase tracking-widest ${phase >= 1 ? 'text-[#7A1C1C]' : 'text-slate-300'}`}>Missing</span>
                </motion.div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">
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

          {/* Floating Action Hint */}
          <AnimatePresence>
            {phase === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-xl z-20"
              >
                {/* Auto Follow-up sent via WhatsApp */}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── RIGHT: SYSTEM OUTPUT ── */}
        <div className="flex flex-col gap-12 order-3">
          <Node icon={Bell} label="Notification Sent" active={phase >= 2} pulse={phase === 2} />
          <Node icon={LinkIcon} label="Secure Link Generated" active={phase >= 2} />
          <Node icon={Upload} label="Client Uploads" active={phase === 3} />
          <Node icon={RefreshCw} label="Status Updated" active={phase === 3} />
        </div>

      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400 uppercase tracking-[0.6em] italic"
      >
        Autonomous Workflow Engine
      </motion.p>
    </div>
  );
};
