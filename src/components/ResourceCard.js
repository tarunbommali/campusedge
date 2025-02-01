import React from "react";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { MdSpatialAudioOff } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import * as motion from "motion/react-client"

const ResourceCard = ({ resource, index }) => {
  return (
    <motion.div
      className="relative border p-4 rounded-3xl bg-white mr-2 my-2 h-[200px] w-[300px] overflow-hidden hover:scale-95"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <li key={index} className="list-none">
        <div className="relative z-10">
          <h2 className="text-xl font-semibold mb-2 w-[250px] whitespace-nowrap overflow-hidden text-ellipsis">
            {resource.course_name}
          </h2>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="flex items-center">
                <GrLanguage className="mr-2" />
                {resource.language}
              </p>
              <p className="flex items-center">
                <MdSpatialAudioOff className="mr-2" />
                {resource.medium}
              </p>
              <p className="flex items-center">
                <MdOutlineWorkspacePremium className="mr-2" />
                <span className="font-bold text-blue-500">{resource.course_type}</span>
              </p>
            </div>
            {resource.logo && <div>{resource.logo}</div>}
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
    </motion.div>
  );
};

export default ResourceCard;
