import DashboardCards from "@/modules/dashboard/ui/dashboard-cards";
import DashboardHeader from "@/modules/dashboard/ui/dashboard-header";
import DashboardRecentAnalysis from "@/modules/dashboard/ui/dashboard-recent-analysis";
import DashboardRecommendation from "@/modules/dashboard/ui/dashboard-recommendation";
import DashboardStats from "@/modules/dashboard/ui/dashboard-stats";
import React from "react";

const Dashboard = () => {
  return (
    <div className="py-8 px-10 md:px-20 space-y-8">
      <DashboardHeader />
      <DashboardCards />
      <DashboardStats />
      <DashboardRecentAnalysis/>
      <DashboardRecommendation/>
    </div>
  );
};

export default Dashboard;
