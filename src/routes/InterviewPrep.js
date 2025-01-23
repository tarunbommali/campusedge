import { useState } from "react";
import { InterviewPrepList } from "../utils/interviewPrepData";

export const InterviewPrep = () => {
  const [activeTab, setActiveTab] = useState(0); // Track the active technology

  return (
    <div className="flex w-full">
      {/* Sidebar for Filter Options */}
      <div className="w-1/4 bg-gray-100 border-r">
        {InterviewPrepList.map((section, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`w-full text-left px-4 py-3 border-b font-semibold ${
              activeTab === index ? "bg-blue-500 text-white" : "bg-white text-gray-700"
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="w-3/4 p-6">
        <h2 className="text-xl font-bold mb-4">{InterviewPrepList[activeTab].title}</h2>
        <ul className="list-disc pl-6">
          {InterviewPrepList[activeTab].interviewQuestions.map((questionObj, idx) => (
            <li key={idx} className="py-4">
              <p className="font-semibold text-gray-800">{questionObj.question}</p>
              <p className="text-gray-600 mt-1">{questionObj.answer || "Answer not provided."}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
