import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import AIMockForm from "../components/AIMockForm";
import MockInterviewView from "../components/MockInterviewView";

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
        <AIMockForm onStart={handleStartInterview} loading={loading} />
      ) : (
        <MockInterviewView questions={questions} />
      )}
    </div>
  );
};





export default InterviewApp;
