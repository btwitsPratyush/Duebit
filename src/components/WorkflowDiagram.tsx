import {
    UserPlus,
    ListTodo,
    MessageSquareShare,
    UploadCloud,
    SearchCheck,
    BellRing,
    LayoutDashboard,
    FileArchive,
    ArrowRight
} from "lucide-react";

const steps = [
    { icon: UserPlus, title: "Add Client", desc: "Create new job" },
    { icon: ListTodo, title: "Checklist", desc: "Auto-generated" },
    { icon: MessageSquareShare, title: "WhatsApp", desc: "Sent to client" },
    { icon: UploadCloud, title: "Upload", desc: "Client attaches file" },
    { icon: SearchCheck, title: "Tracking", desc: "Auto verify" },
    { icon: BellRing, title: "Reminders", desc: "Auto follow-up" },
    { icon: LayoutDashboard, title: "Dashboard", desc: "Live updates" },
    { icon: FileArchive, title: "Export", desc: "One-click ZIP" },
];

const technicalLayers = [
    "WhatsApp Business API", "Secure Storage Layer", "Reminder Engine", "Compliance Tracker", "Audit Log System"
];

const WorkflowDiagram = () => {
    return (
        <section id="how-it-works" className="relative z-10 px-6 py-24 border-b border-primary/10 bg-brand-deep/20">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-20">
                    <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">System Architecture</p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-6">
                        How Duebit Works
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A complete end-to-end automated workflow engine.
                    </p>
                </div>

                {/* Workflow Architecture Diagram */}
                <div className="relative">
                    {/* Main Flow Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[2.5rem] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent z-0" />

                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className="w-20 h-20 rounded-2xl bg-brand-deep-dark border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-105 group-hover:border-primary/50 transition-all duration-300 shadow-xl relative z-10">
                                    <step.icon className="w-8 h-8 text-primary/80 group-hover:text-primary transition-colors" />

                                    {/* Step Number Badge */}
                                    <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-brand-deep-mid border border-primary/20 flex items-center justify-center text-[10px] text-white font-bold shadow-lg">
                                        {index + 1}
                                    </div>
                                </div>

                                <h3 className="text-sm font-bold text-foreground mb-2">{step.title}</h3>
                                <p className="text-xs text-muted-foreground leading-tight px-1">{step.desc}</p>

                                {/* Arrow for mobile flow */}
                                {index < steps.length - 1 && (
                                    <div className="lg:hidden mt-6 text-muted-foreground/30 rotate-90 md:rotate-0">
                                        <ArrowRight className="w-5 h-5 mx-auto" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* System Labels (Architecture Layers) */}
                <div className="mt-20 pt-10 border-t border-primary/10 flex flex-wrap justify-center gap-4 sm:gap-8 opacity-60">
                    {technicalLayers.map((layer, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                            {layer}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkflowDiagram;
