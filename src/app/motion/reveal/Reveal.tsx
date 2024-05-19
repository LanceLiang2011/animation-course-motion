"use client";
import React, { type ReactElement, useEffect, useRef } from "react";
import { motion, useInView, useAnimate } from "framer-motion";

interface Props {
  children: ReactElement;
  width?: "fit-content" | "100%";
}

export default function Reveal({ children, width }: Props) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  useEffect(() => {
    if (isInView) {
      animate(".reveal", { opacity: 1, y: 0 }, { duration: 0.8, delay: 0.1 });
    }
  }, [isInView, animate, scope]);
  return (
    <div
      ref={scope}
      style={{ position: "relative", width, overflow: "hidden" }}
    >
      <motion.div className="reveal" initial={{ opacity: 0, y: 80 }}>
        {children}
      </motion.div>
    </div>
  );
}
