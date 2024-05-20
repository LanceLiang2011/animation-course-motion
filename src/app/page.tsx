import { Code } from "bright";

const code = `
// template.tsx
export default function Template({ children }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
      }}
      animate={{
        rotate: "0deg",
        opacity: 1,
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      }}
      transition={{ ease: "easeInOut", duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}
`;

export default function Home() {
  return (
    <>
      <h1 className="title">Framer Motion Practice</h1>
      <p className="paragraph">
        This is the Next.js Branch for my{" "}
        <a
          className=" text-blue-600 underline"
          href="https://animation-course.vercel.app/"
        >
          animation playground
        </a>
      </p>

      <p className="paragraph mb-4">
        I put all Framer Motion related Animations here because Framer Motion
        only runs with React.
      </p>
      <p className="paragraph mb-12">
        The page transition you see is achieved by putting the following code in
        the{" "}
        <a
          target="_blank"
          className="underline"
          href="https://nextjs.org/docs/app/api-reference/file-conventions/template"
        >
          template.tsx
        </a>{" "}
        file in the app folder. I make the page transition dramatic just for
        demonstration. Not recommended in producton.
      </p>
      <Code lang="js">{code}</Code>
    </>
  );
}
