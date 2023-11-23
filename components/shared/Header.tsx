import Image from "next/image";
import Link from "next/link";
import React from "react";
import UserNav from "../ui/button/user-nav";
import Box from "../ui/box";

type Props = {};

const Header = (props: Props) => {
  return (
    <Box className="flex h-fit w-full">
      <nav className="flex w-full items-center justify-between rounded-lg bg-white px-8 py-4">
        <Link href="/">
          <Image
            width={36}
            height={36}
            src="/assets/svg/joinus-logo.svg"
            alt="JoinUs"
          />
        </Link>

        <UserNav />
      </nav>
    </Box>
  );
};

export default Header;
