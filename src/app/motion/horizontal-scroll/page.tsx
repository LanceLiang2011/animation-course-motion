import React from "react";
import ScrollText from "./ScrollText";
import HorizontalScroll from "./HorizontalScroll";
import ScrollProgressCard from "./ScrollProgressCard";
import UseTransitionCard from "./UseTransformCard";
import Reveal from "./Reveal";
import Image from "next/image";
import anyasmuh from "@/lib/images/anya-smuh.png";
import StickyTopCard from "./StickyTopCard";
import { Code } from "bright";
const code = `
function HorizontalScroll({ components }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = 
  useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  return (
    <section ref={ref} className="relative h-[400vh]">
      <motion.div
        style={{ x }}
        className="sticky top-0 flex h-screen items-center 
        justify-between gap-16"
      >
        {components?.map((Component, i) => (
          <React.Fragment key={i}>{Component}</React.Fragment>
        ))}
      </motion.div>
    </section>
  );
}
`;

function ComponentOne() {
  return (
    <Code className=" min-w-[800px]" lang="js">
      {code}
    </Code>
  );
}

export default function Page() {
  return (
    <div className=" relative">
      <h1 className="title">Horizontal Scroll</h1>
      <p className="paragraph mb-12">
        Framer Motion allows us to easily create horizontal scroll animations.
        The key is to create a wrapper element with a fixed position and control
        its horizontal transformation based on the scroll state of the page.
      </p>

      <ScrollText>Scroll Down 👇</ScrollText>
      <HorizontalScroll
        components={[
          <ComponentOne key={0} />,
          <ScrollProgressCard key={1} />,
          <UseTransitionCard key={2} />,
          <StickyTopCard key={3} />,
        ]}
      />
      <Reveal>
        <Image width={500} height={375} src={anyasmuh} alt="Anya Smug" />
      </Reveal>
      <ScrollText>Scroll Up 👆</ScrollText>
    </div>
  );
}
