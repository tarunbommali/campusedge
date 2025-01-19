import React, { useState } from "react";
import { CompaniesTabs } from "../utils/constants";

const CompaniesTabView = () => {
  const [activeTab, setActiveTab] = useState(CompaniesTabs[0].id);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const activeContent = CompaniesTabs.find((tab) => tab.id === activeTab);

  return (
    <div className="p-4 shadow-[#c5c6c6] shadow-xl">
      

      <div className="flex">
        {/* Tab Navigation */}
        <div className="flex flex-col border-gray-300 shadow-lg  p-2 m-2">
          {CompaniesTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`px-2 my-2 ${
                activeTab === tab.id
                  ? "text-blue-600 font-bold "
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">{activeContent.label}</h2>
          <p className="text-gray-700 whitespace-pre-line">
            {activeContent.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompaniesTabView;
