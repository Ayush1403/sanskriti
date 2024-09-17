import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useNavigate, useLocation } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import heritageData from "./heritageData.json"; // Assuming heritageData.json contains the heritage data
import 'leaflet-routing-machine';

const customIcon = new L.Icon({
  iconUrl: "https://static.vecteezy.com/system/resources/previews/017/178/337/original/location-map-marker-icon-symbol-on-transparent-background-free-png.png",
  iconSize: [30, 30],
});

const IndiaMap = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState("Rajasthan"); // Default to Rajasthan or any other state
  const [map, setMap] = useState(null);
  const [selectedSites, setSelectedSites] = useState([]);
  const [showRouteSection, setShowRouteSection] = useState(false);

  useEffect(() => {
    // Extract state from URL query parameters
    const query = new URLSearchParams(location.search);
    const stateFromQuery = query.get("state");
    if (stateFromQuery) {
      setSelectedState(stateFromQuery);
    }
  }, [location.search]);

  const handleSiteClick = (site) => {
    console.log(site); // Debugging: Check if the correct site data is being logged
    navigate(`/monument/${site.name}`, { state: { site } }); // Navigate to DetailPage and pass site data
  };

  const handleSiteSelect = (siteName, type) => {
    const site = heritageData[selectedState]?.find((s) => s.name === siteName);
    if (type === 'start') {
      setSelectedSites((prev) => [site, prev[1]]);
    } else {
      setSelectedSites((prev) => [prev[0], site]);
    }
  };

  const CenterMapOnState = ({ state }) => {
    const map = useMap();

    useEffect(() => {
      if (map && heritageData[state]) {
        const bounds = L.latLngBounds(
          heritageData[state].map((site) => [site.coordinates.latitude, site.coordinates.longitude])
        );
        map.fitBounds(bounds);
      }
    }, [map, state]);

    return null;
  };

  useEffect(() => {
    if (map && selectedSites[0] && selectedSites[1]) {
      const start = [selectedSites[0].coordinates.latitude, selectedSites[0].coordinates.longitude];
      const end = [selectedSites[1].coordinates.latitude, selectedSites[1].coordinates.longitude];

      L.Routing.control({
        waypoints: [
          L.latLng(start),
          L.latLng(end)
        ],
        routeWhileDragging: true,
        lineOptions: { styles: [{ color: '#6FA1EC', weight: 5 }] },
        createMarker: () => null // Disable markers on route
      }).addTo(map);
    }
  }, [map, selectedSites]);

  return (
    <div className="flex h-screen">
      <div className="w-1/4 p-4 bg-gray-100 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Heritage Sites</h2>

        <label className="block mb-4">
          Select State:
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full mt-1 p-2 bg-white border rounded"
          >
            {Object.keys(heritageData).map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </label>

        <div className="mb-8">
          {heritageData[selectedState]?.map((site) => (
            <div
              key={site.name}
              className="mb-4 p-4 bg-white rounded-lg shadow cursor-pointer"
              onClick={() => handleSiteClick(site)} // Click to navigate
            >
              <img
                src={site.image_url}
                alt={site.name}
                className="w-full h-32 object-cover rounded-md mb-2"
              />
              <h3 className="text-lg font-semibold">{site.name}</h3>
              <p className="text-sm text-gray-600">{site.detailed_description}</p>
            </div>
          ))}
        </div>

        <div>
          <button
            onClick={() => setShowRouteSection(!showRouteSection)}
            className="w-full py-2 bg-blue-500 text-white rounded"
          >
            {showRouteSection ? 'Hide Route Options' : 'Show Route Options'}
          </button>
          {showRouteSection && (
            <>
              <label className="block mb-4 mt-4">
                Select Start Site:
                <select
                  onChange={(e) => handleSiteSelect(e.target.value, 'start')}
                  className="w-full mt-1 p-2 bg-white border rounded"
                >
                  <option value="">Select a site</option>
                  {heritageData[selectedState]?.map((site) => (
                    <option key={site.name} value={site.name}>
                      {site.name}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block mb-4">
                Select End Site:
                <select
                  onChange={(e) => handleSiteSelect(e.target.value, 'end')}
                  className="w-full mt-1 p-2 bg-white border rounded"
                >
                  <option value="">Select a site</option>
                  {heritageData[selectedState]?.map((site) => (
                    <option key={site.name} value={site.name}>
                      {site.name}
                    </option>
                  ))}
                </select>
              </label>
            </>
          )}
        </div>
      </div>

      <div className="w-3/4">
        <MapContainer
          center={[20.5937, 78.9629]} // Center of India
          zoom={5} // Default zoom level
          minZoom={5}
          maxZoom={15}
          style={{ height: "100vh", width: "100%" }}
          whenCreated={setMap}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          />
          {heritageData[selectedState]?.map((site) => (
            <Marker
              key={site.name}
              position={[site.coordinates.latitude, site.coordinates.longitude]}
              icon={customIcon}
            >
              <Popup>
                <div
                  className="cursor-pointer"
                  onClick={() => handleSiteClick(site)} // Navigate on popup click
                >
                  <h3 className="text-lg font-semibold">{site.name}</h3>
                  <p className="text-sm text-gray-600">{site.detailed_description}</p>
                </div>
              </Popup>
            </Marker>
          ))}
          <CenterMapOnState state={selectedState} />
        </MapContainer>
      </div>
    </div>
  );
};

export default IndiaMap;
