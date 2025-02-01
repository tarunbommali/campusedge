import { useState } from "react";
import { ROADMAPS_LIST } from "../utils/roadmapConstants";

const RoadmapComponent = () => {
  const [activeRoadmapIndex, setActiveRoadmapIndex] = useState(0); // To track the active roadmap
  const [activeTab, setActiveTab] = useState("technologies"); // To track the active tab (technologies, resources, path)

  const activeRoadmap = ROADMAPS_LIST[activeRoadmapIndex]; // Get the currently selected roadmap

  const renderContent = () => {
    switch (activeTab) {
      case "technologies":
        return (
          <ul className="list-disc pl-6">
            {activeRoadmap.technologies?.map((tech, idx) => (
              <li key={idx} className="py-2 text-gray-700">
                {tech}
              </li>
            ))}
          </ul>
        );
      case "resources":
        return (
          <ul className="list-disc pl-6">
            {activeRoadmap.resources?.map((resource, idx) => (
              <li key={idx} className="py-2 text-gray-700">
                Step {resource.step}:{" "}
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
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
              <li key={idx} className="py-2 text-gray-700">
                {Object.values(step)[0]}
              </li>
            )) || <p>No path available</p>}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex w-full">
      {/* Sidebar for Roadmaps */}
      <div className="w-1/4 bg-gray-100 border-r">
        {ROADMAPS_LIST.map((roadmap, index) => (
          <button
            key={index}
            onClick={() => setActiveRoadmapIndex(index)}
            className={`w-full text-left px-4 py-3 border-b font-semibold ${
              activeRoadmapIndex === index
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {roadmap.title}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-6">
        <h2 className="text-xl font-bold mb-4">{activeRoadmap.title}</h2>

        {/* Tabs for Technologies, Resources, and Path */}
        <div className="flex mb-4">
          {["technologies", "resources", "path", "hiring Companies"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 mx-1 font-semibold rounded ${
                activeTab === tab
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Dynamic Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default RoadmapComponent;
