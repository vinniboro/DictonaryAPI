import React, { useState, useEffect, useRef } from "react";
import Explanation from "./Explanation";
import ProgressBar from "./ProgressBar";
import ResetQuiz from "./ResetQuiz";
import {ShowScore} from "./ShowScore";
import { ShowQuizSummary } from "./ShowQuizSummary";

interface AnswerOption {
    answerText: string;
    isCorrect: boolean;
    explanation?: string;
  }

  interface Question {
    questionText: string;
    answerOptions: AnswerOption[];
  }

  interface QuizProps {
      questions: Question[];
  }


const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [notCorrect, setIsNotCorrect] = useState(false);
  const [showNextQuestion, setShowNextQuestion] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef<number | null>(null);
  const [bookmarked, setBookmarked] = useState<string[]>([]);

  const handleAnswerButtonClick = (isCorrect: boolean) => {
    setShowAnswer(true);
    if (isCorrect) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setIsNotCorrect(true);
    }
  };

  useEffect(() => {
    if (showAnswer) {
      // Scroll to the bottom of the page with animation
      const scrollToBottom = () => {
        const currentPosition = window.scrollY;
        const targetPosition = document.body.scrollHeight;
        const distance = targetPosition - currentPosition;
        const duration = 1500; // Set the duration of the animation (in milliseconds)
        const startTime = performance.now();

        const animateScroll = (currentTime: number) => {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

          window.scrollTo(0, currentPosition + easeInOutQuad(progress) * distance);

          if (elapsedTime < duration) {
            requestAnimationFrame(animateScroll);
          }
        };

        requestAnimationFrame(animateScroll);
      };

      scrollToBottom();
    }
  }, [showAnswer]);

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;

    // Reset showAnswer to false when moving to the next question
    setShowAnswer(false);
    setIsCorrect(false);
    setIsNotCorrect(false);

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setShowNextQuestion(false);
    } else {
      setShowScore(true);
    }
  };

  const progress = currentQuestion / questions.length;



  useEffect(() => {
    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalRef.current!);
    };
  }, []);

  function handleStartTimer() {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }

    setStartTime(Date.now());
    setNow(Date.now());

    intervalRef.current = window.setInterval(() => {
      setNow(Date.now());
    }, 1000); // Set the interval to 1000 milliseconds (1 second) for proper incrementing
  }

  const handleBookmark = () => {
    // Assuming currentQuestion is the index of the current question you want to bookmark
    const newBookmark = questions[currentQuestion]?.questionText.toString();

    if (newBookmark && !bookmarked.includes(newBookmark)) {
      setBookmarked((prevBookmarked) => [...prevBookmarked, newBookmark]);
    }
  };

  useEffect(() => {
    if (showScore) {
      clearInterval(intervalRef.current!);
    }
  }, [showScore]);

  let minutes = 0;
  let seconds = 0;

  if (startTime !== null && now !== null) {
    const secondsPassed = Math.floor((now - startTime) / 1000);
    minutes = Math.floor(secondsPassed / 60);
    seconds = secondsPassed % 60;
  }



  return (
    <div className="contain-page">
      {!startTime ? (
        <div className="landing-page">
        <h2 style={{width:'80%'}}>Play our 10 question quiz with words curated by our team of Eloquents</h2>
        <button className="btn-Tertiary" onClick={handleStartTimer}>Start</button>
        </div>
      ) : (
        <div  className="contain-components">
          <div  style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}} >
            <div >
              <h4>
                {minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}
              </h4>
              </div>
            <div className="question-count">
              <h4>
                {currentQuestion + 1}/{questions.length}
              </h4>
          </div>
      </div>
          {showScore ? (
            <div id="showScore" >
                <ShowScore  score={score} questions={questions.length}/>
                <ShowQuizSummary  questions={questions}/>
                   <ResetQuiz
                           setCurrentQuestion={setCurrentQuestion}
                           setShowScore={setShowScore}
                           setScore={setScore}
                           setShowAnswer={setShowAnswer}  
                           setIsCorrect={setIsCorrect}
                           setIsNotCorrect={setIsNotCorrect}
                           handleStartTimer={handleStartTimer}
                           />
              </div>
          ) : (
            <>
              <ProgressBar progress={progress} />

              <div className="question-section">

        <div style={{border:'none'}} className="card">
          <div style={{textAlign:'center'}}>
              {questions[currentQuestion].questionText.includes("png") ? (
                <img src={`/src/${questions[currentQuestion].questionText}`} alt="Question" />
              ) : (

                <>
                  <h1>{questions[currentQuestion].questionText}</h1>
                  <div
                    style={{
                        backgroundColor: bookmarked.includes(questions[currentQuestion]?.questionText.toString())
                        ? 'orange'
                        : '#666', // Use 'initial' or another default color when not bookmarked
                    }}
                    onClick={handleBookmark}
                    id="bookmark"
                    >   
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 20" fill="none">
                        <path d="M1.99902 19.3223C2.47363 19.3223 2.78125 19.0762 3.52832 18.3467L6.9209 14.9893C6.95605 14.9453 7.03516 14.9453 7.07031 14.9893L10.4717 18.3467C11.2188 19.0762 11.5176 19.3223 12.001 19.3223C12.7041 19.3223 13.1436 18.8389 13.1436 18.0479V2.70215C13.1436 0.953125 12.2295 0.0302734 10.498 0.0302734H3.49316C1.76172 0.0302734 0.847656 0.953125 0.847656 2.70215V18.0479C0.847656 18.8389 1.28711 19.3223 1.99902 19.3223Z" fill="#eee"/>
                      </svg>
                  </div>
                </>
            )}
          </div>


          {showAnswer ? (
            <div>
              <div>
                <Explanation questions={questions} currentQuestion={currentQuestion} />
              </div>
            </div>
          ) : (
            ""
          )}
    </div>
</div>

    <div className="answer-section">
      {questions[currentQuestion].answerOptions.map((answerOption, index) => (
        <button
        style={{ backgroundColor: answerOption.isCorrect && showAnswer ? "#1DB954" : "" }}
        className="answer-btn"
          disabled={showAnswer}
          onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
        >
          {answerOption.answerText}
        </button>
      ))}
    </div>

      </>
          )}
          {showAnswer ?
          (<button
            id="btn-next"
            onClick={handleNext}
            disabled={!showAnswer}
            style={{ backgroundColor: isCorrect && !notCorrect ? "#1DB954" : "red" }}
        >
            Next
        </button>)
        : ""
          }        
</div>
      )}

            </div>
    
  );
};

export default Quiz;
