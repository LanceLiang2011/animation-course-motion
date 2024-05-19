import fs from "fs";
import path from "path";

export function getPathFromFolder(folder: string) {
  const routesDirectory = path.join(process.cwd(), `src/app/${folder}`);
  const getDirectories = (source: string) =>
    fs
      .readdirSync(source, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);
  const directories = getDirectories(routesDirectory);
  const routes = directories.reduce(
    (acc: { name: string; path: string }[], dir: string) => {
      const subPath = path.join(routesDirectory, dir, "page.tsx");
      if (fs.existsSync(subPath)) {
        acc.push({ name: dir, path: `/${folder}/${dir}` });
      }
      return acc;
    },
    []
  );
  return routes;
}
