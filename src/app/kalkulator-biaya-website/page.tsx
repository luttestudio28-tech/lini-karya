import type { Metadata } from "next";
import Link from "next/link";
import CostCalculator from "@/components/tools/CostCalculator";
import Footer from "@/components/sections/Footer";

const url = "https://linikarya.com/kalkulator-biaya-website";

export const metadata: Metadata = {
  title: { absolute: "Kalkulator Biaya Pembuatan Website 2026 (Gratis) | Lini Karya" },
  description:
    "Hitung estimasi biaya pembuatan website Anda secara gratis & instan. Pilih jenis web dan fitur, langsung dapat perkiraan harga. Tanpa perlu daftar.",
  keywords: [
    "kalkulator biaya website",
    "estimasi harga website",
    "biaya pembuatan website",
    "harga bikin website",
    "kalkulator harga website",
  ],
  alternates: { canonical: "/kalkulator-biaya-website" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url,
    title: "Kalkulator Biaya Pembuatan Website 2026 (Gratis)",
    description:
      "Hitung estimasi biaya website Anda secara instan. Pilih jenis & fitur, langsung lihat perkiraan harganya.",
    siteName: "Lini Karya",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalkulator Biaya Pembuatan Website 2026 (Gratis)",
    description:
      "Hitung estimasi biaya website Anda secara instan. Pilih jenis & fitur, langsung lihat perkiraan harganya.",
  },
};

const faqs = [
  {
    q: "Apakah kalkulator ini gratis?",
    a: "Ya, 100% gratis dan tanpa perlu mendaftar. Anda bisa langsung menghitung estimasi biaya website kapan saja.",
  },
  {
    q: "Apakah hasil estimasinya harga final?",
    a: "Estimasi ini adalah perkiraan awal untuk memberi gambaran. Harga pasti ditentukan setelah konsultasi gratis, menyesuaikan detail kebutuhan spesifik bisnis Anda.",
  },
  {
    q: "Apakah harga sudah termasuk domain dan hosting?",
    a: "Ya. Semua estimasi kami sudah mencakup domain dan hosting kencang untuk tahun pertama, sehingga Anda tinggal terima beres.",
  },
  {
    q: "Bagaimana jika kebutuhan saya tidak ada di pilihan fitur?",
    a: "Tidak masalah. Pilih yang paling mendekati, lalu hubungi kami via WhatsApp. Kami fleksibel membangun fitur khusus sesuai kebutuhan unik bisnis Anda.",
  },
];

export default function CalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Kalkulator Biaya Website Lini Karya",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url,
        offers: { "@type": "Offer", price: "0", priceCurrency: "IDR" },
        provider: {
          "@type": "ProfessionalService",
          name: "Lini Karya Studio",
          url: "https://linikarya.com",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Beranda",
            item: "https://linikarya.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Kalkulator Biaya Website",
            item: url,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <main className="bg-background">
        {/* HERO */}
        <section className="px-container pt-32 pb-16 border-b border-foreground/10">
          <div className="max-w-[1400px] mx-auto">
            <nav
              aria-label="Breadcrumb"
              className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-10 flex gap-3"
            >
              <Link href="/" className="hover:text-accent transition-colors">
                Beranda
              </Link>
              <span>/</span>
              <span className="text-accent">Kalkulator Biaya</span>
            </nav>

            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block mb-8 font-bold">
              Alat Gratis
            </span>
            <h1 className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.8] tracking-[-0.04em] uppercase">
              Kalkulator <br />
              <span className="text-accent italic">Biaya Website</span>
            </h1>
            <p className="mt-10 font-mono text-sm md:text-base leading-relaxed text-foreground/60 max-w-2xl">
              Bingung berapa biaya membuat website untuk bisnis Anda? Pilih jenis
              website dan fitur yang Anda butuhkan, lalu lihat estimasi harganya
              secara instan. Gratis, tanpa perlu mendaftar.
            </p>
          </div>
        </section>

        {/* KALKULATOR */}
        <section className="px-container py-16 md:py-24 border-b border-foreground/10">
          <div className="max-w-[1400px] mx-auto">
            <CostCalculator />
          </div>
        </section>

        {/* FAQ */}
        <section className="px-container py-24 md:py-32 border-b border-foreground/10">
          <div className="max-w-[1400px] mx-auto">
            <div className="mb-20 md:mb-28">
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block mb-8 font-bold">
                Pertanyaan Umum
              </span>
              <h2 className="font-display text-[clamp(3rem,8vw,7rem)] uppercase tracking-tighter leading-[0.8]">
                Tanya &amp; <span className="text-accent italic">Jawab</span>
              </h2>
            </div>
            <div className="border-t border-foreground/10">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="py-10 border-b border-foreground/10 grid grid-cols-1 md:grid-cols-12 gap-6"
                >
                  <h3 className="md:col-span-5 font-display text-xl md:text-2xl uppercase tracking-tighter leading-tight text-accent">
                    {faq.q}
                  </h3>
                  <p className="md:col-span-7 font-mono text-xs md:text-sm leading-relaxed opacity-60">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LINK KE ARTIKEL TERKAIT */}
        <section className="px-container py-24 md:py-32 border-b border-foreground/10">
          <div className="max-w-[1400px] mx-auto">
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block mb-8 font-bold">
              Pelajari Lebih Lanjut
            </span>
            <div className="flex flex-col">
              <Link
                href="/blog/harga-website-umkm-2026"
                className="group flex justify-between items-center py-6 border-t border-foreground/10 hover:text-accent transition-colors"
              >
                <span className="font-display text-2xl md:text-3xl uppercase tracking-tighter">
                  Panduan Harga Website UMKM 2026
                </span>
                <span className="font-mono text-[10px] opacity-30 group-hover:opacity-100">
                  ↗
                </span>
              </Link>
              <Link
                href="/blog"
                className="group flex justify-between items-center py-6 border-t border-foreground/10 hover:text-accent transition-colors"
              >
                <span className="font-display text-2xl md:text-3xl uppercase tracking-tighter">
                  Semua Artikel &amp; Wawasan
                </span>
                <span className="font-mono text-[10px] opacity-30 group-hover:opacity-100">
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
