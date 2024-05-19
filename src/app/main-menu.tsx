import React from "react";
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function MainMenu() {
  return (
    <Menubar className="ml-12 w-fit">
      <MenubarMenu>
        <MenubarTrigger>Home</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link href="/">Home</Link>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <a href="https://animation-course.vercel.app/">Main Site</a>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Animation</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link href="/motion">Framer Motion</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
