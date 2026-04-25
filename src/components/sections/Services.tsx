"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    id: "01",
    title: "Digital Identity",
    description: "Membangun kepercayaan instan. Kami memastikan tampilan brand Anda terlihat 'mahal' dan profesional di mata pelanggan sejak detik pertama.",
  },
  {
    id: "02",
    title: "Web Ecosystem",
    description: "Hentikan ketergantungan pada chat manual. Kami membangun sistem web yang menangani pesanan, reservasi, dan informasi secara otomatis.",
  },
  {
    id: "03",
    title: "Scale Strategy",
    description: "Strategi digital yang dirancang untuk ekspansi. Kami membantu UMKM naik kelas dari skala lingkungan menuju jangkauan nasional.",
  },
];

const Services = () => {
  return (
    <section className="py-section px-container bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] as any }}
          className="mb-24 flex flex-col items-start"
        >
          <span className="font-body text-xs md:text-sm uppercase tracking-[0.4em] text-foreground/40 block mb-6">
            Layanan Kami
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none">
            Kurasi Solusi <br /> 
            <span className="italic text-foreground/60">Boutique</span>
          </h2>
        </motion.div>

        <div className="flex flex-col border-t border-foreground/10">
          {services.map((service, index) => (
            <ServiceItem key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>

      {/* Subtle Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />
    </section>
  );
};

const ServiceItem = ({ service, index }: { service: typeof services[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.2, 0.65, 0.3, 0.9] as any }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative border-b border-foreground/10 py-12 md:py-16 lg:py-20 cursor-pointer overflow-hidden transition-colors duration-700"
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 relative z-10">
        <div className="flex items-start gap-8 md:gap-16 lg:gap-24 flex-1">
          {/* Number */}
          <span className="font-display text-xl md:text-2xl text-foreground/30 group-hover:text-accent transition-colors duration-500 mt-2">
            {service.id}
          </span>
          
          {/* Content */}
          <div className="flex flex-col">
            <h3 className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-foreground group-hover:translate-x-4 transition-transform duration-700 ease-[0.22, 1, 0.36, 1]">
              {service.title}
            </h3>
            
            <motion.div
              initial={false}
              animate={{ 
                height: isHovered ? "auto" : 0,
                opacity: isHovered ? 1 : 0,
                marginTop: isHovered ? 32 : 0
              }}
              transition={{ 
                duration: 0.6, 
                ease: [0.22, 1, 0.36, 1] as any,
                opacity: { duration: 0.4, delay: isHovered ? 0.2 : 0 }
              }}
              className="overflow-hidden"
            >
              <p className="font-body text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed font-light">
                {service.description}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Visual Indicator */}
        <motion.div
          animate={{ 
            x: isHovered ? 0 : 40, 
            opacity: isHovered ? 1 : 0,
            rotate: isHovered ? 45 : 0
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as any }}
          className="hidden md:flex items-center justify-center text-accent"
        >
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>
      
      {/* Background Hover Effect */}
      <motion.div
        className="absolute inset-0 bg-accent/[0.03] -z-0"
        initial={{ y: "100%" }}
        animate={{ y: isHovered ? 0 : "100%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
      />
      
      {/* Subtle line reveal */}
      <motion.div 
        className="absolute bottom-0 left-0 h-[2px] bg-accent"
        initial={{ width: 0 }}
        animate={{ width: isHovered ? "100%" : 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
      />
    </motion.div>
  );
};

export default Services;
