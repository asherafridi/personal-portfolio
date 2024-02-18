import React from "react";
import "/src/index.css";
import "boxicons";
import { Link } from "react-router-dom";
import logo from "/src/assets/my-pic.jpg";

const Navbar = () => {
  return (
    <>
      <div className="px-5 bg-neutral-950 lg:min-h-dvh overflow-auto py-4 w-full lg:w-1/6 justify-between items-center">
        <Link to="/" className="flex items-center gap-3 w-full">
          <img
            src={logo}
            className="w-[40px] h-[40px] rounded-full border border-slate-100"
          />
          <div className="text-slate-50 flex flex-col justify-center">
            <h1 className="leading-none">Ashir Afridi</h1>
            <p className="text-sm text-slate-500 leading-none mt-1">
              Full Stack Developer
            </p>
          </div>
        </Link>
        <div className="hidden lg:block w-full  text-slate-50 gap-5 text-md items-center mt-10 ">
          <Link to="/" className="p-1 w-full flex gap-4 px-3 py-3 rounded hover:bg-neutral-800">
            <box-icon name="home" color="white"></box-icon>
            Home
          </Link>
          <Link to="projects" className="p-1 w-full flex gap-4 px-3 py-3 rounded hover:bg-neutral-800">
            <box-icon name="briefcase" color="white"></box-icon>
            Projects
          </Link>
          <Link to="products" className="p-1 w-full flex gap-4 px-3 py-3 rounded hover:bg-neutral-800">
            <box-icon name="box" color="white"></box-icon>
            Products
          </Link>
          <Link to="services" className="p-1 w-full flex gap-4 px-3 py-3 rounded hover:bg-neutral-800">
            <box-icon name="diamond" color="white"></box-icon>
            Services
          </Link>
          <Link to="contact-us" className="p-1 w-full flex gap-4 px-3 py-3 rounded hover:bg-neutral-800">
            <box-icon name="message-dots"  color="white" animation="tada"></box-icon>
            Contact Us
          </Link>
        </div>
        <hr  className="hidden lg:block my-8 border-neutral-700"/>
        
        <div className="hidden lg:block w-full text-slate-50 gap-5 text-md items-center mt-10 ">
          <a className="p-1 w-full flex gap-4 px-3 py-3 rounded hover:bg-neutral-800">
            <box-icon name="facebook" type="logo" color="white"></box-icon>
            Facebook
          </a>
          <a className="p-1 w-full flex gap-4 px-3 py-3 rounded hover:bg-neutral-800">
            <box-icon name="instagram" type="logo" color="white"></box-icon>
            Instagram
          </a>
          <a className="p-1 w-full flex gap-4 px-3 py-3 rounded hover:bg-neutral-800">
            <box-icon name="github" type="logo" color="white"></box-icon>
            Github
          </a>
          <a className="p-1 w-full flex gap-4 px-3 py-3 rounded hover:bg-neutral-800">
            <box-icon name="linkedin" type="logo" color="white"></box-icon>
            LinkedIn
          </a>
          <a href="" to="contact-us" className="p-1 w-full flex gap-4 px-3 py-3 rounded hover:bg-neutral-800">
            <box-icon name="discord" type="logo"  color="white"></box-icon>
            Discord
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
