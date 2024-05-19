"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import anyaShocked from "@/lib/images/anya-shocked.png";
const MotionImage = motion(Image);

export default function DragGesture() {
  const constraintRef = useRef(null);
  return (
    <div
      ref={constraintRef}
      className="relative h-96 w-96 border-2 border-dashed border-sky-600"
    >
      <p className=" absolute top-4 left-1/2 -translate-x-1/2 text-sky-600">
        Drag Anya
      </p>
      <MotionImage
        drag
        whileDrag={{ rotate: "180deg" }}
        dragConstraints={constraintRef}
        className=" w-72 h-72"
        src={anyaShocked}
        width={1500}
        height={1500}
        alt="Anya Crying"
      />
    </div>
  );
}
