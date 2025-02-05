import React from "react";
import { useSelector } from "react-redux";

const AIQuestionsResult = ({ questions, evaluateAnswer, generateFeedback, userAnswers }) => {
  const currentTheme = useSelector((state) => state.theme) || 'light';

  // Define theme-based styles
  const containerClass = currentTheme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black";
  const questionCardClass = currentTheme === "dark" ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-300";
  const textClass = currentTheme === "dark" ? "text-white" : "text-black";
  const feedbackClass = currentTheme === "dark" ? "text-blue-300" : "text-blue-600";

  return (
    <div className={`p-6 ${containerClass}`}>
      {questions.map((q, index) => {
        const evaluation = evaluateAnswer(userAnswers[index], q.answer);
        const feedback = generateFeedback(evaluation);

        return (
          <div
            key={index}
            className={`mb-4 p-4 border rounded ${questionCardClass}`}
          >
            <p className={`font-semibold ${textClass}`}>
              Q{index + 1}: {q.question}
            </p>
            <p className={textClass}><strong>Your Answer:</strong> {userAnswers[index]}</p>
            <p className={textClass}><strong>Correct Answer:</strong> {q.answer}</p>

            <div className="mt-2">
              <p className={textClass}><strong>Accuracy:</strong> {evaluation.accuracy}%</p>
              <p className={textClass}><strong>Terminology:</strong> {evaluation.terminology}%</p>
              <p className={textClass}><strong>Sentence Framing:</strong> {evaluation.sentenceFraming}%</p>
              <p className={textClass}><strong>Confidence:</strong> {evaluation.confidence}%</p>
            </div>

            <p className={`mt-2 ${feedbackClass}`}><strong>Feedback:</strong> {feedback}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AIQuestionsResult;
