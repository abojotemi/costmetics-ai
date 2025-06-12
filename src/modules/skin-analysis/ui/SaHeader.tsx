import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import React from "react";

const SaHeader = ({ progress }: { progress: number }) => {
  return (
    <div className="space-y-6 mb-20 z-0">
      <h1 className="text-3xl font-medium">Skin Analysis</h1>
      <p className="text-gray-700">
        Capture or upload photos of your skin for personalized cosmetic
        recommendations
      </p>
      <div className="flex items-center space-x-0 ">
        <div className="flex items-center flex-1 space-x-2 px-2">
          <div className={cn("size-12 max-md:size-8 bg-primary rounded-full text-white flex justify-center items-center relative", progress === 0 && "animate-pulse duration-75")}>
            <p className="text-2xl max-md:text-lg font-extrabold">1</p>
            <span className="absolute -bottom-6 text-sm font-medium text-primary">
              Capture
            </span>
          </div>
          <Progress
            value={progress >= 1 ? 100 : 0}
            className="w-2/10 max-md:w-1/10 h-1 z-10"
          />
          <div
            className={cn(
              "size-12 max-md:size-8  bg-primary rounded-full text-white flex justify-center relative items-center",
              progress < 1 && "bg-gray-200 text-gray-600", progress === 1 && "animate-pulse"
            )}
          >
            <p className="text-2xl max-md:text-lg font-extrabold">2</p>
            <span
              className={cn(
                "absolute -bottom-6 text-sm font-medium",
                progress < 1 || "text-primary"
              )}
            >
              Analysis
            </span>
          </div>
          <Progress
            value={progress >= 2 ? 100 : 0}
            className="w-2/10 max-md:w-1/10 h-1 z-0"
          />
          <div
            className={cn(
              "size-12 max-md:size-8  bg-primary rounded-full relative text-white flex justify-center items-center",
              progress < 2 && "bg-gray-200 text-gray-600",  progress === 2 && "animate-pulse"
            )}
          >
            <p className="text-2xl max-md:text-lg font-extrabold">3</p>
            <span
              className={cn(
                "absolute -bottom-6 text-sm font-medium",
                progress < 2 || "text-primary"
              )}
            >
              Results
            </span>
          </div>
          <Progress
            value={progress >= 3 ? 100 : 0}
            className="w-2/10 max-md:w-1/10 h-1 z-0"
          />
          <div
            className={cn(
              "size-12 max-md:size-8  bg-primary rounded-full relative text-white flex justify-center items-center",
              progress < 3 && "bg-gray-200 text-gray-600",  progress === 4 && "animate-pulse"
            )}
          >
            <p className="text-2xl max-md:text-lg font-extrabold">4</p>
            <span
              className={cn(
                "absolute -bottom-6 text-sm font-medium",
                progress < 3 || "text-primary"
              )}
            >
              Products
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaHeader;
