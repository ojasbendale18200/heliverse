import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Team from "../pages/Team";
import Navbar from "./Navbar";

function AllRoutes() {
  return (
    <div>
      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
