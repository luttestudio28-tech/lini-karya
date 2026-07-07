import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  landingPages,
  getLandingPage,
  waLink,
  type LandingPage,
} from "@/lib/landing-data";
import { blogPosts } from "@/lib/blog-data";
import Footer from "@/components/sections/Footer";

// Hanya slug yang terdaftar yang di-generate; sisanya 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return landingPages.map((p) => ({ service: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;
  const page = getLandingPage(service);
  if (!page) return {};

  const url = `https://linikarya.com/${page.slug}`;
  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      type: "website",
      locale: "id_ID",
      url,
      title: page.metaTitle,
      description: page.metaDescription,
      siteName: "Lini Karya",
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

/* ---------------------------------------------------------------- helpers */

type RelatedPost = (typeof blogPosts)[number];

function ctaFor(page: LandingPage) {
  return waLink(
    `Halo Lini Karya, saya tertarik dengan ${page.serviceType}. Saya ingin konsultasi gratis.`
  );
}

function pkgCta(page: LandingPage, pkgName: string) {
  return waLink(
    `Halo Lini Karya, saya tertarik dengan paket ${pkgName} untuk ${page.serviceType}. Mohon info lebih lanjut.`
  );
}

/* Blok internal-link dipakai ketiga varian (SEO), tampilan menyesuaikan. */
function RelatedBlock({
  page,
  related,
  tone = "light",
}: {
  page: LandingPage;
  related: RelatedPost[];
  tone?: "light" | "dark";
}) {
  const otherPages = landingPages.filter((p) => p.slug !== page.slug);
  const border = tone === "dark" ? "border-background/15" : "border-foreground/10";
  return (
    <section className={`px-container py-24 md:py-32 border-b ${border}`}>
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block mb-8 font-bold">
            Layanan Lainnya
          </span>
          <div className="flex flex-col">
            {otherPages.map((p) => (
              <Link
                key={p.slug}
                href={`/${p.slug}`}
                className={`group flex justify-between items-center py-6 border-t ${border} hover:text-accent transition-colors`}
              >
                <span className="font-display text-2xl md:text-3xl uppercase tracking-tighter">
                  {p.eyebrow}
                </span>
                <span className="font-mono text-[10px] opacity-30 group-hover:opacity-100">
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>

        {related.length > 0 && (
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block mb-8 font-bold">
              Artikel Terkait
            </span>
            <div className="flex flex-col">
              {related.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`group py-6 border-t ${border} hover:text-accent transition-colors block`}
                >
                  <span className="font-mono text-[9px] uppercase tracking-widest opacity-40 block mb-2">
                    {post.category}
                  </span>
                  <span className="font-mono text-sm leading-snug">
                    {post.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Breadcrumb({ page }: { page: LandingPage }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-10 flex gap-3"
    >
      <Link href="/" className="hover:text-accent transition-colors">
        Beranda
      </Link>
      <span>/</span>
      <span className="text-accent">{page.eyebrow}</span>
    </nav>
  );
}

/* ------------------------------------------------ VARIAN 1: EDITORIAL
   Gaya dossier/majalah: hero split kiri-kanan, proses sebagai timeline
   bernomor, masalah→solusi disandingkan berpasangan. */
function EditorialLayout({
  page,
  related,
}: {
  page: LandingPage;
  related: RelatedPost[];
}) {
  return (
    <main className="bg-background">
      {/* HERO — split editorial */}
      <section className="px-container pt-32 pb-20 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <Breadcrumb page={page} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block mb-8 font-bold">
                {page.eyebrow}
              </span>
              <h1 className="font-display text-[clamp(3.5rem,9vw,9rem)] leading-[0.8] tracking-[-0.04em] uppercase">
                {page.titleLines.map((line, i) => (
                  <span
                    key={i}
                    className={`block ${
                      i === page.titleLines.length - 1 ? "text-accent" : ""
                    }`}
                  >
                    {line}
                  </span>
                ))}
              </h1>
            </div>
            <div className="lg:col-span-4 lg:border-l border-foreground/10 lg:pl-10">
              <p className="font-mono text-sm leading-relaxed text-foreground/60 mb-8">
                {page.intro}
              </p>
              <a
                href={ctaFor(page)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-mono text-[10px] uppercase tracking-widest bg-accent text-background px-8 py-5 font-bold hover:bg-foreground transition-colors"
              >
                [ KONSULTASI GRATIS ] ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MASALAH ↔ SOLUSI berpasangan (dua kolom) */}
      <section className="px-container py-24 md:py-32 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-2 gap-6 mb-12 font-mono text-[10px] uppercase tracking-[0.4em] font-bold">
            <span className="opacity-40">Tantangan</span>
            <span className="text-accent">Solusi Kami</span>
          </div>
          <div className="border-t border-foreground/10">
            {page.problems.map((prob, i) => {
              const sol = page.solutions[i];
              return (
                <div
                  key={i}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 py-10 border-b border-foreground/10"
                >
                  <div className="flex flex-col gap-3">
                    <span className="font-mono text-[10px] opacity-30">
                      0{i + 1}
                    </span>
                    <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tighter leading-none">
                      {prob.heading}
                    </h2>
                    <p className="font-mono text-[11px] leading-relaxed opacity-50">
                      {prob.body}
                    </p>
                  </div>
                  {sol && (
                    <div className="flex flex-col gap-3 md:pl-16 md:border-l border-foreground/10">
                      <span className="font-mono text-[10px] text-accent">
                        [+]
                      </span>
                      <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tighter leading-none text-accent">
                        {sol.heading}
                      </h3>
                      <p className="font-mono text-[11px] leading-relaxed opacity-60">
                        {sol.body}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROSES — timeline bernomor besar */}
      {page.steps && (
        <section className="px-container py-24 md:py-32 border-b border-foreground/10">
          <div className="max-w-[1400px] mx-auto">
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block mb-20 md:mb-28 font-bold">
              Alur Kerja Kami
            </span>
            <div className="space-y-px">
              {page.steps.map((step, i) => (
                <div
                  key={i}
                  className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-12 py-8 border-t border-foreground/10 hover:bg-foreground hover:text-background transition-colors duration-500 md:px-6"
                >
                  <span className="font-display text-5xl md:text-7xl tracking-tighter leading-none opacity-20 group-hover:opacity-100 group-hover:text-accent transition-all">
                    0{i + 1}
                  </span>
                  <h2 className="font-display text-2xl md:text-4xl uppercase tracking-tighter leading-none md:w-1/3">
                    {step.heading}
                  </h2>
                  <p className="font-mono text-[11px] md:text-xs leading-relaxed opacity-60 group-hover:opacity-100 md:flex-1">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <PriceTable page={page} />
      <FaqAccordionStyle page={page} />
      <RelatedBlock page={page} related={related} />
      <Footer />
    </main>
  );
}

/* ------------------------------------------------ VARIAN 2: COMMERCE
   Hero terpusat + baris statistik besar, solusi sebagai "alur belanja"
   bernomor horizontal, paket ditonjolkan. */
function CommerceLayout({
  page,
  related,
}: {
  page: LandingPage;
  related: RelatedPost[];
}) {
  return (
    <main className="bg-background">
      {/* HERO terpusat */}
      <section className="px-container pt-32 pb-16 text-center border-b border-foreground/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center">
            <Breadcrumb page={page} />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block mb-8 font-bold">
            {page.eyebrow}
          </span>
          <h1 className="font-display text-[clamp(3rem,10vw,9rem)] leading-[0.8] tracking-[-0.04em] uppercase">
            {page.titleLines.map((line, i) => (
              <span
                key={i}
                className={`block ${
                  i === page.titleLines.length - 1 ? "text-accent italic" : ""
                }`}
              >
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-10 font-mono text-sm md:text-base leading-relaxed text-foreground/60 max-w-2xl mx-auto">
            {page.intro}
          </p>
          <a
            href={ctaFor(page)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block font-mono text-[10px] uppercase tracking-widest bg-accent text-background px-10 py-5 font-bold hover:bg-foreground transition-colors"
          >
            [ MULAI JUALAN ONLINE ] ↗
          </a>
        </div>
      </section>

      {/* STATISTIK — baris angka besar */}
      {page.stats && (
        <section className="border-b border-foreground/10">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-foreground/10">
            {page.stats.map((s, i) => (
              <div key={i} className="px-container py-14 text-center">
                <div className="font-display text-6xl md:text-7xl tracking-tighter text-accent leading-none mb-4">
                  {s.value}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest opacity-50">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* MASALAH — daftar ringkas */}
      <section className="px-container py-24 md:py-32 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] uppercase tracking-tighter leading-[0.85] mb-20 md:mb-28 max-w-3xl">
            Kenapa harus <span className="text-accent italic">berhenti</span>{" "}
            bergantung marketplace?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
            {page.problems.map((item, i) => (
              <div key={i} className="bg-background p-10 flex flex-col gap-4">
                <span className="font-mono text-[10px] text-accent font-bold">
                  ✕
                </span>
                <h3 className="font-display text-xl md:text-2xl uppercase tracking-tighter leading-none">
                  {item.heading}
                </h3>
                <p className="font-mono text-[11px] leading-relaxed opacity-50">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUSI — alur belanja bernomor horizontal */}
      <section className="px-container py-24 md:py-32 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block mb-20 md:mb-28 font-bold">
            Cara Toko Anda Bekerja
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {page.solutions.map((item, i) => (
              <div key={i} className="flex flex-col gap-4">
                <span className="font-display text-4xl tracking-tighter text-accent leading-none">
                  0{i + 1}
                </span>
                <div className="h-px w-full bg-foreground/10" />
                <h3 className="font-display text-lg md:text-xl uppercase tracking-tighter leading-tight">
                  {item.heading}
                </h3>
                <p className="font-mono text-[11px] leading-relaxed opacity-50">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PriceTable page={page} />
      <FaqAccordionStyle page={page} />
      <RelatedBlock page={page} related={related} />
      <Footer />
    </main>
  );
}

/* ------------------------------------------------ VARIAN 3: CORPORATE
   Premium & tenang: hero besar, section SOLUSI dibalik warna (gelap),
   masalah sebagai daftar bernomor vertikal, paket minimalis. */
function CorporateLayout({
  page,
  related,
}: {
  page: LandingPage;
  related: RelatedPost[];
}) {
  return (
    <main className="bg-background">
      {/* HERO */}
      <section className="px-container pt-32 pb-24 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <Breadcrumb page={page} />
          <h1 className="font-display text-[clamp(3rem,11vw,11rem)] leading-[0.78] tracking-[-0.05em] uppercase mb-12">
            {page.titleLines.map((line, i) => (
              <span
                key={i}
                className={`block ${
                  i === page.titleLines.length - 1
                    ? "text-accent italic ml-[8vw]"
                    : ""
                }`}
              >
                {line}
              </span>
            ))}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-10 border-t border-foreground/10">
            <span className="md:col-span-3 font-mono text-[10px] uppercase tracking-[0.4em] text-accent font-bold">
              {page.eyebrow}
            </span>
            <p className="md:col-span-6 font-mono text-sm md:text-base leading-relaxed text-foreground/60">
              {page.intro}
            </p>
            <div className="md:col-span-3 flex md:justify-end items-start">
              <a
                href={ctaFor(page)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] uppercase tracking-widest border border-foreground/20 px-8 py-5 font-bold hover:bg-accent hover:text-background hover:border-accent transition-all"
              >
                [ KONSULTASI ] ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MASALAH — daftar bernomor vertikal besar */}
      <section className="px-container py-24 md:py-32 border-b border-foreground/10">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block mb-20 md:mb-28 font-bold">
            Yang Dipertaruhkan
          </span>
          <div className="border-t border-foreground/10">
            {page.problems.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 border-b border-foreground/10 items-baseline"
              >
                <span className="md:col-span-1 font-display text-3xl tracking-tighter opacity-20">
                  0{i + 1}
                </span>
                <h2 className="md:col-span-5 font-display text-2xl md:text-3xl uppercase tracking-tighter leading-none">
                  {item.heading}
                </h2>
                <p className="md:col-span-6 font-mono text-[11px] md:text-sm leading-relaxed opacity-55">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUSI — inverted (gelap) untuk kesan premium */}
      <section className="bg-foreground text-background px-container py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="font-display text-[clamp(3rem,7vw,6rem)] uppercase tracking-tighter leading-[0.8] mb-20 md:mb-28">
            Standar <span className="text-accent italic">Lini Karya</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {page.solutions.map((item, i) => (
              <div
                key={i}
                className="flex gap-6 pt-8 border-t border-background/15"
              >
                <span className="font-mono text-[10px] text-accent font-bold pt-2">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tighter leading-none mb-3">
                    {item.heading}
                  </h3>
                  <p className="font-mono text-[11px] md:text-sm leading-relaxed opacity-60">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PriceTable page={page} />
      <FaqAccordionStyle page={page} />
      <RelatedBlock page={page} related={related} />
      <Footer />
    </main>
  );
}

/* --------------------------------------------- section paket (dipakai semua) */
function PriceTable({ page }: { page: LandingPage }) {
  return (
    <section className="px-container py-24 md:py-32 border-b border-foreground/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 md:mb-32">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block mb-8 font-bold">
              Pilihan Investasi
            </span>
            <h2 className="font-display text-[clamp(3rem,8vw,7rem)] uppercase tracking-tighter leading-[0.8]">
              Paket <span className="text-accent italic">Layanan</span>
            </h2>
          </div>
          <p className="max-w-xs font-mono text-[10px] uppercase tracking-widest opacity-40 leading-relaxed md:text-right">
            Harga transparan, sudah termasuk domain &amp; hosting tahun pertama.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 ${
            page.packages.length === 3 ? "lg:grid-cols-3" : ""
          } gap-px bg-foreground/10 border border-foreground/10`}
        >
          {page.packages.map((pkg) => (
            <div key={pkg.name} className="bg-background p-10 lg:p-12 flex flex-col">
              <div className="flex justify-between items-start mb-12">
                <h3 className="font-display text-3xl uppercase tracking-tighter">
                  {pkg.name}
                </h3>
                <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold text-right">
                  {pkg.label}
                </span>
              </div>
              <div className="font-display text-4xl lg:text-5xl tracking-tighter leading-none mb-10">
                {pkg.price !== "Kustom" && (
                  <span className="text-lg opacity-20 mr-2">RP</span>
                )}
                {pkg.price}
              </div>
              <div className="space-y-4 pt-8 border-t border-foreground/5 mb-10">
                {pkg.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-accent shrink-0">
                      [+]
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest opacity-70">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href={pkgCta(page, pkg.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto font-mono text-[10px] uppercase tracking-widest border border-foreground/20 py-5 text-center font-bold hover:bg-accent hover:text-background hover:border-accent transition-all"
              >
                [ KONSULTASI GRATIS ]
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------- FAQ (dipakai semua varian) */
function FaqAccordionStyle({ page }: { page: LandingPage }) {
  return (
    <section className="px-container py-24 md:py-32 border-b border-foreground/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20 md:mb-32">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block mb-8 font-bold">
            Pusat Bantuan
          </span>
          <h2 className="font-display text-[clamp(3rem,8vw,7rem)] uppercase tracking-tighter leading-[0.8]">
            Tanya &amp; <span className="text-accent italic">Jawab</span>
          </h2>
        </div>
        <div className="border-t border-foreground/10">
          {page.faqs.map((faq, i) => (
            <div
              key={i}
              className="py-10 border-b border-foreground/10 grid grid-cols-1 md:grid-cols-12 gap-6"
            >
              <h2 className="md:col-span-5 font-display text-xl md:text-2xl uppercase tracking-tighter leading-tight text-accent">
                {faq.question}
              </h2>
              <p className="md:col-span-7 font-mono text-xs md:text-sm leading-relaxed opacity-60">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- page */
export default async function ServiceLandingPage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const page = getLandingPage(service);
  if (!page) notFound();

  const url = `https://linikarya.com/${page.slug}`;
  const related = page.relatedBlogSlugs
    .map((slug) => blogPosts.find((b) => b.slug === slug))
    .filter((b): b is RelatedPost => Boolean(b));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.serviceType,
        serviceType: page.serviceType,
        description: page.metaDescription,
        url,
        areaServed: { "@type": "Country", name: "Indonesia" },
        provider: {
          "@type": "ProfessionalService",
          name: "Lini Karya Studio",
          url: "https://linikarya.com",
          email: "halo@linikarya.com",
          telephone: "+6285166635038",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Bandung",
            addressCountry: "ID",
          },
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
          { "@type": "ListItem", position: 2, name: page.eyebrow, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
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

      {page.variant === "editorial" && (
        <EditorialLayout page={page} related={related} />
      )}
      {page.variant === "commerce" && (
        <CommerceLayout page={page} related={related} />
      )}
      {page.variant === "corporate" && (
        <CorporateLayout page={page} related={related} />
      )}
    </>
  );
}
