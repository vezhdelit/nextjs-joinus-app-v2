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
    <section className="max-[500px]:bg-white flex w-screen h-screen items-center justify-center">
      <div className=" bg-white w-[500px] p-8 rounded-lg space-y-4">
        <Button variant="link" className=" text-blue-500" asChild>
          <Link href="/">
            <MdArrowBackIosNew className="mr-1" /> Back
          </Link>
        </Button>

        <AccountForm session={session} />
      </div>
    </section>
  );
};

export default Account;
