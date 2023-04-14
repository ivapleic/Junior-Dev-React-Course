import { useState, useEffect } from "react";
import End from "./End";
import '../styles/Quiz.css';

interface Question {
  category: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface QuizProps {
  selectedCategory: number;
  selectedDifficulty: string;
  numQuestions: number;
  handleEndQuiz: (score: number, totalQuestions: number) => void;
}

function Quiz(props: QuizProps) {

  const { selectedCategory, selectedDifficulty, numQuestions, handleEndQuiz } = props;

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchQuestions() {
      const url = `https://opentdb.com/api.php?amount=${numQuestions}&category=${selectedCategory}&difficulty=${selectedDifficulty}&type=multiple`;
      const response = await fetch(url);
      const data = await response.json();
      setQuestions(data.results);
      setLoading(false);
    }
    fetchQuestions();
  }, [selectedCategory, selectedDifficulty, numQuestions]);

  function renderAnswers() {
    const currentQuestion = questions[currentQuestionIndex];
    const answers = currentQuestion.incorrect_answers //da nije uvik na istom mistu tocan odgovor
      .concat(currentQuestion.correct_answer)
      .sort();

    return answers.map((answer: any) => (
      <button
        key={answer}
        className="answer"
        data-answer={answer}
        onClick={() => handleAnswerClick(answer)} >
        {answer}
      </button>
    ));
  }

  function handleAnswerClick(answer: string) {
    const currentQuestion = questions[currentQuestionIndex];
  
    if (answer === currentQuestion.correct_answer) {
      setCorrectAnswersCount(correctAnswersCount + 1);
    }
  
    const answerButtons = document.querySelectorAll('.answer');
    answerButtons.forEach(button => {
      const buttonAnswer = button.getAttribute('data-answer');
      if (buttonAnswer === currentQuestion.correct_answer) {
        button.classList.add('correct');
      } else if (buttonAnswer === answer) {
        button.classList.add('incorrect');
      }
    });
  
    setTimeout(() => {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }, 1000);
  }
  
  function renderQuiz() {
    if (loading) {
      return <p>Loading questions...</p>;
    }
    if (currentQuestionIndex < questions.length) {
      return (
        <div>
          <div className="questions-answers">
            <div className="question">
              <p>{questions[currentQuestionIndex].question}</p>
            </div>
            <div className="answers">{renderAnswers()}</div>
          </div>
          <div className="statistic">
            <div className="statistic-div">
              <p>QUESTION</p>
              <p>
                {currentQuestionIndex+1}/{numQuestions}
              </p>
            </div>
            <div className="statistic-div">
              <p>RESULT</p>
              <p>
                {correctAnswersCount}
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      handleEndQuiz(correctAnswersCount, numQuestions);
      return (
        <End
          correctAnswersCount={correctAnswersCount}
          numQuestions={numQuestions}
        />
      );
    }
  }

  return (
    <div className="quiz">
      <h1>Quiz App</h1>
      {renderQuiz()}
    </div>
  );

}

export default Quiz;
