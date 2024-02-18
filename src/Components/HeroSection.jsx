import React from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/my-pic.jpg";

const HeroSection = () => {
  return (
    <>
      <div className="md:flex px-10 md:px-32">
        <div className="w-full md:w-1/2 d-flex items-center py-16 md:py-64">
          <p className="text-xl md:text-3xl text-slate-700">Hi, I'm Ashir</p>
          <h1 className="text-6xl md:text-8xl font-bold">
            <span className="text-blue-700">MERN</span> Developer
          </h1>
          <p className="text-sm md:text-xl mt-5">
            I'll help you to build appliction that can create impact.
          </p>
          <div className="flex gap-3 mt-3">
            <Link
              to="contact-us"
              className="p-2 px-5 text-sm md:text-md bg-black hover:bg-gray-800 text-white rounded"
            >
              Get In Touch
            </Link>
            <Link
              to="projects"
              className="p-2 px-5  text-sm md:text-md bg-slate-100 hover:bg-white shadow-md text-black rounded"
            >
              Browse Projects
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="p-10 height-auto  border-2 rounded-full border-blue-300">
            <img src={logo} className="rounded-full w-[400px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
