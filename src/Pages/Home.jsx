import React from "react";
import HeroSection from "/src/Components/HeroSection";

const Home = () => {
  return (
    <>
      <div className="p-5 w-full">
      <HeroSection />
      <div className="flex my-10 gap-5">
        <div className="w-1/2"></div>
        <div className="bg-black border w-1/2 flex rounded border-slate-800 p-5">Ashir</div>
      </div>
      </div>
    </>
  );
};

export default Home;
