import React from "react";
import Box from "../ui/box";

type Props = {};

const LeftSidebar = (props: Props) => {
  return (
    <Box className=" flex h-full w-[280px]">
      <div className="flex flex-col w-full h-full bg-white rounded-lg p-4 justify-between">
        <h1>Left</h1>
        <h1>wef3f</h1>
      </div>
    </Box>
  );
};

export default LeftSidebar;
