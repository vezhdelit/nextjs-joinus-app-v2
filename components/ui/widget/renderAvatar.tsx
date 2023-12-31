"use client";

import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import { getFirstLetter } from "@/utils/helpers";
import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { twMerge } from "tailwind-merge";

type Props = {
  url: string | null;
  username: string | null;
  className?: string | null;
};
type Profiles = Database["public"]["Tables"]["profiles"]["Row"];

const RenderAvatar = ({ url, username, className }: Props) => {
  const supabase = createClientComponentClient<Database>();

  const [avatarUrl, setAvatarUrl] = useState<Profiles["avatar_url"]>(url);

  useEffect(() => {
    const downloadImage = async (path: string) => {
      try {
        const { data, error } = await supabase.storage
          .from("avatars")
          .download(path);
        if (error) {
          throw error;
        }

        const url = URL.createObjectURL(data);
        setAvatarUrl(url);
      } catch (error) {
        console.log("Error downloading image: ", error);
      }
    };

    if (url) downloadImage(url);
  }, [url, supabase]);

  return (
    <Avatar className={twMerge(`h-10 w-10`, className)}>
      {avatarUrl && <AvatarImage src={avatarUrl} alt="profile" />}
      <AvatarFallback>{getFirstLetter(username)}</AvatarFallback>
    </Avatar>
  );
};

export default RenderAvatar;
