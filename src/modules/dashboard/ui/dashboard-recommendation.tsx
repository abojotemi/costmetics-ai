import React from "react";
import DashboardRecommendedItem from "../components/dashboard-recommended-items";
import { Card, CardAction, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface ItemType {
  img: string;
  name: string;
  desc: string;
  price: number;
}

const items: ItemType[] = [
  {
    img: "./VitaminC.png",
    name: "Vitamin C Serum",
    desc: "Brightening & antioxidant",
    price: 24.99,
  },
  {
    img: "./Niacinamide.png",
    name: "Niacinamide Serum",
    desc: "Pore refininig treatment",
    price: 19.99,
  },
  {
    img: "./Retinol.png",
    name: "Retinol Cream",
    desc: "Anti-aging night treatment",
    price: 32.99,
  },
  {
    img: "./ClayMask.png",
    name: "Clay Mask",
    desc: "Deep pore cleansing",
    price: 16.99,
  },
];
const DashboardRecommendation = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended for You</CardTitle>
        <CardAction className=""><Link href="#" className="text-primary hover:underline font-semibold">View All</Link></CardAction>
      </CardHeader>
      <CardContent className="grid sm:grid-cols-2 gap-4 xl:grid-cols-4 list-none" >
        {items.map((item, id) => (
          <li key={id} className="">
            <DashboardRecommendedItem {...item} />
          </li>
        ))}
      </CardContent>
    </Card>
  );
};

export default DashboardRecommendation;
