// src/components/StatePage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import getImage from "../states/imageMapper";
import statesData from "../states/states.json";
import Card from "./Card";
import { selectStateCards } from "../store/stateCardSlice"; // Selector to get cards

const StatePage = () => {
  const { stateId } = useParams();
  const navigate = useNavigate(); // Use navigate for navigation
  const state = statesData.find((state) => state.id === stateId);

  const stateCards = useSelector(selectStateCards); // Get all state cards
  const cardsForState =
    stateCards.find((card) => card.stateId === stateId)?.cards || []; // Get cards for the current state

  if (!state) return <div>State not found</div>;

  const { name, imageName, description, capital, language, area, population } =
    state;
  const imageUrl = getImage(imageName);

  const handleMapClick = () => {
    // Navigate to the maps page
    navigate("/maps");
  };

  return (
    <div className="w-full">
      <div className="relative w-full h-96 mb-8">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        <h1 className="absolute inset-0 flex items-center justify-center text-7xl font-bold text-white bg-black bg-opacity-50 p-4 rounded-lg">
          {name}
        </h1>
      </div>
      <div className="py-8 px-4 max-w-4xl mx-auto">
        <p className="text-lg mb-4">{description}</p>
        <div className="text-lg mb-2">
          <strong>Capital:</strong> {capital}
        </div>
        <div className="text-lg mb-2">
          <strong>Language:</strong> {language}
        </div>
        <div className="text-lg mb-2">
          <strong>Area:</strong> {area}
        </div>
        <div className="text-lg mb-8">
          <strong>Population:</strong> {population}
        </div>

        {/* Main title for cards */}
        <h2 className="text-2xl font-bold mb-6">Heritage Sites</h2>

        {/* Render the row of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsForState.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
              link="#"
              className="bg-white p-4 shadow-lg rounded-lg h-64" // Ensure uniform card size
            />
          ))}
        </div>

        {/* Map Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleMapClick}
            className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Go to Maps
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatePage;
