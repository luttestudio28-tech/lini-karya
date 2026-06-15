"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  // Return null on touch devices to save resources
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Main Crosshair */}
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
        className="relative"
      >
        {/* Horizontal Line */}
        <div className="absolute top-0 left-[-15px] w-[30px] h-[1px] bg-accent opacity-50" />
        {/* Vertical Line */}
        <div className="absolute top-[-15px] left-0 w-[1px] h-[30px] bg-accent opacity-50" />
        
        {/* Small Circle */}
        <div className="absolute top-[-2px] left-[-2px] w-[4px] h-[4px] rounded-full bg-accent" />
        
        {/* Coordinate Text */}
        <div className="absolute top-4 left-4 font-mono text-[8px] uppercase tracking-widest text-accent opacity-40 flex flex-col gap-0.5">
          <span>X: {Math.round(cursorX.get())}</span>
          <span>Y: {Math.round(cursorY.get())}</span>
        </div>
      </motion.div>
    </div>
  );
};

export default CustomCursor;
