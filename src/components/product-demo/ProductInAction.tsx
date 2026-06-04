import React, { useState, useEffect, useRef } from "react";
import {
  Zap,
  FileText,
  Search,
  Bell,
  Check,
  Clock,
  AlertCircle,
  MoreVertical,
  Plus,
  User,
  CheckCircle2,
  Briefcase,
  Sparkles,
  Send,
  Mic
} from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const ProductInAction = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const [step, setStep] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let isMounted = true;
    if (!isInView || !mounted) return;

    const sequence = async () => {
      while (isMounted && isInView && mounted) {
        setStep(0);
        await new Promise(r => setTimeout(r, 1200));
        if (!isMounted || !isInView) break;

        setStep(1); // Dashboard header
        await new Promise(r => setTimeout(r, 1500));
        if (!isMounted || !isInView) break;

        setStep(2); // Show widget bubble
        await new Promise(r => setTimeout(r, 1500));
        if (!isMounted || !isInView) break;

        setStep(3); // Expand inbox
        await new Promise(r => setTimeout(r, 1200));
        if (!isMounted || !isInView) break;

        setStep(4); // User: Has GST...?
        await new Promise(r => setTimeout(r, 1800));
        if (!isMounted || !isInView) break;

        setStep(5); // Bot: typing... (Initial)
        await new Promise(r => setTimeout(r, 1200));
        if (!isMounted || !isInView) break;

        setStep(6); // Bot: No, GST pending...
        await new Promise(r => setTimeout(r, 2500));
        if (!isMounted || !isInView) break;

        setStep(7); // User: Yes
        await new Promise(r => setTimeout(r, 1200));
        if (!isMounted || !isInView) break;

        setStep(8); // Bot: typing... (Confirmation)
        await new Promise(r => setTimeout(r, 1000));
        if (!isMounted || !isInView) break;

        setStep(9); // Bot: Done. I've sent...
        await new Promise(r => setTimeout(r, 2000));
        if (!isMounted || !isInView) break;

        setStep(10); // Dashboard Update + Success Sync
        await new Promise(r => setTimeout(r, 5000));
      }
    };

    sequence();
    return () => { isMounted = false; };
  }, [isInView, mounted]);

  return (
    <section ref={containerRef} id="product-in-action" className="relative z-10 py-16 md:py-24 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Side: Messaging */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit mb-6 backdrop-blur-sm"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold text-primary tracking-wide uppercase">AI Compliance Engine</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl text-slate-900 mb-6 system-heading"
            >
              Compliance. <br />
              <span className="text-[#7A1C1C]">One message away.</span>
            </motion.h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-lg mb-12 leading-relaxed font-light">
              Type or speak. <span className="text-[#7A1C1C] font-normal">Duebit handles the rest.</span>
            </p>

            <div className="space-y-6">
              {[
                { title: "Check status via voice/text", activeStep: 3 },
                { title: "Spot missing documents", activeStep: 4 },
                { title: "Trigger reminders instantly", activeStep: 5 },
                { title: "Stay on top effortlessly", activeStep: 6 },
              ].map((item, idx) => {
                const isActive = step >= item.activeStep;

                return (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-4 group cursor-default"
                  >
                    <div className={`w-2 h-2 rounded-full transition-all duration-700
                      ${isActive ? 'bg-[#111] scale-125' : 'bg-slate-300'}`}
                    />
                    <p className={`text-lg transition-all duration-700
                      ${isActive ? 'text-[#111] font-medium' : 'text-slate-400'}`}
                    >
                      {item.title}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Clean YC Style Dashboard + AI Panel */}
          <div className="relative h-[650px] w-full max-w-lg mx-auto sm:[perspective:2000px]">

            <motion.div
              className="absolute inset-0 bg-[#0B0B0B] rounded-3xl border border-white/[0.08] shadow-[0_24px_60px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >

              {/* Dashboard Content */}
              <div className="flex flex-col h-full relative">

                {/* TOP SECTION: Client & Job */}
                <div className="px-8 pt-8 pb-6 border-b border-white/[0.04]">
                  <AnimatePresence>
                    {step >= 1 ? (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                            <Briefcase className="w-4 h-4 text-white/60" />
                          </div>
                          <div className="flex items-center gap-3">
                            <h3 className="text-white font-medium text-base">Mehta & Associates</h3>
                            <span className="px-2 py-0.5 rounded border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-[9px] font-bold uppercase tracking-widest">Client Found</span>
                          </div>
                        </div>                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <h2 className="text-xl font-semibold text-white tracking-tight">GST Filing — March 2026</h2>
                            <div className="flex items-center gap-2 text-[11px] text-white/40">
                              <Clock className="w-3 h-3" />
                              <span>Due in 2 days</span>
                            </div>
                          </div>
                          <motion.div
                            animate={{
                              backgroundColor: step >= 10 ? 'rgba(251, 191, 36, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                              borderColor: step >= 10 ? 'rgba(251, 191, 36, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                              color: step >= 10 ? '#FBBF24' : '#EF4444'
                            }}
                            className="px-2.5 py-1 rounded border text-[10px] font-bold uppercase tracking-widest whitespace-nowrap"
                          >
                            {step >= 10 ? 'PENDING RESPONSE' : 'ACTION REQUIRED'}
                          </motion.div>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="h-[120px] flex items-center justify-center text-white/10 italic text-sm">Initializing dashboard...</div>
                    )}
                  </AnimatePresence>
                </div>

                {/* MIDDLE SECTION: Checklist */}
                <div className="px-8 py-8 flex-1">
                  <AnimatePresence>
                    {step >= 1 && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4">Filing Requirements</h4>
                        <div className="space-y-3">
                          {[
                            { name: "Bank Statement", status: "received" },
                            { name: "Sales Register", status: "received" },
                            { name: "Invoice Data", status: step >= 10 ? "reminder" : "missing" },
                          ].map((doc, i) => (
                            <div key={doc.name} className="flex items-center justify-between py-2 border-b border-white/[0.03] last:border-0">
                              <div className="flex items-center gap-3">
                                {doc.status === "received" ? (
                                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                ) : doc.status === "reminder" ? (
                                  <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }}><Bell className="w-4 h-4 text-amber-400 animate-pulse" /></motion.div>
                                ) : (
                                  <AlertCircle className="w-4 h-4 text-red-500" />
                                )}
                                <span className="text-white/80 text-sm font-medium">{doc.name}</span>
                              </div>
                              <span className={cn(
                                "text-[10px] font-bold uppercase tracking-widest",
                                doc.status === "received" ? "text-emerald-500/80" : doc.status === "reminder" ? "text-amber-400" : "text-red-500/80"
                              )}>
                                {doc.status === "received" ? "Received" : doc.status === "reminder" ? "Reminder Sent" : "Missing"}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* AI PANEL: Widget & Inbox */}
                <AnimatePresence mode="wait">
                  {step === 2 ? (
                    /* Initial Widget State */
                    <motion.div
                      key="ai-widget"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9, y: 10 }}
                      className="absolute bottom-6 right-6 w-14 h-14 bg-[#7A1C1C] rounded-full shadow-[0_10px_30px_rgba(122,28,28,0.3)] flex items-center justify-center cursor-pointer z-30"
                    >
                      <Sparkles className="w-6 h-6 text-white animate-pulse" />
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="absolute right-16 top-1/2 -translate-y-[60%] bg-[#1a1a1a] border border-white/10 px-3 py-2 rounded-lg text-white text-[11px] font-medium whitespace-nowrap shadow-xl"
                      >
                        Ask Duebit AI
                      </motion.div>
                    </motion.div>
                  ) : step >= 3 ? (
                    /* Full Inbox State */
                    <motion.div
                      key="ai-inbox"
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute bottom-6 right-6 w-[280px] bg-[#111111] border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-20"
                    >
                      {/* Chat Header */}
                      <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-3 h-3 text-[#7A1C1C]" />
                            <span className="text-[10px] font-bold text-white/90 uppercase tracking-widest leading-none">Duebit AI</span>
                          </div>
                          <span className="text-[8px] text-white/30 font-medium uppercase tracking-tight mt-1">Understands context. Takes action.</span>
                        </div>
                        <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                          <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                        </div>
                      </div>

                      {/* Chat Content */}
                      <div className="p-4 space-y-3 max-h-[300px] overflow-y-auto min-h-[160px] flex flex-col justify-end scrollbar-hide">
                        <AnimatePresence mode="popLayout">
                          {/* Message 1: User */}
                          {step >= 4 && (
                            <motion.div key="msg1" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="ml-auto bg-[#7A1C1C] text-white px-3 py-2 rounded-xl rounded-tr-none text-[12px] font-medium max-w-[85%] leading-tight">
                              Has GST been filed for Mehta & Associates?
                            </motion.div>
                          )}

                          {/* Message 2: Bot */}
                          {step >= 6 && (
                            <motion.div key="msg2" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mr-auto bg-white/5 border border-white/10 text-white/90 px-3 py-2 rounded-xl rounded-tl-none text-[12px] max-w-[90%] leading-snug">
                              Not yet. <strong>Invoice Data</strong> is still missing. Want me to send a reminder?
                            </motion.div>
                          )}

                          {/* Message 3: User */}
                          {step >= 7 && (
                            <motion.div key="msg3" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="ml-auto bg-[#7A1C1C] text-white px-3 py-2 rounded-xl rounded-tr-none text-[12px] font-medium">
                              Yes
                            </motion.div>
                          )}

                          {/* Message 4: Bot (Done) */}
                          {step >= 9 && (
                            <motion.div key="msg4" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mr-auto bg-white/5 border border-white/10 text-white/90 px-3 py-2 rounded-xl rounded-tl-none text-[12px] max-w-[90%] font-medium leading-snug text-emerald-400">
                              Done. I&apos;ve sent them a reminder. I&apos;ll notify you once they upload it.
                            </motion.div>
                          )}

                          {/* Success Indicator */}
                          {step >= 10 && (
                            <motion.div key="success-sync" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex justify-center">
                              <div className="bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full flex items-center gap-2 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
                                System Synchronized
                              </div>
                            </motion.div>
                          )}

                          {/* Bot typing... (Always at bottom when active) */}
                          {(step === 5 || step === 8) && (
                            <motion.div key="typing" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mr-auto bg-white/5 border border-white/10 px-3 py-2 rounded-xl rounded-tl-none flex gap-1 items-center">
                              <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce" />
                              <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                              <div className="w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Fake Input */}
                      <div className="p-3 bg-black/40 border-t border-white/5 flex items-center gap-3">
                        <div className="flex-1 h-8 px-3 rounded-lg bg-white/5 border border-white/5 flex items-center text-[10px] text-white/40 font-medium whitespace-nowrap overflow-hidden">
                          Ask or say anything...
                        </div>
                        <div className="flex items-center gap-2">
                          <Mic className="w-3.5 h-3.5 text-[#7A1C1C] animate-pulse" />
                          <Send className="w-3.5 h-3.5 text-white/10" />
                        </div>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>

              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductInAction;
