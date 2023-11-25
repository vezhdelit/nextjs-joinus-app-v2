import Box from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import MapView from "@/components/ui/widget/map";

const Home = () => {
  return (
    <section className="flex h-full flex-1 flex-col  gap-5">
      <Box className=" h-fit w-full rounded-lg  p-4">Home</Box>
      <Box className="relative  h-full w-full overflow-hidden rounded-lg p-2">
        <MapView />
        <Button
          className="absolute bottom-10 right-10 z-10 bg-blue-500 text-white"
          size={"icon"}
        >
          +
        </Button>
      </Box>
    </section>
  );
};

export default Home;
