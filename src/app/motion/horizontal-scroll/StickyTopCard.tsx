"use client";
import React from "react";
import { PinContainer } from "@/components/ui/threed-pin";

export default function StickyTopCard() {
  return (
    <PinContainer
      title="www.framer.com/motion/use-transform"
      href="https://www.framer.com/motion/use-transform/"
    >
      <div className="flex basis-full flex-col p-4 text-xl h-[24rem] w-[24rem]">
        <h3 className="max-w-xs !pb-2 !m-0 font-bold text-2xl text-slate-100">
          Sticky Top
        </h3>
        <div className="font-normal text-slate-200 mb-2">
          Once we obtain the scroll state of our scroll area, the final step is
          to create the visual effect by fixing the scrolling carousel at the
          top.
        </div>
        <div className="font-normal text-slate-200">
          As we scroll down, the motion div will update the transformX of the
          sliding window inside the carousel, creating the desired visual
          effect.
        </div>
      </div>
    </PinContainer>
  );
}
