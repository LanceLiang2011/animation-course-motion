import React from "react";
import ShowHide from "./ShowHide";
import DragGesture from "./DragGesture";
import { Code } from "bright";
import InView from "./InView";
const dragCode = `
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
`;
const toggleCode = `
export default function ShowHide() {
  const [show, setShow] = useState(true);
  const id = useId();
  const imgid = '\${id}-img';

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
`;

export default function Page() {
  return (
    <div>
      <h1 className="title">Framer Motion Basics</h1>
      <p className="paragraph mb-12">
        Framer Motion give us a Declaritive way of doing all sorts of animations
      </p>
      <div className="flex">
        <ShowHide />
        <DragGesture />
      </div>
      <Code lang="js">{toggleCode}</Code>
      <Code lang="js">{dragCode}</Code>
      <InView />
    </div>
  );
}
