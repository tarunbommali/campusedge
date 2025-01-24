import React from "react";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { MdSpatialAudioOff } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";

const ResourceCard = ({ resource, index }) => {
  return (
    <li
      key={index}
      className="relative border p-4 rounded-3xl bg-white mr-2 my-2 h-[200px] w-[300px] overflow-hidden hover:scale-95"
    >
      <div className="relative z-10">
        <h2 className="text-xl font-semibold mb-2 w-[250px] whitespace-nowrap overflow-hidden text-ellipsis">
          {resource.course_name || resource.coruse_name}
        </h2>
        <div className="flex justify-between">
        <div className="flex flex-col">
        <p className="flex items-center">
          <GrLanguage className="mr-2" />
          {resource.language}
        </p>
        <p className="flex items-center">
          <MdSpatialAudioOff className="mr-2" />
          {resource.Medium}
        </p>
        <p className="flex items-center">
          <MdOutlineWorkspacePremium className="mr-2" />
          <span className="font-bold text-blue-500">{resource.course_type}</span>
        </p>
        </div>
        <img src={resource.img_src} alt="logo" className="w-30 h-20 ounded-sm"/>
        </div>
        <a
          href={`https://${resource.link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline block mt-2"
        >
          Visit Course
        </a>
      </div>
    </li>
  );
};

export default ResourceCard;
