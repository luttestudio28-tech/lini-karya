import Link from "next/link";
import { notFound } from "next/navigation";

const blogPosts = [
  {
    slug: "bisnis-kuliner-website",
    title: "Kenapa Bisnis Kuliner Wajib Punya Website Sendiri",
    date: "2026-06-15",
    category: "Bisnis Lokal",
    content: `
      <p>Bisnis kuliner dikenal sebagai salah satu sektor paling kreatif di Indonesia. Dari kedai kopi estetik hingga rumah makan legendaris, persaingan bisnis F&B saat ini sangatlah ketat. Namun, banyak pemilik bisnis yang masih terjebak pada ketergantungan 100% kepada platform pengiriman pihak ketiga (Gofood/Grabfood/ShopeeFood).</p>
      
      <p>Meskipun platform tersebut membantu dalam hal logistik, ada beberapa alasan krusial kenapa Anda wajib memiliki website mandiri:</p>
      
      <h3>1. Memangkas Biaya Potongan Platform</h3>
      <p>Platform pengiriman biasanya memotong 20% atau lebih dari setiap transaksi Anda. Dengan website mandiri yang terintegrasi dengan WhatsApp, pelanggan bisa memesan langsung kepada Anda tanpa potongan biaya tersebut. Bayangkan berapa banyak profit yang bisa Anda hemat dalam satu bulan.</p>
      
      <h3>2. Kepemilikan Data Pelanggan</h3>
      <p>Di platform pihak ketiga, Anda tidak tahu siapa pelanggan Anda sebenarnya. Dengan website sendiri, Anda bisa mengumpulkan data nomor WhatsApp atau email pelanggan (tentunya dengan izin) untuk mengirimkan info promo atau menu baru secara langsung. Ini adalah kunci dari <b>customer loyalty</b>.</p>
      
      <h3>3. Membangun Brand Identity yang Kuat</h3>
      <p>Website adalah "rumah digital" Anda. Anda bebas menentukan desain, suasana, dan cerita di balik brand Anda tanpa batasan format dari platform lain. Pelanggan saat ini sangat menghargai estetika dan keunikan brand; website yang bagus menunjukkan bahwa Anda serius dalam mengelola bisnis.</p>
      
      <h3>4. Menampilkan Menu Secara Atraktif</h3>
      <p>Anda bisa menampilkan foto produk dengan resolusi tinggi, video proses memasak, hingga testimoni pelanggan dengan cara yang jauh lebih menarik daripada sekadar daftar teks di aplikasi pengiriman.</p>
      
      <p><b>Kesimpulan:</b> Website bukan pengganti aplikasi pengiriman, melainkan pelengkap strategis. Gunakan aplikasi untuk menjangkau pelanggan baru, dan gunakan website untuk mempertahankan pelanggan setia dan memaksimalkan profit.</p>
    `,
  },
  {
    slug: "seo-lokal",
    title: "Cara Agar Toko Anda Muncul di Halaman Pertama Google",
    date: "2026-06-12",
    category: "SEO",
    content: `
      <p>Pernahkah Anda mencari "Kopi enak di dekat saya" atau "Jasa jahit terdekat" di Google? Hasil yang muncul pertama kali biasanya adalah peta dengan daftar bisnis lokal. Itulah yang disebut dengan <b>Local SEO</b>.</p>
      
      <p>Bagi UMKM, muncul di halaman pertama Google bukan sekadar gaya-gayaan, tapi soal kelangsungan bisnis. Berikut langkah praktis yang bisa Anda lakukan:</p>
      
      <h3>1. Optimasi Google Business Profile (Dulu Google My Business)</h3>
      <p>Ini adalah langkah wajib. Pastikan alamat, nomor telepon, dan jam operasional toko Anda terisi dengan benar. Upload foto toko dan produk secara rutin. Semakin lengkap profil Anda, semakin besar peluang Google menampilkannya kepada calon pelanggan.</p>
      
      <h3>2. Gunakan Kata Kunci Lokal (Geo-Targeting)</h3>
      <p>Jangan hanya menargetkan kata kunci umum seperti "Toko Baju". Gunakan kata kunci spesifik yang mencantumkan nama wilayah Anda, misalnya "Toko Baju Muslim di [Nama Kota Anda]". Masukkan kata kunci ini ke dalam judul halaman website dan deskripsi produk Anda.</p>
      
      <h3>3. Kumpulkan Ulasan (Reviews) Pelanggan</h3>
      <p>Ulasan bintang 5 bukan hanya mempercantik tampilan, tapi juga memberi sinyal kepada Google bahwa bisnis Anda terpercaya. Jangan ragu meminta pelanggan setia Anda untuk memberikan ulasan di Google Maps setelah mereka berkunjung.</p>
      
      <h3>4. Website Harus Responsif di HP</h3>
      <p>Lebih dari 80% pencarian lokal dilakukan melalui smartphone. Jika website bisnis Anda lambat atau berantakan saat dibuka di HP, pengunjung akan langsung keluar, dan Google akan menurunkan peringkat Anda.</p>
      
      <p><b>Tips Pro:</b> Pastikan nama, alamat, dan nomor telepon (NAP) Anda konsisten di seluruh internet—mulai dari website, Facebook, Instagram, hingga portal berita lokal.</p>
    `,
  },
  {
    slug: "harga-website-umkm-2026",
    title: "Berapa Harga Pembuatan Website untuk UMKM di Tahun 2026?",
    date: "2026-06-10",
    category: "Investasi Digital",
    content: `
      <p>Salah satu pertanyaan yang paling sering kami terima adalah: "Berapa sih harga buat website yang standar tapi bagus?" Di tahun 2026, harga pembuatan website untuk UMKM sangat bervariasi tergantung kebutuhan.</p>
      
      <p>Mari kita bedah secara transparan agar Anda tidak salah memilih partner:</p>
      
      <h3>1. Solusi Mandiri / DIY (Rp 500rb - Rp 2jt / tahun)</h3>
      <p>Anda menggunakan platform seperti Wix, Shopify, atau WordPress.com. Anda melakukan semuanya sendiri. Harganya murah, tapi Anda harus meluangkan waktu berjam-jam untuk belajar desain dan teknis. Biasanya kurang optimal untuk SEO dan performa jangka panjang.</p>
      
      <h3>2. Freelancer Pemula (Rp 1jt - Rp 3jt)</h3>
      <p>Banyak freelancer yang menawarkan jasa pembuatan website dengan harga sangat terjangkau. Namun, berhati-hatilah dengan layanan purna jualnya. Seringkali setelah website jadi, sulit untuk menghubungi mereka jika ada error atau butuh update.</p>
      
      <h3>3. Agensi / Studio Web Profesional (Rp 2,5jt - Rp 15jt+)</h3>
      <p>Seperti layanan kami di Lini Karya. Anda membayar untuk strategi, desain kustom, kecepatan server, keamanan, dan dukungan teknis jangka panjang. Untuk Landing Page sederhana, harga Rp 2,5jt adalah standar yang wajar untuk mendapatkan kualitas premium.</p>
      
      <h3>Kenapa Harga Bisa Berbeda Jauh?</h3>
      <ul>
        <li><b>Kecepatan:</b> Website murah biasanya lambat karena menggunakan server "patungan".</li>
        <li><b>Keamanan:</b> Apakah website Anda diproteksi dari serangan hacker?</li>
        <li><b>Optimasi SEO:</b> Apakah website dibuat sekadar jadi, atau dirancang agar mudah ditemukan Google?</li>
        <li><b>Maintenance:</b> Siapa yang mengurus jika website tiba-tiba mati atau butuh ganti nomor WA?</li>
      </ul>
      
      <p><b>Saran Kami:</b> Jangan hanya melihat harga termurah. Lihatlah website sebagai investasi aset digital. Website yang murah tapi tidak mendatangkan pelanggan justru lebih mahal daripada website berkualitas yang menghasilkan profit setiap hari.</p>
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
