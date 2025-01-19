import React from "react";
import { JOB_ROLES_LIST} from '../utils/'

const RoadmapList = () => {
  return (
    <div className="w-[30%] mr-4 px-2 py-1 border border-[#3e7e7f1] rounded-lg">
    <p className="font-semibold text-black my-2">  Understanding the Roles</p>
      <ul className="mt-4">
        {JOB_ROLES_LIST.map((item, index) => (
          <li className="text-[#474d6a] my-2">{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RoadmapList;
