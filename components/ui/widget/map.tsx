"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Map, { Marker, GeolocateControl } from "react-map-gl";
import type mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import { useTheme } from "next-themes";
import ControlPanel from "@/components/ui/widget/control-panel";
import Pin from "../pin";
import RenderAvatar from "./renderAvatar";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";

type Props = {
  user: any;
};

const MapView = ({ user }: Props) => {
  const supabase = createClientComponentClient<Database>();

  const [username, setUsername] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const [avatar_url, setAvatarUrl] = useState<string | null>(null);

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);
      if (!user) {
        throw new Error();
      }

      const { data, error, status } = await supabase
        .from("profiles")
        .select(`full_name, username, website, avatar_url`)
        .eq("id", user?.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  const geoControlRef = useRef<any>();
  const { theme, setTheme, systemTheme } = useTheme();
  const mode = theme === "system" ? systemTheme : theme;
  const [userLocation, setUserLocation] = useState<any>({
    longitude: 22.27,
    latitude: 48.62,
  });

  const [viewState, setViewState] = useState({
    longitude: 22.27,
    latitude: 48.62,
    zoom: 13,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setUserLocation({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });

      setViewState({
        ...viewState,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  }, []);

  return (
    <div className="flex h-full w-full">
      <Map
        {...viewState}
        onMove={(e) => setViewState(e.viewState)}
        style={{ width: "100%", height: "100%" }}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        mapStyle={
          mode === "dark"
            ? "mapbox://styles/mapbox/dark-v11"
            : "mapbox://styles/mapbox/streets-v12"
        }
      >
        <GeolocateControl ref={geoControlRef} showAccuracyCircle={false} />
        <Marker
          longitude={userLocation.longitude}
          latitude={userLocation.latitude}
          style={{ zIndex: 3 }}
        >
          <RenderAvatar
            url={avatar_url}
            username={username}
            className={"z-10 h-8 w-8"}
          />
        </Marker>
      </Map>
      <ControlPanel
        lat={+viewState.latitude.toFixed(3)}
        long={+viewState.longitude.toFixed(3)}
        zoom={+viewState.zoom.toFixed(3)}
      />
    </div>
  );
};

export default MapView;
