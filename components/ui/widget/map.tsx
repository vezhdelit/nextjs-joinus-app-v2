"use client";

import React, { useEffect, useState } from "react";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useTheme } from "next-themes";

type Props = {};

const MapView = (props: Props) => {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  console.log(theme);
  const mode = theme === "system" ? systemTheme : theme;

  return (
    <div className="flex h-full w-full">
      <Map
        initialViewState={{ longitude: 22.27, latitude: 48.62, zoom: 14 }}
        style={{ width: "100%", height: "100%" }}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        mapStyle={
          theme === "dark"
            ? "mapbox://styles/mapbox/dark-v11"
            : "mapbox://styles/mapbox/streets-v12"
        }
      ></Map>
    </div>
  );
};

export default MapView;
