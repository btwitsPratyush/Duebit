import * as React from "react";
import { Check, Lock, FileText, ShieldCheck, RefreshCw, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LiquidCtaButton } from "@/components/ui/LiquidCtaButton";
import { LiquidMetalBorder } from "@/components/ui/LiquidMetalBorder";

const pricingPlans = [
  {
    name: "Pilot Plan",
    price: "₹1,499",
    period: "/month",
    tagline: "For early firms automating client follow-ups.",
    subline: "Ideal for starting professional automation.",
    features: [
      "Up to 25 Active Clients",
      "Basic Job & Checklist Automation",
      "Document Upload Links (No login required)",
      "Email Reminders",
      "Secure Document Storage",
      "Activity Tracking Logs",
    ],
    cta: "Get Started",
    variant: "outline",
    popular: false,
    link: "https://cal.com/duebit-demo/30min",
    external: true
  },
  {
    name: "Growing Firm",
    price: "₹2,999",
    period: "/month",
    tagline: "For firms handling multiple active workflows.",
    subline: "Best for professional firms at scale.",
    features: [
      "Unlimited Clients",
      "Automated Job Creation + Smart Checklists",
      "Missing Document Tracking",
      "Auto Follow-ups (Email-based)",
      "Deadline Tracking & Alerts",
      "Real-time Status Dashboard",
      "Audit-ready Activity Logs",
      "One-click Export (ZIP + Logs)",
      "Team Access (Up to 5 users)",
    ],
    cta: "Get Started",
    variant: "default",
    popular: true,
    link: "https://cal.com/duebit-demo/30min",
    external: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    tagline: "For larger teams and custom workflow setups.",
    subline: "Advanced security & bespoke automation.",
    features: [
      "Unlimited Clients & Workflows",
      "Custom Workflow Automation",
      "Role-based Access Control",
      "Advanced Audit Logs & Reporting",
      "Dedicated Onboarding",
      "Priority Support",
      "Custom Integrations",
      "Data Residency Options",
    ],
    cta: "Book Demo",
    variant: "outline",
    popular: false,
    link: "https://cal.com/duebit-demo/30min",
    external: true
  },
];

const faqs = [
  {
    question: "Do clients need to install any app?",
    answer: "No. Clients receive a secure upload link via email and can upload documents directly without logging in."
  },
  {
    question: "How does Duebit collect documents?",
    answer: "Duebit automatically generates a checklist and sends secure upload links to clients. It tracks missing documents and follows up until everything is received."
  },
  {
    question: "How are follow-ups automated?",
    answer: "The system continuously tracks missing items and sends scheduled reminders automatically until documents are submitted."
  },
  {
    question: "Can I track client progress?",
    answer: "Yes. You get a real-time dashboard showing document status, pending items, and job progress across all clients."
  },
  {
    question: "What is included in the export ZIP pack?",
    answer: "A complete package of all documents along with audit-ready activity logs for compliance and reporting."
  },
  {
    question: "Is client data secure?",
    answer: "Yes. All data is encrypted and every action is logged for full audit visibility."
  },
  {
    question: "Can I use Duebit for different workflows?",
    answer: "Yes. Duebit supports GST, ITR, audits, legal work, onboarding, and other document-heavy workflows."
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative z-10 py-24 md:py-32 bg-zinc-50 dark:bg-zinc-900/50 text-foreground font-sans overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold text-primary tracking-wide uppercase">Flexible Plans</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal mb-6 leading-tight text-foreground italic" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Simple, transparent pricing.
          </h2>
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest flex items-center justify-center gap-2 mb-2">
            No setup fee • Cancel anytime • Built for compliance workflows
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl p-8 border transition-all duration-300 flex flex-col ${plan.popular
                ? "bg-background border-primary shadow-[0_20px_40px_-10px_rgba(120,252,214,0.15)] scale-105 z-10"
                : "bg-card border-border hover:border-primary/50 hover:shadow-lg"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm font-medium text-muted-foreground">{plan.tagline}</p>
                <p className="text-xs text-muted-foreground/60 mt-1">{plan.subline}</p>
              </div>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-bold text-foreground tracking-tight">{plan.price}</span>
                <span className="text-sm text-muted-foreground font-medium">{plan.period}</span>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? 'text-primary' : 'text-muted-foreground/40'}`} />
                    <span className="leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full font-bold rounded-full h-12 ${plan.popular
                  ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20'
                  : 'bg-transparent text-foreground border-2 border-border hover:border-primary/50 hover:bg-primary/5'
                  }`}
                size="lg"
                asChild
              >
                {plan.external ? (
                  <a href={plan.link} target="_blank" rel="noopener noreferrer">{plan.cta}</a>
                ) : (
                  <Link to={plan.link}>{plan.cta}</Link>
                )}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Secondary Conversion: Book a Demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-32"
        >
          <LiquidMetalBorder
            theme="dark"
            backgroundColor="#050505"
            borderRadius={48}
            borderWidth={1.5}
            speed={0.6}
            scale={1.5}
            colorTint="#EF4444"
            className="flex w-full shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
          >
            {/* The Actual Card Surface */}
            <div className="flex-1 w-full p-12 md:p-16 text-center relative overflow-hidden flex flex-col items-center">

              {/* Dynamic Background Glows - covering more area */}
              <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[80%] bg-red-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
              <div className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[80%] bg-red-900/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

              {/* Tech Grid Overlay - absolute inset-0 to cover the whole surface inside the border */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
              {/* Central radial fade for the grid */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,#050505_100%)] pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center w-full">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-red-500 animate-spin-slow" />
                  <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.4em]">Personalized Review</span>
                </motion.div>

                <h3 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight italic" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  Not sure which plan fits?
                </h3>
                <p className="text-slate-400 mb-12 max-w-xl mx-auto text-lg font-light leading-relaxed">
                  Book a 10-minute demo call and we’ll show you the exact workflow tailored for your firm.
                </p>

                <div className="flex flex-col items-center gap-8 w-full mt-auto">
                  <a href="https://cal.com/duebit-demo/30min" target="_blank" rel="noopener noreferrer">
                    <LiquidCtaButton theme="dark" showArrow={false} backgroundColor="#000000">
                      Book Demo
                    </LiquidCtaButton>
                  </a>

                  <div className="flex flex-col items-center gap-2 opacity-30">
                    <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
                    <p className="text-[9px] font-bold text-white uppercase tracking-[0.8em]">
                      Precision Engineering
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </LiquidMetalBorder>
        </motion.div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground italic" style={{ fontFamily: "'Instrument Serif', serif" }}>Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border border-border rounded-2xl bg-card px-2 shadow-sm transition-all hover:border-primary/30">
                <AccordionTrigger className="hover:no-underline hover:text-primary transition-colors py-5 px-4 text-base font-semibold text-left text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 px-4 text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Security Trust Strip */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 max-w-4xl mx-auto border-t border-border pt-10">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            <Lock className="w-4 h-4 text-primary" /> Encrypted Storage
          </div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            <FileText className="w-4 h-4 text-primary" /> Audit Logs
          </div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
            <ShieldCheck className="w-4 h-4 text-primary" /> Secure Access
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
