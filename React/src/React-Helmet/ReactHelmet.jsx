import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../1_pages/Home";
import About from "../1_pages/About";
import Dashboard from "../1_pages/Dashboard";

function ReactHelmet() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default ReactHelmet;
