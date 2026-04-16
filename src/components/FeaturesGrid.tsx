import { useState, useEffect } from "react";
import {
  CheckCircle2,
  Clock,
  Check,
  Zap,
  RotateCcw,
  ShieldCheck,
  MoreVertical,
  AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  "Jobs and checklists are created automatically",
  "Required documents are assigned instantly",
  "Missing items are tracked in real-time",
  "Follow-ups are triggered until completion",
  "Deadlines and SLAs are monitored continuously",
  "Everything is logged and ready for audit"
];

const FeaturesGrid = () => {
  const [demoStep, setDemoStep] = useState(0);

  // Demo loop: 0 -> 1 (send) -> 2 (received) -> reset
  useEffect(() => {
    const timer = setInterval(() => {
      setDemoStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="features" className="relative z-10 py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE: Text Content */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-bold text-primary tracking-wide uppercase">System Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-slate-900 mb-6 system-heading">
                Built for real <br />
                compliance workflows.
              </h2>
              <p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-12 leading-relaxed font-light">
                Create a filing job once. Duebit tracks missing documents, sends reminders, and keeps the work moving until it’s ready.
              </p>

              <div className="space-y-4">
                {features.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                    <p className="text-base text-slate-600 font-medium tracking-tight">{f}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Product Visualization */}
          <div className="relative">

            {/* Floating System Hints */}
            <div className="absolute -inset-10 z-0 overflow-hidden pointer-events-none opacity-20 blur-[2px]">
              <motion.span
                animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-10 text-[9px] uppercase font-bold tracking-[0.4em] text-slate-500">
                Tracking missing documents...
              </motion.span>
              <motion.span
                animate={{ y: [0, 30, 0], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 left-0 text-[9px] uppercase font-bold tracking-[0.4em] text-slate-500">
                System Running
              </motion.span>
              <motion.span
                animate={{ x: [0, -20, 0], opacity: [0.1, 0.5, 0.1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className="absolute top-1/2 left-[-10%] text-[8px] uppercase font-bold tracking-[0.4em] text-slate-500 whitespace-nowrap">
                Auto reminder triggered
              </motion.span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-white rounded-[2.5rem] border border-slate-200 p-8 md:p-10 shadow-2xl relative z-10"
            >
              {/* Job Header */}
              <div className="flex justify-between items-start mb-10 pb-8 border-b border-slate-100">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Job</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">GST Filing</h4>
                  <p className="text-sm font-medium text-slate-500">Client: Mehta & Associates</p>
                </div>
                <div className="text-right space-y-2">
                  <div className="px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-[10px] font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                    {demoStep >= 2 ? 'In Review' : 'NOT READY'}
                  </div>
                  <p className="text-[11px] text-slate-400 font-bold flex items-center justify-end gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> Due: 2 days
                  </p>
                </div>
              </div>

              {/* Document Checklist */}
              <div className="space-y-4 mb-10">
                <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Required Documents</h5>

                {[
                  { name: "Bank Statement", status: "received" },
                  { name: "Sales Register", status: demoStep >= 2 ? "received" : "missing" },
                  { name: "Purchase Register", status: "missing" },
                ].map((doc, i) => (
                  <motion.div
                    key={doc.name}
                    layout
                    className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-500
                       ${doc.status === "missing" ? 'bg-red-50/30 border border-red-100/50' : 'bg-slate-50 border border-slate-100'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-500
                           ${doc.status === "received" ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
                        {doc.status === "received" ? <Check className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5 animate-pulse" />}
                      </div>
                      <span className={`text-sm font-medium ${doc.status === "received" ? 'text-slate-900' : 'text-slate-500'}`}>
                        {doc.name}
                      </span>
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${doc.status === "received" ? 'text-emerald-600' : 'text-red-500'}`}>
                      {doc.status === "received" ? 'Received' : 'Missing'}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="space-y-3 mb-12">
                <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-widest">
                  <span className="text-slate-400">Completion</span>
                  <span className="text-slate-900">{demoStep >= 2 ? '4' : '3'} / 5 Received</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "60%" }}
                    animate={{ width: demoStep >= 2 ? "80%" : "60%" }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="h-full bg-primary"
                  />
                </div>
              </div>

              {/* CTA Section */}
              <div className="flex justify-center">
                <motion.div
                  animate={{
                    scale: demoStep === 1 ? [1, 1.05, 1] : 1,
                    boxShadow: demoStep === 1 ? ["0 0 0 0 rgba(185,28,28,0)", "0 0 20px 5px rgba(185,28,28,0.1)", "0 0 0 0 rgba(185,28,28,0)"] : "none"
                  }}
                  transition={{ duration: 0.5 }}
                  className={`px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-2.5 transition-all duration-500
                       ${demoStep >= 1 ? 'bg-primary text-white' : 'bg-primary/90 text-white shadow-xl shadow-primary/10'}`}
                >
                  {demoStep >= 1 ? <RotateCcw className="w-3.5 h-3.5" /> : <Zap className="w-3.5 h-3.5" />}
                  {demoStep === 0 && "Send Reminder"}
                  {demoStep === 1 && "Triggering..."}
                  {demoStep >= 2 && "Reminder Sent"}
                </motion.div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
