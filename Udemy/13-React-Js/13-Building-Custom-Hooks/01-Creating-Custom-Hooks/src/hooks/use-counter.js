import { useState, useEffect } from "react";

const useCounter = (cnt) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + cnt);
    }, 1000);

    return () => clearInterval(interval);
  }, [cnt]);

  return counter;
};

export default useCounter;
