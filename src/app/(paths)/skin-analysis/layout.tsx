import SaHeader from "@/modules/skin-analysis/ui/SaHeader";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-light-gray overflow-hidden p-8 max-sm:p-2 md:p-20">
      <SaHeader progress={4} />
      {children}
      
    </div>
  );
};

export default layout;
