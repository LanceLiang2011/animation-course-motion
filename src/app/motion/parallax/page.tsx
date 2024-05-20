import React from "react";
import Parallax from "./Parallax";
import { Code } from "bright";
const code = `
export default function Parallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scrollBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const scrollText = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const scrollMount = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen relative overflow-hidden grid place-items-center"
    >
      <motion.p
        style={{ y: scrollText }}
        className=" font-bold text-center text-white text-7xl md:text-9xl relative z-10 uppercase"
      >
        Framer Motion
      </motion.p>
      <motion.div
        className=" absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/mountain.png)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: scrollBg,
        }}
      ></motion.div>
      <motion.div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: "url(/mountain2.png)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: scrollMount,
        }}
      ></motion.div>
      <div
        className="absolute inset-0 z-30"
        style={{
          backgroundImage: "url(/mountain3.png)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}
`;

export default function Page() {
  return (
    <div className=" bg-gray-700 text-white">
      <Parallax />
      <p className="paragraph mb-4">
        Parallax is a displacement or difference in the apparent position of an
        object viewed along two different lines of sight and is measured by the
        angle or half-angle of inclination between those two lines. Due to
        foreshortening, nearby objects show a larger parallax than farther
        objects, so parallax can be used to determine distances.
      </p>
      <p className="paragraph mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        voluptatum aliquid ducimus eveniet fuga facere ut iure optio porro nam
        quos vitae accusantium quam minima maiores nostrum consectetur, incidunt
        voluptatem.
      </p>
      <p className="paragraph mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel tempore,
        aperiam maiores dolore soluta ullam molestiae facere quos corporis
        beatae ipsum tempora dolor earum ut consectetur repudiandae assumenda
        nesciunt aliquam. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Vero asperiores exercitationem reiciendis non molestiae sit
        temporibus? Enim perferendis ex tempore mollitia esse culpa in dolorem
        explicabo ipsa doloremque? Nisi, velit?
      </p>
      <p className="paragraph mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
        voluptatum aliquid ducimus eveniet fuga facere ut iure optio porro nam
        quos vitae accusantium quam minima maiores nostrum consectetur, incidunt
        voluptatem.
      </p>

      <Code lang="js">{code}</Code>
    </div>
  );
}
