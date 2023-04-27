import { useState, useRef } from "react";

const Timer = () => {
  const [timerCount, setTimerCount] = useState(0);
  const [id, setId] = useState(0);

  // const startTimer = () => {
  //   let idd = setInterval(() => {
  //     setTimerCount((prevCount) => prevCount + 1);
  //   }, 1000);
  //   setId(idd);
  // };

  const tId = useRef(null);

  const startTimer = () => {
    tId.current = setInterval(() => {
      setTimerCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(tId.current);
  };

  console.log(timerCount);
  return (
    <div style={{ margin: " 3rem 8rem", textAlign: "center" }}>
      <h1>Timer App</h1>
      <button onClick={startTimer} style={{ marginTop: "1rem" }}>
        Start
      </button>
      <p style={{ margin: "2rem 0" }}>{timerCount}</p>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
};
export default Timer;
