import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";

/**
 * Example landing page using the Duebit Hero & Navigation implementation.
 * Use this as reference or replace Index page content with this structure.
 */
export default function LandingPageExample() {
  return (
    <div className="relative min-h-screen font-sans selection:bg-primary/20 selection:text-primary">
      <Navigation ctaLabel="Join Waitlist" ctaHref="/waitlist" />

      <main>
        <Hero
          title="Docs. Deadlines."
          subtitle="Done."
          description="The automated operating system for modern firms. Zero friction. 100% compliance."
          ctaLabel="Get Started"
          ctaHref="/waitlist"
        />
      </main>
    </div>
  );
}
