import React from "react";
import { CompaniesTabs } from "../utils/constants";

const HeroPage2 = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap bg-gray-100 border-r shadow-inner">
        {CompaniesTabs.map((tab) => (
          <div
            className="flex flex-col w-48 h-48 m-2 p-2 bg-white shadow-sm rounded-sm "
            key={tab.id}
          >
            <h1>{tab.label}</h1>
            <p>{tab.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroPage2;
