import Box from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import MapView from "@/components/ui/widget/map";
import { FaPlus } from "react-icons/fa6";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

const Home = async () => {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <section className="flex h-full flex-1 flex-col  gap-5">
      <Box className="relative  h-full w-full overflow-hidden rounded-lg p-2">
        <MapView user={session?.user} />
        <Button
          className="absolute bottom-12 right-10 z-10 bg-blue-500 text-white hover:bg-blue-600"
          size={"icon"}
        >
          <FaPlus />
        </Button>
      </Box>
    </section>
  );
};

export default Home;
