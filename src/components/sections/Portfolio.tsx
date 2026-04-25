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
    <section className="py-section px-container bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] as any }}
          className="mb-24"
        >
          <span className="font-body text-xs md:text-sm uppercase tracking-[0.4em] text-accent block mb-6">
            Hasil Nyata — 03
          </span>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none">
            Evolusi <br />
            <span className="italic text-foreground/60">Digital.</span>
          </h2>
          <p className="mt-8 font-body text-lg text-foreground/50 max-w-xl">
            Lihat bagaimana kami membantu partner kami bertransformasi dari bisnis konvensional menjadi entitas digital yang prestisius.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-16">
          {/* Project 1 - Large */}
          <div className="md:col-span-8">
            <ProjectCard project={projects[0]} />
          </div>

          {/* Project 2 - Small, shifted */}
          <div className="md:col-span-4 md:mt-24">
            <ProjectCard project={projects[1]} />
          </div>

          {/* Project 3 - Medium */}
          <div className="md:col-span-5">
            <ProjectCard project={projects[2]} />
          </div>

          {/* Project 4 - Medium, shifted up on desktop */}
          <div className="md:col-span-7 md:-mt-32">
            <ProjectCard project={projects[3]} />
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9] as any }}
      className="group"
    >
      <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-muted">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1, ease: [0.2, 0.65, 0.3, 0.9] as any }}
          className="w-full h-full relative"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </div>

      <div className="mt-8 flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <span className="font-display text-sm text-accent">{project.id}</span>
          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground">
            {project.title}
          </h3>
        </div>
        <p className="font-body text-sm md:text-base text-foreground/50 tracking-wide">
          {project.category}
        </p>
      </div>
    </motion.div>
  );
};

export default Portfolio;
