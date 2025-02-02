import React, { useState } from "react";

const AIMockForm = ({ onStart, loading }) => {
  const [jobRole, setJobRole] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();  
    if (!jobRole || !description || !techStack) return;
    onStart({ jobRole, company, description, techStack });
  };

  return (
    <div className="p-6 rounded-lg shadow-md bg-white my-6">
      <h2 className="text-xl font-semibold mb-4">Enter Job Details</h2>
      <form onSubmit={handleSubmit}>
        <label className="input input-bordered  bg-white my-1 flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Job Role"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
          />
        </label>

        <label className="input input-bordered bg-white  my-1 flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Company (Optional)"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>

        <label className="input input-bordered bg-white my-1  flex items-center gap-2">
         
          <input
            type="text"
            className="grow"
            placeholder="Tech Stack (e.g., React, Node.js)"
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
          />
        </label>

        <label className="textarea textarea-bordered p-1 bg-white  my-2 flex items-center gap-2">
          <textarea
            className="grow bg-white my-1 outline-none"
            placeholder="Job Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <button type="button" onClick={handleSubmit} className="btn btn-neutral text-white my-6">
          {loading ? (
            <span className="loading loading-dots loading-lg"></span>
          ) : (
            "Start Mock Interview"
          )}
        </button>
      </form>
    </div>
  );
};

export default AIMockForm;
