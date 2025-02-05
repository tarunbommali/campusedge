import React, { useState, useEffect } from "react";
import { NAV_ITEMS } from "../../utils/constants";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/themeSlice";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme) || "light";

  useEffect(() => {
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
  }, [currentTheme]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleToggle = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    dispatch(toggleTheme(newTheme));
  };

  return (
    <header className={`px-6 py-4 shadow-md md:px-16 px-2 ${currentTheme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      {/* Large Screen Menu */}
      <div className="hidden md:flex justify-between items-center">
        <a
          href="https://campusedge.vercel.app/"
          className="btn bg-transparent hover:bg-transparent outline-none border-none text-xl font-thin"
        >
          Campus Edge
        </a>
        <ul className="flex space-x-6">
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
        {/* Theme Toggle Button */}
        <button onClick={handleToggle} className="ml-4">
          {currentTheme === "light" ? <CiLight /> : <CiDark />}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-between items-center">
        <a
          href="https://campusedge.vercel.app/"
          className="text-xl font-bold"
        >
          Campus Edge
        </a>
        <div className="flex items-center">
          {/* Mobile Theme Toggle */}
          <button onClick={handleToggle} className="ml-2">
            {currentTheme === "light" ? <CiLight className="text-3xl" /> : <CiDark className="text-3xl" />}
          </button>
          <button onClick={toggleMobileMenu} className="mx-4 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex flex-col items-center justify-center px-4">
          <div className={`p-6 rounded-lg shadow-lg w-4/5 text-center relative ${currentTheme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <ul className="space-y-4 mt-8">
              {NAV_ITEMS.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className="block p-2 text-lg hover:text-blue-600"
                  onClick={toggleMobileMenu}
                >
                  {item.link}
                </NavLink>
              ))}
            </ul>
            <button onClick={toggleMobileMenu} className="absolute top-4 right-4">
              ✖
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;