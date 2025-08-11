"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import CheckCard from "../components/check-card";
import { IoMdRefresh } from "react-icons/io";

const sides: string[] = ["Front", "Left", "Right"] as const;
const SaDown = () => {
  const [active, setActive] = useState<number>(0);
  return (
    <div className="mt-8 bg-white p-8 space-y-8 shadow">
      <h2 className="font-medium tracking-wide">Capture Progress</h2>
      <div className="grid md:grid-cols-3 gap-8 min-h-72">
        <div className="" onClick={() => setActive(prev => prev == 1? 0:1)}>
          <CheckCard active={active} eq={1} position="Front" />
        </div>
        <div className="" onClick={() => setActive(prev => prev == 2? 0:2)}>
          <CheckCard active={active} eq={2} position="Left Side" />
        </div>
        <div className="" onClick={() => setActive(prev => prev == 3? 0:3)}>
          <CheckCard active={active} eq={3} position="Right Side" />
        </div>
      </div>
      {active !== 0 && (
        <Button
          variant={"outline"}
          className="flex items-center hover:bg-primary/10 space-x-2"
        >
          <IoMdRefresh className="size-5 font-extrabold" />
          <span>Retake {sides[active - 1]}</span>
        </Button>
      )}
      <Button onClick={() => setActive((prev) => (prev + 1) % 4)}>
        Click Me
      </Button>
    </div>
  );
};

export default SaDown;
