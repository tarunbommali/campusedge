import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import AIMockForm from "../components/ai-interview/AIMockForm";
import MockInterviewView from "../components/ai-interview/MockInterviewView";
import { useSelector } from "react-redux";

const InterviewApp = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [apiKey, setApiKey] = useState(localStorage.getItem("GEMINI_API_KEY") || "");
  const [tempApiKey, setTempApiKey] = useState("");

  const currentTheme = useSelector((state) => state.theme) || "light";

  // Theme-based styling
  const themeClasses = currentTheme === "dark"
    ? {
        container: "bg-gray-900 text-white",
        formContainer: "bg-gray-800 text-gray-300",
        errorContainer: "text-red-400",
        button: "bg-blue-500 hover:bg-blue-700 text-white",
      }
    : {
        container: "bg-white text-gray-800",
        formContainer: "bg-gray-100 text-gray-700",
        errorContainer: "text-red-600",
        button: "bg-blue-500 hover:bg-blue-700 text-white",
      };

  const isValidApiKey = (key) => {
    const apiKeyPattern = /^AIza[0-9A-Za-z_-]{35}$/;
    return apiKeyPattern.test(key);
  };

  const saveApiKey = (key) => {
    if (!isValidApiKey(key)) {
      setApiError("Invalid API key format. Please enter a valid Gemini API key.");
      return;
    }
    setApiError("");
    localStorage.setItem("GEMINI_API_KEY", key);
    setApiKey(key);
  };

  const removeApiKey = () => {
    localStorage.removeItem("GEMINI_API_KEY");
    setApiKey("");
  };

  const handleStartInterview = async ({ jobRole, company, description, techStack }) => {
    const activeApiKey = tempApiKey || apiKey;

    if (!activeApiKey) {
      setApiError("API key is missing. Please enter your Gemini API key.");
      return;
    }

    if (!isValidApiKey(activeApiKey)) {
      setApiError("API key format is invalid. Please enter a valid Gemini API key.");
      return;
    }

    setLoading(true);
    setApiError("");

    const genAI = new GoogleGenerativeAI(activeApiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
    const prompt = `Generate 5 technical interview questions and answers for a ${jobRole} position at ${company || 'a company'}. Focus on ${techStack}. Format as JSON.`;

    try {
      const chat = model.startChat();
      const aiResponse = await chat.sendMessage(prompt);
      const responseText = await aiResponse.response.text();
      const jsonArrayMatch = responseText.match(/\[.*\]/s);
      const cleanedResponse = jsonArrayMatch ? JSON.parse(jsonArrayMatch[0]) : [];
      setQuestions(cleanedResponse);
    } catch (error) {
      if (error.message.includes("API key not valid")) {
        setApiError("API key not valid. Please enter a valid API key.");
      } else {
        setApiError("An error occurred while generating questions. Please try again.");
      }
    }

    setLoading(false);
  };

  const handleUseCampusEdgeAPI = (key) => {
    setTempApiKey(key);
  };

  const handleSubmit = (userAnswers) => {
    console.log("Submitted answers: ", userAnswers);
  };

  return (
    <div className={`md:px-16  min-h-full ${themeClasses.container}`}>
      {apiError && (
        <div className={`mt-4 ${themeClasses.errorContainer}`}>
          <p>{apiError}</p>
        </div>
      )}

      {questions.length === 0 ? (
        <div className={`p-4 rounded-md ${themeClasses.formContainer}`}>
          <AIMockForm 
            onStart={handleStartInterview} 
            loading={loading} 
            apiError={apiError} 
            onSaveApiKey={saveApiKey} 
            onRemoveApiKey={removeApiKey} 
            apiKey={apiKey} 
            onUseCampusEdgeAPI={handleUseCampusEdgeAPI}
            buttonClass={themeClasses.button}
          />
        </div>
      ) : (
        <div className={`p-4 rounded-md ${themeClasses.formContainer}`}>
          <MockInterviewView
            questions={questions}
            length={questions.length}
            onSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  );
};

export default InterviewApp;
