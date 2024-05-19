"use client";

import React from "react";
import { cn, capitalizeString } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface Props {
  route: {
    name: string;
    path: string;
  };
}

export default function Routetag({ route }: Props) {
  const pathname = usePathname();
  return (
    <div
      className={cn([
        "text-center text-sm",
        { "rounded-md bg-slate-100": pathname === route.path },
      ])}
    >
      <a href={route.path}>{capitalizeString(route.name.replace("-", " "))}</a>
    </div>
  );
}
