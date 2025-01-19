// components/JobFilters.js
import React, { useState } from 'react';
import { JOB_FILTERS } from '../utils/jobsData';

const JobFilters = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    department: [],
    salary: [],
    workMode: [],
    experience: [],
    location: []
  });

  const handleToggleFilter = (category, value) => {
    setSelectedFilters((prevState) => {
      const selectedCategory = prevState[category];
      const isSelected = selectedCategory.includes(value);
      const updatedCategory = isSelected
        ? selectedCategory.filter((item) => item !== value) // Unselect
        : [...selectedCategory, value]; // Select

      const updatedFilters = {
        ...prevState,
        [category]: updatedCategory
      };
      
      onFilterChange(updatedFilters);
      return updatedFilters;
    });
  };

  return (
    <div className="filter-container">
      <h2>Filter Jobs</h2>
      {Object.keys(JOB_FILTERS).map((filterCategory) => (
        <div key={filterCategory} className='flex flex-col w-48 shadow-sm py-2'>
          <h3 className='font-semibold text-[#3f4347] py-2'>{filterCategory.toUpperCase()}</h3>
          {JOB_FILTERS[filterCategory].map((filterOption) => (
            <div className='flex items-center'><label key={filterOption}>
              <input
                type="checkbox"
                className='mx-1'
                checked={selectedFilters[filterCategory].includes(filterOption)}
                onChange={() => handleToggleFilter(filterCategory, filterOption)}
              />
              {filterOption}
            </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default JobFilters;
