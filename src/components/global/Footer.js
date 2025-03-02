import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const currentTheme = useSelector((state) => state.theme) || "light";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", currentTheme === "dark");
  }, [currentTheme]);

  // Theme-based styles
  const themeClasses =
    currentTheme === "dark"
      ? "bg-gray-900 text-gray-300 border-gray-700"
      : "bg-gray-100 text-gray-800 border-gray-300";

  return (
    <div
      className={`flex flex-col md:flex-row justify-between items-center text-center py-4 border-t px-4 transition-all ${themeClasses}`}
    >
      <span className="text-sm md:text-base font-medium">
        Designed & Developed by{" "}
        <span className="font-semibold text-blue-500 dark:text-blue-400">
          Department of IT, JNTU-GV 2025
        </span>
        .
      </span>
    </div>
  );
};

export default Footer;
