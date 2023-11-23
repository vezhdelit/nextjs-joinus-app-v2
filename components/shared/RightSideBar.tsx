import React from "react";
import Box from "../ui/box";

type Props = {};

const RightSideBar = (props: Props) => {
  return (
    <Box className=" flex h-full w-[400px]">
      <div className="flex flex-col w-full h-full bg-white rounded-lg p-4 justify-between">
        <h1>Right</h1>
        <h1>wef3f</h1>
      </div>
    </Box>
  );
};

export default RightSideBar;
