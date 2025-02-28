import React from "react";
import { useSelector } from "react-redux";

export const SubHeader = ({ ABOUT_US_NAV_ITEMS, activeNavId, themeClasses, setActiveNavId }) => {
  const currentTheme = useSelector((state) => state.theme) || "light";
  const isDarkMode = currentTheme === "dark";

  return (
    ABOUT_US_NAV_ITEMS.map((item) => (
      <li
        key={item.navId}
        onClick={() => setActiveNavId(item.navId)}
        className={`flex items-center cursor-pointer px-4 text-sm font-semibold py-2 transition-all 
          duration-300 ease-in-out transform hover:scale-95 
          
          ${activeNavId === item.navId ? themeClasses.navItemActive : themeClasses.navItem}
          
          ${activeNavId === item.navId ? "bg-secondary text-white" : ""}
          
          ${isDarkMode ? "hover:bg-gray-700  text-gray-300" : "hover:bg-gray-100  text-gray-700"}
        `}
      >
        <p 
          className={`no-underline capitalize transition-all duration-300 
            ${isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"}
          `}
        >
          {item.navItem.toUpperCase()}
        </p>
      </li>
    ))
  );
};
