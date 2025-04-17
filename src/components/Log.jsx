import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { dataContext } from "../context/UserContext";

function Log() {
  let { login, setLogin } = useContext(dataContext);
  const [username, setUsername] = useState("");

  return (
    <div className="flex flex-col items-center bg-white px-4 pt-6 sm:pt-10 md:pt-16 lg:pt-20 xl:pt-24 min-h-screen">
      <h1 className="text-4xl font-bold text-green-500 mb-8 sm:mb-10">
        Enter Log-in credentials
      </h1>
      <div className="w-full max-w-md space-y-6">
        <div className="flex flex-col">
          <label className="mb-1 text-green-500 font-semibold text-lg">
            Enter Username
          </label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="text-green-500 border border-green-400 focus:ring-green-500 w-full p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-green-500 font-semibold text-lg">
            Enter Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="text-green-500 border border-green-400 focus:ring-green-500 w-full p-2 rounded"
          />
        </div>
        <button
          className="w-full bg-green-500 text-white hover:bg-green-500 p-3 rounded text-lg font-medium"
          onClick={() => {
            toast.success("Logged in Successfully..");
            setLogin(username);
          }}
        >
          Log In
        </button>
      </div>
    </div>
  );
}

export default Log;
