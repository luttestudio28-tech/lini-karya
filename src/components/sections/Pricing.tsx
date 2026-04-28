"use client";

import { motion } from "framer-motion";

const packages = [
  {
    name: "Landing Page",
    description: "SISTEM SATU HALAMAN YANG DIOPTIMALKAN UNTUK MENGUBAH PENGUNJUNG MENJADI PEMBELI.",
    price: "2.500.000",
    priceLabel: "OPTIMASI KONVERSI",
    features: [
      "1 Halaman Landing Page Premium",
      "Struktur Psikologi Penjualan",
      "Sistem Cepat (WordPress)",
      "Integrasi WhatsApp & Tracking",
      "Dukungan Teknis Jangka Panjang"
    ]
  },
  {
    name: "Corporate Web",
    description: "EKOSISTEM DIGITAL MULTI-HALAMAN UNTUK KREDIBILITAS BISNIS UMKM YANG SEDANG BERKEMBANG.",
    price: "7.500.000",
    priceLabel: "EKOSISTEM KONTEN",
    features: [
      "Hingga 5 Halaman Terintegrasi",
      "Sistem CMS Handal & Mudah",
      "Optimasi SEO & Kecepatan",
      "Keamanan SSL & Backup Rutin",
      "Partner Konsultasi Berkelanjutan"
    ]
  },
  {
    name: "Custom System",
    description: "ARSITEKTUR DIGITAL KHUSUS UNTUK KEBUTUHAN APLIKASI WEB DAN DASHBOARD YANG KOMPLEKS.",
    price: "Kustom",
    priceLabel: "ARSITEKTUR KHUSUS",
    features: [
      "Custom Web App / Dashboard",
      "Arsitektur Modern (Next.js / React)",
      "Sistem Database & API Khusus",
      "Skalabilitas & Performa Tinggi",
      "Prioritas Dukungan 24/7"
    ]
  },
];

const Pricing = () => {
  const handleApply = (pkg: typeof packages[0]) => {
    const priceText = pkg.price !== "Kustom" ? ` senilai Rp ${pkg.price}` : "";
    const message = encodeURIComponent(`Halo Lini Karya, saya tertarik mendiskusikan pembuatan website dengan fokus ${pkg.name} (${pkg.priceLabel})${priceText}.`);
    window.open(`https://wa.me/6285166635038?text=${message}`, "_blank");
  };

  return (
    <section id="biaya" className="bg-background py-24 md:py-32 border-t border-foreground/10 overflow-hidden relative">
      <div className="px-container mb-24 md:mb-40">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-2xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block mb-8 font-bold">
              [ 06 // PILIHAN INVESTASI ]
            </span>
            <h2 className="font-display text-[clamp(3.5rem,10vw,10rem)] leading-[0.8] uppercase tracking-tighter">
              Mulai <br /> <span className="italic-accent text-accent">Kolaborasi</span>
            </h2>
          </div>
          <div className="max-w-xs md:text-right font-mono text-[10px] uppercase tracking-widest opacity-40 leading-relaxed">
            INVESTASI TERJANGKAU UNTUK TRANSFORMASI DIGITAL UMKM DENGAN STANDAR KUALITAS PREMIUM.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-y border-foreground/10">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`flex flex-col p-10 lg:p-16 group hover:bg-foreground hover:text-background transition-colors duration-700 relative ${
              index !== packages.length - 1 ? "md:border-r border-b md:border-b-0 border-foreground/10" : ""
            }`}
          >
            {/* Package Label */}
            <div className="flex justify-between items-start mb-20">
              <span className="font-mono text-[10px] opacity-30 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
              <span className="font-mono text-[10px] tracking-widest uppercase text-accent font-bold group-hover:text-background transition-colors">{pkg.priceLabel}</span>
            </div>

            {/* Price */}
            <div className="mb-12">
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-40 block mb-4">INVESTASI MINIMUM</span>
              <div className="font-display text-5xl lg:text-6xl tracking-tighter leading-none group-hover:scale-105 transition-transform duration-700 origin-left">
                {pkg.price !== "Kustom" && <span className="text-xl opacity-20 mr-2">RP</span>}{pkg.price}
              </div>
            </div>

            {/* Content */}
            <div className="mt-8 space-y-10">
              <div>
                <h3 className="font-display text-4xl uppercase tracking-tighter group-hover:italic-accent transition-all duration-500 mb-4">
                  {pkg.name}
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-widest leading-relaxed opacity-60 group-hover:opacity-100">
                  {pkg.description}
                </p>
              </div>

              {/* Feature List */}
              <div className="space-y-4 pt-8 border-t border-foreground/5 group-hover:border-background/10">
                {pkg.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="font-mono text-[10px] text-accent group-hover:text-background transition-colors shrink-0">[+]</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest opacity-70 group-hover:opacity-100">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="mt-auto pt-20">
              <button 
                onClick={() => handleApply(pkg)}
                className="w-full font-mono text-[10px] uppercase tracking-widest border border-foreground/20 group-hover:border-background/40 py-5 text-center group-hover:bg-background group-hover:text-foreground transition-all cursor-pointer font-bold"
              >
                [ AJUKAN PROYEK ]
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Architectural Stamp */}
      <div className="px-container py-12 flex justify-between font-mono text-[9px] uppercase tracking-[0.4em] opacity-20">
        <span>LINI KARYA // ARSITEKTUR FINANSIAL V.04</span>
        <span className="hidden md:inline">SISTEM TERKONFIRMASI // SIAP UNTUK PENINGKATAN</span>
      </div>
    </section>
  );
};

export default Pricing;
