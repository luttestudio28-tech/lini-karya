"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Layanan", href: "#layanan" },
    { name: "Karya", href: "#karya" },
    { name: "Tentang", href: "#tentang" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-xl py-5 border-b border-foreground/5"
            : "bg-transparent py-10"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-container flex justify-between items-center">
          <Link 
            href="/" 
            className="text-2xl md:text-3xl font-display tracking-tight hover:opacity-60 transition-all duration-300"
          >
            Lini Karya
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-16">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[10px] uppercase tracking-[0.3em] font-body hover:opacity-40 transition-all duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-[10px] uppercase tracking-[0.2em] font-body py-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-background transition-transform duration-700 ease-in-out md:hidden flex flex-col items-center justify-center space-y-12 ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-display tracking-widest hover:opacity-50 transition-opacity"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
