import { UserPlus, Briefcase, Zap, Upload, BarChart3, PackageCheck } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: UserPlus,
    title: "Add Client",
    desc: "Import clients in bulk or add singly in seconds.",
  },
  {
    icon: Briefcase,
    title: "Job Created Automatically",
    desc: "System identifies service type and sets target deadlines.",
  },
  {
    icon: Zap,
    title: "Required Documents Assigned",
    desc: "Checklist is auto-assigned based on service type.",
  },
  {
    icon: BarChart3,
    title: "Missing Documents Tracked",
    desc: "System detects what’s pending in real-time.",
    highlight: true
  },
  {
    icon: Upload,
    title: "Automatic Follow-ups Sent",
    desc: "Reminders are triggered until all docs are received.",
    highlight: true
  },
  {
    icon: PackageCheck,
    title: "Everything Ready for Filing",
    desc: "All documents organized and ready for submission.",
  },
];

const HowItWorks = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="how-it-works" className="relative z-10 py-20 md:py-[120px] bg-white overflow-hidden">
      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-bold text-primary tracking-wide uppercase">Workflow Engine</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-normal text-slate-900 mb-6 leading-tight italic" style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            From Chaos to <span className="text-primary italic">Autopilot.</span>
          </motion.h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-normal">
            Stop chasing clients. Duebit handles the follow-ups, collection, and organization. You just do the work.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className={`group relative bg-white p-8 rounded-[20px] border transition-all duration-300 flex flex-col items-center sm:items-start
                ${step.highlight
                  ? 'border-slate-300 shadow-sm ring-1 ring-slate-100'
                  : 'border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300
                ${step.highlight ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-[#111] group-hover:text-white'}`}>
                <step.icon className="w-5 h-5" />
              </div>

              <h3 className={`text-lg font-semibold mb-2 tracking-tight transition-colors
                ${step.highlight ? 'text-black' : 'text-[#111]'}`}>
                {step.title}
              </h3>
              <p className={`text-sm leading-relaxed font-normal transition-colors
                ${step.highlight ? 'text-slate-700' : 'text-slate-500'}`}>
                {step.desc}
              </p>

              {step.highlight && (
                <div className="absolute top-4 right-6">
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-50 border border-red-100 shadow-[0_0_10px_rgba(239,68,68,0.1)]">
                    <div className="w-1 h-1 rounded-full bg-red-600 animate-pulse" />
                    <span className="text-[8px] font-bold text-red-700 uppercase">Automation Active</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
