import React, { useContext } from "react";
import { dataContext } from "../context/UserContext";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";

function Log2() {
  const { login, setLogin } = useContext(dataContext);

  const handleLogout = () => {
    setLogin("login"); // Clear login
    toast.success("Logged out successfully");
  };

  return (
    <div className="min-h-screen flex flex-col justify-start items-center text-green-500 pt-24 px-6">
      <h1 className="text-4xl sm:text-5xl font-bold mb-12">Hii.. {login}</h1>

      <FaUserCircle className="text-green-500" size={180} />

      <button
        onClick={handleLogout}
        className="mt-10 bg-green-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition"
      >
        Log Out
      </button>
    </div>
  );
}

export default Log2;
