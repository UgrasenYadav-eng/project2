import React, { useState, useEffect } from 'react';
import './WatchAndStopwatch.css';

function WatchAndStopwatch() {
  const [time, setTime] = useState(new Date());
  const [stopwatchTime, setStopwatchTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let stopwatchTimer;
    if (isRunning) {
      stopwatchTimer = setInterval(() => setStopwatchTime(prevTime => prevTime + 1), 1000);
    }
    return () => clearInterval(stopwatchTimer);
  }, [isRunning]);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setStopwatchTime(0);
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="watch-stopwatch-container">
      <div className="watch">
        <h2>Current Time</h2>
        <p>{time.toLocaleTimeString()}</p>
        <h3>{time.toLocaleDateString()}</h3>
      </div>
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <p>{formatTime(stopwatchTime)}</p>
        <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default WatchAndStopwatch;