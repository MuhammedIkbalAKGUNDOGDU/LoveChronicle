import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const questions = [
  {
    question: "When did we first meet?",
    options: ["At a café", "At the park", "At a party", "Online"],
    correct: 0
  },
  {
    question: "What was our first date?",
    options: ["Movie night", "Dinner date", "Coffee date", "Beach walk"],
    correct: 2
  },
  {
    question: "Our favorite shared hobby is?",
    options: ["Cooking", "Hiking", "Photography", "Dancing"],
    correct: 1
  }
];

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResults(true);
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswer(null);
  };

  return (
    <section id="quiz" className="py-16">
      <Card className="max-w-2xl mx-auto p-8">
        <h2 className="text-4xl font-bold text-center mb-8">Test Your Knowledge</h2>
        
        {!showResults ? (
          <div className="space-y-6">
            <p className="text-xl text-center mb-8">
              Question {currentQuestion + 1} of {questions.length}
            </p>
            
            <h3 className="text-2xl font-medium text-center mb-6">
              {questions[currentQuestion].question}
            </h3>
            
            <div className="grid gap-4">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.div
                  key={option}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    className="w-full text-lg py-6"
                    variant={selectedAnswer === null ? "outline" : 
                            index === questions[currentQuestion].correct ? "default" :
                            index === selectedAnswer ? "destructive" : "outline"}
                    onClick={() => selectedAnswer === null && handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                  >
                    {option}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Quiz Complete!
            </h3>
            <p className="text-xl mb-8">
              You scored {score} out of {questions.length}
            </p>
            <Button onClick={resetQuiz}>Try Again</Button>
          </div>
        )}
      </Card>
    </section>
  );
}
