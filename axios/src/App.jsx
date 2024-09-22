import React from "react";
import Sample from "./pages/Sample.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sample />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
