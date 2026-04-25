"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "Berapa lama waktu pengerjaan?",
    answer: "Rata-rata pengerjaan memakan waktu 4 hingga 8 minggu, tergantung pada kompleksitas proyek dan kecepatan feedback dari sisi partner. Kami mengutamakan kualitas daripada kecepatan instan.",
  },
  {
    question: "Apakah saya bisa mengelola konten sendiri?",
    answer: "Tentu. Setiap solusi yang kami bangun menyertakan Content Management System (CMS) yang intuitif, memungkinkan Anda memperbarui teks, gambar, dan konten lainnya tanpa perlu menyentuh kode.",
  },
  {
    question: "Apakah biaya sudah termasuk domain & hosting?",
    answer: "Ya, untuk tahun pertama kami menyertakan domain premium dan hosting berperforma tinggi. Kami juga akan menangani semua aspek teknis penyiapannya untuk Anda.",
  },
  {
    question: "Bagaimana jika saya ingin kustomisasi tambahan?",
    answer: "Kami melayani pengembangan fitur kustom sesuai kebutuhan unik bisnis Anda. Biaya akan disesuaikan dengan lingkup pekerjaan tambahan yang diminta setelah diskusi mendalam.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-section px-container bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="mb-24"
        >
          <span className="font-body text-xs md:text-sm uppercase tracking-[0.4em] text-accent block mb-6">
            Edukasi — 05
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none">
            Pertanyaan <br />
            <span className="italic text-foreground/60">Umum.</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="border-b border-foreground/10"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full py-8 md:py-10 flex items-center justify-between text-left group"
              >
                <h3 className={`font-display text-2xl md:text-3xl lg:text-4xl transition-all duration-500 ${
                  activeIndex === index ? "italic text-accent" : "text-foreground"
                }`}>
                  {faq.question}
                </h3>
                <span className={`text-2xl md:text-3xl transition-transform duration-500 ease-out ${
                  activeIndex === index ? "rotate-45 text-accent" : "text-foreground/30"
                }`}>
                  +
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.2, 0.65, 0.3, 0.9] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 md:pb-12 pr-12">
                      <p className="font-body text-lg md:text-xl text-foreground/60 leading-relaxed max-w-2xl font-light">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
