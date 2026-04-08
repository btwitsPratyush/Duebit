import { Briefcase, Gavel, Users2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const cases = [
  {
    title: "Compliance Workflows",
    icon: Briefcase,
    color: "text-red-700 bg-red-50",
    items: [
      "GST / ITR filings tracked end-to-end",
      "Documents collected and verified automatically",
      "Deadlines monitored without manual follow-ups",
      "Audit logs generated in real-time"
    ]
  },
  {
    title: "Case & Document Workflows",
    icon: Gavel,
    color: "text-slate-700 bg-slate-50",
    items: [
      "Case documents organized automatically",
      "Evidence and filings tracked centrally",
      "Client submissions collected without back-and-forth",
      "Status visibility across all active cases"
    ]
  },
  {
    title: "Client Operations",
    icon: Users2,
    color: "text-slate-700 bg-slate-50",
    items: [
      "Onboarding and document collection automated",
      "Due diligence workflows structured and tracked",
      "Client data centralized and always updated",
      "Reports generated without manual coordination"
    ]
  },
];

const UseCases = () => {
  return (
    <section className="relative z-10 py-20 md:py-[120px] bg-white">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold text-primary tracking-wide uppercase">Versatile</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal text-slate-900 mb-6 leading-tight italic" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Built for <span className="text-primary italic">operational workflows.</span> <br className="hidden sm:block" /> Not tools.
            </h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-10 leading-relaxed font-light">
              Duebit adapts to how your team actually works — across compliance, documentation, and operations.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div 
               key={i} 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1, duration: 0.5 }}
               whileHover={{ y: -4, transition: { duration: 0.2 } }}
               className="group relative p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 flex flex-col h-full"
            >
              <div className={`w-12 h-12 rounded-xl ${c.color} flex items-center justify-center mb-8 border border-slate-100 transition-colors duration-300 group-hover:bg-slate-900 group-hover:text-white`}>
                <c.icon className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-8 tracking-tight">{c.title}</h3>

              <div className="space-y-4 mb-10 flex-1">
                {c.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 flex-shrink-0 group-hover:bg-red-600 transition-colors" />
                    <span className="text-sm font-medium text-slate-500 group-hover:text-slate-900 transition-colors leading-relaxed">
                       {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-50 mt-auto">
                 <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-600 transition-colors cursor-default">
                    Auto-run workflows <ArrowRight className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform" />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
