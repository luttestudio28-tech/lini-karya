"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Layanan", href: "/#layanan" },
    { name: "Karya", href: "/#karya" },
    { name: "Blog", href: "/blog" },
    { name: "Kontak", href: "/#kontak" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] border-b border-foreground/5 bg-background/80 backdrop-blur-xl transition-all duration-300">
        <nav
          className="w-full px-container py-4 md:py-5 flex items-center justify-between mx-auto max-w-[1400px]"
        >
          {/* Left: Logo */}
          <div className="flex items-center gap-12">
            <Link 
              href="/" 
              className="text-xl md:text-2xl font-display font-extrabold uppercase tracking-tighter hover:text-accent transition-colors"
            >
              Lini Karya
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50 hover:text-foreground hover:tracking-[0.3em] transition-all duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-500" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Actions / Status */}
          <div className="flex items-center gap-8">
            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden font-mono text-[10px] uppercase tracking-widest text-accent font-bold"
            >
              [ MENU ]
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-background flex flex-col items-center justify-center p-10"
          >
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-10 right-10 font-mono text-xs uppercase tracking-widest text-accent"
            >
              [ TUTUP ]
            </button>

            <div className="flex flex-col items-center gap-8 text-center">
              <span className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-30 mb-4">Navigasi</span>
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl md:text-6xl font-display font-extrabold uppercase tracking-tighter hover:italic-accent hover:text-accent transition-all"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="absolute bottom-10 font-mono text-[9px] uppercase tracking-[0.3em] opacity-20">
              Lini Karya — Studio Arsitektur Digital © 2026
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
