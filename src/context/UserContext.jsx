import React, { createContext, useEffect, useState } from "react";
import food_items from "../food";

export const dataContext = createContext();

function UserContext({ children }) {
  let [cate, setCate] = useState(food_items);
  let [input, setInput] = useState("");
  let [showCart, setShowCart] = useState(false);
  const [login, setLogin] = useState(() => {
    // Initialize from localStorage, or default to "login"
    return localStorage.getItem("login") || "login";
  });

  // Save login state to localStorage whenever it changes
  useEffect(() => {
    if (login && login !== "login") {
      localStorage.setItem("login", login);
    } else {
      localStorage.removeItem("login");
    }
  }, [login]);

  let data = {
    input,
    setInput,
    cate,
    setCate,
    showCart,
    setShowCart,
    login,
    setLogin,
  };

  return (
    <div>
      <dataContext.Provider value={data}>{children}</dataContext.Provider>
    </div>
  );
}

export default UserContext;
