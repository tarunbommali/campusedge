import React ,{useState} from 'react'
import { Textarea,Button } from '../ui/layout';

const MockInterviewView =  ({ questions }) => {
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
          <div className="p-6 rounded-lg shadow-md bg-white my-6">
            <h2 className="text-xl font-semibold mb-4">{questions[currentIndex].question}</h2>
            <Textarea placeholder="Your Answer" value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} />
            <p className="text-sm text-gray-600"><strong>Correct Answer:</strong> {questions[currentIndex].answer}</p>
            <Button onClick={handleNext} disabled={currentIndex === questions.length - 1} className="mt-4">
              Next Question
            </Button>
          </div>
        );
      };
  

export default MockInterviewView