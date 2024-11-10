import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Profile from "./Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function Topbar(){
    return(
        <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
    );
}
export default Topbar;