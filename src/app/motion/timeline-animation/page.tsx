import React from "react";
import { Code } from "bright";
import UseAnimate from "./UseAnimate";
const code = `
export default function UseAnimate() {
  const [scope, animate] = useAnimate();
  const [btnActive, setBtnActive] = useState(true);
  async function handleClick() {
    setBtnActive(false);
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
    setBtnActive(true);
  }
  return (
    <div ref={scope} className=" grid h-screen place-content-center">
      <div id="box" className=" w-72 h-72 rounded-sm bg-purple-600"></div>
      <button
        disabled={!btnActive}
        onClick={handleClick}
        className="px-6 py-4 rounded-md bg-gray-800 text-white mt-6"
      >
        Animate
      </button>
    </div>
  );
}
`;

export default function Page() {
  return (
    <div>
      <h1 className="title">useAnimate Hook</h1>
      <p className="paragraph mb-4">
        Framer Motion excels at declarative component and layout animations.
        While GSAP&apos;s timeline is more suitable for complex timeline
        animations, Framer Motion&apos;s `useAnimate` hook also allows us to
        create sequential timeline animations.
      </p>
      <Code lang="js">const [scope, animate] = useAnimate()</Code>
      <p className="paragraph mb-4">
        The `useAnimate` hook returns a scope React reference that you can
        attach to any component to define an animation area. It also returns an
        animate function, which you can use to animate any component, similar to
        `gsap.to` in GSAP.
      </p>
      <p className="paragraph mb-4">
        Unlike GSAP, which uses timeline chains to manage continuous animations,
        `useAnimate` allows for asynchronous control. You can place animation
        controls in an async function and await the completion of one animation
        before starting another.
      </p>
      <UseAnimate />
      <Code lang="ts">{code}</Code>
    </div>
  );
}
