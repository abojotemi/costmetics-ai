import React from "react";

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DashboardRecommendedItem = ({
  img,
  name,
  desc,
  price,
}: {
  img: string;
  name: string;
  desc: string;
  price: number;
}) => {
  return (
    <Card className="">
      <CardContent className="flex flex-col space-y-2">
        {img ? (
          <img src={img} className="w-full h-30 object-cover rounded-lg" />
        ) : (
          <></>
        )}
        <p className="font-semibold tracking-wide">{name}</p>
        <p className="text-gray-600 ">{desc}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="font-semibold tracking-wide text-lg">${price}</p>
        <Button>Add</Button>
      </CardFooter>
    </Card>
  );
};

export default DashboardRecommendedItem;
