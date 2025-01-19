import React, { useState, useEffect } from "react";
import JobFilters from "../components/JobFilters";
import JobList from "../components/JobList";
import { JOBS_LIST } from "../utils/jobsData";

const Jobs = () => {
  const [initialJobsList, setInitialJobsList] = useState(JOBS_LIST);
  const [sortOrder, setSortOrder] = useState("recent"); // Default sort by recent
  const [activeJobs, setActiveJobs] = useState([]);

  // Function to filter active jobs based on `lastDateToApply`
  const filterActiveJobs = () => {
    const currentDate = new Date();
    const filteredJobs = JOBS_LIST.filter((job) => {
      const lastDate = new Date(job.lastDateToApply);
      return lastDate >= currentDate;
    });
    setActiveJobs(filteredJobs);
  };

  // Function to sort jobs by `postedDate`
  const sortJobsByDate = (order) => {
    const sortedJobs = [...activeJobs].sort((a, b) => {
      const dateA = new Date(a.postedDate);
      const dateB = new Date(b.postedDate);

      return order === "recent" ? dateB - dateA : dateA - dateB;
    });
    setInitialJobsList(sortedJobs);
  };

  // Handle sorting when the sortOrder changes
  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);
    sortJobsByDate(order);
  };

  // Filter active jobs on component mount or when `JOBS_LIST` changes
  useEffect(() => {
    filterActiveJobs();
  }, []);

  // Sort jobs whenever the active jobs or sortOrder changes
  useEffect(() => {
    sortJobsByDate(sortOrder);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeJobs, sortOrder]);

  return (
    <div className="flex ">
      
      <JobFilters />
       <div>
      <div className="flex justify-end items-center mb-2 mr-2">
        <label htmlFor="sortOrder" className="mr-2">
          Sort by Date:
        </label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={handleSortChange}
          className="border border-gray-300 p-1 rounded"
        >
          <option value="recent">Most Recent</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
      <div className="flex my-2 w-[60vw]">
        <JobList JOBS_LIST={initialJobsList} />
      </div>
      </div> 
    </div>
  );
};

export default Jobs;
