import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import CategoriesDropdown from "./CategoriesDropdown";
import TrendingDropdown from "./TrendingDropdown";

const Header2 = () => {
  const [isCategoriesOpen, setCategoriesOpen] = useState(false);
  const [isTrendingOpen, setTrendingOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white shadow-sm mt-2">
      <div className="flex space-x-4">
        <CategoriesDropdown
          isOpen={isCategoriesOpen}
          setIsOpen={setCategoriesOpen}
        />
        <TrendingDropdown isOpen={isTrendingOpen} setIsOpen={setTrendingOpen} />

        <div className="flex items-center bg-pink-50 py-2 px-10 rounded-full">
          <input
            type="text"
            placeholder="search.."
            className="bg-transparent outline-none text-gray-500 w-full"
          />
          <FiSearch className="ml-4 text-gray-500" />
        </div>
      </div>

      <div className="flex space-x-4">
        <button className="bg-white py-2 px-6 rounded-full text-gray-500 hover:text-black border border-gray-300 transition w-32">
          Artists
        </button>
        <button className="bg-white py-2 px-6 rounded-full text-gray-500 hover:text-black border border-gray-300 transition w-32">
          Blog
        </button>
      </div>
    </header>
  );
};

export default Header2;
