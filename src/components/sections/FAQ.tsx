"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    id: "01",
    label: "WAKTU",
    question: "Berapa lama waktu pengerjaan?",
    answer: "Rata-rata memakan waktu 4 hingga 8 minggu. Kami memastikan setiap website dibangun dengan teliti agar bisnis Anda tampil sempurna dan bebas kendala di masa depan.",
  },
  {
    id: "02",
    label: "KONTEN",
    question: "Apakah saya bisa mengelola konten sendiri?",
    answer: "Sangat bisa. Kami memberikan panel kontrol yang sangat mudah digunakan. Jika Anda sudah terbiasa menggunakan WhatsApp atau Facebook, Anda pasti bisa mengelola website ini sendiri.",
  },
  {
    id: "03",
    label: "BIAYA",
    question: "Apakah biaya sudah termasuk domain & hosting?",
    answer: "Ya, semua paket sudah termasuk biaya domain dan hosting kencang untuk tahun pertama. Anda tinggal terima beres, biar kami yang urus semua kerumitan teknisnya.",
  },
  {
    id: "04",
    label: "KUSTOM",
    question: "Bagaimana jika saya ingin fitur tambahan?",
    answer: "Kami sangat fleksibel. Apapun fitur unik yang Anda butuhkan (seperti sistem booking, kasir, atau dashboard), tim kami siap membangunnya khusus untuk bisnis Anda.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-background py-24 md:py-32 px-container border-t border-foreground/10 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="mb-24 md:mb-40 w-full text-center border-b border-foreground/10 pb-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block mb-8 font-bold">
            Pusat Bantuan
          </span>
          <h2 className="font-display text-[clamp(3.5rem,9vw,140px)] leading-[0.65] uppercase tracking-tighter mx-auto max-w-4xl">
            Tanya <br /> & <span className="italic-accent text-accent">Jawab</span>
          </h2>
          <p className="mt-12 font-mono text-[10px] uppercase tracking-widest opacity-40 leading-relaxed max-w-sm mx-auto">
            Pertanyaan yang sering diajukan mengenai layanan dan prosedur kerja kami.
          </p>
        </div>

        {/* Command Tabs */}
        <div className="w-full flex flex-col gap-px bg-foreground/10 border border-foreground/10">
          
          {/* Tab Selection Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 w-full">
            {faqs.map((faq, index) => (
              <button
                key={faq.id}
                onClick={() => setActiveIndex(index)}
                className={`p-8 md:p-12 flex flex-col gap-4 text-left transition-all duration-500 relative overflow-hidden group ${activeIndex === index ? 'bg-foreground text-background' : 'bg-background text-foreground hover:bg-foreground/[0.02]'}`}
              >
                <div className="flex justify-between items-center relative z-10 font-mono text-[9px] uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                   <span>Topik 0{index + 1}</span>
                   {activeIndex === index && <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />}
                </div>
                <span className="font-display text-2xl lg:text-3xl uppercase tracking-tighter relative z-10">
                  {faq.label}
                </span>
                {/* Active Indicator Line */}
                {activeIndex === index && (
                  <motion.div layoutId="faq-active" className="absolute bottom-0 left-0 w-full h-1 bg-accent z-20" />
                )}
              </button>
            ))}
          </div>

          {/* Active Content Panel */}
          <div className="bg-background p-12 md:p-24 lg:p-32 w-full min-h-[400px] flex flex-col justify-center relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }}
                className="max-w-4xl"
              >
                <h3 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-none mb-12 text-accent italic">
                  {faqs[activeIndex].question}
                </h3>
                <div className="flex flex-col md:flex-row gap-12 items-start md:items-end">
                  <div className="h-px w-24 bg-foreground/10" />
                  <p className="font-mono text-sm md:text-base tracking-widest leading-relaxed opacity-60 flex-grow">
                    {faqs[activeIndex].answer}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
