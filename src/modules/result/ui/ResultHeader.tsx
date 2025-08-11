import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";
import { FaHeart } from "react-icons/fa6";
import { MdWaterDrop } from "react-icons/md";
const ResultHeader = () => {
  const date = new Date();
  const confidence = 70;
  const healthScore = 8.2;
  return (
    <Card className="w-full">
      <CardContent className="grid md:grid-cols-2 gap-10 *:rounded-lg *:shadow *:min-h-20 *:flex *:flex-col *:space-y-2 *:items-center *:py-4 tracking-wide">
        <div className="bg-purple-500/10">
          <MdWaterDrop className="size-9 text-purple-700 animate-bounce" />
          <h3 className="text-lg font-medium">Combination Skin</h3>
          <p className="text-gray-700 text-sm">
            Confidence:{" "}
            <span
              className={cn(
                "px-2 text-sm rounded font-medium",
                confidence >= 70
                  ? "bg-green-200 text-green-700"
                  : confidence >= 50
                  ? "bg-yellow-200 text-yellow-700"
                  : confidence >= 25
                  ? "bg-orange-200 text-orange-700"
                  : "bg-red-200 text-red-700"
              )}
            >
              {confidence}%
            </span>
          </p>
        </div>
        <div
          className={cn(
            "px-2 text-sm rounded font-medium",
            healthScore >= 7
              ? "bg-blue-400/20 text-blue-500"
              : healthScore >= 5
              ? "bg-green-200/90 text-green-600"
              : healthScore >= 2.5
              ? "bg-orange-200/90 text-orange-600"
              : "bg-red-200/90 text-red-600"
          )}
        >
          <FaHeart className="size-9 animate-pulse" />
          <h3 className="text-lg font-medium text-black">Skin Health Score</h3>
          <h2 className="text-2xl font-bold tracking-wide">
            {healthScore} / 10
          </h2>
          <p className="text-gray-600">
            {healthScore >= 7
              ? "Great Condition"
              : healthScore >= 5
              ? "Good Condition"
              : healthScore >= 2.5
              ? "Bad Condition"
              : "Horrible Condition"}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <p className="w-full text-sm text-gray-700 text-center">
          {" "}
          Analysis completed on{" "}
          <span className="font-bold tracking-wide">
            {date.toDateString()}
          </span>{" "}
          at{" "}
          <span className="font-bold tracking-wide">
            {date.toLocaleString("en-US", { timeStyle: "short" })}
          </span>
        </p>
      </CardFooter>
    </Card>
  );
};

export default ResultHeader;
