import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CostCalculator from "@/components/tools/CostCalculator";
import FaqAccordion from "@/components/tools/FaqAccordion";
import Footer from "@/components/sections/Footer";
import { blogPosts } from "@/lib/blog-data";

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

const LEARN_SLUGS = [
  "harga-website-umkm-2026",
  "kenapa-website-sepi-pengunjung",
  "landing-page-vs-website",
];

export default function CalculatorPage() {
  const learnPosts = LEARN_SLUGS.map((slug) =>
    blogPosts.find((p) => p.slug === slug)
  ).filter((p): p is (typeof blogPosts)[number] => Boolean(p));

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
            <FaqAccordion items={faqs} />
          </div>
        </section>

        {/* KARTU ARTIKEL TERKAIT */}
        <section className="px-container py-24 md:py-32 border-b border-foreground/10">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block font-bold">
                Pelajari Lebih Lanjut
              </span>
              <Link
                href="/blog"
                className="font-mono text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-accent transition-all"
              >
                [ LIHAT SEMUA ARTIKEL ] ↗
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {learnPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block border border-foreground/10 hover:border-accent/40 transition-all"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold block mb-4">
                      {post.category}
                    </span>
                    <h3 className="font-display text-xl uppercase tracking-tighter leading-tight group-hover:text-accent transition-colors line-clamp-3">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
