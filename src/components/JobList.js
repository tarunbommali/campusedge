import React from "react";
import JobCard from "./JobCard";


const JobList = ({JOBS_LIST}) => {
  
  return (
    <ul>
      {JOBS_LIST.map((item, index) => (
        <JobCard key={index} jobDetails={item} />
      ))}
    </ul>
  );
};

export default JobList;
