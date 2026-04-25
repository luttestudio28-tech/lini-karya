"use client";

import { motion } from "framer-motion";

const packages = [
  {
    name: "Identity",
    description: "Fokus pada esensi brand dan kehadiran digital fundamental.",
    price: "7.500.000",
    priceLabel: "Essential",
  },
  {
    name: "Eksplorasi",
    description: "Website multi-halaman dengan narasi brand yang mendalam.",
    price: "15.000.000",
    priceLabel: "Advanced",
  },
  {
    name: "Sinergi",
    description: "Solusi e-commerce atau platform kustom yang kompleks.",
    price: "30.000.000",
    priceLabel: "Bespoke",
  },
];

const Pricing = () => {
  return (
    <section className="py-section px-container bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <span className="font-body text-xs md:text-sm uppercase tracking-[0.4em] text-accent block mb-6">
              Investasi — 06
            </span>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none">
              Mulai <br />
              <span className="italic text-foreground/60">Kolaborasi</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-body text-lg md:text-xl text-foreground/60 font-light leading-relaxed">
              Setelah melihat apa yang mungkin, pilih tingkat investasi yang sesuai dengan ambisi brand Anda.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.2, 0.65, 0.3, 0.9] as any }}
              className="group border-t border-foreground/10 py-12 md:py-16 flex flex-col md:grid md:grid-cols-12 gap-8 items-start relative overflow-hidden"
            >
              {/* Package Name */}
              <div className="md:col-span-4 lg:col-span-3">
                <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground group-hover:italic group-hover:translate-x-2 transition-all duration-700 ease-out">
                  {pkg.name}
                </h3>
              </div>
              
              {/* Description */}
              <div className="md:col-span-5 lg:col-span-4 md:pt-2">
                <p className="font-body text-lg md:text-xl text-foreground/70 leading-relaxed font-light">
                  {pkg.description}
                </p>
              </div>

              {/* Pricing & Label */}
              <div className="md:col-span-3 lg:col-span-5 w-full md:text-right md:pt-2">
                <div className="flex flex-col md:items-end gap-6 md:gap-8">
                  <div className="flex flex-col md:items-end gap-1">
                    <span className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-foreground/30 group-hover:text-foreground/60 transition-colors duration-500">
                      {pkg.priceLabel}
                    </span>
                    <div className="mt-2">
                      <span className="font-body text-[10px] uppercase tracking-[0.2em] text-foreground/40 block mb-1">
                        Mulai dari
                      </span>
                      <div className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-foreground/90 tracking-tight">
                        <span className="text-xl md:text-2xl font-light opacity-30 mr-2 text-foreground">Rp</span>
                        {pkg.price}
                      </div>
                    </div>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="font-body text-sm border border-foreground/10 px-8 py-4 rounded-full hover:bg-foreground hover:text-background transition-all duration-500 cursor-pointer inline-block"
                  >
                    Mulai Kolaborasi
                  </motion.div>
                </div>
              </div>

              {/* Background Accent on Hover */}
              <motion.div 
                className="absolute inset-0 bg-accent/[0.02] -z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"
              />
            </motion.div>
          ))}
          <div className="border-t border-foreground/10" />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
