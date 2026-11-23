import { useEffect, useState } from 'react';

export const useDate = () => {
  const [currentDate, setCurrentDate] = useState(() => new Date());
  // ? Passing a callback to useState ensures the initial Date object is only created once, not on every render

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return currentDate;
};
