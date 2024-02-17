import React, {Dispatch} from "react";

interface ResetQuizProps {
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  setShowScore: React.Dispatch<React.SetStateAction<boolean>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setShowAnswer: React.Dispatch<React.SetStateAction<boolean>>;
  setIsCorrect: React.Dispatch<React.SetStateAction<boolean>>;
  setIsNotCorrect: React.Dispatch<React.SetStateAction<boolean>>;
  handleStartTimer: () => void;
}

const ResetQuiz: React.FC<ResetQuizProps> = ({
  setCurrentQuestion,
  setShowScore,
  setScore,
  setShowAnswer,
  setIsCorrect,
  setIsNotCorrect,
  handleStartTimer
}) => {
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setShowAnswer(false);
    setIsCorrect(false);
    setIsNotCorrect(false);
    handleStartTimer();
  };

  return (
    <button style={{width:'100%'}} className='btn-secondary' onClick={resetQuiz}>
      Play again
    </button>
  );
};

export default ResetQuiz;
