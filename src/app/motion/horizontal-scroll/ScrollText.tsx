"use client";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: string;
}

export default function ScrollText({ children }: Props) {
  return (
    <motion.p
      className="text-center text-3xl font-bold text-orange-600 font-mono"
      initial={{
        opacity: 0.5,
        scale: 0.9,
      }}
      animate={{
        opacity: [0.5, 1, 0.5],
        scale: [0.9, 1.1, 0.9],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      }}
    >
      {children}
    </motion.p>
  );
}
