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
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  console.log(theme);
  const mode = theme === "system" ? systemTheme : theme;
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
      theme={mode}
      providers={["google", "github", "discord"]}
      redirectTo={`${
        process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
      }/api/auth/callback`}
    />
  );
};

export default AuthForm;
