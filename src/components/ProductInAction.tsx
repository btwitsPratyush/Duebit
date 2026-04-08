import React, { useState, useEffect } from "react";
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
  Briefcase
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ProductInAction = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    let isMounted = true;
    const sequence = async () => {
      while (isMounted) {
        setStep(0);
        await new Promise(r => setTimeout(r, 800));
        if (!isMounted) break;
        setStep(1); // CLIENT + JOB
        await new Promise(r => setTimeout(r, 1200));
        if (!isMounted) break;
        setStep(2); // CHECKLIST
        await new Promise(r => setTimeout(r, 1500));
        if (!isMounted) break;
        setStep(3); // MISSING GLOW
        await new Promise(r => setTimeout(r, 2000));
        if (!isMounted) break;
        setStep(4); // TOAST REMINDER
        await new Promise(r => setTimeout(r, 2500));
        if (!isMounted) break;
        setStep(5); // P.R. RECEIVED
        await new Promise(r => setTimeout(r, 1000));
        if (!isMounted) break;
        setStep(6); // PROG 80%
        await new Promise(r => setTimeout(r, 1500));
        if (!isMounted) break;
        setStep(7); // I.D. RECEIVED, READY
        await new Promise(r => setTimeout(r, 1500));
        if (!isMounted) break;
        setStep(8); // EXTRA TEXT
        await new Promise(r => setTimeout(r, 4500));
      }
    };

    sequence();
    return () => { isMounted = false; };
  }, []);

  return (
    <section id="product-in-action" className="relative z-10 py-20 md:py-[120px] bg-white overflow-hidden">
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
                <span className="text-xs font-bold text-primary tracking-wide uppercase">System Engine</span>
             </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-normal text-slate-900 mb-6 leading-tight italic" style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              How Duebit works
            </motion.h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-lg mb-12 leading-relaxed font-light">
              Add a client. Select a service. Everything else runs automatically.
            </p>

            <div className="space-y-6">
              {[
                { title: "Jobs are created automatically", activeStep: 1 },
                { title: "Required documents are assigned", activeStep: 2 },
                { title: "Missing items are tracked", activeStep: 3 },
                { title: "Follow-ups happen automatically", activeStep: 4 },
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

          {/* Right Side: Clean YC Style Dashboard */}
          <div className="relative h-[650px] w-full max-w-lg mx-auto sm:[perspective:2000px]">
             
            {/* Subtle external glow */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-50">
              <motion.div animate={{ y: [-20, 20, -20], opacity: [0.1, 0.4, 0.1] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -top-10 -left-10 w-40 h-40 bg-slate-500/10 blur-[50px] rounded-full" />
            </div>

            <motion.div 
              className="absolute inset-0 bg-[#0B0B0B] rounded-3xl border border-white/[0.08] shadow-[0_24px_60px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden z-10"
              initial={{ opacity: 0, y: 30, rotateX: 4 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ rotateX: 1, rotateY: -1, scale: 1.01 }}
            >
              
              {/* TOP SECTION: Client & Job */}
              <div className="px-8 pt-8 pb-6 border-b border-white/[0.04] bg-white/[0.01]">
                <AnimatePresence>
                  {step >= 1 ? (
                    <motion.div 
                      key="header"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      {/* Client row */}
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                           <Briefcase className="w-4 h-4 text-white/60" />
                        </div>
                        <div className="flex items-center gap-3">
                          <h3 className="text-white font-medium text-base">Mehta & Associates</h3>
                          <span className="px-2 py-0.5 rounded border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">Active Client</span>
                        </div>
                      </div>

                      {/* Job row */}
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-1.5">
                             <h2 className="text-xl font-semibold text-white tracking-tight">GST Filing — March 2026</h2>
                             <span className="px-2 py-0.5 rounded border border-white/10 bg-white/5 text-white/50 text-[9px] font-bold uppercase tracking-widest">Auto-created</span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-white/40">
                             <Clock className="w-3.5 h-3.5" />
                             <span>Due in 2 days</span>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <AnimatePresence mode="wait">
                            {step >= 7 ? (
                              <motion.span 
                                key="ready"
                                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                                className="inline-block px-3 py-1 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-widest"
                              >
                                Ready for Filing
                              </motion.span>
                            ) : step >= 3 ? (
                              <motion.span 
                                key="waiting"
                                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                                className="inline-block px-3 py-1 rounded bg-[#7A1C1C]/20 text-[#EF4444] text-[10px] font-bold uppercase tracking-widest"
                              >
                                Waiting on items
                              </motion.span>
                            ) : (
                               <motion.span 
                                key="building"
                                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                                className="inline-block px-3 py-1 rounded bg-white/5 text-white/40 text-[10px] font-bold uppercase tracking-widest"
                              >
                                Initializing
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                     <div className="h-[120px]" />
                  )}
                </AnimatePresence>
              </div>

              {/* MIDDLE SECTION: Document Checklist */}
              <div className="flex-1 px-8 py-6">
                <AnimatePresence>
                  {step >= 2 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="h-full flex flex-col"
                    >
                      <h4 className="text-[11px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4">Required Documents</h4>
                      
                      <div className="flex flex-col">
                        {[
                          { name: "Bank Statement", status: "received" },
                          { name: "Sales Register", status: "received" },
                          { name: "Purchase Register", status: step >= 5 ? "received" : "missing" },
                          { name: "Invoice Data", status: step >= 7 ? "received" : "missing" },
                        ].map((doc, i) => {
                          const isMissing = doc.status === "missing";
                          const isGlowing = step >= 3 && step < 7 && isMissing; 
                          
                          return (
                            <motion.div
                              key={doc.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className={`flex items-center justify-between py-4 border-b border-white/[0.04] last:border-0 relative ${isMissing ? 'bg-[#7A1C1C]/5 -mx-4 px-4 rounded-lg' : ''}`}
                            >
                               {/* Inner pulse row background when glowing */}
                              {isGlowing && (
                                <motion.div 
                                  className="absolute inset-0 bg-[#7A1C1C]/10 rounded-lg pointer-events-none" 
                                  animate={{ opacity: [0, 0.5, 0] }} 
                                  transition={{ repeat: Infinity, duration: 2 }} 
                                />
                              )}

                              <div className="flex items-center gap-3 relative z-10">
                                <div className={`flex items-center justify-center transition-colors duration-500 ${
                                  isMissing ? 'text-[#EF4444]' : 'text-[#34D399]'
                                }`}>
                                  {isMissing ? <AlertCircle className="w-4 h-4" /> : <CheckCircle2 className="w-4 h-4" />}
                                </div>
                                <span className={`text-[15px] transition-colors duration-500 ${isMissing ? 'text-white/60' : 'text-white/90'}`}>
                                  {doc.name}
                                </span>
                              </div>
                              <div className="relative z-10">
                                <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-500 ${
                                  isMissing ? 'text-[#EF4444]' : 'text-emerald-400'
                                }`}>
                                  {isMissing ? 'Missing' : 'Received'}
                                </span>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* BOTTOM SECTION: Progress Bar */}
              <div className="px-8 py-6 bg-white/[0.01] border-t border-white/[0.04] mt-auto">
                <AnimatePresence>
                  {step >= 2 ? (
                     <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-3"
                     >
                        <div className="flex justify-between items-baseline">
                           <span className="text-[11px] font-bold text-white/50 uppercase tracking-widest">Job Progress</span>
                           <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest">
                           {step >= 7 ? '100% Complete' : step >= 6 ? '80% Complete' : '60% Complete'}
                           </span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                           <motion.div
                              initial={{ width: "60%" }}
                              animate={{ 
                                 width: step >= 7 ? "100%" : step >= 6 ? "80%" : "60%" 
                              }}
                              transition={{ duration: 1, ease: "easeInOut" }}
                              className="h-full bg-emerald-400 rounded-full"
                           />
                        </div>
                        <AnimatePresence>
                           {step >= 8 && (
                              <motion.p 
                                 initial={{ opacity: 0, y: 5 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 className="text-white/40 text-[11px] font-medium pt-2 text-center italic tracking-wide"
                              >
                                 "All documents collected. No follow-ups needed."
                              </motion.p>
                           )}
                        </AnimatePresence>
                     </motion.div>
                  ) : (
                     <div className="h-[46px]" />
                  )}
                </AnimatePresence>
              </div>

              {/* BOTTOM RIGHT: System Activity Toast */}
              <AnimatePresence>
                {step >= 4 && step < 7 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, x: 20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    exit={{ opacity: 0, y: 10, x: 20 }}
                    className="absolute bottom-6 right-6 bg-[#18181B] border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.8)] rounded-xl p-4 flex items-start gap-4 z-20 w-[280px]"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 flex-shrink-0 mt-0.5">
                      <Bell className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-white text-[13px] font-medium leading-tight mb-1">Reminder sent automatically</p>
                      <p className="text-white/40 text-[11px] leading-snug">Client notified for missing documents</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductInAction;
