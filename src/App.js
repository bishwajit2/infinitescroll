import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import FetchContent from "./components/FetchContent";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<FetchContent />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
