import React from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/home-background.jpg";

const HeroSection = () => {
  return (
    <>
    <div className="w-full flex justify-between items-center rounded p-10" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${logo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <div>
        <h1 className="text-3xl">ashirafridi.</h1>
        <p className="text-slate-400">Full Stack Developer</p>
      </div>
      <div>
        <Link to="contact-us" className="bg-green-500 p-3 px-10 text-black rounded hover:bg-green-400">Contact Us</Link>
      </div>
    </div>
    </>
  );
};

export default HeroSection;
