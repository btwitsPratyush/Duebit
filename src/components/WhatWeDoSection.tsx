import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { motion } from "framer-motion";

const WhatWeDoSection = () => {
  return (
    <section
      id="detailed-how-it-works"
      className="relative z-10 px-6 py-20 md:py-[120px] bg-white overflow-hidden border-none"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-red-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">

        {/* ── TOP: Text Content (centered) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold text-primary tracking-wide uppercase">System Architecture</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-slate-900 mb-6 leading-[1.1] italic" style={{ fontFamily: "'Instrument Serif', serif" }}>
            How Duebit runs your <br />
            <span className="text-primary italic">firm on autopilot.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
            A precise, system-driven workflow engine that automates document tracking, 
            reminders, and audit-ready organization without human interference.
          </p>
        </motion.div>

        {/* ── MIDDLE: Architecture Diagram (full width) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] bg-white border border-slate-200 shadow-2xl p-6 lg:p-16 mb-16 overflow-visible"
        >
          <ArchitectureDiagram />
          
          {/* Subtle Grid Indicator */}
          <div className="absolute bottom-10 right-10 hidden lg:block">
             <div className="flex gap-1">
                {[1, 2, 3].map(i => <div key={i} className="w-1 h-3 bg-red-100 rounded-full" />)}
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WhatWeDoSection;
