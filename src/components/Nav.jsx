import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { dataContext } from "../context/UserContext";
import food_items from "../food";
import { useSelector } from "react-redux";
import { HiMiniInformationCircle } from "react-icons/hi2";
import { IoPersonSharp } from "react-icons/io5";
import { BiHelpCircle } from "react-icons/bi";

function Nav() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navBg = isHome ? "bg-slate-200" : "bg-white";

  let {
    input,
    setInput,
    cate,
    setCate,
    showCart,
    setShowCart,
    login,
    setLogin,
  } = useContext(dataContext);

  let items = useSelector((state) => state.cart);

  useEffect(() => {
    let newList = food_items.filter(
      (item) =>
        item.food_name.includes(input) ||
        item.food_name.toLowerCase().includes(input)
    );
    setCate(newList);
  }, [input]);

  return (
    <div
      className={`w-full h-[100px] flex justify-between items-center px-3 md:px-8 ${navBg}`}
    >
      <NavLink
        to="/"
        className={({ isActive }) =>
          `w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex flex-col justify-center items-center cursor-pointer rounded-md bg-white shadow-xl border-green-300 hover:border-2 ${
            isActive ? "border-2 bg-green-100 text-green-700 font-bold" : ""
          }`
        }
      >
        <MdFastfood className="w-[35px] h-[35px] text-green-400" />
        <div className="text-[12px] p-0.5 text-green-500 font-bold">
          FoodZone
        </div>
      </NavLink>
      <form
        className="flex w-[30%] md:w-[65%] h-[50px] gap-3.5 rounded-md shadow-md bg-white md:h-[60px] items-center text-[16px] md:text-[20px] px-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <IoSearch className="text-green-400 w-[25px] h-[30px]" />
        <input
          type="text"
          placeholder="Search Items..."
          className="outline-none"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        ></input>
      </form>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex flex-col justify-center items-center cursor-pointer rounded-md bg-white shadow-xl border-green-300 hover:border-2 ${
            isActive ? "border-2 bg-green-100 text-green-700 font-bold" : ""
          }`
        }
      >
        <HiMiniInformationCircle className="w-[35px] h-[35px] text-green-400" />
        <div className="text-[13px] text-green-500 font-bold">About Us</div>
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive }) =>
          `w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex flex-col justify-center items-center cursor-pointer rounded-md bg-white shadow-xl border-green-300 hover:border-2 ${
            isActive ? "border-2 bg-green-100 text-green-600 font-bold" : ""
          }`
        }
      >
        <IoPersonSharp className="w-[32px] h-[32px] text-green-400" />
        <div className="text-[13px] text-green-500 font-bold">{login}</div>
      </NavLink>
      <NavLink
        to="/help"
        className={({ isActive }) =>
          `w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex flex-col justify-center items-center cursor-pointer rounded-md bg-white shadow-xl border-green-300 hover:border-2 ${
            isActive ? "border-2 bg-green-100 text-green-600 font-bold" : ""
          }`
        }
      >
        <BiHelpCircle className="w-[32px] h-[32px] text-green-400" />
        <div className="text-[13px] text-green-500 font-bold">Help</div>
      </NavLink>
      <div
        className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] flex flex-col justify-center items-center hover:border-2 border-green-300 rounded-md bg-white shadow-xl"
        onClick={() => setShowCart(true)}
      >
        <span className="absolute top-3.5 right-9 text-green-500 font-bold text-[18px]">
          {items.length}
        </span>
        <FaCartShopping className="w-[33px] h-[33px] pt-1.5 cursor-pointer text-green-400" />
        <div className="text-[14px] p-0 text-green-500 font-bold">Cart</div>
      </div>
    </div>
  );
}

export default Nav;
