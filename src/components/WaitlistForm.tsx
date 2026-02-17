import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, CheckCircle2, ArrowRight } from "lucide-react";

const WaitlistForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="waitlist" className="relative z-10 px-6 py-24">
      <div className="container mx-auto max-w-xl">
        <div className="glass-card rounded-2xl p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--primary)/0.1)] blur-[80px] -z-10" />

          <div className="text-center mb-10">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 font-display leading-tight">
              Get early access to Duebit
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
              Be the first to automate your practice. Join the waitlist for exclusive benefits.
            </p>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-12 animate-fade-in-up">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6 border border-green-500/20">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
              <p className="text-muted-foreground">
                Thanks — we'll reach out soon to onboard your firm.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/80 ml-1">Full Name</label>
                  <Input
                    id="name"
                    required
                    placeholder="Rahul Sharma"
                    className="bg-secondary/50 border-white/5 focus:border-primary/50 h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="firm" className="text-sm font-medium text-white/80 ml-1">Firm Name</label>
                  <Input
                    id="firm"
                    required
                    placeholder="Sharma & Associates"
                    className="bg-secondary/50 border-white/5 focus:border-primary/50 h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white/80 ml-1">Work Email</label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="rahul@firm.com"
                  className="bg-secondary/50 border-white/5 focus:border-primary/50 h-12"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-white/80 ml-1">Phone Number</label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="bg-secondary/50 border-white/5 focus:border-primary/50 h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="type" className="text-sm font-medium text-white/80 ml-1">Firm Type</label>
                  <Select required>
                    <SelectTrigger className="bg-secondary/50 border-white/5 focus:border-primary/50 h-12">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ca">CA Firm</SelectItem>
                      <SelectItem value="law">Law Firm</SelectItem>
                      <SelectItem value="consultant">Consultant</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-lg font-medium mt-6 shadow-[0_0_20px_-5px_rgba(239,68,68,0.4)] hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.6)] transition-all duration-300"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Joining...
                  </>
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground pt-4">
                No spam. Unsubscribe anytime. High volume of interest expected.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
