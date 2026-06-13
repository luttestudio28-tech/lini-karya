import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Wawasan Digital UMKM Bandung",
  description: "Dapatkan tips, panduan, dan strategi pengembangan website untuk memajukan bisnis UMKM Anda, khususnya di wilayah Bandung dan sekitarnya.",
};

const blogPosts = [
  {
    slug: "bisnis-kuliner-bandung-website",
    title: "Kenapa Bisnis Kuliner di Bandung Wajib Punya Website Sendiri",
    excerpt: "Jangan hanya mengandalkan platform pihak ketiga. Pelajari bagaimana website mandiri bisa membangun brand dan menghemat biaya operasional bisnis F&B Anda.",
    date: "2026-06-15",
    category: "Bisnis Lokal",
  },
  {
    slug: "seo-lokal-bandung",
    title: "Cara Agar Toko Anda Muncul di Halaman Pertama Google di Bandung",
    excerpt: "Panduan praktis SEO Lokal untuk membantu calon pelanggan di sekitar Bandung menemukan bisnis Anda lebih mudah di mesin pencari.",
    date: "2026-06-12",
    category: "SEO",
  },
  {
    slug: "harga-website-umkm-bandung-2026",
    title: "Berapa Harga Pembuatan Website untuk UMKM di Bandung Tahun 2026?",
    excerpt: "Transparansi harga dan apa saja yang harus Anda perhatikan saat memilih jasa pembuatan website agar tidak salah investasi.",
    date: "2026-06-10",
    category: "Investasi Digital",
  },
];

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
            Berbagi panduan praktis dan strategi digital untuk membantu UMKM Indonesia, khususnya di Bandung, tumbuh lebih cepat dengan website yang tepat.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {blogPosts.map((post) => (
            <article key={post.slug} className="group flex flex-col border border-foreground/10 hover:border-accent/30 transition-all p-8 md:p-10 relative">
              <div className="flex justify-between items-start mb-12">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold">
                  {post.category}
                </span>
                <span className="font-mono text-[9px] opacity-30 uppercase tracking-widest">
                  {post.date}
                </span>
              </div>
              
              <Link href={`/blog/${post.slug}`} className="mb-6">
                <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tighter leading-[0.9] group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
              </Link>
              
              <p className="font-mono text-xs leading-relaxed text-foreground/60 mb-12">
                {post.excerpt}
              </p>
              
              <Link 
                href={`/blog/${post.slug}`}
                className="mt-auto font-mono text-[10px] uppercase tracking-widest text-accent font-bold hover:tracking-[0.3em] transition-all"
              >
                [ BACA SELENGKAPNYA ] ↗
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
