import { useState, useEffect } from "react";
import {
  Check,
  CheckCircle2,
  Smartphone,
  Laptop,
  ArrowRight,
  Clock,
  FileText,
  Bell,
  Activity,
  Zap,
  Server,
  Database,
  Search,
  CheckCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ProductInAction = () => {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(60);
  const [showToast, setShowToast] = useState(false);

  // Sync animation sequence
  useEffect(() => {
    const sequence = async () => {
      // Step 0: Initial state (1s)
      setStep(0);
      setProgress(60);
      setShowToast(false);

      // Step 1: Reminder message appears (2s)
      await new Promise(r => setTimeout(r, 2000));
      setStep(1);

      // Step 2: Client uploads (2s)
      await new Promise(r => setTimeout(r, 2000));
      setStep(2);

      // Step 3: Success sync (0.5s)
      await new Promise(r => setTimeout(r, 500));
      setStep(3);
      setProgress(80);
      setShowToast(true);

      // Reset loop
      await new Promise(r => setTimeout(r, 5000));
      sequence();
    };

    sequence();
  }, []);

  return (
    <section id="product-in-action" className="relative z-10 px-6 py-24 bg-[#f6f6f7] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-red-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 font-display leading-tight"
          >
            Clients stay in <span className="text-[#25D366]">WhatsApp</span>.
            <br className="hidden sm:block" />
            <span className="mt-1 block text-slate-900">
              Firms stay in <span className="text-red-800">Control</span>.
            </span>
          </motion.h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience the frictionless sync between client conversation and firm compliance.
          </p>
        </div>

        <div className="relative grid lg:grid-cols-2 gap-16 lg:gap-32 items-stretch">

          {/* MIDDLE CONNECTOR - Pulse & Sync */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-4 z-20 w-32">
            <div className="relative">
              <div className="absolute -inset-4 bg-red-600/10 rounded-full animate-ping" />
              <div className="relative bg-white p-4 rounded-full shadow-2xl border border-slate-100 text-red-700">
                <Zap className="w-6 h-6 fill-current" />
              </div>
            </div>

            {/* Animated dotted line with particles */}
            <div className="relative w-full h-8 flex items-center justify-center">
              <div className="absolute w-full h-[2px] border-t-2 border-dotted border-slate-300" />
              <AnimatePresence>
                {step >= 2 && (
                  <motion.div
                    initial={{ left: "0%", opacity: 0 }}
                    animate={{ left: "100%", opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 1, ease: "linear" }}
                    className="absolute w-3 h-3 bg-red-700 rounded-full shadow-[0_0_10px_rgba(155,44,44,0.6)]"
                  />
                )}
              </AnimatePresence>
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#9b2c2c] whitespace-nowrap bg-white px-3 py-1 rounded-full border border-slate-100 shadow-sm">
                Uploads sync instantly
              </p>
              <div className="flex flex-col items-center group/email">
                <p className="text-[9px] font-bold text-slate-500 whitespace-nowrap bg-slate-100 px-3 py-1 rounded-full border border-slate-200 shadow-sm flex items-center gap-1.5 transition-all hover:bg-slate-200">
                  <span className="text-[10px]"></span> Email reminders (fallback)
                </p>
                <div className="absolute top-full mt-1 opacity-0 group-hover/email:opacity-100 transition-opacity pointer-events-none">
                  <p className="text-[7px] font-bold text-slate-400 uppercase tracking-tighter bg-white px-2 py-0.5 rounded border border-slate-100 whitespace-nowrap">
                    Auto-triggered if WhatsApp is ignored
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* LEFT: WhatsApp (Client Side) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col h-[600px] group transition-all duration-500 hover:shadow-green-900/5">
              {/* WA Header */}
              <div className="bg-[#075e54] p-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">S</div>
                <div>
                  <h4 className="text-white text-sm font-bold leading-tight">Sharma & Co (GST Team)</h4>
                  <p className="text-white/70 text-[10px] flex items-center gap-1 font-medium">Business Account <CheckCircle2 className="w-2.5 h-2.5 fill-blue-500 text-[#075e54]" /></p>
                </div>
              </div>

              {/* WA Content */}
              <div className="flex-1 bg-[#efe7dd] p-4 space-y-4 overflow-y-auto relative">
                <div className="flex justify-center mb-4">
                  <span className="bg-[#dcf8c6]/80 text-[10px] text-slate-600 px-3 py-1 rounded-lg uppercase font-bold tracking-tighter">Today</span>
                </div>

                {/* Initial Request */}
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-r-xl rounded-bl-xl shadow-sm text-sm text-slate-800 max-w-[85%]">
                    Hi Rahul, please upload <span className="font-bold">PAN Card</span> for GST filing.
                  </div>
                </div>

                {/* Auto Reminder */}
                <AnimatePresence>
                  {step >= 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white p-3 rounded-r-xl rounded-bl-xl shadow-sm text-sm text-slate-800 max-w-[85%] relative border border-slate-50">
                        Reminder: <span className="font-bold">PAN Card</span> is still pending. Upload here.
                        <div className="absolute -top-2 -right-2 bg-red-700 text-white p-1 rounded-full shadow-lg">
                          <Bell className="w-3 h-3" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Client Upload */}
                <AnimatePresence>
                  {step >= 2 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, x: 20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      className="flex justify-end"
                    >
                      <div className="bg-[#dcf8c6] p-2.5 rounded-l-xl rounded-br-xl shadow-sm max-w-[85%]">
                        <div className="flex items-center gap-3 bg-white/40 p-2.5 rounded-lg border border-slate-200/50">
                          <div className="bg-white p-2 rounded-lg text-red-700 shadow-sm">
                            <FileText className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-800">PAN_Card.pdf</p>
                            <p className="text-[9px] text-slate-500 font-medium">1.2 MB</p>
                          </div>
                        </div>
                        <div className="flex justify-end items-center gap-1 mt-1">
                          <span className="text-[9px] text-slate-500">21:05</span>
                          <Check className="w-3 h-3 text-blue-500" />
                          <Check className="w-3 h-3 text-blue-500 -ml-1.5" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Confirmation */}
                <AnimatePresence>
                  {step >= 3 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white p-3 rounded-r-xl rounded-bl-xl shadow-sm max-w-[85%] border-l-4 border-green-500">
                        <p className="text-sm font-bold text-green-700 flex items-center gap-2 mb-1">
                          <CheckCircle className="w-3.5 h-3.5" /> Received
                        </p>
                        <p className="text-xs text-slate-600">Added to your GST checklist.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="bg-white p-4 h-12 flex items-center gap-4 border-t border-slate-100">
                <div className="flex-1 bg-slate-100 rounded-full h-8" />
                <div className="w-8 h-8 rounded-full bg-[#075e54] flex items-center justify-center text-white"><ArrowRight className="w-4 h-4" /></div>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center shadow-inner">
                <Smartphone className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Client View: Sharma & Co Branding</span>
            </div>
          </motion.div>

          {/* RIGHT: Dashboard (Firm Side) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full relative"
          >
            <div className="bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col h-[600px] group transition-all duration-500 hover:shadow-red-900/5 relative">

              {/* Firm Header */}
              <div className="bg-slate-50 border-b border-slate-100 p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-800 text-white flex items-center justify-center font-bold shadow-lg shadow-red-900/20">RK</div>
                  <div>
                    <h4 className="text-slate-900 text-sm font-bold leading-tight">Rahul Khanna</h4>
                    <p className="text-slate-500 text-[10px] font-medium flex items-center gap-2">
                      GST Filing March 2026 • <span className="text-green-600 font-bold uppercase">Active</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="flex-1 p-6 space-y-8 bg-white overflow-hidden">
                {/* Progress */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-slate-500 uppercase tracking-widest">Job Progress</span>
                    <span className="text-red-700">{progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                    <motion.div
                      initial={{ width: "60%" }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-red-700 to-red-600 rounded-full shadow-[0_0_10px_rgba(155,44,44,0.3)]"
                    />
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Pending", val: step >= 3 ? "1" : "2", color: "text-slate-400" },
                    { label: "Received", val: step >= 3 ? "4" : "3", color: "text-red-700", bg: "bg-red-50" },
                    { label: "Overdue", val: "0", color: "text-slate-400" }
                  ].map((stat, i) => (
                    <div key={i} className={`p-4 rounded-xl border border-slate-100 text-center transition-all ${stat.bg || 'bg-slate-50'}`}>
                      <p className={`text-[9px] uppercase font-bold tracking-widest mb-1 ${stat.color}`}>{stat.label}</p>
                      <p className={`text-2xl font-bold ${stat.color}`}>{stat.val}</p>
                    </div>
                  ))}
                </div>

                {/* Audit Log */}
                <div className="space-y-4 pt-4 border-t border-slate-50">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Activity className="w-3 h-3" /> Automatic Audit Log
                  </p>
                  <div className="space-y-4">
                    <AnimatePresence mode="popLayout">
                      {step >= 3 && (
                        <motion.div
                          initial={{ opacity: 0, x: -20, height: 0 }}
                          animate={{ opacity: 1, x: 0, height: "auto" }}
                          className="flex items-start gap-3"
                        >
                          <div className="mt-1 w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                          <div>
                            <p className="text-xs font-bold text-slate-800">PAN Card received instantly</p>
                            <p className="text-[10px] text-slate-400 font-medium">Synced via WhatsApp API</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <div className="flex items-start gap-3 opacity-60">
                      <div className="mt-1 w-2 h-2 rounded-full bg-red-500" />
                      <div>
                        <p className="text-xs font-bold text-slate-700">Reminder sent automatically</p>
                        <p className="text-[10px] text-slate-400 font-medium">Schedule: Loop #2</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notifications Area Inside Mock */}
              <AnimatePresence>
                {showToast && (
                  <motion.div
                    initial={{ opacity: 0, y: 100, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: 100, x: "-50%" }}
                    className="absolute bottom-6 left-1/2 bg-slate-900/95 backdrop-blur-md text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-4 z-30 border border-white/10 w-[80%]"
                  >
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                      <Check className="w-5 h-5" strokeWidth={4} />
                    </div>
                    <div>
                      <p className="text-xs font-bold leading-tight">PAN Card received instantly</p>
                      <p className="text-[10px] text-white/50 font-medium">Linked to GST Filing checklist</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-50 text-red-700 flex items-center justify-center shadow-inner">
                <Laptop className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Firm View: Full Audit Visibility</span>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM ARCHITECTURE STRIP */}
        <div className="mt-32 max-w-4xl mx-auto">
          <div className="relative p-1 rounded-2xl bg-slate-200/50">
            <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-2xl" />
            <div className="relative flex flex-col sm:flex-row items-center justify-between p-4 px-8 gap-8">

              {[
                { name: "WhatsApp API", icon: Smartphone, color: "text-green-600" },
                { name: "Webhook", icon: Zap, color: "text-orange-600" },
                { name: "Secure Storage", icon: Server, color: "text-blue-600" },
                { name: "Dashboard", icon: Database, color: "text-red-700" }
              ].map((chip, i, arr) => (
                <div key={chip.name} className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3 bg-white px-5 py-2.5 rounded-xl shadow-sm border border-slate-100 group transition-all hover:shadow-lg"
                  >
                    <chip.icon className={`w-4 h-4 ${chip.color} filter drop-shadow-sm group-hover:scale-110 transition-transform`} />
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.15em]">{chip.name}</span>
                  </motion.div>

                  {i < arr.length - 1 && (
                    <div className="relative h-8 w-px sm:h-px sm:w-12">
                      <div className="absolute inset-0 border-l sm:border-t-2 border-dotted border-slate-300" />
                      <motion.div
                        animate={{
                          top: ["0%", "100%"],
                          left: ["0%", "100%"]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute w-1.5 h-1.5 bg-red-700 rounded-full blur-[2px] hidden sm:block"
                        style={{ top: '50%', transform: 'translateY(-50%)' }}
                      />
                    </div>
                  )}
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInAction;
