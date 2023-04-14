import { useState, useEffect, useRef } from "react";

function DateAndTimer() {
  const date = new Date();
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = 0;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="dateTime">
      <h2>{date.toLocaleDateString()}</h2>
      <h3>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        {/* minute */}
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        {/* sekunde */}
        <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
        {/* milisekunde */}
      </h3>
      <div>
        <button className="time-btn" onClick={() => setTimerOn(true)}>
          {/* start timer */}
          <img src="src\assets\play_button.png" className="time-img" />
        </button>
        <button className="time-btn" onClick={() => setTimerOn(false)}>
          {/*pause timer */}
          <img src="src\assets\pause_button.png" className="time-img" />
        </button>
        <button className="time-btn" onClick={() => setTime(0)}>
          {/* reset timer*/}
          <img src="src\assets\refresh_button.png" className="time-img" />
        </button>
      </div>
    </div>
  );
}

export default DateAndTimer;
