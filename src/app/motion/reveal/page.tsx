import React from "react";
import Reveal from "./Reveal";
import { Code } from "bright";

const code = `
export default function Reveal({ children, width }: Props) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  useEffect(() => {
    if (isInView) {
      animate(".reveal", { opacity: 1, y: 0 }, { duration: 0.8, delay: 0.1 });
    }
  }, [isInView, animate, scope]);
  return (
    <div
      ref={scope}
      style={{ position: "relative", width, overflow: "hidden" }}
    >
      <motion.div className="reveal" initial={{ opacity: 0, y: 80 }}>
        {children}
      </motion.div>
    </div>
  );
}
`;

export default function Page() {
  return (
    <div>
      <h1 className="title">Review Component</h1>
      <p className="paragraph mb-4">
        We can built a Reveal component that show/hide any other component when
        they enter the screen, so that we can animate any component, even if
        they are server only.
      </p>
      <p className="paragraph mb-12">
        In this example, We use{" "}
        <a target="_blank" href="https://bright.codehike.org/">
          Bright library
        </a>{" "}
        which is a Server Side syntac highlighter. (It render on server
        purposely so there won&lsquo;t be any bundle size burden). But with our
        Reveal Component, we can still animate it as a child.
      </p>
      <div className=" bg-blue-300 h-screen w-full"></div>
      <Reveal>
        <Code lang="js">{code}</Code>
      </Reveal>
    </div>
  );
}
