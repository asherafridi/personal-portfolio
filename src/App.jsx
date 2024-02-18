import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Project from "./Pages/Project";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex bg-gray-950 text-white">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
