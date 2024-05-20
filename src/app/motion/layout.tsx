import { getPathFromFolder } from "@/lib/server-utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Routetag from "./routetag";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const paths = getPathFromFolder("motion");
  return (
    <div className="grid grid-cols-1 md:grid-cols-4">
      <ScrollArea className="h-72 w-48 rounded-md borde pt-8 col-span-1">
        <div className="p-4">
          <h4 className="mb-4 text-center text-sm font-medium leading-none">
            Framer Motion
          </h4>
          <Separator className="my-2" />
          {paths.map((path) => (
            <>
              <Routetag key={path.path} route={path} />
              <Separator className="my-2" />
            </>
          ))}
        </div>
      </ScrollArea>
      <main className=" col-span-3">{children}</main>
    </div>
  );
}
