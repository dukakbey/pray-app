import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Chart from "./pages/Chart";
import Chartt from "./pages/Chartt";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/missed" element={<Chart />} />
        <Route path="/missed2" element={<Chartt />} />
        <Route path="/about" element={<About />} />
      </Routes>
   
  );
}

export default App;
