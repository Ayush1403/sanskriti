import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import CategoriesCarouselStates from "./components/CategoriesCarouselStates";
import HeroSection from "./components/HeroSection";
import CategoriesDropdown from "./components/CategoriesDropdown";
import Jewelry from "./components/jwellery";
import Apparels from "./components/Apparels";
import StatePageWrapper from "./components/StatePageWrapper";
import IndiaMap from "./components/IndiaMap";
import MapComponent from "./components/MapComponet";
import DetailPage from "./components/DetailPage";
import { useState } from "react";
function App() {

  const [selectedState, setSelectedState] = useState(null);

  const handleStateSelect = (stateName) => {
    setSelectedState(stateName);
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HeroSection />
              <CategoriesCarouselStates />
              <CategoriesDropdown />
            </Layout>
          }
        />
        <Route
          path="/jewelry"
          element={
            <Layout>
              <Jewelry />
            </Layout>
          }
        />
        <Route
          path="/apparels"
          element={
            <Layout>
              <Apparels />
            </Layout>
          }
        />
        <Route
          path="/states/:stateId"
          element={
            <Layout>
              <StatePageWrapper />
            </Layout>
          }
        />
         <Route
              path="/india"
              element={<IndiaMap selectedState={selectedState} />}
            />
            <Route
              path="/map"
              element={<MapComponent onStateSelect={handleStateSelect} />}
            />
                <Route path="/monument/:name" element={<DetailPage />} />
          
      </Routes>
    </Router>
  );
}

export default App;
