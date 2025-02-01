import { useState } from "react";
import { Button,Input,Textarea } from "../ui/layout";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.REACT_APP_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const InterviewApp = () => {
  const [questions, setQuestions] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleStartInterview = async ({ jobRole, company, description, techStack }) => {
    setLoading(true);
    const prompt = `Generate 5 technical interview questions and answers for a ${jobRole} position at ${company}. Focus on ${techStack}. Format as JSON.`;

    try {
      const chat = model.startChat();
      const aiResponse = await chat.sendMessage(prompt);
      const responseText = await aiResponse.response.text();
      
      const jsonArrayMatch = responseText.match(/\[.*\]/s);
      const cleanedResponse = jsonArrayMatch ? JSON.parse(jsonArrayMatch[0]) : [];
      setQuestions(cleanedResponse);
    } catch (error) {
      console.error("Error generating questions:", error);
    }
    setLoading(false);
  };

  return (
    <div>
      {!questions ? (
        <JobForm onStart={handleStartInterview} loading={loading} />
      ) : (
        <MockInterview questions={questions} />
      )}
    </div>
  );
};

const JobForm = ({ onStart, loading }) => {
  const [jobRole, setJobRole] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState("");

  const handleSubmit = () => {
    if (!jobRole || !description || !techStack) return;
    onStart({ jobRole, company, description, techStack });
  };

  return (
    <div className="p-6 rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Enter Job Details</h2>
      <Input placeholder="Job Role" value={jobRole} onChange={(e) => setJobRole(e.target.value)} />
      <Input placeholder="Company (Optional)" value={company} onChange={(e) => setCompany(e.target.value)} />
      <Textarea placeholder="Job Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <Input placeholder="Tech Stack (e.g., React, Node.js)" value={techStack} onChange={(e) => setTechStack(e.target.value)} />
      <Button onClick={handleSubmit} disabled={loading} className="mt-4">
        {loading ? "Generating..." : "Start Mock Interview"}
      </Button>
    </div>
  );
};

const MockInterview = ({ questions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserAnswer("");
      setFeedback("");
    }
  };

  return (
    <div className="p-6 rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">{questions[currentIndex].question}</h2>
      <Textarea placeholder="Your Answer" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} />
      <p className="text-sm text-gray-600"><strong>Correct Answer:</strong> {questions[currentIndex].answer}</p>
      <Button onClick={handleNext} disabled={currentIndex === questions.length - 1} className="mt-4">
        Next Question
      </Button>
    </div>
  );
};

export default InterviewApp;
