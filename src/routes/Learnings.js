import React, { useState } from "react";
import ResourceList from "../components/learning/ResourceList";
import { FilterOptions, resourcesList } from "../utils/resources";
import { IoMdSearch } from "react-icons/io";
import { useSelector } from "react-redux";

const Learnings = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const currentTheme = useSelector((state) => state.theme) || "light";

  // Filter resources based on active filter and search query
  const filteredResources = resourcesList.filter((resource) => {
    const matchesFilter =
      activeFilter === "all" || resource.course_type === activeFilter;
    const matchesSearch = resource.course_name
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Reset Filters
  const handleReset = () => {
    setActiveFilter("all");
    setSearchQuery("");
  };

  // Define theme-based styles
  const themeClasses = currentTheme === "dark"
    ? {
        container: "bg-gray-900 text-white",
        input: "bg-gray-800 text-white border-gray-600",
        select: "bg-gray-800 text-white border-gray-600",
        icon: "text-white",
        button: "bg-blue-600 text-white hover:bg-blue-500",
      }
    : {
        container: "bg-white text-gray-800",
        input: "bg-white text-gray-800 border-gray-300",
        select: "bg-white text-gray-800 border-gray-300",
        icon: "text-gray-800",
        button: "bg-blue-500 text-white hover:bg-blue-400",
      };

  return (
    <div className={`flex flex-col justify-center w-full md:px-20 ${themeClasses.container}`}>
      {/* Filter Select Dropdown and Search Input */}
      <div className="flex flex-col md:flex-row justify-between items-center text-md py-4 font-thin my-4 mb-2">
        {/* Search Input */}
        <div className={`flex items-center mb-2 input input-bordered outline-none ${themeClasses.input} w-full max-w-xs`}>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Type here"
            className="border-none outline-none w-full max-w-xs"
          />
          <IoMdSearch className={themeClasses.icon} />
        </div>

        {/* Filter Select Dropdown */}
        <select
          value={activeFilter}
          onChange={(e) => setActiveFilter(e.target.value)}
          className={`select select-bordered mb-2 ${themeClasses.select} outline-none w-full max-w-xs`}
        >
          {FilterOptions.map((option) => (
            <option key={option.navId} value={option.navId}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Resource List */}
      <ResourceList resourcesList={filteredResources} onReset={handleReset} />
    </div>
  );
};

export default Learnings;
