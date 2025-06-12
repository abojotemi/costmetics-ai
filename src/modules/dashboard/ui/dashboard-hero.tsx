"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import React from "react";

const DashboardHero = () => {
  return (
    <div className="bg-primary/10 py-12 text-raisin-black">
      <div className="grid lg:grid-cols-2 gap-6 max-lg:gap-y-12 md:px-28 items-center">
        <div className="space-y-8 md:max-w-2xl max-md:size-9/10 max-md:mx-auto">
          <h1 className="text-5xl font-bold leading-tight">
            Discover Your <span className="text-primary">Perfect</span> Skincare
            Match
          </h1>
          <p className="text-xl text-gray-600 leading-relax tracking-wide">
            Revolutionary AI-powered skin analysis that recommends personalized
            cosmetics based on your unique skin type, concerns, and goals.
          </p>
          <div className="grid md:grid-cols-2 gap-4 md:max-w-200">
            <Button className="p-5 md:p-10 border-2 border-primary max-md:size-9/10 max-md:mx-auto text-white hover:bg-primary hover:-translate-y-0.5 hover:shadow-2xl">
              <span className="text-lg text-balance ">Start Skin Analysis</span>
              <ArrowRight className="size-7" />
            </Button>
            <Button
              variant={"outline"}
              className="p-5 md:p-10 max-md:size-9/10 max-md:mx-auto hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <Play className="size-7" />
              <span className="text-lg">Watch Video</span>
            </Button>
          </div>
        </div>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            src="black-woman-2.png"
            alt="lady"
            className="rounded-xl shadow-2xl h-130 w-11/12 object-cover max-md:size-9/10 mx-auto transition-transform duration-300 hover:shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHero;
