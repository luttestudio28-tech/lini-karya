import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

const SITE_URL = "https://linikarya.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Lini Karya",
      inLanguage: "id-ID",
      publisher: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
      "@id": `${SITE_URL}/#business`,
      name: "Lini Karya Studio",
      description:
        "Studio arsitektur digital di Bandung yang membangun website premium dan ekosistem digital untuk UMKM Indonesia.",
      url: SITE_URL,
      email: "halo@linikarya.com",
      telephone: "+6285166635038",
      image: `${SITE_URL}/logo1.png`,
      logo: `${SITE_URL}/logo1.png`,
      priceRange: "Rp",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bandung",
        addressRegion: "Jawa Barat",
        addressCountry: "ID",
      },
      areaServed: { "@type": "Country", name: "Indonesia" },
      sameAs: ["https://www.instagram.com/linikaryastudio/"],
    },
  ],
};

/**
 * Lini Karya - Final Lead-Driven Narrative Order
 * Hero -> Manifesto -> Services -> Portfolio -> Pricing -> FAQ -> Footer
 */
export default function Home() {
  return (
    <main className="bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
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
