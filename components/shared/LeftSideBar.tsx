import React from "react";
import Box from "../ui/box";

type Props = {};

const LeftSidebar = (props: Props) => {
  return (
    <Box className=" flex h-full w-[280px]">
      <div className="flex h-full w-full flex-col justify-between rounded-lg bg-white p-4">
        <h1>Left</h1>
        <h1>wef3f</h1>
      </div>
    </Box>
  );
};

export default LeftSidebar;
