import React from 'react'
import { MdOutlineWorkOutline,MdOutlineCurrencyRupee } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";



const JobCard = ({ jobDetails }) => {
  const { jobRole, company, experience, annualPackage, skillsRequired, description, postedDate, } = jobDetails;
  console.log(jobDetails);
  return (
    <div className="border p-4 mb-4 rounded-md shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">{jobRole}</h3>
          <p className="text-md text-gray-700">{company.name}</p>
          <p className="text-sm text-gray-500">Rating: {company.rating} ({company.reviews} reviews)</p>
        </div>
        <img src={company.logo} alt={company.name} className="w-12 h-12 mr-4" />
        
      </div>

      <ul className="mt-3">
        <li className='flex items-center'><MdOutlineWorkOutline className='mx-2'/>{experience}</li>
        <li className='flex items-center'><MdOutlineCurrencyRupee className='mx-2'/> {annualPackage}</li>
        <li className='flex items-center'><div><TiDocumentText className='mx-2'/></div><p>{description} </p></li>
      </ul>

      <p className="mt-3">{skillsRequired.join(', ')}</p>

      <div className="mt-4 flex justify-between items-center">
        <p className="text-sm text-gray-500">Posted on: {postedDate}</p>
      </div>
    </div>
  )
}

export default JobCard
