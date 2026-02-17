import { useState, useEffect } from "react";
import {
  MessageSquare,
  ListChecks,
  Bell,
  CalendarClock,
  FileArchive,
  ShieldCheck,
  LayoutDashboard,
  ArrowRight,
  CheckCircle2,
  Clock,
  Check,
  Smartphone,
  CheckCircle,
  FileText,
  Zap,
  MoveRight,
  MoveDown
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    icon: MessageSquare,
    title: "WhatsApp Document Collection",
    desc: "Clients upload docs directly in chat. No portals, no logins.",
    badge: "Most Used",
  },
  {
    icon: ListChecks,
    title: "Smart GST / ITR / Audit Checklists",
    desc: "Ready-to-use templates for all compliance workflows.",
    badge: "Compliance",
  },
  {
    icon: Bell,
    title: "Auto Follow-ups Until Completion",
    desc: "Automated nudges ensure documents are received on time.",
    badge: "Automation",
  },
  {
    icon: CalendarClock,
    title: "Deadline & SLA Alerts",
    desc: "Never miss a due date with automated firm-wide alerts.",
    badge: "Critical",
  },
  {
    icon: LayoutDashboard,
    title: "Live Client Status Dashboard",
    desc: "Real-time visibility into every client job and pending doc.",
    badge: "Real-time",
  },
  {
    icon: FileArchive,
    title: "One-Click ZIP Export + Audit Logs",
    desc: "Export organized packs for audit in seconds.",
    badge: "Audit-ready",
  },
];

