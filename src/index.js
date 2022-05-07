import React from "react";
import ReactDOM from "react-dom/client";
import "./app.css";
import App from "./App";
import QuizProvider from "./context/QuizProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <QuizProvider>
      <App />
    </QuizProvider>
  </>
);
