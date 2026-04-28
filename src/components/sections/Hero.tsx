"use client";

import { motion } from "framer-motion";

const Hero = () => {
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const lineVars = {
    initial: { y: "100%", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-start px-container overflow-hidden bg-background pt-24 md:pt-28">
      <div className="max-w-[1400px] mx-auto w-full relative flex flex-col justify-start py-2">
        {/* Top Technical Metadata - Absolute Corners */}
        <div className="absolute top-2 left-0 w-full flex justify-between font-mono text-[9px] uppercase tracking-[0.4em] opacity-40 z-10">
          <div className="flex gap-12">
            <span className="text-accent font-bold">[ LINI KARYA // WEB DEVELOPMENT STUDIO ]</span>
            <span className="hidden md:inline">[ LOKASI: BANDUNG, INDONESIA ]</span>
          </div>
          <div className="flex gap-12">
            <span className="hidden lg:inline opacity-60">[ SIAP BERKOLABORASI ]</span>
            <span>EDISI 2026</span>
          </div>
        </div>

        <motion.div
          variants={containerVars}
          initial="initial"
          animate="animate"
          className="w-full relative z-10 mb-12 md:mb-20 mt-12"
        >
          <h1 className="font-display text-[clamp(3.5rem,10vw,10rem)] leading-[0.75] tracking-[-0.06em] uppercase text-left">
            <div className="flex flex-col">
              <span className="overflow-hidden block">
                <motion.span variants={lineVars} className="inline-block">Bangun</motion.span>
              </span>
              <span className="overflow-hidden block ml-[8vw] md:ml-[12vw]">
                <motion.span variants={lineVars} className="inline-block text-accent">Website</motion.span>
              </span>
              <span className="overflow-hidden block">
                <motion.span variants={lineVars} className="inline-block">Premium</motion.span>
              </span>
            </div>
          </h1>
        </motion.div>

        {/* Industrial Utility Bar */}
        <div className="mt-4 md:mt-6 pt-8 border-t border-foreground/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-6 lg:col-span-5">
            <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest leading-relaxed text-foreground/40">
              MEMBANGUN INFRASTRUKTUR DIGITAL BERPERFORMA TINGGI UNTUK GENERASI BARU UMKM INDONESIA. PRESISI DI ATAS DEKORASI.
            </p>
          </div>
          <div className="md:col-start-9 md:col-span-4 flex flex-col items-end gap-3">
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Mesin Aktif</span>
            </div>
            <div className="font-mono text-[9px] uppercase tracking-[0.3em] opacity-30 text-right leading-relaxed">
              BENTUK MENGIKUTI FUNGSI<br />
              DIBANGUN OLEH LINI KARYA
            </div>
          </div>
        </div>
      </div>

      {/* Structural Vertical Grid Lines */}
      <div className="absolute left-[25%] top-0 w-px h-full bg-foreground/5 hidden md:block" />
      <div className="absolute left-[50%] top-0 w-px h-full bg-foreground/5 hidden md:block" />
      <div className="absolute left-[75%] top-0 w-px h-full bg-foreground/5 hidden md:block" />
    </section>
  );
};

export default Hero;
