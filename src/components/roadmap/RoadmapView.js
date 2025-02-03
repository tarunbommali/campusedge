import React from 'react';

export const RoadmapView = ({ setActiveRoadmapIndex, activeRoadmap, setActiveTab, activeTab, renderContent }) => (
  <div className="flex flex-col h-full">
    {/* Breadcrumbs for navigation */}
    <div className="breadcrumbs text-sm p-4 bg-gray-100 flex items-center">
      <ul className="flex gap-2">
        <li>
          <button onClick={() => setActiveRoadmapIndex(null)} className="text-blue-500">RoadMaps</button>
        </li>
        <li className="font-semibold">{activeRoadmap.title}</li>
      </ul>
    </div>

    {/* Title and Tabs */}
    <div className="p-6 flex flex-col flex-grow">
      <h2 className="text-xl font-bold mb-4">{activeRoadmap.title}</h2>

      <div className="flex overflow-x-scroll mb-4">
        {["technologies", "resources", "path", "hiring Companies"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4  mx-1 font-semibold rounded ${
              activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
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

export default RoadmapView;
