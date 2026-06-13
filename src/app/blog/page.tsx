import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog & Wawasan Digital UMKM Indonesia",
  description: "Dapatkan tips, panduan, dan strategi pengembangan website untuk memajukan bisnis UMKM Anda di seluruh Indonesia.",
};

const blogPosts = [
  {
    slug: "studi-kasus-klinik-kecantikan",
    title: "Studi Kasus: Bagaimana Klinik Kecantikan X Meningkatkan Booking 300%",
    excerpt: "Melihat langsung bagaimana redesain website dan optimasi SEO lokal berhasil melipatgandakan jadwal reservasi pasien dalam waktu kurang dari 3 bulan.",
    date: "2026-06-18",
    category: "Studi Kasus",
    image: "https://images.pexels.com/photos/3985304/pexels-photo-3985304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    slug: "studi-kasus-kopi-lokal",
    title: "Studi Kasus: Toko Kopi Lokal Naikkan Omzet Penjualan Online Tanpa Aplikasi Pihak Ketiga",
    excerpt: "Strategi di balik kesuksesan sebuah kedai kopi melepaskan diri dari potongan komisi 20% dengan menggunakan sistem website mandiri.",
    date: "2026-06-16",
    category: "Studi Kasus",
    image: "https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
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
  {
    slug: "manfaat-ai-umkm",
    title: "Cara UMKM Pakai AI untuk Naikkan Omzet di Tahun 2026",
    excerpt: "AI bukan cuma untuk perusahaan besar. Pelajari cara praktis menggunakan AI untuk otomatisasi konten dan layanan pelanggan bisnis kecil.",
    date: "2026-06-09",
    category: "Teknologi AI",
    image: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    slug: "keamanan-website-umkm",
    title: "5 Tanda Website Bisnis Anda Tidak Aman & Berisiko",
    excerpt: "Jangan biarkan data pelanggan Anda bocor. Kenali tanda-tanda website yang tidak aman dan cara melindunginya dari serangan hacker.",
    date: "2026-06-08",
    category: "Keamanan",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    slug: "chatbot-ai-website",
    title: "Kenapa Website Anda Butuh AI Chatbot 24/7?",
    excerpt: "Jangan biarkan pelanggan kabur karena tidak dibalas. AI Chatbot bisa membantu melayani pembeli saat Anda sedang tidur sekalipun.",
    date: "2026-06-07",
    category: "Inovasi",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    slug: "landing-page-vs-website",
    title: "Landing Page vs Website Lengkap: Mana yang Menghasilkan Uang?",
    excerpt: "Sering bingung bedanya? Kami bedah mana yang paling cocok untuk jualan produk tunggal vs membangun kredibilitas brand perusahaan.",
    date: "2026-06-05",
    category: "Strategi",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    slug: "ai-dalam-digital-marketing",
    title: "Masa Depan Digital Marketing: Kolaborasi AI & Kreativitas Manusia",
    excerpt: "Bagaimana tren pemasaran digital berubah dengan hadirnya AI? Pelajari cara agar bisnis Anda tetap relevan di tengah gempuran teknologi.",
    date: "2026-06-04",
    category: "Tren Pemasaran",
    image: "https://images.pexels.com/photos/6633920/pexels-photo-6633920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    slug: "desain-website-konversi",
    title: "Kenapa Desain Minimalis Lebih Efektif Tingkatkan Penjualan?",
    excerpt: "Banyak hiasan justru mengalihkan fokus pembeli. Pelajari rahasia psikologi desain yang membuat pengunjung betah dan ingin segera membeli.",
    date: "2026-06-03",
    category: "Desain UI/UX",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
            Berbagi panduan praktis, studi kasus, dan strategi digital untuk membantu UMKM Indonesia tumbuh lebih cepat dengan website yang tepat.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {blogPosts.map((post) => (
            <article key={post.slug} className="group flex flex-col border border-foreground/10 hover:border-accent/30 transition-all p-0 relative overflow-hidden">
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
