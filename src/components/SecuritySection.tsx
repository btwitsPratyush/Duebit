import { ShieldCheck, Lock, History, EyeOff } from "lucide-react";

const SecuritySection = () => {
    return (
        <section className="relative z-10 py-24 bg-[#f6f6f7] overflow-hidden">
            {/* Grid Pattern */}
            <div
                className="absolute inset-0 z-0 opacity-[0.35] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.4) 1px, transparent 1px)`,
                    backgroundSize: '32px 32px'
                }}
            />
            <div className="container mx-auto max-w-6xl px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-bold uppercase tracking-wider mb-6">
                            <ShieldCheck className="w-3 h-3" />
                            Enterprise Grade
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 font-display leading-tight">
                            Security isn't a feature. <br />
                            <span className="text-slate-400">It's our foundation.</span>
                        </h2>
                        <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                            Your client data is sensitive. We treat it that way. Built with strict security protocols to keep your firm compliant.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-700 flex-shrink-0">
                                    <Lock className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">End-to-End Encryption</h4>
                                    <p className="text-sm text-slate-500">AES-256 encryption at rest and in transit.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-700 flex-shrink-0">
                                    <History className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Audit Trails</h4>
                                    <p className="text-sm text-slate-500">Full history of every document access.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-700 flex-shrink-0">
                                    <EyeOff className="w-5 h-5" />
                                    1</div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Private Access</h4>
                                    <p className="text-sm text-slate-500">Time-limited, secure links for sharing.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-700 flex-shrink-0">
                                    <ShieldCheck className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Data Sovereignty</h4>
                                    <p className="text-sm text-slate-500">Data stored securely on Indian servers.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visual: Abstract Shield / Lock */}
                    <div className="relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-green-100/50 rounded-full blur-3xl transform scale-75" />

                        <div className="relative bg-white border border-slate-100 rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-500">
                            <div className="flex items-center gap-3 mb-6 border-b border-slate-50 pb-4">
                                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                                    <ShieldCheck className="w-5 h-5 text-green-600" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">Compliance Check</p>
                                    <p className="text-xs text-green-600 font-medium">Passed • Just now</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-500">Encryption Standard</span>
                                    <span className="font-mono text-slate-700 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">AES-256</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-500">Server Location</span>
                                    <span className="font-medium text-slate-900 flex items-center gap-1">
                                        Mumbai (AWS) <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-500">Audit Logging</span>
                                    <span className="font-bold text-green-600">Active</span>
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-slate-50">
                                <button className="w-full py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800 transition-colors">
                                    Download Security Report
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecuritySection;
