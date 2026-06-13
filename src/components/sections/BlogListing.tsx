"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { blogPosts } from "@/lib/blog-data";

const POSTS_PER_PAGE = 6;

export default function BlogListing() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [currentPage, setCurrentPage] = useState(1);

  // Extract unique categories
  const categories = ["Semua", ...Array.from(new Set(blogPosts.map((post) => post.category)))];

  // Filter posts
  const filteredPosts = activeCategory === "Semua" 
    ? blogPosts 
    : blogPosts.filter((post) => post.category === activeCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE, 
    currentPage * POSTS_PER_PAGE
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to page 1 when category changes
  };

  return (
    <div className="w-full">
      {/* Category Filters */}
      <div className="flex flex-wrap gap-4 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`font-mono text-[10px] uppercase tracking-widest px-6 py-3 border transition-colors ${
              activeCategory === category 
                ? "bg-accent border-accent text-background font-bold" 
                : "border-foreground/20 text-foreground/60 hover:border-foreground/50 hover:text-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 min-h-[600px] items-start">
        <AnimatePresence mode="wait">
          {currentPosts.map((post) => (
            <motion.article 
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              key={post.slug} 
              className="group flex flex-col border border-foreground/10 hover:border-accent/30 transition-all p-0 relative overflow-hidden h-full"
            >
              <Link href={`/blog/${post.slug}`} className="relative w-full aspect-video overflow-hidden bg-muted block shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </Link>

              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-8">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent font-bold">
                    {post.category}
                  </span>
                  <span className="font-mono text-[9px] opacity-30 uppercase tracking-widest">
                    {post.date}
                  </span>
                </div>
                
                <Link href={`/blog/${post.slug}`} className="mb-6">
                  <h2 className="font-display text-3xl uppercase tracking-tighter leading-[0.9] group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="font-mono text-xs leading-relaxed text-foreground/60 mb-12 flex-grow">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="mt-auto font-mono text-[10px] uppercase tracking-widest text-accent font-bold hover:tracking-[0.3em] transition-all"
                >
                  [ BACA SELENGKAPNYA ] ↗
                </Link>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-20 flex justify-center items-center gap-4">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="font-mono text-[10px] uppercase tracking-widest p-3 border border-foreground/20 disabled:opacity-30 hover:bg-foreground/5 transition-colors cursor-pointer"
          >
            ← SEBELUMNYA
          </button>

          <div className="flex gap-2 font-mono text-sm">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 flex items-center justify-center border transition-colors cursor-pointer ${
                  currentPage === i + 1 
                    ? "bg-foreground text-background border-foreground" 
                    : "border-foreground/20 hover:border-foreground/50"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="font-mono text-[10px] uppercase tracking-widest p-3 border border-foreground/20 disabled:opacity-30 hover:bg-foreground/5 transition-colors cursor-pointer"
          >
            SELANJUTNYA →
          </button>
        </div>
      )}
    </div>
  );
}
