"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Marquee = ({ text }: { text: string }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-GB", { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full border-y border-foreground/10 bg-background/50 py-8 px-container flex flex-col md:flex-row justify-between items-center gap-6 overflow-hidden relative">
      {/* Structural Accent */}
      <div className="absolute left-0 top-0 w-1 h-full bg-accent" />
      
      <div className="flex items-center gap-6">
        <div className="flex flex-col gap-1 font-mono text-[8px] uppercase tracking-widest opacity-40">
          <span>[ LOGIKA INTI ]</span>
          <span>VERSI STABIL</span>
        </div>
        <h3 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter text-foreground">
          ESTETIKA MEWAH. <span className="text-accent italic">SISTEM MANDIRI.</span>
        </h3>
      </div>

      <div className="flex flex-col md:items-end gap-2">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-foreground">
            {time} <span className="opacity-30 font-normal ml-2">GMT+7</span>
          </span>
        </div>
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] opacity-30">
          WAKTU SISTEM // LINI KARYA NODE        </span>
      </div>
    </div>
  );
};

export default Marquee;
