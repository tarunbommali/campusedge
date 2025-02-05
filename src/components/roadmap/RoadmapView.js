import React from 'react';
import { useSelector } from 'react-redux';

export const RoadmapView = ({
  setActiveRoadmapIndex,
  activeRoadmap,
  setActiveTab,
  activeTab,
  renderContent
}) => {
  const currentTheme = useSelector((state) => state.theme) || "light";

  // Dynamic theme-based classes
  const themeClasses = currentTheme === "dark"
    ? { bg: "bg-[#111827]", text: "text-white", tabActive: "bg-blue-500 text-white", tabInactive: "bg-gray-600 text-gray-300" }
    : { bg: "bg-gray-100", text: "text-gray-700", tabActive: "bg-blue-500 text-white", tabInactive: "bg-gray-200 text-gray-700" };

  return (
    <div className={`flex flex-col min-h-full ${themeClasses.bg}`}>
      {/* Breadcrumbs for navigation */}
      <div className={`breadcrumbs bg-black w-full text-sm p-4 mt-2 md:mt-4 flex items-center ${themeClasses.bg}`}>
        <ul className="flex gap-2">
          <li>
            <button onClick={() => setActiveRoadmapIndex(null)} className="text-blue-500">
              RoadMaps
            </button>
          </li>
          <li className={`font-semibold ${themeClasses.text}`}>{activeRoadmap.title}</li>
        </ul>
      </div>

      {/* Title and Tabs */}
      <div className={`p-6 flex flex-col flex-grow ${themeClasses.bg}`}>
        <h2 className={`text-xl font-bold mb-4 ${themeClasses.text}`}>{activeRoadmap.title}</h2>

        <div className="flex overflow-x-scroll mb-4 md:text-md md:pr-2">
          {["technologies", "resources", "path", "hiring Companies"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 mx-1 font-semibold rounded ${activeTab === tab ? themeClasses.tabActive : themeClasses.tabInactive}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content at the bottom for small screens */}
        <div className="flex-grow flex flex-col justify-end">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default RoadmapView;
