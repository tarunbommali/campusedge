import React from 'react';
import ResourceCard from './ResourceCard';
import { useSelector } from 'react-redux';

const ResourceList = ({ resourcesList, onReset }) => {
  const currentTheme = useSelector((state) => state.theme) || "light";

  // Define theme-based classes
  const themeClasses = currentTheme === "dark"
    ? { bg: "bg-[#111827]", text: "text-white", button: "text-red-400 hover:text-red-500" }
    : { bg: "bg-white", text: "text-gray-900", button: "text-red-500 hover:text-red-600" };

  return (
    <>
      {resourcesList.length ? (
        <ul className={`flex flex-wrap justify-center md:justify-between ${themeClasses.bg}`}>
          {resourcesList.map((resource, index) => (
            <ResourceCard key={index} resource={resource} />
          ))}
        </ul>
      ) : (
        <h1 className={`text-xl ${themeClasses.text}`}>
          No Course Added Yet,
          <button onClick={onReset} className={`ml-2 ${themeClasses.button}`}>
            Reset Now.
          </button>
        </h1>
      )}
    </>
  );
};

export default ResourceList;
