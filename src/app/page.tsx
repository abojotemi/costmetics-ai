import DashboardSubFooter from "@/modules/dashboard/ui/dashboard-subfooter";
import DashboardHero from "@/modules/dashboard/ui/dashboard-hero";
import DashboardReviewCard from "@/modules/dashboard/ui/dashboard-review-card";
import DashboardWork from "@/modules/dashboard/ui/dashboard-work";
import React from "react";
import DashboardFooter from "@/modules/dashboard/ui/dashboard-footer";

const Home = () => {
  return (
    <div className="p-0">
      <DashboardHero />
      <DashboardWork />
      <DashboardReviewCard />
      <DashboardSubFooter />
      <DashboardFooter />
    </div>
  );
};

export default Home;
