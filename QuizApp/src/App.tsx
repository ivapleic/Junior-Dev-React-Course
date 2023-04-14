import "./App.css";
import { useState } from "react";
import Quiz from "./components/Quiz";
import Settings from './components/Settings';
import End from './components/End';

function App() {
  const [page, setPage] = useState("settings");
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [numQuestions, setNumQuestions] = useState(1);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  function handleStartQuiz(category: number, difficulty: string, numQuestions: number) {
    setSelectedCategory(category);
    setSelectedDifficulty(difficulty);
    setNumQuestions(numQuestions);
    setPage("quiz");
  }

  function handleEndQuiz(correctAnswersCount: number) {
    setPage("end");
    setCorrectAnswersCount(correctAnswersCount);
  }

  function handlePlayAgain() {
    setPage("settings");
  }

  return (
    <div className="app">
      {page === "settings" && (
        <Settings
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedDifficulty={selectedDifficulty}
          setSelectedDifficulty={setSelectedDifficulty}
          numQuestions={numQuestions}
          setNumQuestions={setNumQuestions}
          onStartQuiz={handleStartQuiz}
        />
      )}
      {page === "quiz" && (
        <Quiz
          selectedCategory={selectedCategory}
          selectedDifficulty={selectedDifficulty}
          numQuestions={numQuestions}
          handleEndQuiz={handleEndQuiz}
        />
      )}
      {page === "end" && (
        <End
          onPlayAgain={handlePlayAgain}
          correctAnswersCount={correctAnswersCount}
          numQuestions={numQuestions}
        />
      )}
    </div>
  );
}

export default App;
