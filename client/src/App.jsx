import React from "react";
import Home from "./Pages/Home";
import BuyCredit from "./Pages/BuyCredit";
import Result from "./Pages/Result";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="w-full min-h-screen px-28 bg-gradient-to-b from-teal-50 to-orange-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />
      </Routes>
    </div>
  );
};

export default App;
