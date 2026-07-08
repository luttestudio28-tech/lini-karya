"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export type FaqItem = { q: string; a: string };

const FaqAccordion = ({ items }: { items: FaqItem[] }) => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-foreground/10">
      {items.map((faq, i) => {
        const active = open === i;
        return (
          <div key={i} className="border-b border-foreground/10">
            <button
              onClick={() => setOpen(active ? null : i)}
              aria-expanded={active}
              className="w-full flex items-center gap-6 md:gap-10 py-8 md:py-10 text-left group"
            >
              <span
                className={`font-mono text-[10px] shrink-0 transition-colors ${
                  active ? "text-accent" : "opacity-30"
                }`}
              >
                0{i + 1}
              </span>
              <h3
                className={`flex-1 font-display text-xl md:text-3xl uppercase tracking-tighter leading-tight transition-colors ${
                  active ? "text-accent" : "group-hover:text-accent"
                }`}
              >
                {faq.q}
              </h3>
              <span
                className={`font-mono text-lg shrink-0 transition-transform duration-500 ${
                  active ? "rotate-45 text-accent" : "opacity-40"
                }`}
              >
                +
              </span>
            </button>

            <AnimatePresence initial={false}>
              {active && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="font-mono text-xs md:text-sm leading-relaxed opacity-60 pb-10 md:pl-[calc(10px+1.5rem)] md:pr-16 max-w-3xl">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
