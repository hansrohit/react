import React from "react";
import Sample from "./pages/Sample.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sample2 from "./pages/Sample2.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sample2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
