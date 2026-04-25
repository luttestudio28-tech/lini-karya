"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-24 md:py-32 px-container overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-24">
          {/* Main CTA */}
          <div className="flex flex-col gap-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="font-body text-xs md:text-sm uppercase tracking-[0.4em] text-background/40"
            >
              Mulai Kolaborasi
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-display text-5xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter"
            >
              Mari bangun <br />
              <span className="italic text-accent">sesuatu</span> yang <br />
              luar biasa.
            </motion.h2>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8 pt-24 border-t border-background/10">
            {/* Contact */}
            <div className="flex flex-col gap-6">
              <span className="font-body text-[10px] uppercase tracking-widest text-background/30">Kontak</span>
              <div className="flex flex-col gap-4">
                <a 
                  href="mailto:hello@linikarya.com" 
                  className="font-display text-xl md:text-2xl hover:text-accent transition-colors duration-300 w-fit"
                >
                  hello@linikarya.com
                </a>
                <a 
                  href="https://wa.me/628123456789" 
                  className="font-display text-xl md:text-2xl hover:text-accent transition-colors duration-300 w-fit"
                >
                  +62 812 3456 789
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-6">
              <span className="font-body text-[10px] uppercase tracking-widest text-background/30">Sosial</span>
              <div className="flex flex-col gap-4">
                <a 
                  href="#" 
                  className="font-display text-xl md:text-2xl hover:text-accent transition-colors duration-300 w-fit"
                >
                  Instagram
                </a>
                <a 
                  href="#" 
                  className="font-display text-xl md:text-2xl hover:text-accent transition-colors duration-300 w-fit"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Office / Location */}
            <div className="flex flex-col gap-6 lg:col-span-2 lg:text-right">
              <span className="font-body text-[10px] uppercase tracking-widest text-background/30">Lokasi</span>
              <p className="font-display text-xl md:text-2xl text-background/70">
                Jakarta, Indonesia <br />
                & Remote Worldwide
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-16 border-t border-background/10">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-display text-2xl tracking-tighter"
            >
              Lini Karya<span className="text-accent">.</span>
            </motion.div>
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-background/30">
              © 2024 Lini Karya. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
