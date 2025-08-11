import SaDown from "@/modules/skin-analysis/ui/SaDown";
import SaLeft from "@/modules/skin-analysis/ui/SaLeft";
import SaRight from "@/modules/skin-analysis/ui/SaRight";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div className="bg-white shadow rounded-lg p-4  ">
          <h2 className="text-2xl">Capture your skin</h2>
          <SaLeft />
          <div className="p-6">
          {children}
          </div>
        </div>
          <SaDown/>
      </div>

      <div className="lg:col-span-1">
        <SaRight />
      </div>
    </div>
  );
};

export default layout;
