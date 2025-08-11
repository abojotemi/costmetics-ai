import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { FaStar } from "react-icons/fa6";

interface ReviewCardProps {
  img: string | null;
  name: string;
  star: number;
  review: string;
}
const capitalize: { (str: string): string } = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
const ReviewCard = ({ img = null, name, star, review }: ReviewCardProps) => {
  return (
    <Card className="p-0 shadow-lg border-none max-w-96">
      <CardContent className="p-6 rounded-xl">
        <div className="flex items-center space-x-2 mb-5">
          <div className="flex items-center space-x-2">
            {img ? (
              <img src={img} alt={name} className="size-10 rounded-full" />
            ) : (
              <div className="size-10 rounded-full text-white bg-primary flex items-center justify-center p-1">
                <p className="font-extrabold text-xl">{name.charAt(0).toUpperCase()}</p>
              </div>
            )}
            <div className="flex flex-col">
              <p className="text-gray-900 font-semibold">{capitalize(name)}</p>
              <div className="flex space-x-1">
                {[...Array(star)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
                {[...Array(5 - star)].map((_, index) => (
                  <FaStar key={index} className="text-gray-300" />
                ))}
              </div>
            </div>
          </div>
          <div className="flex space-x-1"></div>
        </div>
        <em className="text-gray-700">&quot;{review}&quot;</em>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
