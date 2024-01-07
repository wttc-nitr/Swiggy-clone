import { useState, useEffect } from 'react';

const useCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(x => x+1);
    }, 1000);

    return () => {
      console.log('unmounted');
      clearInterval(timer);
    }
  }, []);

  return count;
}

export default useCounter;