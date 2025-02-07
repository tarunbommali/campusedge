import React, { useState } from "react";
import { useSelector } from "react-redux";

const AIMockForm = ({
  onStart,
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

  const currentTheme = useSelector((state) => state.theme) || "light";

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

  // Dynamic class names for light/dark theme
  const formClass =
    currentTheme === "dark" ? "bg-[#111827] text-white" : "bg-white text-black";
  const inputClass =
    currentTheme === "dark" ? "bg-gray-700 text-white" : "bg-white text-black";
  const buttonClass =
    currentTheme === "dark" ? "btn-neutral-dark" : "btn-neutral-light"; // Example class, modify as per your theme setup

  return (
    <div className={`p-6 rounded-lg shadow-md  min-h-full ${formClass}`}>
      <h2 className="text-xl font-semibold mb-4">Enter Job Details</h2>
      <form onSubmit={handleSubmit}>
        <label
          className={`input input-bordered ${inputClass} my-1 flex items-center gap-2`}
        >
          <input
            type="text"
            className="grow"
            placeholder="Job Role"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
          />
        </label>

        <label
          className={`input input-bordered ${inputClass} my-1 flex items-center gap-2`}
        >
          <input
            type="text"
            className="grow"
            placeholder="Company (Optional)"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </label>

        <label
          className={`input input-bordered ${inputClass} my-1 flex items-center gap-2`}
        >
          <input
            type="text"
            className="grow"
            placeholder="Tech Stack (e.g., React, Node.js)"
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
          />
        </label>

        <label
          className={`textarea textarea-bordered ${inputClass} p-1 my-2 flex items-center gap-2`}
        >
          <textarea
            className={`grow outline-none ${
              currentTheme === "dark" ? "bg-[#374151]" : "bg-[#FFFFFF]"
            }`}
            placeholder="Job Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        {!apiKey && !tempApiKey && (
          <div className="mb-4">
            <label
              className={`input input-bordered ${inputClass} flex items-center gap-2`}
            >
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
                className={`btn ${buttonClass} mt-2 mr-2`}
              >
                Save API Key
              </button>
              <button
                type="button"
                className={`btn ${buttonClass} mt-2`}
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
              Using API Key:{" "}
              {`${(apiKey || tempApiKey).slice(0, 3)}****${(
                apiKey || tempApiKey
              ).slice(-3)}`}
            </div>
            {apiKey ? (
              <button
                type="button"
                onClick={onRemoveApiKey}
                className={`btn btn-warning text-white my-2`}
              >
                Remove API Key
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setTempApiKey("")}
                className={`btn btn-warning text-white my-2`}
              >
                Remove Temporary API Key
              </button>
            )}
          </div>
        )}

        <button type="submit" className={`btn btn-neutral text-white my-6`}>
            Start Mock Interview
        </button>
      </form>
    </div>
  );
};

export default AIMockForm;
