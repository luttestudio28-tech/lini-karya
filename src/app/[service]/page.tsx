import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { landingPages, getLandingPage, waLink } from "@/lib/landing-data";
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
    .filter((b): b is (typeof blogPosts)[number] => Boolean(b));
  const otherPages = landingPages.filter((p) => p.slug !== page.slug);

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
          {
            "@type": "ListItem",
            position: 2,
            name: page.eyebrow,
            item: url,
          },
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

  const ctaText = `Halo Lini Karya, saya tertarik dengan ${page.serviceType}. Saya ingin konsultasi gratis.`;

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
        <section className="relative min-h-[80vh] flex flex-col justify-center px-container pt-32 pb-20 border-b border-foreground/10 overflow-hidden">
          <div className="max-w-[1400px] mx-auto w-full">
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

            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block mb-8 font-bold">
              {page.eyebrow}
            </span>

            <h1 className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.82] tracking-[-0.04em] uppercase">
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

            <p className="mt-12 font-mono text-sm md:text-base leading-relaxed text-foreground/60 max-w-2xl">
              {page.intro}
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href={waLink(ctaText)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] uppercase tracking-widest bg-accent text-background px-8 py-5 font-bold hover:bg-foreground hover:text-background transition-colors"
              >
                [ KONSULTASI GRATIS ] ↗
              </a>
              <Link
                href="/#biaya"
                className="font-mono text-[10px] uppercase tracking-widest border border-foreground/20 px-8 py-5 font-bold hover:border-accent hover:text-accent transition-colors"
              >
                [ LIHAT HARGA ]
              </Link>
            </div>
          </div>
        </section>

        {/* MASALAH */}
        <section className="px-container py-24 md:py-32 border-b border-foreground/10">
          <div className="max-w-[1400px] mx-auto">
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block mb-8 font-bold">
              Masalah yang Sering Terjadi
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-foreground/10">
              {page.problems.map((item, i) => (
                <div
                  key={i}
                  className={`py-12 md:p-12 flex flex-col gap-6 ${
                    i !== page.problems.length - 1
                      ? "md:border-r border-b md:border-b-0 border-foreground/10"
                      : ""
                  }`}
                >
                  <span className="font-mono text-[10px] opacity-30">
                    0{i + 1}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tighter leading-none">
                    {item.heading}
                  </h2>
                  <p className="font-mono text-[11px] md:text-xs leading-relaxed opacity-60">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUSI */}
        <section className="px-container py-24 md:py-32 border-b border-foreground/10">
          <div className="max-w-[1400px] mx-auto">
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block mb-8 font-bold">
              Bagaimana Kami Membantu
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
              {page.solutions.map((item, i) => (
                <div
                  key={i}
                  className="bg-background p-10 md:p-14 flex flex-col gap-5"
                >
                  <span className="font-mono text-[10px] text-accent font-bold">
                    [+]
                  </span>
                  <h2 className="font-display text-2xl md:text-4xl uppercase tracking-tighter leading-none">
                    {item.heading}
                  </h2>
                  <p className="font-mono text-[11px] md:text-sm leading-relaxed opacity-60">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAKET */}
        <section className="px-container py-24 md:py-32 border-b border-foreground/10">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block mb-6 font-bold">
                  Pilihan Investasi
                </span>
                <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter leading-none">
                  Paket <span className="text-accent italic">Layanan</span>
                </h2>
              </div>
              <p className="max-w-xs font-mono text-[10px] uppercase tracking-widest opacity-40 leading-relaxed md:text-right">
                Harga transparan, sudah termasuk domain & hosting tahun pertama.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
              {page.packages.map((pkg) => (
                <div key={pkg.name} className="bg-background p-10 lg:p-12 flex flex-col">
                  <div className="flex justify-between items-start mb-12">
                    <h3 className="font-display text-3xl uppercase tracking-tighter">
                      {pkg.name}
                    </h3>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold">
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
                    href={waLink(
                      `Halo Lini Karya, saya tertarik dengan paket ${pkg.name} untuk ${page.serviceType}. Mohon info lebih lanjut.`
                    )}
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

        {/* FAQ */}
        <section className="px-container py-24 md:py-32 border-b border-foreground/10">
          <div className="max-w-[1400px] mx-auto">
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block mb-8 font-bold">
              Tanya & Jawab
            </span>
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

        {/* INTERNAL LINKS: layanan lain + artikel terkait */}
        <section className="px-container py-24 md:py-32 border-b border-foreground/10">
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
                    className="group flex justify-between items-center py-6 border-t border-foreground/10 hover:text-accent transition-colors"
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
                      className="group py-6 border-t border-foreground/10 hover:text-accent transition-colors block"
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

        <Footer />
      </main>
    </>
  );
}
