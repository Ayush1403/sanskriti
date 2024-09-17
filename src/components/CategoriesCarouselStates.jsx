import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import getImage from "../states/imageMapper"; // Adjust the import path as necessary

const MAX_TEXT_LENGTH = 25;

const CategoriesCarouselStates = () => {
  const categories = useSelector((state) => state.categories.list);

  const formatText = (text) => {
    if (text.length > MAX_TEXT_LENGTH) {
      return `${text.substring(0, MAX_TEXT_LENGTH)}...`;
    }
    return text;
  };

  return (
    <div className="flex overflow-x-scroll whitespace-nowrap py-4 no-scrollbar">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/states/${category.id}`}
          className="inline-block mx-2 flex flex-col items-center justify-center cursor-pointer"
          style={{ width: "120px", height: "180px" }}
        >
          <div className="relative mb-2">
            <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
              <img
                src={getImage(category.imageName)} // Use getImage with the imageName
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="text-center text-sm font-semibold mt-2 whitespace-normal">
            {formatText(category.name)}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default CategoriesCarouselStates;
