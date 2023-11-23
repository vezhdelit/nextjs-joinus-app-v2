"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
import { getURL } from "@/utils/helpers";

const AuthForm = async () => {
  const supabase = createClientComponentClient<Database>();

  return (
    <Auth
      supabaseClient={supabase}
      socialLayout="horizontal"
      appearance={{
        theme: ThemeSupa,
        variables: {
          default: {
            colors: {
              brand: "#0EA5E9",
              brandAccent: "#0EA5E9",
            },
          },
        },
      }}
      providers={["google", "github", "discord"]}
      redirectTo={`${getURL()}/auth/callback`}
    />
  );
};

export default AuthForm;
