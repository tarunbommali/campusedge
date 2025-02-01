import React, { useState } from "react";
import { CompaniesTabs } from "../utils/constants";

const CompaniesTabView = () => {
  const [activeTab, setActiveTab] = useState(CompaniesTabs[0].id);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const activeContent = CompaniesTabs.find((tab) => tab.id === activeTab);

  return (
    <div className="flex w-full p-6 shadow-lg bg-white rounded-lg">
      {/* Tab Navigation */}
     

      {/* Tab Content */}
      <div className="w-3/4 p-6">
        <h2 className="text-xl font-bold mb-4">{activeContent.label}</h2>
        <p className="text-gray-700 whitespace-pre-line">{activeContent.content}</p>
      </div>
    </div>
  );
};

export default CompaniesTabView;
