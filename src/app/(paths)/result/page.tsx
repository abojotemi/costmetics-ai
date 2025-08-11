import ResultHeader from "@/modules/result/ui/ResultHeader";
import ResultLeft from "@/modules/result/ui/ResultLeft";
import ResultMain from "@/modules/result/ui/ResultMain";
import React from "react";

const page = () => {
  return (
    <div className="py-8 px-10 md:px-20 space-y-8">
      <h1 className="text-3xl font-medium">Analysis Result</h1>
      <div className=" flex flex-col items-center space-y-8">
        <ResultHeader />
        <div className="grid 2xl:grid-cols-10 gap-7 w-full">
          <div className="grid col-span-6">
            <ResultMain />
          </div>
          <div className="grid col-span-4 w-full">
            <ResultLeft />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
