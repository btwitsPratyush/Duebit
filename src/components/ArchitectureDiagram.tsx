import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

/* ───── Tooltip Data ───── */
const tooltips: Record<string, string> = {
    "dashboard": "Central command for all jobs, clients, and pending documents.",
    "job-creator": "Quickly create GST, ITR, or Audit tasks. Templates auto-assigned.",
    "checklists": "Standardized templates ensure zero missed documents.",
    "deadline": "Real-time countdown to every statutory due date.",
    "activity-log": "Immutable audit trail of every single interaction.",
    "engine": "The core brain orchestrating document flow between firm and client.",
    "wa-chat": "Client stays on WhatsApp. No portals, no logins required.",
    "wa-replies": "Client responses are captured and parsed automatically.",
    "wa-uploads": "Documents sent via WhatsApp are routed securely to storage.",
    "wa-status": "Clients see exactly what they've submitted and what's pending.",
    "wa-api": "Official WhatsApp Business API integration for reliable delivery.",
    "webhook": "Receives and processes every incoming event in real time.",
    "queue": "Redis + BullMQ for reliable async job processing and retries.",
    "scheduler": "Cron-based reminders that loop until all docs are received.",
    "email-service": "Reliable delivery via SendGrid or AWS SES for official correspondence.",
    "storage": "S3-compatible encrypted storage for all uploaded documents.",
    "database": "Postgres database tracking jobs, clients, and checklist state.",
    "zip-gen": "Generates audit-ready ZIP exports with full activity logs.",
    "client-email": "Client receives formal follow-ups and submission confirmations in their inbox.",
};

/* ───── Node Component ───── */
interface NodeCardProps {
    id: string;
    title: string;
    variant: "firm" | "client" | "engine" | "infra";
    icon?: React.ReactNode;
    subtitle?: string;
    delay?: number;
    tooltipPos?: "top" | "bottom";
}

