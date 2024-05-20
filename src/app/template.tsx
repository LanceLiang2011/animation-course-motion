"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export default function Transition({ children }: Props) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait" key={pathname}>
      <motion.div
        key={pathname}
        initial={{
          opacity: 0,
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
        }}
        animate={{
          rotate: "0deg",
          opacity: 1,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        }}
        transition={{ ease: "easeInOut", duration: 0.8 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
