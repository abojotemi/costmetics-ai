"use client"
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const conditions = {
  "T-Zone Oiliness": "Moderate",
  Hydration: "Good",
  "Pore Size": "Normal",
  "Skin Texture": "Severe",
};
const getSeverityColor = (value: string) => {
  const lowerValue = value.toLowerCase();
  if (lowerValue.includes("good") || lowerValue.includes("excellent")) {
    return "text-blue-600 bg-blue-50";
  } else if (lowerValue.includes("moderate") || lowerValue.includes("normal")) {
    return "text-green-600 bg-green-50";
  } else if (
    lowerValue.includes("severe") ||
    lowerValue.includes("bad") ||
    lowerValue.includes("poor")
  ) {
    return "text-red-600 bg-red-50";
  }
  return "text-gray-600 bg-gray-50";
};

const DashboardConditions = () => {
  return (
    <Card className="lg:col-span-4 h-fit">
      <CardHeader>
        <CardTitle>Current Conditions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {Object.entries(conditions).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center">
              <span className="font-medium text-gray-700">{key}</span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(
                  value
                )}`}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="w-full flex justify-center">
        <Button className="w-full" variant="outline">
            View Detailed Analysis
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DashboardConditions;
