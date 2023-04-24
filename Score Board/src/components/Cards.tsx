import { useState } from "react";

function Cards(props:any) {
  const [redCard, setRedCard] = useState(0);
  const [yellowCard, setYellowCard] = useState(0);

  return (
    <div className="cards">
      <p>{props.clubName}</p>
      <div className="card">
        <button className="btn-card" onClick={() => setRedCard(redCard + 1)}>
          <img src="src\assets\red.png" />
        </button>
        <p>{redCard}</p>
      </div>
      <div className="card">
        <button className="btn-card" onClick={() => setYellowCard(yellowCard + 1)}>
          <img src="src\assets\yellow-card.png" />
        </button>
        <p>{yellowCard}</p>
      </div>
      <button onClick={() => {
          setRedCard(0);
          setYellowCard(0);
        }}
        className="btn-card" >Reset</button>
    </div>
  );
}
export default Cards;
