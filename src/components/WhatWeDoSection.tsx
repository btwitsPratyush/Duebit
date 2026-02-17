import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { motion } from "framer-motion";

const steps = [
  { id: 1, text: "CA/Law Firm creates a job (GST / ITR / Audit)" },
  { id: 2, text: "Duebit assigns checklist template automatically" },
  { id: 3, text: "WhatsApp message is sent to client instantly" },
  { id: 4, text: "Client uploads docs directly on WhatsApp" },
  { id: 5, text: "Duebit tracks progress live on dashboard" },
  { id: 6, text: "Auto reminders trigger until all docs are received" },
  { id: 7, text: "Export ZIP pack + audit-ready activity log" },
];

const WhatWeDoSection = () => {
  return (
    <section
      id="how-it-works"
      className="relative z-10 px-6 py-24 bg-[#f6f6f7] overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">

        {/* ── TOP: Text Content (centered) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-red-600 mb-3">
            How Duebit Works
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-display leading-[1.1]">
            How Duebit runs your <br />
            <span className="text-primary">firm on autopilot.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            A WhatsApp-first workflow engine that automates document collection, reminders, tracking, and audit-ready exports — without clients installing anything.
          </p>
        </motion.div>

        {/* ── MIDDLE: Architecture Diagram (full width) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-white border border-slate-200 shadow-xl p-6 lg:p-10 mb-16 overflow-visible"
        >
          <ArchitectureDiagram />
        </motion.div>

        {/* ── BOTTOM: Steps + Chips + CTA (2 columns on desktop) ── */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left: Numbered Steps */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {steps.map((step) => (
              <div key={step.id} className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors border border-primary/20">
                  {step.id}
                </div>
                <p className="text-sm text-foreground/80 font-medium pt-0.5">
                  {step.text}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Right: Chips + CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-start lg:items-end"
          >
            <div className="flex flex-wrap gap-3 mb-8">
              {["70–80% less follow-up work", "No portals. No logins.", "Every doc tracked"].map((chip) => (
                <div key={chip} className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-bold text-slate-600 uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  {chip}
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="btn-paper w-fit h-14 px-8 rounded-full shadow-xl shadow-red-900/10 transition-all"
              onClick={() => document.getElementById('final-cta-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              See Live Workflow
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default WhatWeDoSection;
