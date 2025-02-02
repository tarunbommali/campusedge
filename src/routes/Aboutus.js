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

const Aboutus = () => {
  const [activeNavId, setActiveNavId] = useState(0); // Default selected tab

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
    <div className="flex flex-col px-1  md:px-16 ">
      <ul className="flex space-x-6 my-2 md:my-4 bg-[#3d3d3d]  md:bg-white text-white md:text-gray-700 overflow-x-scroll md:overflow-hidden">
        {ABOUT_US_NAV_ITEMS.map((item) => (
          <li
            key={item.navId}
            onClick={() => setActiveNavId(item.navId)}
            className={`cursor-pointer text-lg text-white md:text-[#1d232a] font-semibold pl-2 py-2 
              ${
                activeNavId === item.navId
                  ? "underline  decoration-2 decoration-[#3b82f6] underline-offset-4"
                  : "text-gray-700 hover:text-warning md:hover:text-[#4a4a4b]"
              }`}
          >
            {item.navItem}
          </li>
        ))}
      </ul>

      <div className="mt-4">{renderContent()}</div>
    </div>
  );
};

export default Aboutus;
