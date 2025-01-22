import { useState } from "react";
import { ROADMAPS_LIST } from "../utils/roadmapConstants";

const RoadmapComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex w-full">
      {/* Sidebar for Vertical Tabs */}
      <div className="w-1/4 bg-gray-100 border-r">
        {ROADMAPS_LIST.map((section, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`w-full text-left px-4 py-3 border-b font-semibold ${
              activeTab === index ? "bg-blue-500 text-white" : "bg-white text-gray-700"
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Content for Selected Tab */}
      <div className="w-3/4 p-6">
        <h2 className="text-xl font-bold mb-4">{ROADMAPS_LIST[activeTab].title}</h2>
        <ul className="list-disc pl-6">
          {ROADMAPS_LIST[activeTab].technologies.map((technology, idx) => (
            <li key={idx} className="py-2 text-gray-700">
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RoadmapComponent;
