import { Metadata } from "next";
import Link from "next/link";
import BlogListing from "@/components/sections/BlogListing";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog & Wawasan Digital UMKM Indonesia",
  description: "Dapatkan tips, panduan, dan strategi pengembangan website untuk memajukan bisnis UMKM Anda di seluruh Indonesia.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    url: "https://linikarya.com/blog",
    title: "Blog & Wawasan Digital UMKM Indonesia | Lini Karya",
    description: "Tips, panduan, dan strategi pengembangan website untuk memajukan bisnis UMKM Anda.",
  },
};

export default function BlogPage() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24 px-container">
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-20 border-b border-foreground/10 pb-12">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block mb-6 font-bold">
            Wawasan & Strategi
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-none mb-8">
            Blog <span className="italic-accent text-accent">Lini Karya</span>
          </h1>
          <p className="font-mono text-sm md:text-base text-foreground/50 max-w-2xl leading-relaxed">
            Berbagi panduan praktis, studi kasus, dan strategi digital untuk membantu UMKM Indonesia tumbuh lebih cepat dengan website yang tepat.
          </p>
        </header>

        <BlogListing />

        {/* Server-rendered article archive — ensures all blog links are 
            in the initial HTML for SEO crawlability, since BlogListing 
            is a client component that only shows 6 posts per page */}
        <nav className="mt-32 pt-16 border-t border-foreground/10" aria-label="Arsip semua artikel blog">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block mb-6 font-bold">
            Arsip Lengkap
          </span>
          <h2 className="font-display text-3xl md:text-5xl uppercase tracking-tighter leading-none mb-12">
            Semua <span className="italic-accent text-accent">Artikel</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-foreground/10">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex items-start justify-between gap-4 p-6 md:p-8 border-b border-r border-foreground/10 hover:bg-foreground/[0.03] transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold block mb-2">
                    {post.category}
                  </span>
                  <h3 className="font-display text-lg md:text-xl uppercase tracking-tighter leading-tight group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                </div>
                <span className="font-mono text-[9px] opacity-30 uppercase tracking-widest shrink-0 pt-1">
                  {post.date}
                </span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
