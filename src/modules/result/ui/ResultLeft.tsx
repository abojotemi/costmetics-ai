import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

interface productsType {
  name: string;
  description: string;
  keyIngredients: string[];
  usage: string;
  benefit: string;
}

const products: productsType[] = [
  {
    name: "Gentle Cleanser",
    description:
      "To remove dirt, oil, and impurities without stripping the skin's natural moisture barrier.",
    keyIngredients: ["Glycerin", "Hyaluronic Acid", "Ceramides"],
    usage:
      "Apply a small amount to damp skin, massage gently in circular motions, and rinse thoroughly with lukewarm water. Use morning and night.",
    benefit:
      "Helps maintain a clean surface, preventing clogged pores and supporting healthy skin function, suitable for balanced normal skin.",
  },
  {
    name: "Hydrating Moisturizer",
    description:
      "To provide essential hydration and help maintain the skin's natural barrier.",
    keyIngredients: ["Hyaluronic Acid", "Ceramides", "Niacinamide"],
    usage:
      "Apply a pea-sized amount to the face and neck after cleansing and any serums. Use morning and night.",
    benefit:
      "Keeps normal skin hydrated and balanced, preventing dryness or excess oiliness, and supporting overall skin health.",
  },
  {
    name: "Vitamin C Serum",
    description:
      "To provide essential hydration and help maintain the skin's natural barrier.",
    keyIngredients: ["Vitamin C", "Hyaluronic Acid", "Ferulic Acid"],
    usage:
      "Apply a pea-sized amount to the face and neck after cleansing and any serums. Use morning and night.",
    benefit:
      "Keeps normal skin hydrated and balanced, preventing dryness or excess oiliness, and supporting overall skin health.",
  },
];

const ResultLeft = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="">
        <CardContent className="p-0">
          <ScrollArea className="h-128 w-full">
            <div className="p-4 space-y-3">
              {products.map((product, idx) => (
                <Card key={idx} className="bg-green-50">
                  <CardContent className="p-4 space-y-3">
                    <div>
                      <h3 className="text-lg font-medium tracking-wide">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {product.description}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs tracking-tight font-medium mb-2">
                        Key Ingredients:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {product.keyIngredients.map((ingredient, id) => (
                          <span
                            key={id}
                            className="bg-green-400/20 text-xs px-2 py-1 rounded text-green-800 tracking-wide"
                          >
                            {ingredient}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs tracking-tight font-medium mb-1">
                          Usage:
                        </p>
                        <p className="text-xs text-muted-foreground tracking-wide text-justify">
                          {product.usage}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs tracking-tight font-medium mb-1">
                          Benefit:
                        </p>
                        <p className="text-xs text-muted-foreground tracking-wide text-justify">
                          {product.benefit}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultLeft;
