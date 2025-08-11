import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";
import { FaCheck, FaPlus } from "react-icons/fa6";

const CheckCard = ({ active, eq, position }: { active: number; eq: number; position: string }) => {
  return (
    <div className="flex flex-col items-center justify-center">
    <Card className="p-0 w-5/10 sm:h-64 max-sm:h-32 mx-auto md:w-full shadow-none">
      <CardContent
        className={cn(
          "bg-muted rounded-lg size-full flex items-center justify-center border-2 border-gray-300",
          active == eq && "border-primary bg-primary/10"
        )}
      >
        {active == eq ? (
          <FaCheck className="text-primary size-6" />
        ) : (
          <FaPlus className="text-gray-500 font-bold" />
        )}
      </CardContent>
    </Card>
      <p className="text-center mt-2 text-gray-800 font-medium">{position}</p>
    </div>
  );
};

export default CheckCard;
