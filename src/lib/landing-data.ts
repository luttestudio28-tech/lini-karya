// Data konten untuk halaman landing komersial (targeting keyword bernilai jual).
// Tiap halaman punya konten unik agar tidak dianggap "doorway page" oleh Google.

export type LandingSection = {
  heading: string;
  body: string;
};

export type LandingPackage = {
  name: string;
  price: string; // "2.500.000" atau "Kustom"
  label: string;
  features: string[];
};

export type LandingFaq = {
  question: string;
  answer: string;
};

// Menentukan tata letak visual halaman agar tiap layanan tampil berbeda.
export type LandingVariant = "editorial" | "commerce" | "corporate";

export type LandingPage = {
  slug: string;
  variant: LandingVariant;
  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  serviceType: string;
  // Hero
  eyebrow: string;
  titleLines: string[]; // baris judul H1 (baris terakhir = aksen)
  intro: string;
  // Isi
  problems: LandingSection[];
  solutions: LandingSection[];
  packages: LandingPackage[];
  faqs: LandingFaq[];
  // Opsional, khas per-variant
  stats?: { value: string; label: string }[];
  steps?: LandingSection[];
  // Social proof
  testimonial: { quote: string; author: string; role: string };
  // Konten unik khas per-halaman (agar tidak duplikat dengan homepage)
  deepDive?: { heading: string; paragraphs: string[] };
  areaServed?: string[];
  comparison?: {
    heading: string;
    labelA: string;
    labelB: string;
    rows: { aspect: string; a: string; b: string }[];
  };
  checklist?: { heading: string; intro: string; items: string[] };
  // Internal linking
  relatedBlogSlugs: string[];
};

const WA = "6285166635038";
export const waLink = (text: string) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

