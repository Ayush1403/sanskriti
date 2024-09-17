import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom"; // Import Link
import {
  jwellery,
  accessories,
  apparels,
  homedecor,
} from "../assets/images/images";

const categories = [
  {
    id: 1,
    text: "Jewellery",
    image: jwellery,
    link: "/jewelry", // Link for Jewelry
  },
  {
    id: 2,
    text: "Accessories",
    link: "/accessories",
    image: accessories,
  },
  {
    id: 3,
    text: "Home Decor",
    image: homedecor,
    link: "/homedecor",
  },
  {
    id: 4,
    text: "Apparels",
    image: apparels,
    link: "/apparels",
  },
];

const CategoriesDropdown = ({ isOpen, setIsOpen }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timerRef = useRef(null); // To keep track of the timer

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        timerRef.current = setTimeout(() => {
          setDropdownOpen(false);
        }, 100);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(timerRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 300); // Adjust delay as needed
  };

  return (
    <div
      className="relative z-50"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter} // Open on hover
      onMouseLeave={handleMouseLeave} // Close with delay when hover ends
    >
      <button className="flex items-center bg-pink-50 py-2 px-4 rounded-full text-gray-500 hover:text-black transition focus:outline-none w-50">
        Categories
        {isDropdownOpen ? (
          <FiChevronUp className="ml-2 text-xl bg-white rounded-full" />
        ) : (
          <FiChevronDown className="ml-2 text-xl bg-white rounded-full" />
        )}
      </button>
      {isDropdownOpen && (
        <div className="absolute left-0 mt-2 py-2 w-96 bg-white rounded-lg shadow-lg">
          <div className="flex">
            {/* Text Column */}
            <div className="w-1/2 border-r border-gray-300">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={category.link || "#"} // Link to category's page if available
                  onMouseEnter={() => setHoveredItem(category.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="flex items-center py-4 px-2 hover:bg-gray-100 cursor-pointer text-sm"
                >
                  {category.text}
                </Link>
              ))}
            </div>
            {/* Image Column */}
            <div className="w-1/2 flex flex-col">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`px-6 py-4 ${
                    hoveredItem === category.id ? "block" : "hidden"
                  }`}
                >
                  <img
                    src={category.image}
                    alt={category.text}
                    className="w-full h-40 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesDropdown;
