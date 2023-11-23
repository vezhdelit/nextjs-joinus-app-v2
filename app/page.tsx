import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <section className=" flex flex-col w-screen h-screen items-center ">
      <div className="flex p-4 w-full">
        <nav className="flex w-full bg-white py-6 px-8 rounded-lg justify-between items-center">
          <Button variant="link" asChild>
            <Link href="/account">Account</Link>
          </Button>
          <form action="/auth/signout" method="post">
            <Button variant="link">Sign Out</Button>
          </form>
        </nav>
      </div>
    </section>
  );
};

export default Home;
