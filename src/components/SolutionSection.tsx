import { MessageSquare, ListChecks, LayoutDashboard } from "lucide-react";

const solutions = [
  {
    icon: MessageSquare,
    title: "WhatsApp-first client assistant",
    desc: "Meet clients where they already are. No portals, no apps — just WhatsApp.",
  },
  {
    icon: ListChecks,
    title: "Automatic checklists & reminders",
    desc: "Smart templates for every job type. Auto-reminders until docs are received.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard for tracking everything",
    desc: "One view for all clients, jobs, pending docs, and deadlines.",
  },
];

const SolutionSection = () => {
  return (
    <section className="relative z-10 px-6 py-24 bg-white transition-colors duration-300">
      <div className="container mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3 text-center">The Solution</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-16 max-w-2xl mx-auto">
          Duebit handles the chase for you
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <div key={s.title} className="bg-white backdrop-blur-sm rounded-xl p-7 transition-all duration-300 group hover:border-primary/50 border border-border relative overflow-hidden shadow-sm">
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-[hsl(var(--primary)/0.1)] transition-colors border border-border group-hover:border-primary/20 relative z-10">
                <s.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors relative z-10">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
