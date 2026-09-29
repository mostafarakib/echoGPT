"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

interface HoverLiftProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  liftAmount?: number;
}

export function HoverLift({
  children,
  liftAmount = 4,
  className,
  ...props
}: HoverLiftProps) {
  return (
    <motion.div
      whileHover={{ y: -liftAmount }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
