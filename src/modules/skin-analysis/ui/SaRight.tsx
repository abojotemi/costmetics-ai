import React from "react";
import Map from "@/modules/skin-analysis/components/maps";
// import { MapProvider } from "@/modules/maps/map-provider";
const SaRight = () => {
  return (
    <div className="bg-white shadow rounded-lg p-4 space-y-5 text-2xl tracking-wide">
      <h2>Current Location</h2>
      <Map />
    </div>
  );
};

export default SaRight;
