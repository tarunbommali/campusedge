import React, { useState } from "react";

import {
  ABOUT_JNTUGV,
  VISION_JNTUGV,
  MISSION_JNTUGV,
  ABOUT_US_NAV_ITEMS,
  DEPARTMENT_DETAILS,
  WEBSITE_DETAILS,
} from "../utils/constants";

const renderUniversityDetails = () => (
  <>
    <div className="px-6 py-4">
      <h2 className="text-2xl font-semibold mb-4">About</h2>
      <ul className="list-disc pl-6 space-y-2">
        {ABOUT_JNTUGV.map((item, index) => (
          <li key={index} className="text-lg text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="px-6 py-4">
      <h2 className="text-2xl font-semibold mb-4">Vision</h2>
      <ul className="list-disc pl-6 space-y-2">
        {VISION_JNTUGV.map((item, index) => (
          <li key={index} className="text-lg text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="px-6 py-4">
      <h2 className="text-2xl font-semibold mb-4">Mission</h2>
      <ul className="list-disc pl-6 space-y-2">
        {MISSION_JNTUGV.map((item, index) => (
          <li key={index} className="text-lg text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  </>
);

const renderDepartmentDetails = () => (
  <ul className="px-6 py-4 list-disc space-y-2">
    {DEPARTMENT_DETAILS.map((item, index) => (
      <li key={index} className="text-lg text-gray-700">
        {item}
      </li>
    ))}
  </ul>
);

const renderWebsiteDetails = () => (
  <ul className="px-6 py-4 list-disc space-y-2">
    {WEBSITE_DETAILS.map((item, index) => (
      <li key={index} className="text-lg text-gray-700">
        {item}
      </li>
    ))}
  </ul>
);

const renderAboutWebsite = () => (
  <div className="flex items-center">
    <h1 className="text-lg">
      Empowering university students with roadmaps, resources, and connections.
      Build your career with Campus Edge 🚀.
    </h1>
  </div>
);

const Aboutus = () => {
  const [activeNavId, setActiveNavId] = useState(0); // Default selected tab

  const renderContent = () => {
    switch (activeNavId) {
      case 0:
        return renderUniversityDetails();
      case 1:
        return renderDepartmentDetails();
      case 2:
        return renderWebsiteDetails();

      case 4:
        return renderAboutWebsite();
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col">
      <ul className="flex space-x-4 border-b-2 pb-2">
        {ABOUT_US_NAV_ITEMS.map((item) => (
          <li
            key={item.navId}
            onClick={() => setActiveNavId(item.navId)}
            className={`cursor-pointer text-lg font-semibold px-4 py-2 
              ${
                activeNavId === item.navId
                  ? "underline  decoration-2 decoration-[#3b82f6] underline-offset-4"
                  : "text-gray-700 hover:text-[#4a4a4b]"
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
