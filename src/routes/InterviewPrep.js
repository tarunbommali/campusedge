import { useState } from "react";
import { InterviewPrepList } from "../utils/interviewPrepData";
import { filterInterviewLevel } from "../utils/interviewPrepData";

export const InterviewPrep = () => {
  const [activeTab, setActiveTab] = useState(0); 
  const [activeLevel, setLevel] = useState("All");

  const calculateTotalQuestions = (level) => {
    const allQuestions = InterviewPrepList[activeTab].interviewQuestions;
    if (level === "All") return allQuestions.length;
    return allQuestions.filter((q) => q.level === level).length;
  };

  const filterQuestions = (questions) => {
    if (activeLevel === "All") return questions; 
    return questions.filter((q) => q.level === activeLevel);
  };

  return (
    <div className="flex w-full">
      {/* Sidebar for Filter Options */}
      <div className="w-1/4 bg-gray-100 border-r h-[100vh] overflow-y-scroll sticky top-0 z-10">
        {InterviewPrepList.map((section, index) => (
          <div className="flex justify-between" key={index}>
            <button
              onClick={() => setActiveTab(index)}
              className={`w-full text-left px-4 py-3 border-b font-semibold ${
                activeTab === index
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              {section.title}
            </button>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="w-3/4 px-2">
        <div className="flex justify-between items-center  px-2 py-1">
          <h2 className="text-xl font-bold text-[#282828] ">
            {InterviewPrepList[activeTab].title}
          </h2>

          {/* Dynamic Filter Buttons */}
          <div className="flex">
            {filterInterviewLevel.map((level, idx) => (
              <button
                key={idx}
                className={`border px-3 py-2 mx-1 rounded-sm ${
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

        {/* Questions List */}
        <ul className="list-disc pl-6 my-2">
          {filterQuestions(
            InterviewPrepList[activeTab].interviewQuestions
          ).map((questionObj, idx) => (
            <li key={idx} className="py-4">
              <p className="font-semibold text-[#515151]">
                {questionObj.question}
              </p>
              <p className="text-[#355453] mt-1">
                {questionObj.answer || "Answer not provided."}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
