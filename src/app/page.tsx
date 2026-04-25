import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Portfolio from "@/components/sections/Portfolio";
import Footer from "@/components/sections/Footer";
import Marquee from "@/components/ui/Marquee";

/**
 * Mike Kus Refactor - Final Integration
 * Order: Hero -> Marquee1 -> Manifesto -> Portfolio -> Marquee2 -> Footer
 */
export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      
      <Marquee text="KUALITAS ADALAH LINI TERDEPAN" />
      
      <Manifesto />
      
      <Portfolio />
      
      <Marquee text="KONSULTASI VIA WHATSAPP" />
      
      <Footer />
    </main>
  );
}
