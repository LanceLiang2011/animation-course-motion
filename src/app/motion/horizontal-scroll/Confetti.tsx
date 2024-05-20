"use client";
import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import confettiGif from "@/lib/images/party-popper-confetti.gif";
import Image from "next/image";
const MotionImage = motion(Image);

const Confetti = () => {
  return (
    <MotionImage
      className=" aspect-square object-contain"
      alt="confetti"
      src={confettiGif}
      width={337}
      height={285}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1.2 }}
      transition={{ duration: 1, delay: 0.5 }}
    />
  );
};

export default Confetti;
