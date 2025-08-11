import Hero from "@/modules/hero/ui/hero";
import HeroFooter from "@/modules/hero/ui/hero-footer";
import HeroReviewCard from "@/modules/hero/ui/hero-review-card";
import HeroSubFooter from "@/modules/hero/ui/hero-subfooter";
import HeroWork from "@/modules/hero/ui/hero-work";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <HeroWork />
      <HeroReviewCard />
      <HeroSubFooter />
      <HeroFooter />
    </div>
  );
};

export default page;
