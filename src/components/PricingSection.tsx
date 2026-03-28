import * as React from "react";
import { Check, Lock, FileText, ShieldCheck, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { LiquidCtaButton } from "@/components/ui/LiquidCtaButton";
import { LiquidMetalBorder } from "@/components/ui/LiquidMetalBorder";

const pricingPlans = [
  {
    name: "Trial",
    phase: "Basic document tracking",
    description: "Try Duebit on a few real clients before committing",
    priceMonthly: "₹0",
    priceAnnual: "₹0",
    period: "/14 days",
    subtext: "No card required",
    features: [
      "Up to 10 Active Clients",
      "Standard Activity Logs",
      "Document Upload Links",
      "Missing Document Tracking",
    ],
    cta: "Start Free Trial",
    variant: "outline",
    popular: false,
    link: "https://cal.com/duebit-demo/30min",
    external: true
  },
  {
    name: "Core",
    phase: "Start automating your workflow",
    description: "Ideal for solo CA firms managing recurring work",
    priceMonthly: "₹1,499",
    priceAnnual: "₹1,250", // 14999 / 12
    annualTotal: "₹14,999/year",
    period: "/month",
    features: [
      "Up to 75 Active Clients",
      "1 Team Member included",
      "Basic dashboard insights",
      "Auto reminders for pending documents",
      "Basic compliance tracking",
      "Unlimited Workflow Templates",
    ],
    cta: "Get Started",
    variant: "outline",
    popular: false,
    link: "https://cal.com/duebit-demo/30min",
    external: true
  },
  {
    name: "Growth",
    phase: "Fully automated compliance system",
    description: "Best for growing CA firms handling higher volume",
    priceMonthly: "₹2,999",
    priceAnnual: "₹2,500", // 29999 / 12
    annualTotal: "₹29,999/year",
    period: "/month",
    features: [
      "Everything in Core",
      "Up to 200 Active Clients",
      "Handle 3–5x more clients without chaos",
      "Automated compliance tracking",
      "Priority alerts for due/at-risk jobs",
      "Real-time compliance insights",
      "Manage multiple clients at once",
    ],
    cta: "Choose Growth",
    variant: "default",
    popular: true,
    link: "https://cal.com/duebit-demo/30min",
    external: true
  },
  {
    name: "Scale",
    phase: "Run your firm at scale with full control",
    description: "For larger firms with multi-user workflows",
    priceMonthly: "₹4,999",
    priceAnnual: "₹4,167", // 49999 / 12
    annualTotal: "₹49,999/year",
    period: "/month",
    features: [
      "Everything in Growth",
      "Unlimited Active Clients",
      "Dedicated onboarding support",
      "Role-based access (Admin / Staff)",
      "Advanced audit logs",
      "Faster priority support",
      "Unlimited Team Members",
    ],
    cta: "Get Started",
    variant: "outline",
    popular: false,
    link: "https://cal.com/duebit-demo/30min",
    external: true
  },
];

const faqs = [
  {
    question: "Do clients need to install any app or log in?",
    answer: "No. Clients can upload documents through secure links, no app install or account setup required."
  },
  {
    question: "How do automatic follow-ups work?",
    answer: "Once you set a deadline, Duebit tracks what’s still missing and sends reminder emails based on your workflow. If the client uploads everything, the reminders stop automatically."
  },
  {
    question: "Is my client data safe?",
    answer: "Yes. Documents and activity are stored securely, with access limited to your firm and authorized team members."
  },
  {
    question: "Can I manage different types of filing (GST, ITR, Audit)?",
    answer: "Yes. You can create workflows for different compliance tasks and define the documents required for each one."
  },
  {
    question: "What happens after the 14-day trial?",
    answer: "At the end of the trial, you can choose a paid plan based on your firm size and continue without losing your data."
  },
  {
    question: "Can I upgrade later as my firm grows?",
    answer: "Yes. You can upgrade anytime as your client volume or team size increases."
  },
  {
    question: "Can my team use Duebit together?",
    answer: "Yes. Depending on your plan, you can add team members to manage workflows, upload documents, and track pending items together."
  }
];

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "annual">("monthly");

  return (
    <section id="pricing" className="relative z-10 py-20 md:py-[120px] bg-zinc-50 dark:bg-zinc-900/50 text-foreground font-sans overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold text-primary tracking-wide uppercase">Start Free • Scale Anytime</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal mb-8 leading-tight text-foreground italic" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Invest in your <span className="text-primary">firm’s focus.</span>
          </h2>

          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest flex items-center justify-center gap-2 mb-10">
            No setup fee • 14-day free trial on all plans • Cancel anytime
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-6 mb-16">
            <span className={`text-base font-bold transition-colors ${billingCycle === "monthly" ? "text-foreground" : "text-muted-foreground"}`}>Monthly Billing</span>
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
              className="relative w-16 h-8 bg-zinc-200 dark:bg-zinc-800 rounded-full p-1.5 transition-colors duration-300 focus:outline-none ring-1 ring-border shadow-inner"
            >
              <motion.div
                animate={{ x: billingCycle === "monthly" ? 0 : 32 }}
                className="w-5 h-5 bg-primary rounded-full shadow-lg"
              />
            </button>
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-start translate-y-1">
                <span className={`text-base font-bold leading-none transition-colors ${billingCycle === "annual" ? "text-foreground" : "text-muted-foreground"}`}>Annual Billing</span>
                <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest mt-1">Billed annually</span>
              </div>
              <span className="bg-primary/20 text-primary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-sm animate-bounce-subtle">
                Save 2 Months
              </span>
            </div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-20 md:mb-32">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl p-7 border transition-all duration-500 flex flex-col ${plan.popular
                ? "bg-background border-primary shadow-[0_30px_60px_-15px_rgba(120,252,214,0.35)] scale-[1.03] lg:scale-105 z-10 ring-1 ring-primary/30"
                : "bg-card border-border hover:border-primary/40 hover:shadow-2xl hover:-translate-y-2"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-black px-5 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-xl">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-1">{plan.name}</h3>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80 mb-4">{plan.phase}</p>
                <p className="text-[13px] font-medium text-muted-foreground leading-relaxed h-12">{plan.description}</p>
                <div className="relative h-[1px] w-full my-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-[2px] bg-primary/20 blur-[1px]" />
                </div>
                {plan.subtext && <p className="text-[11px] text-muted-foreground/60 font-medium">{plan.subtext}</p>}
                {plan.annualTotal && billingCycle === "annual" && (
                  <p className="text-[11px] text-primary font-bold">{plan.annualTotal}</p>
                )}
              </div>

              <div className="flex items-baseline gap-1 mb-10 overflow-hidden h-14">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={billingCycle + plan.name}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="text-5xl font-bold text-foreground tracking-tighter"
                  >
                    {billingCycle === "monthly" ? plan.priceMonthly : plan.priceAnnual}
                  </motion.span>
                </AnimatePresence>
                <span className="text-sm text-muted-foreground font-semibold">
                  {plan.name === "Trial" ? plan.period : plan.period}
                </span>
              </div>

              <div className="flex-1 space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? 'text-primary' : 'text-primary/50'}`} />
                    <span className="leading-tight text-[13px] font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                className={`w-full font-bold rounded-xl h-12 text-sm transition-all duration-300 ${plan.popular
                  ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 hover:scale-[1.02]'
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
          className="max-w-4xl mx-auto mb-20 md:mb-32"
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
                  Book a 30-minute demo call and we’ll show you the exact workflow tailored for your firm.
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
        <div className="max-w-4xl mx-auto mb-20 md:mb-32 px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-foreground italic mb-4" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Questions firms usually <span className="text-primary">ask before switching</span>
            </h2>
            <div className="h-1.5 w-16 bg-primary/20 mx-auto rounded-full" />
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="group border-none rounded-2xl bg-white dark:bg-zinc-900/50 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-0.5"
              >
                <AccordionTrigger className="hover:no-underline py-6 px-6 text-base font-bold text-left text-foreground/80 group-data-[state=open]:text-primary transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 px-10 text-[15px] font-medium border-t border-zinc-50 dark:border-zinc-800/50 pt-4">
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
            <ShieldCheck className="w-4 h-4 text-primary" /> Secure Access
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
