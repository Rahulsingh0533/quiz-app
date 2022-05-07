import React, { useContext } from "react";
import Questions from "./components/Questions";
import { quizContext } from "./context/QuizProvider";

function App() {
  const [quizState, dispatch] = useContext(quizContext);
  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congrats">Congratulations!</div>
          <div className="result-info">
            <div>You have successfully completed the quiz</div>
            <div>
              You have got {quizState.correctAnswerCount} of
              {quizState.data.length} right.
            </div>
            <div>
              <button
                className="restart-button"
                onClick={() => dispatch({ type: "RESTART" })}
              >
                Restart Quiz
              </button>
            </div>
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <div className="score">
            Questions : {quizState.currentQuestionIndex + 1}/
            {quizState.data.length}
          </div>
          <Questions />
          <div
            className="next_button"
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          >
            Next Question
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
