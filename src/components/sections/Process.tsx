"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    id: "01",
    title: "Konsultasi",
    description: "Kami mulai dengan mendengarkan visi Anda. Sesi brainstorming mendalam untuk memetakan DNA brand dan kebutuhan unik bisnis Anda.",
  },
  {
    id: "02",
    title: "Kreasi",
    description: "Proses desain artisan. Kami meramu estetika minimalist dengan teknologi modern untuk menciptakan ekosistem digital yang fungsional.",
  },
  {
    id: "03",
    title: "Elevasi",
    description: "Peluncuran dan pengawasan. Kami memastikan transisi brand Anda ke dunia digital berjalan mulus dengan standar kualitas premium.",
  },
];

const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-section px-container bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] as any }}
          className="mb-32 flex flex-col items-start"
        >
          <span className="font-body text-xs md:text-sm uppercase tracking-[0.4em] text-foreground/40 block mb-6">
            Metodologi
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none">
            Proses <span className="italic text-foreground/60">Kerja</span>
          </h2>
        </motion.div>

        <div className="relative flex flex-col gap-12 md:gap-40">
          {/* Vertical Connecting Line */}
          <div className="absolute top-0 left-4 md:left-1/2 -translate-x-1/2 w-px h-full bg-foreground/5">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-accent origin-top"
            />
          </div>

          {steps.map((step, index) => (
            <div key={step.id} className={`relative flex flex-col md:flex-row items-start md:items-start gap-4 md:gap-24 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              {/* Number */}
              <div className="flex-1 flex justify-start md:justify-end items-center pl-12 md:pl-0">
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, delay: index * 0.1, ease: [0.2, 0.65, 0.3, 0.9] as any }}
                  className="font-display text-[6rem] md:text-[14rem] lg:text-[18rem] leading-none text-foreground/5 select-none"
                >
                  {step.id}
                </motion.span>
              </div>

              {/* Point on the line */}
              <div className="absolute left-4 md:left-1/2 top-12 md:top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 md:w-3 md:h-3 rounded-full bg-background border border-accent z-20" />

              {/* Content */}
              <div className="flex-1 flex flex-col items-start text-left pl-12 md:pl-0 md:pt-24 lg:pt-32">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3, ease: [0.2, 0.65, 0.3, 0.9] as any }}
                >
                  <h3 className="font-display text-3xl md:text-5xl lg:text-6xl text-foreground mb-4 md:mb-6">
                    {step.title}
                  </h3>
                  <p className="font-body text-base md:text-xl text-foreground/60 max-w-md leading-relaxed font-light">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
