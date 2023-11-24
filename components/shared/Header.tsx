import Image from "next/image";
import Link from "next/link";
import React from "react";
import UserNav from "../ui/button/user-nav";
import Box from "../ui/box";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import ThemeSwitch from "../ui/button/theme-switch";

type Props = {};

const Header = async (props: Props) => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <Box className="flex h-fit w-full">
      <nav className="flex w-full items-center justify-between rounded-lg px-8 py-4">
        <Link href="/" className="flex items-center  gap-2">
          <Image
            width={36}
            height={36}
            src="/assets/svg/joinus-logo.svg"
            alt="JoinUs"
          />
          <div className="hidden sm:flex sm:flex-col">
            <h2 className="font-bold leading-5">JoinUs!</h2>
            <h3 className=" text-sm leading-4 text-neutral-500">
              events & more
            </h3>
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <ThemeSwitch />
          <UserNav session={session} />
        </div>
      </nav>
    </Box>
  );
};

export default Header;
