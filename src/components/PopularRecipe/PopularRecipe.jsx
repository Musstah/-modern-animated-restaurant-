import React from "react";
import Food1 from "../../assets/food/food.png";
import Food2 from "../../assets/food/food2-plate.png";
import Food3 from "../../assets/food/banner.png";
import { motion } from "framer-motion";
import { SlideUp } from "../Hero/Hero";

const PopularRecipeData = [
  {
    id: 1,
    name: "HotDessert",
    img: Food1,
    price: "$5.99",
    delay: 0.4,
  },
  {
    id: 2,
    name: "Hot Cake",
    img: Food2,
    price: "$5.00",
    delay: 0.8,
  },
  {
    id: 3,
    name: "HotDessert",
    img: Food3,
    price: "$5.00",
    delay: 1.2,
  },
];

const PopularRecipe = () => {
  return (
    <secyion>
      <div className="container py-24">
        <motion.h3
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="show"
          className="py-8 text-4xl font-semibold text-center uppercase font-league"
        >
          Our Popular Recipe
        </motion.h3>

        {/* card section */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 place-items-center">
          {PopularRecipeData.map((item) => (
            <div className="p-3 space-y-3 text-center shadow-xl group bg-white/50 rounded-xl">
              <img
                className=" w-44 mx-auto img-shadow group-hover:scale-x-110 group-hover:translate-y-[-50px]
              group-hover:translate-x-10 group-hover:rotate-[50deg] transition-all duration-400"
                src={item.img}
                alt=""
              />
              <div>
                <button className="opacity-0 btn-primary group-hover:mb-3 group-hover:opacity-100">
                  Buy Now
                </button>
                <p className="text-xl font-semibold">{item.name}</p>
                <p className="text-xl font-bold text-yellow-500">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </secyion>
  );
};

export default PopularRecipe;