const NodeCard = ({ id, title, variant, icon, subtitle, delay = 0, tooltipPos }: NodeCardProps) => {
    const [hovered, setHovered] = useState(false);
    const tooltip = tooltips[id];

    const baseClasses = "relative rounded-xl px-4 py-3 text-xs font-bold transition-all duration-300 cursor-default select-none overflow-visible";

    const variantClasses = {
        firm: `bg-white/80 backdrop-blur-md border border-slate-200 text-slate-700 shadow-sm hover:shadow-lg hover:border-[#9b2c2c]/30 hover:scale-[1.03]`,
        client: `bg-[#f0fdf4]/80 backdrop-blur-md border border-[#25D366]/20 text-[#15803d] shadow-sm hover:shadow-lg hover:border-[#25D366]/40 hover:scale-[1.03]`,
        engine: `bg-gradient-to-br from-[#9b2c2c] via-[#a83232] to-[#7f1d1d] text-white border border-[#b03030]/40 shadow-2xl shadow-[#9b2c2c]/30 hover:shadow-2xl hover:shadow-[#9b2c2c]/40 hover:scale-[1.05] px-8 py-5 text-sm`,
        infra: `bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-500 shadow-sm hover:shadow-md hover:border-slate-300 hover:scale-[1.03]`,
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={`${baseClasses} ${variantClasses[variant]}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="flex items-center gap-2">
                {icon}
                <div className="flex flex-col">
                    <span className={variant === "infra" ? "text-[10px] uppercase tracking-wider" : "text-xs"}>{title}</span>
                    {subtitle && <span className="text-[8px] font-medium opacity-60 mt-0.5 leading-none">{subtitle}</span>}
                </div>
            </div>

            {/* Floating tooltip for infra (top/bottom) */}
            {variant === 'infra' && tooltipPos && hovered && tooltip && (
                <motion.div
                    initial={{ opacity: 0, y: tooltipPos === 'top' ? -4 : 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`absolute z-50 left-0 w-48 px-3 py-2 rounded-lg bg-slate-900 text-white text-[10px] leading-snug shadow-xl pointer-events-none ${tooltipPos === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
                        }`}
                >
                    {tooltipPos === 'bottom' && <div className="absolute -top-1 left-4 w-2 h-2 bg-slate-900 rotate-45" />}
                    {tooltip}
                    {tooltipPos === 'top' && <div className="absolute -bottom-1 left-4 w-2 h-2 bg-slate-900 rotate-45" />}
                </motion.div>
            )}

            {/* Inline tooltip for firm/client only */}
            {variant !== 'infra' && variant !== 'engine' && (
                <AnimatePresence>
                    {hovered && tooltip && (
                        <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-[10px] font-normal leading-snug mt-1.5 opacity-70"
                        >
                            {tooltip}
                        </motion.p>
                    )}
                </AnimatePresence>
            )}

            {/* Pulse for engine */}
            {variant === "engine" && (
                <>
                    <div className="absolute -inset-2 rounded-2xl bg-[#9b2c2c]/10 animate-pulse pointer-events-none -z-10" style={{ animationDuration: "2.5s" }} />
                    <div className="absolute -inset-4 rounded-3xl bg-[#9b2c2c]/5 animate-pulse pointer-events-none -z-20" style={{ animationDuration: "4s" }} />
                </>
            )}
        </motion.div>
    );
};

/* ───── WhatsApp Icon ───── */
const WAIcon = () => (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#25D366] flex-shrink-0">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);

/* ───── SVG Icons for each node type ───── */
const DashIcon = () => <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-[#9b2c2c]" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="12" height="12" rx="2" /><line x1="2" y1="7" x2="14" y2="7" /><line x1="7" y1="7" x2="7" y2="14" /></svg>;
const JobIcon = () => <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-[#9b2c2c]" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 2h8l2 3v9a1 1 0 01-1 1H3a1 1 0 01-1-1V5l2-3z" /><line x1="5" y1="8" x2="11" y2="8" /><line x1="5" y1="11" x2="9" y2="11" /></svg>;
const CheckIcon = () => <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-[#9b2c2c]" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="12" height="12" rx="2" /><path d="M5 8l2 2 4-4" /></svg>;
const ClockIcon = () => <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-[#9b2c2c]" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="8" cy="8" r="6" /><path d="M8 4v4l3 2" /></svg>;
const LogIcon = () => <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-[#9b2c2c]" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 2h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2z" /><line x1="5" y1="6" x2="11" y2="6" /><line x1="5" y1="9" x2="11" y2="9" /><line x1="5" y1="12" x2="8" y2="12" /></svg>;
const MailIcon = () => (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-blue-500 fill-none stroke-current" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);

/* ── Specific infra icons ── */
const WAApiIcon = () => (
    <svg viewBox="0 0 24 24" className="w-3 h-3 fill-[#25D366]/60 flex-shrink-0">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);
const WebhookIcon = () => <svg viewBox="0 0 16 16" className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="8" cy="4" r="2" /><path d="M8 6v4" /><path d="M4 14l4-4 4 4" /></svg>;
const QueueIcon = () => <svg viewBox="0 0 16 16" className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="12" height="3" rx="1" /><rect x="2" y="8" width="12" height="3" rx="1" /><line x1="5" y1="4.5" x2="5" y2="4.5" strokeLinecap="round" strokeWidth="2" /><line x1="5" y1="9.5" x2="5" y2="9.5" strokeLinecap="round" strokeWidth="2" /></svg>;
const SchedulerIcon = () => <svg viewBox="0 0 16 16" className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="8" cy="8" r="6" /><path d="M8 4v4l2 2" /><path d="M12 2l1.5 1.5" /><path d="M4 2L2.5 3.5" /></svg>;
const StorageIcon = () => <svg viewBox="0 0 16 16" className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 4c0-1.1 2.7-2 6-2s6 .9 6 2" /><path d="M2 4v8c0 1.1 2.7 2 6 2s6-.9 6-2V4" /><path d="M2 8c0 1.1 2.7 2 6 2s6-.9 6-2" /></svg>;
const DBIcon = () => <svg viewBox="0 0 16 16" className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="8" cy="4" rx="5" ry="2" /><path d="M3 4v8c0 1.1 2.2 2 5 2s5-.9 5-2V4" /><path d="M3 8c0 1.1 2.2 2 5 2s5-.9 5-2" /></svg>;
const ZipIcon = () => <svg viewBox="0 0 16 16" className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 2h5l3 3v9a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1z" /><path d="M9 2v3h3" /><line x1="6" y1="8" x2="10" y2="8" /><line x1="6" y1="10" x2="10" y2="10" /><line x1="6" y1="12" x2="8" y2="12" /></svg>;

/* ───── Animated Flowing Dot ───── */
const FlowDot = ({ pathId, color = "#9b2c2c", duration = 3, delay = 0, size = 4 }: { pathId: string; color?: string; duration?: number; delay?: number; size?: number }) => (
    <circle r={size} fill={color} opacity="0.9">
        <animateMotion dur={`${duration}s`} begin={`${delay}s`} repeatCount="indefinite" rotate="auto">
            <mpath href={`#${pathId}`} />
        </animateMotion>
    </circle>
);

const FlowDotGlow = ({ pathId, color = "#9b2c2c", duration = 3, delay = 0 }: { pathId: string; color?: string; duration?: number; delay?: number }) => (
    <>
        <FlowDot pathId={pathId} color={color} duration={duration} delay={delay} size={3} />
        <circle r={8} fill={color} opacity="0.15">
            <animateMotion dur={`${duration}s`} begin={`${delay}s`} repeatCount="indefinite" rotate="auto">
                <mpath href={`#${pathId}`} />
            </animateMotion>
        </circle>
    </>
);

/* ───── Connection SVG Layer ───── */
const ConnectionsSVG = () => {
    const ref = useRef<SVGSVGElement>(null);
    const inView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <svg
            ref={ref}
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 700"
            preserveAspectRatio="none"
            style={{ zIndex: 0 }}
        >
            <defs>
                <marker id="arrowMaroon" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                    <path d="M0,0 L8,4 L0,8 Z" fill="#9b2c2c" opacity="0.4" />
                </marker>
                <marker id="arrowGreen" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                    <path d="M0,0 L8,4 L0,8 Z" fill="#25D366" opacity="0.4" />
                </marker>
                <marker id="arrowGold" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                    <path d="M0,0 L8,4 L0,8 Z" fill="#d97706" opacity="0.4" />
                </marker>
                <marker id="arrowBlue" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                    <path d="M0,0 L8,4 L0,8 Z" fill="#3b82f6" opacity="0.4" />
                </marker>
            </defs>

            {inView && (
                <g>
                    {/* ── FLOW 1: Firm Dashboard → Engine ── */}
                    <path id="path-firm-engine" d="M200,100 C350,100 400,280 500,300" fill="none" stroke="#9b2c2c" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.2" markerEnd="url(#arrowMaroon)">
                        <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" />
                    </path>
                    <FlowDotGlow pathId="path-firm-engine" color="#9b2c2c" duration={3} delay={0} />

                    {/* ── FLOW 2: Engine → WhatsApp API → Client Chat ── */}
                    <path id="path-engine-api" d="M520,330 C520,430 580,500 600,520" fill="none" stroke="#9b2c2c" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.2" markerEnd="url(#arrowMaroon)" />
                    <FlowDotGlow pathId="path-engine-api" color="#9b2c2c" duration={2.5} delay={1} />

                    <path id="path-api-client" d="M620,520 C700,500 750,350 800,150" fill="none" stroke="#25D366" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.2" markerEnd="url(#arrowGreen)" />
                    <FlowDotGlow pathId="path-api-client" color="#25D366" duration={3} delay={1.5} />

                    {/* ── FLOW 3: Client Upload → Webhook → DB → Dashboard  ── */}
                    <path id="path-client-webhook" d="M800,280 C750,400 600,500 480,540" fill="none" stroke="#25D366" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.15" markerEnd="url(#arrowGreen)" />
                    <FlowDotGlow pathId="path-client-webhook" color="#25D366" duration={3} delay={2} />

                    <path id="path-webhook-db" d="M470,540 C400,550 350,560 330,560" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 3" opacity="0.15" markerEnd="url(#arrowMaroon)" />
                    <FlowDotGlow pathId="path-webhook-db" color="#94a3b8" duration={2} delay={3} />

                    <path id="path-db-dashboard" d="M310,540 C250,480 200,350 200,280" fill="none" stroke="#9b2c2c" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.15" markerEnd="url(#arrowMaroon)" />
                    <FlowDotGlow pathId="path-db-dashboard" color="#9b2c2c" duration={3} delay={3.5} />

                    {/* ── FLOW 4: Reminder Loop ── */}
                    <path id="path-reminder" d="M180,580 C220,560 380,540 600,520" fill="none" stroke="#d97706" strokeWidth="1" strokeDasharray="4 4" opacity="0.15" />
                    <FlowDotGlow pathId="path-reminder" color="#d97706" duration={4} delay={2} />

                    {/* ── FLOW 5: Completion: Engine → ZIP → Dashboard ── */}
                    <path id="path-zip" d="M500,330 C450,400 400,500 700,580" fill="none" stroke="#d97706" strokeWidth="1" strokeDasharray="4 4" opacity="0.15" markerEnd="url(#arrowGold)" />
                    <FlowDotGlow pathId="path-zip" color="#d97706" duration={5} delay={4} />

                    {/* ── FLOW 6: Email Automation Reminders ── */}
                    <path id="path-rem-queue" d="M180,580 C300,580 400,540 450,540" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" opacity="0.15" markerEnd="url(#arrowBlue)" />
                    <FlowDotGlow pathId="path-rem-queue" color="#3b82f6" duration={3} delay={0} />

                    <path id="path-queue-email" d="M480,540 C550,580 600,600 650,600" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="4 4" opacity="0.15" markerEnd="url(#arrowBlue)" />
                    <FlowDotGlow pathId="path-queue-email" color="#3b82f6" duration={3} delay={1.5} />

                    <path id="path-email-inbox" d="M680,600 C750,550 800,450 850,450" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.2" markerEnd="url(#arrowBlue)" />
                    <FlowDotGlow pathId="path-email-inbox" color="#3b82f6" duration={4} delay={3} />
                </g>
            )}
        </svg>
    );
};

/* ───── Main Export ───── */
export const ArchitectureDiagram = () => {
    return (
        <div className="w-full relative">
            {/* Radial glow behind hub */}
            <div className="hidden lg:block absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#9b2c2c]/[0.04] rounded-full blur-[80px] pointer-events-none" />

            {/* SVG Connection Layer (Desktop only) */}
            <div className="hidden lg:block">
                <ConnectionsSVG />
            </div>

            {/* Node Layout */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[200px_1fr_200px] gap-6 lg:gap-10 items-start">

                {/* ── LEFT: FIRM SIDE ── */}
                <div className="flex flex-col gap-3">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[10px] font-bold text-[#9b2c2c]/60 uppercase tracking-[0.2em] mb-2 border-l-2 border-[#9b2c2c]/20 pl-3">
                        FIRM SIDE
                    </motion.div>
                    <NodeCard id="dashboard" title="Firm Dashboard" subtitle="CA • Tax • Legal" variant="firm" icon={<DashIcon />} delay={0.1} />
                    <NodeCard id="job-creator" title="Job Creator (GST/ITR/Audit/Legal)" variant="firm" icon={<JobIcon />} delay={0.2} />
                    <NodeCard id="checklists" title="Checklist Templates" variant="firm" icon={<CheckIcon />} delay={0.3} />
                    <NodeCard id="deadline" title="Deadline Tracker" variant="firm" icon={<ClockIcon />} delay={0.4} />
                    <NodeCard id="activity-log" title="Activity Log Viewer" variant="firm" icon={<LogIcon />} delay={0.5} />
                </div>

                {/* ── CENTER: ENGINE + INFRA ── */}
                <div className="flex flex-col items-center gap-8 py-6 lg:py-16">
                    {/* Connection hint arrows on mobile */}
                    <div className="block lg:hidden text-xs text-slate-400 text-center italic mb-2">
                        ↓ sends job data ↓
                    </div>

                    {/* Engine Hub — bigger + glow */}
                    <div className="relative">
                        <NodeCard id="engine" title="Duebit Workflow Engine" variant="engine" delay={0.3} />
                    </div>

                    {/* Mobile flow hint */}
                    <div className="block lg:hidden text-xs text-slate-400 text-center italic">
                        ↓ sends WhatsApp message ↓
                    </div>

                    {/* Infra Layer */}
                    <div className="w-full">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6 }} className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.25em] text-center mb-3">
                            System Layer
                        </motion.div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                            <NodeCard id="wa-api" title="WhatsApp API" variant="infra" icon={<WAApiIcon />} delay={0.7} tooltipPos="top" />
                            <NodeCard id="webhook" title="Webhook Listener" variant="infra" icon={<WebhookIcon />} delay={0.8} tooltipPos="top" />
                            <NodeCard id="queue" title="Queue Worker" variant="infra" icon={<QueueIcon />} delay={0.9} tooltipPos="top" />
                            <NodeCard
                                id="scheduler"
                                title="Reminder Scheduler"
                                subtitle="WhatsApp + Email follow-ups"
                                variant="infra"
                                icon={<SchedulerIcon />}
                                delay={1.0}
                                tooltipPos="top"
                            />
                            <NodeCard id="email-service" title="Email Service (SendGrid/AWS)" variant="infra" icon={<MailIcon />} delay={1.1} tooltipPos="top" />
                            <NodeCard id="storage" title="Secure Storage (S3)" variant="infra" icon={<StorageIcon />} delay={1.2} tooltipPos="bottom" />
                            <NodeCard id="database" title="Database (Postgres)" variant="infra" icon={<DBIcon />} delay={1.3} tooltipPos="bottom" />
                            <NodeCard id="zip-gen" title="ZIP Export Generator" variant="infra" icon={<ZipIcon />} delay={1.4} tooltipPos="bottom" />
                        </div>
                    </div>
                </div>

                {/* ── RIGHT: CLIENT SIDE ── */}
                <div className="flex flex-col gap-3">
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[10px] font-bold text-[#25D366]/60 uppercase tracking-[0.2em] mb-2 border-l-2 border-[#25D366]/20 pl-3">
                        Client (WhatsApp)
                    </motion.div>
                    <NodeCard id="wa-chat" title="WhatsApp Chat" variant="client" icon={<WAIcon />} delay={0.2} />
                    <NodeCard id="wa-replies" title="Client Replies" variant="client" delay={0.3} />
                    <NodeCard id="wa-uploads" title="Document Uploads" variant="client" delay={0.4} />
                    <NodeCard id="wa-status" title="Pending Docs Status" variant="client" delay={0.5} />
                    <div className="mt-4 pt-4 border-t border-slate-100">
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-[10px] font-bold text-blue-500/60 uppercase tracking-[0.2em] mb-2 border-l-2 border-blue-500/20 pl-3">
                            Fallback Channel
                        </motion.div>
                        <NodeCard id="client-email" title="Client Email Inbox" variant="client" icon={<MailIcon />} delay={0.6} />
                    </div>
                </div>
            </div>

            {/* Footer Text */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 }}
                className="text-center text-sm text-muted-foreground italic mt-10 font-medium"
            >
                Built for document-heavy firms. Designed to eliminate follow-up chaos.
            </motion.p>
        </div>
    );
};
