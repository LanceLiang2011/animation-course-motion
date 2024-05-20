"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scrollBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scrollText = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const scrollMount = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen relative overflow-hidden grid place-items-center"
    >
      <motion.p
        style={{ y: scrollText }}
        className=" font-bold text-center text-white text-7xl md:text-9xl relative z-10 uppercase"
      >
        Framer Motion
      </motion.p>
      <motion.div
        className=" absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/mountain.png)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: scrollBg,
        }}
      ></motion.div>
      <motion.div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: "url(/mountain2.png)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: scrollMount,
        }}
      ></motion.div>
      <div
        className="absolute inset-0 z-30"
        style={{
          backgroundImage: "url(/mountain3.png)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}
