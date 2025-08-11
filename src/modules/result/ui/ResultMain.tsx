"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FaExpand } from "react-icons/fa6";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const bgs = ["/bg.png", "/black-woman-2.png", "/black-woman.png"];
const side = ["Front", "Left side", "Right side"];
interface ConditionType {
  condition: string;
  area: string;
  severity: "Early Signs" | "Mild" | "Moderate" | "Severe";
}
const conditions: ConditionType[] = [
  { condition: "Excess Oil", area: "T-zone", severity: "Moderate" },
  { condition: "Dryness", area: "Cheeks", severity: "Mild" },
  { condition: "Fine Lines", area: "", severity: "Early Signs" },
];
const ResultMain = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);
  const [dialogImage, setDialogImage] = useState<string>(bgs[0]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Card className="space-y-4">
      <CardContent className="">
        <h3 className="font-medium text-xl">Detected Skin Conditions</h3>
        <div className="xl:flex space-x-6">
          <div className="flex max-xl:mx-auto flex-col items-center max-w-xs md:max-w-sm max-md:mx-auto">
            <p className="w-full text-left my-4 text-lg tracking-wide">
              Images
            </p>
            <Carousel className="w-full" setApi={setApi}>
              <CarouselContent className="">
                {bgs.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="">
                      <Card className="p-0 max-h-fit">
                        <CardContent className="flex aspect-square items-center justify-center p-0 relative">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={image} alt={image} className="rounded-lg" />
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                className="absolute right-2 top-2 bg-transparent hover:bg-transparent hover:scale-110 shadow-none"
                                onClick={() => setDialogImage(image)}
                              >
                                <FaExpand />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className=" sm:max-w-[425px] !p-0 border-none">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={dialogImage}
                                alt={dialogImage}
                                className="rounded-lg border-none"
                              />
                            </DialogContent>
                          </Dialog>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="text-muted-foreground py-2 text-center text-sm">
              {side[current - 1]}
            </div>
          </div>

          <div className="flex-1">
            <h4 className="mb-7 text-xl tracking-wide">Condition Details</h4>
            <ul className="flex flex-col space-y-3">
              {conditions.map((condition, idx) => (
                <li
                  key={idx}
                  className={cn(
                    "flex max-xl:flex-col justify-between px-3 py-5 rounded-lg items-center",
                    condition.severity === "Early Signs"
                      ? "bg-blue-400/20"
                      : condition.severity === "Mild"
                      ? "bg-green-400/20"
                      : condition.severity === "Moderate"
                      ? "bg-orange-400/20"
                      : "bg-red-400/20"
                  )}
                >
                  <div className="flex items-center space-x-2 ">
                    <div
                      className={cn(
                        "size-3 rounded-full",
                        condition.severity === "Early Signs"
                          ? "bg-blue-500"
                          : condition.severity === "Mild"
                          ? "bg-green-500"
                          : condition.severity === "Moderate"
                          ? "bg-orange-500"
                          : "bg-red-500"
                      )}
                    ></div>
                    <div className="flex max-xl:flex-col items-center space-x-2">
                      <p className="font-medium text-lg tracking-tight opacity-90">
                        {" "}
                        {condition.condition}
                      </p>
                      <span>{condition.area && `(${condition.area})`}</span>
                    </div>
                  </div>
                  <p
                    className={cn(
                      "tracking-tight font-medium",
                      condition.severity === "Early Signs"
                        ? "text-blue-500"
                        : condition.severity === "Mild"
                        ? "text-green-500"
                        : condition.severity === "Moderate"
                        ? "text-orange-500"
                        : "text-red-500"
                    )}
                  >
                    {condition.severity}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultMain;
