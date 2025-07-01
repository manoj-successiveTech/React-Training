import { useState, useRef, useEffect } from 'react';

function useTimer(initialSeconds = 10) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  // Start the countdown
  const start = () => {
    if (!isRunning && seconds > 0) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  // Pause the countdown
  const pause = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  // Reset the timer
  const reset = () => {
    clearInterval(timerRef.current);
    setSeconds(initialSeconds);
    setIsRunning(false);
  };

  // Clean up when component unmounts
  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return { seconds, isRunning, start, pause, reset };
}

export default useTimer;
