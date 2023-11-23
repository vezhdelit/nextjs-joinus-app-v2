import React from "react";
import Box from "../ui/box";

type Props = {};

const RightSideBar = (props: Props) => {
  return (
    <Box className=" hidden h-full w-[400px] md:flex ">
      <div className="flex h-full w-full flex-col justify-between rounded-lg bg-white p-4">
        <h1>Right</h1>
        <h1>wef3f</h1>
      </div>
    </Box>
  );
};

export default RightSideBar;
