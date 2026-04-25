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

  const charVars = {
    initial: { y: "100%", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };


  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-container overflow-hidden bg-background">
      <motion.div
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="w-full max-w-[95vw] flex flex-col gap-12 text-center items-center"
      >
        <h1 className="font-display text-[15vw] md:text-[12vw] lg:text-[11vw] leading-[0.85] tracking-[-0.05em] font-medium flex flex-wrap justify-center gap-x-[0.2em] gap-y-0">
          <span className="sr-only">{headline}</span>
          {headline.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block overflow-hidden py-2 whitespace-nowrap">
              {word.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  variants={charVars}
                  className={`inline-block ${
                    word.includes("Indonesia") ? "italic font-light opacity-80" : ""
                  }`}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.8, ease: [0.2, 0.65, 0.3, 0.9] as any }}
          className="font-body text-base md:text-lg lg:text-xl text-foreground/50 max-w-2xl leading-relaxed font-light tracking-tight"
        >
          Kami mentransformasi UMKM lokal menjadi brand digital yang prestisius. 
          <span className="block mt-2 font-normal text-foreground/70">Ubah kerumitan operasional manual menjadi sistem web yang mandiri dan berkelas.</span>
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
