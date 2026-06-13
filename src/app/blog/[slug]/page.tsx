import Link from "next/link";
import { notFound } from "next/navigation";

const blogPosts = [
  {
    slug: "bisnis-kuliner-bandung-website",
    title: "Kenapa Bisnis Kuliner di Bandung Wajib Punya Website Sendiri",
    date: "2026-06-15",
    category: "Bisnis Lokal",
    content: `
      <p>Bandung dikenal sebagai pusat kuliner kreatif di Indonesia. Namun, banyak pemilik bisnis F&B yang masih bergantung 100% pada platform pengiriman pihak ketiga.</p>
      <p>Padahal, memiliki website sendiri adalah langkah strategis untuk membangun identitas brand yang lebih kuat dan mengurangi ketergantungan pada potongan biaya platform yang besar.</p>
      <h3>1. Membangun Kepercayaan Pelanggan</h3>
      <p>Saat seseorang mendengar nama restoran Anda, hal pertama yang mereka lakukan adalah mencari di Google. Website profesional memberikan kesan bahwa bisnis Anda mapan dan terpercaya.</p>
      <h3>2. Kontrol Penuh Atas Menu dan Promo</h3>
      <p>Anda bisa menampilkan foto produk dengan kualitas terbaik tanpa batasan format dari platform lain.</p>
    `,
  },
  {
    slug: "seo-lokal-bandung",
    title: "Cara Agar Toko Anda Muncul di Halaman Pertama Google di Bandung",
    date: "2026-06-12",
    category: "SEO",
    content: `
      <p>SEO Lokal adalah kunci bagi bisnis fisik di Bandung agar ditemukan oleh warga lokal maupun wisatawan.</p>
      <h3>Optimasi Google Business Profile</h3>
      <p>Pastikan nama, alamat, dan nomor telepon Anda konsisten di seluruh internet.</p>
      <h3>Gunakan Kata Kunci Berbasis Lokasi</h3>
      <p>Sertakan kata "Bandung" atau nama wilayah spesifik seperti "Dago" atau "Lembang" di dalam konten website Anda.</p>
    `,
  },
  {
    slug: "harga-website-umkm-bandung-2026",
    title: "Berapa Harga Pembuatan Website untuk UMKM di Bandung Tahun 2026?",
    date: "2026-06-10",
    category: "Investasi Digital",
    content: `
      <p>Memilih jasa pembuatan website seringkali membingungkan karena rentang harga yang sangat luas.</p>
      <p>Di Lini Karya, kami percaya pada transparansi. Investasi website harus sebanding dengan hasil yang didapatkan.</p>
      <h3>Kenapa Harga Bisa Berbeda?</h3>
      <p>Faktor seperti kecepatan akses, kemudahan pengelolaan (CMS), dan optimasi SEO sangat mempengaruhi biaya produksi.</p>
    `,
  },
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-background min-h-screen pt-32 pb-24 px-container">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/blog" 
          className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold mb-12 inline-block hover:opacity-70 transition-opacity"
        >
          ← KEMBALI KE BLOG
        </Link>
        
        <header className="mb-16 border-b border-foreground/10 pb-12">
          <div className="flex gap-4 mb-6">
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold">
              {post.category}
            </span>
            <span className="font-mono text-[10px] opacity-30 uppercase tracking-widest">
              {post.date}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-tight mb-8">
            {post.title}
          </h1>
        </header>

        <div 
          className="font-mono text-sm md:text-base leading-relaxed text-foreground/80 space-y-8 blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <footer className="mt-24 pt-12 border-t border-foreground/10 text-center">
          <p className="font-mono text-xs opacity-40 mb-8 uppercase tracking-widest">
            Butuh bantuan membangun website untuk bisnis Anda?
          </p>
          <Link 
            href="/#kontak"
            className="inline-block font-mono text-[10px] uppercase tracking-widest bg-accent text-background px-8 py-4 font-bold hover:bg-foreground hover:text-background transition-colors"
          >
            KONSULTASI GRATIS SEKARANG
          </Link>
        </footer>
      </div>
    </article>
  );
}
