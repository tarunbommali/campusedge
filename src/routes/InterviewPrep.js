import { useState } from "react";
import { InterviewPrepList, filterInterviewLevel } from "../utils/interviewPrepData";

const InterviewPrep = () => {
  const [activeSelectedDomain, setActiveSelectedDomain] = useState(null); // Track the selected domain
  const [activeTab, setActiveTab] = useState(0); // Default to first domain (0 index)
  const [activeLevel, setLevel] = useState("All");

  const activeDomain = activeSelectedDomain !== null ? InterviewPrepList[activeSelectedDomain] : null;
  
  const calculateTotalQuestions = (level) => {
    const allQuestions = InterviewPrepList[activeTab].interviewQuestions;
    if (level === "All") return allQuestions.length;
    return allQuestions.filter((q) => q.level === level).length;
  };

  const filterQuestions = (questions) => {
    if (activeLevel === "All") return questions; 
    return questions.filter((q) => q.level === activeLevel);
  };

  // Home screen to display all job roles
  const renderHomeScreen = () => (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Domain</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {InterviewPrepList.map((domain, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveSelectedDomain(index); // Select the domain
              setActiveTab(index); // Set the active tab to the selected domain's index
            }}
            className="p-4 border rounded-lg bg-white shadow-md hover:bg-blue-500 hover:text-white transition"
          >
            {domain.title}
          </button>
        ))}
      </div>
    </div>
  );

  // Domain view after selecting a role
  const renderDomainView = () => (
    <div className="flex flex-col h-full">
      {/* Breadcrumbs for navigation */}
      <div className="breadcrumbs text-sm p-4 bg-gray-100 flex items-center">
        <ul className="flex gap-2">
          <li>
            <button onClick={() => setActiveSelectedDomain(null)} className="text-blue-500">Domain</button>
          </li>
          <li className="font-semibold">{activeDomain.title}</li>
        </ul>
      </div>

      {/* Title and Tabs */}
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-bold mb-4">{activeDomain.title}</h2>

        {/* Content at the bottom for small screens */}
        <div className="flex-grow flex flex-col justify-end">
          {renderContent()}
        </div>
      </div>
    </div>
  );

  // Render content based on active tab
  const renderContent = () => {
    return (
      <div className="md:w-3/4 px-2">
        <div className="flex justify-between items-center px-2 py-1">
          <div className="flex">
            {filterInterviewLevel.map((level, idx) => (
              <button
                key={idx}
                className={`border px-3 py-2 md:mx-1 rounded-sm ${
                  activeLevel === level ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => setLevel(level)}
              >
                {level === "All" ? "All" : `${level} level`} (
                {calculateTotalQuestions(level)})
              </button>
            ))}
          </div>
        </div>

        <ul className="list-disc pl-6 my-2">
          {filterQuestions(InterviewPrepList[activeTab].interviewQuestions).map(
            (questionObj, idx) => (
              <li key={idx} className="py-4">
                <p className="font-semibold text-[#515151]">{questionObj.question}</p>
                <p className="text-[#355453] mt-1">
                  {questionObj.answer || "Answer not provided."}
                </p>
              </li>
            )
          )}
        </ul>
      </div>
    );
  };

  return (
    <div className="w-full md:px-16">
      {/* If active domain is selected, render the domain view, otherwise render the home screen */}
      {activeSelectedDomain === null ? renderHomeScreen() : renderDomainView()}
    </div>
  );
};

export default InterviewPrep;
