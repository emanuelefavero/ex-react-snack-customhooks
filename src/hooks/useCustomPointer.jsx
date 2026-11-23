import { useEffect } from 'react';
import { useMousePosition } from './useMousePosition';

export const useCustomPointer = pointer => {
  const { x, y } = useMousePosition();

  useEffect(() => {
    document.documentElement.classList.add('custom-pointer');
    return () => document.documentElement.classList.remove('custom-pointer');
  }, []);

  return (
    <div
      aria-hidden='true'
      style={{
        position: 'fixed',
        left: x,
        top: y,
        pointerEvents: 'none',
      }}
    >
      {pointer}
    </div>
  );
};
