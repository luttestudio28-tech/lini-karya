"use client";

import { motion } from "framer-motion";

const Hero = () => {
  const headline = "Elevasi Digital UMKM Indonesia.";
  
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const charVars: any = {
    initial: { y: "100%" },
    animate: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-container overflow-hidden bg-background selection:bg-foreground selection:text-background">
      {/* Top Metadata */}
      <div className="absolute top-12 left-container right-container flex justify-between font-mono text-[10px] uppercase tracking-[0.3em] opacity-50">
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Lini Karya — Manifesto
        </motion.span>
        <motion.span
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Form & Function
        </motion.span>
      </div>

      <motion.div
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="w-full pt-20"
      >
        <h1 className="font-display text-mega leading-[0.85] tracking-[-0.04em] uppercase text-left break-words">
          <span className="sr-only">{headline}</span>
          <span className="flex flex-wrap overflow-hidden" aria-hidden="true">
            {headline.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-flex mr-[0.15em] overflow-hidden">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    variants={charVars}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </span>
        </h1>
      </motion.div>

      {/* Bottom Right Utility Text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="absolute bottom-12 right-container flex flex-col items-end gap-1 font-mono text-[10px] uppercase tracking-[0.2em]"
      >
        <span>UMKM EVOLUTION © 2026</span>
        <span className="text-[8px] opacity-60 italic">High Performance / Minimal Form</span>
      </motion.div>

      {/* Left Vertical Line - Structural Element */}
      <div className="absolute left-container top-1/2 -translate-y-1/2 w-[1px] h-32 bg-foreground/10 hidden md:block" />
    </section>
  );
};

export default Hero;
