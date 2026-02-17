import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, FileText, Lock, ChevronDown, ChevronUp, Star } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const plans = [
  {
    name: "Starter",
    tagline: "For solo CA/Law practitioners getting started.",
    price: "₹799",
    period: "/month",
    features: [
      "Up to 20 Active Clients",
      "Automated WhatsApp Doc Collection",
      "Basic Checklists",
      "Email Support",
      "Secure Storage"
    ],
    popular: false,
    cta: "Get Started",
    link: "#waitlist",
  },
  {
    name: "Professional",
    tagline: "Built for busy CA & Law teams managing 50+ clients.",
    price: "₹1,499",
    period: "/month",
    features: [
      "Automated WhatsApp Doc Collection",
      "Smart Checklist Templates (GST/ITR)",
      "Auto Follow-ups & Reminders",
      "Deadline Tracking + Alerts",
      "One-click Export ZIP Pack",
      "Audit-ready Activity Log",
      "Team Access (3 Users)"
    ],
    popular: true,
    cta: "Get Started",
    link: "#waitlist",
    recommended: "Recommended for most firms"
  },
  {
    name: "Enterprise",
    tagline: "For large firms needing advanced security & flows.",
    price: "Custom",
    period: "",
    features: [
      "Unlimited Clients",
      "Custom Checklist Workflows",
      "Dedicated Onboarding",
      "Role-based Access Control",
      "White-label Client Portal",
      "Priority Support",
      "On-premise Option"
    ],
    popular: false,
    cta: "Book a Call",
    link: "https://calendly.com/duebit/demo",
  },
];

const faqs = [
  {
    q: "Do clients need to install any app?",
    a: "No. Clients stay inside WhatsApp. They simply upload documents in their favorite chat app. Your team tracks everything inside Duebit."
  },
  {
    q: "Does Duebit work with WhatsApp Business API?",
    a: "Yes. Duebit integrates with WhatsApp Business API to send checklists, reminders, and follow-ups automatically securely."
  },
  {
    q: "Can I import clients from Excel?",
    a: "Yes. You can upload a CSV/Excel sheet and Duebit will instantly create client profiles and initiate workflows in bulk."
  },
  {
    q: "What is “Export ZIP Pack”?",
    a: "Duebit automatically organizes all client documents into a structured folder and generates a single downloadable ZIP file in one click."
  },
  {
    q: "Is client data secure?",
    a: "Yes. All data is encrypted (AES-256) at rest and in transit. We maintain strictly logged audit trails for every action."
  }
];

const PricingSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="pricing" className="relative z-10 py-32 bg-slate-50 overflow-hidden">
      {/* Subtle Wine Gradient Background - Increased visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-[#8B1E2D]/[0.08] to-slate-50 pointer-events-none" />

      {/* Grain Overlay - Increased visibility */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

      <div className="container mx-auto max-w-6xl px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-red-700 mb-3">Pricing</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 font-display">
            Simple, transparent pricing.
          </h2>
          <p className="text-slate-500 font-medium flex items-center justify-center gap-3 text-sm sm:text-base">
            <span>No setup fee</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>Cancel anytime</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>WhatsApp-first onboarding</span>
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24 max-w-5xl mx-auto items-start">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${plan.popular
                ? "bg-white border-2 border-red-700 shadow-2xl shadow-red-900/10 z-10"
                : "bg-white border border-slate-200 shadow-sm hover:border-red-100 hover:shadow-xl hover:shadow-red-900/5"
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-red-600 rounded-full blur opacity-40 group-hover:opacity-60 transition duration-500 animate-pulse" />
                    <div className="relative px-4 py-1.5 bg-red-700 text-white text-[11px] font-bold uppercase tracking-widest rounded-full border border-red-500 shadow-sm flex items-center gap-1.5">
                      <Star className="w-3 h-3 fill-white" /> Most Popular
                    </div>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-500 leading-snug min-h-[40px]">{plan.tagline}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-slate-900 tracking-tight">{plan.price}</span>
                <span className="text-slate-500 text-sm font-medium">{plan.period}</span>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {plan.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm group">
                    <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-500 group-hover:text-red-600 group-hover:bg-red-50 transition-colors'}`}>
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className="text-slate-700 font-medium">{f}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <Button
                  size="lg"
                  className={`w-full font-bold h-12 rounded-xl transition-all duration-300 relative overflow-hidden group ${plan.popular
                    ? 'bg-red-800 hover:bg-red-900 text-white shadow-lg shadow-red-900/20 hover:shadow-red-900/30'
                    : 'bg-white border-2 border-slate-100 text-slate-700 hover:border-red-200 hover:text-red-700 hover:bg-red-50'
                    }`}
                  asChild
                >
                  <a href={plan.link}>
                    <span className="relative z-10">{plan.cta}</span>
                    {/* Subtle Shine Effect for Popular Button */}
                    {plan.popular && (
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                    )}
                  </a>
                </Button>
                {plan.recommended && (
                  <p className="text-center text-[10px] items-center justify-center font-bold uppercase tracking-wide text-red-700 mt-3 flex gap-1.5 opacity-80">
                    <ShieldCheck className="w-3 h-3" /> {plan.recommended}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-24 opacity-60"
        >
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
            <ShieldCheck className="w-4 h-4" /> Trusted by CA & Law Firms
          </div>
        </motion.div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-slate-900 mb-10 font-display">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={false}
                className="border border-slate-200 rounded-2xl bg-white overflow-hidden hover:border-slate-300 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none bg-white"
                >
                  <span className="font-bold text-slate-900 text-base pr-8">{faq.q}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-red-700 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
