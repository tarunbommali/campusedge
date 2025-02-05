import React from "react";
import { CompaniesTypes } from "../../utils/constants";
import { useSelector } from "react-redux";

const HeroPage2 = () => {
  const currentTheme = useSelector((state) => state.theme) || 'light';

  // Theme-based class names
  const containerClass = currentTheme === 'dark' ? 'bg-gray-900 text-white' : 'bg-[#f8f9fa] text-black';
  const cardClass = currentTheme === 'dark' ? 'bg-gray-800 text-white' : 'bg-[#f3f4f6] text-black';
  const cardTitleClass = currentTheme === 'dark' ? 'text-white' : 'text-black';
  const cardBodyClass = currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-700';

  return (
    <div className={`py-6 ${containerClass}`}>
      <div className="flex flex-row justify-center flex-wrap bg-gray-100 border-r shadow-inner">
        {CompaniesTypes.map((tab) => (
          <div className={`card shadow-sm w-96 m-2 ${cardClass}`} key={tab.id}>
            <div className="card-body">
              <h2 className={`card-title ${cardTitleClass}`}>{tab.label}</h2>
              <p className={cardBodyClass}>{tab.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroPage2;
