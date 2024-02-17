import React from "react";

interface AnswerOption {
  answerText: string;
  isCorrect: boolean;
  explanation?: string;
}

interface Question {
  questionText: string;
  answerOptions: AnswerOption[];
}

interface ExplanationProps {
  questions: Question[];
  currentQuestion: number; // Assuming currentQuestion is an index
}

const Explanation: React.FC<ExplanationProps> = ({ questions, currentQuestion }) => {
  const currentAnswerOption = questions[currentQuestion].answerOptions.find(option => option.isCorrect);

  if (!currentAnswerOption) {
    // Handle the case where the correct answer option is not found.
    return null;
  }

  return (
    <div id='explanation'>
      <h2>{currentAnswerOption.answerText}</h2>
      <h3 style={{fontWeight:'300'}}><i>{currentAnswerOption.explanation}</i></h3>
    </div>
  );
};

export default Explanation;
