"use client";
import React from "react";
import { PinContainer } from "@/components/ui/threed-pin";

export default function UseTransitionCard() {
  return (
    <PinContainer
      title="www.framer.com/motion/use-transform"
      href="https://www.framer.com/motion/use-transform/"
    >
      <div className="flex basis-full flex-col p-4 text-xl h-[24rem] w-[24rem]">
        <h3 className="max-w-xs !pb-2 !m-0 font-bold text-2xl text-slate-100">
          useTransition
        </h3>
        <div className="font-normal text-slate-200 mb-2">
          The Motion Value we get from <strong>useScroll</strong> is not a
          regular number. To derive a state from it, we need to use another
          hook: <strong>useTransition</strong>.
        </div>
        <div className="font-normal text-slate-200">
          <strong>useTransition</strong> can return a derived motion value based
          on another motion value, making them proportionally dynamic. This way,
          we can get a motion value <strong>x</strong> that represents our
          scroll state in the target component.
        </div>
      </div>
    </PinContainer>
  );
}
