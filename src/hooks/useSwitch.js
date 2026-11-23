import { useState } from 'react';

export const useSwitch = (initialState = false) => {
  const [isOn, setIsOn] = useState(initialState);

  const toggle = () => setIsOn(prev => !prev);

  return [isOn, toggle];
};
