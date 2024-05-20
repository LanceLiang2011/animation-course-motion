"use client";
import React, { type ReactElement, useEffect, useRef } from "react";
import { motion, useInView, useAnimate } from "framer-motion";

interface Props {
  children: ReactElement;
  width?: "fit-content" | "100%";
}

export default function Reveal({ children, width }: Props) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(".reveal", { opacity: 1, x: 0 }, { duration: 0.8, delay: 0.1 });
    } else {
      animate(".reveal", { opacity: 0, x: 200 });
    }
  }, [isInView, animate, scope]);
  return (
    <div
      ref={scope}
      style={{ position: "relative", width, overflow: "hidden" }}
      className=" relative"
    >
      <motion.div className="reveal" initial={{ opacity: 0, x: 200 }}>
        {children}
      </motion.div>
    </div>
  );
}
