import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

const blogPosts = [
  {
    slug: "bisnis-kuliner-website",
    title: "Kenapa Bisnis Kuliner Wajib Punya Website Sendiri",
    date: "2026-06-15",
    category: "Bisnis Lokal",
    image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: `
      <p>Bisnis kuliner dikenal sebagai salah satu sektor paling kreatif di Indonesia. Namun, banyak pemilik bisnis yang masih terjebak pada ketergantungan 100% kepada platform pihak ketiga. Padahal, memiliki website sendiri adalah langkah strategis untuk membangun identitas brand yang lebih kuat.</p>
      
      <h3>1. Memangkas Biaya Potongan Platform (Komisi 20%+)</h3>
      <p>Hampir semua platform pengiriman makanan menarik komisi yang cukup besar dari setiap transaksi. Dengan website mandiri yang memiliki sistem WhatsApp Order, pelanggan bisa bertransaksi langsung dengan Anda. Selisih 20% ini bisa dialokasikan untuk meningkatkan kualitas bahan baku atau budget promosi Anda sendiri.</p>
      
      <h3>2. Kepemilikan Data Pelanggan (Customer Base)</h3>
      <p>Siapa pelanggan setia Anda? Di aplikasi pihak ketiga, Anda tidak punya akses ke nomor telepon atau kebiasaan beli mereka. Website memungkinkan Anda menanamkan Pixel (seperti Meta Pixel) atau formulir kontak untuk mengumpulkan database pelanggan. Dengan data ini, Anda bisa mengirimkan promo khusus di hari ulang tahun mereka atau info menu baru secara personal.</p>
      
      <h3>3. Membangun Brand Identity yang Berwibawa</h3>
      <p>Website adalah wajah digital Anda. Di sini, Anda bebas bercerita tentang sejarah resep keluarga Anda, profil chef, hingga suasana interior outlet. Visual yang estetik dan navigasi yang mudah akan memberikan kesan bahwa bisnis kuliner Anda dikelola secara profesional dan modern.</p>
      
      <h3>4. Optimasi Menu untuk Konversi</h3>
      <p>Berbeda dengan menu teks standar di aplikasi, di website Anda bisa menyajikan menu dengan fotografi resolusi tinggi, video pendek proses plating, hingga sistem rekomendasi "paling banyak dibeli" yang lebih dinamis.</p>
      
      <p><b>Kesimpulan:</b> Investasi di website bukan berarti meninggalkan platform pengiriman, namun sebagai jembatan untuk kemandirian bisnis jangka panjang. Gunakan aplikasi untuk <i>user acquisition</i> (mencari pelanggan baru), dan arahkan mereka ke website Anda untuk pesanan berikutnya guna mendapatkan profit maksimal.</p>
    `,
  },
  {
    slug: "seo-lokal",
    title: "Cara Agar Toko Anda Muncul di Halaman Pertama Google",
    date: "2026-06-12",
    category: "SEO",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: `
      <p>Local SEO adalah strategi digital marketing yang memungkinkan bisnis fisik Anda (toko, kantor, atau cafe) ditemukan oleh orang-orang yang berada di area sekitar Anda. Jika dilakukan dengan benar, toko Anda akan menjadi pilihan utama saat calon pelanggan mencari solusi di mesin pencari.</p>
      
      <h3>Langkah 1: Maksimalkan Google Business Profile</h3>
      <p>Google Business Profile (GBP) adalah "pintu masuk" utama. Pastikan profil Anda diverifikasi. Isilah deskripsi bisnis dengan kata kunci yang relevan, tambahkan foto produk terbaru setiap minggu, dan pastikan titik koordinat di Google Maps akurat. Jangan lupa untuk menjawab setiap ulasan pelanggan, baik yang positif maupun negatif.</p>
      
      <h3>Langkah 2: Gunakan Kata Kunci Berbasis Lokasi (Geo-Targeting)</h3>
      <p>Jangan hanya menggunakan kata kunci luas seperti "Jasa Servis AC". Gunakan variasi seperti "Servis AC Jakarta Selatan" atau "Pasang AC di BSD". Masukkan kata-kata kunci ini ke dalam Tag Judul (H1), Meta Description, dan juga di dalam paragraf artikel website Anda agar Google tahu spesialisasi area jangkauan Anda.</p>
      
      <h3>Langkah 3: Konsistensi NAP (Name, Address, Phone)</h3>
      <p>Ini adalah kesalahan teknis yang sering terjadi. Pastikan penulisan nama bisnis, alamat, dan nomor telepon Anda SAMA PERSIS di seluruh internet—mulai dari website, profil Instagram, hingga direktori bisnis online. Ketidakkonsistenan data akan membuat Google ragu untuk menampilkan profil Anda.</p>
      
      <h3>Langkah 4: Optimasi Kecepatan Mobile</h3>
      <p>Mayoritas pencarian lokal dilakukan melalui smartphone saat orang sedang dalam perjalanan. Website yang lambat (lebih dari 3 detik) akan membuat calon pelanggan pindah ke kompetitor. Pastikan website Anda responsif, ringan, dan memiliki tombol "Hubungi Sekarang" yang mudah diakses.</p>
      
      <p><b>Statistik Menarik:</b> 76% orang yang melakukan pencarian lokal melalui smartphone akan mengunjungi bisnis tersebut dalam kurun waktu 24 jam. Jangan lewatkan peluang emas ini.</p>
    `,
  },
  {
    slug: "harga-website-umkm-2026",
    title: "Berapa Harga Pembuatan Website untuk UMKM di Tahun 2026?",
    date: "2026-06-10",
    category: "Investasi Digital",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: `
      <p>Menentukan budget untuk website seringkali membingungkan karena variasinya yang sangat luas. Sebagai pemilik UMKM, Anda perlu memahami apa yang Anda bayar agar tidak terjebak pada solusi yang "murah tapi merepotkan" atau "mahal tapi tidak berdampak".</p>
      
      <h3>Pilihan 1: Solusi Mandiri (Budget Terbatas)</h3>
      <p>Menggunakan platform <i>No-Code</i> seperti Wix atau Shopify. Biaya berkisar Rp 500rb - Rp 2,5jt per tahun. Kelebihannya adalah kontrol penuh di tangan Anda. Kekurangannya, Anda harus meluangkan waktu puluhan jam untuk belajar, dan optimasi SEO teknis biasanya sangat terbatas.</p>
      
      <h3>Pilihan 2: Jasa Freelancer (Menengah)</h3>
      <p>Biaya biasanya Rp 1,5jt - Rp 4jt. Sangat cocok untuk landing page sederhana. Tantangan utamanya adalah konsistensi dukungan teknis. Jika freelancer tersebut sibuk dengan proyek lain, website Anda mungkin akan terbengkalai jika terjadi error mendadak.</p>
      
      <h3>Pilihan 3: Studio/Agensi Profesional (Investasi Strategis)</h3>
      <p>Biaya mulai dari Rp 3jt hingga belasan juta rupiah. Di sini, Anda tidak hanya membeli kode, tapi membeli strategi pemasaran digital, desain kustom yang merepresentasikan brand, keamanan tingkat tinggi, dan dukungan teknis 24/7. Investasi ini biasanya balik modal (ROI) lebih cepat karena website dirancang khusus untuk konversi penjualan.</p>
      
      <h3>Apa Saja Komponen Biayanya?</h3>
      <ul>
        <li><b>Domain & Hosting:</b> Biaya sewa nama alamat web dan "rumah" penyimpanan data (tahunan).</li>
        <li><b>Design & Development:</b> Biaya tenaga ahli merancang layout dan fungsi sistem.</li>
        <li><b>Copywriting:</b> Biaya penulisan kata-kata yang persuasif untuk menarik pembeli.</li>
        <li><b>Maintenance:</b> Biaya update sistem dan keamanan agar website tidak mati atau kena hack.</li>
      </ul>
      
      <p><b>Saran Investasi:</b> Jangan tanyakan "berapa harganya?", tapi tanyakan "berapa banyak potensi pelanggan yang bisa saya dapatkan dari website ini?". Website berkualitas adalah salesman terbaik Anda yang bekerja 24 jam sehari.</p>
    `,
  },
  {
    slug: "keamanan-website-umkm",
    title: "5 Tanda Website Bisnis Anda Tidak Aman & Berisiko",
    date: "2026-06-08",
    category: "Keamanan",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: `
      <p>Banyak pemilik bisnis merasa bahwa website mereka "biasa saja" sehingga tidak mungkin diincar hacker. Faktanya, hacker sering mengincar UMKM karena sistem keamanannya yang lemah untuk digunakan sebagai jembatan serangan yang lebih besar atau sekadar mencuri data pelanggan.</p>
      
      <h3>1. Tidak Memiliki Sertifikat SSL (HTTPS)</h3>
      <p>Tanda paling jelas adalah adanya peringatan "Not Secure" di bar alamat browser. Selain membuat pengunjung takut, Google akan menurunkan peringkat website Anda secara drastis jika tidak menggunakan SSL.</p>
      
      <h3>2. Menggunakan Software/Plugin Bajakan (Nulled)</h3>
      <p>Menggunakan tema atau plugin "gratisan" hasil download ilegal sangat berbahaya. Seringkali di dalamnya sudah ditanam <i>malware</i> yang bisa mencuri data kartu kredit pelanggan atau mengirim email spam atas nama bisnis Anda.</p>
      
      <h3>3. Tidak Ada Backup Rutin</h3>
      <p>Website yang aman adalah website yang siap menghadapi kemungkinan terburuk. Jika website Anda mati atau terkena hack, dan Anda tidak punya file cadangan (backup), maka seluruh investasi digital Anda bisa hilang dalam sekejap.</p>
      
      <h3>4. Password yang Terlalu Sederhana</h3>
      <p>Hacker menggunakan bot untuk mencoba jutaan kombinasi password setiap detiknya. Menggunakan password seperti "admin123" atau nama bisnis Anda adalah tiket gratis bagi mereka untuk masuk ke sistem Anda.</p>
      
      <h3>5. Performa Lambat Tanpa Alasan Jelas</h3>
      <p>Jika website Anda tiba-tiba menjadi sangat lambat, bisa jadi sistem Anda sedang digunakan oleh hacker untuk menjalankan script ilegal di latar belakang tanpa Anda sadari.</p>
      
      <p><b>Rekomendasi Kami:</b> Selalu gunakan penyedia jasa yang memberikan garansi keamanan dan melakukan update sistem secara berkala. Keamanan bukan biaya, tapi proteksi aset.</p>
    `,
  },
  {
    slug: "landing-page-vs-website",
    title: "Landing Page vs Website Lengkap: Mana yang Menghasilkan Uang?",
    date: "2026-06-05",
    category: "Strategi",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: `
      <p>Sebelum membangun aset digital, Anda harus menentukan tujuannya. Apakah untuk promosi produk spesifik, atau untuk membangun rumah besar bagi brand Anda? Memahami perbedaan keduanya akan menghemat budget pemasaran Anda.</p>
      
      <h3>Apa itu Landing Page?</h3>
      <p>Ini adalah satu halaman khusus yang dirancang dengan satu tujuan: **Konversi**. Tidak ada menu navigasi yang membingungkan. Fokusnya hanya satu, misalnya: "Daftar Sekarang", "Beli Sekarang", atau "Hubungi WhatsApp". Sangat efektif jika Anda sedang menjalankan iklan Facebook Ads atau Google Ads.</p>
      
      <h3>Apa itu Website Lengkap?</h3>
      <p>Ini adalah profil perusahaan (Company Profile) yang terdiri dari banyak halaman (Home, About, Services, Blog, Contact). Tujuannya adalah membangun kredibilitas, memberikan informasi lengkap, dan sebagai investasi SEO jangka panjang agar bisnis Anda ditemukan di Google tanpa harus selalu bayar iklan.</p>
      
      <h3>Mana yang Harus Dipilih?</h3>
      <ul>
        <li><b>Pilih Landing Page jika:</b> Anda punya produk spesifik untuk dijual cepat, sedang promo diskon, atau butuh data leads (nomor WA) dalam waktu singkat.</li>
        <li><b>Pilih Website Lengkap jika:</b> Bisnis Anda butuh kepercayaan tinggi (seperti jasa kontraktor, konsultan, atau manufaktur), atau Anda ingin membangun otoritas brand di industri tersebut.</li>
      </ul>
      
      <p><b>Solusi Terbaik:</b> Mulailah dengan Landing Page untuk mendatangkan profit cepat, lalu kembangkan menjadi website lengkap seiring pertumbuhan bisnis Anda.</p>
    `,
  },
  {
    slug: "desain-website-konversi",
    title: "Kenapa Desain Minimalis Lebih Efektif Tingkatkan Penjualan?",
    date: "2026-06-03",
    category: "Desain UI/UX",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: `
      <p>Banyak pemilik bisnis ingin websitenya penuh dengan animasi warna-warni dan elemen dekoratif yang mencolok. Namun, data menunjukkan bahwa desain yang terlalu ramai justru menurunkan tingkat penjualan (Conversion Rate).</p>
      
      <h3>1. Menghilangkan Beban Kognitif</h3>
      <p>Otak manusia memiliki keterbatasan dalam memproses informasi. Jika website Anda terlalu penuh dengan teks dan gambar yang tidak perlu, pengunjung akan merasa lelah (Cognitive Load) dan akhirnya meninggalkan website Anda sebelum melakukan pembelian.</p>
      
      <h3>2. Fokus pada Tombol CTA (Call to Action)</h3>
      <p>Dalam desain minimalis, elemen yang paling menonjol adalah yang paling penting. Dengan banyak ruang kosong (White Space), tombol "Beli Sekarang" atau "Konsultasi" akan terlihat sangat jelas dan menarik minat klik pengunjung secara alami.</p>
      
      <h3>3. Waktu Loading yang Lebih Cepat</h3>
      <p>Elemen desain yang lebih sedikit berarti file yang harus didownload oleh browser pelanggan juga lebih kecil. Website yang cepat memberikan pengalaman pengguna (UX) yang jauh lebih baik, dan Google sangat menyukai website yang kencang.</p>
      
      <h3>4. Memberikan Kesan Profesional & Mewah</h3>
      <p>Coba perhatikan brand besar seperti Apple atau Tesla. Mereka menggunakan desain minimalis untuk menunjukkan kepercayaan diri. Bisnis Anda akan terlihat lebih elegan dan terpercaya di mata pelanggan dengan estetika yang bersih.</p>
      
      <p><b>Filosofi Lini Karya:</b> Kami percaya bahwa "Less is More". Kami mendesain website bukan sekadar agar terlihat indah, tapi agar setiap elemen di dalamnya memiliki fungsi untuk membantu bisnis Anda tumbuh.</p>
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
      <div className="max-w-4xl mx-auto">
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
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-tight mb-12">
            {post.title}
          </h1>

          <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden bg-muted border border-foreground/10 mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              priority
            />
          </div>
        </header>

        <div 
          className="font-mono text-sm md:text-base leading-relaxed text-foreground/80 space-y-12 blog-content max-w-3xl"
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
