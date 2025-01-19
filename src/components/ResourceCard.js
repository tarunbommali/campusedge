import React from 'react'
import { MdOutlineWorkspacePremium } from "react-icons/md";

import { MdSpatialAudioOff } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";

const ResourceCard = ({resource, index}) => {
  return (
    <li key={index} className='border shadow-md p-4 rounded-tl-3xl rounded-brt6gygt5r
    -3xl bg-white mr-2 my-2 h-[200px] w-[300px]'>
    <h2 className='text-xl font-semibold mb-2  w-[250px] whitespace-nowrap overflow-hidden text-ellipsis'>{resource.course_name || resource.coruse_name}</h2>
    <p className='flex items-center'><GrLanguage className='mr-2'/>{resource.language} </p>
    <p className='flex items-center'><MdSpatialAudioOff className='mr-2'/>{resource.Medium}</p>
    <p className='flex  items-center'><MdOutlineWorkspacePremium className='mr-2'/> <span className='font-bold text-blue-500'>{resource.course_type}</span></p>
    <a 
      href={`https://${resource.link}`} 
      target='_blank' 
      rel='noopener noreferrer' 
      className='text-blue-500 underline block mt-2'
    >
      Visit Course
    </a>
    {resource.img_src && (
      <img 
        src={resource.img_src} 
        alt={resource.course_name || resource.coruse_name} 
        className='w-full h-36 mt-2 object-cover rounded-md'
      />
    )}
  </li>
  )
}

export default ResourceCard