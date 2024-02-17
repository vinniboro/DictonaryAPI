import React from "react"




interface AnswerOption {
    answerText: string;
    isCorrect: boolean;
    explanation?: string;
  }

  interface Question {
    questionText: string;
    answerOptions: AnswerOption[];
  }

  interface ShowQuizSummaryProps {
      questions: Question[];
  }

export const ShowQuizSummary: React.FC<ShowQuizSummaryProps> = ({questions}) => {

return (
<div className="contain-start ">
{
  questions.map((quest) => (
    <div className="row-contain">
    <h3>{quest.questionText}</h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 20" fill="none">
      <path d="M1.99902 19.3223C2.47363 19.3223 2.78125 19.0762 3.52832 18.3467L6.9209 14.9893C6.95605 14.9453 7.03516 14.9453 7.07031 14.9893L10.4717 18.3467C11.2188 19.0762 11.5176 19.3223 12.001 19.3223C12.7041 19.3223 13.1436 18.8389 13.1436 18.0479V2.70215C13.1436 0.953125 12.2295 0.0302734 10.498 0.0302734H3.49316C1.76172 0.0302734 0.847656 0.953125 0.847656 2.70215V18.0479C0.847656 18.8389 1.28711 19.3223 1.99902 19.3223Z" fill="#eee"/>
    </svg>

    </div>
  )
    )
}
</div>
)

}





