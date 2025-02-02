import { useState } from "react";
import { ROADMAPS_LIST } from "../utils/roadmapConstants";

const RoadmapComponent = () => {
  const [activeRoadmapIndex, setActiveRoadmapIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("technologies");

  const activeRoadmap = activeRoadmapIndex !== null ? ROADMAPS_LIST[activeRoadmapIndex] : null;

  // Home screen to display all job roles
  const renderHomeScreen = () => (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Roadmaps</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ROADMAPS_LIST.map((roadmap, index) => (
          <button
            key={index}
            onClick={() => setActiveRoadmapIndex(index)}
            className="p-4 border rounded-lg bg-white shadow-md hover:bg-blue-500 hover:text-white transition"
          >
            {roadmap.title}
          </button>
        ))}
      </div>
    </div>
  );

  // Roadmap view after selecting a role
  const renderRoadmapView = () => (
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

        <div className="flex justify-center mb-4">
          {["technologies", "resources", "path", "hiring Companies"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 mx-1 font-semibold rounded ${
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

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "technologies":
        return (
          <ul className="list-disc pl-6">
            {activeRoadmap.technologies?.map((tech, idx) => (
              <li key={idx} className="py-2 text-gray-700">{tech}</li>
            ))}
          </ul>
        );
      case "resources":
        return (
          <ul className="list-disc pl-6">
            {activeRoadmap.resources?.map((resource, idx) => (
              <li key={idx} className="py-2 text-gray-700">
                Step {resource.step}:{" "}
                <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                  {resource.url}
                </a>
              </li>
            )) || <p>No resources available</p>}
          </ul>
        );
      case "path":
        return (
          <ul className="list-disc pl-6">
            {activeRoadmap.path?.map((step, idx) => (
              <li key={idx} className="py-2 text-gray-700">{Object.values(step)[0]}</li>
            )) || <p>No path available</p>}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      {activeRoadmapIndex === null ? renderHomeScreen() : renderRoadmapView()}
    </div>
  );
};

export default RoadmapComponent;
