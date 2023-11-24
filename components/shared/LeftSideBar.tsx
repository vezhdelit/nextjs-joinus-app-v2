"use client";

import React from "react";
import Box from "../ui/box";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { usePathname } from "next/navigation";

type Props = {};

const LeftSidebar = (props: Props) => {
  const pathname = usePathname();

  return (
    <Box className=" hidden h-full w-fit sm:flex lg:w-[240px]">
      <div className=" flex h-full w-full flex-col justify-between overflow-auto rounded-lg bg-white py-10">
        <div className="flex flex-col">
          {sidebarLinks.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.route;

            return (
              <Link
                key={item.route}
                href={item.route}
                className={`${
                  active
                    ? "bg-sky-50 font-bold text-sky-500"
                    : "hover:bg-sky-50/50 hover:font-medium hover:text-sky-500"
                }  flex items-center gap-4 px-8 py-4 lg:px-12 `}
              >
                <Icon className=" h-6 w-6" />
                <h3 className="hidden pt-[2px] text-base lg:flex">
                  {item.label}
                </h3>
              </Link>
            );
          })}
        </div>

        <form className="flex w-full" action="/api/auth/signout" method="post">
          <button className="flex w-full items-center gap-4 px-8 py-4 hover:bg-sky-50/50 hover:font-medium hover:text-sky-500 lg:px-12">
            <TbLayoutSidebarLeftCollapseFilled className=" h-6 w-6" />
            <h3 className="hidden text-base lg:flex">Log out</h3>
          </button>
        </form>
      </div>
    </Box>
  );
};

export default LeftSidebar;
