import { useState } from "react";
import { InterviewPrepList, filterInterviewLevel } from "../utils/interviewPrepData";
import { useSelector } from "react-redux";

const InterviewPrep = () => {
  const [activeSelectedDomain, setActiveSelectedDomain] = useState(null); // Track the selected domain
  const [activeTab, setActiveTab] = useState(0); // Default to first domain (0 index)
  const [activeLevel, setLevel] = useState("All");

  const activeDomain = activeSelectedDomain !== null ? InterviewPrepList[activeSelectedDomain] : null;
  const currentTheme = useSelector((state) => state.theme) || "light";

  // Theme-based classes
  const themeClasses = currentTheme === "dark"
    ? {
        container: "bg-gray-900 text-white",
        button: "bg-gray-800 hover:bg-blue-600 text-white",
        buttonActive: "bg-blue-500 text-white",
        breadcrumbs: "bg-[#111827] text-gray-300",
        levelButton: "border-gray-600 hover:bg-gray-700 text-gray-200",
        question: "text-white",
        answer: "text-gray-400",
      }
    : {
        container: "bg-white text-gray-800",
        button: "bg-white border hover:bg-blue-500 text-gray-800",
        buttonActive: "bg-blue-500 text-white",
        breadcrumbs: "bg-[#ffffff] text-gray-800",
        levelButton: "border-gray-300 hover:bg-gray-100 text-gray-800",
        question: "text-gray-800",
        answer: "text-gray-600",
      };

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
    <div className={`p-6 ${themeClasses.container}`}>
      <h1 className="text-2xl font-bold mb-4">Domain</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {InterviewPrepList.map((domain, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveSelectedDomain(index); // Select the domain
              setActiveTab(index); // Set the active tab to the selected domain's index
            }}
            className={`p-4 border rounded-lg shadow-md hover:text-white transition ${themeClasses.button}`}
          >
            {domain.title}
          </button>
        ))}
      </div>
    </div>
  );

  // Domain view after selecting a role
  const renderDomainView = () => (
    <div className={`flex flex-col h-full ${themeClasses.container}`}>
      {/* Breadcrumbs for navigation */}
      <div className={`breadcrumbs text-sm p-4 mt-4 ${themeClasses.breadcrumbs} flex items-center`}>
        <ul className="flex gap-2">
          <li>
            <button
              onClick={() => setActiveSelectedDomain(null)}
              className="text-blue-500"
            >
              Domain
            </button>
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
      <div className="md:w-3/4 px-1 md:px-2">
        <div className="flex justify-between items-center px-2 py-1">
          <div className="flex overflow-x-scroll md:overflow-hidden">
            {filterInterviewLevel.map((level, idx) => (
              <button
                key={idx}
                className={`border px-3 py-2 md:mx-1 rounded-sm ${activeLevel === level ? themeClasses.buttonActive : themeClasses.levelButton}`}
                onClick={() => setLevel(level)}
              >
                {level === "All" ? "All" : `${level}`} (
                {calculateTotalQuestions(level)})
              </button>
            ))}
          </div>
        </div>

        <ul className="list-disc pl-6 my-2">
          {filterQuestions(InterviewPrepList[activeTab].interviewQuestions).map(
            (questionObj, idx) => (
              <li key={idx} className="py-4">
                <p className={`font-semibold ${themeClasses.question}`}>{questionObj.question}</p>
                <p className={`mt-1 ${themeClasses.answer}`}>
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
