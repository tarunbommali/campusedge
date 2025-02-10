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
import {SubHeader} from "../components/global/SubHeader";

const Aboutus = () => {
  const [activeNavId, setActiveNavId] = useState(0); // Default selected tab
  const currentTheme = useSelector((state) => state.theme) || "light";

  // Theme-based classes
  const themeClasses =
    currentTheme === "dark"
      ? {
          navItem: "text-white hover:text-[#3b82f6]",
          navItemActive: "text-[#3b82f6]",
          bg: "bg-[#111827]",
          content: "text-white bg-[#111827]",
        }
      : {
          navItem: "text-gray-700 hover:text-[#4a4a4b]",
          navItemActive: "text-[#3b82f6]",
          bg: "bg-white",
          content: "text-black bg-white",
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
    <div className={`relative flex flex-col ${themeClasses.bg} min-h-screen md:px-20`}>
      {/* SubHeader Section */}
      <div className="navbar bg-base-100 w-full overflow-x-scroll">
        <SubHeader
          ABOUT_US_NAV_ITEMS={ABOUT_US_NAV_ITEMS}
          activeNavId={activeNavId}
          themeClasses={themeClasses}
          setActiveNavId={setActiveNavId}
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 p-4 md:pl-16 overflow-y-auto">
        <div className={`mt-4 ${themeClasses.content}`}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
