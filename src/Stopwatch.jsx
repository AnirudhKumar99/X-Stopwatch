import { useState } from "react";

export const Stopwatch = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    if(isRunning)
        return;
    const clock=setInterval(()=>{
        setSeconds((prev)=>{
            if(prev===59){
                setMinutes(prevMin=>prevMin+1);
                return 0;
            }
            return prev+1;
        })
    },1000)
    setTimer(clock);
    setIsRunning(true)
  };
  const stopTimer = () => {
    if (timer) clearInterval(timer);
    setTimer(null);
    setIsRunning(false)
  };
  const resetTimer = () => {
    stopTimer();
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>
        Time: {minutes}:{seconds < 10 ? "0" + seconds : String(seconds)}{" "}
      </p>
      {isRunning ? (
        <button onClick={stopTimer}>stop</button>
      ) : (
        <button onClick={startTimer}>start</button>
      )}
      <button onClick={resetTimer}>reset</button>
    </div>
  );
};
