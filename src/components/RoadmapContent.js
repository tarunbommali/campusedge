import React from 'react';

export const RoadmapContent = ({ activeRoadmap, activeTab }) => {
  switch (activeTab) {
    case "technologies":
      return (
        <ul className="list-disc pl-6">
          {activeRoadmap.technologies?.map((tech, idx) => (
            <li key={idx} className="py-2 text-[#222425]">{tech}</li>
          ))}
        </ul>
      );
    case "resources":
      return (
        <ul className="list-disc pl-6">
          {activeRoadmap.resources?.map((resource, idx) => (
            <li key={idx} className="py-2 text-[#222425]">
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
            <li key={idx} className="py-2 text-[#222425]">{Object.values(step)[0]}</li>
          )) || <p>No path available</p>}
        </ul>
      );
    default:
      return null;
  }
};

export default RoadmapContent;
