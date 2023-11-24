"use client";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
import { getURL } from "@/utils/helpers";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const AuthForm = () => {
  const [mounted, setMounted] = useState(false);

  const supabase = createClientComponentClient<Database>();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
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
      theme={theme}
      providers={["google", "github", "discord"]}
      redirectTo={`${getURL()}/api/auth/callback`}
    />
  );
};

export default AuthForm;
