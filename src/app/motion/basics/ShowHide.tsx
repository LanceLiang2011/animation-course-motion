"use client";
import React, { useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button as RawButton } from "@/components/ui/button";
import Image from "next/image";
import anyaCrying from "@/lib/images/anya-crying.png";
const Button = motion(RawButton);

export default function ShowHide() {
  const [show, setShow] = useState(true);
  const id = useId();
  const imgid = `${id}-img`;

  return (
    <div className=" flex flex-col items-center">
      <AnimatePresence>
        {show && (
          <motion.div
            key={imgid}
            className=" w-96 h-96"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <Image
              key={imgid}
              src={anyaCrying}
              width={720}
              height={700}
              alt="Anya Crying"
            />
          </motion.div>
        )}
        <Button layout className="" onClick={() => setShow((cur) => !cur)}>
          {show ? "Hide" : "Show"}
        </Button>
      </AnimatePresence>
    </div>
  );
}
