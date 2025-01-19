import { useState } from "react";
import { ROADMAPS_LIST } from "../utils/roadmapConstants";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const RoadmapComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCollapse = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="pb-6 px-2 w-full">
      <h1 className="text-xl font-semibold mb-6">Frontend Developer </h1>
      {ROADMAPS_LIST.map((section, index) => (
        <div key={index} className="border rounded-lg mb-4">
          {/* Entire header is clickable */}
          <button 
            onClick={() => toggleCollapse(index)} 
            className="w-full flex justify-between p-4 bg-blue-500 text-white font-semibold rounded-sm"
          >
            <span>{section.title}</span>
            {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
          </button>

          {activeIndex === index && (
            <ul className="p-4 bg-gray-50">
              {section.topics.map((topic, idx) => (
                <li key={idx} className="py-2 text-gray-700">
                  {topic}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default RoadmapComponent;
