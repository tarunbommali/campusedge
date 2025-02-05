import React, { useState } from "react";
import {
  ABOUT_US_NAV_ITEMS,
  DEPARTMENT_DETAILS,
  ABOUT_FAQ_LIST,
} from "../utils/constants";
import UniversityDetails from "../components/about/UniversityDetails";
import DepartmentDetails from "../components/about/DepartmentDetails";
import FaqList from "../components/about/FaqList";
import AboutWebsite from "../components/about/AboutWebsite";
import Helpdesk from "../components/about/Helpdesk";
import { useSelector } from "react-redux";

const Aboutus = () => {
  const [activeNavId, setActiveNavId] = useState(0); // Default selected tab
  const currentTheme = useSelector((state) => state.theme) || "light";

  // Theme-based classes
  const themeClasses = currentTheme === "dark"
    ? {
        navItem: "text-white hover:text-[#3b82f6]",
        navItemActive: "underline decoration-2 decoration-[#3b82f6] underline-offset-4",
        bg: "bg-[#111827]",
        content: "text-white bg-[#111827]",
      }
    : {
        navItem: "text-gray-700 hover:text-[#4a4a4b]",
        navItemActive: "underline decoration-2 decoration-[#3b82f6] underline-offset-4",
        bg: "bg-white",
        content: "text-gray-700 bg-white", 
      };

  const renderContent = () => {
    switch (activeNavId) {
      case 0:
        return <UniversityDetails />;
      case 1:
        return <DepartmentDetails DEPARTMENT_DETAILS={DEPARTMENT_DETAILS} />;
      case 2:
        return <Helpdesk />;
      case 3:
        return <FaqList ABOUT_FAQ_LIST={ABOUT_FAQ_LIST} />;
      case 4:
        return <AboutWebsite />;
      default:
        return null;
    }
  };

  return (
    <div className={`relative flex ${themeClasses.bg} min-h-screen`}>
      {/* Content Section */}
      <div className="flex-1 p-4 md:pl-16 overflow-y-auto">
        <div className={`mt-4 pr-40 ${themeClasses.content}`}>
          {renderContent()}
        </div>
      </div>

      {/* Navigation Items Fixed to Right Center */}
      <ul className="fixed right-8 top-1/2 transform -translate-y-1/2 space-y-4 bg-opacity-90 bg-white shadow-lg p-4 rounded-xl z-10">
        {ABOUT_US_NAV_ITEMS.map((item) => (
          <li
            key={item.navId}
            onClick={() => setActiveNavId(item.navId)}
            className={`cursor-pointer text-lg font-semibold py-2 transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-[#3b82f6] 
              ${activeNavId === item.navId
                ? themeClasses.navItemActive
                : themeClasses.navItem
              }`}
          >
            <img src={item.logo_url} className="w-16 h-16 mx-auto" alt="nav icon"/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Aboutus;
