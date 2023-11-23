"use client";
import React, { useEffect, useState } from "react";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import Image from "next/image";
import { Database } from "@/types/supabase";
import { Label } from "../label";
import { Input } from "../input";
type Profiles = Database["public"]["Tables"]["profiles"]["Row"];

const Avatar = ({
  uid,
  url,
  size,
  onUpload,
}: {
  uid: string;
  url: Profiles["avatar_url"];
  size: number;
  onUpload: (url: string) => void;
}) => {
  const supabase = createClientComponentClient<Database>();
  const [avatarUrl, setAvatarUrl] = useState<Profiles["avatar_url"]>(url);
  const [uploading, setUploading] = useState(false);

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

  const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const filePath = `${uid}-${Math.random()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      onUpload(filePath);
    } catch (error) {
      alert("Error uploading avatar!");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {avatarUrl ? (
        <Image
          width={size}
          height={size}
          src={avatarUrl}
          alt="Avatar"
          className="rounded-full"
          style={{ height: size, width: size }}
        />
      ) : (
        <div
          className="flex bg-neutral-200 rounded-full items-center justify-center"
          style={{ height: size, width: size }}
        >
          <h3 className=" text-center">No image</h3>
        </div>
      )}
      <div className="flex justify-center items-center" style={{ width: size }}>
        <Label
          className="p-2 text-blue-500 underline font-medium text-center hover:cursor-pointer"
          htmlFor="single"
        >
          {uploading ? "Uploading ..." : "Upload"}
        </Label>
        <Input
          style={{
            visibility: "hidden",
            position: "absolute",
          }}
          type="file"
          id="single"
          accept="image/*"
          onChange={uploadAvatar}
          disabled={uploading}
        />
      </div>
    </div>
  );
};

export default Avatar;
