import React, { useState, useEffect, useMemo } from "react";
import { Button } from "../../ui/layout";
import { AiFillAudio } from "react-icons/ai";
import { FaRegStopCircle } from "react-icons/fa";
import { ResultView } from "./AIMockResults";
import { useSelector } from "react-redux";

const MockInterviewView = ({ questions = [], onSubmit }) => {
  const currentTheme = useSelector((state) => state.theme) || 'light';

  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill("")
  );
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [timerInterval, setTimerInterval] = useState(null);

  const recognition = useMemo(() => {
    const recog = new (window.SpeechRecognition ||
      window.webkitSpeechRecognition)();
    recog.lang = "en-US";
    recog.interimResults = false;
    recog.maxAlternatives = 1;
    return recog;
  }, []);

  useEffect(() => {
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      const newAnswers = [...userAnswers];
      newAnswers[currentIndex] = transcript;
      setUserAnswers(newAnswers);
      setError("");
    };

    recognition.onerror = () => {
      setError("Please be in a quiet place and try again.");
    };
  }, [currentIndex, userAnswers, recognition]);

  const handleStartRecording = () => {
    setIsRecording(true);
    setError("");
    setRecordingTime(0);
    recognition.start();
    const interval = setInterval(() => {
      setRecordingTime((prevTime) => prevTime + 1);
    }, 1000);
    setTimerInterval(interval);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    recognition.stop();
    clearInterval(timerInterval);
  };

  const handleSubmit = (userAnswers) => {
    console.log("Submitted answers: ", userAnswers);
    setSubmitted(true);
    onSubmit(userAnswers);
  };

  if (submitted) {
    return <ResultView questions={questions} userAnswers={userAnswers} />;
  }

  if (questions.length === 0) {
    return <p>Loading questions...</p>;
  }

  // Define theme-based styles
  const containerClass = currentTheme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black";
  const textAreaClass = currentTheme === "dark" ? "bg-gray-700 text-white" : "bg-white text-black";
  const buttonClass = currentTheme === "dark" ? "bg-green-700 text-white" : "bg-green-500 text-white";
  const errorClass = currentTheme === "dark" ? "text-red-400" : "text-red-500";

  return (
    <div className={`p-6 rounded-lg shadow-md ${containerClass} my-6`}>
      <h2 className="text-xl font-semibold mb-4">
        {questions[currentIndex]?.question || "No question available"}
      </h2>

      <div className="flex items-center space-x-4">
        <label className="swap swap-flip text-4xl">
          <input type="checkbox" checked={isRecording} readOnly />
          <div
            className="swap-on flex items-center space-x-2"
            onClick={handleStopRecording}
          >
            <FaRegStopCircle />
            <span className="text-lg">{recordingTime}s</span>
          </div>
          <div
            className="swap-off flex items-center space-x-2"
            onClick={handleStartRecording}
          >
            <AiFillAudio />
            <span className="text-lg">{recordingTime}s</span>
          </div>
        </label>
      </div>

      {error && <p className={`${errorClass} mt-2`}>{error}</p>}

      <p className="mt-4">
        <strong>Your Answer:</strong>
      </p>
      <textarea
        readOnly
        value={userAnswers[currentIndex]}
        className={`w-full p-2 border rounded mt-2 ${textAreaClass}`}
      />

      <p className="text-sm text-gray-600 mt-2">
        <strong>Correct Answer:</strong>{" "}
        {questions[currentIndex]?.answer || "No answer available"}
      </p>

      <div className="flex flex-col md:flex-row justify-between items-center mt-6">
        <div className="join my-1">
          {questions.map((_, index) => (
            <input
              key={index}
              className="join-item btn btn-square bg-white"
              type="radio"
              name="pagination"
              aria-label={index + 1}
              checked={currentIndex === index}
              onChange={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button className="btn btn-error text-white my-1 mx-2">
            Exit Interview
          </button>
          {currentIndex === questions.length - 1 && (
            <Button
              type="submit"
              onClick={handleSubmit}
              className={`btn ${buttonClass}`}
            >
              Submit Interview
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MockInterviewView;
