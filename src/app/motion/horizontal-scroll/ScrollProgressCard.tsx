"use client";
import React from "react";
import { PinContainer } from "@/components/ui/threed-pin";

export default function ScrollProgressCard() {
  return (
    <PinContainer
      title="www.framer.com/motion/use-scroll/"
      href="https://www.framer.com/motion/use-scroll/"
    >
      <div className="flex basis-full flex-col p-4 text-xl h-[24rem] w-[24rem]">
        <h3 className="max-w-xs !pb-2 !m-0 font-bold text-2xl text-slate-100">
          useScroll
        </h3>
        <div className=" font-normal text-slate-200 mb-2">
          Framer Motion provides us with a convenient hook called{" "}
          <strong>useScroll</strong>. This hook returns a group of{" "}
          <span className="font-bold">Motion Values</span> that track the scroll
          state of the page or a target component.
        </div>
        <div className="font-normal text-slate-200">
          In our case, we use this hook to track the scroll state of our “scroll
          area” so that we can use this state to change the transition of our
          carousel.
        </div>
      </div>
    </PinContainer>
  );
}
