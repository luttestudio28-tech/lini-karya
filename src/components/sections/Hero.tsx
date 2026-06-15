"use client";

import { motion } from "framer-motion";

const Hero = () => {
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const lineVars = {
    initial: { y: "100%", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-start px-container overflow-hidden bg-background pt-24 md:pt-28">
      <div className="max-w-[1400px] mx-auto w-full relative flex flex-col justify-start py-2">
        {/* Simplified Metadata */}
        <div className="absolute top-2 left-0 w-full flex justify-between font-mono text-[9px] tracking-[0.2em] opacity-40 z-10">
          <div className="flex gap-12">
            <span className="text-accent font-bold">LINI KARYA STUDIO</span>
            <span className="hidden md:inline">BANDUNG, INDONESIA</span>
          </div>
          <div className="flex gap-12">
            <span>EDISI 2026</span>
          </div>
        </div>

        <motion.div
          variants={containerVars}
          initial="initial"
          animate="animate"
          className="w-full relative z-10 mb-12 md:mb-20 mt-12"
        >
          <h1 className="font-display text-[clamp(3.5rem,10vw,10rem)] leading-[0.8] tracking-[-0.04em] text-left uppercase">
            <div className="flex flex-col">
              <span className="overflow-hidden block">
                <motion.span variants={lineVars} className="inline-block">Solusi Web</motion.span>
              </span>
              <span className="overflow-hidden block ml-[8vw] md:ml-[12vw]">
                <motion.span variants={lineVars} className="inline-block text-accent">Bisnis Anda</motion.span>
              </span>
              <span className="overflow-hidden block ml-[4vw]">
                <motion.span variants={lineVars} className="inline-block opacity-40 font-light">Naik Level</motion.span>
              </span>
            </div>
          </h1>
        </motion.div>

        {/* Value Proposition Bar */}
        <div className="mt-4 md:mt-6 pt-8 border-t border-foreground/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 lg:col-span-7">
            <p className="font-mono text-sm md:text-base leading-relaxed text-foreground/60 max-w-2xl">
              Kami membantu UMKM dan pengusaha lokal membangun website yang tidak hanya tampil modern, tapi juga efektif mendatangkan pelanggan baru. Tanpa ribet urusan teknis.
            </p>
          </div>
          <div className="md:col-start-10 md:col-span-3 flex flex-col items-end gap-3">
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent font-bold">Siap Berkolaborasi</span>
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
