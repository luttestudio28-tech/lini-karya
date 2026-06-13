import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog & Wawasan Digital UMKM Indonesia",
  description: "Dapatkan tips, panduan, dan strategi pengembangan website untuk memajukan bisnis UMKM Anda di seluruh Indonesia.",
};

const blogPosts = [
  {
    slug: "bisnis-kuliner-website",
    title: "Kenapa Bisnis Kuliner Wajib Punya Website Sendiri",
    excerpt: "Jangan hanya mengandalkan platform pihak ketiga. Pelajari bagaimana website mandiri bisa membangun brand dan menghemat biaya operasional bisnis F&B Anda.",
    date: "2026-06-15",
    category: "Bisnis Lokal",
    image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    slug: "seo-lokal",
    title: "Cara Agar Toko Anda Muncul di Halaman Pertama Google",
    excerpt: "Panduan praktis SEO Lokal untuk membantu calon pelanggan di sekitar Anda menemukan bisnis Anda lebih mudah di mesin pencari.",
    date: "2026-06-12",
    category: "SEO",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    slug: "harga-website-umkm-2026",
    title: "Berapa Harga Pembuatan Website untuk UMKM di Tahun 2026?",
    excerpt: "Transparansi harga dan apa saja yang harus Anda perhatikan saat memilih jasa pembuatan website agar tidak salah investasi.",
    date: "2026-06-10",
    category: "Investasi Digital",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
            Berbagi panduan praktis dan strategi digital untuk membantu UMKM Indonesia tumbuh lebih cepat dengan website yang tepat.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {blogPosts.map((post) => (
            <article key={post.slug} className="group flex flex-col border border-foreground/10 hover:border-accent/30 transition-all p-0 relative overflow-hidden">
              {/* Thumbnail Image */}
              <Link href={`/blog/${post.slug}`} className="relative w-full aspect-video overflow-hidden bg-muted block">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
              </Link>

              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-8">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold">
                    {post.category}
                  </span>
                  <span className="font-mono text-[9px] opacity-30 uppercase tracking-widest">
                    {post.date}
                  </span>
                </div>
                
                <Link href={`/blog/${post.slug}`} className="mb-6">
                  <h2 className="font-display text-3xl uppercase tracking-tighter leading-[0.9] group-hover:text-accent transition-colors">
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
