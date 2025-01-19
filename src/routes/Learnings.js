import React, { useState } from 'react';
import ResourceList from '../components/ResourceList';
import { resourcesList } from '../utils/resources';
import { IoMdSearch } from "react-icons/io";
import { NAVITEM_TABS } from '../utils/resources';

const Learnings = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter resources based on active tab and search query
  const filteredResources = resourcesList.filter((resource) => {
    const matchesTab = activeTab === 'all' || resource.course_type === activeTab;
    const matchesSearch = resource.course_name
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className='w-full'>
      {/* Tabs for filtering */}
      <div className='flex justify-between items-center text-md py-4 font-thin my-4 mb-2'>
        <ul className='flex'>
          {NAVITEM_TABS.map((item) => (
            <li 
              key={item.navId}
              onClick={() => setActiveTab(item.navId)} 
              className={`cursor-pointer text-lg font-semibold px-4 py-2 
                ${activeTab === item.navId 
                  ? 'underline decoration-2 decoration-[#3b82f6] underline-offset-4' 
                  : 'text-gray-700 hover:text-[#4a4a4b]'}`
              }
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Search Input */}
        <div className='flex items-center text-md font-thin border-2 border-[#e5e7eb]'>
          <input 
            type='search' 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
            className='border-none px-2 outline-none' 
            placeholder='Search' 
          />
          <IoMdSearch className='bg-white'/>
        </div>
      </div>

      {/* Resource List */}
      <ResourceList resourcesList={filteredResources} />
    </div>
  );
};

export default Learnings;
