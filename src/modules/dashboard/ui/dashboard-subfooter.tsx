import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

const DashboardSubFooter = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primary/85 *:text-white p-10 space-y-8">
      <h1 className="text-4xl text-center font-bold">
        Ready to Transform Your Skin?
      </h1>
      <p className="text-xl text-center text-balance max-w-3xl mx-auto">
        Join thousands of users who discovered their perfect skincare routine
        with
        <br />
        AI-powered analysis
      </p>
      <div className="grid md:grid-cols-2 gap-4 md:max-w-200 mx-auto">
        <Button className="p-10 border-2 border-primary text-primary bg-white hover:bg-white/90 rounded-lg transition-colors flex items-center space-x-3">
          <span className="text-lg text-balance">Start Skin Analysis</span>
          <ArrowRight className="size-7" />
        </Button>
        <Button
          variant={"outline"}
          className="p-10 border-2 text-white border-white hover:bg-white hover:text-primary  rounded-lg transition-colors flex items-center space-x-3"
        >
          <span className="text-lg text-balance">Learn more</span>
        </Button>
      </div>
      <p className="text-sm text-center">
        ✓ No credit card required • ✓ Results in 2 minutes • ✓ 100% private &
        secure
      </p>
    </div>
  );
};

export default DashboardSubFooter;
