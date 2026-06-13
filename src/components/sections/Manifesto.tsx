"use client";

import { motion } from "framer-motion";

const Manifesto = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    whileInView: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    initial: { opacity: 0, y: 30 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <section id="tentang" className="relative py-24 md:py-32 px-container bg-background overflow-hidden border-t border-foreground/10">
      <motion.div 
        variants={containerVariants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-10%" }}
        className="max-w-[1400px] mx-auto flex flex-col items-center"
      >
        
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-32 md:mb-56 w-full text-center relative">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block mb-8 font-bold">
            Komitmen Kami
          </span>
          <h2 className="font-display text-[clamp(3.5rem,10vw,10rem)] leading-[0.8] text-foreground tracking-[-0.07em]">
            Standar Baru, <br />
            <span className="italic-accent text-accent">Makin Terpercaya</span>
          </h2>
          <div className="absolute top-1/2 left-0 w-12 h-px bg-foreground/20 hidden lg:block" />
          <div className="absolute top-1/2 right-0 w-12 h-px bg-foreground/20 hidden lg:block" />
        </motion.div>

        {/* Panels */}
        <div className="w-full flex flex-col gap-24 md:gap-40">
          
          {/* Panel 1: Message */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
            <motion.div variants={itemVariants} className="lg:col-span-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-30 block mb-6">Misi Kami</span>
              <p className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-[0.8] max-w-4xl">
                Kami mengubah website biasa menjadi alat <span className="text-accent italic">pencetak profit</span>
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="lg:col-span-4 lg:pt-2">
              <div className="border-l-2 border-accent/20 pl-8 space-y-6">
                <p className="font-mono text-sm tracking-wide leading-relaxed opacity-60">
                  Kami menghapus kerumitan teknis agar Anda bisa fokus berjualan. Website kami bukan hanya pajangan, tapi aset yang menarik pelanggan baru setiap hari.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Panel 2: Targets Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/10 border-y border-foreground/10 w-full overflow-hidden"
          >
            <motion.div variants={itemVariants} className="px-8 md:px-12 py-20 md:py-24 flex flex-col gap-6 group bg-background">
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-40 group-hover:text-accent transition-colors">01 // Solusi Nyata</span>
              <p className="font-display text-3xl tracking-tighter uppercase">Membangun Kepercayaan</p>
            </motion.div>
            <motion.div variants={itemVariants} className="px-8 md:px-12 py-20 md:py-24 flex flex-col gap-6 group bg-background">
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-40 group-hover:text-accent transition-colors">02 // Desain Berkelas</span>
              <p className="font-display text-3xl tracking-tighter uppercase">Modern & Premium</p>
            </motion.div>
            <motion.div variants={itemVariants} className="px-8 md:px-12 py-20 md:py-24 flex flex-col gap-6 group bg-background">
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-40 group-hover:text-accent transition-colors">03 // Tujuan Utama</span>
              <p className="font-display text-3xl tracking-tighter uppercase">Lebih Banyak Pembeli</p>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Manifesto;
