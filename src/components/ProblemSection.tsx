import { AlertTriangle, Clock, MessageSquareX } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Hours lost chasing documents",
    desc: "Your team spends 40% of their time on client follow-ups instead of actual work.",
  },
  {
    icon: AlertTriangle,
    title: "Deadlines get missed",
    desc: "Without automated tracking, critical filing dates slip through the cracks.",
  },
  {
    icon: MessageSquareX,
    title: "Files lost in WhatsApp",
    desc: "Documents are scattered across chats with no organization or audit trail.",
  },
];

const ProblemSection = () => {
  return (
    <section className="relative z-10 px-6 py-24 bg-white transition-colors duration-300">
      <div className="container mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 text-center">The Problem</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-16 max-w-2xl mx-auto">
          Your team is stuck in manual mode
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div key={p.title} className="bg-white backdrop-blur-sm rounded-xl p-7 transition-all duration-300 border border-border shadow-sm">
              <p.icon className="w-8 h-8 text-primary mb-5" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
