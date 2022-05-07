import { createContext, useReducer } from "react";
import data from "../data";
import shufflefunction from "../shufflefun";
export const quizContext = createContext();

const initial = {
  data,
  currentQuestionIndex: 0,
  showResults: false,
  correctAnswerCount: 0,
  currentAnswer: "",
  answers: shufflefunction(data[0]),
};
// console.log(initial);

const reducer = (state, action) => {
  console.log(reducer, state, action);
  switch (action.type) {
    case "NEXT_QUESTION": {
      const showResults = state.currentQuestionIndex === state.data.length - 1;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResults
        ? []
        : shufflefunction(state.data[currentQuestionIndex]);
      return {
        ...state,
        currentQuestionIndex,
        showResults,
        currentAnswer: "",
        answers,
      };
    }

    case "SELECT_ANSWER": {
      const correctAnswerCount =
        action.payload === state.data[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswerCount + 1
          : state.correctAnswerCount;

      return { ...state, currentAnswer: action.payload, correctAnswerCount };
    }

    case "RESTART": {
      return initial;
    }
    default:
      return state;
  }
};

const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initial);
  console.log(value);

  return <quizContext.Provider value={value}>{children}</quizContext.Provider>;
};

export default QuizProvider;
