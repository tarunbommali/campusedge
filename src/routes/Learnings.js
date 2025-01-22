import React, { useState } from 'react';
import ResourceList from '../components/ResourceList';
import { FilterOptions, resourcesList } from '../utils/resources';
import { IoMdSearch } from 'react-icons/io';
import { CiFilter } from 'react-icons/ci';

const Learnings = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter resources based on active filter and search query
  const filteredResources = resourcesList.filter((resource) => {
    const matchesFilter = activeFilter === 'all' || resource.course_type === activeFilter;
    const matchesSearch = resource.course_name
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Reset Filters
  const handleReset = () => {
    setActiveFilter('all');
    setSearchQuery('');
  };

  return (
    <div className="w-full">
      {/* Filter Select Dropdown and Search Input */}
      <div className="flex justify-between items-center text-md py-4 font-thin my-4 mb-2">
        {/* Search Input */}
        <div className="flex items-center text-md font-thin border-2 border-[#e5e7eb] bg-[#ffffff] px-1 rounded-sm">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-none p-2 outline-none"
            placeholder="Search"
          />
          <IoMdSearch className="bg-white" />
        </div>

        {/* Filter Select Dropdown */}
        <div className="flex items-center justify-center p-2 border-2 border-[#e5e7eb] bg-[#ffffff]">
          <CiFilter />
          <select
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value)}
            className="border-none pr-2 rounded-md outline-none"
          >
            {FilterOptions.map((option) => (
              <option key={option.navId} value={option.navId}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Resource List */}
      <ResourceList resourcesList={filteredResources} onReset={handleReset} />
    </div>
  );
};

export default Learnings;
