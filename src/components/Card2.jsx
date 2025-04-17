import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { DecrementQty, IncrementQty, RemoveItem } from "../redux/cartSlice";
import { toast } from "react-toastify";

function Card2({ name, id, price, image, qty }) {
  let dispatch = useDispatch();
  return (
    <div className="w-full h-[120px] p-2 shadow-lg flex justify-between">
      <div className="w-[60%] h-full flex gap-5">
        <div className="w-[60%] rounded-lg overflow-hidden h-full">
          <img src={image} alt="" className=" object-cover" />
        </div>
        <div className="w-[40%] h-full flex flex-col gap-3">
          <div className="text-lg text-green-400 font-semibold ">{name}</div>
          <div className="w-[110px] h-[40px] bg-slate-200 flex rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-green-400 text-xl">
            <button
              className="w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-100"
              onClick={() => (qty > 1 ? dispatch(DecrementQty({ id })) : 1)}
            >
              -
            </button>
            <span className="w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-400">
              {qty}
            </span>
            <button
              className="w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-100"
              onClick={() => dispatch(IncrementQty({ id }))}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-start gap-6">
        <span className="text-xl text-green-400 font-semibold">{price}</span>
        <MdDelete
          className="w-[25px] h-[25px] text-green-400 cursor-pointer"
          onClick={() => {
            dispatch(RemoveItem(id));
            toast.success("Item Removed..");
          }}
        />
      </div>
    </div>
  );
}

export default Card2;
