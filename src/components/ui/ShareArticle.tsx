"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ShareArticleProps {
  title: string;
  slug: string;
}

const ShareArticle = ({ title, slug }: ShareArticleProps) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = `https://linikarya.com/blog/${slug}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link:", err);
    }
  };

  const shareLinks = [
    {
      name: "WhatsApp",
      url: `https://wa.me/?text=${encodeURIComponent(`${title} - ${shareUrl}`)}`,
    },
    {
      name: "LinkedIn",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    },
  ];

  return (
    <div className="py-12 border-y border-foreground/10 my-16">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-40 block mb-2">
            Bagikan Artikel
          </span>
          <h4 className="font-display text-xl uppercase tracking-tighter">Bantu UMKM Lain Bertumbuh</h4>
        </div>

        <div className="flex flex-wrap gap-4">
          {/* Copy Link Button */}
          <button
            onClick={copyToClipboard}
            className="relative font-mono text-[10px] uppercase tracking-widest border border-foreground/20 hover:border-accent/40 px-6 py-3 transition-all cursor-pointer font-bold group overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.span
                  key="copied"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  className="text-accent"
                >
                  Link Tersalin!
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                >
                  Salin Link [ ]
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          {/* Social Share Links */}
          {shareLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-widest border border-foreground/20 hover:bg-foreground hover:text-background px-6 py-3 transition-all font-bold"
            >
              {link.name} ↗
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShareArticle;
