"use client";
import React from "react";
import { useAnimate } from "framer-motion";

export default function UseAnimate() {
  const [scope, animate] = useAnimate();
  async function handleClick() {
    animate("button", { opacity: 0, scale: 0 }, { duration: 2 });
    await animate(
      "#box",
      { x: "100%", rotate: "90deg" },
      { duration: 0.7, type: "spring" }
    );
    await animate(
      "#box",
      { y: "-100%", rotate: "0deg" },
      { duration: 0.7, type: "spring" }
    );
    await animate(
      "#box",
      { x: "0%", rotate: "-90deg" },
      { duration: 0.7, type: "spring" }
    );
    animate(
      "#box",
      { y: "0%", rotate: "-180deg" },
      { duration: 0.7, type: "spring" }
    );
    animate("button", { opacity: 1, scale: 1 }, { duration: 1 });
  }
  return (
    <div ref={scope} className=" grid h-screen place-content-center">
      <div id="box" className=" w-72 h-72 rounded-sm bg-purple-600"></div>
      <button
        onClick={handleClick}
        className="px-6 py-4 rounded-md bg-gray-800 text-white mt-6"
      >
        Animate
      </button>
    </div>
  );
}
