"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  components?: Array<React.ReactElement>;
}

export default function HorizontalScroll({ components }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  return (
    <section ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-36">
          {components?.map((Component, i) => (
            <React.Fragment key={i}>{Component}</React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
