// src/components/StatePageWrapper.jsx
import React from "react";
import { useParams } from "react-router-dom";
import StatePage from "../components/statePage"; // Import your StatePage component

const StatePageWrapper = () => {
  const { stateId } = useParams(); // Get the state ID from the route

  // You can fetch additional data here if needed

  return <StatePage id={stateId} />; // Pass the ID to StatePage component
};

export default StatePageWrapper;
