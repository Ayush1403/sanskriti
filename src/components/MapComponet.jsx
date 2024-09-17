import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const MapComponent = ({ onStateSelect }) => {
  const [hoveredState, setHoveredState] = useState(null);
  const [mapInitialized, setMapInitialized] = useState(false);
  const navigate = useNavigate();

  // Load the map script and ensure it's fully loaded
  const loadMapScript = () => {
    return new Promise((resolve) => {
      if (!document.querySelector('script[src="countrymap.js"]')) {
        const script = document.createElement('script');
        script.src = 'countrymap.js';  // Make sure the path is correct
        script.async = true;
        document.body.appendChild(script);
        script.onload = resolve; // Resolve promise when the script loads
      } else {
        resolve(); // If script already exists, resolve immediately
      }
    });
  };

  useEffect(() => {
    const initializeMap = () => {
      if (window.simplemaps_countrymap && window.simplemaps_countrymap_mapdata) {
        const mapData = window.simplemaps_countrymap_mapdata;

        // Hook for hovering over a state
        window.simplemaps_countrymap.hooks.over_state = function (id) {
          const stateName = mapData.state_specific[id]?.name || 'Unknown State';
          setHoveredState(stateName);
        };

        // Hook for when the mouse leaves a state
        window.simplemaps_countrymap.hooks.out_state = function () {
          setHoveredState(null);
        };

        // Hook for when a state is clicked
        window.simplemaps_countrymap.hooks.click_state = function (id) {
          try {
            const stateName = mapData.state_specific[id]?.name || 'Unknown State';
            if (typeof onStateSelect === 'function') {
              onStateSelect(stateName);
            }
            navigate(`/india?state=${encodeURIComponent(stateName)}`);
          } catch (error) {
            console.error('Error in state click handling:', error);
          }
        };

        // Initialize the map
        if (window.simplemaps_countrymap.init) {
          window.simplemaps_countrymap.init();
          setMapInitialized(true);
        }
      }
    };

    // Load the script and initialize the map
    loadMapScript().then(() => {
      initializeMap(); // Ensure the map is initialized after the script is loaded
    });

    return () => {
      const script = document.querySelector('script[src="countrymap.js"]');
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [navigate, onStateSelect]);

  return (
  
    <div className="relative w-full bg-transparent h-screen max-w-screen-lg mx-auto px-4 py-4">
     <Header />
      <div id="map" className="w-full h-full bg-gray-200">
        {!mapInitialized && (
          <div className="text-center text-gray-500">Loading map...</div>
        )}
      </div>
      {hoveredState && (
        <div className="absolute top-2 left-2 bg-white p-2 border border-gray-300 rounded shadow-md text-gray-800">
          {hoveredState}
        </div>
      )}
    </div>
  );
};

export default MapComponent;
