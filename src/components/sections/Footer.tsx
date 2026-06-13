"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="kontak" className="bg-foreground text-background py-24 md:py-32 px-container overflow-hidden relative border-t border-background/10">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Header */}
        <div className="mb-24 md:mb-32">
          <div className="flex justify-between items-center mb-12 opacity-30 font-mono text-[9px] uppercase tracking-[0.5em]">
            <span>Hubungi Kami</span>
            <span className="hidden md:block">LINI KARYA STUDIO // BANDUNG</span>
          </div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-display text-[clamp(3.5rem,10vw,10rem)] leading-[0.75] tracking-[-0.06em] uppercase"
          >
            Siap Jadi <br />
            <span className="text-accent italic">Mitra?</span>
          </motion.h2>
        </div>

        {/* Triple-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-background/10 pt-16 gap-16 lg:gap-0">
          
          {/* Col 1: Direct Contact */}
          <div className="lg:col-span-5 lg:pr-16 lg:border-r border-background/10">
            <p className="font-mono text-sm tracking-wide leading-relaxed mb-12 opacity-50">
              Tanyakan apa saja mengenai kebutuhan website bisnis Anda. Kami siap membantu dengan solusi terbaik untuk perkembangan usaha Anda.
            </p>
            <div className="space-y-2 group cursor-pointer">
              <span className="font-mono text-[9px] uppercase tracking-widest opacity-30 group-hover:text-accent transition-colors">Email Kami</span>
              <a href="mailto:halo@linikarya.com" className="block font-display text-2xl md:text-4xl lg:text-5xl uppercase tracking-tighter hover:text-accent transition-colors">
                halo@linikarya.com
              </a>
            </div>
          </div>

          {/* Col 2: Social Matrix */}
          <div className="lg:col-span-3 lg:px-16 lg:border-r border-background/10">
            <span className="font-mono text-[9px] uppercase tracking-widest opacity-30 block mb-12">Media Sosial</span>
            <div className="flex flex-col gap-6 font-display text-2xl uppercase tracking-tighter">
              <a href="https://www.instagram.com/linikaryastudio/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex justify-between items-center group">
                <span>Instagram</span>
                <span className="font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity">[ ↗ ]</span>
              </a>
              <a href="#" className="hover:text-accent transition-colors flex justify-between items-center group">
                <span>LinkedIn</span>
                <span className="font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity">[ ↗ ]</span>
              </a>
              <a href="#" className="hover:text-accent transition-colors flex justify-between items-center group">
                <span>Dribbble</span>
                <span className="font-mono text-sm opacity-0 group-hover:opacity-100 transition-opacity">[ ↗ ]</span>
              </a>
            </div>
          </div>

          {/* Col 3: Studio Location */}
          <div className="lg:col-span-4 lg:pl-16">
            <span className="font-mono text-[9px] uppercase tracking-widest opacity-30 block mb-12">Lokasi Utama</span>
            <div className="space-y-8">
              <p className="font-display text-2xl md:text-4xl uppercase tracking-tighter leading-none">
                BANDUNG, <br /> INDONESIA
              </p>
              <div className="pt-8 border-t border-background/5 space-y-2 font-mono text-[9px] uppercase tracking-[0.2em] opacity-30">
                <p>Melayani Klien Seluruh Indonesia</p>
              </div>
            </div>
          </div>

        </div>

        {/* Final Utility Bar */}
        <div className="mt-32 pt-12 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-8 opacity-20">
          <div className="font-mono text-[10px] uppercase tracking-[0.4em]">
            LINI KARYA © 2026 // HAK CIPTA DILINDUNGI
          </div>
          <div className="flex gap-12 font-mono text-[9px] uppercase tracking-widest">
            <a href="#" className="hover:text-background transition-colors">Protokol Privasi</a>
            <a href="#" className="hover:text-background transition-colors">Ketentuan Pengguna</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
