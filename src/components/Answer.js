import React from "react";

const Answer = ({
  ans,
  index,
  onSelectAnswer,
  currentAnswer,
  correctAnswer,
}) => {
  let letters = ["A", "B", "C", "D"];
  const isCorrectAnswer = currentAnswer && ans === correctAnswer;
  const isWrongAnswer =
    currentAnswer === ans && currentAnswer !== correctAnswer;

  const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";
  const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
  const disabledClass = currentAnswer ? "disable-answer" : "";

  return (
    <div
      className={` answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
      onClick={() => onSelectAnswer(ans)}
    >
      <div className="answer-letters">{letters[index]}</div>
      <div className="answer-text">{ans}</div>
    </div>
  );
};

export default Answer;
