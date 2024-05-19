"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const MotionImage = motion(Image);
import anyasmuh from "@/lib/images/anya-smuh.png";

export default function InView() {
  return (
    <div className=" flex w-full justify-end">
      <MotionImage
        width={500}
        height={375}
        src={anyasmuh}
        alt="Anya Smug"
        initial={{ translateX: 300, opacity: 0 }}
        whileInView={{ translateX: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeIn" }}
      />
    </div>
  );
}
