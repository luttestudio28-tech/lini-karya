"use client";

import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Toko Online",
    description: "Website katalog produk interaktif dengan sistem keranjang belanja dan checkout pesanan otomatis via WhatsApp.",
  },
  {
    id: "02",
    title: "Sistem & Dashboard",
    description: "Pengembangan sistem khusus yang canggih namun sangat mudah dioperasikan, bahkan untuk Anda yang tidak mengerti teknis sekalipun.",
  },
  {
    id: "03",
    title: "Company Profile",
    description: "Website perusahaan lengkap untuk menunjukkan kredibilitas bisnis Anda. Sangat mudah dikelola sendiri, semudah menggunakan WhatsApp.",
  },
];

const Services = () => {
  return (
    <section id="layanan" className="bg-background py-24 md:py-32 px-container border-t border-foreground/10 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="mb-24 md:mb-40 w-full text-center border-b border-foreground/10 pb-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block mb-8 font-bold">
            Layanan Kami
          </span>
          <h2 className="font-display text-[clamp(3.5rem,9vw,140px)] leading-[0.65] tracking-tighter mx-auto max-w-4xl">
            Solusi <br /> & <span className="italic-accent text-accent">Fungsi</span>
          </h2>
          <p className="mt-12 font-mono text-[10px] uppercase tracking-widest opacity-40 leading-relaxed max-w-sm mx-auto">
            Fokus pada pengembangan website yang memberikan hasil nyata bagi bisnis Anda.
          </p>
        </div>

        {/* Triple-Module Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full border border-foreground/10 divide-y md:divide-y-0 md:divide-x divide-foreground/10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative p-10 md:p-12 lg:p-16 flex flex-col justify-between min-h-[500px] md:min-h-[650px] hover:bg-foreground hover:text-background transition-colors duration-700"
            >
              {/* Header */}
              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] opacity-30 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                  Modul 0{index + 1}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Center Title */}
              <div className="my-16">
                <h3 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-[0.8] group-hover:italic-accent transition-all duration-500">
                  {service.title.split(' ').map((word, i) => (
                    <span key={i} className="block">
                      {word}
                    </span>
                  ))}
                </h3>
              </div>

              {/* Bottom Description */}
              <div className="space-y-8">
                <p className="font-mono text-[10px] md:text-sm tracking-wide leading-relaxed opacity-50 group-hover:opacity-100 transition-opacity">
                  {service.description}
                </p>
                <div className="pt-8 border-t border-foreground/5 group-hover:border-background/20 font-mono text-[10px] uppercase tracking-widest text-accent font-bold cursor-pointer opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  [ KONSULTASI GRATIS ] ↗
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
