import React from "react";
import JobCard from "./JobCard";
import { JOBS_LIST } from "../utils/jobsData";

const JobList = () => {
  console.log(JobList);
  return (
    <ul>
      {JOBS_LIST.map((item, index) => (
        <JobCard key={index} jobDetails={item} />
      ))}
    </ul>
  );
};

export default JobList;
