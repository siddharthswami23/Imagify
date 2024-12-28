import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center my-20">
      <div className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500">
        <p>Best Text to imahe Generator</p>
        <img src={assets.star_icon} alt="" />
      </div>
      <h1 className="text-7xl max-w-[590px] mt-10 mx-auto text-center">
        Turn text to <span className="text-blue-500">image</span>,in seconds
      </h1>
      <p className="text-2xl text-center max-w-xl mx-auto mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, deleniti?
        repudiandae rerum!
      </p>
      <button className="text-white bg-black w-auto mt-8 px-12 py-3 flex items-center gap-2 rounded-full">
        Generate Images <img className="h-6 " src={assets.star_group} alt="" />
      </button>
    </div>
  );
};

export default Header;
