"use client";

import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Landing Page High-Conv",
    description: "SISTEM PENJUALAN SATU HALAMAN YANG 100% RESPONSIF DI HP DAN DIRANCANG KHUSUS UNTUK MENGUBAH PENGUNJUNG MENJADI PEMBELI.",
  },
  {
    id: "02",
    title: "Dashboard & Web App",
    description: "PENGEMBANGAN SISTEM INTERNAL YANG CANGGIH NAMUN SANGAT MUDAH DIOPERASIKAN, BAHKAN UNTUK ANDA YANG TIDAK MENGERTI TEKNIS SEKALIPUN.",
  },
  {
    id: "03",
    title: "Corporate Web & CMS",
    description: "WEBSITE PERUSAHAAN MULTI-HALAMAN DENGAN PANEL KONTROL MANDIRI. JIKA ANDA BISA PAKAI WHATSAPP, ANDA PASTI BISA MENGELOLA WEBSITE INI.",
  },
];

const Services = () => {
  return (
    <section id="layanan" className="bg-background py-24 md:py-32 px-container border-t border-foreground/10 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* Section Header - Consistent Mega Style */}
        <div className="mb-24 md:mb-40 w-full text-center border-b border-foreground/10 pb-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block mb-8 font-bold">
            [ 02 // SPESIALISASI WEB ]
          </span>
          <h2 className="font-display text-[clamp(3.5rem,10vw,10rem)] leading-[0.65] uppercase tracking-tighter mx-auto max-w-4xl">
            Solusi <br /> & <span className="italic opacity-20">Fungsi</span>
          </h2>
          <p className="mt-12 font-mono text-[10px] uppercase tracking-widest opacity-40 leading-relaxed max-w-sm mx-auto">
            FOKUS PADA PENGEMBANGAN LANDING PAGE DAN DASHBOARD BERPERFORMA TINGGI.
          </p>
        </div>

        {/* Industrial Triple-Module Grid */}
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
              {/* Header: ID */}
              <div className="flex justify-between items-start">
                <span className="font-mono text-[10px] opacity-30 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                  REF ID {service.id} // WEB DEV MODULE
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Center: Massive Title - Reduced font size for better balance */}
              <div className="my-16">
                <h3 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-[0.8] group-hover:italic-accent transition-all duration-500">
                  {service.title.split(' ').map((word, i) => (
                    <span key={i} className="block">
                      {word}
                    </span>
                  ))}
                </h3>
              </div>

              {/* Bottom: Technical Description */}
              <div className="space-y-8">
                <p className="font-mono text-[10px] md:text-[11px] uppercase tracking-widest leading-relaxed opacity-50 group-hover:opacity-100 transition-opacity">
                  {service.description}
                </p>
                <div className="pt-8 border-t border-foreground/5 group-hover:border-background/20 font-mono text-[10px] uppercase tracking-widest text-accent font-bold cursor-pointer opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                  [ ANALISIS KEBUTUHAN ] ↗
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Node */}
        <div className="w-full py-12 flex justify-between font-mono text-[9px] uppercase tracking-[0.4em] opacity-20 px-4">
          <span>LINI KARYA // WEB DEVELOPMENT ENGINE V.04</span>
          <span>READY FOR DEPLOYMENT</span>
        </div>
      </div>
    </section>
  );
};

export default Services;
