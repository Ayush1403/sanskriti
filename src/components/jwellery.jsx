import React from "react";
import { FaShoppingCart, FaInfoCircle, FaCreditCard } from "react-icons/fa";

const Jwellery = () => {
  const images = [
    "https://via.placeholder.com/300x300?text=Image+1",
    "https://via.placeholder.com/300x300?text=Image+2",
    "https://via.placeholder.com/300x300?text=Image+3",
    // Add more image URLs here
  ];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Image Gallery */}
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="flex space-x-2">
              {images.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Product ${index + 1}`}
                  className="w-48 h-48 object-cover rounded-md"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Product Information */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Product Title</h1>
          <p className="text-lg text-gray-700">
            This is a brief description of the product. It highlights the main
            features and benefits.
          </p>
          <div className="text-xl font-semibold">$199.99</div>

          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md flex items-center space-x-2">
              <FaShoppingCart />
              <span>Add to Cart</span>
            </button>
            <button className="bg-green-500 text-white py-2 px-4 rounded-md flex items-center space-x-2">
              <FaCreditCard />
              <span>Buy Now</span>
            </button>
          </div>

          <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md flex items-center space-x-2">
            <FaInfoCircle />
            <span>More Information</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jwellery;
