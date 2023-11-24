import Box from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import AccountForm from "@/components/ui/form/account-form";
import { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";

const Account = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <section className="flex h-screen w-screen items-center justify-center max-[500px]:bg-white dark:max-[500px]:bg-midnight">
      <Box className=" h-fit w-[500px] space-y-4 rounded-lg bg-white p-8">
        <Button variant="link" className=" text-blue-500" asChild>
          <Link href="/">
            <MdArrowBackIosNew className="mr-1" /> Back
          </Link>
        </Button>

        <AccountForm session={session} />
      </Box>
    </section>
  );
};

export default Account;
