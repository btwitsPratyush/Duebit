import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "We used to chase clients for weeks to get bank statements. With Duebit, 80% of documents come in within 24 hours via WhatsApp.",
    name: "Rajesh Mehta",
    role: "Senior Partner, Mehta & Associates",
    firm: "CA Firm",
    metric: "Reduced follow-ups by 70%",
    initials: "RM",
    color: "bg-blue-100 text-blue-700"
  },
  {
    quote: "The automated reminders look personal and professional. My team saves 15 hours a week not calling clients for missing files.",
    name: "Sneha Kapoor",
    role: "Legal Consultant, FinLaw",
    firm: "Legal Consultant",
    metric: "Saved 15+ hours/week",
    initials: "SK",
    color: "bg-amber-100 text-amber-700"
  },
  {
    quote: "Finally, a tool that understands how Indian CA firms actually work. No portals, no friction. Clients love the simple WhatsApp integration.",
    name: "Amit Verma",
    role: "Chartered Accountant",
    firm: "Independent CA",
    metric: "100% Client Adoption",
    initials: "AV",
    color: "bg-green-100 text-green-700"
  },
];

const TestimonialSection = () => {
  return (
    <section id="testimonial-section" className="relative z-10 py-24 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3">Testimonials</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 font-display">
            Trusted by modern firms.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col bg-white p-8 rounded-2xl border border-slate-100 hover:border-red-100 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 transform hover:-translate-y-1">

              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded bg-white border border-slate-200 uppercase tracking-wide text-slate-500`}>
                  {t.firm}
                </span>
              </div>

              <blockquote className="text-slate-700 text-lg leading-relaxed mb-6 flex-1 italic">
                "{t.quote}"
              </blockquote>

              <div className="pt-6 border-t border-slate-200 mt-auto">
                <div className="bg-red-50 rounded-lg p-3 mb-4 inline-block">
                  <p className="text-xs font-bold text-red-700 uppercase tracking-wider">Result</p>
                  <p className="font-bold text-slate-900 text-sm mt-0.5">{t.metric}</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center font-bold text-sm shadow-sm`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
