import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { FaCalendar, FaClock, FaHeart } from "react-icons/fa6";

const DashboardCards = () => {
  const num = 7.2;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-gray-600">Health Score</CardTitle>
        </CardHeader>
        <CardContent className="text-green-600 text-2xl font-semibold flex items-center justify-between">
          <div className="space-y-2">
            <p>{num}</p>
            <p className="text-sm font-semibold leading-tight">
              +0.4 from last month
            </p>
          </div>
          <div className="bg-green-200 rounded-full p-2 w-fit">
            <FaHeart />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-gray-600">Routine Streak</CardTitle>
        </CardHeader>
        <CardContent className="text-purple-600 text-2xl font-semibold flex items-center justify-between">
          <div className="space-y-2">
            <p>23 days</p>
            <p className="text-sm font-semibold leading-tight">
              Personal best!
            </p>
          </div>
          <div className="bg-purple-200 rounded-full p-2 w-fit">
            <FaCalendar />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-gray-600">Product Used</CardTitle>
        </CardHeader>
        <CardContent className="text-orange-600 text-2xl font-semibold flex items-center justify-between">
          <div className="space-y-2">
            <p>8</p>
            <p className="text-sm font-semibold leading-tight">This month</p>
          </div>
          <div className="bg-orange-200 rounded-full p-2 w-fit">
            <FaShoppingBag />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-gray-600">Next Analysis</CardTitle>
        </CardHeader>
        <CardContent className="text-blue-600 text-2xl font-semibold flex items-center justify-between">
          <div className="space-y-2">
            <p>3 days</p>
            <p className="text-sm font-semibold leading-tight">
              Weekly check-in
            </p>
          </div>
          <div className="bg-blue-200 rounded-full p-2 w-fit">
            <FaClock />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardCards;
