"use client";

import { motion } from "framer-motion";

const Hero = () => {
  const headline = "Elevasi Digital UMKM Indonesia.";
  
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.5,
      },
    },
  };

  const charVars: any = {
    initial: { y: "100%", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.2, 0.65, 0.3, 0.9] as any,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-container overflow-hidden bg-background">
      <motion.div
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="max-w-6xl w-full flex flex-col gap-12 text-center items-center"
      >
        <h1 className="font-display text-5xl md:text-7xl lg:text-9xl leading-[1.05] tracking-tight">
          <span className="sr-only">{headline}</span>
          <span className="flex flex-wrap justify-center overflow-hidden py-2" aria-hidden="true">
            {headline.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-flex mr-[0.3em] overflow-hidden">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    variants={charVars}
                    className={`inline-block ${
                      word.includes("Indonesia") ? "italic font-normal" : ""
                    }`}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.8, ease: [0.2, 0.65, 0.3, 0.9] as any }}
          className="font-body text-lg md:text-xl lg:text-2xl text-foreground/70 max-w-3xl leading-relaxed font-light"
        >
          Kami mengkurasi identitas digital yang berkelas untuk bisnis yang siap bertumbuh. 
          <span className="block mt-2 font-normal text-foreground">Bukan sekadar website, tapi sebuah pernyataan brand.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/30">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-foreground/20 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
