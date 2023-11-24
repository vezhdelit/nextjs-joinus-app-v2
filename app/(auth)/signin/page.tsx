import AuthForm from "@/components/ui/form/auth-form";

const SignIn = () => {
  return (
    <section className=" flex h-screen w-screen items-center justify-center max-[500px]:bg-white dark:max-[500px]:bg-midnight">
      <div className=" w-[500px] rounded-lg bg-white p-8 dark:bg-midnight">
        <h1 className=" p-6 text-center text-xl font-semibold text-neutral-700">
          Welcome to the NextJS Supabase Auth
        </h1>
        <AuthForm />
      </div>
    </section>
  );
};

export default SignIn;