export const landingPages: LandingPage[] = [
  {
    slug: "jasa-pembuatan-website-bandung",
    variant: "editorial",
    metaTitle: "Jasa Pembuatan Website Bandung — Profesional & SEO Ready",
    metaDescription:
      "Jasa pembuatan website profesional di Bandung untuk UMKM & bisnis lokal. Desain premium, cepat, SEO-ready, dan mudah dikelola. Konsultasi gratis via WhatsApp.",
    keywords: [
      "jasa pembuatan website bandung",
      "jasa website bandung",
      "jasa pembuatan website profesional bandung",
      "web developer bandung",
      "jasa website umkm bandung",
    ],
    serviceType: "Jasa Pembuatan Website",
    eyebrow: "Jasa Website Bandung",
    titleLines: ["Jasa Website", "Profesional", "di Bandung"],
    intro:
      "Lini Karya adalah studio arsitektur digital berbasis di Bandung yang membangun website cepat, profesional, dan siap ditemukan di Google. Kami membantu UMKM dan pengusaha lokal punya kehadiran digital yang serius — bukan sekadar website yang 'ada', tapi yang benar-benar mendatangkan pelanggan.",
    problems: [
      {
        heading: "Website Lama Sepi Pengunjung",
        body: "Banyak bisnis Bandung sudah punya website, tapi tidak pernah muncul di Google dan tidak menghasilkan satu pun lead. Biasanya karena dibangun tanpa struktur SEO yang benar sejak awal.",
      },
      {
        heading: "Loading Lambat & Berantakan di HP",
        body: "Lebih dari 90% pengunjung Anda membuka lewat smartphone. Website yang lemot atau tampil berantakan di HP membuat calon pelanggan langsung menutupnya sebelum sempat menghubungi Anda.",
      },
      {
        heading: "Terlalu Bergantung pada Media Sosial",
        body: "Instagram bisa kena shadowban, algoritma bisa berubah kapan saja. Tanpa website milik sendiri, bisnis Anda berdiri di atas 'tanah sewaan' yang bisa hilang dalam semalam.",
      },
    ],
    solutions: [
      {
        heading: "Dibangun SEO-Ready Sejak Awal",
        body: "Struktur heading, metadata, schema, dan kecepatan kami optimasi dari fondasi — supaya bisnis Anda punya peluang muncul saat orang mencari layanan Anda di Google.",
      },
      {
        heading: "Cepat & Mobile-First",
        body: "Kami memakai teknologi web modern (Next.js) yang ringan dan kencang, dirancang mengutamakan tampilan sempurna di layar smartphone.",
      },
      {
        heading: "Mudah Dikelola Sendiri",
        body: "Kalau Anda bisa pakai WhatsApp, Anda bisa mengelola website ini. Ganti harga, foto, atau artikel tanpa perlu bayar teknisi lagi.",
      },
      {
        heading: "Melayani Bandung & Seluruh Indonesia",
        body: "Basis kami di Bandung, tapi kami melayani klien dari seluruh Indonesia. Konsultasi dan pengerjaan bisa 100% jarak jauh dengan komunikasi yang jelas.",
      },
    ],
    packages: [
      {
        name: "Toko Online",
        price: "2.500.000",
        label: "Optimasi Jualan",
        features: [
          "Katalog Produk & Keranjang Belanja",
          "Checkout langsung ke WhatsApp",
          "Desain Premium (Mobile-First)",
          "Bebas potongan komisi platform",
        ],
      },
      {
        name: "Company Profile",
        price: "7.500.000",
        label: "Kredibilitas Bisnis",
        features: [
          "Hingga 5 halaman terintegrasi",
          "Bisa edit isi web sendiri",
          "Muncul di pencarian Google",
          "Email bisnis nama perusahaan",
        ],
      },
      {
        name: "Custom System",
        price: "Kustom",
        label: "Solusi Khusus",
        features: [
          "Aplikasi web / dashboard custom",
          "Sistem database sesuai kebutuhan",
          "Performa tinggi tanpa lemot",
          "Bantuan teknis prioritas",
        ],
      },
    ],
    faqs: [
      {
        question: "Berapa biaya pembuatan website di Bandung?",
        answer:
          "Investasi kami mulai dari Rp 2.500.000 untuk toko online, dan Rp 7.500.000 untuk company profile lengkap. Semua paket sudah termasuk domain dan hosting kencang untuk tahun pertama.",
      },
      {
        question: "Apakah harus bertemu langsung di Bandung?",
        answer:
          "Tidak wajib. Kami melayani klien dari seluruh Indonesia secara jarak jauh. Namun untuk klien area Bandung, kami dengan senang hati bisa berdiskusi langsung bila diperlukan.",
      },
      {
        question: "Berapa lama pengerjaannya?",
        answer:
          "Rata-rata 4 hingga 8 minggu tergantung kompleksitas, agar website dibangun dengan teliti dan bebas kendala di kemudian hari.",
      },
      {
        question: "Apakah website-nya sudah dioptimasi untuk Google (SEO)?",
        answer:
          "Ya. Setiap website kami bangun dengan fondasi teknis SEO yang benar: struktur heading, metadata, schema markup, dan kecepatan optimal.",
      },
    ],
    testimonial: {
      quote:
        "Lini Karya tidak hanya membangun website, mereka membangun identitas digital yang selama ini kami cari namun sulit kami bahasakan. Hasilnya sangat memuaskan.",
      author: "Budi Santoso",
      role: "Pemilik Aluna Studio",
    },
    steps: [
      {
        heading: "Konsultasi & Riset",
        body: "Kami pelajari bisnis, target pelanggan, dan kompetitor Anda di Bandung untuk menyusun strategi website yang tepat sasaran.",
      },
      {
        heading: "Desain & Struktur",
        body: "Merancang tampilan premium sekaligus struktur SEO yang benar sejak fondasi — bukan tempelan di akhir.",
      },
      {
        heading: "Pengembangan Cepat",
        body: "Dibangun dengan teknologi modern (Next.js) agar ringan, kencang, dan sempurna di layar smartphone.",
      },
      {
        heading: "Peluncuran & Pendampingan",
        body: "Website tayang, terhubung ke Google, dan Anda diajari mengelolanya sendiri. Konsultasi tetap berlanjut.",
      },
    ],
    deepDive: {
      heading: "Kenapa Bisnis di Bandung Wajib Punya Website Sendiri",
      paragraphs: [
        "Bandung punya ekosistem UMKM, kuliner, fesyen, dan industri kreatif yang sangat padat. Artinya kompetisi juga sengit. Saat calon pelanggan mengetik “kuliner enak Bandung”, “jasa arsitek Bandung”, atau “toko baju Bandung” di Google, bisnis yang muncul di halaman pertamalah yang menang. Kalau Anda hanya mengandalkan Instagram, Anda tidak ada di percakapan itu.",
        "Website milik sendiri adalah aset digital yang Anda kuasai penuh — berbeda dengan media sosial yang bisa kena shadowban atau berubah algoritma kapan saja. Ini fondasi yang membuat bisnis Anda tidak lumpuh hanya karena satu platform bermasalah.",
        "Kombinasi website yang cepat, terstruktur SEO, dan terhubung dengan Google Business Profile inilah yang membuat bisnis lokal Bandung ditemukan tepat saat pelanggan sedang mencari. Kami membangun keduanya sekaligus, bukan sekadar menyerahkan website lalu pergi.",
      ],
    },
    areaServed: [
      "Kota Bandung",
      "Cimahi",
      "Kabupaten Bandung",
      "Bandung Barat",
      "Sumedang",
      "& Seluruh Indonesia",
    ],
    relatedBlogSlugs: ["seo-lokal", "kenapa-website-sepi-pengunjung", "harga-website-umkm-2026"],
  },
  {
    slug: "jasa-pembuatan-toko-online",
    variant: "commerce",
    metaTitle: "Jasa Pembuatan Toko Online — Website Jualan Tanpa Komisi",
    metaDescription:
      "Jasa pembuatan toko online mandiri: katalog produk, checkout WhatsApp, & pembayaran otomatis. Lepas dari potongan komisi marketplace. Konsultasi gratis.",
    keywords: [
      "jasa pembuatan toko online",
      "jasa pembuatan website toko online",
      "bikin website jualan",
      "website e-commerce umkm",
      "jasa website online shop",
    ],
    serviceType: "Jasa Pembuatan Toko Online",
    eyebrow: "Jasa Toko Online",
    titleLines: ["Toko Online", "Mandiri", "Tanpa Komisi"],
    intro:
      "Berhenti menyerahkan 20–25% keuntungan Anda ke potongan marketplace. Kami membangun toko online milik Anda sendiri — katalog produk yang menarik, checkout mulus ke WhatsApp, dan opsi pembayaran otomatis — supaya setiap rupiah penjualan tetap jadi milik Anda.",
    problems: [
      {
        heading: "Keuntungan Habis untuk Komisi Platform",
        body: "Marketplace dan aplikasi pengiriman memotong 20–25% per transaksi. Untuk bisnis dengan margin tipis, angka ini bisa menghabiskan seluruh keuntungan bersih Anda.",
      },
      {
        heading: "Perang Harga Tak Berujung",
        body: "Di marketplace produk Anda disejajarkan dengan puluhan kompetitor. Pelanggan membeli dari 'mall'-nya, bukan dari brand Anda, sehingga loyalitas rendah dan harga terus ditekan.",
      },
      {
        heading: "Data Pelanggan Bukan Milik Anda",
        body: "Marketplace merahasiakan nomor dan email pembeli. Anda tidak bisa follow-up pelanggan lama atau membangun program loyalitas.",
      },
    ],
    solutions: [
      {
        heading: "Katalog Premium & Mobile-First",
        body: "Produk ditampilkan dengan fotografi memukau dan pengalaman belanja yang mulus di smartphone, lengkap dengan keranjang belanja.",
      },
      {
        heading: "Checkout Langsung ke WhatsApp",
        body: "Pelanggan cukup memilih produk, dan pesanan tersusun rapi otomatis terkirim ke WhatsApp Anda. Tanpa ribet, cocok untuk UMKM.",
      },
      {
        heading: "Opsi Pembayaran Otomatis (QRIS)",
        body: "Butuh lebih canggih? Kami bisa integrasikan payment gateway (QRIS, Virtual Account, e-Wallet) agar pembayaran terkonfirmasi otomatis 24/7.",
      },
      {
        heading: "Bangun Database & Brand Sendiri",
        body: "Semua trafik dan data pelanggan masuk ke aset milik Anda, sehingga Anda bisa membangun loyalitas dan menjual produk premium tanpa perang harga.",
      },
    ],
    packages: [
      {
        name: "Toko Online",
        price: "2.500.000",
        label: "Paling Populer",
        features: [
          "Katalog Produk & Keranjang Belanja",
          "Sistem Checkout ke WhatsApp",
          "Desain Premium (Mobile-First)",
          "Bebas Potongan Komisi Penjualan",
          "Gratis Konsultasi Selamanya",
        ],
      },
      {
        name: "Custom System",
        price: "Kustom",
        label: "Skala Lebih Besar",
        features: [
          "Payment Gateway Otomatis (QRIS/VA)",
          "Sistem membership & loyalty",
          "Manajemen stok / inventaris",
          "Bantuan teknis prioritas",
        ],
      },
    ],
    faqs: [
      {
        question: "Apakah toko online-nya kena potongan komisi?",
        answer:
          "Tidak. Ini toko milik Anda sepenuhnya — 100% hasil penjualan masuk ke Anda, tanpa potongan komisi seperti di marketplace atau aplikasi pengiriman.",
      },
      {
        question: "Apakah bisa pakai pembayaran QRIS otomatis?",
        answer:
          "Bisa. Kami dapat mengintegrasikan payment gateway seperti Midtrans atau Xendit agar pelanggan bisa membayar via QRIS, Virtual Account, dan e-Wallet dengan konfirmasi otomatis.",
      },
      {
        question: "Berapa biaya pembuatan toko online?",
        answer:
          "Paket Toko Online kami mulai dari Rp 2.500.000, sudah termasuk domain, hosting tahun pertama, dan desain premium mobile-first.",
      },
      {
        question: "Apakah saya bisa menambah/mengubah produk sendiri?",
        answer:
          "Sangat bisa. Kami sediakan panel yang mudah — semudah menggunakan WhatsApp — untuk mengelola produk, harga, dan foto secara mandiri.",
      },
    ],
    stats: [
      { value: "0%", label: "Potongan komisi penjualan" },
      { value: "24/7", label: "Toko buka & terima order otomatis" },
      { value: "100%", label: "Data pelanggan jadi milik Anda" },
    ],
    testimonial: {
      quote:
        "Efisiensi operasional kami meningkat tajam setelah transisi ke platform baru. Desain yang bersih benar-benar berdampak pada kepercayaan pelanggan kami.",
      author: "Siti Aminah",
      role: "Founder Grosir Beras",
    },
    comparison: {
      heading: "Marketplace vs Toko Online Sendiri",
      labelA: "Marketplace",
      labelB: "Toko Sendiri",
      rows: [
        { aspect: "Potongan komisi", a: "20–25% tiap transaksi", b: "0% — 100% milik Anda" },
        { aspect: "Data pelanggan", a: "Dirahasiakan platform", b: "Sepenuhnya milik Anda" },
        { aspect: "Perang harga", a: "Disandingkan kompetitor", b: "Hanya produk Anda" },
        { aspect: "Branding", a: "Terbatas template", b: "Bebas & premium" },
        { aspect: "Kepemilikan", a: "Menyewa lapak", b: "Aset milik sendiri" },
      ],
    },
    relatedBlogSlugs: [
      "qris-payment-otomatis-website",
      "website-pribadi-vs-marketplace",
      "studi-kasus-kopi-lokal",
    ],
  },
  {
    slug: "jasa-pembuatan-company-profile",
    variant: "corporate",
    metaTitle: "Jasa Pembuatan Website Company Profile Perusahaan",
    metaDescription:
      "Jasa pembuatan website company profile profesional untuk membangun kredibilitas perusahaan. Desain premium, SEO-ready, mudah dikelola. Konsultasi gratis.",
    keywords: [
      "jasa pembuatan company profile",
      "jasa website company profile",
      "website perusahaan",
      "company profile perusahaan",
      "jasa pembuatan website perusahaan",
    ],
    serviceType: "Jasa Pembuatan Website Company Profile",
    eyebrow: "Jasa Company Profile",
    titleLines: ["Company", "Profile", "Berkelas"],
    intro:
      "Kesan pertama menentukan kepercayaan. Website company profile yang dirancang dengan presisi mengubah persepsi bisnis Anda dari 'toko biasa' menjadi brand profesional yang layak dipercaya — dan berani memasang harga premium tanpa diprotes.",
    problems: [
      {
        heading: "Bisnis Terlihat Kurang Meyakinkan",
        body: "Calon klien besar akan mencari Anda di Google. Kalau yang muncul hanya akun media sosial biasa, kredibilitas Anda dipertanyakan sebelum diskusi dimulai.",
      },
      {
        heading: "Sulit Menjelaskan Nilai & Layanan",
        body: "Profil media sosial terlalu sempit untuk menampilkan portofolio, layanan, dan cerita brand secara utuh dan profesional.",
      },
      {
        heading: "Kalah Bersaing di Tender / B2B",
        body: "Dalam bisnis jasa dan B2B, website perusahaan yang rapi sering jadi syarat tak tertulis untuk dianggap serius oleh mitra dan klien korporat.",
      },
    ],
    solutions: [
      {
        heading: "Desain Premium yang Membangun Trust",
        body: "Tipografi berkelas, ruang kosong yang tenang, dan tata letak presisi memberi sinyal bahwa bisnis Anda profesional dan memperhatikan detail.",
      },
      {
        heading: "Hingga 5 Halaman Terintegrasi",
        body: "Home, Tentang, Layanan, Portofolio, hingga Kontak — semua tersusun untuk memandu pengunjung memahami dan mempercayai bisnis Anda.",
      },
      {
        heading: "Muncul di Pencarian Google",
        body: "Dibangun SEO-ready agar perusahaan Anda dapat ditemukan saat calon klien mencari layanan yang Anda tawarkan.",
      },
      {
        heading: "Kelola Sendiri dengan Mudah",
        body: "Perbarui portofolio, tim, atau layanan kapan saja lewat panel yang sederhana, tanpa ketergantungan teknis.",
      },
    ],
    packages: [
      {
        name: "Company Profile",
        price: "7.500.000",
        label: "Kredibilitas Bisnis",
        features: [
          "Hingga 5 Halaman Terintegrasi",
          "Bisa Edit Isi Web Sendiri",
          "Muncul di Pencarian Google",
          "Email Bisnis Nama Perusahaan",
          "Keamanan & Backup Rutin",
        ],
      },
      {
        name: "Custom System",
        price: "Kustom",
        label: "Kebutuhan Khusus",
        features: [
          "Halaman & fitur tanpa batas",
          "Integrasi sistem internal",
          "Dashboard / portal klien",
          "Bantuan teknis prioritas 24/7",
        ],
      },
    ],
    faqs: [
      {
        question: "Apa saja yang termasuk dalam paket company profile?",
        answer:
          "Paket Company Profile kami (mulai Rp 7.500.000) mencakup hingga 5 halaman terintegrasi, email bisnis, optimasi Google, keamanan & backup rutin, serta domain dan hosting tahun pertama.",
      },
      {
        question: "Apakah saya bisa mengelola isi website sendiri?",
        answer:
          "Ya. Kami memberikan panel kontrol yang mudah digunakan. Jika Anda terbiasa dengan WhatsApp atau Facebook, Anda pasti bisa mengelolanya sendiri.",
      },
      {
        question: "Berapa lama pengerjaan company profile?",
        answer:
          "Umumnya 4 hingga 8 minggu, memastikan setiap halaman dibangun teliti dan mencerminkan profesionalisme bisnis Anda.",
      },
      {
        question: "Apakah bisa menambah fitur khusus seperti karier atau portal klien?",
        answer:
          "Bisa. Untuk kebutuhan lanjutan seperti halaman karier, portal klien, atau integrasi sistem internal, kami tawarkan paket Custom System.",
      },
    ],
    testimonial: {
      quote:
        "Visi bisnis kami yang kompleks diterjemahkan dengan sangat elegan. Investasi yang sangat berharga untuk pertumbuhan brand kami ke depan.",
      author: "Irwan Hakim",
      role: "CEO NovaFlow",
    },
    checklist: {
      heading: "Ciri Company Profile yang Benar-Benar Kredibel",
      intro:
        "Bukan sekadar 'punya website'. Inilah elemen yang membuat calon klien besar percaya sebelum diskusi dimulai:",
      items: [
        "Halaman Tentang yang menceritakan siapa Anda & kredibilitas tim",
        "Portofolio atau studi kasus dengan hasil yang nyata",
        "Layanan dijelaskan lewat manfaat, bukan sekadar daftar fitur",
        "Testimoni & logo klien sebagai bukti sosial",
        "Kontak dan tombol aksi mudah dijangkau di setiap halaman",
        "Kecepatan tinggi & tampilan sempurna di smartphone",
        "Email domain sendiri (nama@perusahaan.com)",
        "Struktur SEO agar ditemukan calon klien di Google",
      ],
    },
    relatedBlogSlugs: [
      "rebranding-digital-naikkan-harga",
      "desain-website-konversi",
      "landing-page-vs-website",
    ],
  },
];

export const getLandingPage = (slug: string) =>
  landingPages.find((p) => p.slug === slug);
