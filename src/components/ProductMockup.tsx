import { Check, Clock, FileText, Download, MessageSquare } from "lucide-react";

const clients = [
  { name: "Sharma Industries", status: "3/5 docs", color: "text-yellow-400" },
  { name: "Kapoor & Associates", status: "Complete", color: "text-green-400" },
  { name: "Mehta Consultants", status: "1/4 docs", color: "text-primary" },
];

const docs = [
  { name: "PAN Card Copy", done: true },
  { name: "Bank Statement (6M)", done: true },
  { name: "GST Certificate", done: false },
  { name: "Form 16", done: false },
  { name: "Rent Agreement", done: true },
];

const ProductMockup = () => {
  return (
    <section className="relative z-10 px-6 pb-24">
      <div className="container mx-auto max-w-5xl">
        <div className="glass-card rounded-2xl overflow-hidden glow-red">
          {/* Top bar */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-border/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
              <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
            </div>
            <span className="text-xs text-muted-foreground ml-3">Duebit Dashboard</span>
          </div>

          <div className="grid md:grid-cols-3 gap-0">
            {/* Clients panel */}
            <div className="border-r border-border/50 p-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Clients</h4>
              <div className="space-y-3">
                {clients.map((c) => (
                  <div key={c.name} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                    <span className="text-sm text-foreground">{c.name}</span>
                    <span className={`text-xs font-medium ${c.color}`}>{c.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents checklist */}
            <div className="border-r border-border/50 p-5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">GST Filing — Docs</h4>
                <FileText className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="space-y-2">
                {docs.map((d) => (
                  <label key={d.name} className="flex items-center gap-3 p-2 rounded-md cursor-default">
                    <div className={`w-4 h-4 rounded border flex items-center justify-center ${d.done ? "bg-primary border-primary" : "border-muted-foreground/30"}`}>
                      {d.done && <Check className="w-3 h-3 text-primary-foreground" />}
                    </div>
                    <span className={`text-sm ${d.done ? "text-muted-foreground line-through" : "text-foreground"}`}>{d.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Status panel */}
            <div className="p-5 space-y-5">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">WhatsApp Status</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <MessageSquare className="w-4 h-4 text-green-400" />
                    <span className="text-muted-foreground">Reminder sent 2h ago</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-muted-foreground">Next follow-up: Tomorrow</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-[hsl(var(--primary)/0.1)] border border-primary/20 cursor-pointer hover:bg-primary/15 transition-colors">
                <Download className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Export Client Pack (.zip)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductMockup;
