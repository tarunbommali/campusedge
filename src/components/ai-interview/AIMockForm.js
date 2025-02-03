import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { listVariants, itemVariants } from "../../utils/utilsMotions";

const AIMockForm = ({
  onStart,
  loading,
  apiError,
  onSaveApiKey,
  onRemoveApiKey,
  apiKey,
}) => {
  const [jobRole, setJobRole] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState("");
  const [newApiKey, setNewApiKey] = useState("");
  const [tempApiKey, setTempApiKey] = useState("");

  const CampusEdgeAPI = process.env.REACT_APP_GEMINI_API_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!jobRole || !description || !techStack) return;
    onStart({ jobRole, company, description, techStack });
  };

  const handleApiSave = () => {
    if (newApiKey) {
      onSaveApiKey(newApiKey);
      setNewApiKey("");
    }
  };

  const handleUseCampusEdge = () => {
    setTempApiKey(CampusEdgeAPI);
  };

  return (
    <div className="p-6 rounded-lg shadow-md bg-white my-6">
      <h2 className="text-xl font-semibold mb-4">Enter Job Details</h2>
      <form onSubmit={handleSubmit}>
        <label className="input input-bordered bg-white my-1 flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Job Role"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
          />
        </label>

        <label className="input input-bordered bg-white my-1 flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Company (Optional)"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>

        <label className="input input-bordered bg-white my-1 flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Tech Stack (e.g., React, Node.js)"
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
          />
        </label>

        <label className="textarea textarea-bordered p-1 bg-white my-2 flex items-center gap-2">
          <textarea
            className="grow bg-white my-1 outline-none"
            placeholder="Job Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        {!apiKey && !tempApiKey && (
          <div className="mb-4">
            <label className="input input-bordered bg-white flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Enter Your Gemini API Key"
                value={newApiKey}
                onChange={(e) => setNewApiKey(e.target.value)}
              />
            </label>
            {apiError && (
              <div className="text-red-500 mb-4">API Error: {apiError}</div>
            )}
            <div>
              <button
                type="button"
                onClick={handleApiSave}
                className="btn btn-primary mt-2 mr-2"
              >
                Save API Key
              </button>
              <button
                type="button"
                className="btn btn-primary mt-2"
                onClick={handleUseCampusEdge}
              >
                Use CampusEdge API
              </button>
            </div>
          </div>
        )}

        {(apiKey || tempApiKey) && (
          <div className="my-2">
            <div className="text-sm text-gray-600">
              Using API Key: {`${(apiKey || tempApiKey).slice(0, 3)}****${(apiKey || tempApiKey).slice(-3)}`}
            </div>
            {apiKey ? (
              <button
                type="button"
                onClick={onRemoveApiKey}
                className="btn btn-warning text-white my-2"
              >
                Remove API Key
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setTempApiKey("")}
                className="btn btn-warning text-white my-2"
              >
                Remove Temporary API Key
              </button>
            )}
          </div>
        )}

        <button type="submit" className="btn btn-neutral text-white my-6">
          {loading ? (
            <motion.div variants={listVariants} className="flex items-center">
              <span className="loading loading-dots loading-lg"></span>
              <motion.p variants={itemVariants} className="ml-2">
                AI Magic Happening!
              </motion.p>
            </motion.div>
          ) : (
            "Start Mock Interview"
          )}
        </button>
      </form>
    </div>
  );
};

export default AIMockForm;