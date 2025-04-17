import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { dataContext } from "../context/UserContext";
import { useSelector } from "react-redux";
import Card2 from "./Card2";
import { toast } from "react-toastify";

function Cart() {
  let { showCart, setShowCart } = useContext(dataContext);

  let items = useSelector((state) => state.cart);

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  const deliveryFee = 20;
  const taxes = (subtotal * 0.5) / 100;
  const total = Math.floor(subtotal + deliveryFee + taxes);

  return (
    <div
      className={`w-full md:w-[40vw] h-[100%] fixed shodow-xl top-0 right-0 bg-white p-6 transition-all overflow-auto duration-300 ${
        showCart ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <header className="w-[100%] flex justify-between items-center">
        <span className="text-green-400 font-semibold text-[20px] ">
          Order items
        </span>
        <RxCross2
          className="text-green-400 font-semibold text-[18px] cursor-pointer h-[30px] w-[30px] hover:text-gray-600"
          onClick={() => setShowCart(false)}
        />
      </header>
      {items.length > 0 ? (
        <>
          <div className="w-full mt-8 flex flex-col gap-3">
            {items.map((item) => (
              <Card2
                name={item.name}
                price={item.price}
                image={item.image}
                id={item.id}
                qty={item.qty}
              />
            ))}
          </div>
          <div className="border-t-2 border-b-2 mt-7 border-gray-400 w-full flex flex-col gap-2 p-7">
            <div className="w-full flex justify-between items-center">
              <span className="font-semibold text-lg text-gray-600">
                Subtotal:
              </span>
              <span className="text-green-400 font-semibold text-lg">
                Rs. {subtotal}/-
              </span>
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="font-semibold text-lg text-gray-600">
                Delivery Fee:
              </span>
              <span className="text-green-400 font-semibold text-lg">
                Rs. {deliveryFee}/-
              </span>
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="font-semibold text-lg text-gray-600">
                Taxes:
              </span>
              <span className="text-green-400 font-semibold text-lg">
                Rs. {taxes}/-
              </span>
            </div>
          </div>
          <div className="w-full flex justify-between items-center p-4 ">
            <span className="font-semibold  text-gray-600 text-2xl">
              Grand Total:
            </span>
            <span className="text-green-400 font-semibold text-2xl">
              Rs. {total}/-
            </span>
          </div>
          <button
            className="ml-14 mt-6 w-[80%] p-3 bg-green-400 hover:bg-green-300 cursor-pointer text-white rounded-lg transition-all"
            onClick={() => {
              toast.success("Order Placed..");
            }}
          >
            Place Order
          </button>
        </>
      ) : (
        <div className="text-4xl text-green-400 flex pt-18 font-semibold justify-center">
          Empty Cart...
        </div>
      )}
    </div>
  );
}

export default Cart;
