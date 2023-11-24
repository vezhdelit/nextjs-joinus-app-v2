"use client";
import React from "react";
import { useTheme } from "next-themes";
import { TbSunFilled, TbMoonFilled } from "react-icons/tb";

const ThemeSwitch = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => setHasMounted(true));
  if (!hasMounted)
    return (
      <button className="rounded-xl  bg-blue-500/10 p-2 text-sky-500">
        <TbSunFilled className="h-5 w-5" />
      </button>
    );

  return (
    <div>
      {currentTheme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="rounded-xl  bg-blue-500/10 p-2 text-sky-500 "
        >
          <TbSunFilled className="h-5 w-5" />
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="rounded-xl bg-sky-50 p-2 "
        >
          <TbMoonFilled className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default ThemeSwitch;
