import React from "react";
import { CompaniesTypes } from "../utils/constants";

const HeroPage2 = () => {
  return (
    <div className="py-6 bg-[#f8f9fa]">
      <div className="flex flex-row  justify-center flex-wrap bg-gray-100 border-r shadow-inner">
        <>
        {CompaniesTypes.map((tab) => (
          <div className="card bg-[#f3f4f6] shadow-sm text-primary-content w-96 m-2" key={tab.id}>
            <div className="card-body">
              <h2 className="card-title">{tab.label}</h2>
              <p>{tab.content}</p>
            </div>
          </div>
        ))}
        </>
      </div>
    </div>
  );
};

export default HeroPage2;
