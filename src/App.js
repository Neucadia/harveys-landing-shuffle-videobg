import React from "react";
import { Routes, Route } from "react-router-dom";

import IndexPage from "./pages/Index.js";
import EquineList from "./pages/equine/index.js";
import ProductPage from "./pages/equine/product.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/equine" element={<EquineList />} />
      <Route path="/harveys-horse-10" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
