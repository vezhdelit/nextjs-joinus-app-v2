"use client";

import React from "react";
import Box from "../ui/box";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

type Props = {};

const BottomBar = (props: Props) => {
  const pathname = usePathname();

  return (
    <Box className="flex h-fit w-full sm:hidden">
      <nav className="flex w-full items-center justify-between overflow-auto rounded-lg  p-3">
        {sidebarLinks.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.route;

          return (
            <Link
              key={item.route}
              href={item.route}
              className={`${
                active
                  ? "bg-sky-50 font-bold text-sky-500 dark:bg-blue-500/10"
                  : "hover:bg-sky-50/50 hover:font-medium hover:text-sky-500 dark:text-neutral-100 hover:dark:dark:bg-blue-500/5"
              }  flex items-center gap-4 rounded-lg p-3  `}
            >
              <Icon className=" h-6 w-6" />
              <h3 className="hidden pt-[2px] text-base lg:flex">
                {item.label}
              </h3>
            </Link>
          );
        })}
      </nav>
    </Box>
  );
};

export default BottomBar;
