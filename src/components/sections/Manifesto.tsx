"use client";

import { motion } from "framer-motion";

const Manifesto = () => {
  return (
    <section className="relative py-section px-container bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        {/* Main Headline - Asymmetric Placement */}
        <div className="md:col-span-8 lg:col-span-7">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] as any }}
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-none text-foreground"
          >
            Kualitas <br />
            <span className="italic">adalah</span> <br />
            Lini Terdepan
          </motion.h2>
        </div>

        {/* Supporting Philosophy - Further Asymmetry */}
        <div className="md:col-span-4 lg:col-start-9 lg:col-span-4 md:mt-24 lg:mt-32">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.2, 0.65, 0.3, 0.9] as any }}
            className="space-y-6"
          >
            <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
              Kami percaya bahwa detail bukan sekadar pelengkap, melainkan fondasi dari setiap karya yang bermakna. 
              Kesempurnaan visual bertemu dengan strategi yang terukur.
            </p>
            <div className="h-px w-12 bg-accent/40" />
            <p className="font-body text-sm uppercase tracking-[0.2em] text-foreground/50">
              Filosofi Kami
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Asymmetric Element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.05, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute -right-20 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block"
      >
        <span className="font-display text-[20rem] leading-none select-none">
          LK
        </span>
      </motion.div>
    </section>
  );
};

export default Manifesto;
