import React from "react";
import { useLocation } from "react-router-dom";

const DetailPage = () => {
  const location = useLocation(); // Access the location object from React Router
  const site = location.state?.site; // Safely access the site data
  console.log(site.image_url); // Add this inside the DetailPage component

  // If no site data is passed, show a fallback message
  if (!site) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-2xl text-gray-100">Site not found. Please go back and select a valid site.</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Back Button */}
      <div className="p-6">
        <button
          className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300"
          onClick={() => window.history.back()}
        >
          ← Back to Map
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Display the image using site.image_url */}
          <div className="rounded-lg shadow-lg overflow-hidden bg-gray-800">
            <img
              src={site.image_url}
              alt={site.name}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Site Information */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h1 className="text-4xl font-extrabold mb-4 text-white">{site.name}</h1>
            <p className="text-lg leading-relaxed text-gray-300">{site.detailed_description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
