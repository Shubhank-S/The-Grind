import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../1_pages/Home";
import About from "../1_pages/About";

function PassingValueByRouting() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default PassingValueByRouting;
