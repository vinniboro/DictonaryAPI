import React from "react"

interface ShowScoreProps{
    score: number;
    questions: number;
}

export const ShowScore: React.FC<ShowScoreProps> = ({questions, score}) => {

return (
    <>    <h2>Quiz Summary</h2>
      <div className="score-section">
          <h2><span>{score}</span> / <span>{questions}</span></h2>
      </div>
      </>
)

}

