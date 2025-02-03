
// AIQuestionsResult.js
import React from "react";

const AIQuestionsResult = ({ questions, evaluateAnswer, generateFeedback, userAnswers }) => {
  return (
    <div>
      {questions.map((q, index) => {
        const evaluation = evaluateAnswer(userAnswers[index], q.answer);
        const feedback = generateFeedback(evaluation);

        return (
          <div key={index} className="mb-4 p-4 border rounded bg-gray-50">
            <p className="font-semibold">Q{index + 1}: {q.question}</p>
            <p><strong>Your Answer:</strong> {userAnswers[index]}</p>
            <p><strong>Correct Answer:</strong> {q.answer}</p>

            <div className="mt-2">
              <p><strong>Accuracy:</strong> {evaluation.accuracy}%</p>
              <p><strong>Terminology:</strong> {evaluation.terminology}%</p>
              <p><strong>Sentence Framing:</strong> {evaluation.sentenceFraming}%</p>
              <p><strong>Confidence:</strong> {evaluation.confidence}%</p>
            </div>

            <p className="text-blue-600 mt-2"><strong>Feedback:</strong> {feedback}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AIQuestionsResult;