const FeaturesGrid = () => {
  const [progress, setProgress] = useState(40);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 10);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (step < 4) setProgress(40);
    else if (step < 8) setProgress(75);
    else setProgress(100);
  }, [step]);

  return (
    <section id="features" className="relative z-10 py-16 md:py-24 bg-[#f6f6f7] overflow-hidden">
      {/* Subtle radial gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(155,44,44,0.02),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT SIDE: Text + Features */}
          <div className="h-full flex flex-col pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#9b2c2c] mb-6">
                CORE FEATURES
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight font-display">
                Everything you need. <br />
                <span className="text-slate-400">Nothing you don't.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 max-w-xl leading-relaxed font-medium">
                Purpose-built for CA firms, tax consultants, and law firms to automate document collection, reminders, and compliance tracking.
              </p>

              <div className="space-y-3">
                {features.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative flex items-start gap-4 p-4 rounded-xl transition-all duration-300 cursor-default hover:bg-white hover:shadow-md border border-transparent hover:border-red-100"
                  >
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-[#9b2c2c] rounded-full transition-all duration-300 group-hover:h-3/4 shadow-[0_0_10px_rgba(155,44,44,0.4)]" />
                    <div className="w-10 h-10 rounded-lg bg-red-50 text-[#9b2c2c] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#9b2c2c] group-hover:text-white">
                      <f.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1 group-hover:text-[#9b2c2c] transition-colors">{f.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Product visualization container */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[2rem] border border-slate-200 p-6 md:p-8 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#9b2c2c]/20 to-transparent" />

              <div className="mb-8 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full">
                  Live Workflow Preview
                </span>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-slate-200" />
                  <div className="w-2 h-2 rounded-full bg-slate-200" />
                  <div className="w-2 h-2 rounded-full bg-slate-200" />
                </div>
              </div>

              {/* Composition: Dashboard + Flow Arrow + WhatsApp */}
              <div className="space-y-8">

                {/* (A) Dashboard Preview Card */}
                <motion.div
                  className="bg-white rounded-2xl border border-slate-100 shadow-xl overflow-hidden"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    </div>
                  </div>
                  <div className="p-4 flex gap-4">
                    {/* Sidebar Mock */}
                    <div className="hidden sm:block w-32 space-y-3 opacity-40">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-slate-200" />
                          <div className="h-2 w-16 bg-slate-100 rounded-full" />
                        </div>
                      ))}
                    </div>
                    {/* Main Content Mock */}
                    <div className="flex-1 space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="text-[11px] font-bold text-slate-900 mb-1">GST Filing — March 2026</h5>
                          <p className="text-[9px] text-slate-400 font-medium">Client: Aarav Mehta</p>
                        </div>
                        <motion.div
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ repeat: Infinity, duration: 3 }}
                          className="px-2 py-0.5 rounded-full bg-orange-50 text-orange-600 text-[8px] font-bold border border-orange-100"
                        >
                          Auto reminder in 4h
                        </motion.div>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex justify-between text-[10px] font-bold font-mono">
                          <span className="text-slate-500 uppercase">Progress</span>
                          <span className="text-[#9b2c2c]">{progress}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                          <motion.div
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-[#9b2c2c] rounded-full"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Docs Checklist</span>
                          <AnimatePresence mode="popLayout">
                            {step < 5 && (
                              <motion.div exit={{ opacity: 0, x: -5, scale: 0.95 }} className="flex items-center gap-2 p-1.5 bg-slate-50 rounded border border-slate-100">
                                <div className="w-3 h-3 border border-slate-300 rounded" />
                                <span className="text-[9px] text-slate-600 font-medium">Sales Register</span>
                              </motion.div>
                            )}
                          </AnimatePresence>
                          <div className="flex items-center gap-2 p-1.5 bg-slate-50 rounded border border-slate-100">
                            <div className="w-3 h-3 border border-slate-300 rounded" />
                            <span className="text-[9px] text-slate-600 font-medium">Bank Statement</span>
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <span className="text-[8px] font-bold text-slate-400 uppercase tracking-tighter">Recent Logs</span>
                          <AnimatePresence mode="popLayout">
                            {step >= 5 && (
                              <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 p-1.5 bg-green-50 rounded border border-green-100">
                                <CheckCircle2 className="w-2.5 h-2.5 text-green-600" />
                                <span className="text-[9px] text-green-700 font-bold truncate">Received .pdf</span>
                              </motion.div>
                            )}
                          </AnimatePresence>
                          <div className="flex items-center gap-2 opacity-50">
                            <div className="w-2 h-2 rounded-full bg-slate-300" />
                            <div className="h-1.5 w-16 bg-slate-100 rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* (B) 2D Flow Connector */}
                <div className="flex justify-center items-center py-2 relative">
                  <div className="flex flex-col items-center gap-2 z-10">
                    <div className="hidden lg:block absolute -left-16 top-1/2 -translate-y-1/2 w-32 h-20 pointer-events-none">
                      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" preserveAspectRatio="none">
                        <path d="M 90 10 Q 50 50 10 90" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" />
                        <path d="M 10 90 L 15 80 M 10 90 L 25 90" stroke="#cbd5e1" strokeWidth="1" />
                      </svg>
                    </div>
                    <div className="relative bg-[#f6f6f7] px-4 py-1.5 rounded-full border border-slate-200 shadow-sm flex items-center gap-2">
                      <Zap className="w-3 h-3 text-[#9b2c2c] animate-pulse" />
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Sync via WhatsApp API</span>
                    </div>
                  </div>
                  {/* Animated packets */}
                  <AnimatePresence>
                    {step >= 4 && step <= 6 && (
                      <motion.div
                        initial={{ opacity: 0, top: "0%", left: "50%" }}
                        animate={{ opacity: [0, 1, 1, 0], top: "100%" }}
                        transition={{ duration: 1 }}
                        className="absolute w-2 h-2 bg-[#9b2c2c] rounded-full blur-[1px] z-20"
                      />
                    )}
                  </AnimatePresence>
                </div>

                {/* (C) WhatsApp Chat Preview Card */}
                <div className="flex justify-end">
                  <motion.div
                    className="w-full sm:w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-[#075e54] p-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-xs">S</div>
                        <div>
                          <h6 className="text-white text-[11px] font-bold leading-tight">Sharma & Co (Official)</h6>
                          <div className="flex items-center gap-1">
                            <span className="text-white/70 text-[8px] font-medium uppercase tracking-tighter">Business Account</span>
                            <CheckCircle2 className="w-2.5 h-2.5 fill-blue-500 text-[#075e54]" strokeWidth={0} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#efe7dd] p-3 space-y-3 min-h-[160px]">
                      <div className="bg-white p-2 rounded-lg rounded-tl-none shadow-sm text-[10px] text-slate-800 leading-relaxed max-w-[90%] font-medium">
                        Hi Aarav, Sharma & Co needs these docs for <span className="font-bold">GST Filing</span>:
                        <br />1. Bank Statement
                        <br />2. Sales Register
                      </div>

                      <AnimatePresence>
                        {step >= 2 && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            className="flex justify-start pt-1"
                          >
                            <div className="bg-white p-2 rounded-lg rounded-tl-none shadow-sm text-[10px] text-slate-800 font-medium">
                              Reminder: Items still pending.
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <AnimatePresence>
                        {step >= 5 && (
                          <motion.div
                            initial={{ opacity: 0, x: 20, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            className="flex justify-end pt-2"
                          >
                            <div className="bg-[#dcf8c6] p-2 rounded-lg rounded-tr-none shadow-sm flex items-center gap-3 border border-green-200">
                              <FileText className="w-3.5 h-3.5 text-red-700" />
                              <div className="text-[9px] font-bold text-slate-800">sales_register.pdf</div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <AnimatePresence>
                        {step >= 7 && (
                          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center pt-1">
                            <span className="text-[8px] font-bold text-green-700 bg-white/60 px-2 py-0.5 rounded-full border border-green-200">
                              Received ✓ Synced to Dashboard
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex justify-center">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100">
                  <CheckCircle2 className="w-3 h-3 text-green-600" />
                  <span className="text-[10px] font-bold text-green-800 uppercase tracking-widest">Clients see YOUR firm name — not a random bot.</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .perspective-1000 { perspective: 1000px; }
      `}} />
    </section>
  );
};

export default FeaturesGrid;
