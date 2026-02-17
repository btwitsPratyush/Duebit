const SocialProofStrip = () => {
  return (
    <section className="relative z-10 py-8 sm:py-10 border-y border-border/60 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto max-w-5xl px-6">
        <p className="text-center text-sm font-medium text-muted-foreground mb-4 uppercase tracking-widest">
          Trusted by CA & law firms across India
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
          {/* Placeholder logos – replace with real partner/customer logos when you have them */}
          {["CA Firms", "Law Firms", "Consultancies"].map((label) => (
            <div
              key={label}
              className="text-lg font-semibold text-foreground/60 tracking-tight"
            >
              {label}
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-4 font-medium">
          Join 100+ firms automating document workflows
        </p>
      </div>
    </section>
  );
};

export default SocialProofStrip;
