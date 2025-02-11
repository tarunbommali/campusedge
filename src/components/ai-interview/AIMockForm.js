import React, { useState } from "react";
import { useSelector } from "react-redux";
import { jobTitleAndDescriptionList } from "../../utils/jobTitleAndDescriptionList";

const AIMockForm = ({ onStart, onSaveApiKey, onRemoveApiKey, apiError, apiKey }) => {
  const [jobRole, setJobRole] = useState("");
  const [description, setDescription] = useState("");
  const [newApiKey, setNewApiKey] = useState("");
  const [tempApiKey, setTempApiKey] = useState("");

  const currentTheme = useSelector((state) => state.theme) || "light";
  const CampusEdgeAPI = process.env.REACT_APP_GEMINI_API_KEY;

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!jobRole.trim() || !description.trim()) {
      alert("Please enter a job role and description.");
      return;
    }
    onStart({ jobRole, description });
  };

  // Save API key
  const handleApiSave = () => {
    if (!newApiKey.trim()) {
      alert("Please enter a valid API key.");
      return;
    }
    onSaveApiKey(newApiKey);
    setNewApiKey("");
  };

  // Use default Campus Edge API key
  const handleUseCampusEdge = () => {
    setTempApiKey(CampusEdgeAPI);
  };

  const formClass = currentTheme === "dark" ? "bg-black text-white" : "bg-white text-black";
  const inputClass = currentTheme === "dark" ? "bg-gray-700 text-white" : "bg-white text-black";
  const buttonClass = currentTheme === "dark" ? "btn-secondary text-white btn" : "btn-neutral-light";

  return (
    <div className="flex flex-col md:flex-row w-full justify-between">
      <div>
        <h1 className="text-white text-xl w-full md:w-1/2 md:text-5xl">
          <span className="shadow-sm font-semibold">Overcome Interview Jitters</span> with Our Cutting Edge <span className="font-bold">AI Interview Assistant!</span>
        </h1>
        <p className="text-lg md:text-2xl mt-2 font-extralight">
          Elevate your preparation and gain a competitive edge with the power of AI.
        </p>

        <div className="flex flex-col mt-10">
          {(apiKey || tempApiKey) && (
            <div className="my-2">
              <div className="text-sm text-gray-600">
                Using API Key: {`${(apiKey || tempApiKey).slice(0, 3)}****${(apiKey || tempApiKey).slice(-3)}`}
              </div>
              {apiKey ? (
                <button type="button" onClick={onRemoveApiKey} className="btn btn-warning text-white my-2">
                  Remove API Key
                </button>
              ) : (
                <button type="button" onClick={() => setTempApiKey("")} className="btn btn-warning text-white my-2">
                  Remove Temporary API Key
                </button>
              )}
            </div>
          )}
          {!apiKey && !tempApiKey && (
            <div className="mb-4">
              <label className={`input input-bordered w-full md:w-1/2 ${inputClass} flex items-center gap-2`}>
                <input
                  type="text"
                  className="grow"
                  placeholder="Enter Your Gemini API Key"
                  value={newApiKey}
                  onChange={(e) => setNewApiKey(e.target.value)}
                />
              </label>
              {apiError && <div className="text-red-500 mb-4">API Error: {apiError}</div>}
              <div>
                <button type="button" onClick={handleApiSave} className={`btn ${buttonClass} mt-2 mr-2`}>
                  Save API Key
                </button>
                <button type="button" className={`btn ${buttonClass} mt-2`} onClick={handleUseCampusEdge}>
                  Use CampusEdge API
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={`p-6 rounded-lg shadow-md min-h-full w-full md:w-1/2 ${formClass}`}>
        <h2 className="text-xl font-semibold mb-4">Enter Job Details</h2>
        <form onSubmit={handleSubmit}>
          <label className={`input input-bordered ${inputClass} my-1 flex items-center gap-2`}>
            <input
              type="text"
              className="grow"
              placeholder="Job Role"
              value={jobRole}
              onChange={(e) => setJobRole(e.target.value)}
            />
          </label>

          <label className={`textarea textarea-bordered ${inputClass} p-1 my-2 flex items-center gap-2`}>
            <textarea
              className={`grow outline-none ${currentTheme === "dark" ? "bg-[#374151]" : "bg-[#FFFFFF]"}`}
              placeholder="Job Description"
              value={description}
              rows={8}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          <button type="submit" className="btn btn-neutral text-white my-6">Start Mock Interview</button>
        </form>

        <h1 className="font-thin text-white my-2">Quick Start</h1>
        <ul className="flex flex-wrap text-black">
          {jobTitleAndDescriptionList.map((item, id) => (
            <li key={id} className="mr-2 my-2">
              <button
                onClick={() => {
                  setDescription(item.description);
                  setJobRole(item.title);
                }}
                className="btn btn-primary text-white"
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AIMockForm;
