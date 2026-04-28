"use client";

import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Diagnosis",
    phase: "IDENTIFIKASI DNA",
    description: "KAMI MENDENGARKAN VISI ANDA DAN MEMETAKAN KEBUTUHAN UNIK BISNIS ANDA MELALUI SESI KONSULTASI MENDALAM.",
  },
  {
    id: "02",
    title: "Arsitektur",
    phase: "KONSTRUKSI SISTEM",
    description: "KAMI MERANCANG DESAIN VISUAL YANG PREMIUM DAN MEMBANGUN SISTEM WEBSITE YANG MUDAH DIGUNAKAN OLEH PELANGGAN ANDA.",
  },
  {
    id: "03",
    title: "Peluncuran",
    phase: "AKTIVASI ASET",
    description: "MEMASTIKAN TRANSISI BRAND ANDA KE DUNIA DIGITAL BERJALAN MULUS DAN WEBSITE ANDA SIAP MENERIMA PELANGGAN PERTAMA.",
  },
];

const Process = () => {
  return (
    <section className="bg-background py-24 md:py-32 px-container border-t border-foreground/10 overflow-hidden relative">
      {/* Background Structural Line */}
      <div className="absolute left-[33.33%] top-0 h-full w-px bg-foreground/[0.03] hidden lg:block" />

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
        
        {/* Left Sidebar - High Impact Sticky Header */}
        <div className="lg:col-span-4 lg:sticky lg:top-32">
          <div className="flex flex-col gap-10">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent block mb-8 font-bold">
                [ 04 // INTEGRASI SISTEM ]
              </span>
              <h2 className="font-display text-7xl md:text-8xl lg:text-[7vw] leading-[0.8] uppercase tracking-tighter">
                Alur <br />
                <span className="italic opacity-20">Kerja.</span>
              </h2>
            </div>
            <div className="space-y-6 max-w-xs">
              <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 leading-relaxed">
                METODOLOGI SISTEMATIS DALAM MENGUBAH VISI MENJADI ASET DIGITAL AKTIF YANG MENGUNTUNGKAN.
              </p>
              <div className="h-px w-12 bg-accent/40" />
            </div>
          </div>
        </div>

        {/* Right Content - Technical Dossier List */}
        <div className="lg:col-span-8 flex flex-col border-t border-foreground/10">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative border-b border-foreground/10 py-12 md:py-20 flex flex-col md:grid md:grid-cols-12 gap-8 items-start md:items-center hover:bg-foreground hover:text-background transition-colors duration-700 px-4 md:px-12"
            >
              {/* Step Index */}
              <div className="md:col-span-2">
                <span className="font-mono text-[10px] opacity-30 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                  TAHAP {step.id}
                </span>
              </div>

              {/* Title & Phase */}
              <div className="md:col-span-5 flex flex-col gap-2">
                <h3 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter group-hover:italic-accent transition-all duration-500 leading-none">
                  {step.title}
                </h3>
                <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold group-hover:text-background transition-colors">
                  [ {step.phase} ]
                </span>
              </div>

              {/* Description */}
              <div className="md:col-span-5 md:text-right">
                <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest leading-relaxed opacity-50 group-hover:opacity-100 transition-opacity max-w-sm md:ml-auto">
                  {step.description}
                </p>
              </div>

              {/* Technical Indicator Node */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full border border-foreground/20 group-hover:bg-accent group-hover:border-accent opacity-0 group-hover:opacity-100 transition-all" />
            </motion.div>
          ))}

          {/* Support Node */}
          <div className="py-12 flex justify-between items-center font-mono text-[9px] uppercase tracking-[0.3em] opacity-20 px-4">
            <span>LINI KARYA // PROCESS ENGINE V.04</span>
            <span>SYSTEM STABLE FOR LAUNCH</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
