import Box from "@/components/ui/box";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <section className=" h-full flex-1 flex-col">
      <Box className=" h-full w-full rounded-lg  p-4">Inbox</Box>
    </section>
  );
};

export default page;
