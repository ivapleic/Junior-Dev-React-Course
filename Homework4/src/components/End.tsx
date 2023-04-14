import "../styles/End.css";

function End(props: any) {
  function handlePlayAgain() {
    props.onPlayAgain();
  } 

  return (
    <div className="end">
      <h1>End of quiz!</h1>
      <p>
        You got {props.correctAnswersCount} correct out of total{" "}
        {props.numQuestions} questions!
      </p>
      <button onClick={handlePlayAgain}>Play again</button>
    </div>
  );
}

export default End;
