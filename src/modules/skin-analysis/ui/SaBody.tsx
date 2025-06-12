import React from "react";
import SaLeft from "./SaLeft";
import SaRight from "./SaRight";
import SaDown from "./SaDown";

const SaBody = () => {
  return (
    <div className="grid lg:grid-cols-3">
      <div className="col-span-2">
        <SaLeft />
        <SaDown />
      </div>

      <div className="">
        <SaRight />
      </div>
    </div>
  );
};

export default SaBody;
