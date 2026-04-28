import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

/**
 * Lini Karya - Final Lead-Driven Narrative Order
 * Hero -> Manifesto -> Services -> Portfolio -> Pricing -> FAQ -> Footer
 */
export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <Manifesto />
      <Services />
      <Portfolio />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
