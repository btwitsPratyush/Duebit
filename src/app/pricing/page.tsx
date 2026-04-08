"use client";

import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Check, Lock, FileText, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const pricingPlans = [
    {
        name: "Starter",
        price: "₹799",
        period: "/month",
        tagline: "For solo CA practitioners.",
        subline: "Ideal for firms with up to 20 active clients.",
        features: [
            "Up to 20 Active Clients",
            "WhatsApp Doc Collection",
            "Basic Checklists",
            "Email Support",
            "Secure Storage",
        ],
        cta: "Start Free Trial",
        variant: "outline",
        popular: false,
        link: "/waitlist"
    },
    {
        name: "Professional",
        price: "₹1,499",
        period: "/month",
        tagline: "Built for busy CA teams.",
        subline: "Best for firms managing 50+ clients.",
        features: [
            "Automated WhatsApp Doc Collection",
            "Smart Checklist Templates",
            "Auto Follow-ups & Reminders",
            "Deadline Tracking + Alerts",
            "One-click Export ZIP Pack",
            "Audit-ready Activity Log",
            "Team Access (3 Users)",
            "Email + WhatsApp Reminders",
        ],
        cta: "Get Started",
        variant: "default",
        popular: true,
        link: "/waitlist"
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        tagline: "For large firms needing control.",
        subline: "Advanced security & custom workflows.",
        features: [
            "Unlimited Clients",
            "Custom Checklist Workflows",
            "Dedicated Onboarding",
            "Role-based Access Control",
            "Advanced Audit Logs",
            "White-label Client Portal",
            "Priority Support",
            "On-premise Option",
        ],
        cta: "Book a Call",
        variant: "outline",
        popular: false,
        link: "https://calendly.com/duebit/demo",
        external: true
    },
];

const faqs = [
    {
        question: "Do clients need to install any app?",
        answer: "No. Clients stay inside WhatsApp. They simply upload documents in chat. Your team tracks everything inside Duebit dashboard."
    },
    {
        question: "Does Duebit work with WhatsApp Business API?",
        answer: "Yes. Duebit integrates with WhatsApp Business API to send checklists, reminders, and follow-ups automatically."
    },
    {
        question: "Can I import clients from Excel?",
        answer: "Yes. You can upload a CSV/Excel sheet and Duebit will instantly create client profiles in bulk."
    },
    {
        question: "What is “Export ZIP Pack”?",
        answer: "Duebit automatically organizes all client documents into a structured folder and generates a single downloadable ZIP file in one click."
    },
    {
        question: "How does Duebit track missing documents?",
        answer: "Each job has a checklist. Duebit automatically marks received files, shows pending docs, and highlights overdue follow-ups."
    },
    {
        question: "Is client data secure?",
        answer: "Yes. All data is securely stored, encrypted, and logged with an audit trail for every upload and reminder."
    }
];

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-white text-foreground font-sans selection:bg-red-500/20">
            <Navigation dark />

            <main className="pt-32 pb-24 relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-red-700/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">

                    {/* Header */}
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 mb-6 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-red-700 animate-pulse" />
                            <span className="text-xs font-bold text-red-700 tracking-wide uppercase">Flexible Plans</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal font-display mb-6 leading-tight text-slate-900 italic" style={{ fontFamily: "'Instrument Serif', serif" }}>
                            Simple, transparent pricing.
                        </h1>
                        <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest flex items-center justify-center gap-2 mb-2">
                            No setup fee • Cancel anytime • WhatsApp-first
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
                        {pricingPlans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`relative rounded-3xl p-8 border transition-all duration-300 flex flex-col ${plan.popular
                                    ? "bg-white border-red-700 shadow-[0_20px_40px_-10px_rgba(185,28,28,0.15)] scale-105 z-10"
                                    : "bg-slate-50 border-slate-200 hover:border-slate-300 hover:shadow-lg"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-700 text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                                    <p className="text-sm font-medium text-slate-700">{plan.tagline}</p>
                                    <p className="text-xs text-slate-500 mt-1">{plan.subline}</p>
                                </div>

                                <div className="flex items-baseline gap-1 mb-8">
                                    <span className="text-4xl font-bold text-slate-900 tracking-tight">{plan.price}</span>
                                    <span className="text-sm text-slate-500 font-medium">{plan.period}</span>
                                </div>

                                <div className="flex-1 space-y-4 mb-8">
                                    {plan.features.map((feature) => (
                                        <div key={feature} className="flex items-start gap-3 text-sm text-slate-600">
                                            <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? 'text-red-700' : 'text-slate-400'}`} />
                                            <span className="leading-snug">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    className={`w-full font-bold rounded-full h-12 ${plan.popular
                                        ? 'bg-red-800 hover:bg-red-900 text-white shadow-xl shadow-red-900/20'
                                        : 'bg-white text-slate-900 border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                                        }`}
                                    size="lg"
                                    asChild
                                >
                                    {plan.external ? (
                                        <a href={plan.link} target="_blank" rel="noopener noreferrer">{plan.cta}</a>
                                    ) : (
                                        <Link href={plan.link}>{plan.cta}</Link>
                                    )}
                                </Button>
                            </div>
                        ))}
                    </div>

                    {/* Secondary Conversion: Book a Demo */}
                    <div className="max-w-4xl mx-auto mb-32">
                        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-red-700/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-red-700/10 transition-colors duration-500"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-slate-900 mb-3">Not sure which plan fits?</h3>
                                find it or Book a 10-minute demo call and we’ll show you the exact workflow tailored for your firm.
                                <p className="text-slate-500 mb-8 max-w-xl mx-auto">
                                    Book a 10-minute demo call and we’ll show you the exact workflow tailored for your firm.
                                </p>
                                <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 px-8 rounded-full h-12 shadow-xl mb-6" asChild>
                                    <a href="https://calendly.com/duebit/demo" target="_blank" rel="noopener noreferrer">
                                        Book a Demo Call
                                    </a>
                                </Button>
                                <p className="text-sm font-medium text-slate-400 italic">
                                    Built for modern firms who value their time.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* FAQs */}
                    <div className="max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl font-bold font-display text-center mb-12 text-slate-900 italic" style={{ fontFamily: "'Instrument Serif', serif" }}>Frequently Asked Questions</h2>
                        <Accordion type="single" collapsible className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <AccordionItem key={idx} value={`item-${idx}`} className="border border-slate-200 rounded-2xl bg-white px-2 shadow-sm transition-all hover:border-slate-300">
                                    <AccordionTrigger className="hover:no-underline hover:text-red-700 transition-colors py-5 px-4 text-base font-semibold text-left text-slate-800">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-500 leading-relaxed pb-6 px-4 text-sm">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* Security Trust Strip */}
                    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 max-w-4xl mx-auto border-t border-slate-100 pt-10">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                            <Lock className="w-4 h-4 text-green-600" /> Encrypted Storage
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                            <FileText className="w-4 h-4 text-red-700" /> Audit Logs
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
                            <ShieldCheck className="w-4 h-4 text-slate-700" /> Secure Access
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
