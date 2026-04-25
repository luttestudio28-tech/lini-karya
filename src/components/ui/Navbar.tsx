"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * Anti-Nav Component
 * Refactored to be a structural element pinned to viewport corners.
 * Stripped of containers, backgrounds, and standard navigation patterns.
 */
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Layanan", href: "#layanan" },
    { name: "Karya", href: "#karya" },
    { name: "Tentang", href: "#tentang" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <>
      {/* Structural Corner Navigation */}
      <div className="fixed inset-0 pointer-events-none z-50 p-6 md:p-10 flex flex-col justify-between">
        {/* Top Row */}
        <div className="flex justify-between items-start w-full">
          <Link 
            href="/" 
            className="pointer-events-auto text-xl md:text-2xl font-mono font-bold uppercase tracking-tighter hover:text-accent transition-colors"
          >
            Lini Karya
          </Link>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="pointer-events-auto text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] hover:text-accent transition-colors flex items-center gap-2"
          >
            <span className="hidden md:inline">{isMobileMenuOpen ? "[ CLOSE ]" : "[ MENU ]"}</span>
            <span className="md:hidden">{isMobileMenuOpen ? "CLOSE" : "MENU"}</span>
          </button>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-between items-end w-full">
          <div className="hidden md:block pointer-events-auto">
            <Link
              href="#karya"
              className="text-xs font-mono uppercase tracking-[0.2em] hover:text-accent transition-colors"
            >
              Karya
            </Link>
          </div>

          <div className="hidden md:block pointer-events-auto">
            <Link
              href="#kontak"
              className="text-xs font-mono uppercase tracking-[0.2em] hover:text-accent transition-colors"
            >
              Kontak
            </Link>
          </div>
          
          <div className="md:hidden pointer-events-auto">
             {/* Small indicator or nothing for mobile bottom corner */}
          </div>
        </div>
      </div>

      {/* Mobile/Overlay Menu */}
      <div 
        className={`fixed inset-0 z-40 bg-background transition-opacity duration-500 ease-in-out flex flex-col items-center justify-center space-y-8 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="text-[10px] font-mono uppercase tracking-[0.4em] mb-4 opacity-40">Navigation</div>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-4xl md:text-6xl font-display uppercase tracking-widest hover:text-accent transition-all duration-300"
          >
            {link.name}
          </Link>
        ))}
        
        <div className="absolute bottom-10 left-0 w-full text-center px-10">
          <p className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-40">
            Design & Strategy — 2024
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
