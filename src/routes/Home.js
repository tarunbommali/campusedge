import React from "react";
import HeroPage1 from "../components/home/HeroPage1";
import HeroPage2 from "../components/home/HeroPage2";
import HeroPage3 from "../components/home/HeroPage3";
import { useSelector } from "react-redux";


const Home = () => {
  const currentTheme = useSelector((state) => state.theme) || "light";

  // Define theme-based classes
  const themeClasses = currentTheme === "dark"
    ? {
        container: "bg-gray-900 text-white",
        heroPage: "bg-gray-800 text-gray-300",  // Dark theme styles for hero pages
      }
    : {
        container: "bg-white text-gray-800",
        heroPage: "bg-gray-100 text-gray-700", // Light theme styles for hero pages
      };

  return (
    <div className={`relative overflow-x-hidden ${themeClasses.container}`}>
      {/* Hero Pages with dynamic theme classes */}
      <div className={themeClasses.heroPage}>
        <HeroPage1 />
      </div>
      <div className={themeClasses.heroPage}>
        <HeroPage3 />
      </div>
      <div className={`${themeClasses.heroPage} `}>
        <HeroPage2 />
      </div>
      <div className={themeClasses.heroPage}>
        
      </div>
    </div>
  );
};

export default Home;
