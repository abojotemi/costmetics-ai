import { FaCamera, FaDownload } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import React from "react";

const DashboardHeader = () => {
  return (
    <div className="flex max-sm:flex-col justify-between sm:items-center gap-3">
      <div className="tracking-wide font-semibold">
        <h1 className="text-3xl ">Good morning, User!</h1>
        <p className="text-gray-600">
          Here&apos;s your skin health overview for today
        </p>
      </div>
      <div className="flex max-lg:flex-col gap-2 *:p-2 *:h-10 *:text-lg">
        <Button>
          <FaCamera />
          <span>New Analysis</span>
        </Button>
        <Button variant={"outline"}>
          <FaDownload />
          <span>Export</span>
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
