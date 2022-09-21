import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/* Le path * fonctionne si jamais l'url ne correspond a rien de declare la haut */}
        <Route path="*" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
