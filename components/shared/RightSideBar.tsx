import React from "react";
import Box from "../ui/box";
import { Skeleton } from "../ui/skeleton";

type Props = {};

const RightSideBar = (props: Props) => {
  return (
    <Box className="  hidden h-full w-[300px] md:flex xl:w-[400px]">
      <div className="flex h-full w-full flex-col space-y-8 overflow-auto rounded-lg bg-white px-8 py-10 ">
        <h1 className=" text-lg font-bold">Nearby events</h1>
        {Array(5)
          .fill(0)
          .map(() => (
            <div className="flex items-center space-x-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-2 w-[250px]" />
                <Skeleton className="h-4 w-[250px]" />
              </div>
            </div>
          ))}
      </div>
    </Box>
  );
};

export default RightSideBar;
