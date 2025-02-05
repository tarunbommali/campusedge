import React from 'react';
import { useSelector } from 'react-redux';

export const RoadmapContent = ({ activeRoadmap, activeTab }) => {
  const currentTheme = useSelector((state) => state.theme) || "light";

  // Define theme-based classes
  const themeClasses = currentTheme === "dark"
    ? { bg: "bg-gray-800", text: "text-white", link: "text-blue-400", listItem: "text-gray-300" }
    : { bg: "bg-white", text: "text-gray-800", link: "text-blue-500", listItem: "text-gray-700" };

  switch (activeTab) {
    case "technologies":
      return (
        <ul className={`list-disc pl-6 ${themeClasses.bg}`}>
          {activeRoadmap.technologies?.map((tech, idx) => (
            <li key={idx} className={`py-2 ${themeClasses.listItem}`}>{tech}</li>
          ))}
        </ul>
      );
    case "resources":
      return (
        <ul className={`list-disc pl-6 ${themeClasses.bg}`}>
          {activeRoadmap.resources?.map((resource, idx) => (
            <li key={idx} className={`py-2 ${themeClasses.listItem}`}>
              Step {resource.step}:{" "}
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className={themeClasses.link}
              >
                {resource.url}
              </a>
            </li>
          )) || <p className={`${themeClasses.text}`}>No resources available</p>}
        </ul>
      );
    case "path":
      return (
        <ul className={`list-disc pl-6 ${themeClasses.bg}`}>
          {activeRoadmap.path?.map((step, idx) => (
            <li key={idx} className={`py-2 ${themeClasses.listItem}`}>{Object.values(step)[0]}</li>
          )) || <p className={`${themeClasses.text}`}>No path available</p>}
        </ul>
      );
    default:
      return null;
  }
};

export default RoadmapContent;
