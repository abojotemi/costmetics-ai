import React from "react";
import ReviewCard from "../components/review-card";

const HeroReviewCard = () => {
  return (
    <div className="bg-primary/5">
      <div className="grid md:grid-cols-3 p-6 md:p-20 gap-5 lg:w-9/10 mx-auto place-content-center">
        <ReviewCard
          img="sarah.jpg"
          name="Sarah M."
          star={4}
          review="GlowScan completely transformed my skincare routine. The AI recommendations were spot-on and my skin has never looked better!"
        />
        <ReviewCard
          img="emily.jpg"
          name="Emily R."
          star={3}
          review="I was skeptical at first, but the analysis was incredibly accurate. It identified issues I didn't even know I had!"
        />
        <ReviewCard
          img="jessica.jpg"
          name="Jessica L."
          star={5}
          review="Finally found products that actually work for my sensitive skin. The personalized approach makes all the difference!"
        />
      </div>
    </div>
  );
};

export default HeroReviewCard;
