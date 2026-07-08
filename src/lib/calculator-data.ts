// Konfigurasi Kalkulator Biaya Website.
// Harga base mengacu paket asli Lini Karya (lihat Pricing.tsx).
// Angka dalam Rupiah penuh.

export const WA_NUMBER = "6285166635038";

export type WebType = {
  id: string;
  name: string;
  desc: string;
  basePrice: number;
};

export type Feature = {
  id: string;
  name: string;
  desc: string;
  price: number;
};

// Jenis website — menentukan harga dasar.
export const webTypes: WebType[] = [
  {
    id: "landing",
    name: "Landing Page",
    desc: "Satu halaman fokus konversi untuk iklan atau produk tunggal.",
    basePrice: 1500000,
  },
  {
    id: "toko",
    name: "Toko Online",
    desc: "Katalog produk & checkout mandiri tanpa komisi platform.",
    basePrice: 2500000,
  },
  {
    id: "company",
    name: "Company Profile",
    desc: "Website perusahaan lengkap untuk kredibilitas bisnis.",
    basePrice: 7500000,
  },
  {
    id: "custom",
    name: "Custom System",
    desc: "Aplikasi web / dashboard dengan kebutuhan khusus.",
    basePrice: 15000000,
  },
];

// Fitur tambahan — menambah estimasi.
export const features: Feature[] = [
  {
    id: "checkout-wa",
    name: "Checkout via WhatsApp",
    desc: "Pesanan otomatis tersusun & terkirim ke WhatsApp Anda.",
    price: 500000,
  },
  {
    id: "payment",
    name: "Payment Gateway (QRIS/VA)",
    desc: "Pembayaran otomatis 24/7: QRIS, Virtual Account, e-Wallet.",
    price: 1500000,
  },
  {
    id: "booking",
    name: "Sistem Booking / Reservasi",
    desc: "Kalender jadwal & reservasi mandiri untuk pelanggan.",
    price: 2000000,
  },
  {
    id: "blog-seo",
    name: "Blog & Optimasi SEO",
    desc: "Modul artikel + struktur SEO agar ditemukan di Google.",
    price: 1000000,
  },
  {
    id: "multi-lang",
    name: "Multi Bahasa",
    desc: "Dukungan dua bahasa (mis. Indonesia & Inggris).",
    price: 1000000,
  },
  {
    id: "chatbot",
    name: "AI Chatbot 24/7",
    desc: "Asisten otomatis menjawab pertanyaan pelanggan kapan saja.",
    price: 2000000,
  },
  {
    id: "membership",
    name: "Membership / Login User",
    desc: "Area khusus member dengan sistem pendaftaran & login.",
    price: 2500000,
  },
  {
    id: "dashboard",
    name: "Dashboard Admin Custom",
    desc: "Panel kelola data & laporan sesuai kebutuhan bisnis.",
    price: 3000000,
  },
];

export const formatRupiah = (n: number) =>
  "Rp " + n.toLocaleString("id-ID");
