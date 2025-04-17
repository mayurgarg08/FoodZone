import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./components/About";
import { ToastContainer } from "react-toastify";
import Log from "./components/Log";
import { dataContext } from "./context/UserContext";
import Log2 from "./components/Log2";
import Help from "./components/Help";
function App() {
  let { login, setLogin } = useContext(dataContext);
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={login === "login" ? <Log /> : <Log2 />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
