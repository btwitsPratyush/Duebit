import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Loader2, ArrowRight, ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import WaitlistBackground from "@/components/WaitlistBackground";

const WaitlistPage = () => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        firm: "",
        email: "",
        phone: "",
        type: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSelectChange = (value: string) => {
        setFormData({ ...formData, type: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { data, error } = await supabase.from("waitlist").insert([
                {
                    full_name: formData.name,
                    firm_name: formData.firm,
                    email: formData.email,
                    phone_number: formData.phone,
                    firm_type: formData.type,
                    status: "new",
                    source: "landing_page",
                },
            ]);

            if (error) {
                if (error.code === "23505") {
                    toast.error("This email is already on the waitlist!");
                } else {
                    toast.error("Something went wrong. Please try again.");
                    console.error("Supabase error:", error.message);
                }
            } else {
                setSubmitted(true);
                toast.success("You've been added to the waitlist!");
                setFormData({ name: "", firm: "", email: "", phone: "", type: "" });
            }
        } catch (err) {
            console.error("Submission error:", err);
            toast.error("Failed to submit. Please check your connection.");
        } finally {
            setLoading(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // Custom ease for smooth premium feel
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#050505] font-sans text-white selection:bg-red-900/30 selection:text-red-200">

            {/* 1. Background Animation (R3F) */}
            <div className="absolute inset-0 z-0 opacity-80">
                <WaitlistBackground />
            </div>

            {/* Grain Overlay */}
            <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

            {/* Back Button */}
            <Link to="/" className="hidden sm:flex absolute top-8 left-8 items-center gap-2 text-slate-400 hover:text-white transition-colors z-20 group">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                </div>
                <span className="text-sm font-medium">Back</span>
            </Link>

            <div className="w-full max-w-lg relative z-10 px-6">

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* Header */}
                    <div className="text-center mb-6 sm:mb-10 relative">
                        <motion.div variants={itemVariants}>
                            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 sm:mb-6 font-display relative inline-block">
                                Get early access to <br />
                                <span className="text-[#9b2c2c]">Duebit</span>
                                {/* Tiny floating particles around heading */}
                                <motion.div
                                    animate={{ y: [0, -10, 0], opacity: [0, 1, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-4 -right-8 w-1 h-1 bg-[#9b2c2c] rounded-full blur-[1px]"
                                />
                            </h1>
                        </motion.div>

                        <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-300/80 leading-relaxed max-w-xs sm:max-w-md mx-auto font-light">
                            Join the <span className="text-white font-medium">first 100 firms</span> automating compliance.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mt-6 sm:mt-8">
                            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                            <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#9b2c2c]/90 drop-shadow-sm flex items-center gap-1.5">
                                <Sparkles className="w-3 h-3" /> Priority Access
                            </p>
                            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        </motion.div>
                    </div>

                    {/* 2. Premium Glassmorphism Card */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ y: -5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/10 bg-black/40 backdrop-blur-xl relative overflow-hidden group/card"
                    >
                        {/* Card Glow Border */}
                        <div className="absolute inset-0 rounded-3xl border border-[#9b2c2c]/0 group-hover/card:border-[#9b2c2c]/20 transition-colors duration-500 pointer-events-none" />
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#9b2c2c]/10 rounded-full blur-[80px] pointer-events-none group-hover/card:bg-[#9b2c2c]/20 transition-colors duration-500" />

                        <AnimatePresence mode="wait">
                            {submitted ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="flex flex-col items-center justify-center text-center py-8 relative z-10"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                        className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500/20 to-green-900/20 flex items-center justify-center mb-6 border border-green-500/30 shadow-[0_0_40px_-5px_rgba(34,197,94,0.4)] relative group"
                                    >
                                        <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse" />
                                        <CheckCircle2 className="w-10 h-10 text-green-400 relative z-10" />
                                    </motion.div>
                                    <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">You're on the list!</h3>
                                    <p className="text-slate-400 mb-8 max-w-xs mx-auto leading-relaxed">
                                        We've reserved your spot. Watch your inbox for your exclusive invite code.
                                    </p>
                                    <Button variant="ghost" className="text-slate-400 hover:text-white hover:bg-white/5" asChild>
                                        <Link to="/">Back to Home</Link>
                                    </Button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-5 relative z-10"
                                >
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <motion.div variants={itemVariants} className="space-y-1.5 group/input">
                                            <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-wider text-slate-400 ml-1 group-focus-within/input:text-[#9b2c2c] transition-colors">Full name</label>
                                            <Input
                                                id="name"
                                                required
                                                placeholder="Aarav Mehta"
                                                className="bg-white/[0.03] border-white/10 focus:border-[#9b2c2c]/40 focus:ring-1 focus:ring-[#9b2c2c]/20 h-12 text-white placeholder:text-white/20 transition-all duration-300 rounded-xl"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </motion.div>
                                        <motion.div variants={itemVariants} className="space-y-1.5 group/input">
                                            <label htmlFor="firm" className="text-[11px] font-bold uppercase tracking-wider text-slate-400 ml-1 group-focus-within/input:text-[#9b2c2c] transition-colors">Firm name</label>
                                            <Input
                                                id="firm"
                                                required
                                                placeholder="LexBridge Partners"
                                                className="bg-white/[0.03] border-white/10 focus:border-[#9b2c2c]/40 focus:ring-1 focus:ring-[#9b2c2c]/20 h-12 text-white placeholder:text-white/20 transition-all duration-300 rounded-xl"
                                                value={formData.firm}
                                                onChange={handleChange}
                                            />
                                        </motion.div>
                                    </div>

                                    <motion.div variants={itemVariants} className="space-y-1.5 group/input">
                                        <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-slate-400 ml-1 group-focus-within/input:text-[#9b2c2c] transition-colors">Work email</label>
                                        <Input
                                            id="email"
                                            type="email"
                                            required
                                            placeholder="aarav@lexbridge.com"
                                            className="bg-white/[0.03] border-white/10 focus:border-[#9b2c2c]/40 focus:ring-1 focus:ring-[#9b2c2c]/20 h-12 text-white placeholder:text-white/20 transition-all duration-300 rounded-xl"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </motion.div>

                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <motion.div variants={itemVariants} className="space-y-1.5 group/input">
                                            <label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-wider text-slate-400 ml-1 group-focus-within/input:text-[#9b2c2c] transition-colors">Phone</label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                required
                                                placeholder="+91 98765 43210"
                                                className="bg-white/[0.03] border-white/10 focus:border-[#9b2c2c]/40 focus:ring-1 focus:ring-[#9b2c2c]/20 h-12 text-white placeholder:text-white/20 transition-all duration-300 rounded-xl"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </motion.div>
                                        <motion.div variants={itemVariants} className="space-y-1.5 group/input">
                                            <label htmlFor="type" className="text-[11px] font-bold uppercase tracking-wider text-slate-400 ml-1 group-focus-within/input:text-[#9b2c2c] transition-colors">Firm type</label>
                                            <Select required onValueChange={handleSelectChange} value={formData.type}>
                                                <SelectTrigger className="bg-white/[0.03] border-white/10 focus:border-[#9b2c2c]/40 focus:ring-1 focus:ring-[#9b2c2c]/20 h-12 text-white transition-all duration-300 rounded-xl">
                                                    <SelectValue placeholder="Select type" className="text-white/50" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-[#121215] border-white/10 text-white rounded-xl shadow-xl">
                                                    <SelectItem value="ca" className="focus:bg-white/10 focus:text-white cursor-pointer py-3">CA Firm</SelectItem>
                                                    <SelectItem value="law" className="focus:bg-white/10 focus:text-white cursor-pointer py-3">Law Firm</SelectItem>
                                                    <SelectItem value="consultant" className="focus:bg-white/10 focus:text-white cursor-pointer py-3">Consultant</SelectItem>
                                                    <SelectItem value="other" className="focus:bg-white/10 focus:text-white cursor-pointer py-3">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </motion.div>
                                    </div>

                                    {/* 5. CTA Button Upgrade */}
                                    <motion.div variants={itemVariants} className="pt-2 sm:pt-4">
                                        <Button
                                            type="submit"
                                            className="group relative w-full h-14 text-base sm:text-lg btn-paper rounded-full overflow-hidden transition-all duration-300"
                                            disabled={loading}
                                        >
                                            <span className="relative z-10 flex items-center justify-center gap-2">
                                                {loading ? (
                                                    <>
                                                        <Loader2 className="h-5 w-5 animate-spin" />
                                                        Processing...
                                                    </>
                                                ) : (
                                                    <>
                                                        Join Waitlist
                                                    </>
                                                )}
                                            </span>

                                            {/* Button Shine Effect */}
                                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 z-0" />
                                            {/* Button Glow on Hover */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#9b2c2c]/10 blur-xl" />
                                        </Button>
                                    </motion.div>

                                    <motion.div variants={itemVariants} className="text-center pt-2">
                                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">
                                            No spam • Limited spots available
                                        </p>
                                    </motion.div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default WaitlistPage;
