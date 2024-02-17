import React from "react";

interface AnswerOption {
  answerText: string;
  isCorrect: boolean;
  explanation?: string;
}

interface hpFrågor {
  questionText: string;
  answerOptions: AnswerOption[];
}

const hpFrågor: hpFrågor[] = [
  {
    questionText: 'Ubiquitous',
    answerOptions: [
      { answerText: 'A. Extreme behaviour', isCorrect: false },
      { answerText: 'B. Recovery', isCorrect: false },
      { answerText: 'C. Lasting', isCorrect: false },
      {
        answerText: 'D. Found everywhere',
        isCorrect: true,
        explanation: 'Defenition'
      },
    ],
  }
];

export default hpFrågor;
