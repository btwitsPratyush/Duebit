import { UserPlus, Briefcase, Zap, Upload, BarChart3, PackageCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: UserPlus,
    title: "Add Client",
    desc: "Import clients in bulk or add singly in seconds.",
    color: "bg-blue-500"
  },
  {
    icon: Briefcase,
    title: "Create Job",
    desc: "Select service type (GST, ITR) and assign team.",
    color: "bg-indigo-500"
  },
  {
    icon: Zap,
    title: "Auto-Action",
    desc: "Bot instantly sends the checklist via WhatsApp.",
    color: "bg-amber-500"
  },
  {
    icon: Upload,
    title: "Client Uploads",
    desc: "Client replies with docs directly on WhatsApp.",
    color: "bg-green-500"
  },
  {
    icon: BarChart3,
    title: "Live Tracking",
    desc: "Dashboard updates instantly as files arrive.",
    color: "bg-pink-500"
  },
  {
    icon: PackageCheck,
    title: "Job Done",
    desc: "Verify documents and export clean ZIP packs.",
    color: "bg-red-600"
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative z-10 px-6 py-24 bg-[#f6f6f7] overflow-hidden">
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 mb-6">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-xs font-bold text-red-700 tracking-wide uppercase">Workflow Engine</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 font-display leading-tight">
            From Chaos to <span className="text-red-700 italic">Autopilot.</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop chasing clients. Duebit handles the follow-ups, collection, and organization. You just do the work.
          </p>
        </div>

        <div className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Connecting Line (Desktop) - A subtle path behind cards */}
          <div className="hidden lg:block absolute top-[24%] left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-slate-200 -z-10" />
          <div className="hidden lg:block absolute top-[74%] left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-slate-200 -z-10" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative bg-white p-8 rounded-2xl border border-slate-100 hover:border-red-100 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300"
            >
              {/* Step Number */}
              <div className="absolute top-6 right-8 text-6xl font-bold text-slate-50 opacity-50 group-hover:text-red-50 transition-colors pointer-events-none font-display">
                0{idx + 1}
              </div>

              <div className={`w-14 h-14 rounded-xl ${step.color} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className={`w-7 h-7 ${step.color.replace("bg-", "text-")}`} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-700 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {step.desc}
              </p>

              {/* Active Indicator Line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
