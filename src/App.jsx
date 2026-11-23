import { Button } from './components/ui/Button';
import { useCustomPointer } from './hooks/useCustomPointer';
import { useDate } from './hooks/useDate';
import { useSwitch } from './hooks/useSwitch';
import './App.css';

const Snack1 = () => {
  const [isOn, toggle] = useSwitch();

  return (
    <div>
      <h2>Il valore è: {isOn ? 'ON' : 'OFF'}</h2>
      <Button onClick={toggle}>Cambia Stato</Button>
    </div>
  );
};

const Snack2 = () => {
  const currentDate = useDate();

  return (
    <div>
      <h2>Data e ora attuali:</h2>
      <p>{currentDate.toLocaleString()}</p>
    </div>
  );
};

const Snack3 = () => {
  const customPointer = useCustomPointer('🔥');

  return (
    <div>
      <h2>Sposta il mouse per vedere il cursore personalizzato!</h2>
      {customPointer}
    </div>
  );
};

export const App = () => {
  return (
    <main className='container'>
      <h1>React Snack Custom Hooks</h1>

      <Snack1 />
      <Snack2 />
      <Snack3 />
    </main>
  );
};
