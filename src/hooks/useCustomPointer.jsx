import { useEffect } from 'react';
import { useMousePosition } from './useMousePosition';

export const useCustomPointer = component => {
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
        translate: '-50% -50%',
        pointerEvents: 'none', // Disable if cursor: 'none' is used below
        // cursor: 'none', // Glitchy on Mac OS, prefer CSS class above
      }}
    >
      {component}
    </div>
  );
};
