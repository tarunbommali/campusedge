import React from "react";
import AIQuestionsResult from "./AIQuestionsResult";

export const ResultView = ({ questions, userAnswers }) => {
  // Function to calculate the percentage for each criterion
  const evaluateAnswer = (userAnswer, correctAnswer) => {
    const accuracy = calculateAccuracy(userAnswer, correctAnswer);
    const terminology = evaluateTerminology(userAnswer, correctAnswer);
    const sentenceFraming = evaluateFraming(userAnswer);
    const confidence = evaluateConfidence(userAnswer);

    return {
      accuracy,
      terminology,
      sentenceFraming,
      confidence,
    };
  };

  // Dummy functions for evaluation criteria (replace with actual logic)
  const calculateAccuracy = (user, correct) => {
    return user.trim().toLowerCase() === correct.trim().toLowerCase() ? 100 : 60;
  };

  const evaluateTerminology = (user, correct) => {
    return user.toLowerCase().includes(correct.split(' ')[0].toLowerCase()) ? 80 : 50;
  };

  const evaluateFraming = (user) => {
    return user.length > 20 ? 90 : 60;
  };

  const evaluateConfidence = (user) => {
    return user.toLowerCase().includes('i think') ? 50 : 90;
  };

  // Function to generate feedback based on scores
  const generateFeedback = ({ accuracy, terminology, sentenceFraming, confidence }) => {
    let feedback = "";
    if (accuracy < 80) feedback += "Your answer needs more factual accuracy. ";
    if (terminology < 70) feedback += "Try to use more precise technical terms. ";
    if (sentenceFraming < 70) feedback += "Improve sentence structure for better clarity. ";
    if (confidence < 70) feedback += "Be more assertive in your responses. ";
    return feedback || "Great job! Your answer is well-structured and accurate.";
  };

  return (
    <div className="p-6 rounded-lg shadow-md bg-white my-6">
      <div className="flex justify-between items-center bg-gray-50 mb-4 p-4 rounded">
        <h2 className="text-xl font-semibold">Mock Interview Results</h2>
        <div className="flex items-center">
          <button className="mx-2 bg-gray-100 border border-gray-300 px-4 py-2 rounded hover:bg-black hover:text-white">
            Take New Mock
          </button>
          <button className="mx-2 bg-gray-100 border border-gray-300 px-4 py-2 rounded hover:bg-black hover:text-white">
            Next Questions
          </button>
        </div>
      </div>
      <AIQuestionsResult 
        questions={questions} 
        evaluateAnswer={evaluateAnswer} 
        generateFeedback={generateFeedback} 
        userAnswers={userAnswers} 
      />
    </div>
  );
};
