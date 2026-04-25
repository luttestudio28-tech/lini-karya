"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: "01",
    title: "Aluna Studio",
    category: "Branding & Web Design",
    image: "https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "02",
    title: "Grosir Beras",
    category: "E-commerce Experience",
    image: "https://images.pexels.com/photos/2361102/pexels-photo-2361102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "03",
    title: "Sentinel Dashboard",
    category: "Product Design",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "04",
    title: "NovaFlow",
    category: "Brand Identity",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const Portfolio = () => {
  return (
    <section className="bg-background pt-16 pb-0 overflow-hidden">
      {/* Header - Still contained but minimal */}
      <div className="px-container mb-32 md:mb-64">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
        >
          <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-foreground/40 block mb-8">
            03 — Selected Portfolio
          </span>
          <h2 className="font-display text-7xl md:text-9xl lg:text-[14vw] leading-[0.8] uppercase tracking-tighter">
            Archive <br />
            <span className="italic text-foreground/10">Works</span>
          </h2>
        </motion.div>
      </div>

      {/* Rhythmic Full-Width List */}
      <div className="flex flex-col w-full">
        {projects.map((project, index) => (
          <ProjectRow key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

const ProjectRow = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  // Rhythmic positioning: 100%, 85% right, 80% left, 90% center
  const widthClasses = [
    "w-full",
    "w-full md:w-[85%] self-end",
    "w-full md:w-[80%] self-start",
    "w-full md:w-[90%] self-center"
  ];
  
  const widthClass = widthClasses[index % widthClasses.length];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.2 }}
      className={`relative mb-32 md:mb-64 last:mb-0 group ${widthClass} border-t border-foreground/5 pt-0`}
    >
      <div className="relative aspect-[4/3] md:aspect-[21/9] overflow-hidden bg-muted">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as any }}
          className="w-full h-full relative"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
            sizes="100vw"
          />
          {/* Mike Kus raw style overlay - darkens slightly for type contrast */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-1000" />
        </motion.div>
      </div>

      {/* Massive Typography Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center p-container md:p-12 lg:p-24 pointer-events-none">
        <div className="overflow-hidden">
          <motion.h3 
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] as any }}
            className="font-display text-5xl md:text-8xl lg:text-[12vw] text-white leading-[0.85] uppercase mix-blend-difference"
          >
            {project.title}
          </motion.h3>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col md:flex-row md:justify-between md:items-end mt-6 md:mt-12"
        >
          <div className="flex items-center gap-4 mix-blend-difference">
            <span className="font-mono text-[10px] md:text-xs text-white uppercase tracking-[0.3em]">
              {project.id}
            </span>
            <div className="w-8 h-[1px] bg-white/30" />
            <span className="font-mono text-[10px] md:text-xs text-white uppercase tracking-[0.3em]">
              {project.category}
            </span>
          </div>
          <span className="font-mono text-[10px] md:text-xs text-white/50 uppercase tracking-[0.2em] mix-blend-difference mt-4 md:mt-0">
            Case Study ↗
          </span>
        </motion.div>
      </div>

      {/* Structural numbering on the side (Desktop only) */}
      <div className="absolute top-0 right-0 p-8 hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <span className="font-mono text-[120px] leading-none text-white/10 mix-blend-difference select-none">
          {project.id}
        </span>
      </div>
    </motion.div>
  );
};

export default Portfolio;
