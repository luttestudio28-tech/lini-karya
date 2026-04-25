"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Lini Karya tidak hanya membangun website, mereka membangun identitas digital yang selama ini kami cari namun sulit kami bahasakan.",
    author: "Budi Santoso",
    role: "Pemilik Aluna Studio",
  },
  {
    quote: "Efisiensi operasional kami meningkat tajam setelah transisi ke platform baru. Estetika dan fungsionalitas berjalan beriringan.",
    author: "Siti Aminah",
    role: "Founder Grosir Beras",
  },
  {
    quote: "Visi kami yang kompleks diterjemahkan dengan sangat elegan. Sebuah investasi yang sangat berharga untuk masa depan brand kami.",
    author: "Irwan Hakim",
    role: "CEO NovaFlow",
  },
];

const Testimonials = () => {
  return (
    <section className="py-section px-container bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="mb-24"
        >
          <span className="font-body text-xs md:text-sm uppercase tracking-[0.4em] text-accent block mb-6">
            Suara Partner — 04
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none">
            Kata <br />
            <span className="italic text-foreground/60">Mereka.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-32">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: index * 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
              className={`flex flex-col ${
                index % 2 === 1 ? "md:items-end md:text-right" : "md:items-start"
              }`}
            >
              <div className="max-w-4xl">
                <blockquote className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight text-foreground/90 italic relative">
                  <span className="absolute -left-8 md:-left-12 top-0 opacity-10 text-8xl md:text-9xl not-italic font-serif leading-none">
                    &ldquo;
                  </span>
                  {item.quote}
                </blockquote>
                <div className={`mt-8 md:mt-12 flex flex-col ${
                  index % 2 === 1 ? "md:items-end" : "md:items-start"
                }`}>
                  <p className="font-body text-lg md:text-xl font-medium text-foreground tracking-wide">
                    {item.author}
                  </p>
                  <p className="font-body text-sm md:text-base text-accent uppercase tracking-widest mt-1">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
