import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { AddItem } from "../redux/cartSlice";
import { toast } from "react-toastify";

function Card({ name, image, id, price, type }) {
  let dispatch = useDispatch();
  return (
    <div className="w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-green-300">
      <div className="w-[100%] h-[60%] overflow-hidden rounded-lg">
        <img src={image} alt="" className="object-cover"></img>
      </div>
      <div className="text-2xl font-semibold">{name}</div>
      <div className="w-full flex justify-between items-center">
        <div className="text-lg font-bold text-green-500">Rs {price}</div>
        <div className="flex justify-center items-center text-green-500 gap-2 text-lg font-semibold">
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>
      <button
        className="w-full p-3 bg-green-400 hover:bg-green-300 cursor-pointer text-white rounded-lg transition-all"
        onClick={() => {
          dispatch(
            AddItem({ id: id, name: name, image: image, price: price, qty: 1 })
          );
          toast.success("Item Added..");
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Card;
