import { Button } from './components/ui/Button';
import { useCustomPointer } from './hooks/useCustomPointer';
import { useDate } from './hooks/useDate';
import { useKeyPress } from './hooks/useKeyPress';
import { useSwitch } from './hooks/useSwitch';
import './App.css';

const Snack1 = () => {
  const [isOn, toggle] = useSwitch();

  return (
    <div>
      <h3>Il valore è: {isOn ? 'ON' : 'OFF'}</h3>
      <Button onClick={toggle}>Cambia Stato</Button>
    </div>
  );
};

const Snack2 = () => {
  const currentDate = useDate();

  return (
    <div>
      <h3>Data e ora attuali:</h3>
      <p>{currentDate.toLocaleString()}</p>
    </div>
  );
};

const Snack3 = () => {
  const customPointer = useCustomPointer('🔥');

  return (
    <div>
      <h3>Sposta il mouse per vedere il cursore personalizzato!</h3>
      {customPointer}
    </div>
  );
};

const Bonus = () => {
  const isEnterPressed = useKeyPress('Enter');

  return (
    <div>
      <h3>Tieni premuto "Enter" per testare il custom hook</h3>
      <p>{isEnterPressed ? 'Enter premuto! ✅' : 'Aspettando input... ⌨️'}</p>
    </div>
  );
};

export const App = () => {
  return (
    <main className='container'>
      <h1>React Snack Custom Hooks</h1>

      <h2>Snack 1 - useSwitch</h2>
      <Snack1 />

      <h2>Snack 2 - useDate</h2>
      <Snack2 />

      <h2>Snack 3 - useCustomPointer</h2>
      <Snack3 />

      <h2>Bonus - useKeyPress</h2>
      <Bonus />
    </main>
  );
};
