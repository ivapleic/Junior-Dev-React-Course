import { useState } from "react";
import "./App.css";
import TeamInfo from "./components/TeamInfo";
import Scores from "./components/Scores";
import Buttons from "./components/Buttons";
import DateAndTimer from "./components/DateAndTimer";
import Cards from "./components/Cards";

function App() {
  let team1 = "PSG";
  let team2 = "Chelsea";
  
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  function reduceFirst() {
    if (score1 != 0) {
      setScore1(score1 - 1);
    }
  }
  function reduceSecond() {
    if (score2 != 0) {
      setScore2(score2 - 1);
    }
  }
  function reset() {
    setScore1(0);
    setScore2(0);
  }

  return (
    <div className="window">
      <Cards clubName={team1} />
      <div className="mainCard">
        <DateAndTimer />
        <div className="teamsAndScores">
          <TeamInfo clubName={team1} />
          <Scores score1={score1} score2={score2} />
          <TeamInfo clubName={team2} />
        </div>
        <div className="changeScores">
          <div className="team">
            <Buttons sign="+" action={() => setScore1(score1 + 1)} />
            <Buttons sign="-" action={reduceFirst} />
          </div>
          <div className="team">
            <Buttons sign="+" action={() => setScore2(score2 + 1)} />
            <Buttons sign="-" action={reduceSecond} />
          </div>
        </div>
        <div>
          <Buttons sign="Reset" action={reset} />
        </div>
      </div>
      <Cards clubName={team2} />
    </div>
  );
}

export default App;
