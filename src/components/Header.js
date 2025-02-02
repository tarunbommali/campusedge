import React, { useState } from "react";
import { NAV_ITEMS } from "../utils/constants";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="px-6 py-4 bg-white shadow-md md:px-6 px-2">
      {/* Large Screen Menu */}
      <div className="hidden md:flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">Campus Edge</div>
        <ul className="flex space-x-6 text-gray-700">
          {NAV_ITEMS.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={`p-2 hover:text-blue-600 ${
                location.pathname === item.path ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {item.link}
            </NavLink>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">Campus Edge</div>
        <button onClick={toggleMobileMenu} className="p-2 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex flex-col items-center justify-center px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-4/5 text-center relative">
            <ul className="space-y-4 mt-8">
              {NAV_ITEMS.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className="block p-2 text-lg text-gray-800 hover:text-blue-600"
                  onClick={toggleMobileMenu}
                >
                  {item.link}
                </NavLink>
              ))}
            </ul>
            <button
              onClick={toggleMobileMenu}
              className="absolute top-4 right-4 text-gray-700"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
