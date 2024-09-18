import React from "react";
import { homepagebanner } from "../assets/images/images"; // Ensure this import is correct
import { MdOutlineArrowOutward } from "react-icons/md";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center rounded-lg"
      style={{
        backgroundImage: `url(${homepagebanner})`,
        height: "400px", // Keep the height the same
        width: "calc(100% - 2rem)", // Full width minus space on the left and right
        maxWidth: "calc(1200px + 2rem)", // Maximum width plus space on the left and right
        margin: "2rem auto 0", // Space around the edges: 2rem top, auto horizontal
        padding: "0 1rem", // Space on the left and right edges
        boxSizing: "border-box", // Include padding in the element's total width and height
        backgroundSize: "cover", // Ensure image covers the container
        backgroundPosition: "center", 
        overflow: "hidden", 
        zIndex: 1, 
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>{" "}
      {/* Dark overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 lg:px-20">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-10 text-center">
          Magic of Hands, <br /> Colors of Hearts
        </h1>
        {/* Centered Button Container */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 px-6 md:px-16 lg:px-20">
          {" "}
          {/* Reduced space between buttons */}
          <button
            className="px-8 py-3 bg-white text-gray-600 font-semibold rounded-full shadow-md " // Disabled button styles
            disabled
          >
            Start Exploring
          </button>
          <NavLink to={"/map"}>
          <button className=" p-4 bg-white text-black   font-semibold rounded-full shadow-lg hover:bg-gray-200 transition">
            <span className="flex items-center ">
              <MdOutlineArrowOutward />
            </span>
          </button>
          </NavLink>
        </div> 
      </div>
    </div>
  );
};

export default HeroSection;
