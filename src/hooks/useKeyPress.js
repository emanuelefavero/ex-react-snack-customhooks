import { useEffect, useState } from 'react';

export const useKeyPress = key => {
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = e => e.key === key && setIsKeyPressed(true);
    const handleKeyUp = e => e.key === key && setIsKeyPressed(false);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [key]);

  return isKeyPressed;
};
