"use client";
import dynamic from 'next/dynamic';
import React from "react";

// import { MapProvider } from "@/modules/maps/map-provider";
const DynamicMap = dynamic(() => import('@/modules/skin-analysis/components/maps'), {
  ssr: false,
  loading: () => <div className="w-full h-[80vh] rounded-lg bg-gray-200 animate-pulse z-0"></div>
});
const SaRight = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4 space-y-5 text-2xl tracking-wide z-0">
      <h2>Current Location</h2>
      {/* <MapProvider> */}
      <DynamicMap />
      {/* </MapProvider> */}
    </div>
  );
};

export default SaRight;
