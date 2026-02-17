import { Briefcase, Gavel, Users2, Check } from "lucide-react";

const cases = [
  {
    title: "CA Firms",
    icon: Briefcase,
    color: "text-blue-600 bg-blue-50",
    items: ["GST Returns", "ITR Filing", "Tax Audits", "ROC Compliance"]
  },
  {
    title: "Law Firms",
    icon: Gavel,
    color: "text-amber-600 bg-amber-50",
    items: ["Court Filings", "Evidence Collect", "Case Org", "Client KYC"]
  },
  {
    title: "Consultants",
    icon: Users2,
    color: "text-emerald-600 bg-emerald-50",
    items: ["Onboarding", "Due Diligence", "Reports", "Agreements"]
  },
];

const UseCases = () => {
  return (
    <section className="relative z-10 py-24 bg-[#f6f6f7] border-y border-slate-100">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 font-display">
              Built for <span className="text-red-700">document-heavy</span> workflows.
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mb-10">
              Duebit adapts to your specific practice area.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <div key={i} className="group relative p-8 rounded-2xl bg-white border border-slate-100 hover:border-red-100 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300">

              <div className={`w-12 h-12 rounded-xl ${c.color} flex items-center justify-center mb-6`}>
                <c.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-6">{c.title}</h3>

              <div className="space-y-3">
                {c.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 group-hover:bg-red-50 group-hover:text-red-600 transition-colors">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
