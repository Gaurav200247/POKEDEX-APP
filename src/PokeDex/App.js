import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import SinglePokemon from "./Pages/SinglePokemon";
import Error from "./Pages/Error";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/singlepokemon/:id" element={<SinglePokemon />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
