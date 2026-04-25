import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Pricing from "@/components/sections/Pricing";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Pricing />
      <Footer />
    </>
  );
}
