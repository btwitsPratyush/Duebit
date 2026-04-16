import { ShieldCheck, Lock, History, FileDown, Eye } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        title: "End-to-End Encryption",
        desc: "All documents encrypted at rest and in transit.",
        icon: Lock
    },
    {
        title: "Audit Logs (Every Action Tracked)",
        desc: "Every upload, reminder, and status change is recorded.",
        icon: History
    },
    {
        title: "Access Control",
        desc: "Role-based access for teams and clients.",
        icon: Eye
    },
    {
        title: "Compliance-Ready Exports",
        desc: "Download complete job history with documents anytime.",
        icon: FileDown
    }
];

const SecuritySection = () => {
    return (
        <section id="security" className="relative z-10 py-16 md:py-24 bg-white overflow-hidden border-t border-slate-100">
            {/* Grid Pattern - Exact same as requested */}
            <div
                className="absolute inset-0 z-0 opacity-[0.35] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.4) 1px, transparent 1px)`,
                    backgroundSize: '32px 32px'
                }}
            />
            <div className="container mx-auto max-w-6xl px-6 relative z-10">

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm shadow-xl shadow-primary/5"
                        >
                            <ShieldCheck className="w-3 h-3 text-primary" />
                            <span className="text-xs font-bold text-primary tracking-wide uppercase">Enterprise Grade</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-4xl md:text-5xl text-slate-900 mb-6 system-heading"
                        >
                            Security isn't a feature. <br className="hidden sm:block" />
                            <span className="text-slate-400">It's our foundation.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg md:text-xl text-slate-500 mb-12 leading-relaxed font-normal max-w-xl"
                        >
                            Every document, action, and follow-up is logged, secured, and audit-ready — automatically.
                        </motion.p>

                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                            {features.map((f, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="flex gap-4 group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 flex-shrink-0 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                                        <f.icon className="w-5 h-5" />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-base font-bold text-slate-900 tracking-tight">{f.title}</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Security Card Visualization */}
                    <div className="relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-red-100/30 rounded-full blur-[100px] transform scale-75 opacity-50" />

                        <motion.div
                            initial={{ opacity: 0, x: 40, rotate: 2 }}
                            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            whileHover={{ y: -5, transition: { duration: 0.3 } }}
                            className="relative bg-white border border-slate-200 rounded-[2rem] shadow-2xl p-8 md:p-10 max-w-sm w-full mx-auto transition-shadow duration-500 hover:shadow-slate-200/50"
                        >
                            <div className="flex items-center gap-4 mb-8 border-b border-slate-50 pb-6">
                                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                                    <ShieldCheck className="w-6 h-6 text-emerald-600" />
                                </div>
                                <div>
                                    <p className="text-base font-bold text-slate-900 tracking-tight">Compliance Status</p>
                                    <p className="text-xs text-emerald-600 font-bold uppercase tracking-wider">Verified • Live</p>
                                </div>
                            </div>

                            <div className="space-y-5">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Standard</span>
                                    <span className="font-mono text-[10px] font-bold text-primary bg-slate-50 px-2.5 py-1 rounded border border-slate-200">AES-256</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Infrastructure</span>
                                    <span className="text-[11px] font-bold text-slate-900 flex items-center gap-1.5">
                                        Mumbai (AWS) <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Logs</span>
                                    <span className="text-[11px] font-bold text-emerald-600">Continuous Auditing</span>
                                </div>
                            </div>

                            <div className="mt-10 pt-6 border-t border-slate-50">
                                <button className="group w-full py-4 bg-primary text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2">
                                    <FileDown className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                                    Download Audit Report
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecuritySection;
