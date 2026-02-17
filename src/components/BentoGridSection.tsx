
import {
    Bell,
    ShieldCheck,
    Calendar,
    MessageSquare,
    FileText,
    Zap
} from "lucide-react";

interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ElementType;
    className?: string;
}

const FeatureCard = ({ title, description, icon: Icon, className = "" }: FeatureCardProps) => (
    <div className={`group relative overflow-hidden rounded-3xl bg-white border border-border p-8 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 flex flex-col h-full">
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 group-hover:bg-[hsl(var(--primary)/0.1)] group-hover:border-primary/20 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight font-display">{title}</h3>
            <p className="text-muted-foreground leading-relaxed font-light">{description}</p>
        </div>
    </div>
);

const BentoGridSection = () => {
    return (
        <section className="relative py-24 bg-white overflow-hidden select-none">
            {/* Ambient Background Glow matching the requested style */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display tracking-tight leading-tight">
                        Everything you need to run a <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-600">
                            High-Perfomance Firm
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
                        Replace manual chaos with a unified operating system designed specifically for modern CA and legal practices.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
                    {/* Large Card 1 */}
                    <FeatureCard
                        title="Automated Follow-ups"
                        description="Stop chasing clients. Duebit automatically sends polite, recurring reminders on WhatsApp & Email until documents are received."
                        icon={Bell}
                        className="md:col-span-4 min-h-[320px]"
                    />

                    {/* Small Card 2 */}
                    <FeatureCard
                        title="Bank-Grade Security"
                        description="256-bit encryption for all client data. Your firm's reputation is our top priority."
                        icon={ShieldCheck}
                        className="md:col-span-2"
                    />

                    {/* Small Card 3 */}
                    <FeatureCard
                        title="Deadline Radar"
                        description="Never miss a compliance date. Smart alerts for GST, ITR, and ROC filings."
                        icon={Calendar}
                        className="md:col-span-2"
                    />

                    {/* Large Card 4 */}
                    <FeatureCard
                        title="WhatsApp Integration"
                        description="Collect documents directly from WhatsApp. No more 'sent on email' confusion. Everything syncs to one secure dashboard."
                        icon={MessageSquare}
                        className="md:col-span-4 min-h-[320px]"
                    />

                    {/* Medium Card 5 */}
                    <FeatureCard
                        title="Smart Document Organization"
                        description="AI automatically renames and sorts files into client folders."
                        icon={FileText}
                        className="md:col-span-3"
                    />

                    {/* Medium Card 6 */}
                    <FeatureCard
                        title="Instant Client Portal"
                        description="Give clients a professional, branded portal to view their status."
                        icon={Zap}
                        className="md:col-span-3"
                    />
                </div>
            </div>
        </section>
    );
};

export default BentoGridSection;
