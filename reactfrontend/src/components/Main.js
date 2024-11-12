import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Nopage from "./Nopage";
import Navbar from "./Navbar";
import Plan from "./plan"
import Program from "./program"

import Login from "./login";
import Member from "./Member";

function Main() {
  return (
    <div>
      <Router>
        <div className="main-route">
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="plan/" element={<Plan/>} />
          <Route path="member/" element={<Member/>} />
          <Route path="program/" element={<Program/>} />
          <Route path="login/" element={<Login />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </Router>
    </div>
  );
}
export default Main;
