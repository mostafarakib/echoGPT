"use client";

import { motion } from "framer-motion";

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
}

export function RevealOnScroll({ children, delay = 0 }: RevealOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
