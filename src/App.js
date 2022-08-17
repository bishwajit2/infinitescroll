import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PhotoGallery from "./components/pages/PhotoGallery";
import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<PhotoGallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
