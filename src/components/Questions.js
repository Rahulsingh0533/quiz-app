import React, { useContext } from "react";
import { quizContext } from "../context/QuizProvider";
import Answer from "./Answer";
const Questions = () => {
  const [quizState, dispatch] = useContext(quizContext);
  let currentQuestion = quizState.data[quizState.currentQuestionIndex];
  const onSelectAnswer = (answerText) => {
    dispatch({ type: "SELECT_ANSWER", payload: answerText });
  };
  console.log(quizState);
  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
      <div className="answers">
        {quizState.answers.map((ans, index) => {
          return (
            <Answer
              ans={ans}
              key={index}
              index={index}
              onSelectAnswer={onSelectAnswer}
              correctAnswer={currentQuestion.correctAnswer}
              currentAnswer={quizState.currentAnswer}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
