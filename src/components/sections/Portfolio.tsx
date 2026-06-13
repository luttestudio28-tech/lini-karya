"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: "01",
    title: "Sentinel",
    category: "Sistem Keamanan Web",
    tech: "Teknologi Modern & Cepat",
    image: "/sentinel.png?v=1",
    size: "md:col-span-8",
    link: "https://sentinel.imanabdul929.workers.dev/",
    alt: "Sentinel Fraud Prevention SaaS Dashboard Preview"
  },
  {
    id: "02",
    title: "Folio",
    category: "Portofolio Profesional",
    tech: "Desain Responsif",
    image: "/folio.png?v=1",
    size: "md:col-span-4",
    link: "https://personal-portfolio-xi-one-59.vercel.app/",
    alt: "FOLIO Personal Portfolio Template Design"
  },
  {
    id: "03",
    title: "Aluna",
    category: "Toko Online Mewah",
    tech: "Optimasi Penjualan",
    image: "/aluna.png?v=1",
    size: "md:col-span-5",
    link: "https://lumina-creative-hub-eins.vercel.app/",
    alt: "Aluna Luxury E-commerce Website for Candles"
  },
  {
    id: "04",
    title: "Studio",
    category: "Website Agensi Elit",
    tech: "Performa Tinggi",
    image: "/studio.png?v=1",
    size: "md:col-span-7",
    link: "https://lumina-creative-hub.vercel.app/",
    alt: "Studio Business Automation Landing Page"
  },
];

const Portfolio = () => {
  return (
    <section id="karya" className="bg-background py-24 md:py-32 px-container border-t border-foreground/10 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="mb-24 md:mb-40 w-full text-center border-b border-foreground/10 pb-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block mb-8 font-bold">
            Hasil Karya
          </span>
          <h2 className="font-display text-[clamp(3.5rem,10vw,10rem)] leading-[0.65] tracking-tighter mx-auto max-w-4xl">
            Proyek <br /> <span className="italic-accent text-accent">Terpilih</span>
          </h2>
          <p className="mt-12 font-mono text-[10px] uppercase tracking-widest opacity-40 leading-relaxed max-w-sm mx-auto">
            Lihat bagaimana kami membantu bisnis lain tampil lebih menarik dan profesional di mata pelanggan.
          </p>
        </div>

        {/* Showcase Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col group ${project.size}`}
            >
              {/* Image Container */}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative aspect-[16/10] overflow-hidden bg-muted border border-foreground/10 block cursor-pointer"
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </a>

              {/* Info Block */}
              <div className="mt-8 flex flex-col gap-4">
                <div className="flex justify-between items-end border-b border-foreground/10 pb-4">
                  <h3 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-none group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] uppercase tracking-widest opacity-30 hover:opacity-100 hover:text-accent transition-all cursor-pointer"
                  >
                    [ LIHAT HASIL ] ↗
                  </a>
                </div>
                <div className="flex justify-between items-center font-mono text-[9px] md:text-[10px] uppercase tracking-widest opacity-50">
                  <span>{project.category}</span>
                  <span className="hidden md:inline">{project.tech}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
