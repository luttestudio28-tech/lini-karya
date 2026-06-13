"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: "Partner 01",
    quote: "Lini Karya tidak hanya membangun website, mereka membangun identitas digital yang selama ini kami cari namun sulit kami bahasakan. Hasilnya sangat memuaskan.",
    author: "Budi Santoso",
    role: "Pemilik Aluna Studio",
    status: "PROYEK SELESAI",
  },
  {
    id: "Partner 02",
    quote: "Efisiensi operasional kami meningkat tajam setelah transisi ke platform baru. Desain yang bersih benar-benar berdampak pada kepercayaan pelanggan kami.",
    author: "Siti Aminah",
    role: "Founder Grosir Beras",
    status: "PERFORMA TINGGI",
  },
  {
    id: "Partner 03",
    quote: "Visi bisnis kami yang kompleks diterjemahkan dengan sangat elegan. Investasi yang sangat berharga untuk pertumbuhan brand kami ke depan.",
    author: "Irwan Hakim",
    role: "CEO NovaFlow",
    status: "KERJASAMA AKTIF",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-background py-24 md:py-32 px-container border-t border-foreground/10 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="mb-24 md:mb-40 w-full text-center border-b border-foreground/10 pb-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block mb-8 font-bold">
            Kata Klien Kami
          </span>
          <h2 className="font-display text-[clamp(3.5rem,10vw,10rem)] leading-[0.65] tracking-tighter mx-auto max-w-4xl">
            Suara <br /> <span className="italic-accent text-accent">Partner.</span>
          </h2>
          <p className="mt-12 font-mono text-[10px] uppercase tracking-widest opacity-40 leading-relaxed max-w-sm mx-auto">
            Bukti nyata dari hasil kerja kami dalam membantu mitra bisnis mencapai target mereka.
          </p>
        </div>

        {/* Testimonial Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-foreground/10 border-y border-foreground/10 w-full">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-background group relative p-10 md:p-16 flex flex-col justify-between min-h-[500px] hover:bg-foreground hover:text-background transition-colors duration-700"
            >
              {/* Top Meta */}
              <div className="flex justify-between items-start">
                <span className="font-mono text-[9px] opacity-30 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                  Klien {index + 1}
                </span>
                <span className="font-mono text-[9px] text-accent font-bold group-hover:text-background transition-colors uppercase tracking-[0.2em]">
                  [ {item.status} ]
                </span>
              </div>

              {/* Quote */}
              <div className="my-16">
                <p className="font-display text-3xl md:text-4xl tracking-tighter leading-[0.9] group-hover:text-accent transition-colors">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-8 border-t border-foreground/5 group-hover:border-background/20 transition-colors">
                <p className="font-display text-xl uppercase tracking-tighter group-hover:italic-accent transition-all">
                  {item.author}
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mt-2 group-hover:opacity-60">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
