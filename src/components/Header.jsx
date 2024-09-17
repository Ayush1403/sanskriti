import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { logo } from "../assets/images/images";
import { Link } from "react-router-dom";

const Header = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLoginMode, setLoginMode] = useState(true);

  const openLogin = () => {
    setLoginMode(true);
    setModalVisible(true);
  };

  const openSignup = () => {
    setLoginMode(false);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false); // Hide the modal
  };

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white shadow-sm relative z-100">
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-black">
          <GiHamburgerMenu />
        </button>
      </div>

      <div className="flex-grow flex justify-center items-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>
      </div>

      <div className="flex items-center space-x-6">
        <button className="text-gray-600 hover:text-black transition">
          About
        </button>
        <button className="text-gray-600 hover:text-black transition">
          FAQs
        </button>
        <button className="text-gray-600 hover:text-black transition">
          <FaShoppingCart />
        </button>
      </div>
    </header>
  );
};

export default Header;
