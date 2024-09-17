import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { recentdiscovery } from "../assets/images/images";

const trendingItems = [
  {
    id: 1,
    text: "Recent Discoveries",
    image: recentdiscovery,
  },
  {
    id: 2,
    text: "Trending 2",
    image: "https://via.placeholder.com/150?text=Trending+2",
  },
  {
    id: 3,
    text: "Trending 3",
    image: "https://via.placeholder.com/150?text=Trending+3",
  },
];

const TrendingDropdown = ({ isOpen, setIsOpen }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const dropdownRef = useRef(null);
  const timerRef = useRef(null);

  // Handle opening dropdown on hover
  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
    setIsOpen(true);
  };

  // Handle closing dropdown with a delay
  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300); // Adjust delay as needed
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        timerRef.current = setTimeout(() => {
          setIsOpen(false);
        }, 300); // Adjust delay as needed
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearTimeout(timerRef.current);
    };
  }, [setIsOpen]);

  return (
    <div
      className="relative z-50"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center bg-pink-50 py-2 px-3 rounded-full text-gray-500 hover:text-black transition focus:outline-none"
      >
        Trending
        {isOpen ? (
          <FiChevronUp className="ml-10 bg-white rounded-full text-xl" />
        ) : (
          <FiChevronDown className="ml-10 bg-white rounded-full text-xl" />
        )}
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-2 py-2 w-80 bg-white rounded-lg shadow-lg">
          <div className="flex">
            <div className="w-1/2">
              {trendingItems.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="px-4 py-3 hover:bg-gray-100 text-sm cursor-pointer"
                >
                  {item.text}
                </div>
              ))}
            </div>
            <div className="w-1/2 border-l border-gray-300">
              {trendingItems.map((item) => (
                <div
                  key={item.id}
                  className={`px-4 py-3 ${
                    hoveredItem === item.id ? "block" : "hidden"
                  }`}
                >
                  <img src={item.image} alt={item.text} className="w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrendingDropdown;
