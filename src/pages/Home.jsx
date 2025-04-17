import React, { useContext, useState } from "react";
import categories from "../category";
import Card from "../components/card";
import food_items from "../food.js";
import { dataContext } from "../context/UserContext.jsx";
import Cart from "../components/cart";

function Home() {
  let { cate, setCate, input } = useContext(dataContext);

  function filter(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter(
        (item) => item.food_category === category
      );
      setCate(newList);
    }
  }

  return (
    <div className="w-full min-h-screen bg-slate-200">
      {!input ? (
        <div className="flex flex-wrap justify-center items-center gap-5 w-[100%]">
          {categories.map((item) => {
            return (
              <div
                className="w-[140px] h-[150px] bg-white rounded-lg flex flex-col items-center gap-5 p-5 justify-center text-[20px] font-semibold text-gray-600 shadow-xl hover:bg-green-200 cursor-pointer transition-all"
                onClick={() => filter(item.name)}
              >
                {item.icon}
                {item.name}
              </div>
            );
          })}
        </div>
      ) : null}
      <div className="w-full flex flex-wrap justify-center items-center pt-8 pb-8 px-5 gap-5">
        {cate.length > 1 ? (
          cate.map((item) => {
            return (
              <Card
                key={item.id}
                name={item.food_name}
                image={item.food_image}
                id={item.id}
                price={item.price}
                type={item.food_type}
              />
            );
          })
        ) : (
          <div className="text-4xl text-green-400 flex pt-18 font-semibold justify-center">
            No Item Found...
          </div>
        )}
      </div>
      <Cart></Cart>
    </div>
  );
}

export default Home;
