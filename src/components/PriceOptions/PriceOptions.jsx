import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  // Define your JSON data
  const priceOptions = {
    priceOptions: [
      {
        id: 1,
        name: "Basic Membership",
        price: 29.99,
        features: [
          "Access to cardio area",
          "Access to weightlifting area",
          "Limited group classes",
          "Locker rental available",
        ],
      },
      {
        id: 2,
        name: "Premium Membership",
        price: 49.99,
        features: [
          "Full access to all facilities",
          "Unlimited group classes",
          "Free personal training session per month",
          "Discounts on merchandise",
        ],
      },
      {
        id: 3,
        name: "Family Membership",
        price: 79.99,
        features: [
          "Access for two adults and two children",
          "Access to all facilities",
          "Unlimited group classes",
          "Childcare services available",
          "Discounts on family packages",
        ],
      },
    ],
  };

  return (
    <div>
      <h2 className="text-5xl">Best prices: </h2>
      {priceOptions.priceOptions.map((option) => (
        <PriceOption key={option.id} option={option}></PriceOption>
      ))}
    </div>
  );
};

export default PriceOptions;
