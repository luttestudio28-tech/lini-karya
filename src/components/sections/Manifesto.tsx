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
        ease: [0.16, 1, 0.3, 1],
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
        
        {/* Section Header - Centered & Animated */}
        <motion.div variants={itemVariants} className="mb-32 md:mb-56 w-full text-center relative">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block mb-8 font-bold">
            [ 01 // KOMITMEN STRATEGIS ]
          </span>
          <h2 className="font-display text-[clamp(3.5rem,10vw,10rem)] leading-[0.75] uppercase text-foreground tracking-[-0.07em]">
            Saatnya <br />
            <span className="text-accent italic">Bicara</span>
          </h2>
          <div className="absolute top-1/2 left-0 w-12 h-px bg-foreground/20 hidden lg:block" />
          <div className="absolute top-1/2 right-0 w-12 h-px bg-foreground/20 hidden lg:block" />
        </motion.div>

        {/* Panels - Animated Sequentially */}
        <div className="w-full flex flex-col gap-24 md:gap-40">
          
          {/* Panel 1: Message */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
            <motion.div variants={itemVariants} className="lg:col-span-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-30 block mb-6">REF SPEC: LOGIKA 01</span>
              <p className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-[0.8] max-w-4xl">
                KAMI MENGUBAH WEBSITE PAJANGAN MENJADI MESIN <span className="text-accent italic">PENCETAK KEUNTUNGAN</span>
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="lg:col-span-4 lg:pt-2">
              <div className="border-l-2 border-accent/20 pl-8 space-y-6">
                <p className="font-mono text-[11px] md:text-xs uppercase tracking-widest leading-relaxed opacity-60">
                  KAMI MENGHAPUS KERUMITAN TEKNIS AGAR ANDA BISA FOKUS BERJUALAN. WEBSITE KAMI BUKAN HANYA PAJANGAN, TAPI ASSET YANG MENEMUKAN PELANGGAN BARU UNTUK ANDA SETIAP HARI.
                </p>
                <div className="font-mono text-[9px] uppercase tracking-[0.4em] opacity-20">[ PROSES DIMULAI ]</div>
              </div>
            </motion.div>
          </div>

          {/* Panel 2: Technical Targets Grid - Final Precision Fix */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-foreground/10 border-y border-foreground/10 w-full overflow-hidden"
          >
            <motion.div variants={itemVariants} className="px-8 md:px-12 py-20 md:py-24 flex flex-col gap-6 group bg-background">
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-40 group-hover:text-accent transition-colors">01 // TARGET UTAMA</span>
              <p className="font-display text-3xl uppercase tracking-tighter">MEMBANGUN KEPERCAYAAN</p>
            </motion.div>
            <motion.div variants={itemVariants} className="px-8 md:px-12 py-20 md:py-24 flex flex-col gap-6 group bg-background">
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-40 group-hover:text-accent transition-colors">02 // ARSITEKTUR UI</span>
              <p className="font-display text-3xl uppercase tracking-tighter">MINIMALIS PREMIUM</p>
            </motion.div>
            <motion.div variants={itemVariants} className="px-8 md:px-12 py-20 md:py-24 flex flex-col gap-6 group bg-background">
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-40 group-hover:text-accent transition-colors">03 // MISI SISTEM</span>
              <p className="font-display text-3xl uppercase tracking-tighter">KONVERSI MAKSIMAL</p>
            </motion.div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Manifesto;
